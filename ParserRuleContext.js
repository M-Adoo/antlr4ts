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
// ConvertTo-TS run at 2016-10-04T11:26:56.6285494-07:00
import { ErrorNode } from "./tree/ErrorNode";
import { Interval } from "./misc/Interval";
import { Override } from "./Decorators";
import { RuleContext } from "./RuleContext";
import { TerminalNode } from "./tree/TerminalNode";
/** A rule invocation record for parsing.
 *
 *  Contains all of the information about the current rule not stored in the
 *  RuleContext. It handles parse tree children list, Any ATN state
 *  tracing, and the default values available for rule invocations:
 *  start, stop, rule index, current alt number.
 *
 *  Subclasses made for each rule and grammar track the parameters,
 *  return values, locals, and labels specific to that rule. These
 *  are the objects that are returned from rules.
 *
 *  Note text is not an actual field of a rule return value; it is computed
 *  from start and stop using the input stream's toString() method.  I
 *  could add a ctor to this so that we can pass in and store the input
 *  stream, but I'm not sure we want to do that.  It would seem to be undefined
 *  to get the .text property anyway if the rule matches tokens from multiple
 *  input streams.
 *
 *  I do not use getters for fields of objects that are used simply to
 *  group values such as this aggregate.  The getters/setters are there to
 *  satisfy the superclass interface.
 */
