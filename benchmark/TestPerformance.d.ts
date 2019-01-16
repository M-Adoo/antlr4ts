/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { CharStream } from "../src/CharStream";
import { Lexer } from "../src/Lexer";
import { Parser } from "../src/Parser";
import { ParserRuleContext } from "../src/ParserRuleContext";
import { ParseTree } from "../src/tree/ParseTree";
import { ParseTreeListener } from "../src/tree/ParseTreeListener";
import { Token } from "../src/Token";
import { TokenStream } from "../src/TokenStream";
import { JavaLexer as JavaLexer } from "./gen/std/JavaLexer";
import { JavaLexer as JavaLexerAtn } from "./gen/std-atn/JavaLexer";
import { JavaLRLexer as JavaLRLexer } from "./gen/lr/JavaLRLexer";
import { JavaLRLexer as JavaLRLexerAtn } from "./gen/lr-atn/JavaLRLexer";
import { JavaParser as JavaParser } from "./gen/std/JavaParser";
import { JavaParser as JavaParserAtn } from "./gen/std-atn/JavaParser";
import { JavaLRParser as JavaLRParser } from "./gen/lr/JavaLRParser";
import { JavaLRParser as JavaLRParserAtn } from "./gen/lr-atn/JavaLRParser";
export declare class TimeSpan {
    readonly seconds: number;
    readonly nanos: number;
    constructor(seconds: number, nanos: number);
    readonly totalMilliseconds: number;
}
export declare class Stopwatch {
    static readonly MILLIS_PER_SECOND: number;
    static readonly NANOS_PER_SECOND: number;
    static readonly NANOS_PER_MILLISECOND: number;
    private _elapsed;
    private _start?;
    static startNew(): Stopwatch;
    start(): void;
    elapsed(): TimeSpan;
    elapsedMillis(): number;
}
export declare class MurmurHashChecksum {
    private value;
    private count;
    constructor();
    update(value: number): void;
    getValue(): number;
}
export declare class TestPerformance {
    /**
     * Parse all java files under this package within the JDK_SOURCE_ROOT
     * (environment variable or property defined on the Java command line).
     */
    private static readonly TOP_PACKAGE;
    /**
     * {@code true} to load java files from sub-packages of
     * {@link #TOP_PACKAGE}.
     */
    private static readonly RECURSIVE;
    /**
     * {@code true} to read all source files from disk into memory before
     * starting the parse. The default value is {@code true} to help prevent
     * drive speed from affecting the performance results. This value may be set
     * to {@code false} to support parsing large input sets which would not
     * otherwise fit into memory.
     */
    static readonly PRELOAD_SOURCES: boolean;
    /**
     * The encoding to use when reading source files.
     */
    static readonly ENCODING: string;
    /**
     * The maximum number of files to parse in a single iteration.
     */
    private static readonly MAX_FILES_PER_PARSE_ITERATION;
    /**
     * {@code true} to call {@link Collections#shuffle} on the list of input
     * files before the first parse iteration.
     */
    private static readonly SHUFFLE_FILES_AT_START;
    /**
     * {@code true} to call {@link Collections#shuffle} before each parse
     * iteration <em>after</em> the first.
     */
    private static readonly SHUFFLE_FILES_AFTER_ITERATIONS;
    /**
     * The instance of {@link Random} passed when calling
     * {@link Collections#shuffle}.
     */
    /**
     * {@code true} to use the Java grammar with expressions in the v4
     * left-recursive syntax (JavaLR.g4). {@code false} to use the standard
     * grammar (Java.g4). In either case, the grammar is renamed in the
     * temporary directory to Java.g4 before compiling.
     */
    private static readonly USE_LR_GRAMMAR;
    /**
     * {@code true} to specify the {@code -Xforce-atn} option when generating
     * the grammar, forcing all decisions in {@code JavaParser} to be handled by
     * {@link ParserATNSimulator#adaptivePredict}.
     */
    private static readonly FORCE_ATN;
    /**
     * {@code true} to specify the {@code -atn} option when generating the
     * grammar. This will cause ANTLR to export the ATN for each decision as a
     * DOT (GraphViz) file.
     */
    private static readonly EXPORT_ATN_GRAPHS;
    /**
     * {@code true} to specify the {@code -XdbgST} option when generating the
     * grammar.
     */
    private static readonly DEBUG_TEMPLATES;
    /**
     * {@code true} to specify the {@code -XdbgSTWait} option when generating the
     * grammar.
     */
    private static readonly DEBUG_TEMPLATES_WAIT;
    /**
     * {@code true} to delete temporary (generated and compiled) files when the
     * test completes.
     */
    private static readonly DELETE_TEMP_FILES;
    /**
     * {@code true} to use a {@link ParserInterpreter} for parsing instead of
     * generated parser.
     */
    private static readonly USE_PARSER_INTERPRETER;
    /**
     * {@code true} to call {@link System#gc} and then wait for 5 seconds at the
     * end of the test to make it easier for a profiler to grab a heap dump at
     * the end of the test run.
     */
    private static readonly PAUSE_FOR_HEAP_DUMP;
    /**
     * Parse each file with {@code JavaParser.compilationUnit}.
     */
    private static readonly RUN_PARSER;
    /**
     * {@code true} to use {@link BailErrorStrategy}, {@code false} to use
     * {@link DefaultErrorStrategy}.
     */
    private static readonly BAIL_ON_ERROR;
    /**
     * {@code true} to compute a checksum for verifying consistency across
     * optimizations and multiple passes.
     */
    private static readonly COMPUTE_CHECKSUM;
    /**
     * This value is passed to {@link Parser#setBuildParseTree}.
     */
    private static readonly BUILD_PARSE_TREES;
    /**
     * Use
     * {@link ParseTreeWalker#DEFAULT}{@code .}{@link ParseTreeWalker#walk walk}
     * with the {@code JavaParserBaseListener} to show parse tree walking
     * overhead. If {@link #BUILD_PARSE_TREES} is {@code false}, the listener
     * will instead be called during the parsing process via
     * {@link Parser#addParseListener}.
     */
    private static readonly BLANK_LISTENER;
    private static readonly EXPORT_LARGEST_CONFIG_CONTEXTS;
    /**
     * Shows the number of {@link DFAState} and {@link ATNConfig} instances in
     * the DFA cache at the end of each pass. If {@link #REUSE_LEXER_DFA} and/or
     * {@link #REUSE_PARSER_DFA} are false, the corresponding instance numbers
     * will only apply to one file (the last file if {@link #NUMBER_OF_THREADS}
     * is 0, otherwise the last file which was parsed on the first thread).
     */
    private static readonly SHOW_DFA_STATE_STATS;
    /**
     * If {@code true}, the DFA state statistics report includes a breakdown of
     * the number of DFA states contained in each decision (with rule names).
     */
    static readonly DETAILED_DFA_STATE_STATS: boolean;
    private static readonly ENABLE_LEXER_DFA;
    private static readonly ENABLE_PARSER_DFA;
    /**
     * If {@code true}, the DFA will be used for full context parsing as well as
     * SLL parsing.
     */
    private static readonly ENABLE_PARSER_FULL_CONTEXT_DFA;
    /**
     * Specify the {@link PredictionMode} used by the
     * {@link ParserATNSimulator}. If {@link #TWO_STAGE_PARSING} is
     * {@code true}, this value only applies to the second stage, as the first
     * stage will always use {@link PredictionMode#SLL}.
     */
    private static readonly PREDICTION_MODE;
    private static readonly FORCE_GLOBAL_CONTEXT;
    private static readonly TRY_LOCAL_CONTEXT_FIRST;
    private static readonly OPTIMIZE_LL1;
    private static readonly OPTIMIZE_UNIQUE_CLOSURE;
    private static readonly OPTIMIZE_TAIL_CALLS;
    private static readonly TAIL_CALL_PRESERVES_SLL;
    private static readonly TREAT_SLLK1_CONFLICT_AS_AMBIGUITY;
    private static readonly TWO_STAGE_PARSING;
    private static readonly SHOW_CONFIG_STATS;
    /**
     * If {@code true}, detailed statistics for the number of DFA edges were
     * taken while parsing each file, as well as the number of DFA edges which
     * required on-the-fly computation.
     */
    static readonly COMPUTE_TRANSITION_STATS: boolean;
    private static readonly SHOW_TRANSITION_STATS_PER_FILE;
    /**
     * If {@code true}, the transition statistics will be adjusted to a running
     * total before reporting the final results.
     */
    private static readonly TRANSITION_RUNNING_AVERAGE;
    /**
     * If {@code true}, transition statistics will be weighted according to the
     * total number of transitions taken during the parsing of each file.
     */
    private static readonly TRANSITION_WEIGHTED_AVERAGE;
    /**
     * If {@code true}, after each pass a summary of the time required to parse
     * each file will be printed.
     */
    private static readonly COMPUTE_TIMING_STATS;
    /**
     * If {@code true}, the timing statistics for {@link #COMPUTE_TIMING_STATS}
     * will be cumulative (i.e. the time reported for the <em>n</em>th file will
     * be the total time required to parse the first <em>n</em> files).
     */
    private static readonly TIMING_CUMULATIVE;
    /**
     * If {@code true}, the timing statistics will include the parser only. This
     * flag allows for targeted measurements, and helps eliminate variance when
     * {@link #PRELOAD_SOURCES} is {@code false}.
     * <p/>
     * This flag has no impact when {@link #RUN_PARSER} is {@code false}.
     */
    private static readonly TIME_PARSE_ONLY;
    /**
     * When {@code true}, messages will be printed to {@link System#err} when
     * the first stage (SLL) parsing resulted in a syntax error. This option is
     * ignored when {@link #TWO_STAGE_PARSING} is {@code false}.
     */
    private static readonly REPORT_SECOND_STAGE_RETRY;
    static readonly REPORT_SYNTAX_ERRORS: boolean;
    static readonly REPORT_AMBIGUITIES: boolean;
    static readonly REPORT_FULL_CONTEXT: boolean;
    static readonly REPORT_CONTEXT_SENSITIVITY: boolean;
    /**
     * If {@code true}, a single {@code JavaLexer} will be used, and
     * {@link Lexer#setInputStream} will be called to initialize it for each
     * source file. Otherwise, a new instance will be created for each file.
     */
    private static readonly REUSE_LEXER;
    /**
     * If {@code true}, a single DFA will be used for lexing which is shared
     * across all threads and files. Otherwise, each file will be lexed with its
     * own DFA which is accomplished by creating one ATN instance per thread and
     * clearing its DFA cache before lexing each file.
     */
    private static readonly REUSE_LEXER_DFA;
    /**
     * If {@code true}, a single {@code JavaParser} will be used, and
     * {@link Parser#setInputStream} will be called to initialize it for each
     * source file. Otherwise, a new instance will be created for each file.
     */
    private static readonly REUSE_PARSER;
    /**
     * If {@code true}, a single DFA will be used for parsing which is shared
     * across all threads and files. Otherwise, each file will be parsed with
     * its own DFA which is accomplished by creating one ATN instance per thread
     * and clearing its DFA cache before parsing each file.
     */
    private static readonly REUSE_PARSER_DFA;
    /**
     * If {@code true}, the shared lexer and parser are reset after each pass.
     * If {@code false}, all passes after the first will be fully "warmed up",
     * which makes them faster and can compare them to the first warm-up pass,
     * but it will not distinguish bytecode load/JIT time from warm-up time
     * during the first pass.
     */
    private static readonly CLEAR_DFA;
    /**
     * Total number of passes to make over the source.
     */
    private static readonly PASSES;
    /**
     * This option controls the granularity of multi-threaded parse operations.
     * If {@code true}, the parsing operation will be parallelized across files;
     * otherwise the parsing will be parallelized across multiple iterations.
     */
    private static readonly FILE_GRANULARITY;
    /**
     * Number of parser threads to use.
     */
    static readonly NUMBER_OF_THREADS: number;
    private static readonly sharedLexers;
    private static readonly sharedLexerATNs;
    private static readonly sharedParsers;
    private static readonly sharedParserATNs;
    private static readonly sharedListeners;
    private static readonly totalTransitionsPerFile;
    private static readonly computedTransitionsPerFile;
    private static decisionInvocationsPerFile;
    private static fullContextFallbackPerFile;
    private static nonSllPerFile;
    private static totalTransitionsPerDecisionPerFile;
    private static computedTransitionsPerDecisionPerFile;
    private static fullContextTransitionsPerDecisionPerFile;
    private static readonly timePerFile;
    private static readonly tokensPerFile;
    private static readonly tokenCount;
    compileJdk(): void;
    /**
     * Compute and print ATN/DFA transition statistics.
     */
    private computeTransitionStatistics();
    /**
     * Compute and print timing statistics.
     */
    private computeTimingStatistics();
    private getSourceRoot(prefix);
    static getOptionsDescription(topPackage: string): string;
    /**
     *  This method is separate from {@link #parse2} so the first pass can be distinguished when analyzing
     *  profiler results.
     */
    protected parse1(currentPass: number, factory: ParserFactory, sources: InputDescriptor[], shuffleSources: boolean): void;
    /**
     *  This method is separate from {@link #parse1} so the first pass can be distinguished when analyzing
     *  profiler results.
     */
    protected parse2(currentPass: number, factory: ParserFactory, sources: InputDescriptor[], shuffleSources: boolean): void;
    protected loadSources(directory: string, filesFilter: FilenameFilter, directoriesFilter: FilenameFilter, recursive: boolean): InputDescriptor[];
    protected loadSources(directory: string, filesFilter: FilenameFilter, directoriesFilter: FilenameFilter, recursive: boolean, result: InputDescriptor[]): void;
    configOutputSize: number;
    protected parseSources(currentPass: number, factory: ParserFactory, sources: InputDescriptor[], shuffleSources: boolean): void;
    private static sum(array);
    static updateChecksum(checksum: MurmurHashChecksum, value: number | Token | undefined): void;
    protected getParserFactory(lexerCtor: {
        new (input: CharStream): JavaLRLexer | JavaLRLexerAtn | JavaLexer | JavaLexerAtn;
    }, parserCtor: {
        new (input: TokenStream): JavaLRParser | JavaLRParserAtn | JavaParser | JavaParserAtn;
    }, listenerCtor: {
        new (): ParseTreeListener;
    }, entryPointName: string, entryPoint: (parser: JavaLRParser | JavaLRParserAtn | JavaParser | JavaParserAtn) => ParserRuleContext): ParserFactory;
}
export interface ParserFactory {
    parseFile(input: CharStream, currentPass: number, thread: number): FileParseResult;
}
export declare class FileParseResult {
    sourceName: string;
    checksum: number;
    parseTree?: ParseTree;
    tokenCount: number;
    startTime: Stopwatch;
    elapsedTime: TimeSpan;
    lexerDFASize: number;
    lexerTotalTransitions: number;
    lexerComputedTransitions: number;
    parserDFASize: number;
    decisionInvocations: Uint32Array;
    fullContextFallback: Uint32Array;
    nonSll: Uint32Array;
    parserTotalTransitions: Uint32Array;
    parserComputedTransitions: Uint32Array;
    parserFullContextTransitions: Uint32Array;
    constructor(sourceName: string, checksum: number, parseTree: ParseTree | undefined, tokenCount: number, startTime: Stopwatch, lexer: Lexer | undefined, parser: Parser | undefined);
}
export interface FilenameFilter {
    accept(dir: string, name: string): boolean;
}
export declare class InputDescriptor {
    private source;
    private inputStream?;
    constructor(source: string);
    getInputStream(): CharStream;
}
