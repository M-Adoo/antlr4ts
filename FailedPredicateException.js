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
import { RecognitionException } from "./RecognitionException";
import { NotNull } from "./Decorators";
import { PredicateTransition } from "./atn/PredicateTransition";
/** A semantic predicate failed during validation.  Validation of predicates
 *  occurs when normally parsing the alternative just like matching a token.
 *  Disambiguating predicate evaluation occurs when we test a predicate during
 *  prediction.
 */
var FailedPredicateException = /** @class */ (function (_super) {
    __extends(FailedPredicateException, _super);
    function FailedPredicateException(recognizer, predicate, message) {
        var _this = _super.call(this, recognizer, recognizer.inputStream, recognizer.context, FailedPredicateException.formatMessage(predicate, message)) || this;
        Object.setPrototypeOf(_this, FailedPredicateException.prototype);
        var s = recognizer.interpreter.atn.states[recognizer.state];
        var trans = s.transition(0);
        if (trans instanceof PredicateTransition) {
            _this._ruleIndex = trans.ruleIndex;
            _this._predicateIndex = trans.predIndex;
        }
        else {
            _this._ruleIndex = 0;
            _this._predicateIndex = 0;
        }
        _this._predicate = predicate;
        _super.prototype.setOffendingToken.call(_this, recognizer, recognizer.currentToken);
        return _this;
    }
    Object.defineProperty(FailedPredicateException.prototype, "ruleIndex", {
        get: function () {
            return this._ruleIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FailedPredicateException.prototype, "predicateIndex", {
        get: function () {
            return this._predicateIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FailedPredicateException.prototype, "predicate", {
        get: function () {
            return this._predicate;
        },
        enumerable: true,
        configurable: true
    });
    FailedPredicateException.formatMessage = function (predicate, message) {
        if (message) {
            return message;
        }
        return "failed predicate: {" + predicate + "}?";
    };
    __decorate([
        NotNull
    ], FailedPredicateException, "formatMessage", null);
    FailedPredicateException = __decorate([
        __param(0, NotNull)
    ], FailedPredicateException);
    return FailedPredicateException;
}(RecognitionException));
export { FailedPredicateException };
//# sourceMappingURL=FailedPredicateException.js.map