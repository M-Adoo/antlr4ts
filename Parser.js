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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
// ConvertTo-TS run at 2016-10-04T11:26:52.4399193-07:00
// import * as assert from "assert";
import * as Utils from "./misc/Utils";
import { ATNDeserializationOptions } from "./atn/ATNDeserializationOptions";
import { ATNDeserializer } from "./atn/ATNDeserializer";
import { DefaultErrorStrategy } from "./DefaultErrorStrategy";
import { IntegerStack } from "./misc/IntegerStack";
import { Lexer } from "./Lexer";
import { Override, NotNull, Nullable } from "./Decorators";
import { ParseInfo } from "./atn/ParseInfo";
import { ParserATNSimulator } from "./atn/ParserATNSimulator";
import { ProxyParserErrorListener } from "./ProxyParserErrorListener";
import { Recognizer } from "./Recognizer";
import { Token } from "./Token";
import { ProfilingATNSimulator } from "./atn/ProfilingATNSimulator";
import { ParseTreePatternMatcher } from "./tree/pattern/ParseTreePatternMatcher";
var TraceListener = /** @class */ (function () {
    function TraceListener(ruleNames, tokenStream) {
        this.ruleNames = ruleNames;
        this.tokenStream = tokenStream;
    }
    TraceListener.prototype.enterEveryRule = function (ctx) {
        console.log("enter   " + this.ruleNames[ctx.ruleIndex] +
            ", LT(1)=" + this.tokenStream.LT(1).text);
    };
    TraceListener.prototype.exitEveryRule = function (ctx) {
        console.log("exit    " + this.ruleNames[ctx.ruleIndex] +
            ", LT(1)=" + this.tokenStream.LT(1).text);
    };
    TraceListener.prototype.visitErrorNode = function (node) {
        // intentionally empty
    };
    TraceListener.prototype.visitTerminal = function (node) {
        var parent = node.parent.ruleContext;
        var token = node.symbol;
        console.log("consume " + token + " rule " + this.ruleNames[parent.ruleIndex]);
    };
    __decorate([
        Override
    ], TraceListener.prototype, "enterEveryRule", null);
    __decorate([
        Override
    ], TraceListener.prototype, "exitEveryRule", null);
    __decorate([
        Override
    ], TraceListener.prototype, "visitErrorNode", null);
    __decorate([
        Override
    ], TraceListener.prototype, "visitTerminal", null);
    return TraceListener;
}());
/** This is all the parsing support code essentially; most of it is error recovery stuff. */
var Parser = /** @class */ (function (_super) {
    __extends(Parser, _super);
    function Parser(input) {
        var _this = _super.call(this) || this;
        /**
         * The error handling strategy for the parser. The default value is a new
         * instance of {@link DefaultErrorStrategy}.
         *
         * @see #getErrorHandler
         * @see #setErrorHandler
         */
        _this._errHandler = new DefaultErrorStrategy();
        _this._precedenceStack = new IntegerStack();
        /**
         * Specifies whether or not the parser should construct a parse tree during
         * the parsing process. The default value is `true`.
         *
         * @see `buildParseTree`
         */
        _this._buildParseTrees = true;
        /**
         * The list of {@link ParseTreeListener} listeners registered to receive
         * events during the parse.
         *
         * @see #addParseListener
         */
        _this._parseListeners = [];
        /**
         * The number of syntax errors reported during parsing. This value is
         * incremented each time {@link #notifyErrorListeners} is called.
         */
        _this._syntaxErrors = 0;
        /** Indicates parser has match()ed EOF token. See {@link #exitRule()}. */
        _this.matchedEOF = false;
        _this._precedenceStack.push(0);
        _this.inputStream = input;
        return _this;
    }
    Parser.prototype.reset = function (resetInput) {
        // Note: this method executes when not parsing, so _ctx can be undefined
        if (resetInput === undefined || resetInput) {
            this.inputStream.seek(0);
        }
        this._errHandler.reset(this);
        this._ctx = undefined;
        this._syntaxErrors = 0;
        this.matchedEOF = false;
        this.isTrace = false;
        this._precedenceStack.clear();
        this._precedenceStack.push(0);
        var interpreter = this.interpreter;
        if (interpreter != null) {
            interpreter.reset();
        }
    };
    /**
     * Match current input symbol against `ttype`. If the symbol type
     * matches, {@link ANTLRErrorStrategy#reportMatch} and {@link #consume} are
     * called to complete the match process.
     *
     * If the symbol type does not match,
     * {@link ANTLRErrorStrategy#recoverInline} is called on the current error
     * strategy to attempt recovery. If {@link #getBuildParseTree} is
     * `true` and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy#recoverInline} is -1, the symbol is added to
     * the parse tree by calling {@link ParserRuleContext#addErrorNode}.
     *
     * @param ttype the token type to match
     * @returns the matched symbol
     * @ if the current input symbol did not match
     * `ttype` and the error strategy could not recover from the
     * mismatched symbol
     */
    Parser.prototype.match = function (ttype) {
        var t = this.currentToken;
        if (t.type === ttype) {
            if (ttype === Token.EOF) {
                this.matchedEOF = true;
            }
            this._errHandler.reportMatch(this);
            this.consume();
        }
        else {
            t = this._errHandler.recoverInline(this);
            if (this._buildParseTrees && t.tokenIndex === -1) {
                // we must have conjured up a new token during single token insertion
                // if it's not the current symbol
                this._ctx.addErrorNode(t);
            }
        }
        return t;
    };
    /**
     * Match current input symbol as a wildcard. If the symbol type matches
     * (i.e. has a value greater than 0), {@link ANTLRErrorStrategy#reportMatch}
     * and {@link #consume} are called to complete the match process.
     *
     * If the symbol type does not match,
     * {@link ANTLRErrorStrategy#recoverInline} is called on the current error
     * strategy to attempt recovery. If {@link #getBuildParseTree} is
     * `true` and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy#recoverInline} is -1, the symbol is added to
     * the parse tree by calling {@link ParserRuleContext#addErrorNode}.
     *
     * @returns the matched symbol
     * @ if the current input symbol did not match
     * a wildcard and the error strategy could not recover from the mismatched
     * symbol
     */
    Parser.prototype.matchWildcard = function () {
        var t = this.currentToken;
        if (t.type > 0) {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        else {
            t = this._errHandler.recoverInline(this);
            if (this._buildParseTrees && t.tokenIndex === -1) {
                // we must have conjured up a new token during single token insertion
                // if it's not the current symbol
                this._ctx.addErrorNode(t);
            }
        }
        return t;
    };
    Object.defineProperty(Parser.prototype, "buildParseTree", {
        /**
         * Gets whether or not a complete parse tree will be constructed while
         * parsing. This property is `true` for a newly constructed parser.
         *
         * @returns `true` if a complete parse tree will be constructed while
         * parsing, otherwise `false`
         */
        get: function () {
            return this._buildParseTrees;
        },
        /**
         * Track the {@link ParserRuleContext} objects during the parse and hook
         * them up using the {@link ParserRuleContext#children} list so that it
         * forms a parse tree. The {@link ParserRuleContext} returned from the start
         * rule represents the root of the parse tree.
         *
         * Note that if we are not building parse trees, rule contexts only point
         * upwards. When a rule exits, it returns the context but that gets garbage
         * collected if nobody holds a reference. It points upwards but nobody
         * points at it.
         *
         * When we build parse trees, we are adding all of these contexts to
         * {@link ParserRuleContext#children} list. Contexts are then not candidates
         * for garbage collection.
         */
        set: function (buildParseTrees) {
            this._buildParseTrees = buildParseTrees;
        },
        enumerable: true,
        configurable: true
    });
    Parser.prototype.getParseListeners = function () {
        return this._parseListeners;
    };
    /**
     * Registers `listener` to receive events during the parsing process.
     *
     * To support output-preserving grammar transformations (including but not
     * limited to left-recursion removal, automated left-factoring, and
     * optimized code generation), calls to listener methods during the parse
     * may differ substantially from calls made by
     * {@link ParseTreeWalker#DEFAULT} used after the parse is complete. In
     * particular, rule entry and exit events may occur in a different order
     * during the parse than after the parser. In addition, calls to certain
     * rule entry methods may be omitted.
     *
     * With the following specific exceptions, calls to listener events are
     * *deterministic*, i.e. for identical input the calls to listener
     * methods will be the same.
     *
     * * Alterations to the grammar used to generate code may change the
     *   behavior of the listener calls.
     * * Alterations to the command line options passed to ANTLR 4 when
     *   generating the parser may change the behavior of the listener calls.
     * * Changing the version of the ANTLR Tool used to generate the parser
     *   may change the behavior of the listener calls.
     *
     * @param listener the listener to add
     *
     * @throws {@link TypeError} if `listener` is `undefined`
     */
    Parser.prototype.addParseListener = function (listener) {
        if (listener == null) {
            throw new TypeError("listener cannot be null");
        }
        this._parseListeners.push(listener);
    };
    /**
     * Remove `listener` from the list of parse listeners.
     *
     * If `listener` is `undefined` or has not been added as a parse
     * listener, this method does nothing.
     *
     * @see #addParseListener
     *
     * @param listener the listener to remove
     */
    Parser.prototype.removeParseListener = function (listener) {
        var index = this._parseListeners.findIndex(function (l) { return l === listener; });
        if (index !== -1) {
            this._parseListeners.splice(index, 1);
        }
    };
    /**
     * Remove all parse listeners.
     *
     * @see #addParseListener
     */
    Parser.prototype.removeParseListeners = function () {
        this._parseListeners.length = 0;
    };
    /**
     * Notify any parse listeners of an enter rule event.
     *
     * @see #addParseListener
     */
    Parser.prototype.triggerEnterRuleEvent = function () {
        try {
            for (var _a = __values(this._parseListeners), _b = _a.next(); !_b.done; _b = _a.next()) {
                var listener = _b.value;
                if (listener.enterEveryRule) {
                    listener.enterEveryRule(this._ctx);
                }
                this._ctx.enterRule(listener);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    /**
     * Notify any parse listeners of an exit rule event.
     *
     * @see #addParseListener
     */
    Parser.prototype.triggerExitRuleEvent = function () {
        // reverse order walk of listeners
        for (var i = this._parseListeners.length - 1; i >= 0; i--) {
            var listener = this._parseListeners[i];
            this._ctx.exitRule(listener);
            if (listener.exitEveryRule) {
                listener.exitEveryRule(this._ctx);
            }
        }
    };
    Object.defineProperty(Parser.prototype, "numberOfSyntaxErrors", {
        /**
         * Gets the number of syntax errors reported during parsing. This value is
         * incremented each time {@link #notifyErrorListeners} is called.
         *
         * @see #notifyErrorListeners
         */
        get: function () {
            return this._syntaxErrors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser.prototype, "tokenFactory", {
        get: function () {
            return this._input.tokenSource.tokenFactory;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The ATN with bypass alternatives is expensive to create so we create it
     * lazily.
     *
     * @ if the current parser does not
     * implement the `serializedATN` property.
     */
    Parser.prototype.getATNWithBypassAlts = function () {
        var serializedAtn = this.serializedATN;
        if (serializedAtn == null) {
            throw new Error("The current parser does not support an ATN with bypass alternatives.");
        }
        var result = Parser.bypassAltsAtnCache.get(serializedAtn);
        if (result == null) {
            var deserializationOptions = new ATNDeserializationOptions();
            deserializationOptions.isGenerateRuleBypassTransitions = true;
            result = new ATNDeserializer(deserializationOptions).deserialize(Utils.toCharArray(serializedAtn));
            Parser.bypassAltsAtnCache.set(serializedAtn, result);
        }
        return result;
    };
    Parser.prototype.compileParseTreePattern = function (pattern, patternRuleIndex, lexer) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenSource, currentLexer, matcher;
            return __generator(this, function (_a) {
                if (!lexer) {
                    if (this.inputStream) {
                        tokenSource = this.inputStream.tokenSource;
                        if (tokenSource instanceof Lexer) {
                            lexer = tokenSource;
                        }
                    }
                    if (!lexer) {
                        throw new Error("Parser can't discover a lexer to use");
                    }
                }
                currentLexer = lexer;
                matcher = new ParseTreePatternMatcher(currentLexer, this);
                return [2 /*return*/, matcher.compile(pattern, patternRuleIndex)];
            });
        });
    };
    Object.defineProperty(Parser.prototype, "errorHandler", {
        get: function () {
            return this._errHandler;
        },
        set: function (handler) {
            this._errHandler = handler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser.prototype, "inputStream", {
        get: function () {
            return this._input;
        },
        /** Set the token stream and reset the parser. */
        set: function (input) {
            this.reset(false);
            this._input = input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser.prototype, "currentToken", {
        /** Match needs to return the current input symbol, which gets put
         *  into the label for the associated token ref; e.g., x=ID.
         */
        get: function () {
            return this._input.LT(1);
        },
        enumerable: true,
        configurable: true
    });
    Parser.prototype.notifyErrorListeners = function (msg, offendingToken, e) {
        if (offendingToken === undefined) {
            offendingToken = this.currentToken;
        }
        else if (offendingToken === null) {
            offendingToken = undefined;
        }
        this._syntaxErrors++;
        var line = -1;
        var charPositionInLine = -1;
        if (offendingToken != null) {
            line = offendingToken.line;
            charPositionInLine = offendingToken.charPositionInLine;
        }
        var listener = this.getErrorListenerDispatch();
        if (listener.syntaxError) {
            listener.syntaxError(this, offendingToken, line, charPositionInLine, msg, e);
        }
    };
    /**
     * Consume and return the [current symbol](`currentToken`).
     *
     * E.g., given the following input with `A` being the current
     * lookahead symbol, this function moves the cursor to `B` and returns
     * `A`.
     *
     * ```
     * A B
     * ^
     * ```
     *
     * If the parser is not in error recovery mode, the consumed symbol is added
     * to the parse tree using {@link ParserRuleContext#addChild(Token)}, and
     * {@link ParseTreeListener#visitTerminal} is called on any parse listeners.
     * If the parser *is* in error recovery mode, the consumed symbol is
     * added to the parse tree using
     * {@link ParserRuleContext#addErrorNode(Token)}, and
     * {@link ParseTreeListener#visitErrorNode} is called on any parse
     * listeners.
     */
    Parser.prototype.consume = function () {
        var o = this.currentToken;
        if (o.type !== Parser.EOF) {
            this.inputStream.consume();
        }
        var hasListener = this._parseListeners.length !== 0;
        if (this._buildParseTrees || hasListener) {
            if (this._errHandler.inErrorRecoveryMode(this)) {
                var node = this._ctx.addErrorNode(o);
                if (hasListener) {
                    try {
                        for (var _a = __values(this._parseListeners), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var listener = _b.value;
                            if (listener.visitErrorNode) {
                                listener.visitErrorNode(node);
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
                }
            }
            else {
                var node = this._ctx.addChild(o);
                if (hasListener) {
                    try {
                        for (var _d = __values(this._parseListeners), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var listener = _e.value;
                            if (listener.visitTerminal) {
                                listener.visitTerminal(node);
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        }
        return o;
        var e_2, _c, e_3, _f;
    };
    Parser.prototype.addContextToParseTree = function () {
        var parent = this._ctx._parent;
        // add current context to parent if we have a parent
        if (parent != null) {
            parent.addChild(this._ctx);
        }
    };
    /**
     * Always called by generated parsers upon entry to a rule. Access field
     * {@link #_ctx} get the current context.
     */
    Parser.prototype.enterRule = function (localctx, state, ruleIndex) {
        this.state = state;
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        if (this._buildParseTrees) {
            this.addContextToParseTree();
        }
        this.triggerEnterRuleEvent();
    };
    Parser.prototype.enterLeftFactoredRule = function (localctx, state, ruleIndex) {
        this.state = state;
        if (this._buildParseTrees) {
            var factoredContext = this._ctx.getChild(this._ctx.childCount - 1);
            this._ctx.removeLastChild();
            factoredContext._parent = localctx;
            localctx.addChild(factoredContext);
        }
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        if (this._buildParseTrees) {
            this.addContextToParseTree();
        }
        this.triggerEnterRuleEvent();
    };
    Parser.prototype.exitRule = function () {
        if (this.matchedEOF) {
            // if we have matched EOF, it cannot consume past EOF so we use LT(1) here
            this._ctx._stop = this._input.LT(1); // LT(1) will be end of file
        }
        else {
            this._ctx._stop = this._input.tryLT(-1); // stop node is what we just matched
        }
        // trigger event on _ctx, before it reverts to parent
        this.triggerExitRuleEvent();
        this.state = this._ctx.invokingState;
        this._ctx = this._ctx._parent;
    };
    Parser.prototype.enterOuterAlt = function (localctx, altNum) {
        localctx.altNumber = altNum;
        // if we have new localctx, make sure we replace existing ctx
        // that is previous child of parse tree
        if (this._buildParseTrees && this._ctx !== localctx) {
            var parent_1 = this._ctx._parent;
            if (parent_1 != null) {
                parent_1.removeLastChild();
                parent_1.addChild(localctx);
            }
        }
        this._ctx = localctx;
    };
    Object.defineProperty(Parser.prototype, "precedence", {
        /**
         * Get the precedence level for the top-most precedence rule.
         *
         * @returns The precedence level for the top-most precedence rule, or -1 if
         * the parser context is not nested within a precedence rule.
         */
        get: function () {
            if (this._precedenceStack.isEmpty) {
                return -1;
            }
            return this._precedenceStack.peek();
        },
        enumerable: true,
        configurable: true
    });
    Parser.prototype.enterRecursionRule = function (localctx, state, ruleIndex, precedence) {
        this.state = state;
        this._precedenceStack.push(precedence);
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        this.triggerEnterRuleEvent(); // simulates rule entry for left-recursive rules
    };
    /** Like {@link #enterRule} but for recursive rules.
     *  Make the current context the child of the incoming localctx.
     */
    Parser.prototype.pushNewRecursionContext = function (localctx, state, ruleIndex) {
        var previous = this._ctx;
        previous._parent = localctx;
        previous.invokingState = state;
        previous._stop = this._input.tryLT(-1);
        this._ctx = localctx;
        this._ctx._start = previous._start;
        if (this._buildParseTrees) {
            this._ctx.addChild(previous);
        }
        this.triggerEnterRuleEvent(); // simulates rule entry for left-recursive rules
    };
    Parser.prototype.unrollRecursionContexts = function (_parentctx) {
        this._precedenceStack.pop();
        this._ctx._stop = this._input.tryLT(-1);
        var retctx = this._ctx; // save current ctx (return value)
        // unroll so _ctx is as it was before call to recursive method
        if (this._parseListeners.length > 0) {
            while (this._ctx !== _parentctx) {
                this.triggerExitRuleEvent();
                this._ctx = this._ctx._parent;
            }
        }
        else {
            this._ctx = _parentctx;
        }
        // hook into tree
        retctx._parent = _parentctx;
        if (this._buildParseTrees && _parentctx != null) {
            // add return ctx into invoking rule's tree
            _parentctx.addChild(retctx);
        }
    };
    Parser.prototype.getInvokingContext = function (ruleIndex) {
        var p = this._ctx;
        while (p && p.ruleIndex !== ruleIndex) {
            p = p._parent;
        }
        return p;
    };
    Object.defineProperty(Parser.prototype, "context", {
        get: function () {
            return this._ctx;
        },
        set: function (ctx) {
            this._ctx = ctx;
        },
        enumerable: true,
        configurable: true
    });
    Parser.prototype.precpred = function (localctx, precedence) {
        return precedence >= this._precedenceStack.peek();
    };
    Parser.prototype.getErrorListenerDispatch = function () {
        return new ProxyParserErrorListener(this.getErrorListeners());
    };
    Parser.prototype.inContext = function (context) {
        // TODO: useful in parser?
        return false;
    };
    /**
     * Checks whether or not `symbol` can follow the current state in the
     * ATN. The behavior of this method is equivalent to the following, but is
     * implemented such that the complete context-sensitive follow set does not
     * need to be explicitly constructed.
     *
     * ```
     * return getExpectedTokens().contains(symbol);
     * ```
     *
     * @param symbol the symbol type to check
     * @returns `true` if `symbol` can follow the current state in
     * the ATN, otherwise `false`.
     */
    Parser.prototype.isExpectedToken = function (symbol) {
        //   		return interpreter.atn.nextTokens(_ctx);
        var atn = this.interpreter.atn;
        var ctx = this._ctx;
        var s = atn.states[this.state];
        var following = atn.nextTokens(s);
        if (following.contains(symbol)) {
            return true;
        }
        //        System.out.println("following "+s+"="+following);
        if (!following.contains(Token.EPSILON)) {
            return false;
        }
        while (ctx != null && ctx.invokingState >= 0 && following.contains(Token.EPSILON)) {
            var invokingState = atn.states[ctx.invokingState];
            var rt = invokingState.transition(0);
            following = atn.nextTokens(rt.followState);
            if (following.contains(symbol)) {
                return true;
            }
            ctx = ctx._parent;
        }
        if (following.contains(Token.EPSILON) && symbol === Token.EOF) {
            return true;
        }
        return false;
    };
    Object.defineProperty(Parser.prototype, "isMatchedEOF", {
        get: function () {
            return this.matchedEOF;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Computes the set of input symbols which could follow the current parser
     * state and context, as given by {@link #getState} and {@link #getContext},
     * respectively.
     *
     * @see ATN#getExpectedTokens(int, RuleContext)
     */
    Parser.prototype.getExpectedTokens = function () {
        return this.atn.getExpectedTokens(this.state, this.context);
    };
    Parser.prototype.getExpectedTokensWithinCurrentRule = function () {
        var atn = this.interpreter.atn;
        var s = atn.states[this.state];
        return atn.nextTokens(s);
    };
    /** Get a rule's index (i.e., `RULE_ruleName` field) or -1 if not found. */
    Parser.prototype.getRuleIndex = function (ruleName) {
        var ruleIndex = this.getRuleIndexMap().get(ruleName);
        if (ruleIndex != null) {
            return ruleIndex;
        }
        return -1;
    };
    Object.defineProperty(Parser.prototype, "ruleContext", {
        get: function () { return this._ctx; },
        enumerable: true,
        configurable: true
    });
    /** Return List&lt;String&gt; of the rule names in your parser instance
     *  leading up to a call to the current rule.  You could override if
     *  you want more details such as the file/line info of where
     *  in the ATN a rule is invoked.
     *
     *  This is very useful for error messages.
     */
    Parser.prototype.getRuleInvocationStack = function (ctx) {
        if (ctx === void 0) { ctx = this._ctx; }
        var p = ctx; // Workaround for Microsoft/TypeScript#14487
        var ruleNames = this.ruleNames;
        var stack = [];
        while (p != null) {
            // compute what follows who invoked us
            var ruleIndex = p.ruleIndex;
            if (ruleIndex < 0) {
                stack.push("n/a");
            }
            else {
                stack.push(ruleNames[ruleIndex]);
            }
            p = p._parent;
        }
        return stack;
    };
    /** For debugging and other purposes. */
    Parser.prototype.getDFAStrings = function () {
        var s = [];
        try {
            for (var _a = __values(this._interp.atn.decisionToDFA), _b = _a.next(); !_b.done; _b = _a.next()) {
                var dfa = _b.value;
                s.push(dfa.toString(this.vocabulary, this.ruleNames));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return s;
        var e_4, _c;
    };
    /** For debugging and other purposes. */
    Parser.prototype.dumpDFA = function () {
        var seenOne = false;
        try {
            for (var _a = __values(this._interp.atn.decisionToDFA), _b = _a.next(); !_b.done; _b = _a.next()) {
                var dfa = _b.value;
                if (!dfa.isEmpty) {
                    if (seenOne) {
                        console.log();
                    }
                    console.log("Decision " + dfa.decision + ":");
                    process.stdout.write(dfa.toString(this.vocabulary, this.ruleNames));
                    seenOne = true;
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
        var e_5, _c;
    };
    Object.defineProperty(Parser.prototype, "sourceName", {
        get: function () {
            return this._input.sourceName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser.prototype, "parseInfo", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var interp = _this.interpreter;
                if (interp instanceof ProfilingATNSimulator) {
                    resolve(new ParseInfo(interp));
                }
                resolve();
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @since 4.3
     */
    Parser.prototype.setProfile = function (profile) {
        return __awaiter(this, void 0, void 0, function () {
            var interp;
            return __generator(this, function (_a) {
                interp = this.interpreter;
                if (profile) {
                    if (!(interp instanceof ProfilingATNSimulator)) {
                        this.interpreter = new ProfilingATNSimulator(this);
                    }
                }
                else if (interp instanceof ProfilingATNSimulator) {
                    this.interpreter = new ParserATNSimulator(this.atn, this);
                }
                this.interpreter.setPredictionMode(interp.getPredictionMode());
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(Parser.prototype, "isTrace", {
        /**
         * Gets whether a {@link TraceListener} is registered as a parse listener
         * for the parser.
         */
        get: function () {
            return this._tracer != null;
        },
        /** During a parse is sometimes useful to listen in on the rule entry and exit
         *  events as well as token matches. This is for quick and dirty debugging.
         */
        set: function (trace) {
            if (!trace) {
                if (this._tracer) {
                    this.removeParseListener(this._tracer);
                    this._tracer = undefined;
                }
            }
            else {
                if (this._tracer) {
                    this.removeParseListener(this._tracer);
                }
                else {
                    this._tracer = new TraceListener(this.ruleNames, this._input);
                }
                this.addParseListener(this._tracer);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This field maps from the serialized ATN string to the deserialized {@link ATN} with
     * bypass alternatives.
     *
     * @see ATNDeserializationOptions.isGenerateRuleBypassTransitions
     */
    Parser.bypassAltsAtnCache = new Map();
    __decorate([
        NotNull
    ], Parser.prototype, "_errHandler", void 0);
    __decorate([
        NotNull
    ], Parser.prototype, "match", null);
    __decorate([
        NotNull
    ], Parser.prototype, "matchWildcard", null);
    __decorate([
        NotNull
    ], Parser.prototype, "getParseListeners", null);
    __decorate([
        __param(0, NotNull)
    ], Parser.prototype, "addParseListener", null);
    __decorate([
        NotNull
    ], Parser.prototype, "getATNWithBypassAlts", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], Parser.prototype, "errorHandler", null);
    __decorate([
        Override
    ], Parser.prototype, "inputStream", null);
    __decorate([
        NotNull
    ], Parser.prototype, "currentToken", null);
    __decorate([
        __param(0, NotNull)
    ], Parser.prototype, "enterRule", null);
    __decorate([
        Override,
        __param(0, Nullable)
    ], Parser.prototype, "precpred", null);
    __decorate([
        Override
    ], Parser.prototype, "getErrorListenerDispatch", null);
    __decorate([
        NotNull
    ], Parser.prototype, "getExpectedTokens", null);
    __decorate([
        NotNull
    ], Parser.prototype, "getExpectedTokensWithinCurrentRule", null);
    __decorate([
        Override
    ], Parser.prototype, "parseInfo", null);
    return Parser;
}(Recognizer));
export { Parser };
//# sourceMappingURL=Parser.js.map