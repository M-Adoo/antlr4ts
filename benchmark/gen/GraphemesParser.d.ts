import { ATN } from "../../src/atn/ATN";
import { Parser } from "../../src/Parser";
import { ParserRuleContext } from "../../src/ParserRuleContext";
import { TerminalNode } from "../../src/tree/TerminalNode";
import { TokenStream } from "../../src/TokenStream";
import { Vocabulary } from "../../src/Vocabulary";
import { GraphemesListener } from "./GraphemesListener";
import { GraphemesVisitor } from "./GraphemesVisitor";
export declare class GraphemesParser extends Parser {
    static readonly Extend: number;
    static readonly ZWJ: number;
    static readonly SpacingMark: number;
    static readonly EmojiCoreSequence: number;
    static readonly EmojiZWJSequence: number;
    static readonly Prepend: number;
    static readonly NonControl: number;
    static readonly CRLF: number;
    static readonly HangulSyllable: number;
    static readonly RULE_emojiSequence: number;
    static readonly RULE_graphemeCluster: number;
    static readonly RULE_graphemes: number;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    emojiSequence(): EmojiSequenceContext;
    graphemeCluster(): GraphemeClusterContext;
    graphemes(): GraphemesContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class EmojiSequenceContext extends ParserRuleContext {
    EmojiZWJSequence(): TerminalNode | undefined;
    EmojiCoreSequence(): TerminalNode | undefined;
    Extend(): TerminalNode[];
    Extend(i: number): TerminalNode;
    ZWJ(): TerminalNode[];
    ZWJ(i: number): TerminalNode;
    SpacingMark(): TerminalNode[];
    SpacingMark(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: GraphemesListener): void;
    exitRule(listener: GraphemesListener): void;
    accept<Result>(visitor: GraphemesVisitor<Result>): Result;
}
export declare class GraphemeClusterContext extends ParserRuleContext {
    CRLF(): TerminalNode | undefined;
    emojiSequence(): EmojiSequenceContext | undefined;
    HangulSyllable(): TerminalNode | undefined;
    NonControl(): TerminalNode | undefined;
    Prepend(): TerminalNode[];
    Prepend(i: number): TerminalNode;
    Extend(): TerminalNode[];
    Extend(i: number): TerminalNode;
    ZWJ(): TerminalNode[];
    ZWJ(i: number): TerminalNode;
    SpacingMark(): TerminalNode[];
    SpacingMark(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: GraphemesListener): void;
    exitRule(listener: GraphemesListener): void;
    accept<Result>(visitor: GraphemesVisitor<Result>): Result;
}
export declare class GraphemesContext extends ParserRuleContext {
    EOF(): TerminalNode;
    graphemeCluster(): GraphemeClusterContext[];
    graphemeCluster(i: number): GraphemeClusterContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: GraphemesListener): void;
    exitRule(listener: GraphemesListener): void;
    accept<Result>(visitor: GraphemesVisitor<Result>): Result;
}
