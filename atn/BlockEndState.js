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
// ConvertTo-TS run at 2016-10-04T11:26:27.9125304-07:00
import { ATNState } from "./ATNState";
import { ATNStateType } from "./ATNStateType";
import { Override } from "../Decorators";
/** Terminal node of a simple `(a|b|c)` block. */
var BlockEndState = /** @class */ (function (_super) {
    __extends(BlockEndState, _super);
    function BlockEndState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BlockEndState.prototype, "stateType", {
        get: function () {
            return ATNStateType.BLOCK_END;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], BlockEndState.prototype, "stateType", null);
    return BlockEndState;
}(ATNState));
export { BlockEndState };
//# sourceMappingURL=BlockEndState.js.map