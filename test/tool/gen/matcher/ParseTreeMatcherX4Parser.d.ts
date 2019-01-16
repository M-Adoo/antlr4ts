import { ATN } from "../../../../src/atn/ATN";
import { Parser } from "../../../../src/Parser";
import { ParserRuleContext } from "../../../../src/ParserRuleContext";
import { TerminalNode } from "../../../../src/tree/TerminalNode";
import { TokenStream } from "../../../../src/TokenStream";
import { Vocabulary } from "../../../../src/Vocabulary";
export declare class ParseTreeMatcherX4Parser extends Parser {
    static readonly T__0: number;
    static readonly T__1: number;
    static readonly ID: number;
    static readonly WS: number;
    static readonly RULE_s: number;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    s(): SContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class SContext extends ParserRuleContext {
    ID(): TerminalNode[];
    ID(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}