/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

// ConvertTo-TS run at 2016-10-04T11:26:52.4399193-07:00

// import * as assert from "assert";
import * as Utils from "./misc/Utils";

import { ANTLRErrorListener } from "./ANTLRErrorListener";
import { ANTLRErrorStrategy } from "./ANTLRErrorStrategy";
import { ATN } from "./atn/ATN";
import { ATNDeserializationOptions } from "./atn/ATNDeserializationOptions";
import { ATNDeserializer } from "./atn/ATNDeserializer";
import { ATNSimulator } from "./atn/ATNSimulator";
import { ATNState } from "./atn/ATNState";
import { DefaultErrorStrategy } from "./DefaultErrorStrategy";
import { DFA } from "./dfa/DFA";
import { ErrorNode } from "./tree/ErrorNode";
import { IntegerStack } from "./misc/IntegerStack";
import { IntervalSet } from "./misc/IntervalSet";
import { IntStream } from "./IntStream";
import { Lexer } from "./Lexer";
import { Override, NotNull, Nullable } from "./Decorators";
import { ParseInfo } from "./atn/ParseInfo";
import { ParserATNSimulator } from "./atn/ParserATNSimulator";
import { ParserErrorListener } from "./ParserErrorListener";
import { ParserRuleContext } from "./ParserRuleContext";
import { ParseTreeListener } from "./tree/ParseTreeListener";
import { ParseTreePattern } from "./tree/pattern/ParseTreePattern";
import { ProxyParserErrorListener } from "./ProxyParserErrorListener";
import { RecognitionException } from "./RecognitionException";
import { Recognizer } from "./Recognizer";
import { RuleContext } from "./RuleContext";
import { RuleTransition } from "./atn/RuleTransition";
import { TerminalNode } from "./tree/TerminalNode";
import { Token } from "./Token";
import { TokenFactory } from "./TokenFactory";
import { TokenSource } from "./TokenSource";
import { TokenStream } from "./TokenStream";
import { DecisionInfo, SimulatorState, LookaheadEventInfo, PredictionContextCache, ErrorInfo, SemanticContext, PredicateEvalInfo, ContextSensitivityInfo, ATNConfigSet, AmbiguityInfo } from "./atn";
import { BitSet, MultiMap, ParseCancellationException } from "./misc";
import { DFAState } from "./dfa";
import { ParseTree, RuleNode } from "./tree";
import { ParseTreeMatch, TokenTagToken, RuleTagToken } from "./tree/pattern";
import { ListTokenSource, CommonTokenStream, ParserInterpreter, BailErrorStrategy, ANTLRInputStream } from ".";
import { TagChunk } from "./tree/pattern/TagChunk";
import { TextChunk } from "./tree/pattern/TextChunk";
import { Chunk } from "./tree/pattern/Chunk";

class TraceListener implements ParseTreeListener {
	constructor(private ruleNames: string[], private tokenStream: TokenStream) {
	}

	@Override
	public enterEveryRule(ctx: ParserRuleContext): void {
		console.log("enter   " + this.ruleNames[ctx.ruleIndex] +
			", LT(1)=" + this.tokenStream.LT(1).text);
	}

	@Override
	public exitEveryRule(ctx: ParserRuleContext): void {
		console.log("exit    " + this.ruleNames[ctx.ruleIndex] +
			", LT(1)=" + this.tokenStream.LT(1).text);
	}

	@Override
	public visitErrorNode(node: ErrorNode): void {
		// intentionally empty
	}

	@Override
	public visitTerminal(node: TerminalNode): void {
		let parent = node.parent!.ruleContext;
		let token: Token = node.symbol;
		console.log("consume " + token + " rule " + this.ruleNames[parent.ruleIndex]);
	}
}

export class ParseTreePatternMatcher {
	/**
	 * This is the backing field for `lexer`.
	 */
	private _lexer: Lexer;

	/**
	 * This is the backing field for `parser`.
	 */
	private _parser: Parser;

	protected start = "<";
	protected stop = ">";
	protected escape = "\\"; // e.g., \< and \> must escape BOTH!

	/**
	 * Regular expression corresponding to escape, for global replace
	 */
	protected escapeRE = /\\/g;

	/**
	 * Constructs a {@link ParseTreePatternMatcher} or from a {@link Lexer} and
	 * {@link Parser} object. The lexer input stream is altered for tokenizing
	 * the tree patterns. The parser is used as a convenient mechanism to get
	 * the grammar name, plus token, rule names.
	 */
	constructor(lexer: Lexer, parser: Parser) {
		this._lexer = lexer;
		this._parser = parser;
	}

