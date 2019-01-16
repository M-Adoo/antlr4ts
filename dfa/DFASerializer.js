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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
import { ATNSimulator } from "../atn/ATNSimulator";
import { NotNull, Override } from "../Decorators";
import { PredictionContext } from "../atn/PredictionContext";
import { Recognizer } from "../Recognizer";
import { VocabularyImpl } from "../VocabularyImpl";
/** A DFA walker that knows how to dump them to serialized strings. */
var DFASerializer = /** @class */ (function () {
    function DFASerializer(dfa, vocabulary, ruleNames, atn) {
        if (vocabulary instanceof Recognizer) {
            ruleNames = vocabulary.ruleNames;
            atn = vocabulary.atn;
            vocabulary = vocabulary.vocabulary;
        }
        else if (!vocabulary) {
            vocabulary = VocabularyImpl.EMPTY_VOCABULARY;
        }
        this.dfa = dfa;
        this.vocabulary = vocabulary;
        this.ruleNames = ruleNames;
        this.atn = atn;
    }
    DFASerializer.prototype.toString = function () {
        if (!this.dfa.s0) {
            return "";
        }
        var buf = "";
        if (this.dfa.states) {
            var states = new (Array.bind.apply(Array, __spread([void 0], this.dfa.states.toArray())))();
            states.sort(function (o1, o2) { return o1.stateNumber - o2.stateNumber; });
            try {
                for (var states_1 = __values(states), states_1_1 = states_1.next(); !states_1_1.done; states_1_1 = states_1.next()) {
                    var s = states_1_1.value;
                    var edges = s.getEdgeMap();
                    var edgeKeys = __spread(edges.keys()).sort(function (a, b) { return a - b; });
                    var contextEdges = s.getContextEdgeMap();
                    var contextEdgeKeys = __spread(contextEdges.keys()).sort(function (a, b) { return a - b; });
                    try {
                        for (var edgeKeys_1 = __values(edgeKeys), edgeKeys_1_1 = edgeKeys_1.next(); !edgeKeys_1_1.done; edgeKeys_1_1 = edgeKeys_1.next()) {
                            var entry = edgeKeys_1_1.value;
                            var value = edges.get(entry);
                            if ((value == null || value === ATNSimulator.ERROR) && !s.isContextSymbol(entry)) {
                                continue;
                            }
                            var contextSymbol = false;
                            buf += (this.getStateString(s)) + ("-") + (this.getEdgeLabel(entry)) + ("->");
                            if (s.isContextSymbol(entry)) {
                                buf += ("!");
                                contextSymbol = true;
                            }
                            var t = value;
                            if (t && t.stateNumber !== ATNSimulator.ERROR.stateNumber) {
                                buf += (this.getStateString(t)) + ("\n");
                            }
                            else if (contextSymbol) {
                                buf += ("ctx\n");
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (edgeKeys_1_1 && !edgeKeys_1_1.done && (_a = edgeKeys_1.return)) _a.call(edgeKeys_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (s.isContextSensitive) {
                        try {
                            for (var contextEdgeKeys_1 = __values(contextEdgeKeys), contextEdgeKeys_1_1 = contextEdgeKeys_1.next(); !contextEdgeKeys_1_1.done; contextEdgeKeys_1_1 = contextEdgeKeys_1.next()) {
                                var entry = contextEdgeKeys_1_1.value;
                                buf += (this.getStateString(s))
                                    + ("-")
                                    + (this.getContextLabel(entry))
                                    + ("->")
                                    + (this.getStateString(contextEdges.get(entry)))
                                    + ("\n");
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (contextEdgeKeys_1_1 && !contextEdgeKeys_1_1.done && (_b = contextEdgeKeys_1.return)) _b.call(contextEdgeKeys_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (states_1_1 && !states_1_1.done && (_c = states_1.return)) _c.call(states_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        var output = buf;
        if (output.length === 0) {
            return "";
        }
        //return Utils.sortLinesInString(output);
        return output;
        var e_3, _c, e_1, _a, e_2, _b;
    };
    DFASerializer.prototype.getContextLabel = function (i) {
        if (i === PredictionContext.EMPTY_FULL_STATE_KEY) {
            return "ctx:EMPTY_FULL";
        }
        else if (i === PredictionContext.EMPTY_LOCAL_STATE_KEY) {
            return "ctx:EMPTY_LOCAL";
        }
        if (this.atn && i > 0 && i <= this.atn.states.length) {
            var state = this.atn.states[i];
            var ruleIndex = state.ruleIndex;
            if (this.ruleNames && ruleIndex >= 0 && ruleIndex < this.ruleNames.length) {
                return "ctx:" + String(i) + "(" + this.ruleNames[ruleIndex] + ")";
            }
        }
        return "ctx:" + String(i);
    };
    DFASerializer.prototype.getEdgeLabel = function (i) {
        return this.vocabulary.getDisplayName(i);
    };
    DFASerializer.prototype.getStateString = function (s) {
        if (s === ATNSimulator.ERROR) {
            return "ERROR";
        }
        var n = s.stateNumber;
        var stateStr = "s" + n;
        if (s.isAcceptState) {
            if (s.predicates) {
                stateStr = ":s" + n + "=>" + s.predicates;
            }
            else {
                stateStr = ":s" + n + "=>" + s.prediction;
            }
        }
        if (s.isContextSensitive) {
            stateStr += "*";
            try {
                for (var _a = __values(s.configs), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var config = _b.value;
                    if (config.reachesIntoOuterContext) {
                        stateStr += "*";
                        break;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return stateStr;
        var e_4, _c;
    };
    __decorate([
        NotNull
    ], DFASerializer.prototype, "dfa", void 0);
    __decorate([
        NotNull
    ], DFASerializer.prototype, "vocabulary", void 0);
    __decorate([
        Override
    ], DFASerializer.prototype, "toString", null);
    return DFASerializer;
}());
export { DFASerializer };
//# sourceMappingURL=DFASerializer.js.map