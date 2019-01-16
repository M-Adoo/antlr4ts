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
// ConvertTo-TS run at 2016-10-04T11:26:35.0994191-07:00
import { AbstractPredicateTransition } from "./AbstractPredicateTransition";
import { NotNull, Override } from "../Decorators";
import { SemanticContext } from "./SemanticContext";
/**
 *
 * @author Sam Harwell
 */
var PrecedencePredicateTransition = /** @class */ (function (_super) {
    __extends(PrecedencePredicateTransition, _super);
    function PrecedencePredicateTransition(target, precedence) {
        var _this = _super.call(this, target) || this;
        _this.precedence = precedence;
        return _this;
    }
    Object.defineProperty(PrecedencePredicateTransition.prototype, "serializationType", {
        get: function () {
            return 10 /* PRECEDENCE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrecedencePredicateTransition.prototype, "isEpsilon", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    PrecedencePredicateTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    };
    Object.defineProperty(PrecedencePredicateTransition.prototype, "predicate", {
        get: function () {
            return new SemanticContext.PrecedencePredicate(this.precedence);
        },
        enumerable: true,
        configurable: true
    });
    PrecedencePredicateTransition.prototype.toString = function () {
        return this.precedence + " >= _p";
    };
    __decorate([
        Override
    ], PrecedencePredicateTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], PrecedencePredicateTransition.prototype, "isEpsilon", null);
    __decorate([
        Override
    ], PrecedencePredicateTransition.prototype, "matches", null);
    __decorate([
        Override
    ], PrecedencePredicateTransition.prototype, "toString", null);
    PrecedencePredicateTransition = __decorate([
        __param(0, NotNull)
    ], PrecedencePredicateTransition);
    return PrecedencePredicateTransition;
}(AbstractPredicateTransition));
export { PrecedencePredicateTransition };
//# sourceMappingURL=PrecedencePredicateTransition.js.map