	/**
	 * Set the delimiters used for marking rule and token tags within concrete
	 * syntax used by the tree pattern parser.
	 *
	 * @param start The start delimiter.
	 * @param stop The stop delimiter.
	 * @param escapeLeft The escape sequence to use for escaping a start or stop delimiter.
	 *
	 * @throws {@link Error} if `start` is not defined or empty.
	 * @throws {@link Error} if `stop` is not defined or empty.
	 */
	public setDelimiters(start: string, stop: string, escapeLeft: string): void {
		if (!start) {
			throw new Error("start cannot be null or empty");
		}

		if (!stop) {
			throw new Error("stop cannot be null or empty");
		}

		this.start = start;
		this.stop = stop;
		this.escape = escapeLeft;
		this.escapeRE = new RegExp(escapeLeft.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
	}

	/** Does `pattern` matched as rule `patternRuleIndex` match `tree`? */
	public matches(tree: ParseTree, pattern: string, patternRuleIndex: number): boolean;

	/** Does `pattern` matched as rule patternRuleIndex match tree? Pass in a
	 *  compiled pattern instead of a string representation of a tree pattern.
	 */
	public matches(tree: ParseTree, pattern: ParseTreePattern): boolean;

	public matches(tree: ParseTree, pattern: string | ParseTreePattern, patternRuleIndex: number = 0): boolean {
		if (typeof pattern === "string") {
			let p: ParseTreePattern = this.compile(pattern, patternRuleIndex);
			return this.matches(tree, p);
		} else {
			let labels = new MultiMap<string, ParseTree>();
			let mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
			return !mismatchedNode;
		}
	}

	/**
	 * Compare `pattern` matched as rule `patternRuleIndex` against
	 * `tree` and return a {@link ParseTreeMatch} object that contains the
	 * matched elements, or the node at which the match failed.
	 */
	public match(tree: ParseTree, pattern: string, patternRuleIndex: number): ParseTreeMatch;

	/**
	 * Compare `pattern` matched against `tree` and return a
	 * {@link ParseTreeMatch} object that contains the matched elements, or the
	 * node at which the match failed. Pass in a compiled pattern instead of a
	 * string representation of a tree pattern.
	 */
	public match(tree: ParseTree, pattern: ParseTreePattern): ParseTreeMatch;

	// Implementation of match
	@NotNull
	public match(tree: ParseTree, @NotNull pattern: string | ParseTreePattern, patternRuleIndex: number = 0): ParseTreeMatch {
		if (typeof pattern === "string") {
			let p: ParseTreePattern = this.compile(pattern, patternRuleIndex);
			return this.match(tree, p);
		} else {
			let labels = new MultiMap<string, ParseTree>();
			let mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
			return new ParseTreeMatch(tree, pattern, labels, mismatchedNode);
		}
	}

	/**
	 * For repeated use of a tree pattern, compile it to a
	 * {@link ParseTreePattern} using this method.
	 */
	public compile(pattern: string, patternRuleIndex: number): ParseTreePattern {
		let tokenList = this.tokenize(pattern);
		let tokenSrc = new ListTokenSource(tokenList);
		let tokens = new CommonTokenStream(tokenSrc);
		const parser = this._parser;

		let parserInterp = new ParserInterpreter(
			parser.grammarFileName,
			parser.vocabulary,
			parser.ruleNames,
			parser.getATNWithBypassAlts(),
			tokens);

		let tree: ParseTree;
		try {
			parserInterp.errorHandler = new BailErrorStrategy();
			tree = parserInterp.parse(patternRuleIndex);
//			System.out.println("pattern tree = "+tree.toStringTree(parserInterp));
		} catch (e) {
			if (e instanceof ParseCancellationException) {
				throw e.getCause();
			} else if (e instanceof RecognitionException) {
				throw e;
			} else if (e instanceof Error) {
				throw new ParseTreePatternMatcher.CannotInvokeStartRule(e);
			} else {
				throw e;
			}
		}

		// Make sure tree pattern compilation checks for a complete parse
		if (tokens.LA(1) !== Token.EOF) {
			throw new ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern();
		}

		return new ParseTreePattern(this, pattern, patternRuleIndex, tree);
	}

	/**
	 * Used to convert the tree pattern string into a series of tokens. The
	 * input stream is reset.
	 */
	@NotNull
	get lexer(): Lexer {
		return this._lexer;
	}

	/**
	 * Used to collect to the grammar file name, token names, rule names for
	 * used to parse the pattern into a parse tree.
	 */
	@NotNull
	get parser(): Parser {
		return this._parser;
	}

	// ---- SUPPORT CODE ----

	/**
	 * Recursively walk `tree` against `patternTree`, filling
	 * `match.`{@link ParseTreeMatch#labels labels}.
	 *
	 * @returns the first node encountered in `tree` which does not match
	 * a corresponding node in `patternTree`, or `undefined` if the match
	 * was successful. The specific node returned depends on the matching
	 * algorithm used by the implementation, and may be overridden.
	 */
	protected matchImpl(
		@NotNull tree: ParseTree,
		@NotNull patternTree: ParseTree,
		@NotNull labels: MultiMap<string, ParseTree>): ParseTree | undefined {
		if (!tree) {
			throw new TypeError("tree cannot be null");
		}

		if (!patternTree) {
			throw new TypeError("patternTree cannot be null");
		}

		// x and <ID>, x and y, or x and x; or could be mismatched types
		if (tree instanceof TerminalNode && patternTree instanceof TerminalNode) {
			let mismatchedNode: ParseTree | undefined;
			// both are tokens and they have same type
			if (tree.symbol.type === patternTree.symbol.type) {
				if (patternTree.symbol instanceof TokenTagToken) { // x and <ID>
					let tokenTagToken = patternTree.symbol;
					// track label->list-of-nodes for both token name and label (if any)
					labels.map(tokenTagToken.tokenName, tree);
					const l = tokenTagToken.label;
					if (l) {
						labels.map(l, tree);
					}
				}
				else if (tree.text === patternTree.text) {
					// x and x
				}
				else {
					// x and y
					if (!mismatchedNode) {
						mismatchedNode = tree;
					}
				}
			}
			else {
				if (!mismatchedNode) {
					mismatchedNode = tree;
				}
			}

			return mismatchedNode;
		}

		if (tree instanceof ParserRuleContext
			&& patternTree instanceof ParserRuleContext) {
			let mismatchedNode: ParseTree | undefined;
			// (expr ...) and <expr>
			let ruleTagToken = this.getRuleTagToken(patternTree);
			if (ruleTagToken) {
				let m: ParseTreeMatch;
				if (tree.ruleContext.ruleIndex === patternTree.ruleContext.ruleIndex) {
					// track label->list-of-nodes for both rule name and label (if any)
					labels.map(ruleTagToken.ruleName, tree);
					const l = ruleTagToken.label;
					if (l) {
						labels.map(l, tree);
					}
				}
				else {
					if (!mismatchedNode) {
						mismatchedNode = tree;
					}
				}

				return mismatchedNode;
			}

			// (expr ...) and (expr ...)
			if (tree.childCount !== patternTree.childCount) {
				if (!mismatchedNode) {
					mismatchedNode = tree;
				}

				return mismatchedNode;
			}

			let n: number = tree.childCount;
			for (let i = 0; i < n; i++) {
				let childMatch = this.matchImpl(tree.getChild(i), patternTree.getChild(i), labels);
				if (childMatch) {
					return childMatch;
				}
			}

			return mismatchedNode;
		}

		// if nodes aren't both tokens or both rule nodes, can't match
		return tree;
	}

	/** Is `t` `(expr <expr>)` subtree? */
	protected getRuleTagToken(t: ParseTree): RuleTagToken | undefined {
		if (t instanceof RuleNode) {
			if (t.childCount === 1 && t.getChild(0) instanceof TerminalNode) {
				let c = t.getChild(0) as TerminalNode;
				if (c.symbol instanceof RuleTagToken) {
//					System.out.println("rule tag subtree "+t.toStringTree(parser));
					return c.symbol;
				}
			}
		}
		return undefined;
	}

	public tokenize(pattern: string): Token[] {
		// split pattern into chunks: sea (raw input) and islands (<ID>, <expr>)
		let chunks = this.split(pattern);

		// create token stream from text and tags
		let tokens: Token[] = [];

		for (let chunk of chunks) {
			if (chunk instanceof TagChunk) {
				let tagChunk = chunk;
				const firstChar = tagChunk.tag.substr(0, 1);
				// add special rule token or conjure up new token from name
				if (firstChar === firstChar.toUpperCase()) {
					let ttype: number = this._parser.getTokenType(tagChunk.tag);
					if (ttype === Token.INVALID_TYPE) {
						throw new Error("Unknown token " + tagChunk.tag + " in pattern: " + pattern);
					}
					let t: TokenTagToken = new TokenTagToken(tagChunk.tag, ttype, tagChunk.label);
					tokens.push(t);
				}
				else if (firstChar === firstChar.toLowerCase()) {
					let ruleIndex: number = this._parser.getRuleIndex(tagChunk.tag);
					if (ruleIndex === -1) {
						throw new Error("Unknown rule " + tagChunk.tag + " in pattern: " + pattern);
					}
					let ruleImaginaryTokenType: number = this._parser.getATNWithBypassAlts().ruleToTokenType[ruleIndex];
					tokens.push(new RuleTagToken(tagChunk.tag, ruleImaginaryTokenType, tagChunk.label));
				}
				else {
					throw new Error("invalid tag: " + tagChunk.tag + " in pattern: " + pattern);
				}
			}
			else {
				let textChunk = chunk as TextChunk;
				let input = new ANTLRInputStream(textChunk.text);
				this._lexer.inputStream = input;
				let t: Token = this._lexer.nextToken();
				while (t.type !== Token.EOF) {
					tokens.push(t);
					t = this._lexer.nextToken();
				}
			}
		}

//		System.out.println("tokens="+tokens);
		return tokens;
	}

	/** Split `<ID> = <e:expr> ;` into 4 chunks for tokenizing by {@link #tokenize}. */
	public split(pattern: string): Chunk[] {
		let p: number = 0;
		let n: number = pattern.length;
		let chunks: Chunk[] = [];
		let buf: "";
		// find all start and stop indexes first, then collect
		let starts: number[] = [];
		let stops: number[] = [];
		while (p < n) {
			if (p === pattern.indexOf(this.escape + this.start, p)) {
				p += this.escape.length + this.start.length;
			}
			else if (p === pattern.indexOf(this.escape + this.stop, p)) {
				p += this.escape.length + this.stop.length;
			}
			else if (p === pattern.indexOf(this.start, p)) {
				starts.push(p);
				p += this.start.length;
			}
			else if (p === pattern.indexOf(this.stop, p)) {
				stops.push(p);
				p += this.stop.length;
			}
			else {
				p++;
			}
		}

//		System.out.println("");
//		System.out.println(starts);
//		System.out.println(stops);
		if (starts.length > stops.length) {
			throw new Error("unterminated tag in pattern: " + pattern);
		}

		if (starts.length < stops.length) {
			throw new Error("missing start tag in pattern: " + pattern);
		}

		let ntags: number = starts.length;
		for (let i = 0; i < ntags; i++) {
			if (starts[i] >= stops[i]) {
				throw new Error("tag delimiters out of order in pattern: " + pattern);
			}
		}

		// collect into chunks now
		if (ntags === 0) {
			let text: string = pattern.substring(0, n);
			chunks.push(new TextChunk(text));
		}

		if (ntags > 0 && starts[0] > 0) { // copy text up to first tag into chunks
			let text: string = pattern.substring(0, starts[0]);
			chunks.push(new TextChunk(text));
		}
		for (let i = 0; i < ntags; i++) {
			// copy inside of <tag>
			let tag: string = pattern.substring(starts[i] + this.start.length, stops[i]);
			let ruleOrToken: string = tag;
			let label: string | undefined;
			let colon: number = tag.indexOf(":");
			if (colon >= 0) {
				label = tag.substring(0, colon);
				ruleOrToken = tag.substring(colon + 1, tag.length);
			}
			chunks.push(new TagChunk(ruleOrToken, label));
			if (i + 1 < ntags) {
				// copy from end of <tag> to start of next
				let text: string = pattern.substring(stops[i] + this.stop.length, starts[i + 1]);
				chunks.push(new TextChunk(text));
			}
		}
		if (ntags > 0) {
			let afterLastTag: number = stops[ntags - 1] + this.stop.length;
			if (afterLastTag < n) { // copy text from end of last tag to end
				let text: string = pattern.substring(afterLastTag, n);
				chunks.push(new TextChunk(text));
			}
		}

		// strip out the escape sequences from text chunks but not tags
		for (let i = 0; i < chunks.length; i++) {
			let c: Chunk = chunks[i];
			if (c instanceof TextChunk) {
				let unescaped: string = c.text.replace(this.escapeRE, "");
				if (unescaped.length < c.text.length) {
					chunks[i] = new TextChunk(unescaped);
				}
			}
		}

		return chunks;
	}
}

export namespace ParseTreePatternMatcher {
	export class CannotInvokeStartRule extends Error {
		public constructor(public error: Error) {
			super(`CannotInvokeStartRule: ${error}`);
		}
	}

