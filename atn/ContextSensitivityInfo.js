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
// ConvertTo-TS run at 2016-10-04T11:26:28.1575933-07:00
import { DecisionEventInfo } from "./DecisionEventInfo";
import { NotNull } from "../Decorators";
/**
 * This class represents profiling event information for a context sensitivity.
 * Context sensitivities are decisions where a particular input resulted in an
 * SLL conflict, but LL prediction produced a single unique alternative.
 *
 * In some cases, the unique alternative identified by LL prediction is not
 * equal to the minimum represented alternative in the conflicting SLL
 * configuration set. Grammars and inputs which result in this scenario are
 * unable to use {@link PredictionMode#SLL}, which in turn means they cannot use
 * the two-stage parsing strategy to improve parsing performance for that
 * input.
 *
 * @see ParserATNSimulator#reportContextSensitivity
 * @see ParserErrorListener#reportContextSensitivity
 *
 * @since 4.3
 */
var ContextSensitivityInfo = /** @class */ (function (_super) {
    __extends(ContextSensitivityInfo, _super);
    /**
     * Constructs a new instance of the {@link ContextSensitivityInfo} class
     * with the specified detailed context sensitivity information.
     *
     * @param decision The decision number
     * @param state The final simulator state containing the unique
     * alternative identified by full-context prediction
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the context sensitivity was
     * identified during full-context prediction
     */
    function ContextSensitivityInfo(decision, state, input, startIndex, stopIndex) {
        return _super.call(this, decision, state, input, startIndex, stopIndex, true) || this;
    }
    ContextSensitivityInfo = __decorate([
        __param(1, NotNull),
        __param(2, NotNull)
    ], ContextSensitivityInfo);
    return ContextSensitivityInfo;
}(DecisionEventInfo));
export { ContextSensitivityInfo };
//# sourceMappingURL=ContextSensitivityInfo.js.map