import { ATN } from "../../../../src";
import { CharStream } from "../../../../src";
import { Lexer } from "../../../../src";
import { Vocabulary } from "../../../../src";
export declare class ParseTreeMatcherX2Lexer extends Lexer {
    static readonly T__0: number;
    static readonly T__1: number;
    static readonly ID: number;
    static readonly INT: number;
    static readonly WS: number;
    static readonly channelNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    constructor(input: CharStream);
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    readonly channelNames: string[];
    readonly modeNames: string[];
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
