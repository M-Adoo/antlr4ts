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
// ConvertTo-TS run at 2016-10-04T11:26:53.1043451-07:00
import { Parser } from "./Parser";
import { ParserATNSimulator } from "./atn/ParserATNSimulator";
import { ATNState } from "./atn/ATNState";
import { ATNStateType } from "./atn/ATNStateType";
import { BitSet } from "./misc/BitSet";
import { FailedPredicateException } from "./FailedPredicateException";
import { InputMismatchException } from "./InputMismatchException";
import { InterpreterRuleContext } from "./InterpreterRuleContext";
import { LoopEndState } from "./atn/LoopEndState";
import { NotNull } from "./Decorators";
import { Override } from "./Decorators";
import { RecognitionException } from "./RecognitionException";
import { StarLoopEntryState } from "./atn/StarLoopEntryState";
import { Token } from "./Token";
/** A parser simulator that mimics what ANTLR's generated
 *  parser code does. A ParserATNSimulator is used to make
 *  predictions via adaptivePredict but this class moves a pointer through the
 *  ATN to simulate parsing. ParserATNSimulator just
 *  makes us efficient rather than having to backtrack, for example.
 *
 *  This properly creates parse trees even for left recursive rules.
 *
 *  We rely on the left recursive rule invocation and special predicate
 *  transitions to make left recursive rules work.
 *
 *  See TestParserInterpreter for examples.
 */
