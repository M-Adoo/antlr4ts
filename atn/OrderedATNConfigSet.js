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
import { ATNConfigSet } from "./ATNConfigSet";
import { Override } from "../Decorators";
/**
 *
 * @author Sam Harwell
 */
var OrderedATNConfigSet = /** @class */ (function (_super) {
    __extends(OrderedATNConfigSet, _super);
    function OrderedATNConfigSet(set, readonly) {
        var _this = this;
        if (set != null && readonly != null) {
            _this = _super.call(this, set, readonly) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        return _this;
    }
    OrderedATNConfigSet.prototype.clone = function (readonly) {
        var copy = new OrderedATNConfigSet(this, readonly);
        if (!readonly && this.isReadOnly) {
            copy.addAll(this);
        }
        return copy;
    };
    OrderedATNConfigSet.prototype.getKey = function (e) {
        // This is a specially crafted key to ensure configurations are only merged if they are equal
        return { state: 0, alt: e.hashCode() };
    };
    OrderedATNConfigSet.prototype.canMerge = function (left, leftKey, right) {
        return left.equals(right);
    };
    __decorate([
        Override
    ], OrderedATNConfigSet.prototype, "clone", null);
    __decorate([
        Override
    ], OrderedATNConfigSet.prototype, "getKey", null);
    __decorate([
        Override
    ], OrderedATNConfigSet.prototype, "canMerge", null);
    return OrderedATNConfigSet;
}(ATNConfigSet));
export { OrderedATNConfigSet };
//# sourceMappingURL=OrderedATNConfigSet.js.map