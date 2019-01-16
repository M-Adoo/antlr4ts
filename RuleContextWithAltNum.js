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
// ConvertTo-TS run at 2016-10-04T11:26:57.4741196-07:00
import { ATN } from "./atn/ATN";
import { Override } from "./Decorators";
import { ParserRuleContext } from "./ParserRuleContext";
/** A handy class for use with
 *
 *  options {contextSuperClass=org.antlr.v4.runtime.RuleContextWithAltNum;}
 *
 *  that provides a backing field / impl for the outer alternative number
 *  matched for an internal parse tree node.
 *
 *  I'm only putting into Java runtime as I'm certain I'm the only one that
 *  will really every use this.
 */
var RuleContextWithAltNum = /** @class */ (function (_super) {
    __extends(RuleContextWithAltNum, _super);
    function RuleContextWithAltNum(parent, invokingStateNumber) {
        var _this = this;
        if (invokingStateNumber !== undefined) {
            _this = _super.call(this, parent, invokingStateNumber) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        _this._altNumber = ATN.INVALID_ALT_NUMBER;
        return _this;
    }
    Object.defineProperty(RuleContextWithAltNum.prototype, "altNumber", {
        get: function () {
            return this._altNumber;
        },
        // @Override
        set: function (altNum) {
            this._altNumber = altNum;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], RuleContextWithAltNum.prototype, "altNumber", null);
    return RuleContextWithAltNum;
}(ParserRuleContext));
export { RuleContextWithAltNum };
//# sourceMappingURL=RuleContextWithAltNum.js.map