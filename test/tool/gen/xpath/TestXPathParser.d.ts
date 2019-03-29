import { ATN } from "../../../../src";
import { Parser } from "../../../../src";
import { ParserRuleContext } from "../../../../src";
import { RuleContext } from "../../../../src";
import { TerminalNode } from "../../../../src";
import { TokenStream } from "../../../../src";
import { Vocabulary } from "../../../../src";
export declare class TestXPathParser extends Parser {
    static readonly T__0: number;
    static readonly T__1: number;
    static readonly T__2: number;
    static readonly T__3: number;
    static readonly T__4: number;
    static readonly T__5: number;
    static readonly T__6: number;
    static readonly T__7: number;
    static readonly MUL: number;
    static readonly DIV: number;
    static readonly ADD: number;
    static readonly SUB: number;
    static readonly RETURN: number;
    static readonly ID: number;
    static readonly INT: number;
    static readonly NEWLINE: number;
    static readonly WS: number;
    static readonly RULE_prog: number;
    static readonly RULE_func: number;
    static readonly RULE_body: number;
    static readonly RULE_arg: number;
    static readonly RULE_stat: number;
    static readonly RULE_expr: number;
    static readonly RULE_primary: number;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    prog(): ProgContext;
    func(): FuncContext;
    body(): BodyContext;
    arg(): ArgContext;
    stat(): StatContext;
    expr(): ExprContext;
    expr(_p: number): ExprContext;
    primary(): PrimaryContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expr_sempred(_localctx, predIndex);
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class ProgContext extends ParserRuleContext {
    func(): FuncContext[];
    func(i: number): FuncContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class FuncContext extends ParserRuleContext {
    ID(): TerminalNode;
    arg(): ArgContext[];
    arg(i: number): ArgContext;
    body(): BodyContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BodyContext extends ParserRuleContext {
    stat(): StatContext[];
    stat(i: number): StatContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ArgContext extends ParserRuleContext {
    ID(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class StatContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    copyFrom(ctx: StatContext): void;
}
export declare class PrintExprContext extends StatContext {
    expr(): ExprContext;
    constructor(ctx: StatContext);
}
export declare class AssignContext extends StatContext {
    ID(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: StatContext);
}
export declare class RetContext extends StatContext {
    RETURN(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: StatContext);
}
export declare class BlankContext extends StatContext {
    constructor(ctx: StatContext);
}
export declare class ExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    copyFrom(ctx: ExprContext): void;
}
export declare class MulDivContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    MUL(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
}
export declare class AddSubContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    ADD(): TerminalNode | undefined;
    SUB(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
}
export declare class PrimContext extends ExprContext {
    primary(): PrimaryContext;
    constructor(ctx: ExprContext);
}
export declare class PrimaryContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    copyFrom(ctx: PrimaryContext): void;
}
export declare class IntContext extends PrimaryContext {
    INT(): TerminalNode;
    constructor(ctx: PrimaryContext);
}
export declare class IdContext extends PrimaryContext {
    ID(): TerminalNode;
    constructor(ctx: PrimaryContext);
}
export declare class ParensContext extends PrimaryContext {
    expr(): ExprContext;
    constructor(ctx: PrimaryContext);
}
