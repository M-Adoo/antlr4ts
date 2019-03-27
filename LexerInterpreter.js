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
import { Lexer } from "./Lexer";
import { LexerATNSimulator } from "./atn/LexerATNSimulator";
import { NotNull } from "./Decorators";
import { Override } from "./Decorators";
var LexerInterpreter = /** @class */ (function (_super) {
    __extends(LexerInterpreter, _super);
    function LexerInterpreter(grammarFileName, vocabulary, ruleNames, channelNames, modeNames, atn, input) {
        var _this = _super.call(this, input) || this;
        if (atn.grammarType !== 0 /* LEXER */) {
            throw new Error("IllegalArgumentException: The ATN must be a lexer ATN.");
        }
        _this._grammarFileName = grammarFileName;
        _this._atn = atn;
        _this._ruleNames = ruleNames.slice(0);
        _this._channelNames = channelNames.slice(0);
        _this._modeNames = modeNames.slice(0);
        _this._vocabulary = vocabulary;
        _this._interp = new LexerATNSimulator(atn, _this);
        return _this;
    }
    Object.defineProperty(LexerInterpreter.prototype, "atn", {
        get: function () {
            return this._atn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "grammarFileName", {
        get: function () {
            return this._grammarFileName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "ruleNames", {
        get: function () {
            return this._ruleNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "channelNames", {
        get: function () {
            return this._channelNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "modeNames", {
        get: function () {
            return this._modeNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "vocabulary", {
        get: function () {
            return this._vocabulary;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], LexerInterpreter.prototype, "_vocabulary", void 0);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "atn", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "grammarFileName", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "ruleNames", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "channelNames", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "modeNames", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "vocabulary", null);
    LexerInterpreter = __decorate([
        __param(1, NotNull)
    ], LexerInterpreter);
    return LexerInterpreter;
}(Lexer));
export { LexerInterpreter };
//# sourceMappingURL=LexerInterpreter.js.map