	// Fixes https://github.com/antlr/antlr4/issues/413
	// "Tree pattern compilation doesn't check for a complete parse"
	export class StartRuleDoesNotConsumeFullPattern extends Error {
		constructor() {
			super("StartRuleDoesNotConsumeFullPattern");
		}
	}
}

export class ProfilingATNSimulator extends ParserATNSimulator {
	protected decisions: DecisionInfo[];
	protected numDecisions: number;

	protected _input: TokenStream | undefined;
	protected _startIndex: number = 0;
	protected _sllStopIndex: number = 0;
	protected _llStopIndex: number = 0;

	protected currentDecision: number = 0;
	protected currentState: SimulatorState | undefined;

	/** At the point of LL failover, we record how SLL would resolve the conflict so that
	 *  we can determine whether or not a decision / input pair is context-sensitive.
	 *  If LL gives a different result than SLL's predicted alternative, we have a
	 *  context sensitivity for sure. The converse is not necessarily true, however.
	 *  It's possible that after conflict resolution chooses minimum alternatives,
	 *  SLL could get the same answer as LL. Regardless of whether or not the result indicates
	 *  an ambiguity, it is not treated as a context sensitivity because LL prediction
	 *  was not required in order to produce a correct prediction for this decision and input sequence.
	 *  It may in fact still be a context sensitivity but we don't know by looking at the
	 *  minimum alternatives for the current input.
	 */
	protected conflictingAltResolvedBySLL: number = 0;

	constructor(parser: Parser) {
		super(parser.interpreter.atn, parser);
		this.optimize_ll1 = false;
		this.reportAmbiguities = true;
		this.numDecisions = this.atn.decisionToState.length;
		this.decisions = [];
		for (let i = 0; i < this.numDecisions; i++) {
			this.decisions.push(new DecisionInfo(i));
		}
	}

