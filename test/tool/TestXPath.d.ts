/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { CharStream } from "../../src/CharStream";
import { Lexer } from "../../src/Lexer";
import { Parser } from "../../src/Parser";
import { ParseTree } from "../../src/tree/ParseTree";
import { TokenStream } from "../../src/TokenStream";
export declare class TestXPath {
    testValidPaths(): void;
    testWeirdChar(): void;
    testWeirdChar2(): void;
    testBadSyntax(): void;
    testMissingWordAtEnd(): void;
    testBadTokenName(): void;
    testBadRuleName(): void;
    protected testError<TParser extends Parser>(input: string, path: string, expected: RegExp, startRule: (parser: TParser) => ParseTree, lexerCtor: {
        new (stream: CharStream): Lexer;
    }, parserCtor: {
        new (stream: TokenStream): TParser;
    }): void;
    private getNodeStrings<TParser>(input, xpath, startRule, lexerCtor, parserCtor);
}
