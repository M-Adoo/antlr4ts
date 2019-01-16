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
// ConvertTo-TS run at 2016-10-04T11:26:36.6806851-07:00
import { ATNState } from "./ATNState";
import { ATNStateType } from "./ATNStateType";
import { Override } from "../Decorators";
var RuleStartState = /** @class */ (function (_super) {
    __extends(RuleStartState, _super);
    function RuleStartState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPrecedenceRule = false;
        _this.leftFactored = false;
        return _this;
    }
    Object.defineProperty(RuleStartState.prototype, "stateType", {
        get: function () {
            return ATNStateType.RULE_START;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], RuleStartState.prototype, "stateType", null);
    return RuleStartState;
}(ATNState));
export { RuleStartState };
//# sourceMappingURL=RuleStartState.js.map