	@Override
	public adaptivePredict(input: TokenStream, decision: number, outerContext: ParserRuleContext): number {
		try {
			this._input = input;
			this._startIndex = input.index;
			// it's possible for SLL to reach a conflict state without consuming any input
			this._sllStopIndex = this._startIndex - 1;
			this._llStopIndex = -1;
			this.currentDecision = decision;
			this.currentState = undefined;
			this.conflictingAltResolvedBySLL = ATN.INVALID_ALT_NUMBER;
			let start: number[] = process.hrtime();
			let alt: number = super.adaptivePredict(input, decision, outerContext);
			let stop: number[] = process.hrtime();

			let nanoseconds: number = (stop[0] - start[0]) * 1000000000;
			if (nanoseconds === 0) {
				nanoseconds = stop[1] - start[1];
			} else {
				// Add nanoseconds from start to end of that second, plus start of the end second to end
				nanoseconds += (1000000000 - start[1]) + stop[1];
			}

			this.decisions[decision].timeInPrediction += nanoseconds;
			this.decisions[decision].invocations++;

			let SLL_k: number = this._sllStopIndex - this._startIndex + 1;
			this.decisions[decision].SLL_TotalLook += SLL_k;
			this.decisions[decision].SLL_MinLook = this.decisions[decision].SLL_MinLook === 0 ? SLL_k : Math.min(this.decisions[decision].SLL_MinLook, SLL_k);
			if (SLL_k > this.decisions[decision].SLL_MaxLook) {
				this.decisions[decision].SLL_MaxLook = SLL_k;
				this.decisions[decision].SLL_MaxLookEvent =
					new LookaheadEventInfo(decision, undefined, alt, input, this._startIndex, this._sllStopIndex, false);
			}

			if (this._llStopIndex >= 0) {
				let LL_k: number = this._llStopIndex - this._startIndex + 1;
				this.decisions[decision].LL_TotalLook += LL_k;
				this.decisions[decision].LL_MinLook = this.decisions[decision].LL_MinLook === 0 ? LL_k : Math.min(this.decisions[decision].LL_MinLook, LL_k);
				if (LL_k > this.decisions[decision].LL_MaxLook) {
					this.decisions[decision].LL_MaxLook = LL_k;
					this.decisions[decision].LL_MaxLookEvent =
						new LookaheadEventInfo(decision, undefined, alt, input, this._startIndex, this._llStopIndex, true);
				}
			}

			return alt;
		}
		finally {
			this._input = undefined;
			this.currentDecision = -1;
		}
	}

	@Override
	protected getStartState(dfa: DFA, input: TokenStream, outerContext: ParserRuleContext, useContext: boolean): SimulatorState | undefined {
		let state: SimulatorState | undefined = super.getStartState(dfa, input, outerContext, useContext);
		this.currentState = state;
		return state;
	}

	@Override
	protected computeStartState(dfa: DFA, globalContext: ParserRuleContext, useContext: boolean): SimulatorState {
		let state: SimulatorState = super.computeStartState(dfa, globalContext, useContext);
		this.currentState = state;
		return state;
	}

	@Override
	protected computeReachSet(dfa: DFA, previous: SimulatorState, t: number, contextCache: PredictionContextCache): SimulatorState | undefined {
		if (this._input === undefined) {
			throw new Error("Invalid state");
		}

		let reachState: SimulatorState | undefined = super.computeReachSet(dfa, previous, t, contextCache);
		if (reachState == null) {
			// no reach on current lookahead symbol. ERROR.
			this.decisions[this.currentDecision].errors.push(
				new ErrorInfo(this.currentDecision, previous, this._input, this._startIndex, this._input.index),
			);
		}

		this.currentState = reachState;
		return reachState;
	}

	@Override
	protected getExistingTargetState(previousD: DFAState, t: number): DFAState | undefined {
		if (this.currentState === undefined || this._input === undefined) {
			throw new Error("Invalid state");
		}

		// this method is called after each time the input position advances
		if (this.currentState.useContext) {
			this._llStopIndex = this._input.index;
		}
		else {
			this._sllStopIndex = this._input.index;
		}

		let existingTargetState: DFAState | undefined = super.getExistingTargetState(previousD, t);
		if (existingTargetState != null) {
			// this method is directly called by execDFA; must construct a SimulatorState
			// to represent the current state for this case
			this.currentState = new SimulatorState(this.currentState.outerContext, existingTargetState, this.currentState.useContext, this.currentState.remainingOuterContext);

			if (this.currentState.useContext) {
				this.decisions[this.currentDecision].LL_DFATransitions++;
			}
			else {
				this.decisions[this.currentDecision].SLL_DFATransitions++; // count only if we transition over a DFA state
			}

			if (existingTargetState === ATNSimulator.ERROR) {
				let state: SimulatorState = new SimulatorState(this.currentState.outerContext, previousD, this.currentState.useContext, this.currentState.remainingOuterContext);
				this.decisions[this.currentDecision].errors.push(
					new ErrorInfo(this.currentDecision, state, this._input, this._startIndex, this._input.index),
				);
			}
		}

		return existingTargetState;
	}

	@Override
	protected computeTargetState(dfa: DFA, s: DFAState, remainingGlobalContext: ParserRuleContext, t: number, useContext: boolean, contextCache: PredictionContextCache): [DFAState, ParserRuleContext | undefined] {
		let targetState: [DFAState, ParserRuleContext | undefined] = super.computeTargetState(dfa, s, remainingGlobalContext, t, useContext, contextCache);

		if (useContext) {
			this.decisions[this.currentDecision].LL_ATNTransitions++;
		}
		else {
			this.decisions[this.currentDecision].SLL_ATNTransitions++;
		}

		return targetState;
	}

	@Override
	protected evalSemanticContextImpl(pred: SemanticContext, parserCallStack: ParserRuleContext, alt: number): boolean {
		if (this.currentState === undefined || this._input === undefined) {
			throw new Error("Invalid state");
		}

		let result: boolean = super.evalSemanticContextImpl(pred, parserCallStack, alt);
		if (!(pred instanceof SemanticContext.PrecedencePredicate)) {
			let fullContext: boolean = this._llStopIndex >= 0;
			let stopIndex: number = fullContext ? this._llStopIndex : this._sllStopIndex;
			this.decisions[this.currentDecision].predicateEvals.push(
				new PredicateEvalInfo(this.currentState, this.currentDecision, this._input, this._startIndex, stopIndex, pred, result, alt),
			);
		}

		return result;
	}

	@Override
	protected reportContextSensitivity(dfa: DFA, prediction: number, acceptState: SimulatorState, startIndex: number, stopIndex: number): void {
		if (this._input === undefined) {
			throw new Error("Invalid state");
		}

		if (prediction !== this.conflictingAltResolvedBySLL) {
			this.decisions[this.currentDecision].contextSensitivities.push(
				new ContextSensitivityInfo(this.currentDecision, acceptState, this._input, startIndex, stopIndex),
			);
		}
		super.reportContextSensitivity(dfa, prediction, acceptState, startIndex, stopIndex);
	}

	@Override
	protected reportAttemptingFullContext(dfa: DFA, conflictingAlts: BitSet, conflictState: SimulatorState, startIndex: number, stopIndex: number): void {
		if (conflictingAlts != null) {
			this.conflictingAltResolvedBySLL = conflictingAlts.nextSetBit(0);
		}
		else {
			this.conflictingAltResolvedBySLL = conflictState.s0.configs.getRepresentedAlternatives().nextSetBit(0);
		}
		this.decisions[this.currentDecision].LL_Fallback++;
		super.reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, stopIndex);
	}