var ParserRuleContext = /** @class */ (function (_super) {
    __extends(ParserRuleContext, _super);
    function ParserRuleContext(parent, invokingStateNumber) {
        var _this = this;
        if (invokingStateNumber == null) {
            _this = _super.call(this) || this;
        }
        else {
            _this = _super.call(this, parent, invokingStateNumber) || this;
        }
        return _this;
    }
    ParserRuleContext.emptyContext = function () {
        return ParserRuleContext.EMPTY;
    };
    /**
     * COPY a ctx (I'm deliberately not using copy constructor) to avoid
     * confusion with creating node with parent. Does not copy children.
     *
     * This is used in the generated parser code to flip a generic XContext
     * node for rule X to a YContext for alt label Y. In that sense, it is not
     * really a generic copy function.
     *
     * If we do an error sync() at start of a rule, we might add error nodes
     * to the generic XContext so this function must copy those nodes to the
     * YContext as well else they are lost!
     */
    ParserRuleContext.prototype.copyFrom = function (ctx) {
        this._parent = ctx._parent;
        this.invokingState = ctx.invokingState;
        this._start = ctx._start;
        this._stop = ctx._stop;
        // copy any error nodes to alt label node
        if (ctx.children) {
            this.children = [];
            try {
                // reset parent pointer for any error nodes
                for (var _a = __values(ctx.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var child = _b.value;
                    if (child instanceof ErrorNode) {
                        this.children.push(child);
                        child._parent = this;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var e_1, _c;
    };
    // Double dispatch methods for listeners
    ParserRuleContext.prototype.enterRule = function (listener) {
        // intentionally empty
    };
    ParserRuleContext.prototype.exitRule = function (listener) {
        // intentionally empty
    };
    ParserRuleContext.prototype.addChild = function (t) {
        var result;
        if (t instanceof TerminalNode) {
            // Does not set parent link
        }
        else if (t instanceof RuleContext) {
            // Does not set parent link
        }
        else {
            t = new TerminalNode(t);
            t._parent = this;
            result = t;
        }
        if (!this.children) {
            this.children = [t];
        }
        else {
            this.children.push(t);
        }
        return result;
    };
    /** Used by enterOuterAlt to toss out a RuleContext previously added as
     *  we entered a rule. If we have # label, we will need to remove
     *  generic ruleContext object.
     */
    ParserRuleContext.prototype.removeLastChild = function () {
        if (this.children) {
            this.children.pop();
        }
    };
    //	public void trace(int s) {
    //		if ( states==null ) states = new ArrayList<Integer>();
    //		states.add(s);
    //	}
    ParserRuleContext.prototype.addErrorNode = function (badToken) {
        var t = new ErrorNode(badToken);
        this.addChild(t);
        t._parent = this;
        return t;
    };
    Object.defineProperty(ParserRuleContext.prototype, "parent", {
        get: function () {
            var parent = this._parent;
            if (parent === undefined || parent instanceof ParserRuleContext) {
                return parent;
            }
            throw new TypeError("Invalid parent type for ParserRuleContext");
        },
        enumerable: true,
        configurable: true
    });
    // Note: in TypeScript, order or arguments reversed
    ParserRuleContext.prototype.getChild = function (i, ctxType) {
        if (!this.children || i < 0 || i >= this.children.length) {
            throw new RangeError("index parameter must be between >= 0 and <= number of children.");
        }
        if (ctxType == null) {
            return this.children[i];
        }
        var result = this.tryGetChild(i, ctxType);
        if (result === undefined) {
            throw new Error("The specified node does not exist");
        }
        return result;
    };
    ParserRuleContext.prototype.tryGetChild = function (i, ctxType) {
        if (!this.children || i < 0 || i >= this.children.length) {
            return undefined;
        }
        var j = -1; // what node with ctxType have we found?
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var o = _b.value;
                if (o instanceof ctxType) {
                    j++;
                    if (j === i) {
                        return o;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
        var e_2, _c;
    };
    ParserRuleContext.prototype.getToken = function (ttype, i) {
        var result = this.tryGetToken(ttype, i);
        if (result === undefined) {
            throw new Error("The specified token does not exist");
        }
        return result;
    };
    ParserRuleContext.prototype.tryGetToken = function (ttype, i) {
        if (!this.children || i < 0 || i >= this.children.length) {
            return undefined;
        }
        var j = -1; // what token with ttype have we found?
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var o = _b.value;
                if (o instanceof TerminalNode) {
                    var symbol = o.symbol;
                    if (symbol.type === ttype) {
                        j++;
                        if (j === i) {
                            return o;
                        }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return undefined;
        var e_3, _c;
    };
    ParserRuleContext.prototype.getTokens = function (ttype) {
        var tokens = [];
        if (!this.children) {
            return tokens;
        }
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var o = _b.value;
                if (o instanceof TerminalNode) {
                    var symbol = o.symbol;
                    if (symbol.type === ttype) {
                        tokens.push(o);
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return tokens;
        var e_4, _c;
    };
    Object.defineProperty(ParserRuleContext.prototype, "ruleContext", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    // NOTE: argument order change from Java version
    ParserRuleContext.prototype.getRuleContext = function (i, ctxType) {
        return this.getChild(i, ctxType);
    };
    ParserRuleContext.prototype.tryGetRuleContext = function (i, ctxType) {
        return this.tryGetChild(i, ctxType);
    };
    ParserRuleContext.prototype.getRuleContexts = function (ctxType) {
        var contexts = [];
        if (!this.children) {
            return contexts;
        }
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var o = _b.value;
                if (o instanceof ctxType) {
                    contexts.push(o);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return contexts;
        var e_5, _c;
    };
    Object.defineProperty(ParserRuleContext.prototype, "childCount", {
        get: function () {
            return this.children ? this.children.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "sourceInterval", {
        get: function () {
            if (!this._start) {
                return Interval.INVALID;
            }
            if (!this._stop || this._stop.tokenIndex < this._start.tokenIndex) {
                return Interval.of(this._start.tokenIndex, this._start.tokenIndex - 1); // empty
            }
            return Interval.of(this._start.tokenIndex, this._stop.tokenIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "start", {
        /**
         * Get the initial token in this context.
         * Note that the range from start to stop is inclusive, so for rules that do not consume anything
         * (for example, zero length or error productions) this token may exceed stop.
         */
        get: function () { return this._start; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "stop", {
        /**
         * Get the final token in this context.
         * Note that the range from start to stop is inclusive, so for rules that do not consume anything
         * (for example, zero length or error productions) this token may precede start.
         */
        get: function () { return this._stop; },
        enumerable: true,
        configurable: true
    });
    /** Used for rule context info debugging during parse-time, not so much for ATN debugging */
    ParserRuleContext.prototype.toInfoString = function (recognizer) {
        var rules = recognizer.getRuleInvocationStack(this).reverse();
        return "ParserRuleContext" + rules + "{" +
            "start=" + this._start +
            ", stop=" + this._stop +
            "}";
    };
    ParserRuleContext.EMPTY = new ParserRuleContext();
    __decorate([
        Override
        /** Override to make type more specific */
    ], ParserRuleContext.prototype, "parent", null);
    __decorate([
        Override
    ], ParserRuleContext.prototype, "childCount", null);
    __decorate([
        Override
    ], ParserRuleContext.prototype, "sourceInterval", null);
    return ParserRuleContext;
}(RuleContext));
export { ParserRuleContext };
//# sourceMappingURL=ParserRuleContext.js.map