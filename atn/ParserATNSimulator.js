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
// ConvertTo-TS run at 2016-10-04T11:26:31.1989835-07:00
import { AcceptStateInfo } from "../dfa/AcceptStateInfo";
import { ActionTransition } from "./ActionTransition";
import { Array2DHashSet } from "../misc/Array2DHashSet";
import { Arrays } from "../misc/Arrays";
import { ATN } from "./ATN";
import { ATNConfig } from "./ATNConfig";
import { ATNConfigSet } from "./ATNConfigSet";
import { ATNSimulator } from "./ATNSimulator";
import { ATNStateType } from "./ATNStateType";
import { AtomTransition } from "./AtomTransition";
import { BitSet } from "../misc/BitSet";
import { ConflictInfo } from "./ConflictInfo";
import { DecisionState } from "./DecisionState";
import { DFAState } from "../dfa/DFAState";
import { IntegerList } from "../misc/IntegerList";
import { Interval } from "../misc/Interval";
import { IntStream } from "../IntStream";
import { NotNull, Nullable, Override } from "../Decorators";
import { NotSetTransition } from "./NotSetTransition";
import { NoViableAltException } from "../NoViableAltException";
import { ObjectEqualityComparator } from "../misc/ObjectEqualityComparator";
import { ParserRuleContext } from "../ParserRuleContext";
import { PredictionContext } from "./PredictionContext";
import { PredictionContextCache } from "./PredictionContextCache";
import { PredictionMode } from "./PredictionMode";
import { RuleStopState } from "./RuleStopState";
import { RuleTransition } from "./RuleTransition";
import { SemanticContext } from "./SemanticContext";
import { SetTransition } from "./SetTransition";
import { SimulatorState } from "./SimulatorState";
import { Token } from "../Token";
import { VocabularyImpl } from "../VocabularyImpl";
// import * as assert from "assert";
var MAX_SHORT_VALUE = 0xFFFF;
var MIN_INTEGER_VALUE = -((1 << 31) >>> 0);
/**
 * The embodiment of the adaptive LL(*), ALL(*), parsing strategy.
 *
 * The basic complexity of the adaptive strategy makes it harder to understand.
 * We begin with ATN simulation to build paths in a DFA. Subsequent prediction
 * requests go through the DFA first. If they reach a state without an edge for
 * the current symbol, the algorithm fails over to the ATN simulation to
 * complete the DFA path for the current input (until it finds a conflict state
 * or uniquely predicting state).
 *
 * All of that is done without using the outer context because we want to create
 * a DFA that is not dependent upon the rule invocation stack when we do a
 * prediction. One DFA works in all contexts. We avoid using context not
 * necessarily because it's slower, although it can be, but because of the DFA
 * caching problem. The closure routine only considers the rule invocation stack
 * created during prediction beginning in the decision rule. For example, if
 * prediction occurs without invoking another rule's ATN, there are no context
 * stacks in the configurations. When lack of context leads to a conflict, we
 * don't know if it's an ambiguity or a weakness in the strong LL(*) parsing
 * strategy (versus full LL(*)).
 *
 * When SLL yields a configuration set with conflict, we rewind the input and
 * retry the ATN simulation, this time using full outer context without adding
 * to the DFA. Configuration context stacks will be the full invocation stacks
 * from the start rule. If we get a conflict using full context, then we can
 * definitively say we have a true ambiguity for that input sequence. If we
 * don't get a conflict, it implies that the decision is sensitive to the outer
 * context. (It is not context-sensitive in the sense of context-sensitive
 * grammars.)
 *
 * The next time we reach this DFA state with an SLL conflict, through DFA
 * simulation, we will again retry the ATN simulation using full context mode.
 * This is slow because we can't save the results and have to "interpret" the
 * ATN each time we get that input.
 *
 * **CACHING FULL CONTEXT PREDICTIONS**
 *
 * We could cache results from full context to predicted alternative easily and
 * that saves a lot of time but doesn't work in presence of predicates. The set
 * of visible predicates from the ATN start state changes depending on the
 * context, because closure can fall off the end of a rule. I tried to cache
 * tuples (stack context, semantic context, predicted alt) but it was slower
 * than interpreting and much more complicated. Also required a huge amount of
 * memory. The goal is not to create the world's fastest parser anyway. I'd like
 * to keep this algorithm simple. By launching multiple threads, we can improve
 * the speed of parsing across a large number of files.
 *
 * There is no strict ordering between the amount of input used by SLL vs LL,
 * which makes it really hard to build a cache for full context. Let's say that
 * we have input A B C that leads to an SLL conflict with full context X. That
 * implies that using X we might only use A B but we could also use A B C D to
 * resolve conflict. Input A B C D could predict alternative 1 in one position
 * in the input and A B C E could predict alternative 2 in another position in
 * input. The conflicting SLL configurations could still be non-unique in the
 * full context prediction, which would lead us to requiring more input than the
 * original A B C.	To make a	prediction cache work, we have to track	the exact
 * input	used during the previous prediction. That amounts to a cache that maps
 * X to a specific DFA for that context.
 *
 * Something should be done for left-recursive expression predictions. They are
 * likely LL(1) + pred eval. Easier to do the whole SLL unless error and retry
 * with full LL thing Sam does.
 *
 * **AVOIDING FULL CONTEXT PREDICTION**
 *
 * We avoid doing full context retry when the outer context is empty, we did not
 * dip into the outer context by falling off the end of the decision state rule,
 * or when we force SLL mode.
 *
 * As an example of the not dip into outer context case, consider as super
 * constructor calls versus function calls. One grammar might look like
 * this:
 *
 * ```antlr
 * ctorBody
 *   : '{' superCall? stat* '}'
 *   ;
 * ```
 *
 * Or, you might see something like
 *
 * ```antlr
 * stat
 *   : superCall ';'
 *   | expression ';'
 *   | ...
 *   ;
 * ```
 *
 * In both cases I believe that no closure operations will dip into the outer
 * context. In the first case ctorBody in the worst case will stop at the '}'.
 * In the 2nd case it should stop at the ';'. Both cases should stay within the
 * entry rule and not dip into the outer context.
 *
 * **PREDICATES**
 *
 * Predicates are always evaluated if present in either SLL or LL both. SLL and
 * LL simulation deals with predicates differently. SLL collects predicates as
 * it performs closure operations like ANTLR v3 did. It delays predicate
 * evaluation until it reaches and accept state. This allows us to cache the SLL
 * ATN simulation whereas, if we had evaluated predicates on-the-fly during
 * closure, the DFA state configuration sets would be different and we couldn't
 * build up a suitable DFA.
 *
 * When building a DFA accept state during ATN simulation, we evaluate any
 * predicates and return the sole semantically valid alternative. If there is
 * more than 1 alternative, we report an ambiguity. If there are 0 alternatives,
 * we throw an exception. Alternatives without predicates act like they have
 * true predicates. The simple way to think about it is to strip away all
 * alternatives with false predicates and choose the minimum alternative that
 * remains.
 *
 * When we start in the DFA and reach an accept state that's predicated, we test
 * those and return the minimum semantically viable alternative. If no
 * alternatives are viable, we throw an exception.
 *
 * During full LL ATN simulation, closure always evaluates predicates and
 * on-the-fly. This is crucial to reducing the configuration set size during
 * closure. It hits a landmine when parsing with the Java grammar, for example,
 * without this on-the-fly evaluation.
 *
 * **SHARING DFA**
 *
 * All instances of the same parser share the same decision DFAs through a
 * static field. Each instance gets its own ATN simulator but they share the
 * same {@link ATN#decisionToDFA} field. They also share a
 * {@link PredictionContextCache} object that makes sure that all
 * {@link PredictionContext} objects are shared among the DFA states. This makes
 * a big size difference.
 *
 * **THREAD SAFETY**
 *
 * The {@link ParserATNSimulator} locks on the {@link ATN#decisionToDFA} field when
 * it adds a new DFA object to that array. {@link #addDFAEdge}
 * locks on the DFA for the current decision when setting the
 * {@link DFAState#edges} field. {@link #addDFAState} locks on
 * the DFA for the current decision when looking up a DFA state to see if it
 * already exists. We must make sure that all requests to add DFA states that
 * are equivalent result in the same shared DFA object. This is because lots of
 * threads will be trying to update the DFA at once. The
 * {@link #addDFAState} method also locks inside the DFA lock
 * but this time on the shared context cache when it rebuilds the
 * configurations' {@link PredictionContext} objects using cached
 * subgraphs/nodes. No other locking occurs, even during DFA simulation. This is
 * safe as long as we can guarantee that all threads referencing
 * `s.edge[t]` get the same physical target {@link DFAState}, or
 * `undefined`. Once into the DFA, the DFA simulation does not reference the
 * {@link DFA#states} map. It follows the {@link DFAState#edges} field to new
 * targets. The DFA simulator will either find {@link DFAState#edges} to be
 * `undefined`, to be non-`undefined` and `dfa.edges[t]` undefined, or
 * `dfa.edges[t]` to be non-undefined. The
 * {@link #addDFAEdge} method could be racing to set the field
 * but in either case the DFA simulator works; if `undefined`, and requests ATN
 * simulation. It could also race trying to get `dfa.edges[t]`, but either
 * way it will work because it's not doing a test and set operation.
 *
 * **Starting with SLL then failing to combined SLL/LL (Two-Stage
 * Parsing)**
 *
 * Sam pointed out that if SLL does not give a syntax error, then there is no
 * point in doing full LL, which is slower. We only have to try LL if we get a
 * syntax error. For maximum speed, Sam starts the parser set to pure SLL
 * mode with the {@link BailErrorStrategy}:
 *
 * ```
 * parser.interpreter.{@link #setPredictionMode setPredictionMode}`(`{@link PredictionMode#SLL}`)`;
 * parser.{@link Parser#setErrorHandler setErrorHandler}(new {@link BailErrorStrategy}());
 * ```
 *
 * If it does not get a syntax error, then we're done. If it does get a syntax
 * error, we need to retry with the combined SLL/LL strategy.
 *
 * The reason this works is as follows. If there are no SLL conflicts, then the
 * grammar is SLL (at least for that input set). If there is an SLL conflict,
 * the full LL analysis must yield a set of viable alternatives which is a
 * subset of the alternatives reported by SLL. If the LL set is a singleton,
 * then the grammar is LL but not SLL. If the LL set is the same size as the SLL
 * set, the decision is SLL. If the LL set has size &gt; 1, then that decision
 * is truly ambiguous on the current input. If the LL set is smaller, then the
 * SLL conflict resolution might choose an alternative that the full LL would
 * rule out as a possibility based upon better context information. If that's
 * the case, then the SLL parse will definitely get an error because the full LL
 * analysis says it's not viable. If SLL conflict resolution chooses an
 * alternative within the LL set, them both SLL and LL would choose the same
 * alternative because they both choose the minimum of multiple conflicting
 * alternatives.
 *
 * Let's say we have a set of SLL conflicting alternatives `{1, 2, 3}` and
 * a smaller LL set called *s*. If *s* is `{2, 3}`, then SLL
 * parsing will get an error because SLL will pursue alternative 1. If
 * *s* is `{1, 2}` or `{1, 3}` then both SLL and LL will
 * choose the same alternative because alternative one is the minimum of either
 * set. If *s* is `{2}` or `{3}` then SLL will get a syntax
 * error. If *s* is `{1}` then SLL will succeed.
 *
 * Of course, if the input is invalid, then we will get an error for sure in
 * both SLL and LL parsing. Erroneous input will therefore require 2 passes over
 * the input.
 */