	@Override
	protected reportAmbiguity(@NotNull dfa: DFA, D: DFAState, startIndex: number, stopIndex: number, exact: boolean, @NotNull ambigAlts: BitSet, @NotNull configs: ATNConfigSet): void {
		if (this.currentState === undefined || this._input === undefined) {
			throw new Error("Invalid state");
		}

		let prediction: number;
		if (ambigAlts != null) {
			prediction = ambigAlts.nextSetBit(0);
		}
		else {
			prediction = configs.getRepresentedAlternatives().nextSetBit(0);
		}
		if (this.conflictingAltResolvedBySLL !== ATN.INVALID_ALT_NUMBER && prediction !== this.conflictingAltResolvedBySLL) {
			// Even though this is an ambiguity we are reporting, we can
			// still detect some context sensitivities.  Both SLL and LL
			// are showing a conflict, hence an ambiguity, but if they resolve
			// to different minimum alternatives we have also identified a
			// context sensitivity.
			this.decisions[this.currentDecision].contextSensitivities.push(
				new ContextSensitivityInfo(this.currentDecision, this.currentState, this._input, startIndex, stopIndex),
			);
		}
		this.decisions[this.currentDecision].ambiguities.push(
			new AmbiguityInfo(this.currentDecision, this.currentState, ambigAlts, this._input, startIndex, stopIndex),
		);
		super.reportAmbiguity(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs);
	}

	// ---------------------------------------------------------------------

	public getDecisionInfo(): DecisionInfo[] {
		return this.decisions;
	}

	public getCurrentState(): SimulatorState | undefined {
		return this.currentState;
	}
}

/** This is all the parsing support code essentially; most of it is error recovery stuff. */
export abstract class Parser extends Recognizer<Token, ParserATNSimulator> {
	/**
	 * This field maps from the serialized ATN string to the deserialized {@link ATN} with
	 * bypass alternatives.
	 *
	 * @see ATNDeserializationOptions.isGenerateRuleBypassTransitions
	 */
	private static readonly bypassAltsAtnCache = new Map<string, ATN>();

	/**
	 * The error handling strategy for the parser. The default value is a new
	 * instance of {@link DefaultErrorStrategy}.
	 *
	 * @see #getErrorHandler
	 * @see #setErrorHandler
	 */
	@NotNull
	protected _errHandler: ANTLRErrorStrategy = new DefaultErrorStrategy();

	/**
	 * The input stream.
	 *
	 * @see #getInputStream
	 * @see #setInputStream
	 */
	protected _input: TokenStream;

	protected readonly _precedenceStack: IntegerStack = new IntegerStack();

	/**
	 * The {@link ParserRuleContext} object for the currently executing rule.
	 *
	 * This is always non-undefined during the parsing process.
	 */
	protected _ctx: ParserRuleContext;

	/**
	 * Specifies whether or not the parser should construct a parse tree during
	 * the parsing process. The default value is `true`.
	 *
	 * @see `buildParseTree`
	 */
	private _buildParseTrees: boolean = true;

	/**
	 * When {@link #setTrace}`(true)` is called, a reference to the
	 * {@link TraceListener} is stored here so it can be easily removed in a
	 * later call to {@link #setTrace}`(false)`. The listener itself is
	 * implemented as a parser listener so this field is not directly used by
	 * other parser methods.
	 */
	private _tracer: TraceListener | undefined;

	/**
	 * The list of {@link ParseTreeListener} listeners registered to receive
	 * events during the parse.
	 *
	 * @see #addParseListener
	 */
	protected _parseListeners: ParseTreeListener[] = [];

	/**
	 * The number of syntax errors reported during parsing. This value is
	 * incremented each time {@link #notifyErrorListeners} is called.
	 */
	protected _syntaxErrors: number = 0;

	/** Indicates parser has match()ed EOF token. See {@link #exitRule()}. */
	protected matchedEOF: boolean = false;

	constructor(input: TokenStream) {
		super();
		this._precedenceStack.push(0);
		this.inputStream = input;
	}

	/** reset the parser's state */
	public reset(): void;
	public reset(resetInput: boolean): void;
	public reset(resetInput?: boolean): void {
		// Note: this method executes when not parsing, so _ctx can be undefined
		if (resetInput === undefined || resetInput) {
			this.inputStream.seek(0);
		}

		this._errHandler.reset(this);
		this._ctx = undefined as any;
		this._syntaxErrors = 0;
		this.matchedEOF = false;
		this.isTrace = false;
		this._precedenceStack.clear();
		this._precedenceStack.push(0);
		let interpreter: ATNSimulator = this.interpreter;
		if (interpreter != null) {
			interpreter.reset();
		}
	}

	/**
	 * Match current input symbol against `ttype`. If the symbol type
	 * matches, {@link ANTLRErrorStrategy#reportMatch} and {@link #consume} are
	 * called to complete the match process.
	 *
	 * If the symbol type does not match,
	 * {@link ANTLRErrorStrategy#recoverInline} is called on the current error
	 * strategy to attempt recovery. If {@link #getBuildParseTree} is
	 * `true` and the token index of the symbol returned by
	 * {@link ANTLRErrorStrategy#recoverInline} is -1, the symbol is added to
	 * the parse tree by calling {@link ParserRuleContext#addErrorNode}.
	 *
	 * @param ttype the token type to match
	 * @returns the matched symbol
	 * @ if the current input symbol did not match
	 * `ttype` and the error strategy could not recover from the
	 * mismatched symbol
	 */
	@NotNull
	public match(ttype: number): Token {
		let t: Token = this.currentToken;
		if (t.type === ttype) {
			if (ttype === Token.EOF) {
				this.matchedEOF = true;
			}
			this._errHandler.reportMatch(this);
			this.consume();
		}
		else {
			t = this._errHandler.recoverInline(this);
			if (this._buildParseTrees && t.tokenIndex === -1) {
				// we must have conjured up a new token during single token insertion
				// if it's not the current symbol
				this._ctx.addErrorNode(t);
			}
		}
		return t;
	}

	/**
	 * Match current input symbol as a wildcard. If the symbol type matches
	 * (i.e. has a value greater than 0), {@link ANTLRErrorStrategy#reportMatch}
	 * and {@link #consume} are called to complete the match process.
	 *
	 * If the symbol type does not match,
	 * {@link ANTLRErrorStrategy#recoverInline} is called on the current error
	 * strategy to attempt recovery. If {@link #getBuildParseTree} is
	 * `true` and the token index of the symbol returned by
	 * {@link ANTLRErrorStrategy#recoverInline} is -1, the symbol is added to
	 * the parse tree by calling {@link ParserRuleContext#addErrorNode}.
	 *
	 * @returns the matched symbol
	 * @ if the current input symbol did not match
	 * a wildcard and the error strategy could not recover from the mismatched
	 * symbol
	 */
	@NotNull
	public matchWildcard(): Token {
		let t: Token = this.currentToken;
		if (t.type > 0) {
			this._errHandler.reportMatch(this);
			this.consume();
		}
		else {
			t = this._errHandler.recoverInline(this);
			if (this._buildParseTrees && t.tokenIndex === -1) {
				// we must have conjured up a new token during single token insertion
				// if it's not the current symbol
				this._ctx.addErrorNode(t);
			}
		}

		return t;
	}

