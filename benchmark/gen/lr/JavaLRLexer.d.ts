import { ATN } from "../../../src/atn/ATN";
import { CharStream } from "../../../src/CharStream";
import { Lexer } from "../../../src/Lexer";
import { Vocabulary } from "../../../src/Vocabulary";
export declare class JavaLRLexer extends Lexer {
    static readonly ABSTRACT: number;
    static readonly ASSERT: number;
    static readonly BOOLEAN: number;
    static readonly BREAK: number;
    static readonly BYTE: number;
    static readonly CASE: number;
    static readonly CATCH: number;
    static readonly CHAR: number;
    static readonly CLASS: number;
    static readonly CONST: number;
    static readonly CONTINUE: number;
    static readonly DEFAULT: number;
    static readonly DO: number;
    static readonly DOUBLE: number;
    static readonly ELSE: number;
    static readonly ENUM: number;
    static readonly EXTENDS: number;
    static readonly FINAL: number;
    static readonly FINALLY: number;
    static readonly FLOAT: number;
    static readonly FOR: number;
    static readonly IF: number;
    static readonly GOTO: number;
    static readonly IMPLEMENTS: number;
    static readonly IMPORT: number;
    static readonly INSTANCEOF: number;
    static readonly INT: number;
    static readonly INTERFACE: number;
    static readonly LONG: number;
    static readonly NATIVE: number;
    static readonly NEW: number;
    static readonly PACKAGE: number;
    static readonly PRIVATE: number;
    static readonly PROTECTED: number;
    static readonly PUBLIC: number;
    static readonly RETURN: number;
    static readonly SHORT: number;
    static readonly STATIC: number;
    static readonly STRICTFP: number;
    static readonly SUPER: number;
    static readonly SWITCH: number;
    static readonly SYNCHRONIZED: number;
    static readonly THIS: number;
    static readonly THROW: number;
    static readonly THROWS: number;
    static readonly TRANSIENT: number;
    static readonly TRY: number;
    static readonly VOID: number;
    static readonly VOLATILE: number;
    static readonly WHILE: number;
    static readonly IntegerLiteral: number;
    static readonly FloatingPointLiteral: number;
    static readonly BooleanLiteral: number;
    static readonly CharacterLiteral: number;
    static readonly StringLiteral: number;
    static readonly NullLiteral: number;
    static readonly LPAREN: number;
    static readonly RPAREN: number;
    static readonly LBRACE: number;
    static readonly RBRACE: number;
    static readonly LBRACK: number;
    static readonly RBRACK: number;
    static readonly SEMI: number;
    static readonly COMMA: number;
    static readonly DOT: number;
    static readonly ASSIGN: number;
    static readonly GT: number;
    static readonly LT: number;
    static readonly BANG: number;
    static readonly TILDE: number;
    static readonly QUESTION: number;
    static readonly COLON: number;
    static readonly EQUAL: number;
    static readonly LE: number;
    static readonly GE: number;
    static readonly NOTEQUAL: number;
    static readonly AND: number;
    static readonly OR: number;
    static readonly INC: number;
    static readonly DEC: number;
    static readonly ADD: number;
    static readonly SUB: number;
    static readonly MUL: number;
    static readonly DIV: number;
    static readonly BITAND: number;
    static readonly BITOR: number;
    static readonly CARET: number;
    static readonly MOD: number;
    static readonly ADD_ASSIGN: number;
    static readonly SUB_ASSIGN: number;
    static readonly MUL_ASSIGN: number;
    static readonly DIV_ASSIGN: number;
    static readonly AND_ASSIGN: number;
    static readonly OR_ASSIGN: number;
    static readonly XOR_ASSIGN: number;
    static readonly MOD_ASSIGN: number;
    static readonly LSHIFT_ASSIGN: number;
    static readonly RSHIFT_ASSIGN: number;
    static readonly URSHIFT_ASSIGN: number;
    static readonly Identifier: number;
    static readonly AT: number;
    static readonly ELLIPSIS: number;
    static readonly WS: number;
    static readonly COMMENT: number;
    static readonly LINE_COMMENT: number;
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
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