var ParserATNSimulator = /** @class */ (function (_super) {
    __extends(ParserATNSimulator, _super);
    function ParserATNSimulator(atn, parser) {
        var _this = _super.call(this, atn) || this;
        _this.predictionMode = PredictionMode.LL;
        _this.force_global_context = false;
        _this.always_try_local_context = true;
        /**
         * Determines whether the DFA is used for full-context predictions. When
         * `true`, the DFA stores transition information for both full-context
         * and SLL parsing; otherwise, the DFA only stores SLL transition
         * information.
         *
         * For some grammars, enabling the full-context DFA can result in a
         * substantial performance improvement. However, this improvement typically
         * comes at the expense of memory used for storing the cached DFA states,
         * configuration sets, and prediction contexts.
         *
         * The default value is `false`.
         */
        _this.enable_global_context_dfa = false;
        _this.optimize_unique_closure = true;
        _this.optimize_ll1 = true;
        _this.optimize_tail_calls = true;
        _this.tail_call_preserves_sll = true;
        _this.treat_sllk1_conflict_as_ambiguity = false;
        /**
         * When `true`, ambiguous alternatives are reported when they are
         * encountered within {@link #execATN}. When `false`, these messages
         * are suppressed. The default is `false`.
         *
         * When messages about ambiguous alternatives are not required, setting this
         * to `false` enables additional internal optimizations which may lose
         * this information.
         */
        _this.reportAmbiguities = false;
        /** By default we do full context-sensitive LL(*) parsing not
         *  Strong LL(*) parsing. If we fail with Strong LL(*) we
         *  try full LL(*). That means we rewind and use context information
         *  when closure operations fall off the end of the rule that
         *  holds the decision were evaluating.
         */
        _this.userWantsCtxSensitive = true;
        _this._parser = parser;
        return _this;
    }
    ParserATNSimulator.prototype.getPredictionMode = function () {
        return this.predictionMode;
    };
    ParserATNSimulator.prototype.setPredictionMode = function (predictionMode) {
        this.predictionMode = predictionMode;
    };
    ParserATNSimulator.prototype.reset = function () {
        // intentionally empty
    };
    ParserATNSimulator.prototype.adaptivePredict = function (input, decision, outerContext, useContext) {
        if (useContext === undefined) {
            useContext = false;
        }
        var dfa = this.atn.decisionToDFA[decision];
        // assert(dfa != null);
        if (this.optimize_ll1 && !dfa.isPrecedenceDfa && !dfa.isEmpty) {
            var ll_1 = input.LA(1);
            if (ll_1 >= 0 && ll_1 <= 0xFFFF) {
                var key = ((decision << 16) >>> 0) + ll_1;
                var alt = this.atn.LL1Table.get(key);
                if (alt != null) {
                    return alt;
                }
            }
        }
        this.dfa = dfa;
        if (this.force_global_context) {
            useContext = true;
        }
        else if (!this.always_try_local_context) {
            useContext = useContext || dfa.isContextSensitive;
        }
        this.userWantsCtxSensitive = useContext || (this.predictionMode !== PredictionMode.SLL && outerContext != null && !this.atn.decisionToState[decision].sll);
        if (outerContext == null) {
            outerContext = ParserRuleContext.emptyContext();
        }
        var state;
        if (!dfa.isEmpty) {
            state = this.getStartState(dfa, input, outerContext, useContext);
        }
        if (state == null) {
            if (outerContext == null) {
                outerContext = ParserRuleContext.emptyContext();
            }
            if (ParserATNSimulator.debug) {
                console.log("ATN decision " + dfa.decision +
                    " exec LA(1)==" + this.getLookaheadName(input) +
                    ", outerContext=" + outerContext.toString(this._parser));
            }
            state = this.computeStartState(dfa, outerContext, useContext);
        }
        var m = input.mark();
        var index = input.index;
        try {
            var alt = this.execDFA(dfa, input, index, state);
            if (ParserATNSimulator.debug) {
                console.log("DFA after predictATN: " + dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
            }
            return alt;
        }
        finally {
            this.dfa = undefined;
            input.seek(index);
            input.release(m);
        }
    };
    ParserATNSimulator.prototype.getStartState = function (dfa, input, outerContext, useContext) {
        if (!useContext) {
            if (dfa.isPrecedenceDfa) {
                // the start state for a precedence DFA depends on the current
                // parser precedence, and is provided by a DFA method.
                var state = dfa.getPrecedenceStartState(this._parser.precedence, false);
                if (state == null) {
                    return undefined;
                }
                return new SimulatorState(outerContext, state, false, outerContext);
            }
            else {
                if (dfa.s0 == null) {
                    return undefined;
                }
                return new SimulatorState(outerContext, dfa.s0, false, outerContext);
            }
        }
        if (!this.enable_global_context_dfa) {
            return undefined;
        }
        var remainingContext = outerContext;
        // assert(outerContext != null);
        var s0;
        if (dfa.isPrecedenceDfa) {
            s0 = dfa.getPrecedenceStartState(this._parser.precedence, true);
        }
        else {
            s0 = dfa.s0full;
        }
        while (remainingContext != null && s0 != null && s0.isContextSensitive) {
            remainingContext = this.skipTailCalls(remainingContext);
            s0 = s0.getContextTarget(this.getReturnState(remainingContext));
            if (remainingContext.isEmpty) {
                // assert(s0 == null || !s0.isContextSensitive);
            }
            else {
                remainingContext = remainingContext.parent;
            }
        }
        if (s0 == null) {
            return undefined;
        }
        return new SimulatorState(outerContext, s0, useContext, remainingContext);
    };
    ParserATNSimulator.prototype.execDFA = function (dfa, input, startIndex, state) {
        var outerContext = state.outerContext;
        if (ParserATNSimulator.dfa_debug) {
            console.log("DFA decision " + dfa.decision +
                " exec LA(1)==" + this.getLookaheadName(input) +
                ", outerContext=" + outerContext.toString(this._parser));
        }
        if (ParserATNSimulator.dfa_debug) {
            console.log(dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
        }
        var s = state.s0;
        var t = input.LA(1);
        var remainingOuterContext = state.remainingOuterContext;
        while (true) {
            if (ParserATNSimulator.dfa_debug) {
                console.log("DFA state " + s.stateNumber + " LA(1)==" + this.getLookaheadName(input));
            }
            if (state.useContext) {
                while (s.isContextSymbol(t)) {
                    var next = void 0;
                    if (remainingOuterContext != null) {
                        remainingOuterContext = this.skipTailCalls(remainingOuterContext);
                        next = s.getContextTarget(this.getReturnState(remainingOuterContext));
                    }
                    if (next == null) {
                        // fail over to ATN
                        var initialState = new SimulatorState(state.outerContext, s, state.useContext, remainingOuterContext);
                        return this.execATN(dfa, input, startIndex, initialState);
                    }
                    // assert(remainingOuterContext != null);
                    remainingOuterContext = remainingOuterContext.parent;
                    s = next;
                }
            }
            if (this.isAcceptState(s, state.useContext)) {
                if (s.predicates != null) {
                    if (ParserATNSimulator.dfa_debug) {
                        console.log("accept " + s);
                    }
                }
                else {
                    if (ParserATNSimulator.dfa_debug) {
                        console.log("accept; predict " + s.prediction + " in state " + s.stateNumber);
                    }
                }
                // keep going unless we're at EOF or state only has one alt number
                // mentioned in configs; check if something else could match
                // TODO: don't we always stop? only lexer would keep going
                // TODO: v3 dfa don't do this.
                break;
            }
            // t is not updated if one of these states is reached
            // assert(!this.isAcceptState(s, state.useContext));
            // if no edge, pop over to ATN interpreter, update DFA and return
            var target = this.getExistingTargetState(s, t);
            if (target == null) {
                if (ParserATNSimulator.dfa_debug && t >= 0) {
                    console.log("no edge for " + this._parser.vocabulary.getDisplayName(t));
                }
                var alt = void 0;
                if (ParserATNSimulator.dfa_debug) {
                    var interval = Interval.of(startIndex, this._parser.inputStream.index);
                    console.log("ATN exec upon " +
                        this._parser.inputStream.getText(interval) +
                        " at DFA state " + s.stateNumber);
                }
                var initialState = new SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                alt = this.execATN(dfa, input, startIndex, initialState);
                if (ParserATNSimulator.dfa_debug) {
                    console.log("back from DFA update, alt=" + alt + ", dfa=\n" + dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
                    //dump(dfa);
                }
                // action already executed
                if (ParserATNSimulator.dfa_debug) {
                    console.log("DFA decision " + dfa.decision +
                        " predicts " + alt);
                }
                return alt; // we've updated DFA, exec'd action, and have our deepest answer
            }
            else if (target === ATNSimulator.ERROR) {
                var errorState = new SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                return this.handleNoViableAlt(input, startIndex, errorState);
            }
            s = target;
            if (!this.isAcceptState(s, state.useContext) && t !== IntStream.EOF) {
                input.consume();
                t = input.LA(1);
            }
        }
        //		if ( acceptState==null ) {
        //			if ( debug ) System.out.println("!!! no viable alt in dfa");
        //			return -1;
        //		}
        if (!state.useContext && s.configs.conflictInfo != null) {
            if (dfa.atnStartState instanceof DecisionState) {
                if (!this.userWantsCtxSensitive ||
                    (!s.configs.dipsIntoOuterContext && s.configs.isExactConflict) ||
                    (this.treat_sllk1_conflict_as_ambiguity && input.index === startIndex)) {
                    // we don't report the ambiguity again
                    //if ( !this.acceptState.configset.hasSemanticContext ) {
                    // 	this.reportAmbiguity(dfa, acceptState, startIndex, input.index, acceptState.configset.conflictingAlts, acceptState.configset);
                    //}
                }
                else {
                    // assert(!state.useContext);
                    // Before attempting full context prediction, check to see if there are
                    // disambiguating or validating predicates to evaluate which allow an
                    // immediate decision
                    var conflictingAlts = void 0;
                    var predicates_1 = s.predicates;
                    if (predicates_1 != null) {
                        var conflictIndex = input.index;
                        if (conflictIndex !== startIndex) {
                            input.seek(startIndex);
                        }
                        conflictingAlts = this.evalSemanticContext(predicates_1, outerContext, true);
                        if (conflictingAlts.cardinality() === 1) {
                            return conflictingAlts.nextSetBit(0);
                        }
                        if (conflictIndex !== startIndex) {
                            // restore the index so reporting the fallback to full
                            // context occurs with the index at the correct spot
                            input.seek(conflictIndex);
                        }
                    }
                    if (this.reportAmbiguities) {
                        var conflictState = new SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                        this.reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, input.index);
                    }
                    input.seek(startIndex);
                    return this.adaptivePredict(input, dfa.decision, outerContext, true);
                }
            }
        }
        // Before jumping to prediction, check to see if there are
        // disambiguating or validating predicates to evaluate
        var predicates = s.predicates;
        if (predicates != null) {
            var stopIndex = input.index;
            if (startIndex !== stopIndex) {
                input.seek(startIndex);
            }
            var alts = this.evalSemanticContext(predicates, outerContext, this.reportAmbiguities && this.predictionMode === PredictionMode.LL_EXACT_AMBIG_DETECTION);
            switch (alts.cardinality()) {
                case 0:
                    throw this.noViableAlt(input, outerContext, s.configs, startIndex);
                case 1:
                    return alts.nextSetBit(0);
                default:
                    // report ambiguity after predicate evaluation to make sure the correct
                    // set of ambig alts is reported.
                    if (startIndex !== stopIndex) {
                        input.seek(stopIndex);
                    }
                    this.reportAmbiguity(dfa, s, startIndex, stopIndex, s.configs.isExactConflict, alts, s.configs);
                    return alts.nextSetBit(0);
            }
        }
        if (ParserATNSimulator.dfa_debug) {
            console.log("DFA decision " + dfa.decision +
                " predicts " + s.prediction);
        }
        return s.prediction;
    };
    /**
     * Determines if a particular DFA state should be treated as an accept state
     * for the current prediction mode. In addition to the `useContext`
     * parameter, the {@link #getPredictionMode()} method provides the
     * prediction mode controlling the prediction algorithm as a whole.
     *
     * The default implementation simply returns the value of
     * `DFAState.isAcceptState` except for conflict states when
     * `useContext` is `true` and {@link #getPredictionMode()} is
     * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION}. In that case, only
     * conflict states where {@link ATNConfigSet#isExactConflict} is
     * `true` are considered accept states.
     *
     * @param state The DFA state to check.
     * @param useContext `true` if the prediction algorithm is currently
     * considering the full parser context; otherwise, `false` if the
     * algorithm is currently performing a local context prediction.
     *
     * @returns `true` if the specified `state` is an accept state;
     * otherwise, `false`.
     */
    ParserATNSimulator.prototype.isAcceptState = function (state, useContext) {
        if (!state.isAcceptState) {
            return false;
        }
        if (state.configs.conflictingAlts == null) {
            // unambiguous
            return true;
        }
        // More picky when we need exact conflicts
        if (useContext && this.predictionMode === PredictionMode.LL_EXACT_AMBIG_DETECTION) {
            return state.configs.isExactConflict;
        }
        return true;
    };
    /** Performs ATN simulation to compute a predicted alternative based
     *  upon the remaining input, but also updates the DFA cache to avoid
     *  having to traverse the ATN again for the same input sequence.
     *
     * There are some key conditions we're looking for after computing a new
     * set of ATN configs (proposed DFA state):
     *
     * * if the set is empty, there is no viable alternative for current symbol
     * * does the state uniquely predict an alternative?
     * * does the state have a conflict that would prevent us from
     *   putting it on the work list?
     * * if in non-greedy decision is there a config at a rule stop state?
     *
     * We also have some key operations to do:
     *
     * * add an edge from previous DFA state to potentially new DFA state, D,
     *   upon current symbol but only if adding to work list, which means in all
     *   cases except no viable alternative (and possibly non-greedy decisions?)
     * * collecting predicates and adding semantic context to DFA accept states
     * * adding rule context to context-sensitive DFA accept states
     * * consuming an input symbol
     * * reporting a conflict
     * * reporting an ambiguity
     * * reporting a context sensitivity
     * * reporting insufficient predicates
     *
     * We should isolate those operations, which are side-effecting, to the
     * main work loop. We can isolate lots of code into other functions, but
     * they should be side effect free. They can return package that
     * indicates whether we should report something, whether we need to add a
     * DFA edge, whether we need to augment accept state with semantic
     * context or rule invocation context. Actually, it seems like we always
     * add predicates if they exist, so that can simply be done in the main
     * loop for any accept state creation or modification request.
     *
     * cover these cases:
     *   dead end
     *   single alt
     *   single alt + preds
     *   conflict
     *   conflict + preds
     *
     * TODO: greedy + those
     */
    ParserATNSimulator.prototype.execATN = function (dfa, input, startIndex, initialState) {
        if (ParserATNSimulator.debug) {
            console.log("execATN decision " + dfa.decision + " exec LA(1)==" + this.getLookaheadName(input));
        }
        var outerContext = initialState.outerContext;
        var useContext = initialState.useContext;
        var t = input.LA(1);
        var previous = initialState;
        var contextCache = new PredictionContextCache();
        while (true) { // while more work
            var nextState = this.computeReachSet(dfa, previous, t, contextCache);
            if (nextState == null) {
                this.setDFAEdge(previous.s0, input.LA(1), ATNSimulator.ERROR);
                return this.handleNoViableAlt(input, startIndex, previous);
            }
            var D = nextState.s0;
            // predicted alt => accept state
            // assert(D.isAcceptState || D.prediction === ATN.INVALID_ALT_NUMBER);
            // conflicted => accept state
            // assert(D.isAcceptState || D.configs.conflictInfo == null);
            if (this.isAcceptState(D, useContext)) {
                var conflictingAlts = D.configs.conflictingAlts;
                var predictedAlt = conflictingAlts == null ? D.prediction : ATN.INVALID_ALT_NUMBER;
                if (predictedAlt !== ATN.INVALID_ALT_NUMBER) {
                    if (this.optimize_ll1
                        && input.index === startIndex
                        && !dfa.isPrecedenceDfa
                        && nextState.outerContext === nextState.remainingOuterContext
                        && dfa.decision >= 0
                        && !D.configs.hasSemanticContext) {
                        if (t >= 0 && t <= MAX_SHORT_VALUE) {
                            var key = ((dfa.decision << 16) >>> 0) + t;
                            this.atn.LL1Table.set(key, predictedAlt);
                        }
                    }
                    if (useContext && this.always_try_local_context) {
                        this.reportContextSensitivity(dfa, predictedAlt, nextState, startIndex, input.index);
                    }
                }
                predictedAlt = D.prediction;
                //				int k = input.index - startIndex + 1; // how much input we used
                //				System.out.println("used k="+k);
                var attemptFullContext = conflictingAlts != null && this.userWantsCtxSensitive;
                if (attemptFullContext) {
                    // Only exact conflicts are known to be ambiguous when local
                    // prediction does not step out of the decision rule.
                    attemptFullContext = !useContext
                        && (D.configs.dipsIntoOuterContext || !D.configs.isExactConflict)
                        && (!this.treat_sllk1_conflict_as_ambiguity || input.index !== startIndex);
                }
                if (D.configs.hasSemanticContext) {
                    var predPredictions = D.predicates;
                    if (predPredictions != null) {
                        var conflictIndex = input.index;
                        if (conflictIndex !== startIndex) {
                            input.seek(startIndex);
                        }
                        // use complete evaluation here if we'll want to retry with full context if still ambiguous
                        conflictingAlts = this.evalSemanticContext(predPredictions, outerContext, attemptFullContext || this.reportAmbiguities);
                        switch (conflictingAlts.cardinality()) {
                            case 0:
                                throw this.noViableAlt(input, outerContext, D.configs, startIndex);
                            case 1:
                                return conflictingAlts.nextSetBit(0);
                            default:
                                break;
                        }
                        if (conflictIndex !== startIndex) {
                            // restore the index so reporting the fallback to full
                            // context occurs with the index at the correct spot
                            input.seek(conflictIndex);
                        }
                    }
                }
                if (!attemptFullContext) {
                    if (conflictingAlts != null) {
                        if (this.reportAmbiguities && conflictingAlts.cardinality() > 1) {
                            this.reportAmbiguity(dfa, D, startIndex, input.index, D.configs.isExactConflict, conflictingAlts, D.configs);
                        }
                        predictedAlt = conflictingAlts.nextSetBit(0);
                    }
                    return predictedAlt;
                }
                else {
                    // assert(!useContext);
                    // assert(this.isAcceptState(D, false));
                    if (ParserATNSimulator.debug) {
                        console.log("RETRY with outerContext=" + outerContext);
                    }
                    var fullContextState = this.computeStartState(dfa, outerContext, true);
                    if (this.reportAmbiguities) {
                        this.reportAttemptingFullContext(dfa, conflictingAlts, nextState, startIndex, input.index);
                    }
                    input.seek(startIndex);
                    return this.execATN(dfa, input, startIndex, fullContextState);
                }
            }
            previous = nextState;
            if (t !== IntStream.EOF) {
                input.consume();
                t = input.LA(1);
            }
        }
    };
    /**
     * This method is used to improve the localization of error messages by
     * choosing an alternative rather than throwing a
     * {@link NoViableAltException} in particular prediction scenarios where the
     * {@link #ERROR} state was reached during ATN simulation.
     *
     * The default implementation of this method uses the following
     * algorithm to identify an ATN configuration which successfully parsed the
     * decision entry rule. Choosing such an alternative ensures that the
     * {@link ParserRuleContext} returned by the calling rule will be complete
     * and valid, and the syntax error will be reported later at a more
     * localized location.
     *
     * * If no configuration in `configs` reached the end of the
     *   decision rule, return {@link ATN#INVALID_ALT_NUMBER}.
     * * If all configurations in `configs` which reached the end of the
     *   decision rule predict the same alternative, return that alternative.
     * * If the configurations in `configs` which reached the end of the
     *   decision rule predict multiple alternatives (call this *S*),
     *   choose an alternative in the following order.
     *
     *     1. Filter the configurations in `configs` to only those
     *        configurations which remain viable after evaluating semantic predicates.
     *        If the set of these filtered configurations which also reached the end of
     *        the decision rule is not empty, return the minimum alternative
     *        represented in this set.
     *     1. Otherwise, choose the minimum alternative in *S*.
     *
     * In some scenarios, the algorithm described above could predict an
     * alternative which will result in a {@link FailedPredicateException} in
     * parser. Specifically, this could occur if the *only* configuration
     * capable of successfully parsing to the end of the decision rule is
     * blocked by a semantic predicate. By choosing this alternative within
     * {@link #adaptivePredict} instead of throwing a
     * {@link NoViableAltException}, the resulting
     * {@link FailedPredicateException} in the parser will identify the specific
     * predicate which is preventing the parser from successfully parsing the
     * decision rule, which helps developers identify and correct logic errors
     * in semantic predicates.
     *
     * @param input The input {@link TokenStream}
     * @param startIndex The start index for the current prediction, which is
     * the input index where any semantic context in `configs` should be
     * evaluated
     * @param previous The ATN simulation state immediately before the
     * {@link #ERROR} state was reached
     *
     * @returns The value to return from {@link #adaptivePredict}, or
     * {@link ATN#INVALID_ALT_NUMBER} if a suitable alternative was not
     * identified and {@link #adaptivePredict} should report an error instead.
     */
    ParserATNSimulator.prototype.handleNoViableAlt = function (input, startIndex, previous) {
        if (previous.s0 != null) {
            var alts = new BitSet();
            var maxAlt = 0;
            try {
                for (var _a = __values(previous.s0.configs), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var config = _b.value;
                    if (config.reachesIntoOuterContext || config.state instanceof RuleStopState) {
                        alts.set(config.alt);
                        maxAlt = Math.max(maxAlt, config.alt);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            switch (alts.cardinality()) {
                case 0:
                    break;
                case 1:
                    return alts.nextSetBit(0);
                default:
                    if (!previous.s0.configs.hasSemanticContext) {
                        // configs doesn't contain any predicates, so the predicate
                        // filtering code below would be pointless
                        return alts.nextSetBit(0);
                    }
                    /*
                     * Try to find a configuration set that not only dipped into the outer
                     * context, but also isn't eliminated by a predicate.
                     */
                    var filteredConfigs = new ATNConfigSet();
                    try {
                        for (var _d = __values(previous.s0.configs), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var config = _e.value;
                            if (config.reachesIntoOuterContext || config.state instanceof RuleStopState) {
                                filteredConfigs.add(config);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    /* The following code blocks are adapted from predicateDFAState with
                     * the following key changes.
                     *
                     *  1. The code operates on an ATNConfigSet rather than a DFAState.
                     *  2. Predicates are collected for all alternatives represented in
                     *     filteredConfigs, rather than restricting the evaluation to
                     *     conflicting and/or unique configurations.
                     */
                    var altToPred = this.getPredsForAmbigAlts(alts, filteredConfigs, maxAlt);
                    if (altToPred != null) {
                        var predicates = this.getPredicatePredictions(alts, altToPred);
                        if (predicates != null) {
                            var stopIndex = input.index;
                            try {
                                input.seek(startIndex);
                                var filteredAlts = this.evalSemanticContext(predicates, previous.outerContext, false);
                                if (!filteredAlts.isEmpty) {
                                    return filteredAlts.nextSetBit(0);
                                }
                            }
                            finally {
                                input.seek(stopIndex);
                            }
                        }
                    }
                    return alts.nextSetBit(0);
            }
        }
        throw this.noViableAlt(input, previous.outerContext, previous.s0.configs, startIndex);
        var e_1, _c, e_2, _f;
    };
    ParserATNSimulator.prototype.computeReachSet = function (dfa, previous, t, contextCache) {
        var useContext = previous.useContext;
        var remainingGlobalContext = previous.remainingOuterContext;
        var s = previous.s0;
        if (useContext) {
            while (s.isContextSymbol(t)) {
                var next = void 0;
                if (remainingGlobalContext != null) {
                    remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                    next = s.getContextTarget(this.getReturnState(remainingGlobalContext));
                }
                if (next == null) {
                    break;
                }
                // assert(remainingGlobalContext != null);
                remainingGlobalContext = remainingGlobalContext.parent;
                s = next;
            }
        }
        // assert(!this.isAcceptState(s, useContext));
        if (this.isAcceptState(s, useContext)) {
            return new SimulatorState(previous.outerContext, s, useContext, remainingGlobalContext);
        }
        var s0 = s;
        var target = this.getExistingTargetState(s0, t);
        if (target == null) {
            var result = this.computeTargetState(dfa, s0, remainingGlobalContext, t, useContext, contextCache);
            target = result[0];
            remainingGlobalContext = result[1];
        }
        if (target === ATNSimulator.ERROR) {
            return undefined;
        }
        // assert(!useContext || !target.configs.dipsIntoOuterContext);
        return new SimulatorState(previous.outerContext, target, useContext, remainingGlobalContext);
    };
    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns `undefined`.
     *
     * @param s The current DFA state
     * @param t The next input symbol
     * @returns The existing target DFA state for the given input symbol
     * `t`, or `undefined` if the target state for this edge is not
     * already cached
     */
    ParserATNSimulator.prototype.getExistingTargetState = function (s, t) {
        return s.getTarget(t);
    };
    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param dfa
     * @param s The current DFA state
     * @param remainingGlobalContext
     * @param t The next input symbol
     * @param useContext
     * @param contextCache
     *
     * @returns The computed target DFA state for the given input symbol
     * `t`. If `t` does not lead to a valid DFA state, this method
     * returns {@link #ERROR}.
     */
    ParserATNSimulator.prototype.computeTargetState = function (dfa, s, remainingGlobalContext, t, useContext, contextCache) {
        var closureConfigs = s.configs.toArray();
        var contextElements;
        var reach = new ATNConfigSet();
        var stepIntoGlobal;
        do {
            var hasMoreContext = !useContext || remainingGlobalContext != null;
            if (!hasMoreContext) {
                reach.isOutermostConfigSet = true;
            }
            var reachIntermediate = new ATNConfigSet();
            /* Configurations already in a rule stop state indicate reaching the end
             * of the decision rule (local context) or end of the start rule (full
             * context). Once reached, these configurations are never updated by a
             * closure operation, so they are handled separately for the performance
             * advantage of having a smaller intermediate set when calling closure.
             *
             * For full-context reach operations, separate handling is required to
             * ensure that the alternative matching the longest overall sequence is
             * chosen when multiple such configurations can match the input.
             */
            var skippedStopStates = void 0;
            try {
                for (var closureConfigs_1 = __values(closureConfigs), closureConfigs_1_1 = closureConfigs_1.next(); !closureConfigs_1_1.done; closureConfigs_1_1 = closureConfigs_1.next()) {
                    var c = closureConfigs_1_1.value;
                    if (ParserATNSimulator.debug) {
                        console.log("testing " + this.getTokenName(t) + " at " + c.toString());
                    }
                    if (c.state instanceof RuleStopState) {
                        // assert(c.context.isEmpty);
                        if (useContext && !c.reachesIntoOuterContext || t === IntStream.EOF) {
                            if (skippedStopStates == null) {
                                skippedStopStates = [];
                            }
                            skippedStopStates.push(c);
                        }
                        continue;
                    }
                    var n = c.state.numberOfOptimizedTransitions;
                    for (var ti = 0; ti < n; ti++) { // for each optimized transition
                        var trans = c.state.getOptimizedTransition(ti);
                        var target = this.getReachableTarget(c, trans, t);
                        if (target != null) {
                            reachIntermediate.add(c.transform(target, false), contextCache);
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (closureConfigs_1_1 && !closureConfigs_1_1.done && (_a = closureConfigs_1.return)) _a.call(closureConfigs_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            /* This block optimizes the reach operation for intermediate sets which
             * trivially indicate a termination state for the overall
             * adaptivePredict operation.
             *
             * The conditions assume that intermediate
             * contains all configurations relevant to the reach set, but this
             * condition is not true when one or more configurations have been
             * withheld in skippedStopStates, or when the current symbol is EOF.
             */
            if (this.optimize_unique_closure && skippedStopStates == null && t !== Token.EOF && reachIntermediate.uniqueAlt !== ATN.INVALID_ALT_NUMBER) {
                reachIntermediate.isOutermostConfigSet = reach.isOutermostConfigSet;
                reach = reachIntermediate;
                break;
            }
            /* If the reach set could not be trivially determined, perform a closure
             * operation on the intermediate set to compute its initial value.
             */
            var collectPredicates = false;
            var treatEofAsEpsilon = t === Token.EOF;
            this.closure(reachIntermediate, reach, collectPredicates, hasMoreContext, contextCache, treatEofAsEpsilon);
            stepIntoGlobal = reach.dipsIntoOuterContext;
            if (t === IntStream.EOF) {
                /* After consuming EOF no additional input is possible, so we are
                 * only interested in configurations which reached the end of the
                 * decision rule (local context) or end of the start rule (full
                 * context). Update reach to contain only these configurations. This
                 * handles both explicit EOF transitions in the grammar and implicit
                 * EOF transitions following the end of the decision or start rule.
                 *
                 * This is handled before the configurations in skippedStopStates,
                 * because any configurations potentially added from that list are
                 * already guaranteed to meet this condition whether or not it's
                 * required.
                 */
                reach = this.removeAllConfigsNotInRuleStopState(reach, contextCache);
            }
            /* If skippedStopStates is not undefined, then it contains at least one
             * configuration. For full-context reach operations, these
             * configurations reached the end of the start rule, in which case we
             * only add them back to reach if no configuration during the current
             * closure operation reached such a state. This ensures adaptivePredict
             * chooses an alternative matching the longest overall sequence when
             * multiple alternatives are viable.
             */
            if (skippedStopStates != null && (!useContext || !PredictionMode.hasConfigInRuleStopState(reach))) {
                try {
                    // assert(skippedStopStates.length > 0);
                    for (var skippedStopStates_1 = __values(skippedStopStates), skippedStopStates_1_1 = skippedStopStates_1.next(); !skippedStopStates_1_1.done; skippedStopStates_1_1 = skippedStopStates_1.next()) {
                        var c = skippedStopStates_1_1.value;
                        reach.add(c, contextCache);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (skippedStopStates_1_1 && !skippedStopStates_1_1.done && (_b = skippedStopStates_1.return)) _b.call(skippedStopStates_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            if (useContext && stepIntoGlobal) {
                reach.clear();
                // We know remainingGlobalContext is not undefined at this point (why?)
                remainingGlobalContext = remainingGlobalContext;
                remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                var nextContextElement = this.getReturnState(remainingGlobalContext);
                if (contextElements == null) {
                    contextElements = new IntegerList();
                }
                if (remainingGlobalContext.isEmpty) {
                    remainingGlobalContext = undefined;
                }
                else {
                    remainingGlobalContext = remainingGlobalContext.parent;
                }
                contextElements.add(nextContextElement);
                if (nextContextElement !== PredictionContext.EMPTY_FULL_STATE_KEY) {
                    for (var i = 0; i < closureConfigs.length; i++) {
                        closureConfigs[i] = closureConfigs[i].appendContext(nextContextElement, contextCache);
                    }
                }
            }
        } while (useContext && stepIntoGlobal);
        if (reach.isEmpty) {
            this.setDFAEdge(s, t, ATNSimulator.ERROR);
            return [ATNSimulator.ERROR, remainingGlobalContext];
        }
        var result = this.addDFAEdge(dfa, s, t, contextElements, reach, contextCache);
        return [result, remainingGlobalContext];
        var e_3, _a, e_4, _b;
    };
    /**
     * Return a configuration set containing only the configurations from
     * `configs` which are in a {@link RuleStopState}. If all
     * configurations in `configs` are already in a rule stop state, this
     * method simply returns `configs`.
     *
     * @param configs the configuration set to update
     * @param contextCache the {@link PredictionContext} cache
     *
     * @returns `configs` if all configurations in `configs` are in a
     * rule stop state, otherwise return a new configuration set containing only
     * the configurations from `configs` which are in a rule stop state
     */
    ParserATNSimulator.prototype.removeAllConfigsNotInRuleStopState = function (configs, contextCache) {
        if (PredictionMode.allConfigsInRuleStopStates(configs)) {
            return configs;
        }
        var result = new ATNConfigSet();
        try {
            for (var configs_1 = __values(configs), configs_1_1 = configs_1.next(); !configs_1_1.done; configs_1_1 = configs_1.next()) {
                var config = configs_1_1.value;
                if (!(config.state instanceof RuleStopState)) {
                    continue;
                }
                result.add(config, contextCache);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (configs_1_1 && !configs_1_1.done && (_a = configs_1.return)) _a.call(configs_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return result;
        var e_5, _a;
    };
    ParserATNSimulator.prototype.computeStartState = function (dfa, globalContext, useContext) {
        var s0 = dfa.isPrecedenceDfa ? dfa.getPrecedenceStartState(this._parser.precedence, useContext) :
            useContext ? dfa.s0full :
                dfa.s0;
        if (s0 != null) {
            if (!useContext) {
                return new SimulatorState(globalContext, s0, useContext, globalContext);
            }
            s0.setContextSensitive(this.atn);
        }
        var decision = dfa.decision;
        // @NotNull
        var p = dfa.atnStartState;
        var previousContext = 0;
        var remainingGlobalContext = globalContext;
        var initialContext = useContext ? PredictionContext.EMPTY_FULL : PredictionContext.EMPTY_LOCAL; // always at least the implicit call to start rule
        var contextCache = new PredictionContextCache();
        if (useContext) {
            if (!this.enable_global_context_dfa) {
                while (remainingGlobalContext != null) {
                    if (remainingGlobalContext.isEmpty) {
                        previousContext = PredictionContext.EMPTY_FULL_STATE_KEY;
                        remainingGlobalContext = undefined;
                    }
                    else {
                        previousContext = this.getReturnState(remainingGlobalContext);
                        initialContext = initialContext.appendSingleContext(previousContext, contextCache);
                        remainingGlobalContext = remainingGlobalContext.parent;
                    }
                }
            }
            while (s0 != null && s0.isContextSensitive && remainingGlobalContext != null) {
                var next = void 0;
                remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                if (remainingGlobalContext.isEmpty) {
                    next = s0.getContextTarget(PredictionContext.EMPTY_FULL_STATE_KEY);
                    previousContext = PredictionContext.EMPTY_FULL_STATE_KEY;
                    remainingGlobalContext = undefined;
                }
                else {
                    previousContext = this.getReturnState(remainingGlobalContext);
                    next = s0.getContextTarget(previousContext);
                    initialContext = initialContext.appendSingleContext(previousContext, contextCache);
                    remainingGlobalContext = remainingGlobalContext.parent;
                }
                if (next == null) {
                    break;
                }
                s0 = next;
            }
        }
        if (s0 != null && !s0.isContextSensitive) {
            return new SimulatorState(globalContext, s0, useContext, remainingGlobalContext);
        }
        var configs = new ATNConfigSet();
        while (true) {
            var reachIntermediate = new ATNConfigSet();
            var n = p.numberOfTransitions;
            for (var ti = 0; ti < n; ti++) {
                // for each transition
                var target = p.transition(ti).target;
                reachIntermediate.add(ATNConfig.create(target, ti + 1, initialContext));
            }
            var hasMoreContext = remainingGlobalContext != null;
            if (!hasMoreContext) {
                configs.isOutermostConfigSet = true;
            }
            var collectPredicates = true;
            this.closure(reachIntermediate, configs, collectPredicates, hasMoreContext, contextCache, false);
            var stepIntoGlobal = configs.dipsIntoOuterContext;
            var next = void 0;
            if (useContext && !this.enable_global_context_dfa) {
                s0 = this.addDFAState(dfa, configs, contextCache);
                break;
            }
            else if (s0 == null) {
                if (!dfa.isPrecedenceDfa) {
                    next = this.addDFAState(dfa, configs, contextCache);
                    if (useContext) {
                        if (!dfa.s0full) {
                            dfa.s0full = next;
                        }
                        else {
                            next = dfa.s0full;
                        }
                    }
                    else {
                        if (!dfa.s0) {
                            dfa.s0 = next;
                        }
                        else {
                            next = dfa.s0;
                        }
                    }
                }
                else {
                    /* If this is a precedence DFA, we use applyPrecedenceFilter
                     * to convert the computed start state to a precedence start
                     * state. We then use DFA.setPrecedenceStartState to set the
                     * appropriate start state for the precedence level rather
                     * than simply setting DFA.s0.
                     */
                    configs = this.applyPrecedenceFilter(configs, globalContext, contextCache);
                    next = this.addDFAState(dfa, configs, contextCache);
                    dfa.setPrecedenceStartState(this._parser.precedence, useContext, next);
                }
            }
            else {
                if (dfa.isPrecedenceDfa) {
                    configs = this.applyPrecedenceFilter(configs, globalContext, contextCache);
                }
                next = this.addDFAState(dfa, configs, contextCache);
                s0.setContextTarget(previousContext, next);
            }
            s0 = next;
            if (!useContext || !stepIntoGlobal) {
                break;
            }
            // TODO: make sure it distinguishes empty stack states
            next.setContextSensitive(this.atn);
            // We know remainingGlobalContext is not undefined at this point (why?)
            remainingGlobalContext = remainingGlobalContext;
            configs.clear();
            remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
            var nextContextElement = this.getReturnState(remainingGlobalContext);
            if (remainingGlobalContext.isEmpty) {
                remainingGlobalContext = undefined;
            }
            else {
                remainingGlobalContext = remainingGlobalContext.parent;
            }
            if (nextContextElement !== PredictionContext.EMPTY_FULL_STATE_KEY) {
                initialContext = initialContext.appendSingleContext(nextContextElement, contextCache);
            }
            previousContext = nextContextElement;
        }
        return new SimulatorState(globalContext, s0, useContext, remainingGlobalContext);
    };
    /**
     * This method transforms the start state computed by
     * {@link #computeStartState} to the special start state used by a
     * precedence DFA for a particular precedence value. The transformation
     * process applies the following changes to the start state's configuration
     * set.
     *
     * 1. Evaluate the precedence predicates for each configuration using
     *    {@link SemanticContext#evalPrecedence}.
     * 1. When {@link ATNConfig#isPrecedenceFilterSuppressed} is `false`,
     *    remove all configurations which predict an alternative greater than 1,
     *    for which another configuration that predicts alternative 1 is in the
     *    same ATN state with the same prediction context. This transformation is
     *    valid for the following reasons:
     *
     *     * The closure block cannot contain any epsilon transitions which bypass
     *       the body of the closure, so all states reachable via alternative 1 are
     *       part of the precedence alternatives of the transformed left-recursive
     *       rule.
     *     * The "primary" portion of a left recursive rule cannot contain an
     *       epsilon transition, so the only way an alternative other than 1 can exist
     *       in a state that is also reachable via alternative 1 is by nesting calls
     *       to the left-recursive rule, with the outer calls not being at the
     *       preferred precedence level. The
     *       {@link ATNConfig#isPrecedenceFilterSuppressed} property marks ATN
     *       configurations which do not meet this condition, and therefore are not
     *       eligible for elimination during the filtering process.
     *
     * The prediction context must be considered by this filter to address
     * situations like the following.
     *
     * ```antlr
     * grammar TA;
     * prog: statement* EOF;
     * statement: letterA | statement letterA 'b' ;
     * letterA: 'a';
     * ```
     *
     * If the above grammar, the ATN state immediately before the token
     * reference `'a'` in `letterA` is reachable from the left edge
     * of both the primary and closure blocks of the left-recursive rule
     * `statement`. The prediction context associated with each of these
     * configurations distinguishes between them, and prevents the alternative
     * which stepped out to `prog` (and then back in to `statement`
     * from being eliminated by the filter.
     *
     * @param configs The configuration set computed by
     * {@link #computeStartState} as the start state for the DFA.
     * @returns The transformed configuration set representing the start state
     * for a precedence DFA at a particular precedence level (determined by
     * calling {@link Parser#getPrecedence}).
     */
    ParserATNSimulator.prototype.applyPrecedenceFilter = function (configs, globalContext, contextCache) {
        var statesFromAlt1 = new Map();
        var configSet = new ATNConfigSet();
        try {
            for (var configs_2 = __values(configs), configs_2_1 = configs_2.next(); !configs_2_1.done; configs_2_1 = configs_2.next()) {
                var config = configs_2_1.value;
                // handle alt 1 first
                if (config.alt !== 1) {
                    continue;
                }
                var updatedContext = config.semanticContext.evalPrecedence(this._parser, globalContext);
                if (updatedContext == null) {
                    // the configuration was eliminated
                    continue;
                }
                statesFromAlt1.set(config.state.stateNumber, config.context);
                if (updatedContext !== config.semanticContext) {
                    configSet.add(config.transform(config.state, false, updatedContext), contextCache);
                }
                else {
                    configSet.add(config, contextCache);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (configs_2_1 && !configs_2_1.done && (_a = configs_2.return)) _a.call(configs_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            for (var configs_3 = __values(configs), configs_3_1 = configs_3.next(); !configs_3_1.done; configs_3_1 = configs_3.next()) {
                var config = configs_3_1.value;
                if (config.alt === 1) {
                    // already handled
                    continue;
                }
                if (!config.isPrecedenceFilterSuppressed) {
                    /* In the future, this elimination step could be updated to also
                     * filter the prediction context for alternatives predicting alt>1
                     * (basically a graph subtraction algorithm).
                     */
                    var context_1 = statesFromAlt1.get(config.state.stateNumber);
                    if (context_1 != null && context_1.equals(config.context)) {
                        // eliminated
                        continue;
                    }
                }
                configSet.add(config, contextCache);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (configs_3_1 && !configs_3_1.done && (_b = configs_3.return)) _b.call(configs_3);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return configSet;
        var e_6, _a, e_7, _b;
    };
    ParserATNSimulator.prototype.getReachableTarget = function (source, trans, ttype) {
        if (trans.matches(ttype, 0, this.atn.maxTokenType)) {
            return trans.target;
        }
        return undefined;
    };
    /** collect and set D's semantic context */
    ParserATNSimulator.prototype.predicateDFAState = function (D, configs, nalts) {
        var conflictingAlts = this.getConflictingAltsFromConfigSet(configs);
        if (!conflictingAlts) {
            throw new Error("This unhandled scenario is intended to be unreachable, but I'm currently not sure of why we know that's the case.");
        }
        if (ParserATNSimulator.debug) {
            console.log("predicateDFAState " + D);
        }
        var altToPred = this.getPredsForAmbigAlts(conflictingAlts, configs, nalts);
        // altToPred[uniqueAlt] is now our validating predicate (if any)
        var predPredictions;
        if (altToPred != null) {
            // we have a validating predicate; test it
            // Update DFA so reach becomes accept state with predicate
            predPredictions = this.getPredicatePredictions(conflictingAlts, altToPred);
            D.predicates = predPredictions;
        }
        return predPredictions;
    };
    ParserATNSimulator.prototype.getPredsForAmbigAlts = function (ambigAlts, configs, nalts) {
        // REACH=[1|1|[]|0:0, 1|2|[]|0:1]
        /* altToPred starts as an array of all undefined contexts. The entry at index i
         * corresponds to alternative i. altToPred[i] may have one of three values:
         *   1. undefined: no ATNConfig c is found such that c.alt===i
         *   2. SemanticContext.NONE: At least one ATNConfig c exists such that
         *      c.alt===i and c.semanticContext===SemanticContext.NONE. In other words,
         *      alt i has at least one unpredicated config.
         *   3. Non-NONE Semantic Context: There exists at least one, and for all
         *      ATNConfig c such that c.alt===i, c.semanticContext!==SemanticContext.NONE.
         *
         * From this, it is clear that NONE||anything==NONE.
         */
        var altToPred = new Array(nalts + 1);
        var n = altToPred.length;
        try {
            for (var configs_4 = __values(configs), configs_4_1 = configs_4.next(); !configs_4_1.done; configs_4_1 = configs_4.next()) {
                var c = configs_4_1.value;
                if (ambigAlts.get(c.alt)) {
                    altToPred[c.alt] = SemanticContext.or(altToPred[c.alt], c.semanticContext);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (configs_4_1 && !configs_4_1.done && (_a = configs_4.return)) _a.call(configs_4);
            }
            finally { if (e_8) throw e_8.error; }
        }
        var nPredAlts = 0;
        for (var i = 0; i < n; i++) {
            if (altToPred[i] == null) {
                altToPred[i] = SemanticContext.NONE;
            }
            else if (altToPred[i] !== SemanticContext.NONE) {
                nPredAlts++;
            }
        }
        // At this point we know `altToPred` doesn't contain any undefined entries
        var result = altToPred;
        // nonambig alts are undefined in result
        if (nPredAlts === 0) {
            result = undefined;
        }
        if (ParserATNSimulator.debug) {
            console.log("getPredsForAmbigAlts result " + (result ? Arrays.toString(result) : "undefined"));
        }
        return result;
        var e_8, _a;
    };
    ParserATNSimulator.prototype.getPredicatePredictions = function (ambigAlts, altToPred) {
        var pairs = [];
        var containsPredicate = false;
        for (var i = 1; i < altToPred.length; i++) {
            var pred = altToPred[i];
            // unpredicated is indicated by SemanticContext.NONE
            // assert(pred != null);
            // find first unpredicated but ambig alternative, if any.
            // Only ambiguous alternatives will have SemanticContext.NONE.
            // Any unambig alts or ambig naked alts after first ambig naked are ignored
            // (undefined, i) means alt i is the default prediction
            // if no (undefined, i), then no default prediction.
            if (ambigAlts != null && ambigAlts.get(i) && pred === SemanticContext.NONE) {
                pairs.push(new DFAState.PredPrediction(pred, i));
            }
            else if (pred !== SemanticContext.NONE) {
                containsPredicate = true;
                pairs.push(new DFAState.PredPrediction(pred, i));
            }
        }
        if (!containsPredicate) {
            return undefined;
        }
        //		System.out.println(Arrays.toString(altToPred)+"->"+pairs);
        return pairs;
    };
    /** Look through a list of predicate/alt pairs, returning alts for the
     *  pairs that win. An `undefined` predicate indicates an alt containing an
     *  unpredicated config which behaves as "always true."
     */
    ParserATNSimulator.prototype.evalSemanticContext = function (predPredictions, outerContext, complete) {
        var predictions = new BitSet();
        try {
            for (var predPredictions_1 = __values(predPredictions), predPredictions_1_1 = predPredictions_1.next(); !predPredictions_1_1.done; predPredictions_1_1 = predPredictions_1.next()) {
                var pair = predPredictions_1_1.value;
                if (pair.pred === SemanticContext.NONE) {
                    predictions.set(pair.alt);
                    if (!complete) {
                        break;
                    }
                    continue;
                }
                var evaluatedResult = this.evalSemanticContextImpl(pair.pred, outerContext, pair.alt);
                if (ParserATNSimulator.debug || ParserATNSimulator.dfa_debug) {
                    console.log("eval pred " + pair + "=" + evaluatedResult);
                }
                if (evaluatedResult) {
                    if (ParserATNSimulator.debug || ParserATNSimulator.dfa_debug) {
                        console.log("PREDICT " + pair.alt);
                    }
                    predictions.set(pair.alt);
                    if (!complete) {
                        break;
                    }
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (predPredictions_1_1 && !predPredictions_1_1.done && (_a = predPredictions_1.return)) _a.call(predPredictions_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return predictions;
        var e_9, _a;
    };
    /**
     * Evaluate a semantic context within a specific parser context.
     *
     * This method might not be called for every semantic context evaluated
     * during the prediction process. In particular, we currently do not
     * evaluate the following but it may change in the future:
     *
     * * Precedence predicates (represented by
     *   {@link SemanticContext.PrecedencePredicate}) are not currently evaluated
     *   through this method.
     * * Operator predicates (represented by {@link SemanticContext.AND} and
     *   {@link SemanticContext.OR}) are evaluated as a single semantic
     *   context, rather than evaluating the operands individually.
     *   Implementations which require evaluation results from individual
     *   predicates should override this method to explicitly handle evaluation of
     *   the operands within operator predicates.
     *
     * @param pred The semantic context to evaluate
     * @param parserCallStack The parser context in which to evaluate the
     * semantic context
     * @param alt The alternative which is guarded by `pred`
     *
     * @since 4.3
     */
    ParserATNSimulator.prototype.evalSemanticContextImpl = function (pred, parserCallStack, alt) {
        return pred.eval(this._parser, parserCallStack);
    };
    /* TODO: If we are doing predicates, there is no point in pursuing
         closure operations if we reach a DFA state that uniquely predicts
         alternative. We will not be caching that DFA state and it is a
         waste to pursue the closure. Might have to advance when we do
         ambig detection thought :(
          */
    ParserATNSimulator.prototype.closure = function (sourceConfigs, configs, collectPredicates, hasMoreContext, contextCache, treatEofAsEpsilon) {
        if (contextCache == null) {
            contextCache = PredictionContextCache.UNCACHED;
        }
        var currentConfigs = sourceConfigs;
        var closureBusy = new Array2DHashSet(ObjectEqualityComparator.INSTANCE);
        while (currentConfigs.size > 0) {
            var intermediate = new ATNConfigSet();
            try {
                for (var currentConfigs_1 = __values(currentConfigs), currentConfigs_1_1 = currentConfigs_1.next(); !currentConfigs_1_1.done; currentConfigs_1_1 = currentConfigs_1.next()) {
                    var config = currentConfigs_1_1.value;
                    this.closureImpl(config, configs, intermediate, closureBusy, collectPredicates, hasMoreContext, contextCache, 0, treatEofAsEpsilon);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (currentConfigs_1_1 && !currentConfigs_1_1.done && (_a = currentConfigs_1.return)) _a.call(currentConfigs_1);
                }
                finally { if (e_10) throw e_10.error; }
            }
            currentConfigs = intermediate;
        }
        var e_10, _a;
    };
    ParserATNSimulator.prototype.closureImpl = function (config, configs, intermediate, closureBusy, collectPredicates, hasMoreContexts, contextCache, depth, treatEofAsEpsilon) {
        if (ParserATNSimulator.debug) {
            console.log("closure(" + config.toString(this._parser, true) + ")");
        }
        if (config.state instanceof RuleStopState) {
            // We hit rule end. If we have context info, use it
            if (!config.context.isEmpty) {
                var hasEmpty = config.context.hasEmpty;
                var nonEmptySize = config.context.size - (hasEmpty ? 1 : 0);
                for (var i = 0; i < nonEmptySize; i++) {
                    var newContext = config.context.getParent(i); // "pop" return state
                    var returnState = this.atn.states[config.context.getReturnState(i)];
                    var c = ATNConfig.create(returnState, config.alt, newContext, config.semanticContext);
                    // While we have context to pop back from, we may have
                    // gotten that context AFTER having fallen off a rule.
                    // Make sure we track that we are now out of context.
                    c.outerContextDepth = config.outerContextDepth;
                    c.isPrecedenceFilterSuppressed = config.isPrecedenceFilterSuppressed;
                    // assert(depth > MIN_INTEGER_VALUE);
                    this.closureImpl(c, configs, intermediate, closureBusy, collectPredicates, hasMoreContexts, contextCache, depth - 1, treatEofAsEpsilon);
                }
                if (!hasEmpty || !hasMoreContexts) {
                    return;
                }
                config = config.transform(config.state, false, PredictionContext.EMPTY_LOCAL);
            }
            else if (!hasMoreContexts) {
                configs.add(config, contextCache);
                return;
            }
            else {
                // else if we have no context info, just chase follow links (if greedy)
                if (ParserATNSimulator.debug) {
                    console.log("FALLING off rule " +
                        this.getRuleName(config.state.ruleIndex));
                }
                if (config.context === PredictionContext.EMPTY_FULL) {
                    // no need to keep full context overhead when we step out
                    config = config.transform(config.state, false, PredictionContext.EMPTY_LOCAL);
                }
                else if (!config.reachesIntoOuterContext && PredictionContext.isEmptyLocal(config.context)) {
                    // add stop state when leaving decision rule for the first time
                    configs.add(config, contextCache);
                }
            }
        }
        var p = config.state;
        // optimization
        if (!p.onlyHasEpsilonTransitions) {
            configs.add(config, contextCache);
            // make sure to not return here, because EOF transitions can act as
            // both epsilon transitions and non-epsilon transitions.
            if (ParserATNSimulator.debug) {
                console.log("added config " + configs);
            }
        }
        for (var i = 0; i < p.numberOfOptimizedTransitions; i++) {
            // This block implements first-edge elimination of ambiguous LR
            // alternatives as part of dynamic disambiguation during prediction.
            // See antlr/antlr4#1398.
            if (i === 0
                && p.stateType === ATNStateType.STAR_LOOP_ENTRY
                && p.precedenceRuleDecision
                && !config.context.hasEmpty) {
                var precedenceDecision = p;
                // When suppress is true, it means the outgoing edge i==0 is
                // ambiguous with the outgoing edge i==1, and thus the closure
                // operation can dynamically disambiguate by suppressing this
                // edge during the closure operation.
                var suppress = true;
                for (var j = 0; j < config.context.size; j++) {
                    if (!precedenceDecision.precedenceLoopbackStates.get(config.context.getReturnState(j))) {
                        suppress = false;
                        break;
                    }
                }
                if (suppress) {
                    continue;
                }
            }
            var t = p.getOptimizedTransition(i);
            var continueCollecting = !(t instanceof ActionTransition) && collectPredicates;
            var c = this.getEpsilonTarget(config, t, continueCollecting, depth === 0, contextCache, treatEofAsEpsilon);
            if (c != null) {
                if (t instanceof RuleTransition) {
                    if (intermediate != null && !collectPredicates) {
                        intermediate.add(c, contextCache);
                        continue;
                    }
                }
                if (!t.isEpsilon && !closureBusy.add(c)) {
                    // avoid infinite recursion for EOF* and EOF+
                    continue;
                }
                var newDepth = depth;
                if (config.state instanceof RuleStopState) {
                    // target fell off end of rule; mark resulting c as having dipped into outer context
                    // We can't get here if incoming config was rule stop and we had context
                    // track how far we dip into outer context.  Might
                    // come in handy and we avoid evaluating context dependent
                    // preds if this is > 0.
                    if (!closureBusy.add(c)) {
                        // avoid infinite recursion for right-recursive rules
                        continue;
                    }
                    if (this.dfa != null && this.dfa.isPrecedenceDfa) {
                        var outermostPrecedenceReturn = t.outermostPrecedenceReturn;
                        if (outermostPrecedenceReturn === this.dfa.atnStartState.ruleIndex) {
                            c.isPrecedenceFilterSuppressed = true;
                        }
                    }
                    c.outerContextDepth = c.outerContextDepth + 1;
                    // assert(newDepth > MIN_INTEGER_VALUE);
                    newDepth--;
                    if (ParserATNSimulator.debug) {
                        console.log("dips into outer ctx: " + c);
                    }
                }
                else if (t instanceof RuleTransition) {
                    if (this.optimize_tail_calls && t.optimizedTailCall && (!this.tail_call_preserves_sll || !PredictionContext.isEmptyLocal(config.context))) {
                        // assert(c.context === config.context);
                        if (newDepth === 0) {
                            // the pop/push of a tail call would keep the depth
                            // constant, except we latch if it goes negative
                            newDepth--;
                            if (!this.tail_call_preserves_sll && PredictionContext.isEmptyLocal(config.context)) {
                                // make sure the SLL config "dips into the outer context" or prediction may not fall back to LL on conflict
                                c.outerContextDepth = c.outerContextDepth + 1;
                            }
                        }
                    }
                    else {
                        // latch when newDepth goes negative - once we step out of the entry context we can't return
                        if (newDepth >= 0) {
                            newDepth++;
                        }
                    }
                }
                this.closureImpl(c, configs, intermediate, closureBusy, continueCollecting, hasMoreContexts, contextCache, newDepth, treatEofAsEpsilon);
            }
        }
    };
    ParserATNSimulator.prototype.getRuleName = function (index) {
        if (this._parser != null && index >= 0) {
            return this._parser.ruleNames[index];
        }
        return "<rule " + index + ">";
    };
    ParserATNSimulator.prototype.getEpsilonTarget = function (config, t, collectPredicates, inContext, contextCache, treatEofAsEpsilon) {
        switch (t.serializationType) {
            case 3 /* RULE */:
                return this.ruleTransition(config, t, contextCache);
            case 10 /* PRECEDENCE */:
                return this.precedenceTransition(config, t, collectPredicates, inContext);
            case 4 /* PREDICATE */:
                return this.predTransition(config, t, collectPredicates, inContext);
            case 6 /* ACTION */:
                return this.actionTransition(config, t);
            case 1 /* EPSILON */:
                return config.transform(t.target, false);
            case 5 /* ATOM */:
            case 2 /* RANGE */:
            case 7 /* SET */:
                // EOF transitions act like epsilon transitions after the first EOF
                // transition is traversed
                if (treatEofAsEpsilon) {
                    if (t.matches(Token.EOF, 0, 1)) {
                        return config.transform(t.target, false);
                    }
                }
                return undefined;
            default:
                return undefined;
        }
    };
    ParserATNSimulator.prototype.actionTransition = function (config, t) {
        if (ParserATNSimulator.debug) {
            console.log("ACTION edge " + t.ruleIndex + ":" + t.actionIndex);
        }
        return config.transform(t.target, false);
    };
    ParserATNSimulator.prototype.precedenceTransition = function (config, pt, collectPredicates, inContext) {
        if (ParserATNSimulator.debug) {
            console.log("PRED (collectPredicates=" + collectPredicates + ") " +
                pt.precedence + ">=_p" +
                ", ctx dependent=true");
            if (this._parser != null) {
                console.log("context surrounding pred is " +
                    this._parser.getRuleInvocationStack());
            }
        }
        var c;
        if (collectPredicates && inContext) {
            var newSemCtx = SemanticContext.and(config.semanticContext, pt.predicate);
            c = config.transform(pt.target, false, newSemCtx);
        }
        else {
            c = config.transform(pt.target, false);
        }
        if (ParserATNSimulator.debug) {
            console.log("config from pred transition=" + c);
        }
        return c;
    };
    ParserATNSimulator.prototype.predTransition = function (config, pt, collectPredicates, inContext) {
        if (ParserATNSimulator.debug) {
            console.log("PRED (collectPredicates=" + collectPredicates + ") " +
                pt.ruleIndex + ":" + pt.predIndex +
                ", ctx dependent=" + pt.isCtxDependent);
            if (this._parser != null) {
                console.log("context surrounding pred is " +
                    this._parser.getRuleInvocationStack());
            }
        }
        var c;
        if (collectPredicates &&
            (!pt.isCtxDependent || (pt.isCtxDependent && inContext))) {
            var newSemCtx = SemanticContext.and(config.semanticContext, pt.predicate);
            c = config.transform(pt.target, false, newSemCtx);
        }
        else {
            c = config.transform(pt.target, false);
        }
        if (ParserATNSimulator.debug) {
            console.log("config from pred transition=" + c);
        }
        return c;
    };
    ParserATNSimulator.prototype.ruleTransition = function (config, t, contextCache) {
        if (ParserATNSimulator.debug) {
            console.log("CALL rule " + this.getRuleName(t.target.ruleIndex) +
                ", ctx=" + config.context);
        }
        var returnState = t.followState;
        var newContext;
        if (this.optimize_tail_calls && t.optimizedTailCall && (!this.tail_call_preserves_sll || !PredictionContext.isEmptyLocal(config.context))) {
            newContext = config.context;
        }
        else if (contextCache != null) {
            newContext = contextCache.getChild(config.context, returnState.stateNumber);
        }
        else {
            newContext = config.context.getChild(returnState.stateNumber);
        }
        return config.transform(t.target, false, newContext);
    };
    ParserATNSimulator.prototype.isConflicted = function (configset, contextCache) {
        if (configset.uniqueAlt !== ATN.INVALID_ALT_NUMBER || configset.size <= 1) {
            return undefined;
        }
        var configs = configset.toArray();
        configs.sort(ParserATNSimulator.STATE_ALT_SORT_COMPARATOR);
        var exact = !configset.dipsIntoOuterContext;
        var alts = new BitSet();
        var minAlt = configs[0].alt;
        alts.set(minAlt);
        /* Quick checks come first (single pass, no context joining):
         *  1. Make sure first config in the sorted list predicts the minimum
         *     represented alternative.
         *  2. Make sure every represented state has at least one configuration
         *     which predicts the minimum represented alternative.
         *  3. (exact only) make sure every represented state has at least one
         *     configuration which predicts each represented alternative.
         */
        // quick check 1 & 2 => if we assume #1 holds and check #2 against the
        // minAlt from the first state, #2 will fail if the assumption was
        // incorrect
        var currentState = configs[0].state.nonStopStateNumber;
        try {
            for (var configs_5 = __values(configs), configs_5_1 = configs_5.next(); !configs_5_1.done; configs_5_1 = configs_5.next()) {
                var config = configs_5_1.value;
                var stateNumber = config.state.nonStopStateNumber;
                if (stateNumber !== currentState) {
                    if (config.alt !== minAlt) {
                        return undefined;
                    }
                    currentState = stateNumber;
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (configs_5_1 && !configs_5_1.done && (_a = configs_5.return)) _a.call(configs_5);
            }
            finally { if (e_11) throw e_11.error; }
        }
        var representedAlts;
        if (exact) {
            currentState = configs[0].state.nonStopStateNumber;
            // get the represented alternatives of the first state
            representedAlts = new BitSet();
            var maxAlt = minAlt;
            try {
                for (var configs_6 = __values(configs), configs_6_1 = configs_6.next(); !configs_6_1.done; configs_6_1 = configs_6.next()) {
                    var config = configs_6_1.value;
                    if (config.state.nonStopStateNumber !== currentState) {
                        break;
                    }
                    var alt = config.alt;
                    representedAlts.set(alt);
                    maxAlt = alt;
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (configs_6_1 && !configs_6_1.done && (_b = configs_6.return)) _b.call(configs_6);
                }
                finally { if (e_12) throw e_12.error; }
            }
            // quick check #3:
            currentState = configs[0].state.nonStopStateNumber;
            var currentAlt = minAlt;
            try {
                for (var configs_7 = __values(configs), configs_7_1 = configs_7.next(); !configs_7_1.done; configs_7_1 = configs_7.next()) {
                    var config = configs_7_1.value;
                    var stateNumber = config.state.nonStopStateNumber;
                    var alt = config.alt;
                    if (stateNumber !== currentState) {
                        if (currentAlt !== maxAlt) {
                            exact = false;
                            break;
                        }
                        currentState = stateNumber;
                        currentAlt = minAlt;
                    }
                    else if (alt !== currentAlt) {
                        if (alt !== representedAlts.nextSetBit(currentAlt + 1)) {
                            exact = false;
                            break;
                        }
                        currentAlt = alt;
                    }
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (configs_7_1 && !configs_7_1.done && (_c = configs_7.return)) _c.call(configs_7);
                }
                finally { if (e_13) throw e_13.error; }
            }
        }
        currentState = configs[0].state.nonStopStateNumber;
        var firstIndexCurrentState = 0;
        var lastIndexCurrentStateMinAlt = 0;
        var joinedCheckContext = configs[0].context;
        for (var i = 1; i < configs.length; i++) {
            var config = configs[i];
            if (config.alt !== minAlt) {
                break;
            }
            if (config.state.nonStopStateNumber !== currentState) {
                break;
            }
            lastIndexCurrentStateMinAlt = i;
            joinedCheckContext = contextCache.join(joinedCheckContext, configs[i].context);
        }
        for (var i = lastIndexCurrentStateMinAlt + 1; i < configs.length; i++) {
            var config = configs[i];
            var state = config.state;
            alts.set(config.alt);
            if (state.nonStopStateNumber !== currentState) {
                currentState = state.nonStopStateNumber;
                firstIndexCurrentState = i;
                lastIndexCurrentStateMinAlt = i;
                joinedCheckContext = config.context;
                for (var j = firstIndexCurrentState + 1; j < configs.length; j++) {
                    var config2 = configs[j];
                    if (config2.alt !== minAlt) {
                        break;
                    }
                    if (config2.state.nonStopStateNumber !== currentState) {
                        break;
                    }
                    lastIndexCurrentStateMinAlt = j;
                    joinedCheckContext = contextCache.join(joinedCheckContext, config2.context);
                }
                i = lastIndexCurrentStateMinAlt;
                continue;
            }
            var joinedCheckContext2 = config.context;
            var currentAlt = config.alt;
            var lastIndexCurrentStateCurrentAlt = i;
            for (var j = lastIndexCurrentStateCurrentAlt + 1; j < configs.length; j++) {
                var config2 = configs[j];
                if (config2.alt !== currentAlt) {
                    break;
                }
                if (config2.state.nonStopStateNumber !== currentState) {
                    break;
                }
                lastIndexCurrentStateCurrentAlt = j;
                joinedCheckContext2 = contextCache.join(joinedCheckContext2, config2.context);
            }
            i = lastIndexCurrentStateCurrentAlt;
            var check = contextCache.join(joinedCheckContext, joinedCheckContext2);
            if (!joinedCheckContext.equals(check)) {
                return undefined;
            }
            // update exact if necessary
            exact = exact && joinedCheckContext.equals(joinedCheckContext2);
        }
        return new ConflictInfo(alts, exact);
        var e_11, _a, e_12, _b, e_13, _c;
    };
    ParserATNSimulator.prototype.getConflictingAltsFromConfigSet = function (configs) {
        var conflictingAlts = configs.conflictingAlts;
        if (conflictingAlts == null && configs.uniqueAlt !== ATN.INVALID_ALT_NUMBER) {
            conflictingAlts = new BitSet();
            conflictingAlts.set(configs.uniqueAlt);
        }
        return conflictingAlts;
    };
    ParserATNSimulator.prototype.getTokenName = function (t) {
        if (t === Token.EOF) {
            return "EOF";
        }
        var vocabulary = this._parser != null ? this._parser.vocabulary : VocabularyImpl.EMPTY_VOCABULARY;
        var displayName = vocabulary.getDisplayName(t);
        if (displayName === String(t)) {
            return displayName;
        }
        return displayName + "<" + t + ">";
    };
    ParserATNSimulator.prototype.getLookaheadName = function (input) {
        return this.getTokenName(input.LA(1));
    };
    ParserATNSimulator.prototype.dumpDeadEndConfigs = function (nvae) {
        console.log("dead end configs: ");
        var deadEndConfigs = nvae.deadEndConfigs;
        if (!deadEndConfigs) {
            return;
        }
        try {
            for (var deadEndConfigs_1 = __values(deadEndConfigs), deadEndConfigs_1_1 = deadEndConfigs_1.next(); !deadEndConfigs_1_1.done; deadEndConfigs_1_1 = deadEndConfigs_1.next()) {
                var c = deadEndConfigs_1_1.value;
                var trans = "no edges";
                if (c.state.numberOfOptimizedTransitions > 0) {
                    var t = c.state.getOptimizedTransition(0);
                    if (t instanceof AtomTransition) {
                        trans = "Atom " + this.getTokenName(t._label);
                    }
                    else if (t instanceof SetTransition) {
                        var not = t instanceof NotSetTransition;
                        trans = (not ? "~" : "") + "Set " + t.set.toString();
                    }
                }
                console.log(c.toString(this._parser, true) + ":" + trans);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (deadEndConfigs_1_1 && !deadEndConfigs_1_1.done && (_a = deadEndConfigs_1.return)) _a.call(deadEndConfigs_1);
            }
            finally { if (e_14) throw e_14.error; }
        }
        var e_14, _a;
    };
    ParserATNSimulator.prototype.noViableAlt = function (input, outerContext, configs, startIndex) {
        return new NoViableAltException(this._parser, input, input.get(startIndex), input.LT(1), configs, outerContext);
    };
    ParserATNSimulator.prototype.getUniqueAlt = function (configs) {
        var alt = ATN.INVALID_ALT_NUMBER;
        try {
            for (var configs_8 = __values(configs), configs_8_1 = configs_8.next(); !configs_8_1.done; configs_8_1 = configs_8.next()) {
                var c = configs_8_1.value;
                if (alt === ATN.INVALID_ALT_NUMBER) {
                    alt = c.alt; // found first alt
                }
                else if (c.alt !== alt) {
                    return ATN.INVALID_ALT_NUMBER;
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (configs_8_1 && !configs_8_1.done && (_a = configs_8.return)) _a.call(configs_8);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return alt;
        var e_15, _a;
    };
    ParserATNSimulator.prototype.configWithAltAtStopState = function (configs, alt) {
        try {
            for (var configs_9 = __values(configs), configs_9_1 = configs_9.next(); !configs_9_1.done; configs_9_1 = configs_9.next()) {
                var c = configs_9_1.value;
                if (c.alt === alt) {
                    if (c.state instanceof RuleStopState) {
                        return true;
                    }
                }
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (configs_9_1 && !configs_9_1.done && (_a = configs_9.return)) _a.call(configs_9);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return false;
        var e_16, _a;
    };
    ParserATNSimulator.prototype.addDFAEdge = function (dfa, fromState, t, contextTransitions, toConfigs, contextCache) {
        // assert(contextTransitions == null || contextTransitions.isEmpty || dfa.isContextSensitive);
        var from = fromState;
        var to = this.addDFAState(dfa, toConfigs, contextCache);
        if (contextTransitions != null) {
            try {
                for (var _a = __values(contextTransitions.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var context_2 = _b.value;
                    if (context_2 === PredictionContext.EMPTY_FULL_STATE_KEY) {
                        if (from.configs.isOutermostConfigSet) {
                            continue;
                        }
                    }
                    from.setContextSensitive(this.atn);
                    from.setContextSymbol(t);
                    var next = from.getContextTarget(context_2);
                    if (next != null) {
                        from = next;
                        continue;
                    }
                    next = this.addDFAContextState(dfa, from.configs, context_2, contextCache);
                    // assert(context !== PredictionContext.EMPTY_FULL_STATE_KEY || next.configs.isOutermostConfigSet);
                    from.setContextTarget(context_2, next);
                    from = next;
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_17) throw e_17.error; }
            }
        }
        if (ParserATNSimulator.debug) {
            console.log("EDGE " + from + " -> " + to + " upon " + this.getTokenName(t));
        }
        this.setDFAEdge(from, t, to);
        if (ParserATNSimulator.debug) {
            console.log("DFA=\n" + dfa.toString(this._parser != null ? this._parser.vocabulary : VocabularyImpl.EMPTY_VOCABULARY, this._parser != null ? this._parser.ruleNames : undefined));
        }
        return to;
        var e_17, _c;
    };
    ParserATNSimulator.prototype.setDFAEdge = function (p, t, q) {
        if (p != null) {
            p.setTarget(t, q);
        }
    };
    /** See comment on LexerInterpreter.addDFAState. */
    ParserATNSimulator.prototype.addDFAContextState = function (dfa, configs, returnContext, contextCache) {
        if (returnContext !== PredictionContext.EMPTY_FULL_STATE_KEY) {
            var contextConfigs = new ATNConfigSet();
            try {
                for (var configs_10 = __values(configs), configs_10_1 = configs_10.next(); !configs_10_1.done; configs_10_1 = configs_10.next()) {
                    var config = configs_10_1.value;
                    contextConfigs.add(config.appendContext(returnContext, contextCache));
                }
            }
            catch (e_18_1) { e_18 = { error: e_18_1 }; }
            finally {
                try {
                    if (configs_10_1 && !configs_10_1.done && (_a = configs_10.return)) _a.call(configs_10);
                }
                finally { if (e_18) throw e_18.error; }
            }
            return this.addDFAState(dfa, contextConfigs, contextCache);
        }
        else {
            // assert(!configs.isOutermostConfigSet, "Shouldn't be adding a duplicate edge.");
            configs = configs.clone(true);
            configs.isOutermostConfigSet = true;
            return this.addDFAState(dfa, configs, contextCache);
        }
        var e_18, _a;
    };
    /** See comment on LexerInterpreter.addDFAState. */
    ParserATNSimulator.prototype.addDFAState = function (dfa, configs, contextCache) {
        var enableDfa = this.enable_global_context_dfa || !configs.isOutermostConfigSet;
        if (enableDfa) {
            if (!configs.isReadOnly) {
                configs.optimizeConfigs(this);
            }
            var proposed = this.createDFAState(dfa, configs);
            var existing = dfa.states.get(proposed);
            if (existing != null) {
                return existing;
            }
        }
        if (!configs.isReadOnly) {
            if (configs.conflictInfo == null) {
                configs.conflictInfo = this.isConflicted(configs, contextCache);
            }
        }
        var newState = this.createDFAState(dfa, configs.clone(true));
        // getDecisionState won't return undefined when we request a known valid decision
        var decisionState = this.atn.getDecisionState(dfa.decision);
        var predictedAlt = this.getUniqueAlt(configs);
        if (predictedAlt !== ATN.INVALID_ALT_NUMBER) {
            newState.acceptStateInfo = new AcceptStateInfo(predictedAlt);
        }
        else if (configs.conflictingAlts != null) {
            var conflictingAlts = configs.conflictingAlts;
            if (conflictingAlts) {
                newState.acceptStateInfo = new AcceptStateInfo(conflictingAlts.nextSetBit(0));
            }
        }
        if (newState.isAcceptState && configs.hasSemanticContext) {
            this.predicateDFAState(newState, configs, decisionState.numberOfTransitions);
        }
        if (!enableDfa) {
            return newState;
        }
        var added = dfa.addState(newState);
        if (ParserATNSimulator.debug && added === newState) {
            console.log("adding new DFA state: " + newState);
        }
        return added;
    };
    ParserATNSimulator.prototype.createDFAState = function (dfa, configs) {
        return new DFAState(configs);
    };
    ParserATNSimulator.prototype.reportAttemptingFullContext = function (dfa, conflictingAlts, conflictState, startIndex, stopIndex) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            var interval = Interval.of(startIndex, stopIndex);
            console.log("reportAttemptingFullContext decision=" + dfa.decision + ":" + conflictState.s0.configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            var listener = this._parser.getErrorListenerDispatch();
            if (listener.reportAttemptingFullContext) {
                listener.reportAttemptingFullContext(this._parser, dfa, startIndex, stopIndex, conflictingAlts, conflictState);
            }
        }
    };
    ParserATNSimulator.prototype.reportContextSensitivity = function (dfa, prediction, acceptState, startIndex, stopIndex) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            var interval = Interval.of(startIndex, stopIndex);
            console.log("reportContextSensitivity decision=" + dfa.decision + ":" + acceptState.s0.configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            var listener = this._parser.getErrorListenerDispatch();
            if (listener.reportContextSensitivity) {
                listener.reportContextSensitivity(this._parser, dfa, startIndex, stopIndex, prediction, acceptState);
            }
        }
    };
    /** If context sensitive parsing, we know it's ambiguity not conflict */
    ParserATNSimulator.prototype.reportAmbiguity = function (dfa, D, // the DFA state from execATN(): void that had SLL conflicts
    startIndex, stopIndex, exact, ambigAlts, configs) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            var interval = Interval.of(startIndex, stopIndex);
            console.log("reportAmbiguity " +
                ambigAlts + ":" + configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            var listener = this._parser.getErrorListenerDispatch();
            if (listener.reportAmbiguity) {
                listener.reportAmbiguity(this._parser, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
            }
        }
    };
    ParserATNSimulator.prototype.getReturnState = function (context) {
        if (context.isEmpty) {
            return PredictionContext.EMPTY_FULL_STATE_KEY;
        }
        var state = this.atn.states[context.invokingState];
        var transition = state.transition(0);
        return transition.followState.stateNumber;
    };
    ParserATNSimulator.prototype.skipTailCalls = function (context) {
        if (!this.optimize_tail_calls) {
            return context;
        }
        while (!context.isEmpty) {
            var state = this.atn.states[context.invokingState];
            // assert(state.numberOfTransitions === 1 && state.transition(0).serializationType === TransitionType.RULE);
            var transition = state.transition(0);
            if (!transition.tailCall) {
                break;
            }
            // This method requires that the root ancestor of the ParserRuleContext be empty. If we make it to this
            // line, we know the current node is not empty, which means it does have a parent.
            context = context.parent;
        }
        return context;
    };
    Object.defineProperty(ParserATNSimulator.prototype, "parser", {
        /**
         * @since 4.3
         */
        get: function () {
            return this._parser;
        },
        enumerable: true,
        configurable: true
    });
    ParserATNSimulator.debug = false;
    ParserATNSimulator.dfa_debug = false;
    ParserATNSimulator.retry_debug = false;
    ParserATNSimulator.STATE_ALT_SORT_COMPARATOR = function (o1, o2) {
        var diff = o1.state.nonStopStateNumber - o2.state.nonStopStateNumber;
        if (diff !== 0) {
            return diff;
        }
        diff = o1.alt - o2.alt;
        if (diff !== 0) {
            return diff;
        }
        return 0;
    };
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "predictionMode", void 0);
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "getPredictionMode", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "setPredictionMode", null);
    __decorate([
        Override
    ], ParserATNSimulator.prototype, "reset", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "adaptivePredict", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull)
    ], ParserATNSimulator.prototype, "getStartState", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(3, NotNull)
    ], ParserATNSimulator.prototype, "execDFA", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(3, NotNull)
    ], ParserATNSimulator.prototype, "execATN", null);
    __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ParserATNSimulator.prototype, "handleNoViableAlt", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "getExistingTargetState", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "computeTargetState", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "removeAllConfigsNotInRuleStopState", null);
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "computeStartState", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "applyPrecedenceFilter", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "getReachableTarget", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull)
    ], ParserATNSimulator.prototype, "getPredsForAmbigAlts", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "evalSemanticContext", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "evalSemanticContextImpl", null);
    __decorate([
        __param(1, NotNull),
        __param(4, Nullable)
    ], ParserATNSimulator.prototype, "closure", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, Nullable),
        __param(3, NotNull),
        __param(6, NotNull)
    ], ParserATNSimulator.prototype, "closureImpl", null);
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "getRuleName", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "getEpsilonTarget", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "actionTransition", null);
    __decorate([
        Nullable,
        __param(0, NotNull),
        __param(1, NotNull)
    ], ParserATNSimulator.prototype, "precedenceTransition", null);
    __decorate([
        Nullable,
        __param(0, NotNull),
        __param(1, NotNull)
    ], ParserATNSimulator.prototype, "predTransition", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull), __param(2, Nullable)
    ], ParserATNSimulator.prototype, "ruleTransition", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "isConflicted", null);
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "getTokenName", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "dumpDeadEndConfigs", null);
    __decorate([
        NotNull,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull)
    ], ParserATNSimulator.prototype, "noViableAlt", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "getUniqueAlt", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "configWithAltAtStopState", null);
    __decorate([
        NotNull,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(4, NotNull)
    ], ParserATNSimulator.prototype, "addDFAEdge", null);
    __decorate([
        __param(0, Nullable), __param(2, Nullable)
    ], ParserATNSimulator.prototype, "setDFAEdge", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "addDFAContextState", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "addDFAState", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "createDFAState", null);
    __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ParserATNSimulator.prototype, "reportAttemptingFullContext", null);
    __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ParserATNSimulator.prototype, "reportContextSensitivity", null);
    __decorate([
        __param(0, NotNull),
        __param(5, NotNull),
        __param(6, NotNull)
    ], ParserATNSimulator.prototype, "reportAmbiguity", null);
    ParserATNSimulator = __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator);
    return ParserATNSimulator;
}(ATNSimulator));
export { ParserATNSimulator };
//# sourceMappingURL=ParserATNSimulator.js.map