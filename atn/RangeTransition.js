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
import { IntervalSet } from "../misc/IntervalSet";
import { Override, NotNull } from "../Decorators";
import { Transition } from "./Transition";
var RangeTransition = /** @class */ (function (_super) {
    __extends(RangeTransition, _super);
    function RangeTransition(target, from, to) {
        var _this = _super.call(this, target) || this;
        _this.from = from;
        _this.to = to;
        return _this;
    }
    Object.defineProperty(RangeTransition.prototype, "serializationType", {
        get: function () {
            return 2 /* RANGE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeTransition.prototype, "label", {
        get: function () {
            return IntervalSet.of(this.from, this.to);
        },
        enumerable: true,
        configurable: true
    });
    RangeTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= this.from && symbol <= this.to;
    };
    RangeTransition.prototype.toString = function () {
        return "'" + String.fromCharCode(this.from) + "'..'" + String.fromCharCode(this.to) + "'";
    };
    __decorate([
        Override
    ], RangeTransition.prototype, "serializationType", null);
    __decorate([
        Override,
        NotNull
    ], RangeTransition.prototype, "label", null);
    __decorate([
        Override
    ], RangeTransition.prototype, "matches", null);
    __decorate([
        Override,
        NotNull
    ], RangeTransition.prototype, "toString", null);
    RangeTransition = __decorate([
        __param(0, NotNull)
    ], RangeTransition);
    return RangeTransition;
}(Transition));
export { RangeTransition };
//# sourceMappingURL=RangeTransition.js.map