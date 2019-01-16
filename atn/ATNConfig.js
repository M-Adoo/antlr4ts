/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
// ConvertTo-TS run at 2016-10-04T11:26:25.2796692-07:00
import { Array2DHashMap } from "../misc/Array2DHashMap";
import { DecisionState } from "./DecisionState";
import { MurmurHash } from "../misc/MurmurHash";
import { NotNull, Override } from "../Decorators";
import { ObjectEqualityComparator } from "../misc/ObjectEqualityComparator";
import { PredictionContext } from "./PredictionContext";
import { SemanticContext } from "./SemanticContext";
// import * as assert from "assert";
/**
 * This field stores the bit mask for implementing the
 * {@link #isPrecedenceFilterSuppressed} property as a bit within the
 * existing {@link #altAndOuterContextDepth} field.
 */
var SUPPRESS_PRECEDENCE_FILTER = 0x80000000;
/**
 * Represents a location with context in an ATN. The location is identified by the following values:
 *
 * * The current ATN state
 * * The predicted alternative
 * * The semantic context which must be true for this configuration to be enabled
 * * The syntactic context, which is represented as a graph-structured stack whose path(s) lead to the root of the rule
 *   invocations leading to this state
 *
 * In addition to these values, `ATNConfig` stores several properties about paths taken to get to the location which
 * were added over time to help with performance, correctness, and/or debugging.
 *
 * * `reachesIntoOuterContext`:: Used to ensure semantic predicates are not evaluated in the wrong context.
 * * `hasPassedThroughNonGreedyDecision`: Used for enabling first-match-wins instead of longest-match-wins after
 *   crossing a non-greedy decision.
 * * `lexerActionExecutor`: Used for tracking the lexer action(s) to execute should this instance be selected during
 *   lexing.
 * * `isPrecedenceFilterSuppressed`: A state variable for one of the dynamic disambiguation strategies employed by
 *   `ParserATNSimulator.applyPrecedenceFilter`.
 *
 * Due to the use of a graph-structured stack, a single `ATNConfig` is capable of representing many individual ATN
 * configurations which reached the same location in an ATN by following different paths.
 *
 * PERF: To conserve memory, `ATNConfig` is split into several different concrete types. `ATNConfig` itself stores the
 * minimum amount of information typically used to define an `ATNConfig` instance. Various derived types provide
 * additional storage space for cases where a non-default value is used for some of the object properties. The
 * `ATNConfig.create` and `ATNConfig.transform` methods automatically select the smallest concrete type capable of
 * representing the unique information for any given `ATNConfig`.
 */
