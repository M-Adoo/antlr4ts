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
import { CommonTokenFactory } from "./CommonTokenFactory";
import { IntegerStack } from "./misc/IntegerStack";
import { Interval } from "./misc/Interval";
import { IntStream } from "./IntStream";
import { LexerATNSimulator } from "./atn/LexerATNSimulator";
import { LexerNoViableAltException } from "./LexerNoViableAltException";
import { Override } from "./Decorators";
import { Recognizer } from "./Recognizer";
import { Token } from "./Token";
/** A lexer is recognizer that draws input symbols from a character stream.
 *  lexer grammars result in a subclass of this object. A Lexer object
 *  uses simplified match() and error recovery mechanisms in the interest
 *  of speed.
 */
var Lexer = /** @class */ (function (_super) {
    __extends(Lexer, _super);
    function Lexer(input) {
        var _this = _super.call(this) || this;
        /** How to create token objects */
        _this._factory = CommonTokenFactory.DEFAULT;
        /** What character index in the stream did the current token start at?
         *  Needed, for example, to get the text for current token.  Set at
         *  the start of nextToken.
         */
        _this._tokenStartCharIndex = -1;
        /** The line on which the first character of the token resides */
        _this._tokenStartLine = 0;
        /** The character position of first character within the line */
        _this._tokenStartCharPositionInLine = 0;
        /** Once we see EOF on char stream, next token will be EOF.
         *  If you have DONE : EOF ; then you see DONE EOF.
         */
        _this._hitEOF = false;
        /** The channel number for the current token */
        _this._channel = 0;
        /** The token type for the current token */
        _this._type = 0;
        _this._modeStack = new IntegerStack();
        _this._mode = Lexer.DEFAULT_MODE;
        _this._input = input;
        _this._tokenFactorySourcePair = { source: _this, stream: input };
        return _this;
    }
    Object.defineProperty(Lexer, "DEFAULT_TOKEN_CHANNEL", {
        get: function () {
            return Token.DEFAULT_CHANNEL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer, "HIDDEN", {
        get: function () {
            return Token.HIDDEN_CHANNEL;
        },
        enumerable: true,
        configurable: true
    });
    Lexer.prototype.reset = function (resetInput) {
        // wack Lexer state variables
        if (resetInput === undefined || resetInput) {
            this._input.seek(0); // rewind the input
        }
        this._token = undefined;
        this._type = Token.INVALID_TYPE;
        this._channel = Token.DEFAULT_CHANNEL;
        this._tokenStartCharIndex = -1;
        this._tokenStartCharPositionInLine = -1;
        this._tokenStartLine = -1;
        this._text = undefined;
        this._hitEOF = false;
        this._mode = Lexer.DEFAULT_MODE;
        this._modeStack.clear();
        this.interpreter.reset();
    };
    /** Return a token from this source; i.e., match a token on the char
     *  stream.
     */
    Lexer.prototype.nextToken = function () {
        if (this._input == null) {
            throw new Error("nextToken requires a non-null input stream.");
        }
        // Mark start location in char stream so unbuffered streams are
        // guaranteed at least have text of current token
        var tokenStartMarker = this._input.mark();
        try {
            outer: while (true) {
                if (this._hitEOF) {
                    return this.emitEOF();
                }
                this._token = undefined;
                this._channel = Token.DEFAULT_CHANNEL;
                this._tokenStartCharIndex = this._input.index;
                this._tokenStartCharPositionInLine = this.interpreter.charPositionInLine;
                this._tokenStartLine = this.interpreter.line;
                this._text = undefined;
                do {
                    this._type = Token.INVALID_TYPE;
                    //				System.out.println("nextToken line "+tokenStartLine+" at "+((char)input.LA(1))+
                    //								   " in mode "+mode+
                    //								   " at index "+input.index);
                    var ttype = void 0;
                    try {
                        ttype = this.interpreter.match(this._input, this._mode);
                    }
                    catch (e) {
                        if (e instanceof LexerNoViableAltException) {
                            this.notifyListeners(e); // report error
                            this.recover(e);
                            ttype = Lexer.SKIP;
                        }
                        else {
                            throw e;
                        }
                    }
                    if (this._input.LA(1) === IntStream.EOF) {
                        this._hitEOF = true;
                    }
                    if (this._type === Token.INVALID_TYPE) {
                        this._type = ttype;
                    }
                    if (this._type === Lexer.SKIP) {
                        continue outer;
                    }
                } while (this._type === Lexer.MORE);
                if (this._token == null) {
                    return this.emit();
                }
                return this._token;
            }
        }
        finally {
            // make sure we release marker after match or
            // unbuffered char stream will keep buffering
            this._input.release(tokenStartMarker);
        }
    };
    /** Instruct the lexer to skip creating a token for current lexer rule
     *  and look for another token.  nextToken() knows to keep looking when
     *  a lexer rule finishes with token set to SKIP_TOKEN.  Recall that
     *  if token==undefined at end of any token rule, it creates one for you
     *  and emits it.
     */
    Lexer.prototype.skip = function () {
        this._type = Lexer.SKIP;
    };
    Lexer.prototype.more = function () {
        this._type = Lexer.MORE;
    };
    Lexer.prototype.mode = function (m) {
        this._mode = m;
    };
    Lexer.prototype.pushMode = function (m) {
        if (LexerATNSimulator.debug) {
            console.log("pushMode " + m);
        }
        this._modeStack.push(this._mode);
        this.mode(m);
    };
    Lexer.prototype.popMode = function () {
        if (this._modeStack.isEmpty) {
            throw new Error("EmptyStackException");
        }
        if (LexerATNSimulator.debug) {
            console.log("popMode back to " + this._modeStack.peek());
        }
        this.mode(this._modeStack.pop());
        return this._mode;
    };
    Object.defineProperty(Lexer.prototype, "tokenFactory", {
        get: function () {
            return this._factory;
        },
        // @Override
        set: function (factory) {
            this._factory = factory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "inputStream", {
        get: function () {
            return this._input;
        },
        /** Set the char stream and reset the lexer */
        set: function (input) {
            this.reset(false);
            this._input = input;
            this._tokenFactorySourcePair = { source: this, stream: this._input };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "sourceName", {
        get: function () {
            return this._input.sourceName;
        },
        enumerable: true,
        configurable: true
    });
    Lexer.prototype.emit = function (token) {
        if (!token) {
            token = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.charIndex - 1, this._tokenStartLine, this._tokenStartCharPositionInLine);
        }
        this._token = token;
        return token;
    };
    Lexer.prototype.emitEOF = function () {
        var cpos = this.charPositionInLine;
        var line = this.line;
        var eof = this._factory.create(this._tokenFactorySourcePair, Token.EOF, undefined, Token.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, line, cpos);
        this.emit(eof);
        return eof;
    };
    Object.defineProperty(Lexer.prototype, "line", {
        get: function () {
            return this.interpreter.line;
        },
        set: function (line) {
            this.interpreter.line = line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "charPositionInLine", {
        get: function () {
            return this.interpreter.charPositionInLine;
        },
        set: function (charPositionInLine) {
            this.interpreter.charPositionInLine = charPositionInLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "charIndex", {
        /** What is the index of the current character of lookahead? */
        get: function () {
            return this._input.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "text", {
        /** Return the text matched so far for the current token or any
         *  text override.
         */
        get: function () {
            if (this._text != null) {
                return this._text;
            }
            return this.interpreter.getText(this._input);
        },
        /** Set the complete text of this token; it wipes any previous
         *  changes to the text.
         */
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "token", {
        /** Override if emitting multiple tokens. */
        get: function () { return this._token; },
        set: function (_token) {
            this._token = _token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (ttype) {
            this._type = ttype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "channel", {
        get: function () {
            return this._channel;
        },
        set: function (channel) {
            this._channel = channel;
        },
        enumerable: true,
        configurable: true
    });
    /** Return a list of all Token objects in input char stream.
     *  Forces load of all tokens. Does not include EOF token.
     */
    Lexer.prototype.getAllTokens = function () {
        var tokens = [];
        var t = this.nextToken();
        while (t.type !== Token.EOF) {
            tokens.push(t);
            t = this.nextToken();
        }
        return tokens;
    };
    Lexer.prototype.notifyListeners = function (e) {
        var text = this._input.getText(Interval.of(this._tokenStartCharIndex, this._input.index));
        var msg = "token recognition error at: '" +
            this.getErrorDisplay(text) + "'";
        var listener = this.getErrorListenerDispatch();
        if (listener.syntaxError) {
            listener.syntaxError(this, undefined, this._tokenStartLine, this._tokenStartCharPositionInLine, msg, e);
        }
    };
    Lexer.prototype.getErrorDisplay = function (s) {
        if (typeof s === "number") {
            switch (s) {
                case Token.EOF:
                    return "<EOF>";
                case 0x0a:
                    return "\\n";
                case 0x09:
                    return "\\t";
                case 0x0d:
                    return "\\r";
            }
            return String.fromCharCode(s);
        }
        return s.replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r");
    };
    Lexer.prototype.getCharErrorDisplay = function (c) {
        var s = this.getErrorDisplay(c);
        return "'" + s + "'";
    };
    Lexer.prototype.recover = function (re) {
        if (re instanceof LexerNoViableAltException) {
            if (this._input.LA(1) !== IntStream.EOF) {
                // skip a char and try again
                this.interpreter.consume(this._input);
            }
        }
        else {
            //System.out.println("consuming char "+(char)input.LA(1)+" during recovery");
            //re.printStackTrace();
            // TODO: Do we lose character or line position information?
            this._input.consume();
        }
    };
    Lexer.DEFAULT_MODE = 0;
    Lexer.MORE = -2;
    Lexer.SKIP = -3;
    Lexer.MIN_CHAR_VALUE = 0x0000;
    Lexer.MAX_CHAR_VALUE = 0xFFFF;
    __decorate([
        Override
    ], Lexer.prototype, "nextToken", null);
    __decorate([
        Override
    ], Lexer.prototype, "tokenFactory", null);
    __decorate([
        Override
    ], Lexer.prototype, "inputStream", null);
    __decorate([
        Override
    ], Lexer.prototype, "sourceName", null);
    __decorate([
        Override
    ], Lexer.prototype, "line", null);
    __decorate([
        Override
    ], Lexer.prototype, "charPositionInLine", null);
    return Lexer;
}(Recognizer));
export { Lexer };
//# sourceMappingURL=Lexer.js.map