/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
import { NotNull } from "../Decorators";
/**
 * This class provides access to specific and aggregate statistics gathered
 * during profiling of a parser.
 *
 * @since 4.3
 */
var ParseInfo = /** @class */ (function () {
    function ParseInfo(atnSimulator) {
        this.atnSimulator = atnSimulator;
    }
    /**
     * Gets an array of {@link DecisionInfo} instances containing the profiling
     * information gathered for each decision in the ATN.
     *
     * @returns An array of {@link DecisionInfo} instances, indexed by decision
     * number.
     */
    ParseInfo.prototype.getDecisionInfo = function () {
        return this.atnSimulator.getDecisionInfo();
    };
    /**
     * Gets the decision numbers for decisions that required one or more
     * full-context predictions during parsing. These are decisions for which
     * {@link DecisionInfo#LL_Fallback} is non-zero.
     *
     * @returns A list of decision numbers which required one or more
     * full-context predictions during parsing.
     */
    ParseInfo.prototype.getLLDecisions = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var LL = [];
        for (var i = 0; i < decisions.length; i++) {
            var fallBack = decisions[i].LL_Fallback;
            if (fallBack > 0) {
                LL.push(i);
            }
        }
        return LL;
    };
    /**
     * Gets the total time spent during prediction across all decisions made
     * during parsing. This value is the sum of
     * {@link DecisionInfo#timeInPrediction} for all decisions.
     */
    ParseInfo.prototype.getTotalTimeInPrediction = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var t = 0;
        try {
            for (var decisions_1 = __values(decisions), decisions_1_1 = decisions_1.next(); !decisions_1_1.done; decisions_1_1 = decisions_1.next()) {
                var decision = decisions_1_1.value;
                t += decision.timeInPrediction;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (decisions_1_1 && !decisions_1_1.done && (_a = decisions_1.return)) _a.call(decisions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return t;
        var e_1, _a;
    };
    /**
     * Gets the total number of SLL lookahead operations across all decisions
     * made during parsing. This value is the sum of
     * {@link DecisionInfo#SLL_TotalLook} for all decisions.
     */
    ParseInfo.prototype.getTotalSLLLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_2 = __values(decisions), decisions_2_1 = decisions_2.next(); !decisions_2_1.done; decisions_2_1 = decisions_2.next()) {
                var decision = decisions_2_1.value;
                k += decision.SLL_TotalLook;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (decisions_2_1 && !decisions_2_1.done && (_a = decisions_2.return)) _a.call(decisions_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return k;
        var e_2, _a;
    };
    /**
     * Gets the total number of LL lookahead operations across all decisions
     * made during parsing. This value is the sum of
     * {@link DecisionInfo#LL_TotalLook} for all decisions.
     */
    ParseInfo.prototype.getTotalLLLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_3 = __values(decisions), decisions_3_1 = decisions_3.next(); !decisions_3_1.done; decisions_3_1 = decisions_3.next()) {
                var decision = decisions_3_1.value;
                k += decision.LL_TotalLook;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (decisions_3_1 && !decisions_3_1.done && (_a = decisions_3.return)) _a.call(decisions_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return k;
        var e_3, _a;
    };
    /**
     * Gets the total number of ATN lookahead operations for SLL prediction
     * across all decisions made during parsing.
     */
    ParseInfo.prototype.getTotalSLLATNLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_4 = __values(decisions), decisions_4_1 = decisions_4.next(); !decisions_4_1.done; decisions_4_1 = decisions_4.next()) {
                var decision = decisions_4_1.value;
                k += decision.SLL_ATNTransitions;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (decisions_4_1 && !decisions_4_1.done && (_a = decisions_4.return)) _a.call(decisions_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return k;
        var e_4, _a;
    };
    /**
     * Gets the total number of ATN lookahead operations for LL prediction
     * across all decisions made during parsing.
     */
    ParseInfo.prototype.getTotalLLATNLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_5 = __values(decisions), decisions_5_1 = decisions_5.next(); !decisions_5_1.done; decisions_5_1 = decisions_5.next()) {
                var decision = decisions_5_1.value;
                k += decision.LL_ATNTransitions;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (decisions_5_1 && !decisions_5_1.done && (_a = decisions_5.return)) _a.call(decisions_5);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return k;
        var e_5, _a;
    };
    /**
     * Gets the total number of ATN lookahead operations for SLL and LL
     * prediction across all decisions made during parsing.
     *
     * This value is the sum of {@link #getTotalSLLATNLookaheadOps} and
     * {@link #getTotalLLATNLookaheadOps}.
     */
    ParseInfo.prototype.getTotalATNLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_6 = __values(decisions), decisions_6_1 = decisions_6.next(); !decisions_6_1.done; decisions_6_1 = decisions_6.next()) {
                var decision = decisions_6_1.value;
                k += decision.SLL_ATNTransitions;
                k += decision.LL_ATNTransitions;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (decisions_6_1 && !decisions_6_1.done && (_a = decisions_6.return)) _a.call(decisions_6);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return k;
        var e_6, _a;
    };
    ParseInfo.prototype.getDFASize = function (decision) {
        if (decision) {
            var decisionToDFA = this.atnSimulator.atn.decisionToDFA[decision];
            return decisionToDFA.states.size;
        }
        else {
            var n = 0;
            var decisionToDFA = this.atnSimulator.atn.decisionToDFA;
            for (var i = 0; i < decisionToDFA.length; i++) {
                n += this.getDFASize(i);
            }
            return n;
        }
    };
    __decorate([
        NotNull
    ], ParseInfo.prototype, "getDecisionInfo", null);
    __decorate([
        NotNull
    ], ParseInfo.prototype, "getLLDecisions", null);
    ParseInfo = __decorate([
        __param(0, NotNull)
    ], ParseInfo);
    return ParseInfo;
}());
export { ParseInfo };
//# sourceMappingURL=ParseInfo.js.map