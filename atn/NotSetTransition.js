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
import { Override, NotNull, Nullable } from "../Decorators";
import { SetTransition } from "./SetTransition";
var NotSetTransition = /** @class */ (function (_super) {
    __extends(NotSetTransition, _super);
    function NotSetTransition(target, set) {
        return _super.call(this, target, set) || this;
    }
    Object.defineProperty(NotSetTransition.prototype, "serializationType", {
        get: function () {
            return 8 /* NOT_SET */;
        },
        enumerable: true,
        configurable: true
    });
    NotSetTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= minVocabSymbol
            && symbol <= maxVocabSymbol
            && !_super.prototype.matches.call(this, symbol, minVocabSymbol, maxVocabSymbol);
    };
    NotSetTransition.prototype.toString = function () {
        return "~" + _super.prototype.toString.call(this);
    };
    __decorate([
        Override
    ], NotSetTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], NotSetTransition.prototype, "matches", null);
    __decorate([
        Override
    ], NotSetTransition.prototype, "toString", null);
    NotSetTransition = __decorate([
        __param(0, NotNull), __param(1, Nullable)
    ], NotSetTransition);
    return NotSetTransition;
}(SetTransition));
export { NotSetTransition };
//# sourceMappingURL=NotSetTransition.js.map