/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { Lexer } from "../src/Lexer";
import { TimeSpan } from "./TimeSpan";
/**
 * Test how fast we can lex Java and some unicode graphemes using old and
 * new unicode stream mechanism. It also tests load time for unicode code points beyond 0xFFFF.
 *
 * Sample output on Linux with Intel Xeon E5-2600 @ 2.20 GHz (us == microseconds, 1/1000 of a millisecond):
 *
 * ```
 * Java VM args:
 * Warming up Java compiler....
 *    load_legacy_java_utf8 average time   273us size 132266b over 3500 loads of 29038 symbols from Parser.java
 *    load_legacy_java_utf8 average time   299us size 128386b over 3500 loads of 13379 symbols from udhr_hin.txt
 *            load_new_utf8 average time   535us size 284788b over 3500 loads of 29038 symbols from Parser.java
 *            load_new_utf8 average time   439us size 153150b over 3500 loads of 13379 symbols from udhr_hin.txt
 *
 *     lex_legacy_java_utf8 average time   624us over 2000 runs of 29038 symbols
 *     lex_legacy_java_utf8 average time  1530us over 2000 runs of 29038 symbols DFA cleared
 *        lex_new_java_utf8 average time   672us over 2000 runs of 29038 symbols
 *        lex_new_java_utf8 average time  1671us over 2000 runs of 29038 symbols DFA cleared
 *
 * lex_legacy_grapheme_utf8 average time 11942us over  400 runs of  6614 symbols from udhr_kor.txt
 * lex_legacy_grapheme_utf8 average time 12075us over  400 runs of  6614 symbols from udhr_kor.txt DFA cleared
 * lex_legacy_grapheme_utf8 average time 10040us over  400 runs of 13379 symbols from udhr_hin.txt
 * lex_legacy_grapheme_utf8 average time 10221us over  400 runs of 13379 symbols from udhr_hin.txt DFA cleared
 * ```
 *
 * Sample output on OS X with 4 GHz Intel Core i7 (us == microseconds, 1/1000 of a millisecond):
 *
 * ```
 * Java VM args: -Xms2G -Xmx2G
 * Warming up Java compiler....
 * load_legacy_java_ascii_file average time    53us size  58384b over 3500 loads of 29038 symbols from Parser.java
 * load_legacy_java_ascii_file average time    27us size  15568b over 3500 loads of  7625 symbols from RuleContext.java
 *      load_legacy_java_ascii average time    53us size  65584b over 3500 loads of 29038 symbols from Parser.java
 *      load_legacy_java_ascii average time    13us size  32816b over 3500 loads of  7625 symbols from RuleContext.java
 *       load_legacy_java_utf8 average time    54us size  65584b over 3500 loads of 29038 symbols from Parser.java
 *       load_legacy_java_utf8 average time   118us size  32816b over 3500 loads of 13379 symbols from udhr_hin.txt
 *               load_new_utf8 average time   232us size 131232b over 3500 loads of 29038 symbols from Parser.java
 *               load_new_utf8 average time    69us size  32928b over 3500 loads of  7625 symbols from RuleContext.java
 *               load_new_utf8 average time   210us size  65696b over 3500 loads of 13379 symbols from udhr_hin.txt
 *
 *        lex_legacy_java_utf8 average time   342us over 2000 runs of 29038 symbols
 *        lex_legacy_java_utf8 average time   890us over 2000 runs of 29038 symbols DFA cleared
 *           lex_new_java_utf8 average time   439us over 2000 runs of 29038 symbols
 *           lex_new_java_utf8 average time   969us over 2000 runs of 29038 symbols DFA cleared
 *
 *    lex_legacy_grapheme_utf8 average time  3971us over  400 runs of  6614 symbols from udhr_kor.txt
 *    lex_legacy_grapheme_utf8 average time  4084us over  400 runs of  6614 symbols from udhr_kor.txt DFA cleared
 *    lex_legacy_grapheme_utf8 average time  7542us over  400 runs of 13379 symbols from udhr_hin.txt
 *    lex_legacy_grapheme_utf8 average time  7666us over  400 runs of 13379 symbols from udhr_hin.txt DFA cleared
 *       lex_new_grapheme_utf8 average time  4034us over  400 runs of  6614 symbols from udhr_kor.txt
 *       lex_new_grapheme_utf8 average time  4173us over  400 runs of  6614 symbols from udhr_kor.txt DFA cleared
 *       lex_new_grapheme_utf8 average time  7680us over  400 runs of 13379 symbols from udhr_hin.txt
 *       lex_new_grapheme_utf8 average time  7946us over  400 runs of 13379 symbols from udhr_hin.txt DFA cleared
 *       lex_new_grapheme_utf8 average time    70us over  400 runs of    85 symbols from emoji.txt
 *       lex_new_grapheme_utf8 average time    82us over  400 runs of    85 symbols from emoji.txt DFA cleared
 * ```
 *
 * I dump footprint now too (this is 64-bit HotSpot VM):
 *
 * ```
 * Parser.java (29038 char): org.antlr.v4.runtime.ANTLRFileStream@6b8e0782d footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          2     29164     58328   [C
 *          1        24        24   java.lang.String
 *          1        32        32   org.antlr.v4.runtime.ANTLRFileStream
 *          4               58384   (total)
 *
 * RuleContext.java (7625 char): org.antlr.v4.runtime.ANTLRFileStream@76fb7505d footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          2      7756     15512   [C
 *          1        24        24   java.lang.String
 *          1        32        32   org.antlr.v4.runtime.ANTLRFileStream
 *          4               15568   (total)
 *
 * Parser.java (29038 char): org.antlr.v4.runtime.ANTLRInputStream@1fc1cb1d footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          1     65552     65552   [C
 *          1        32        32   org.antlr.v4.runtime.ANTLRInputStream
 *          2               65584   (total)
 *
 * RuleContext.java (7625 char): org.antlr.v4.runtime.ANTLRInputStream@2c6aa25dd footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          1     32784     32784   [C
 *          1        32        32   org.antlr.v4.runtime.ANTLRInputStream
 *          2               32816   (total)
 *
 * Parser.java (29038 char): org.antlr.v4.runtime.ANTLRInputStream@3d08db0bd footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          1     65552     65552   [C
 *          1        32        32   org.antlr.v4.runtime.ANTLRInputStream
 *          2               65584   (total)
 *
 * udhr_hin.txt (13379 char): org.antlr.v4.runtime.ANTLRInputStream@486dc6f3d footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          1     32784     32784   [C
 *          1        32        32   org.antlr.v4.runtime.ANTLRInputStream
 *          2               32816   (total)
 *
 * Parser.java (29038 char): org.antlr.v4.runtime.CodePointCharStream@798fe5a1d footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          1        40        40   [C
 *          1    131088    131088   [I
 *          1        24        24   java.lang.String
 *          1        48        48   java.nio.HeapIntBuffer
 *          1        32        32   org.antlr.v4.runtime.CodePointCharStream
 *          5              131232   (total)
 *
 * RuleContext.java (7625 char): org.antlr.v4.runtime.CodePointCharStream@29cf5a20d footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          1        40        40   [C
 *          1     32784     32784   [I
 *          1        24        24   java.lang.String
 *          1        48        48   java.nio.HeapIntBuffer
 *          1        32        32   org.antlr.v4.runtime.CodePointCharStream
 *          5               32928   (total)
 *
 * udhr_hin.txt (13379 char): org.antlr.v4.runtime.CodePointCharStream@1adb8a22d footprint:
 *      COUNT       AVG       SUM   DESCRIPTION
 *          1        40        40   [C
 *          1     65552     65552   [I
 *          1        24        24   java.lang.String
 *          1        48        48   java.nio.HeapIntBuffer
 *          1        32        32   org.antlr.v4.runtime.CodePointCharStream
 *          5               65696   (total)
 * ```
 *
 * The "DFA cleared" indicates that the lexer was returned to initial conditions
 * before the tokenizing of each file.	 As the ALL(*) lexer encounters new input,
 * it records how it tokenized the chars. The next time it sees that input,
 * it will more quickly recognize the token.
 *
 * Lexing times have the top 20% stripped off before doing the average
 * to account for issues with the garbage collection and compilation pauses;
 * other OS tasks could also pop in randomly.
 *
 * Load times are too fast to measure with a microsecond clock using an SSD
 * so the average load time is computed as the overall time to load
 * n times divided by n (rather then summing up the individual times).
 *
 * @since 4.7
 */
export declare class TimeLexerSpeed {
    static readonly Parser_java_file: string;
    static readonly RuleContext_java_file: string;
    static readonly PerfDir: string;
    output: boolean;
    streamFootprints: string[];
    static main(...args: string[]): Promise<void>;
    compilerWarmUp(n: number): Promise<void>;
    lex_legacy_java_utf8(n: number, clearLexerDFACache: boolean): void;
    lex_new_java_utf8(n: number, clearLexerDFACache: boolean): Promise<void>;
    lex_legacy_grapheme_utf8(fileName: string, n: number, clearLexerDFACache: boolean): void;
    lex_new_grapheme_utf8(fileName: string, n: number, clearLexerDFACache: boolean): Promise<void>;
    tokenize(lexer: Lexer, n: number, clearLexerDFACache: boolean): TimeSpan;
    avg(values: TimeSpan[]): TimeSpan;
    std(mean: number, values: number[]): number;
    static basename(fullyQualifiedFileName: string): string;
    static getResourceSize(resourceName: string): Promise<number>;
}
