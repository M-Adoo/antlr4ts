import { ATN } from "../../../../src";
import { Parser } from "../../../../src";
import { ParserRuleContext } from "../../../../src";
import { TerminalNode } from "../../../../src";
import { TokenStream } from "../../../../src";
import { Vocabulary } from "../../../../src";
export declare class ParseTreeMatcherX5Parser extends Parser {
    static readonly T__0: number;
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
    ID(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