var ATNConfig = /** @class */ (function () {
    function ATNConfig(state, altOrConfig, context) {
        if (typeof altOrConfig === "number") {
            // assert((altOrConfig & 0xFFFFFF) === altOrConfig);
            this._state = state;
            this.altAndOuterContextDepth = altOrConfig;
            this._context = context;
        }
        else {
            this._state = state;
            this.altAndOuterContextDepth = altOrConfig.altAndOuterContextDepth;
            this._context = context;
        }
    }
    ATNConfig.create = function (state, alt, context, semanticContext, lexerActionExecutor) {
        if (semanticContext === void 0) { semanticContext = SemanticContext.NONE; }
        if (semanticContext !== SemanticContext.NONE) {
            if (lexerActionExecutor != null) {
                return new ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, alt, context, false);
            }
            else {
                return new SemanticContextATNConfig(semanticContext, state, alt, context);
            }
        }
        else if (lexerActionExecutor != null) {
            return new ActionATNConfig(lexerActionExecutor, state, alt, context, false);
        }
        else {
            return new ATNConfig(state, alt, context);
        }
    };
    Object.defineProperty(ATNConfig.prototype, "state", {
        /** Gets the ATN state associated with this configuration */
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "alt", {
        /** What alt (or lexer rule) is predicted by this configuration */
        get: function () {
            return this.altAndOuterContextDepth & 0x00FFFFFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (context) {
            this._context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "reachesIntoOuterContext", {
        get: function () {
            return this.outerContextDepth !== 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "outerContextDepth", {
        /**
         * We cannot execute predicates dependent upon local context unless
         * we know for sure we are in the correct context. Because there is
         * no way to do this efficiently, we simply cannot evaluate
         * dependent predicates unless we are in the rule that initially
         * invokes the ATN simulator.
         *
         * closure() tracks the depth of how far we dip into the outer context:
         * depth &gt; 0.  Note that it may not be totally accurate depth since I
         * don't ever decrement. TODO: make it a boolean then
         */
        get: function () {
            return (this.altAndOuterContextDepth >>> 24) & 0x7F;
        },
        set: function (outerContextDepth) {
            // assert(outerContextDepth >= 0);
            // saturate at 0x7F - everything but zero/positive is only used for debug information anyway
            outerContextDepth = Math.min(outerContextDepth, 0x7F);
            this.altAndOuterContextDepth = ((outerContextDepth << 24) | (this.altAndOuterContextDepth & ~0x7F000000) >>> 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "lexerActionExecutor", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "semanticContext", {
        get: function () {
            return SemanticContext.NONE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "hasPassedThroughNonGreedyDecision", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ATNConfig.prototype.clone = function () {
        return this.transform(this.state, false);
    };
    ATNConfig.prototype.transform = function (/*@NotNull*/ state, checkNonGreedy, arg2) {
        if (arg2 == null) {
            return this.transformImpl(state, this._context, this.semanticContext, checkNonGreedy, this.lexerActionExecutor);
        }
        else if (arg2 instanceof PredictionContext) {
            return this.transformImpl(state, arg2, this.semanticContext, checkNonGreedy, this.lexerActionExecutor);
        }
        else if (arg2 instanceof SemanticContext) {
            return this.transformImpl(state, this._context, arg2, checkNonGreedy, this.lexerActionExecutor);
        }
        else {
            return this.transformImpl(state, this._context, this.semanticContext, checkNonGreedy, arg2);
        }
    };
    ATNConfig.prototype.transformImpl = function (state, context, semanticContext, checkNonGreedy, lexerActionExecutor) {
        var passedThroughNonGreedy = checkNonGreedy && ATNConfig.checkNonGreedyDecision(this, state);
        if (semanticContext !== SemanticContext.NONE) {
            if (lexerActionExecutor != null || passedThroughNonGreedy) {
                return new ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, this, context, passedThroughNonGreedy);
            }
            else {
                return new SemanticContextATNConfig(semanticContext, state, this, context);
            }
        }
        else if (lexerActionExecutor != null || passedThroughNonGreedy) {
            return new ActionATNConfig(lexerActionExecutor, state, this, context, passedThroughNonGreedy);
        }
        else {
            return new ATNConfig(state, this, context);
        }
    };
    ATNConfig.checkNonGreedyDecision = function (source, target) {
        return source.hasPassedThroughNonGreedyDecision
            || target instanceof DecisionState && target.nonGreedy;
    };
    ATNConfig.prototype.appendContext = function (context, contextCache) {
        if (typeof context === "number") {
            var appendedContext = this.context.appendSingleContext(context, contextCache);
            var result = this.transform(this.state, false, appendedContext);
            return result;
        }
        else {
            var appendedContext = this.context.appendContext(context, contextCache);
            var result = this.transform(this.state, false, appendedContext);
            return result;
        }
    };
    /**
     * Determines if this `ATNConfig` fully contains another `ATNConfig`.
     *
     * An ATN configuration represents a position (including context) in an ATN during parsing. Since `ATNConfig` stores
     * the context as a graph, a single `ATNConfig` instance is capable of representing many ATN configurations which
     * are all in the same "location" but have different contexts. These `ATNConfig` instances are again merged when
     * they are added to an `ATNConfigSet`. This method supports `ATNConfigSet.contains` by evaluating whether a
     * particular `ATNConfig` contains all of the ATN configurations represented by another `ATNConfig`.
     *
     * An `ATNConfig` _a_ contains another `ATNConfig` _b_ if all of the following conditions are met:
     *
     * * The configurations are in the same state (`state`)
     * * The configurations predict the same alternative (`alt`)
     * * The semantic context of _a_ implies the semantic context of _b_ (this method performs a weaker equality check)
     * * Joining the prediction contexts of _a_ and _b_ results in the prediction context of _a_
     *
     * This method implements a conservative approximation of containment. As a result, when this method returns `true`
     * it is known that parsing from `subconfig` can only recognize a subset of the inputs which can be recognized
     * starting at the current `ATNConfig`. However, due to the imprecise evaluation of implication for the semantic
     * contexts, no assumptions can be made about the relationship between the configurations when this method returns
     * `false`.
     *
     * @param subconfig The sub configuration.
     * @returns `true` if this configuration contains `subconfig`; otherwise, `false`.
     */
    ATNConfig.prototype.contains = function (subconfig) {
        if (this.state.stateNumber !== subconfig.state.stateNumber
            || this.alt !== subconfig.alt
            || !this.semanticContext.equals(subconfig.semanticContext)) {
            return false;
        }
        var leftWorkList = [];
        var rightWorkList = [];
        leftWorkList.push(this.context);
        rightWorkList.push(subconfig.context);
        while (true) {
            var left = leftWorkList.pop();
            var right = rightWorkList.pop();
            if (!left || !right) {
                break;
            }
            if (left === right) {
                return true;
            }
            if (left.size < right.size) {
                return false;
            }
            if (right.isEmpty) {
                return left.hasEmpty;
            }
            else {
                for (var i = 0; i < right.size; i++) {
                    var index = left.findReturnState(right.getReturnState(i));
                    if (index < 0) {
                        // assumes invokingStates has no duplicate entries
                        return false;
                    }
                    leftWorkList.push(left.getParent(index));
                    rightWorkList.push(right.getParent(i));
                }
            }
        }
        return false;
    };
    Object.defineProperty(ATNConfig.prototype, "isPrecedenceFilterSuppressed", {
        get: function () {
            return (this.altAndOuterContextDepth & SUPPRESS_PRECEDENCE_FILTER) !== 0;
        },
        set: function (value) {
            if (value) {
                this.altAndOuterContextDepth |= SUPPRESS_PRECEDENCE_FILTER;
            }
            else {
                this.altAndOuterContextDepth &= ~SUPPRESS_PRECEDENCE_FILTER;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** An ATN configuration is equal to another if both have
     *  the same state, they predict the same alternative, and
     *  syntactic/semantic contexts are the same.
     */
    ATNConfig.prototype.equals = function (o) {
        if (this === o) {
            return true;
        }
        else if (!(o instanceof ATNConfig)) {
            return false;
        }
        return this.state.stateNumber === o.state.stateNumber
            && this.alt === o.alt
            && this.reachesIntoOuterContext === o.reachesIntoOuterContext
            && this.context.equals(o.context)
            && this.semanticContext.equals(o.semanticContext)
            && this.isPrecedenceFilterSuppressed === o.isPrecedenceFilterSuppressed
            && this.hasPassedThroughNonGreedyDecision === o.hasPassedThroughNonGreedyDecision
            && ObjectEqualityComparator.INSTANCE.equals(this.lexerActionExecutor, o.lexerActionExecutor);
    };
    ATNConfig.prototype.hashCode = function () {
        var hashCode = MurmurHash.initialize(7);
        hashCode = MurmurHash.update(hashCode, this.state.stateNumber);
        hashCode = MurmurHash.update(hashCode, this.alt);
        hashCode = MurmurHash.update(hashCode, this.reachesIntoOuterContext ? 1 : 0);
        hashCode = MurmurHash.update(hashCode, this.context);
        hashCode = MurmurHash.update(hashCode, this.semanticContext);
        hashCode = MurmurHash.update(hashCode, this.hasPassedThroughNonGreedyDecision ? 1 : 0);
        hashCode = MurmurHash.update(hashCode, this.lexerActionExecutor);
        hashCode = MurmurHash.finish(hashCode, 7);
        return hashCode;
    };
    /**
     * Returns a graphical representation of the current `ATNConfig` in Graphviz format. The graph can be stored to a
     * **.dot** file and then rendered to an image using Graphviz.
     *
     * @returns A Graphviz graph representing the current `ATNConfig`.
     *
     * @see http://www.graphviz.org/
     */
    ATNConfig.prototype.toDotString = function () {
        var builder = "";
        builder += ("digraph G {\n");
        builder += ("rankdir=LR;\n");
        var visited = new Array2DHashMap(PredictionContext.IdentityEqualityComparator.INSTANCE);
        var workList = [];
        function getOrAddContext(context) {
            var newNumber = visited.size;
            var result = visited.putIfAbsent(context, newNumber);
            if (result != null) {
                // Already saw this context
                return result;
            }
            workList.push(context);
            return newNumber;
        }
        workList.push(this.context);
        visited.put(this.context, 0);
        while (true) {
            var current = workList.pop();
            if (!current) {
                break;
            }
            for (var i = 0; i < current.size; i++) {
                builder += ("  s") + (getOrAddContext(current));
                builder += ("->");
                builder += ("s") + (getOrAddContext(current.getParent(i)));
                builder += ("[label=\"") + (current.getReturnState(i)) + ("\"];\n");
            }
        }
        builder += ("}\n");
        return builder.toString();
    };
    ATNConfig.prototype.toString = function (recog, showAlt, showContext) {
        // Must check showContext before showAlt to preserve original overload behavior
        if (showContext == null) {
            showContext = showAlt != null;
        }
        if (showAlt == null) {
            showAlt = true;
        }
        var buf = "";
        // if (this.state.ruleIndex >= 0) {
        // 	if (recog != null) {
        // 		buf += (recog.ruleNames[this.state.ruleIndex] + ":");
        // 	} else {
        // 		buf += (this.state.ruleIndex + ":");
        // 	}
        // }
        var contexts;
        if (showContext) {
            contexts = this.context.toStrings(recog, this.state.stateNumber);
        }
        else {
            contexts = ["?"];
        }
        var first = true;
        try {
            for (var contexts_1 = __values(contexts), contexts_1_1 = contexts_1.next(); !contexts_1_1.done; contexts_1_1 = contexts_1.next()) {
                var contextDesc = contexts_1_1.value;
                if (first) {
                    first = false;
                }
                else {
                    buf += (", ");
                }
                buf += ("(");
                buf += (this.state);
                if (showAlt) {
                    buf += (",");
                    buf += (this.alt);
                }
                if (this.context) {
                    buf += (",");
                    buf += (contextDesc);
                }
                if (this.semanticContext !== SemanticContext.NONE) {
                    buf += (",");
                    buf += (this.semanticContext);
                }
                if (this.reachesIntoOuterContext) {
                    buf += (",up=") + (this.outerContextDepth);
                }
                buf += (")");
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (contexts_1_1 && !contexts_1_1.done && (_a = contexts_1.return)) _a.call(contexts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return buf.toString();
        var e_1, _a;
    };
    __decorate([
        NotNull
    ], ATNConfig.prototype, "_state", void 0);
    __decorate([
        NotNull
    ], ATNConfig.prototype, "_context", void 0);
    __decorate([
        NotNull
    ], ATNConfig.prototype, "state", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ATNConfig.prototype, "context", null);
    __decorate([
        NotNull
    ], ATNConfig.prototype, "semanticContext", null);
    __decorate([
        Override
    ], ATNConfig.prototype, "clone", null);
    __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ATNConfig.prototype, "transformImpl", null);
    __decorate([
        Override
    ], ATNConfig.prototype, "equals", null);
    __decorate([
        Override
    ], ATNConfig.prototype, "hashCode", null);
    __decorate([
        __param(0, NotNull), __param(3, NotNull)
    ], ATNConfig, "create", null);
    ATNConfig = __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ATNConfig);
    return ATNConfig;
}());
export { ATNConfig };
/**
 * This class was derived from `ATNConfig` purely as a memory optimization. It allows for the creation of an `ATNConfig`
 * with a non-default semantic context.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
var SemanticContextATNConfig = /** @class */ (function (_super) {
    __extends(SemanticContextATNConfig, _super);
    function SemanticContextATNConfig(semanticContext, state, altOrConfig, context) {
        var _this = this;
        if (typeof altOrConfig === "number") {
            _this = _super.call(this, state, altOrConfig, context) || this;
        }
        else {
            _this = _super.call(this, state, altOrConfig, context) || this;
        }
        _this._semanticContext = semanticContext;
        return _this;
    }
    Object.defineProperty(SemanticContextATNConfig.prototype, "semanticContext", {
        get: function () {
            return this._semanticContext;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], SemanticContextATNConfig.prototype, "_semanticContext", void 0);
    __decorate([
        Override
    ], SemanticContextATNConfig.prototype, "semanticContext", null);
    SemanticContextATNConfig = __decorate([
        __param(1, NotNull), __param(2, NotNull)
    ], SemanticContextATNConfig);
    return SemanticContextATNConfig;
}(ATNConfig));
/**
 * This class was derived from `ATNConfig` purely as a memory optimization. It allows for the creation of an `ATNConfig`
 * with a lexer action.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
var ActionATNConfig = /** @class */ (function (_super) {
    __extends(ActionATNConfig, _super);
    function ActionATNConfig(lexerActionExecutor, state, altOrConfig, context, passedThroughNonGreedyDecision) {
        var _this = this;
        if (typeof altOrConfig === "number") {
            _this = _super.call(this, state, altOrConfig, context) || this;
        }
        else {
            _this = _super.call(this, state, altOrConfig, context) || this;
            if (altOrConfig.semanticContext !== SemanticContext.NONE) {
                throw new Error("Not supported");
            }
        }
        _this._lexerActionExecutor = lexerActionExecutor;
        _this.passedThroughNonGreedyDecision = passedThroughNonGreedyDecision;
        return _this;
    }
    Object.defineProperty(ActionATNConfig.prototype, "lexerActionExecutor", {
        get: function () {
            return this._lexerActionExecutor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionATNConfig.prototype, "hasPassedThroughNonGreedyDecision", {
        get: function () {
            return this.passedThroughNonGreedyDecision;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], ActionATNConfig.prototype, "lexerActionExecutor", null);
    __decorate([
        Override
    ], ActionATNConfig.prototype, "hasPassedThroughNonGreedyDecision", null);
    ActionATNConfig = __decorate([
        __param(1, NotNull), __param(2, NotNull)
    ], ActionATNConfig);
    return ActionATNConfig;
}(ATNConfig));
/**
 * This class was derived from `SemanticContextATNConfig` purely as a memory optimization. It allows for the creation of
 * an `ATNConfig` with both a lexer action and a non-default semantic context.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
var ActionSemanticContextATNConfig = /** @class */ (function (_super) {
    __extends(ActionSemanticContextATNConfig, _super);
    function ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, altOrConfig, context, passedThroughNonGreedyDecision) {
        var _this = this;
        if (typeof altOrConfig === "number") {
            _this = _super.call(this, semanticContext, state, altOrConfig, context) || this;
        }
        else {
            _this = _super.call(this, semanticContext, state, altOrConfig, context) || this;
        }
        _this._lexerActionExecutor = lexerActionExecutor;
        _this.passedThroughNonGreedyDecision = passedThroughNonGreedyDecision;
        return _this;
    }
    Object.defineProperty(ActionSemanticContextATNConfig.prototype, "lexerActionExecutor", {
        get: function () {
            return this._lexerActionExecutor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionSemanticContextATNConfig.prototype, "hasPassedThroughNonGreedyDecision", {
        get: function () {
            return this.passedThroughNonGreedyDecision;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], ActionSemanticContextATNConfig.prototype, "lexerActionExecutor", null);
    __decorate([
        Override
    ], ActionSemanticContextATNConfig.prototype, "hasPassedThroughNonGreedyDecision", null);
    ActionSemanticContextATNConfig = __decorate([
        __param(1, NotNull), __param(2, NotNull)
    ], ActionSemanticContextATNConfig);
    return ActionSemanticContextATNConfig;
}(SemanticContextATNConfig));
//# sourceMappingURL=ATNConfig.js.map