	/**
	 * Track the {@link ParserRuleContext} objects during the parse and hook
	 * them up using the {@link ParserRuleContext#children} list so that it
	 * forms a parse tree. The {@link ParserRuleContext} returned from the start
	 * rule represents the root of the parse tree.
	 *
	 * Note that if we are not building parse trees, rule contexts only point
	 * upwards. When a rule exits, it returns the context but that gets garbage
	 * collected if nobody holds a reference. It points upwards but nobody
	 * points at it.
	 *
	 * When we build parse trees, we are adding all of these contexts to
	 * {@link ParserRuleContext#children} list. Contexts are then not candidates
	 * for garbage collection.
	 */
	set buildParseTree(buildParseTrees: boolean) {
		this._buildParseTrees = buildParseTrees;
	}

	/**
	 * Gets whether or not a complete parse tree will be constructed while
	 * parsing. This property is `true` for a newly constructed parser.
	 *
	 * @returns `true` if a complete parse tree will be constructed while
	 * parsing, otherwise `false`
	 */
	get buildParseTree(): boolean {
		return this._buildParseTrees;
	}

	@NotNull
	public getParseListeners(): ParseTreeListener[] {
		return this._parseListeners;
	}

	/**
	 * Registers `listener` to receive events during the parsing process.
	 *
	 * To support output-preserving grammar transformations (including but not
	 * limited to left-recursion removal, automated left-factoring, and
	 * optimized code generation), calls to listener methods during the parse
	 * may differ substantially from calls made by
	 * {@link ParseTreeWalker#DEFAULT} used after the parse is complete. In
	 * particular, rule entry and exit events may occur in a different order
	 * during the parse than after the parser. In addition, calls to certain
	 * rule entry methods may be omitted.
	 *
	 * With the following specific exceptions, calls to listener events are
	 * *deterministic*, i.e. for identical input the calls to listener
	 * methods will be the same.
	 *
	 * * Alterations to the grammar used to generate code may change the
	 *   behavior of the listener calls.
	 * * Alterations to the command line options passed to ANTLR 4 when
	 *   generating the parser may change the behavior of the listener calls.
	 * * Changing the version of the ANTLR Tool used to generate the parser
	 *   may change the behavior of the listener calls.
	 *
	 * @param listener the listener to add
	 *
	 * @throws {@link TypeError} if `listener` is `undefined`
	 */
	public addParseListener(@NotNull listener: ParseTreeListener): void {
		if (listener == null) {
			throw new TypeError("listener cannot be null");
		}

		this._parseListeners.push(listener);
	}

	/**
	 * Remove `listener` from the list of parse listeners.
	 *
	 * If `listener` is `undefined` or has not been added as a parse
	 * listener, this method does nothing.
	 *
	 * @see #addParseListener
	 *
	 * @param listener the listener to remove
	 */
	public removeParseListener(listener: ParseTreeListener): void {
		let index = this._parseListeners.findIndex((l) => l === listener);
		if (index !== -1) {
			this._parseListeners.splice(index, 1);
		}
	}


	/**
	 * Remove all parse listeners.
	 *
	 * @see #addParseListener
	 */
	public removeParseListeners(): void {
		this._parseListeners.length = 0;
	}

	/**
	 * Notify any parse listeners of an enter rule event.
	 *
	 * @see #addParseListener
	 */
	protected triggerEnterRuleEvent(): void {
		for (let listener of this._parseListeners) {
			if (listener.enterEveryRule) {
				listener.enterEveryRule(this._ctx);
			}

			this._ctx.enterRule(listener);
		}
	}

	/**
	 * Notify any parse listeners of an exit rule event.
	 *
	 * @see #addParseListener
	 */
	protected triggerExitRuleEvent(): void {
		// reverse order walk of listeners
		for (let i = this._parseListeners.length - 1; i >= 0; i--) {
			let listener: ParseTreeListener = this._parseListeners[i];
			this._ctx.exitRule(listener);
			if (listener.exitEveryRule) {
				listener.exitEveryRule(this._ctx);
			}
		}
	}

	/**
	 * Gets the number of syntax errors reported during parsing. This value is
	 * incremented each time {@link #notifyErrorListeners} is called.
	 *
	 * @see #notifyErrorListeners
	 */
	get numberOfSyntaxErrors(): number {
		return this._syntaxErrors;
	}

	get tokenFactory(): TokenFactory {
		return this._input.tokenSource.tokenFactory;
	}

	/**
	 * The ATN with bypass alternatives is expensive to create so we create it
	 * lazily.
	 *
	 * @ if the current parser does not
	 * implement the `serializedATN` property.
	 */
	@NotNull
	public getATNWithBypassAlts(): ATN {
		let serializedAtn: string = this.serializedATN;
		if (serializedAtn == null) {
			throw new Error("The current parser does not support an ATN with bypass alternatives.");
		}

		let result = Parser.bypassAltsAtnCache.get(serializedAtn);
		if (result == null) {
			let deserializationOptions: ATNDeserializationOptions = new ATNDeserializationOptions();
			deserializationOptions.isGenerateRuleBypassTransitions = true;
			result = new ATNDeserializer(deserializationOptions).deserialize(Utils.toCharArray(serializedAtn));
			Parser.bypassAltsAtnCache.set(serializedAtn, result);
		}

		return result;
	}

	/**
	 * The preferred method of getting a tree pattern. For example, here's a
	 * sample use:
	 *
	 * ```
	 * let t: ParseTree = parser.expr();
	 * let p: ParseTreePattern = await parser.compileParseTreePattern("<ID>+0", MyParser.RULE_expr);
	 * let m: ParseTreeMatch = p.match(t);
	 * let id: string = m.get("ID");
	 * ```
	 */
	public compileParseTreePattern(pattern: string, patternRuleIndex: number): Promise<ParseTreePattern>;

	/**
	 * The same as {@link #compileParseTreePattern(String, int)} but specify a
	 * {@link Lexer} rather than trying to deduce it from this parser.
	 */
	public compileParseTreePattern(pattern: string, patternRuleIndex: number, lexer?: Lexer): Promise<ParseTreePattern>;

	public async compileParseTreePattern(pattern: string, patternRuleIndex: number, lexer?: Lexer): Promise<ParseTreePattern> {
		if (!lexer) {
			if (this.inputStream) {
				let tokenSource = this.inputStream.tokenSource;
				if (tokenSource instanceof Lexer) {
					lexer = tokenSource;
				}
			}

			if (!lexer) {
				throw new Error("Parser can't discover a lexer to use");
			}
		}

		let currentLexer = lexer;
		let matcher = new ParseTreePatternMatcher(currentLexer, this);
		return matcher.compile(pattern, patternRuleIndex);
	}

	@NotNull
	get errorHandler(): ANTLRErrorStrategy {
		return this._errHandler;
	}

	set errorHandler(@NotNull handler: ANTLRErrorStrategy) {
		this._errHandler = handler;
	}

