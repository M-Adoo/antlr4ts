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
import { BitSet } from "./misc/BitSet";
import { Override, NotNull } from "./Decorators";
import { Interval } from "./misc/Interval";
/**
 * This implementation of {@link ANTLRErrorListener} can be used to identify
 * certain potential correctness and performance problems in grammars. "Reports"
 * are made by calling {@link Parser#notifyErrorListeners} with the appropriate
 * message.
 *
 * * **Ambiguities**: These are cases where more than one path through the
 *   grammar can match the input.
 * * **Weak context sensitivity**: These are cases where full-context
 *   prediction resolved an SLL conflict to a unique alternative which equaled the
 *   minimum alternative of the SLL conflict.
 * * **Strong (forced) context sensitivity**: These are cases where the
 *   full-context prediction resolved an SLL conflict to a unique alternative,
 *   *and* the minimum alternative of the SLL conflict was found to not be
 *   a truly viable alternative. Two-stage parsing cannot be used for inputs where
 *   this situation occurs.
 *
 * @author Sam Harwell
 */
var DiagnosticErrorListener = /** @class */ (function () {
    /**
     * Initializes a new instance of {@link DiagnosticErrorListener}, specifying
     * whether all ambiguities or only exact ambiguities are reported.
     *
     * @param exactOnly `true` to report only exact ambiguities, otherwise
     * `false` to report all ambiguities.  Defaults to true.
     */
    function DiagnosticErrorListener(exactOnly) {
        if (exactOnly === void 0) { exactOnly = true; }
        this.exactOnly = exactOnly;
        this.exactOnly = exactOnly;
    }
    DiagnosticErrorListener.prototype.syntaxError = function (
    /*@NotNull*/
    recognizer, offendingSymbol, line, charPositionInLine, 
    /*@NotNull*/
    msg, e) {
        // intentionally empty
    };
    DiagnosticErrorListener.prototype.reportAmbiguity = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        if (this.exactOnly && !exact) {
            return;
        }
        var decision = this.getDecisionDescription(recognizer, dfa);
        var conflictingAlts = this.getConflictingAlts(ambigAlts, configs);
        var text = recognizer.inputStream.getText(Interval.of(startIndex, stopIndex));
        var message = "reportAmbiguity d=" + decision + ": ambigAlts=" + conflictingAlts + ", input='" + text + "'";
        recognizer.notifyErrorListeners(message);
    };
    DiagnosticErrorListener.prototype.reportAttemptingFullContext = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState) {
        var format = "reportAttemptingFullContext d=%s, input='%s'";
        var decision = this.getDecisionDescription(recognizer, dfa);
        var text = recognizer.inputStream.getText(Interval.of(startIndex, stopIndex));
        var message = "reportAttemptingFullContext d=" + decision + ", input='" + text + "'";
        recognizer.notifyErrorListeners(message);
    };
    DiagnosticErrorListener.prototype.reportContextSensitivity = function (recognizer, dfa, startIndex, stopIndex, prediction, acceptState) {
        var format = "reportContextSensitivity d=%s, input='%s'";
        var decision = this.getDecisionDescription(recognizer, dfa);
        var text = recognizer.inputStream.getText(Interval.of(startIndex, stopIndex));
        var message = "reportContextSensitivity d=" + decision + ", input='" + text + "'";
        recognizer.notifyErrorListeners(message);
    };
    DiagnosticErrorListener.prototype.getDecisionDescription = function (recognizer, dfa) {
        var decision = dfa.decision;
        var ruleIndex = dfa.atnStartState.ruleIndex;
        var ruleNames = recognizer.ruleNames;
        if (ruleIndex < 0 || ruleIndex >= ruleNames.length) {
            return decision.toString();
        }
        var ruleName = ruleNames[ruleIndex];
        if (!ruleName) {
            return decision.toString();
        }
        return decision + " (" + ruleName + ")";
    };
    /**
     * Computes the set of conflicting or ambiguous alternatives from a
     * configuration set, if that information was not already provided by the
     * parser.
     *
     * @param reportedAlts The set of conflicting or ambiguous alternatives, as
     * reported by the parser.
     * @param configs The conflicting or ambiguous configuration set.
     * @returns Returns `reportedAlts` if it is not `undefined`, otherwise
     * returns the set of alternatives represented in `configs`.
     */
    DiagnosticErrorListener.prototype.getConflictingAlts = function (reportedAlts, configs) {
        if (reportedAlts != null) {
            return reportedAlts;
        }
        var result = new BitSet();
        try {
            for (var configs_1 = __values(configs), configs_1_1 = configs_1.next(); !configs_1_1.done; configs_1_1 = configs_1.next()) {
                var config = configs_1_1.value;
                result.set(config.alt);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (configs_1_1 && !configs_1_1.done && (_a = configs_1.return)) _a.call(configs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
        var e_1, _a;
    };
    __decorate([
        Override
    ], DiagnosticErrorListener.prototype, "syntaxError", null);
    __decorate([
        Override,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(6, NotNull)
    ], DiagnosticErrorListener.prototype, "reportAmbiguity", null);
    __decorate([
        Override,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(5, NotNull)
    ], DiagnosticErrorListener.prototype, "reportAttemptingFullContext", null);
    __decorate([
        Override,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(5, NotNull)
    ], DiagnosticErrorListener.prototype, "reportContextSensitivity", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull)
    ], DiagnosticErrorListener.prototype, "getDecisionDescription", null);
    __decorate([
        NotNull,
        __param(1, NotNull)
    ], DiagnosticErrorListener.prototype, "getConflictingAlts", null);
    return DiagnosticErrorListener;
}());
export { DiagnosticErrorListener };
//# sourceMappingURL=DiagnosticErrorListener.js.map