import { ATN } from "../../../../src/atn/ATN";
import { CharStream } from "../../../../src/CharStream";
import { Lexer } from "../../../../src/Lexer";
import { Vocabulary } from "../../../../src/Vocabulary";
export declare class RewriterLexer2 extends Lexer {
    static readonly ID: number;
    static readonly INT: number;
    static readonly SEMI: number;
    static readonly MUL: number;
    static readonly ASSIGN: number;
    static readonly WS: number;
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
    readonly modeNames: string[];
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