	@Override
	get inputStream(): TokenStream {
		return this._input;
	}

	/** Set the token stream and reset the parser. */
	set inputStream(input: TokenStream) {
		this.reset(false);
		this._input = input;
	}

	/** Match needs to return the current input symbol, which gets put
	 *  into the label for the associated token ref; e.g., x=ID.
	 */
	@NotNull
	get currentToken(): Token {
		return this._input.LT(1);
	}

	public notifyErrorListeners(/*@NotNull*/ msg: string): void;
	public notifyErrorListeners(/*@NotNull*/ msg: string, /*@NotNull*/ offendingToken: Token | null, e: RecognitionException | undefined): void;

	public notifyErrorListeners(msg: string, offendingToken?: Token | null, e?: RecognitionException | undefined): void {
		if (offendingToken === undefined) {
			offendingToken = this.currentToken;
		} else if (offendingToken === null) {
			offendingToken = undefined;
		}

		this._syntaxErrors++;
		let line: number = -1;
		let charPositionInLine: number = -1;
		if (offendingToken != null) {
			line = offendingToken.line;
			charPositionInLine = offendingToken.charPositionInLine;
		}

		let listener = this.getErrorListenerDispatch();
		if (listener.syntaxError) {
			listener.syntaxError(this, offendingToken, line, charPositionInLine, msg, e);
		}
	}

	/**
	 * Consume and return the [current symbol](`currentToken`).
	 *
	 * E.g., given the following input with `A` being the current
	 * lookahead symbol, this function moves the cursor to `B` and returns
	 * `A`.
	 *
	 * ```
	 * A B
	 * ^
	 * ```
	 *
	 * If the parser is not in error recovery mode, the consumed symbol is added
	 * to the parse tree using {@link ParserRuleContext#addChild(Token)}, and
	 * {@link ParseTreeListener#visitTerminal} is called on any parse listeners.
	 * If the parser *is* in error recovery mode, the consumed symbol is
	 * added to the parse tree using
	 * {@link ParserRuleContext#addErrorNode(Token)}, and
	 * {@link ParseTreeListener#visitErrorNode} is called on any parse
	 * listeners.
	 */
	public consume(): Token {
		let o: Token = this.currentToken;
		if (o.type !== Parser.EOF) {
			this.inputStream.consume();
		}
		let hasListener: boolean = this._parseListeners.length !== 0;
		if (this._buildParseTrees || hasListener) {
			if (this._errHandler.inErrorRecoveryMode(this)) {
				let node: ErrorNode = this._ctx.addErrorNode(o);
				if (hasListener) {
					for (let listener of this._parseListeners) {
						if (listener.visitErrorNode) {
							listener.visitErrorNode(node);
						}
					}
				}
			}
			else {
				let node: TerminalNode = this._ctx.addChild(o);
				if (hasListener) {
					for (let listener of this._parseListeners) {
						if (listener.visitTerminal) {
							listener.visitTerminal(node);
						}
					}
				}
			}
		}
		return o;
	}

	protected addContextToParseTree(): void {
		let parent = this._ctx._parent as ParserRuleContext | undefined;
		// add current context to parent if we have a parent
		if (parent != null) {
			parent.addChild(this._ctx);
		}
	}

	/**
	 * Always called by generated parsers upon entry to a rule. Access field
	 * {@link #_ctx} get the current context.
	 */
	public enterRule(@NotNull localctx: ParserRuleContext, state: number, ruleIndex: number): void {
		this.state = state;
		this._ctx = localctx;
		this._ctx._start = this._input.LT(1);
		if (this._buildParseTrees) {
			this.addContextToParseTree();
		}
		this.triggerEnterRuleEvent();
	}

	public enterLeftFactoredRule(localctx: ParserRuleContext, state: number, ruleIndex: number): void {
		this.state = state;
		if (this._buildParseTrees) {
			let factoredContext = this._ctx.getChild(this._ctx.childCount - 1) as ParserRuleContext;
			this._ctx.removeLastChild();
			factoredContext._parent = localctx;
			localctx.addChild(factoredContext);
		}

		this._ctx = localctx;
		this._ctx._start = this._input.LT(1);
		if (this._buildParseTrees) {
			this.addContextToParseTree();
		}

		this.triggerEnterRuleEvent();
	}

	public exitRule(): void {
		if (this.matchedEOF) {
			// if we have matched EOF, it cannot consume past EOF so we use LT(1) here
			this._ctx._stop = this._input.LT(1); // LT(1) will be end of file
		}
		else {
			this._ctx._stop = this._input.tryLT(-1); // stop node is what we just matched
		}
		// trigger event on _ctx, before it reverts to parent
		this.triggerExitRuleEvent();
		this.state = this._ctx.invokingState;
		this._ctx = this._ctx._parent as ParserRuleContext;
	}

	public enterOuterAlt(localctx: ParserRuleContext, altNum: number): void {
		localctx.altNumber = altNum;
		// if we have new localctx, make sure we replace existing ctx
		// that is previous child of parse tree
		if (this._buildParseTrees && this._ctx !== localctx) {
			let parent = this._ctx._parent as ParserRuleContext | undefined;
			if (parent != null) {
				parent.removeLastChild();
				parent.addChild(localctx);
			}
		}
		this._ctx = localctx;
	}

	/**
	 * Get the precedence level for the top-most precedence rule.
	 *
	 * @returns The precedence level for the top-most precedence rule, or -1 if
	 * the parser context is not nested within a precedence rule.
	 */
	get precedence(): number {
		if (this._precedenceStack.isEmpty) {
			return -1;
		}

		return this._precedenceStack.peek();
	}

	public enterRecursionRule(localctx: ParserRuleContext, state: number, ruleIndex: number, precedence: number): void {
		this.state = state;
		this._precedenceStack.push(precedence);
		this._ctx = localctx;
		this._ctx._start = this._input.LT(1);
		this.triggerEnterRuleEvent(); // simulates rule entry for left-recursive rules
	}

	/** Like {@link #enterRule} but for recursive rules.
	 *  Make the current context the child of the incoming localctx.
	 */
	public pushNewRecursionContext(localctx: ParserRuleContext, state: number, ruleIndex: number): void {
		let previous: ParserRuleContext = this._ctx;
		previous._parent = localctx;
		previous.invokingState = state;
		previous._stop = this._input.tryLT(-1);

		this._ctx = localctx;
		this._ctx._start = previous._start;
		if (this._buildParseTrees) {
			this._ctx.addChild(previous);
		}

		this.triggerEnterRuleEvent(); // simulates rule entry for left-recursive rules
	}

