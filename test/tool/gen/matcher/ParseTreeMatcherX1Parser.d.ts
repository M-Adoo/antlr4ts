import { ATN } from "../../../../src";
import { Parser } from "../../../../src";
import { ParserRuleContext } from "../../../../src";
import { TerminalNode } from "../../../../src";
import { TokenStream } from "../../../../src";
import { Vocabulary } from "../../../../src";
export declare class ParseTreeMatcherX1Parser extends Parser {
    static readonly T__0: number;
    static readonly T__1: number;
    static readonly ID: number;
    static readonly INT: number;
    static readonly WS: number;
    static readonly RULE_s: number;
    static readonly RULE_expr: number;
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
    expr(): ExprContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class SContext extends ParserRuleContext {
    ID(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExprContext extends ParserRuleContext {
    ID(): TerminalNode | undefined;
    INT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
