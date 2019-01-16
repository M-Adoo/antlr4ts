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
// ConvertTo-TS run at 2016-10-04T11:26:25.9683447-07:00
import { ActionTransition } from "./ActionTransition";
import { Array2DHashSet } from "../misc/Array2DHashSet";
import { ATN } from "./ATN";
import { ATNDeserializationOptions } from "./ATNDeserializationOptions";
import { ATNStateType } from "./ATNStateType";
import { AtomTransition } from "./AtomTransition";
import { BasicBlockStartState } from "./BasicBlockStartState";
import { BasicState } from "./BasicState";
import { BitSet } from "../misc/BitSet";
import { BlockEndState } from "./BlockEndState";
import { BlockStartState } from "./BlockStartState";
import { DecisionState } from "./DecisionState";
import { DFA } from "../dfa/DFA";
import { EpsilonTransition } from "./EpsilonTransition";
import { IntervalSet } from "../misc/IntervalSet";
import { InvalidState } from "./InvalidState";
import { LexerChannelAction } from "./LexerChannelAction";
import { LexerCustomAction } from "./LexerCustomAction";
import { LexerModeAction } from "./LexerModeAction";
import { LexerMoreAction } from "./LexerMoreAction";
import { LexerPopModeAction } from "./LexerPopModeAction";
import { LexerPushModeAction } from "./LexerPushModeAction";
import { LexerSkipAction } from "./LexerSkipAction";
import { LexerTypeAction } from "./LexerTypeAction";
import { LoopEndState } from "./LoopEndState";
import { NotNull } from "../Decorators";
import { NotSetTransition } from "./NotSetTransition";
import { ParserATNSimulator } from "./ParserATNSimulator";
import { PlusBlockStartState } from "./PlusBlockStartState";
import { PlusLoopbackState } from "./PlusLoopbackState";
import { PrecedencePredicateTransition } from "./PrecedencePredicateTransition";
import { PredicateTransition } from "./PredicateTransition";
import { RangeTransition } from "./RangeTransition";
import { RuleStartState } from "./RuleStartState";
import { RuleStopState } from "./RuleStopState";
import { RuleTransition } from "./RuleTransition";
import { SetTransition } from "./SetTransition";
import { StarBlockStartState } from "./StarBlockStartState";
import { StarLoopbackState } from "./StarLoopbackState";
import { StarLoopEntryState } from "./StarLoopEntryState";
import { Token } from "../Token";
import { TokensStartState } from "./TokensStartState";
import { UUID } from "../misc/UUID";
import { WildcardTransition } from "./WildcardTransition";
/**
 *
 * @author Sam Harwell
 */