	public unrollRecursionContexts(_parentctx: ParserRuleContext): void {
		this._precedenceStack.pop();
		this._ctx._stop = this._input.tryLT(-1);
		let retctx: ParserRuleContext = this._ctx; // save current ctx (return value)

		// unroll so _ctx is as it was before call to recursive method
		if (this._parseListeners.length > 0) {
			while (this._ctx !== _parentctx) {
				this.triggerExitRuleEvent();
				this._ctx = this._ctx._parent as ParserRuleContext;
			}
		}
		else {
			this._ctx = _parentctx;
		}

		// hook into tree
		retctx._parent = _parentctx;

		if (this._buildParseTrees && _parentctx != null) {
			// add return ctx into invoking rule's tree
			_parentctx.addChild(retctx);
		}
	}

	public getInvokingContext(ruleIndex: number): ParserRuleContext | undefined {
		let p = this._ctx;
		while (p && p.ruleIndex !== ruleIndex) {
			p = p._parent as ParserRuleContext;
		}
		return p;
	}

	get context(): ParserRuleContext {
		return this._ctx;
	}

	set context(ctx: ParserRuleContext) {
		this._ctx = ctx;
	}

	@Override
	public precpred(@Nullable localctx: RuleContext, precedence: number): boolean {
		return precedence >= this._precedenceStack.peek();
	}

	@Override
	public getErrorListenerDispatch(): ParserErrorListener {
		return new ProxyParserErrorListener(this.getErrorListeners());
	}

	public inContext(context: string): boolean {
		// TODO: useful in parser?
		return false;
	}

	/**
	 * Checks whether or not `symbol` can follow the current state in the
	 * ATN. The behavior of this method is equivalent to the following, but is
	 * implemented such that the complete context-sensitive follow set does not
	 * need to be explicitly constructed.
	 *
	 * ```
	 * return getExpectedTokens().contains(symbol);
	 * ```
	 *
	 * @param symbol the symbol type to check
	 * @returns `true` if `symbol` can follow the current state in
	 * the ATN, otherwise `false`.
	 */
	public isExpectedToken(symbol: number): boolean {
//   		return interpreter.atn.nextTokens(_ctx);
		let atn: ATN = this.interpreter.atn;
		let ctx: ParserRuleContext = this._ctx;
		let s: ATNState = atn.states[this.state];
		let following: IntervalSet = atn.nextTokens(s);
		if (following.contains(symbol)) {
			return true;
		}
//        System.out.println("following "+s+"="+following);
		if (!following.contains(Token.EPSILON)) {
			return false;
		}

		while (ctx != null && ctx.invokingState >= 0 && following.contains(Token.EPSILON)) {
			let invokingState: ATNState = atn.states[ctx.invokingState];
			let rt = invokingState.transition(0) as RuleTransition;
			following = atn.nextTokens(rt.followState);
			if (following.contains(symbol)) {
				return true;
			}

			ctx = ctx._parent as ParserRuleContext;
		}

		if (following.contains(Token.EPSILON) && symbol === Token.EOF) {
			return true;
		}

		return false;
	}

	get isMatchedEOF(): boolean {
		return this.matchedEOF;
	}

	/**
	 * Computes the set of input symbols which could follow the current parser
	 * state and context, as given by {@link #getState} and {@link #getContext},
	 * respectively.
	 *
	 * @see ATN#getExpectedTokens(int, RuleContext)
	 */
	@NotNull
	public getExpectedTokens(): IntervalSet {
		return this.atn.getExpectedTokens(this.state, this.context);
	}

	@NotNull
	public getExpectedTokensWithinCurrentRule(): IntervalSet {
		let atn: ATN = this.interpreter.atn;
		let s: ATNState = atn.states[this.state];
		return atn.nextTokens(s);
	}

	/** Get a rule's index (i.e., `RULE_ruleName` field) or -1 if not found. */
	public getRuleIndex(ruleName: string): number {
		let ruleIndex = this.getRuleIndexMap().get(ruleName);
		if (ruleIndex != null) {
			return ruleIndex;
		}
		return -1;
	}

	get ruleContext(): ParserRuleContext { return this._ctx; }

	/** Return List&lt;String&gt; of the rule names in your parser instance
	 *  leading up to a call to the current rule.  You could override if
	 *  you want more details such as the file/line info of where
	 *  in the ATN a rule is invoked.
	 *
	 *  This is very useful for error messages.
	 */

	public getRuleInvocationStack(ctx: RuleContext = this._ctx): string[] {
		let p: RuleContext | undefined = ctx;  		// Workaround for Microsoft/TypeScript#14487
		let ruleNames: string[] = this.ruleNames;
		let stack: string[] = [];
		while (p != null) {
			// compute what follows who invoked us
			let ruleIndex: number = p.ruleIndex;
			if (ruleIndex < 0) {
				stack.push("n/a");
			} else {
				stack.push(ruleNames[ruleIndex]);
			}
			p = p._parent as RuleContext;
		}
		return stack;
	}

	/** For debugging and other purposes. */
	public getDFAStrings(): string[] {
		let s: string[] = [];
		for (let dfa of this._interp.atn.decisionToDFA) {
			s.push(dfa.toString(this.vocabulary, this.ruleNames));
		}
		return s;
	}

	/** For debugging and other purposes. */
	public dumpDFA(): void {
		let seenOne: boolean = false;
		for (let dfa of this._interp.atn.decisionToDFA) {
			if (!dfa.isEmpty) {
				if (seenOne) {
					console.log();
				}
				console.log("Decision " + dfa.decision + ":");
				process.stdout.write(dfa.toString(this.vocabulary, this.ruleNames));
				seenOne = true;
			}
		}
	}

	get sourceName(): string {
		return this._input.sourceName;
	}

	@Override
	get parseInfo(): Promise<ParseInfo | undefined> {
		return new Promise((resolve, reject) => {
			let interp: ParserATNSimulator = this.interpreter;
			if (interp instanceof ProfilingATNSimulator) {
				resolve(new ParseInfo(interp));
			}
			resolve();
		});
	}

	/**
	 * @since 4.3
	 */
	public async setProfile(profile: boolean): Promise<void> {
		let interp: ParserATNSimulator = this.interpreter;
		if (profile) {
			if (!(interp instanceof ProfilingATNSimulator)) {
				this.interpreter = new ProfilingATNSimulator(this);
			}
		} else if (interp instanceof ProfilingATNSimulator) {
			this.interpreter = new ParserATNSimulator(this.atn, this);
		}

		this.interpreter.setPredictionMode(interp.getPredictionMode());
	}

	/** During a parse is sometimes useful to listen in on the rule entry and exit
	 *  events as well as token matches. This is for quick and dirty debugging.
	 */
	set isTrace(trace: boolean) {
		if (!trace) {
			if (this._tracer) {
				this.removeParseListener(this._tracer);
				this._tracer = undefined;
			}
		}
		else {
			if (this._tracer) {
				this.removeParseListener(this._tracer);
			} else {
				this._tracer = new TraceListener(this.ruleNames, this._input);
			}

			this.addParseListener(this._tracer);
		}
	}

	/**
	 * Gets whether a {@link TraceListener} is registered as a parse listener
	 * for the parser.
	 */
	get isTrace(): boolean {
		return this._tracer != null;
	}
}
