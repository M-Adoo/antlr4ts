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
import { Parser } from "./Parser";
import { RecognitionException } from "./RecognitionException";
import { NotNull } from "./Decorators";
/** Indicates that the parser could not decide which of two or more paths
 *  to take based upon the remaining input. It tracks the starting token
 *  of the offending input and also knows where the parser was
 *  in the various paths when the error. Reported by reportNoViableAlternative()
 */
var NoViableAltException = /** @class */ (function (_super) {
    __extends(NoViableAltException, _super);
    function NoViableAltException(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
        var _this = this;
        if (recognizer instanceof Parser) {
            if (input === undefined) {
                input = recognizer.inputStream;
            }
            if (startToken === undefined) {
                startToken = recognizer.currentToken;
            }
            if (offendingToken === undefined) {
                offendingToken = recognizer.currentToken;
            }
            if (ctx === undefined) {
                ctx = recognizer.context;
            }
        }
        _this = _super.call(this, recognizer, input, ctx) || this;
        _this._deadEndConfigs = deadEndConfigs;
        _this._startToken = startToken;
        _this.setOffendingToken(recognizer, offendingToken);
        return _this;
    }
    Object.defineProperty(NoViableAltException.prototype, "startToken", {
        get: function () {
            return this._startToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoViableAltException.prototype, "deadEndConfigs", {
        get: function () {
            return this._deadEndConfigs;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], NoViableAltException.prototype, "_startToken", void 0);
    return NoViableAltException;
}(RecognitionException));
export { NoViableAltException };
//# sourceMappingURL=NoViableAltException.js.map