var ATNDeserializer = /** @class */ (function () {
    function ATNDeserializer(deserializationOptions) {
        if (deserializationOptions == null) {
            deserializationOptions = ATNDeserializationOptions.defaultOptions;
        }
        this.deserializationOptions = deserializationOptions;
    }
    Object.defineProperty(ATNDeserializer, "SERIALIZED_VERSION", {
        get: function () {
            /* This value should never change. Updates following this version are
             * reflected as change in the unique ID SERIALIZED_UUID.
             */
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines if a particular serialized representation of an ATN supports
     * a particular feature, identified by the {@link UUID} used for serializing
     * the ATN at the time the feature was first introduced.
     *
     * @param feature The {@link UUID} marking the first time the feature was
     * supported in the serialized ATN.
     * @param actualUuid The {@link UUID} of the actual serialized ATN which is
     * currently being deserialized.
     * @returns `true` if the `actualUuid` value represents a
     * serialized ATN at or after the feature identified by `feature` was
     * introduced; otherwise, `false`.
     */
    ATNDeserializer.prototype.isFeatureSupported = function (feature, actualUuid) {
        var featureIndex = ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(feature); });
        if (featureIndex < 0) {
            return false;
        }
        return ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(actualUuid); }) >= featureIndex;
    };
    ATNDeserializer.prototype.deserialize = function (data) {
        data = data.slice(0);
        // Each Uint16 value in data is shifted by +2 at the entry to this method. This is an encoding optimization
        // targeting the serialized values 0 and -1 (serialized to 0xFFFF), each of which are very common in the
        // serialized form of the ATN. In the modified UTF-8 that Java uses for compiled string literals, these two
        // character values have multi-byte forms. By shifting each value by +2, they become characters 2 and 1 prior to
        // writing the string, each of which have single-byte representations. Since the shift occurs in the tool during
        // ATN serialization, each target is responsible for adjusting the values during deserialization.
        //
        // As a special case, note that the first element of data is not adjusted because it contains the major version
        // number of the serialized ATN, which was fixed at 3 at the time the value shifting was implemented.
        for (var i = 1; i < data.length; i++) {
            data[i] = (data[i] - 2) & 0xFFFF;
        }
        var p = 0;
        var version = ATNDeserializer.toInt(data[p++]);
        if (version !== ATNDeserializer.SERIALIZED_VERSION) {
            var reason = "Could not deserialize ATN with version " + version + " (expected " + ATNDeserializer.SERIALIZED_VERSION + ").";
            throw new Error(reason);
        }
        var uuid = ATNDeserializer.toUUID(data, p);
        p += 8;
        if (ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(uuid); }) < 0) {
            var reason = "Could not deserialize ATN with UUID " + uuid + " (expected " + ATNDeserializer.SERIALIZED_UUID + " or a legacy UUID).";
            throw new Error(reason);
        }
        var supportsLexerActions = this.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid);
        var grammarType = ATNDeserializer.toInt(data[p++]);
        var maxTokenType = ATNDeserializer.toInt(data[p++]);
        var atn = new ATN(grammarType, maxTokenType);
        //
        // STATES
        //
        var loopBackStateNumbers = [];
        var endStateNumbers = [];
        var nstates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nstates; i++) {
            var stype = ATNDeserializer.toInt(data[p++]);
            // ignore bad type of states
            if (stype === ATNStateType.INVALID_TYPE) {
                atn.addState(new InvalidState());
                continue;
            }
            var ruleIndex = ATNDeserializer.toInt(data[p++]);
            if (ruleIndex === 0xFFFF) {
                ruleIndex = -1;
            }
            var s = this.stateFactory(stype, ruleIndex);
            if (stype === ATNStateType.LOOP_END) { // special case
                var loopBackStateNumber = ATNDeserializer.toInt(data[p++]);
                loopBackStateNumbers.push([s, loopBackStateNumber]);
            }
            else if (s instanceof BlockStartState) {
                var endStateNumber = ATNDeserializer.toInt(data[p++]);
                endStateNumbers.push([s, endStateNumber]);
            }
            atn.addState(s);
        }
        try {
            // delay the assignment of loop back and end states until we know all the state instances have been initialized
            for (var loopBackStateNumbers_1 = __values(loopBackStateNumbers), loopBackStateNumbers_1_1 = loopBackStateNumbers_1.next(); !loopBackStateNumbers_1_1.done; loopBackStateNumbers_1_1 = loopBackStateNumbers_1.next()) {
                var pair = loopBackStateNumbers_1_1.value;
                pair[0].loopBackState = atn.states[pair[1]];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (loopBackStateNumbers_1_1 && !loopBackStateNumbers_1_1.done && (_a = loopBackStateNumbers_1.return)) _a.call(loopBackStateNumbers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var endStateNumbers_1 = __values(endStateNumbers), endStateNumbers_1_1 = endStateNumbers_1.next(); !endStateNumbers_1_1.done; endStateNumbers_1_1 = endStateNumbers_1.next()) {
                var pair = endStateNumbers_1_1.value;
                pair[0].endState = atn.states[pair[1]];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (endStateNumbers_1_1 && !endStateNumbers_1_1.done && (_b = endStateNumbers_1.return)) _b.call(endStateNumbers_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var numNonGreedyStates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numNonGreedyStates; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].nonGreedy = true;
        }
        var numSllDecisions = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numSllDecisions; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].sll = true;
        }
        var numPrecedenceStates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numPrecedenceStates; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].isPrecedenceRule = true;
        }
        //
        // RULES
        //
        var nrules = ATNDeserializer.toInt(data[p++]);
        if (atn.grammarType === 0 /* LEXER */) {
            atn.ruleToTokenType = new Int32Array(nrules);
        }
        atn.ruleToStartState = new Array(nrules);
        for (var i = 0; i < nrules; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            var startState = atn.states[s];
            startState.leftFactored = ATNDeserializer.toInt(data[p++]) !== 0;
            atn.ruleToStartState[i] = startState;
            if (atn.grammarType === 0 /* LEXER */) {
                var tokenType = ATNDeserializer.toInt(data[p++]);
                if (tokenType === 0xFFFF) {
                    tokenType = Token.EOF;
                }
                atn.ruleToTokenType[i] = tokenType;
                if (!this.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid)) {
                    // this piece of unused metadata was serialized prior to the
                    // addition of LexerAction
                    var actionIndexIgnored = ATNDeserializer.toInt(data[p++]);
                    if (actionIndexIgnored === 0xFFFF) {
                        actionIndexIgnored = -1;
                    }
                }
            }
        }
        atn.ruleToStopState = new Array(nrules);
        try {
            for (var _c = __values(atn.states), _d = _c.next(); !_d.done; _d = _c.next()) {
                var state = _d.value;
                if (!(state instanceof RuleStopState)) {
                    continue;
                }
                atn.ruleToStopState[state.ruleIndex] = state;
                atn.ruleToStartState[state.ruleIndex].stopState = state;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        //
        // MODES
        //
        var nmodes = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nmodes; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            atn.modeToStartState.push(atn.states[s]);
        }
        atn.modeToDFA = new Array(nmodes);
        for (var i = 0; i < nmodes; i++) {
            atn.modeToDFA[i] = new DFA(atn.modeToStartState[i]);
        }
        //
        // SETS
        //
        var sets = [];
        p = this.readSets(data, p, sets, false);
        // Next, if the ATN was serialized with the Unicode SMP feature,
        // deserialize sets with 32-bit arguments <= U+10FFFF.
        if (this.isFeatureSupported(ATNDeserializer.ADDED_UNICODE_SMP, uuid)) {
            p = this.readSets(data, p, sets, true);
        }
        //
        // EDGES
        //
        var nedges = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nedges; i++) {
            var src = ATNDeserializer.toInt(data[p]);
            var trg = ATNDeserializer.toInt(data[p + 1]);
            var ttype = ATNDeserializer.toInt(data[p + 2]);
            var arg1 = ATNDeserializer.toInt(data[p + 3]);
            var arg2 = ATNDeserializer.toInt(data[p + 4]);
            var arg3 = ATNDeserializer.toInt(data[p + 5]);
            var trans = this.edgeFactory(atn, ttype, src, trg, arg1, arg2, arg3, sets);
            // console.log(`EDGE ${trans.constructor.name} ${src}->${trg} ${Transition.serializationNames[ttype]} ${arg1},${arg2},${arg3}`);
            var srcState = atn.states[src];
            srcState.addTransition(trans);
            p += 6;
        }
        var returnTransitionsSet = new Array2DHashSet({
            hashCode: function (o) { return o.stopState ^ o.returnState ^ o.outermostPrecedenceReturn; },
            equals: function (a, b) {
                return a.stopState === b.stopState
                    && a.returnState === b.returnState
                    && a.outermostPrecedenceReturn === b.outermostPrecedenceReturn;
            },
        });
        var returnTransitions = [];
        try {
            for (var _f = __values(atn.states), _g = _f.next(); !_g.done; _g = _f.next()) {
                var state = _g.value;
                var returningToLeftFactored = state.ruleIndex >= 0 && atn.ruleToStartState[state.ruleIndex].leftFactored;
                for (var i = 0; i < state.numberOfTransitions; i++) {
                    var t = state.transition(i);
                    if (!(t instanceof RuleTransition)) {
                        continue;
                    }
                    var ruleTransition = t;
                    var returningFromLeftFactored = atn.ruleToStartState[ruleTransition.target.ruleIndex].leftFactored;
                    if (!returningFromLeftFactored && returningToLeftFactored) {
                        continue;
                    }
                    var outermostPrecedenceReturn = -1;
                    if (atn.ruleToStartState[ruleTransition.target.ruleIndex].isPrecedenceRule) {
                        if (ruleTransition.precedence === 0) {
                            outermostPrecedenceReturn = ruleTransition.target.ruleIndex;
                        }
                    }
                    var current = { stopState: ruleTransition.target.ruleIndex, returnState: ruleTransition.followState.stateNumber, outermostPrecedenceReturn: outermostPrecedenceReturn };
                    if (returnTransitionsSet.add(current)) {
                        returnTransitions.push(current);
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_h = _f.return)) _h.call(_f);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            // Add all elements from returnTransitions to the ATN
            for (var returnTransitions_1 = __values(returnTransitions), returnTransitions_1_1 = returnTransitions_1.next(); !returnTransitions_1_1.done; returnTransitions_1_1 = returnTransitions_1.next()) {
                var returnTransition = returnTransitions_1_1.value;
                var transition = new EpsilonTransition(atn.states[returnTransition.returnState], returnTransition.outermostPrecedenceReturn);
                atn.ruleToStopState[returnTransition.stopState].addTransition(transition);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (returnTransitions_1_1 && !returnTransitions_1_1.done && (_j = returnTransitions_1.return)) _j.call(returnTransitions_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var _k = __values(atn.states), _l = _k.next(); !_l.done; _l = _k.next()) {
                var state = _l.value;
                if (state instanceof BlockStartState) {
                    // we need to know the end state to set its start state
                    if (state.endState == null) {
                        throw new Error("IllegalStateException");
                    }
                    // block end states can only be associated to a single block start state
                    if (state.endState.startState != null) {
                        throw new Error("IllegalStateException");
                    }
                    state.endState.startState = state;
                }
                if (state instanceof PlusLoopbackState) {
                    var loopbackState = state;
                    for (var i = 0; i < loopbackState.numberOfTransitions; i++) {
                        var target = loopbackState.transition(i).target;
                        if (target instanceof PlusBlockStartState) {
                            target.loopBackState = loopbackState;
                        }
                    }
                }
                else if (state instanceof StarLoopbackState) {
                    var loopbackState = state;
                    for (var i = 0; i < loopbackState.numberOfTransitions; i++) {
                        var target = loopbackState.transition(i).target;
                        if (target instanceof StarLoopEntryState) {
                            target.loopBackState = loopbackState;
                        }
                    }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_l && !_l.done && (_m = _k.return)) _m.call(_k);
            }
            finally { if (e_6) throw e_6.error; }
        }
        //
        // DECISIONS
        //
        var ndecisions = ATNDeserializer.toInt(data[p++]);
        for (var i = 1; i <= ndecisions; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            var decState = atn.states[s];
            atn.decisionToState.push(decState);
            decState.decision = i - 1;
        }
        //
        // LEXER ACTIONS
        //
        if (atn.grammarType === 0 /* LEXER */) {
            if (supportsLexerActions) {
                atn.lexerActions = new Array(ATNDeserializer.toInt(data[p++]));
                for (var i = 0; i < atn.lexerActions.length; i++) {
                    var actionType = ATNDeserializer.toInt(data[p++]);
                    var data1 = ATNDeserializer.toInt(data[p++]);
                    if (data1 === 0xFFFF) {
                        data1 = -1;
                    }
                    var data2 = ATNDeserializer.toInt(data[p++]);
                    if (data2 === 0xFFFF) {
                        data2 = -1;
                    }
                    var lexerAction = this.lexerActionFactory(actionType, data1, data2);
                    atn.lexerActions[i] = lexerAction;
                }
            }
            else {
                // for compatibility with older serialized ATNs, convert the old
                // serialized action index for action transitions to the new
                // form, which is the index of a LexerCustomAction
                var legacyLexerActions = [];
                try {
                    for (var _o = __values(atn.states), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var state = _p.value;
                        for (var i = 0; i < state.numberOfTransitions; i++) {
                            var transition = state.transition(i);
                            if (!(transition instanceof ActionTransition)) {
                                continue;
                            }
                            var ruleIndex = transition.ruleIndex;
                            var actionIndex = transition.actionIndex;
                            var lexerAction = new LexerCustomAction(ruleIndex, actionIndex);
                            state.setTransition(i, new ActionTransition(transition.target, ruleIndex, legacyLexerActions.length, false));
                            legacyLexerActions.push(lexerAction);
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_q = _o.return)) _q.call(_o);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                atn.lexerActions = legacyLexerActions;
            }
        }
        this.markPrecedenceDecisions(atn);
        atn.decisionToDFA = new Array(ndecisions);
        for (var i = 0; i < ndecisions; i++) {
            atn.decisionToDFA[i] = new DFA(atn.decisionToState[i], i);
        }
        if (this.deserializationOptions.isVerifyATN) {
            this.verifyATN(atn);
        }
        if (this.deserializationOptions.isGenerateRuleBypassTransitions && atn.grammarType === 1 /* PARSER */) {
            atn.ruleToTokenType = new Int32Array(atn.ruleToStartState.length);
            for (var i = 0; i < atn.ruleToStartState.length; i++) {
                atn.ruleToTokenType[i] = atn.maxTokenType + i + 1;
            }
            for (var i = 0; i < atn.ruleToStartState.length; i++) {
                var bypassStart = new BasicBlockStartState();
                bypassStart.ruleIndex = i;
                atn.addState(bypassStart);
                var bypassStop = new BlockEndState();
                bypassStop.ruleIndex = i;
                atn.addState(bypassStop);
                bypassStart.endState = bypassStop;
                atn.defineDecisionState(bypassStart);
                bypassStop.startState = bypassStart;
                var endState = void 0;
                var excludeTransition = void 0;
                if (atn.ruleToStartState[i].isPrecedenceRule) {
                    // wrap from the beginning of the rule to the StarLoopEntryState
                    endState = undefined;
                    try {
                        for (var _r = __values(atn.states), _s = _r.next(); !_s.done; _s = _r.next()) {
                            var state = _s.value;
                            if (state.ruleIndex !== i) {
                                continue;
                            }
                            if (!(state instanceof StarLoopEntryState)) {
                                continue;
                            }
                            var maybeLoopEndState = state.transition(state.numberOfTransitions - 1).target;
                            if (!(maybeLoopEndState instanceof LoopEndState)) {
                                continue;
                            }
                            if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transition(0).target instanceof RuleStopState) {
                                endState = state;
                                break;
                            }
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (_s && !_s.done && (_t = _r.return)) _t.call(_r);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                    if (!endState) {
                        throw new Error("Couldn't identify final state of the precedence rule prefix section.");
                    }
                    excludeTransition = endState.loopBackState.transition(0);
                }
                else {
                    endState = atn.ruleToStopState[i];
                }
                try {
                    // all non-excluded transitions that currently target end state need to target blockEnd instead
                    for (var _u = __values(atn.states), _v = _u.next(); !_v.done; _v = _u.next()) {
                        var state = _v.value;
                        for (var i_1 = 0; i_1 < state.numberOfTransitions; i_1++) {
                            var transition = state.transition(i_1);
                            if (transition === excludeTransition) {
                                continue;
                            }
                            if (transition.target === endState) {
                                transition.target = bypassStop;
                            }
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_v && !_v.done && (_w = _u.return)) _w.call(_u);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                // all transitions leaving the rule start state need to leave blockStart instead
                while (atn.ruleToStartState[i].numberOfTransitions > 0) {
                    var transition = atn.ruleToStartState[i].removeTransition(atn.ruleToStartState[i].numberOfTransitions - 1);
                    bypassStart.addTransition(transition);
                }
                // link the new states
                atn.ruleToStartState[i].addTransition(new EpsilonTransition(bypassStart));
                bypassStop.addTransition(new EpsilonTransition(endState));
                var matchState = new BasicState();
                atn.addState(matchState);
                matchState.addTransition(new AtomTransition(bypassStop, atn.ruleToTokenType[i]));
                bypassStart.addTransition(new EpsilonTransition(matchState));
            }
            if (this.deserializationOptions.isVerifyATN) {
                // reverify after modification
                this.verifyATN(atn);
            }
        }
        if (this.deserializationOptions.isOptimize) {
            while (true) {
                var optimizationCount = 0;
                optimizationCount += ATNDeserializer.inlineSetRules(atn);
                optimizationCount += ATNDeserializer.combineChainedEpsilons(atn);
                var preserveOrder = atn.grammarType === 0 /* LEXER */;
                optimizationCount += ATNDeserializer.optimizeSets(atn, preserveOrder);
                if (optimizationCount === 0) {
                    break;
                }
            }
            if (this.deserializationOptions.isVerifyATN) {
                // reverify after modification
                this.verifyATN(atn);
            }
        }
        ATNDeserializer.identifyTailCalls(atn);
        return atn;
        var e_1, _a, e_2, _b, e_3, _e, e_4, _h, e_5, _j, e_6, _m, e_7, _q, e_8, _t, e_9, _w;
    };
    ATNDeserializer.prototype.readSets = function (data, p, sets, read32) {
        var nsets = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nsets; i++) {
            var nintervals = ATNDeserializer.toInt(data[p]);
            p++;
            var set = new IntervalSet();
            sets.push(set);
            var containsEof = ATNDeserializer.toInt(data[p++]) !== 0;
            if (containsEof) {
                set.add(-1);
            }
            if (read32) {
                for (var j = 0; j < nintervals; j++) {
                    set.add(ATNDeserializer.toInt32(data, p), ATNDeserializer.toInt32(data, p + 2));
                    p += 4;
                }
            }
            else {
                for (var j = 0; j < nintervals; j++) {
                    set.add(ATNDeserializer.toInt(data[p]), ATNDeserializer.toInt(data[p + 1]));
                    p += 2;
                }
            }
        }
        return p;
    };
    /**
     * Analyze the {@link StarLoopEntryState} states in the specified ATN to set
     * the {@link StarLoopEntryState#precedenceRuleDecision} field to the
     * correct value.
     *
     * @param atn The ATN.
     */
    ATNDeserializer.prototype.markPrecedenceDecisions = function (atn) {
        // Map rule index -> precedence decision for that rule
        var rulePrecedenceDecisions = new Map();
        try {
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                if (!(state instanceof StarLoopEntryState)) {
                    continue;
                }
                /* We analyze the ATN to determine if this ATN decision state is the
                 * decision for the closure block that determines whether a
                 * precedence rule should continue or complete.
                 */
                if (atn.ruleToStartState[state.ruleIndex].isPrecedenceRule) {
                    var maybeLoopEndState = state.transition(state.numberOfTransitions - 1).target;
                    if (maybeLoopEndState instanceof LoopEndState) {
                        if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transition(0).target instanceof RuleStopState) {
                            rulePrecedenceDecisions.set(state.ruleIndex, state);
                            state.precedenceRuleDecision = true;
                            state.precedenceLoopbackStates = new BitSet(atn.states.length);
                        }
                    }
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_10) throw e_10.error; }
        }
        try {
            // After marking precedence decisions, we go back through and fill in
            // StarLoopEntryState.precedenceLoopbackStates.
            for (var rulePrecedenceDecisions_1 = __values(rulePrecedenceDecisions), rulePrecedenceDecisions_1_1 = rulePrecedenceDecisions_1.next(); !rulePrecedenceDecisions_1_1.done; rulePrecedenceDecisions_1_1 = rulePrecedenceDecisions_1.next()) {
                var precedenceDecision = rulePrecedenceDecisions_1_1.value;
                try {
                    for (var _d = __values(atn.ruleToStopState[precedenceDecision[0]].getTransitions()), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var transition = _e.value;
                        if (transition.serializationType !== 1 /* EPSILON */) {
                            continue;
                        }
                        var epsilonTransition = transition;
                        if (epsilonTransition.outermostPrecedenceReturn !== -1) {
                            continue;
                        }
                        precedenceDecision[1].precedenceLoopbackStates.set(transition.target.stateNumber);
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (rulePrecedenceDecisions_1_1 && !rulePrecedenceDecisions_1_1.done && (_g = rulePrecedenceDecisions_1.return)) _g.call(rulePrecedenceDecisions_1);
            }
            finally { if (e_12) throw e_12.error; }
        }
        var e_10, _c, e_12, _g, e_11, _f;
    };
    ATNDeserializer.prototype.verifyATN = function (atn) {
        try {
            // verify assumptions
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                this.checkCondition(state != null, "ATN states should not be null.");
                if (state.stateType === ATNStateType.INVALID_TYPE) {
                    continue;
                }
                this.checkCondition(state.onlyHasEpsilonTransitions || state.numberOfTransitions <= 1);
                if (state instanceof PlusBlockStartState) {
                    this.checkCondition(state.loopBackState != null);
                }
                if (state instanceof StarLoopEntryState) {
                    var starLoopEntryState = state;
                    this.checkCondition(starLoopEntryState.loopBackState != null);
                    this.checkCondition(starLoopEntryState.numberOfTransitions === 2);
                    if (starLoopEntryState.transition(0).target instanceof StarBlockStartState) {
                        this.checkCondition(starLoopEntryState.transition(1).target instanceof LoopEndState);
                        this.checkCondition(!starLoopEntryState.nonGreedy);
                    }
                    else if (starLoopEntryState.transition(0).target instanceof LoopEndState) {
                        this.checkCondition(starLoopEntryState.transition(1).target instanceof StarBlockStartState);
                        this.checkCondition(starLoopEntryState.nonGreedy);
                    }
                    else {
                        throw new Error("IllegalStateException");
                    }
                }
                if (state instanceof StarLoopbackState) {
                    this.checkCondition(state.numberOfTransitions === 1);
                    this.checkCondition(state.transition(0).target instanceof StarLoopEntryState);
                }
                if (state instanceof LoopEndState) {
                    this.checkCondition(state.loopBackState != null);
                }
                if (state instanceof RuleStartState) {
                    this.checkCondition(state.stopState != null);
                }
                if (state instanceof BlockStartState) {
                    this.checkCondition(state.endState != null);
                }
                if (state instanceof BlockEndState) {
                    this.checkCondition(state.startState != null);
                }
                if (state instanceof DecisionState) {
                    var decisionState = state;
                    this.checkCondition(decisionState.numberOfTransitions <= 1 || decisionState.decision >= 0);
                }
                else {
                    this.checkCondition(state.numberOfTransitions <= 1 || state instanceof RuleStopState);
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_13) throw e_13.error; }
        }
        var e_13, _c;
    };
    ATNDeserializer.prototype.checkCondition = function (condition, message) {
        if (!condition) {
            throw new Error("IllegalStateException: " + message);
        }
    };
    ATNDeserializer.inlineSetRules = function (atn) {
        var inlinedCalls = 0;
        var ruleToInlineTransition = new Array(atn.ruleToStartState.length);
        for (var i = 0; i < atn.ruleToStartState.length; i++) {
            var startState = atn.ruleToStartState[i];
            var middleState = startState;
            while (middleState.onlyHasEpsilonTransitions
                && middleState.numberOfOptimizedTransitions === 1
                && middleState.getOptimizedTransition(0).serializationType === 1 /* EPSILON */) {
                middleState = middleState.getOptimizedTransition(0).target;
            }
            if (middleState.numberOfOptimizedTransitions !== 1) {
                continue;
            }
            var matchTransition = middleState.getOptimizedTransition(0);
            var matchTarget = matchTransition.target;
            if (matchTransition.isEpsilon
                || !matchTarget.onlyHasEpsilonTransitions
                || matchTarget.numberOfOptimizedTransitions !== 1
                || !(matchTarget.getOptimizedTransition(0).target instanceof RuleStopState)) {
                continue;
            }
            switch (matchTransition.serializationType) {
                case 5 /* ATOM */:
                case 2 /* RANGE */:
                case 7 /* SET */:
                    ruleToInlineTransition[i] = matchTransition;
                    break;
                case 8 /* NOT_SET */:
                case 9 /* WILDCARD */:
                    // not implemented yet
                    continue;
                default:
                    continue;
            }
        }
        try {
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                if (state.ruleIndex < 0) {
                    continue;
                }
                var optimizedTransitions = void 0;
                for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                    var transition = state.getOptimizedTransition(i);
                    if (!(transition instanceof RuleTransition)) {
                        if (optimizedTransitions != null) {
                            optimizedTransitions.push(transition);
                        }
                        continue;
                    }
                    var ruleTransition = transition;
                    var effective = ruleToInlineTransition[ruleTransition.target.ruleIndex];
                    if (effective == null) {
                        if (optimizedTransitions != null) {
                            optimizedTransitions.push(transition);
                        }
                        continue;
                    }
                    if (optimizedTransitions == null) {
                        optimizedTransitions = [];
                        for (var j = 0; j < i; j++) {
                            optimizedTransitions.push(state.getOptimizedTransition(i));
                        }
                    }
                    inlinedCalls++;
                    var target = ruleTransition.followState;
                    var intermediateState = new BasicState();
                    intermediateState.setRuleIndex(target.ruleIndex);
                    atn.addState(intermediateState);
                    optimizedTransitions.push(new EpsilonTransition(intermediateState));
                    switch (effective.serializationType) {
                        case 5 /* ATOM */:
                            intermediateState.addTransition(new AtomTransition(target, effective._label));
                            break;
                        case 2 /* RANGE */:
                            intermediateState.addTransition(new RangeTransition(target, effective.from, effective.to));
                            break;
                        case 7 /* SET */:
                            intermediateState.addTransition(new SetTransition(target, effective.label));
                            break;
                        default:
                            throw new Error("UnsupportedOperationException");
                    }
                }
                if (optimizedTransitions != null) {
                    if (state.isOptimized) {
                        while (state.numberOfOptimizedTransitions > 0) {
                            state.removeOptimizedTransition(state.numberOfOptimizedTransitions - 1);
                        }
                    }
                    try {
                        for (var optimizedTransitions_1 = __values(optimizedTransitions), optimizedTransitions_1_1 = optimizedTransitions_1.next(); !optimizedTransitions_1_1.done; optimizedTransitions_1_1 = optimizedTransitions_1.next()) {
                            var transition = optimizedTransitions_1_1.value;
                            state.addOptimizedTransition(transition);
                        }
                    }
                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                    finally {
                        try {
                            if (optimizedTransitions_1_1 && !optimizedTransitions_1_1.done && (_c = optimizedTransitions_1.return)) _c.call(optimizedTransitions_1);
                        }
                        finally { if (e_14) throw e_14.error; }
                    }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_15) throw e_15.error; }
        }
        if (ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + inlinedCalls + " rule invocations by inlining sets.");
        }
        return inlinedCalls;
        var e_15, _d, e_14, _c;
    };
    ATNDeserializer.combineChainedEpsilons = function (atn) {
        var removedEdges = 0;
        try {
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                if (!state.onlyHasEpsilonTransitions || state instanceof RuleStopState) {
                    continue;
                }
                var optimizedTransitions = void 0;
                nextTransition: for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                    var transition = state.getOptimizedTransition(i);
                    var intermediate = transition.target;
                    if (transition.serializationType !== 1 /* EPSILON */
                        || transition.outermostPrecedenceReturn !== -1
                        || intermediate.stateType !== ATNStateType.BASIC
                        || !intermediate.onlyHasEpsilonTransitions) {
                        if (optimizedTransitions != null) {
                            optimizedTransitions.push(transition);
                        }
                        continue nextTransition;
                    }
                    for (var j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
                        if (intermediate.getOptimizedTransition(j).serializationType !== 1 /* EPSILON */
                            || intermediate.getOptimizedTransition(j).outermostPrecedenceReturn !== -1) {
                            if (optimizedTransitions != null) {
                                optimizedTransitions.push(transition);
                            }
                            continue nextTransition;
                        }
                    }
                    removedEdges++;
                    if (optimizedTransitions == null) {
                        optimizedTransitions = [];
                        for (var j = 0; j < i; j++) {
                            optimizedTransitions.push(state.getOptimizedTransition(j));
                        }
                    }
                    for (var j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
                        var target = intermediate.getOptimizedTransition(j).target;
                        optimizedTransitions.push(new EpsilonTransition(target));
                    }
                }
                if (optimizedTransitions != null) {
                    if (state.isOptimized) {
                        while (state.numberOfOptimizedTransitions > 0) {
                            state.removeOptimizedTransition(state.numberOfOptimizedTransitions - 1);
                        }
                    }
                    try {
                        for (var optimizedTransitions_2 = __values(optimizedTransitions), optimizedTransitions_2_1 = optimizedTransitions_2.next(); !optimizedTransitions_2_1.done; optimizedTransitions_2_1 = optimizedTransitions_2.next()) {
                            var transition = optimizedTransitions_2_1.value;
                            state.addOptimizedTransition(transition);
                        }
                    }
                    catch (e_16_1) { e_16 = { error: e_16_1 }; }
                    finally {
                        try {
                            if (optimizedTransitions_2_1 && !optimizedTransitions_2_1.done && (_c = optimizedTransitions_2.return)) _c.call(optimizedTransitions_2);
                        }
                        finally { if (e_16) throw e_16.error; }
                    }
                }
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_17) throw e_17.error; }
        }
        if (ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + removedEdges + " transitions by combining chained epsilon transitions.");
        }
        return removedEdges;
        var e_17, _d, e_16, _c;
    };
    ATNDeserializer.optimizeSets = function (atn, preserveOrder) {
        if (preserveOrder) {
            // this optimization currently doesn't preserve edge order.
            return 0;
        }
        var removedPaths = 0;
        var decisions = atn.decisionToState;
        try {
            for (var decisions_1 = __values(decisions), decisions_1_1 = decisions_1.next(); !decisions_1_1.done; decisions_1_1 = decisions_1.next()) {
                var decision = decisions_1_1.value;
                var setTransitions = new IntervalSet();
                for (var i = 0; i < decision.numberOfOptimizedTransitions; i++) {
                    var epsTransition = decision.getOptimizedTransition(i);
                    if (!(epsTransition instanceof EpsilonTransition)) {
                        continue;
                    }
                    if (epsTransition.target.numberOfOptimizedTransitions !== 1) {
                        continue;
                    }
                    var transition = epsTransition.target.getOptimizedTransition(0);
                    if (!(transition.target instanceof BlockEndState)) {
                        continue;
                    }
                    if (transition instanceof NotSetTransition) {
                        // TODO: not yet implemented
                        continue;
                    }
                    if (transition instanceof AtomTransition
                        || transition instanceof RangeTransition
                        || transition instanceof SetTransition) {
                        setTransitions.add(i);
                    }
                }
                if (setTransitions.size <= 1) {
                    continue;
                }
                var optimizedTransitions = [];
                for (var i = 0; i < decision.numberOfOptimizedTransitions; i++) {
                    if (!setTransitions.contains(i)) {
                        optimizedTransitions.push(decision.getOptimizedTransition(i));
                    }
                }
                var blockEndState = decision.getOptimizedTransition(setTransitions.minElement).target.getOptimizedTransition(0).target;
                var matchSet = new IntervalSet();
                try {
                    for (var _a = __values(setTransitions.intervals), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var interval = _b.value;
                        for (var j = interval.a; j <= interval.b; j++) {
                            var matchTransition = decision.getOptimizedTransition(j).target.getOptimizedTransition(0);
                            if (matchTransition instanceof NotSetTransition) {
                                throw new Error("Not yet implemented.");
                            }
                            else {
                                matchSet.addAll(matchTransition.label);
                            }
                        }
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                var newTransition = void 0;
                if (matchSet.intervals.length === 1) {
                    if (matchSet.size === 1) {
                        newTransition = new AtomTransition(blockEndState, matchSet.minElement);
                    }
                    else {
                        var matchInterval = matchSet.intervals[0];
                        newTransition = new RangeTransition(blockEndState, matchInterval.a, matchInterval.b);
                    }
                }
                else {
                    newTransition = new SetTransition(blockEndState, matchSet);
                }
                var setOptimizedState = new BasicState();
                setOptimizedState.setRuleIndex(decision.ruleIndex);
                atn.addState(setOptimizedState);
                setOptimizedState.addTransition(newTransition);
                optimizedTransitions.push(new EpsilonTransition(setOptimizedState));
                removedPaths += decision.numberOfOptimizedTransitions - optimizedTransitions.length;
                if (decision.isOptimized) {
                    while (decision.numberOfOptimizedTransitions > 0) {
                        decision.removeOptimizedTransition(decision.numberOfOptimizedTransitions - 1);
                    }
                }
                try {
                    for (var optimizedTransitions_3 = __values(optimizedTransitions), optimizedTransitions_3_1 = optimizedTransitions_3.next(); !optimizedTransitions_3_1.done; optimizedTransitions_3_1 = optimizedTransitions_3.next()) {
                        var transition = optimizedTransitions_3_1.value;
                        decision.addOptimizedTransition(transition);
                    }
                }
                catch (e_19_1) { e_19 = { error: e_19_1 }; }
                finally {
                    try {
                        if (optimizedTransitions_3_1 && !optimizedTransitions_3_1.done && (_d = optimizedTransitions_3.return)) _d.call(optimizedTransitions_3);
                    }
                    finally { if (e_19) throw e_19.error; }
                }
            }
        }
        catch (e_20_1) { e_20 = { error: e_20_1 }; }
        finally {
            try {
                if (decisions_1_1 && !decisions_1_1.done && (_e = decisions_1.return)) _e.call(decisions_1);
            }
            finally { if (e_20) throw e_20.error; }
        }
        if (ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + removedPaths + " paths by collapsing sets.");
        }
        return removedPaths;
        var e_20, _e, e_18, _c, e_19, _d;
    };
    ATNDeserializer.identifyTailCalls = function (atn) {
        try {
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                for (var i = 0; i < state.numberOfTransitions; i++) {
                    var transition = state.transition(i);
                    if (!(transition instanceof RuleTransition)) {
                        continue;
                    }
                    transition.tailCall = this.testTailCall(atn, transition, false);
                    transition.optimizedTailCall = this.testTailCall(atn, transition, true);
                }
                if (!state.isOptimized) {
                    continue;
                }
                for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                    var transition = state.getOptimizedTransition(i);
                    if (!(transition instanceof RuleTransition)) {
                        continue;
                    }
                    transition.tailCall = this.testTailCall(atn, transition, false);
                    transition.optimizedTailCall = this.testTailCall(atn, transition, true);
                }
            }
        }
        catch (e_21_1) { e_21 = { error: e_21_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_21) throw e_21.error; }
        }
        var e_21, _c;
    };
    ATNDeserializer.testTailCall = function (atn, transition, optimizedPath) {
        if (!optimizedPath && transition.tailCall) {
            return true;
        }
        if (optimizedPath && transition.optimizedTailCall) {
            return true;
        }
        var reachable = new BitSet(atn.states.length);
        var worklist = [];
        worklist.push(transition.followState);
        while (true) {
            var state = worklist.pop();
            if (!state) {
                break;
            }
            if (reachable.get(state.stateNumber)) {
                continue;
            }
            if (state instanceof RuleStopState) {
                continue;
            }
            if (!state.onlyHasEpsilonTransitions) {
                return false;
            }
            var transitionCount = optimizedPath ? state.numberOfOptimizedTransitions : state.numberOfTransitions;
            for (var i = 0; i < transitionCount; i++) {
                var t = optimizedPath ? state.getOptimizedTransition(i) : state.transition(i);
                if (t.serializationType !== 1 /* EPSILON */) {
                    return false;
                }
                worklist.push(t.target);
            }
        }
        return true;
    };
    ATNDeserializer.toInt = function (c) {
        return c;
    };
    ATNDeserializer.toInt32 = function (data, offset) {
        return (data[offset] | (data[offset + 1] << 16)) >>> 0;
    };
    ATNDeserializer.toUUID = function (data, offset) {
        var leastSigBits = ATNDeserializer.toInt32(data, offset);
        var lessSigBits = ATNDeserializer.toInt32(data, offset + 2);
        var moreSigBits = ATNDeserializer.toInt32(data, offset + 4);
        var mostSigBits = ATNDeserializer.toInt32(data, offset + 6);
        return new UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits);
    };
    ATNDeserializer.prototype.edgeFactory = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
        var target = atn.states[trg];
        switch (type) {
            case 1 /* EPSILON */: return new EpsilonTransition(target);
            case 2 /* RANGE */:
                if (arg3 !== 0) {
                    return new RangeTransition(target, Token.EOF, arg2);
                }
                else {
                    return new RangeTransition(target, arg1, arg2);
                }
            case 3 /* RULE */:
                var rt = new RuleTransition(atn.states[arg1], arg2, arg3, target);
                return rt;
            case 4 /* PREDICATE */:
                var pt = new PredicateTransition(target, arg1, arg2, arg3 !== 0);
                return pt;
            case 10 /* PRECEDENCE */:
                return new PrecedencePredicateTransition(target, arg1);
            case 5 /* ATOM */:
                if (arg3 !== 0) {
                    return new AtomTransition(target, Token.EOF);
                }
                else {
                    return new AtomTransition(target, arg1);
                }
            case 6 /* ACTION */:
                var a = new ActionTransition(target, arg1, arg2, arg3 !== 0);
                return a;
            case 7 /* SET */: return new SetTransition(target, sets[arg1]);
            case 8 /* NOT_SET */: return new NotSetTransition(target, sets[arg1]);
            case 9 /* WILDCARD */: return new WildcardTransition(target);
        }
        throw new Error("The specified transition type is not valid.");
    };
    ATNDeserializer.prototype.stateFactory = function (type, ruleIndex) {
        var s;
        switch (type) {
            case ATNStateType.INVALID_TYPE: return new InvalidState();
            case ATNStateType.BASIC:
                s = new BasicState();
                break;
            case ATNStateType.RULE_START:
                s = new RuleStartState();
                break;
            case ATNStateType.BLOCK_START:
                s = new BasicBlockStartState();
                break;
            case ATNStateType.PLUS_BLOCK_START:
                s = new PlusBlockStartState();
                break;
            case ATNStateType.STAR_BLOCK_START:
                s = new StarBlockStartState();
                break;
            case ATNStateType.TOKEN_START:
                s = new TokensStartState();
                break;
            case ATNStateType.RULE_STOP:
                s = new RuleStopState();
                break;
            case ATNStateType.BLOCK_END:
                s = new BlockEndState();
                break;
            case ATNStateType.STAR_LOOP_BACK:
                s = new StarLoopbackState();
                break;
            case ATNStateType.STAR_LOOP_ENTRY:
                s = new StarLoopEntryState();
                break;
            case ATNStateType.PLUS_LOOP_BACK:
                s = new PlusLoopbackState();
                break;
            case ATNStateType.LOOP_END:
                s = new LoopEndState();
                break;
            default:
                var message = "The specified state type " + type + " is not valid.";
                throw new Error(message);
        }
        s.ruleIndex = ruleIndex;
        return s;
    };
    ATNDeserializer.prototype.lexerActionFactory = function (type, data1, data2) {
        switch (type) {
            case 0 /* CHANNEL */:
                return new LexerChannelAction(data1);
            case 1 /* CUSTOM */:
                return new LexerCustomAction(data1, data2);
            case 2 /* MODE */:
                return new LexerModeAction(data1);
            case 3 /* MORE */:
                return LexerMoreAction.INSTANCE;
            case 4 /* POP_MODE */:
                return LexerPopModeAction.INSTANCE;
            case 5 /* PUSH_MODE */:
                return new LexerPushModeAction(data1);
            case 6 /* SKIP */:
                return LexerSkipAction.INSTANCE;
            case 7 /* TYPE */:
                return new LexerTypeAction(data1);
            default:
                var message = "The specified lexer action type " + type + " is not valid.";
                throw new Error(message);
        }
    };
    /* WARNING: DO NOT MERGE THESE LINES. If UUIDs differ during a merge,
     * resolve the conflict by generating a new ID!
     */
    /**
     * This is the earliest supported serialized UUID.
     */
    ATNDeserializer.BASE_SERIALIZED_UUID = UUID.fromString("E4178468-DF95-44D0-AD87-F22A5D5FB6D3");
    /**
     * This UUID indicates an extension of {@link #ADDED_PRECEDENCE_TRANSITIONS}
     * for the addition of lexer actions encoded as a sequence of
     * {@link LexerAction} instances.
     */
    ATNDeserializer.ADDED_LEXER_ACTIONS = UUID.fromString("AB35191A-1603-487E-B75A-479B831EAF6D");
    /**
     * This UUID indicates the serialized ATN contains two sets of
     * IntervalSets, where the second set's values are encoded as
     * 32-bit integers to support the full Unicode SMP range up to U+10FFFF.
     */
    ATNDeserializer.ADDED_UNICODE_SMP = UUID.fromString("59627784-3BE5-417A-B9EB-8131A7286089");
    /**
     * This list contains all of the currently supported UUIDs, ordered by when
     * the feature first appeared in this branch.
     */
    ATNDeserializer.SUPPORTED_UUIDS = [
        ATNDeserializer.BASE_SERIALIZED_UUID,
        ATNDeserializer.ADDED_LEXER_ACTIONS,
        ATNDeserializer.ADDED_UNICODE_SMP,
    ];
    /**
     * This is the current serialized UUID.
     */
    ATNDeserializer.SERIALIZED_UUID = ATNDeserializer.ADDED_UNICODE_SMP;
    __decorate([
        NotNull
    ], ATNDeserializer.prototype, "deserializationOptions", void 0);
    __decorate([
        __param(0, NotNull)
    ], ATNDeserializer.prototype, "deserialize", null);
    __decorate([
        __param(0, NotNull)
    ], ATNDeserializer.prototype, "markPrecedenceDecisions", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ATNDeserializer.prototype, "edgeFactory", null);
    return ATNDeserializer;
}());
export { ATNDeserializer };
//# sourceMappingURL=ATNDeserializer.js.map