var ParserInterpreter = /** @class */ (function (_super) {
    __extends(ParserInterpreter, _super);
    function ParserInterpreter(grammarFileName, vocabulary, ruleNames, atn, input) {
        var _this = _super.call(this, grammarFileName instanceof ParserInterpreter ? grammarFileName.inputStream : input) || this;
        /** This stack corresponds to the _parentctx, _parentState pair of locals
         *  that would exist on call stack frames with a recursive descent parser;
         *  in the generated function for a left-recursive rule you'd see:
         *
         *  private EContext e(int _p) {
         *      ParserRuleContext _parentctx = _ctx;    // Pair.a
         *      int _parentState = state;          // Pair.b
         *      ...
         *  }
         *
         *  Those values are used to create new recursive rule invocation contexts
         *  associated with left operand of an alt like "expr '*' expr".
         */
        _this._parentContextStack = [];
        /** We need a map from (decision,inputIndex)->forced alt for computing ambiguous
         *  parse trees. For now, we allow exactly one override.
         */
        _this.overrideDecision = -1;
        _this.overrideDecisionInputIndex = -1;
        _this.overrideDecisionAlt = -1;
        _this.overrideDecisionReached = false; // latch and only override once; error might trigger infinite loop
        /** What is the current context when we override a decisions?  This tells
         *  us what the root of the parse tree is when using override
         *  for an ambiguity/lookahead check.
         */
        _this._overrideDecisionRoot = undefined;
        if (grammarFileName instanceof ParserInterpreter) {
            var old = grammarFileName;
            _this._grammarFileName = old._grammarFileName;
            _this._atn = old._atn;
            _this.pushRecursionContextStates = old.pushRecursionContextStates;
            _this._ruleNames = old._ruleNames;
            _this._vocabulary = old._vocabulary;
            _this.interpreter = new ParserATNSimulator(_this._atn, _this);
        }
        else {
            // The second constructor requires non-null arguments
            vocabulary = vocabulary;
            ruleNames = ruleNames;
            atn = atn;
            _this._grammarFileName = grammarFileName;
            _this._atn = atn;
            _this._ruleNames = ruleNames.slice(0);
            _this._vocabulary = vocabulary;
            // identify the ATN states where pushNewRecursionContext() must be called
            _this.pushRecursionContextStates = new BitSet(atn.states.length);
            try {
                for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var state = _b.value;
                    if (!(state instanceof StarLoopEntryState)) {
                        continue;
                    }
                    if (state.precedenceRuleDecision) {
                        _this.pushRecursionContextStates.set(state.stateNumber);
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
            // get atn simulator that knows how to do predictions
            _this.interpreter = new ParserATNSimulator(atn, _this);
        }
        return _this;
        var e_1, _c;
    }
    ParserInterpreter.prototype.reset = function (resetInput) {
        if (resetInput === undefined) {
            _super.prototype.reset.call(this);
        }
        else {
            _super.prototype.reset.call(this, resetInput);
        }
        this.overrideDecisionReached = false;
        this._overrideDecisionRoot = undefined;
    };
    Object.defineProperty(ParserInterpreter.prototype, "atn", {
        get: function () {
            return this._atn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserInterpreter.prototype, "vocabulary", {
        get: function () {
            return this._vocabulary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserInterpreter.prototype, "ruleNames", {
        get: function () {
            return this._ruleNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserInterpreter.prototype, "grammarFileName", {
        get: function () {
            return this._grammarFileName;
        },
        enumerable: true,
        configurable: true
    });
    /** Begin parsing at startRuleIndex */
    ParserInterpreter.prototype.parse = function (startRuleIndex) {
        var startRuleStartState = this._atn.ruleToStartState[startRuleIndex];
        this._rootContext = this.createInterpreterRuleContext(undefined, ATNState.INVALID_STATE_NUMBER, startRuleIndex);
        if (startRuleStartState.isPrecedenceRule) {
            this.enterRecursionRule(this._rootContext, startRuleStartState.stateNumber, startRuleIndex, 0);
        }
        else {
            this.enterRule(this._rootContext, startRuleStartState.stateNumber, startRuleIndex);
        }
        while (true) {
            var p = this.atnState;
            switch (p.stateType) {
                case ATNStateType.RULE_STOP:
                    // pop; return from rule
                    if (this._ctx.isEmpty) {
                        if (startRuleStartState.isPrecedenceRule) {
                            var result = this._ctx;
                            var parentContext = this._parentContextStack.pop();
                            this.unrollRecursionContexts(parentContext[0]);
                            return result;
                        }
                        else {
                            this.exitRule();
                            return this._rootContext;
                        }
                    }
                    this.visitRuleStopState(p);
                    break;
                default:
                    try {
                        this.visitState(p);
                    }
                    catch (e) {
                        if (e instanceof RecognitionException) {
                            this.state = this._atn.ruleToStopState[p.ruleIndex].stateNumber;
                            this.context.exception = e;
                            this.errorHandler.reportError(this, e);
                            this.recover(e);
                        }
                        else {
                            throw e;
                        }
                    }
                    break;
            }
        }
    };
    ParserInterpreter.prototype.enterRecursionRule = function (localctx, state, ruleIndex, precedence) {
        this._parentContextStack.push([this._ctx, localctx.invokingState]);
        _super.prototype.enterRecursionRule.call(this, localctx, state, ruleIndex, precedence);
    };
    Object.defineProperty(ParserInterpreter.prototype, "atnState", {
        get: function () {
            return this._atn.states[this.state];
        },
        enumerable: true,
        configurable: true
    });
    ParserInterpreter.prototype.visitState = function (p) {
        var predictedAlt = 1;
        if (p.numberOfTransitions > 1) {
            predictedAlt = this.visitDecisionState(p);
        }
        var transition = p.transition(predictedAlt - 1);
        switch (transition.serializationType) {
            case 1 /* EPSILON */:
                if (this.pushRecursionContextStates.get(p.stateNumber) &&
                    !(transition.target instanceof LoopEndState)) {
                    // We are at the start of a left recursive rule's (...)* loop
                    // and we're not taking the exit branch of loop.
                    var parentContext = this._parentContextStack[this._parentContextStack.length - 1];
                    var localctx = this.createInterpreterRuleContext(parentContext[0], parentContext[1], this._ctx.ruleIndex);
                    this.pushNewRecursionContext(localctx, this._atn.ruleToStartState[p.ruleIndex].stateNumber, this._ctx.ruleIndex);
                }
                break;
            case 5 /* ATOM */:
                this.match(transition._label);
                break;
            case 2 /* RANGE */:
            case 7 /* SET */:
            case 8 /* NOT_SET */:
                if (!transition.matches(this._input.LA(1), Token.MIN_USER_TOKEN_TYPE, 65535)) {
                    this.recoverInline();
                }
                this.matchWildcard();
                break;
            case 9 /* WILDCARD */:
                this.matchWildcard();
                break;
            case 3 /* RULE */:
                var ruleStartState = transition.target;
                var ruleIndex = ruleStartState.ruleIndex;
                var newctx = this.createInterpreterRuleContext(this._ctx, p.stateNumber, ruleIndex);
                if (ruleStartState.isPrecedenceRule) {
                    this.enterRecursionRule(newctx, ruleStartState.stateNumber, ruleIndex, transition.precedence);
                }
                else {
                    this.enterRule(newctx, transition.target.stateNumber, ruleIndex);
                }
                break;
            case 4 /* PREDICATE */:
                var predicateTransition = transition;
                if (!this.sempred(this._ctx, predicateTransition.ruleIndex, predicateTransition.predIndex)) {
                    throw new FailedPredicateException(this);
                }
                break;
            case 6 /* ACTION */:
                var actionTransition = transition;
                this.action(this._ctx, actionTransition.ruleIndex, actionTransition.actionIndex);
                break;
            case 10 /* PRECEDENCE */:
                if (!this.precpred(this._ctx, transition.precedence)) {
                    var precedence = transition.precedence;
                    throw new FailedPredicateException(this, "precpred(_ctx, " + precedence + ")");
                }
                break;
            default:
                throw new Error("UnsupportedOperationException: Unrecognized ATN transition type.");
        }
        this.state = transition.target.stateNumber;
    };
    /** Method visitDecisionState() is called when the interpreter reaches
     *  a decision state (instance of DecisionState). It gives an opportunity
     *  for subclasses to track interesting things.
     */
    ParserInterpreter.prototype.visitDecisionState = function (p) {
        var predictedAlt;
        this.errorHandler.sync(this);
        var decision = p.decision;
        if (decision === this.overrideDecision && this._input.index === this.overrideDecisionInputIndex && !this.overrideDecisionReached) {
            predictedAlt = this.overrideDecisionAlt;
            this.overrideDecisionReached = true;
        }
        else {
            predictedAlt = this.interpreter.adaptivePredict(this._input, decision, this._ctx);
        }
        return predictedAlt;
    };
    /** Provide simple "factory" for InterpreterRuleContext's.
     *  @since 4.5.1
     */
    ParserInterpreter.prototype.createInterpreterRuleContext = function (parent, invokingStateNumber, ruleIndex) {
        return new InterpreterRuleContext(ruleIndex, parent, invokingStateNumber);
    };
    ParserInterpreter.prototype.visitRuleStopState = function (p) {
        var ruleStartState = this._atn.ruleToStartState[p.ruleIndex];
        if (ruleStartState.isPrecedenceRule) {
            var parentContext = this._parentContextStack.pop();
            this.unrollRecursionContexts(parentContext[0]);
            this.state = parentContext[1];
        }
        else {
            this.exitRule();
        }
        var ruleTransition = this._atn.states[this.state].transition(0);
        this.state = ruleTransition.followState.stateNumber;
    };
    /** Override this parser interpreters normal decision-making process
     *  at a particular decision and input token index. Instead of
     *  allowing the adaptive prediction mechanism to choose the
     *  first alternative within a block that leads to a successful parse,
     *  force it to take the alternative, 1..n for n alternatives.
     *
     *  As an implementation limitation right now, you can only specify one
     *  override. This is sufficient to allow construction of different
     *  parse trees for ambiguous input. It means re-parsing the entire input
     *  in general because you're never sure where an ambiguous sequence would
     *  live in the various parse trees. For example, in one interpretation,
     *  an ambiguous input sequence would be matched completely in expression
     *  but in another it could match all the way back to the root.
     *
     *  s : e '!'? ;
     *  e : ID
     *    | ID '!'
     *    ;
     *
     *  Here, x! can be matched as (s (e ID) !) or (s (e ID !)). In the first
     *  case, the ambiguous sequence is fully contained only by the root.
     *  In the second case, the ambiguous sequences fully contained within just
     *  e, as in: (e ID !).
     *
     *  Rather than trying to optimize this and make
     *  some intelligent decisions for optimization purposes, I settled on
     *  just re-parsing the whole input and then using
     *  {link Trees#getRootOfSubtreeEnclosingRegion} to find the minimal
     *  subtree that contains the ambiguous sequence. I originally tried to
     *  record the call stack at the point the parser detected and ambiguity but
     *  left recursive rules create a parse tree stack that does not reflect
     *  the actual call stack. That impedance mismatch was enough to make
     *  it it challenging to restart the parser at a deeply nested rule
     *  invocation.
     *
     *  Only parser interpreters can override decisions so as to avoid inserting
     *  override checking code in the critical ALL(*) prediction execution path.
     *
     *  @since 4.5
     */
    ParserInterpreter.prototype.addDecisionOverride = function (decision, tokenIndex, forcedAlt) {
        this.overrideDecision = decision;
        this.overrideDecisionInputIndex = tokenIndex;
        this.overrideDecisionAlt = forcedAlt;
    };
    Object.defineProperty(ParserInterpreter.prototype, "overrideDecisionRoot", {
        get: function () {
            return this._overrideDecisionRoot;
        },
        enumerable: true,
        configurable: true
    });
    /** Rely on the error handler for this parser but, if no tokens are consumed
     *  to recover, add an error node. Otherwise, nothing is seen in the parse
     *  tree.
     */
    ParserInterpreter.prototype.recover = function (e) {
        var i = this._input.index;
        this.errorHandler.recover(this, e);
        if (this._input.index === i) {
            // no input consumed, better add an error node
            var tok = e.getOffendingToken();
            if (!tok) {
                throw new Error("Expected exception to have an offending token");
            }
            var source = tok.tokenSource;
            var stream = source !== undefined ? source.inputStream : undefined;
            var sourcePair = { source: source, stream: stream };
            if (e instanceof InputMismatchException) {
                var expectedTokens = e.expectedTokens;
                if (expectedTokens === undefined) {
                    throw new Error("Expected the exception to provide expected tokens");
                }
                var expectedTokenType = Token.INVALID_TYPE;
                if (!expectedTokens.isNil) {
                    // get any element
                    expectedTokenType = expectedTokens.minElement;
                }
                var errToken = this.tokenFactory.create(sourcePair, expectedTokenType, tok.text, Token.DEFAULT_CHANNEL, -1, -1, // invalid start/stop
                tok.line, tok.charPositionInLine);
                this._ctx.addErrorNode(this.createErrorNode(this._ctx, errToken));
            }
            else { // NoViableAlt
                var source_1 = tok.tokenSource;
                var errToken = this.tokenFactory.create(sourcePair, Token.INVALID_TYPE, tok.text, Token.DEFAULT_CHANNEL, -1, -1, // invalid start/stop
                tok.line, tok.charPositionInLine);
                this._ctx.addErrorNode(this.createErrorNode(this._ctx, errToken));
            }
        }
    };
    ParserInterpreter.prototype.recoverInline = function () {
        return this._errHandler.recoverInline(this);
    };
    Object.defineProperty(ParserInterpreter.prototype, "rootContext", {
        /** Return the root of the parse, which can be useful if the parser
         *  bails out. You still can access the top node. Note that,
         *  because of the way left recursive rules add children, it's possible
         *  that the root will not have any children if the start rule immediately
         *  called and left recursive rule that fails.
         *
         * @since 4.5.1
         */
        get: function () {
            return this._rootContext;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], ParserInterpreter.prototype, "_vocabulary", void 0);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "reset", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "atn", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "vocabulary", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "ruleNames", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "grammarFileName", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "enterRecursionRule", null);
    ParserInterpreter = __decorate([
        __param(1, NotNull)
    ], ParserInterpreter);
    return ParserInterpreter;
}(Parser));
export { ParserInterpreter };
//# sourceMappingURL=ParserInterpreter.js.map