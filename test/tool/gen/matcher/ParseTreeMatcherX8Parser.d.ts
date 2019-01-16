import { ATN } from "../../../../src/atn/ATN";
import { Parser } from "../../../../src/Parser";
import { ParserRuleContext } from "../../../../src/ParserRuleContext";
import { RuleContext } from "../../../../src/RuleContext";
import { TerminalNode } from "../../../../src/tree/TerminalNode";
import { TokenStream } from "../../../../src/TokenStream";
import { Vocabulary } from "../../../../src/Vocabulary";
export declare class ParseTreeMatcherX8Parser extends Parser {
    static readonly T__0: number;
    static readonly T__1: number;
    static readonly T__2: number;
    static readonly T__3: number;
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
    expr(_p: number): ExprContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expr_sempred(_localctx, predIndex);
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class SContext extends ParserRuleContext {
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExprContext extends ParserRuleContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    ID(): TerminalNode | undefined;
    INT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
