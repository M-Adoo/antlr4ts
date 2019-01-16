import { ATN } from "../../../src/atn/ATN";
import { Parser } from "../../../src/Parser";
import { ParserRuleContext } from "../../../src/ParserRuleContext";
import { TerminalNode } from "../../../src/tree/TerminalNode";
import { Token } from "../../../src/Token";
import { TokenStream } from "../../../src/TokenStream";
import { Vocabulary } from "../../../src/Vocabulary";
import { JavaListener } from "./JavaListener";
import { JavaVisitor } from "./JavaVisitor";
export declare class JavaParser extends Parser {
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
    static readonly RULE_compilationUnit: number;
    static readonly RULE_packageDeclaration: number;
    static readonly RULE_importDeclaration: number;
    static readonly RULE_typeDeclaration: number;
    static readonly RULE_classOrInterfaceDeclaration: number;
    static readonly RULE_classOrInterfaceModifiers: number;
    static readonly RULE_classOrInterfaceModifier: number;
    static readonly RULE_modifiers: number;
    static readonly RULE_classDeclaration: number;
    static readonly RULE_normalClassDeclaration: number;
    static readonly RULE_typeParameters: number;
    static readonly RULE_typeParameter: number;
    static readonly RULE_typeBound: number;
    static readonly RULE_enumDeclaration: number;
    static readonly RULE_enumBody: number;
    static readonly RULE_enumConstants: number;
    static readonly RULE_enumConstant: number;
    static readonly RULE_enumBodyDeclarations: number;
    static readonly RULE_interfaceDeclaration: number;
    static readonly RULE_normalInterfaceDeclaration: number;
    static readonly RULE_typeList: number;
    static readonly RULE_classBody: number;
    static readonly RULE_interfaceBody: number;
    static readonly RULE_classBodyDeclaration: number;
    static readonly RULE_memberDecl: number;
    static readonly RULE_memberDeclaration: number;
    static readonly RULE_genericMethodOrConstructorDecl: number;
    static readonly RULE_genericMethodOrConstructorRest: number;
    static readonly RULE_methodDeclaration: number;
    static readonly RULE_fieldDeclaration: number;
    static readonly RULE_interfaceBodyDeclaration: number;
    static readonly RULE_interfaceMemberDecl: number;
    static readonly RULE_interfaceMethodOrFieldDecl: number;
    static readonly RULE_interfaceMethodOrFieldRest: number;
    static readonly RULE_methodDeclaratorRest: number;
    static readonly RULE_voidMethodDeclaratorRest: number;
    static readonly RULE_interfaceMethodDeclaratorRest: number;
    static readonly RULE_interfaceGenericMethodDecl: number;
    static readonly RULE_voidInterfaceMethodDeclaratorRest: number;
    static readonly RULE_constructorDeclaratorRest: number;
    static readonly RULE_constantDeclarator: number;
    static readonly RULE_variableDeclarators: number;
    static readonly RULE_variableDeclarator: number;
    static readonly RULE_constantDeclaratorsRest: number;
    static readonly RULE_constantDeclaratorRest: number;
    static readonly RULE_variableDeclaratorId: number;
    static readonly RULE_variableInitializer: number;
    static readonly RULE_arrayInitializer: number;
    static readonly RULE_modifier: number;
    static readonly RULE_packageOrTypeName: number;
    static readonly RULE_enumConstantName: number;
    static readonly RULE_typeName: number;
    static readonly RULE_type: number;
    static readonly RULE_classOrInterfaceType: number;
    static readonly RULE_primitiveType: number;
    static readonly RULE_variableModifier: number;
    static readonly RULE_typeArguments: number;
    static readonly RULE_typeArgument: number;
    static readonly RULE_qualifiedNameList: number;
    static readonly RULE_formalParameters: number;
    static readonly RULE_formalParameterDecls: number;
    static readonly RULE_formalParameterDeclsRest: number;
    static readonly RULE_methodBody: number;
    static readonly RULE_constructorBody: number;
    static readonly RULE_qualifiedName: number;
    static readonly RULE_literal: number;
    static readonly RULE_annotations: number;
    static readonly RULE_annotation: number;
    static readonly RULE_annotationName: number;
    static readonly RULE_elementValuePairs: number;
    static readonly RULE_elementValuePair: number;
    static readonly RULE_elementValue: number;
    static readonly RULE_elementValueArrayInitializer: number;
    static readonly RULE_annotationTypeDeclaration: number;
    static readonly RULE_annotationTypeBody: number;
    static readonly RULE_annotationTypeElementDeclaration: number;
    static readonly RULE_annotationTypeElementRest: number;
    static readonly RULE_annotationMethodOrConstantRest: number;
    static readonly RULE_annotationMethodRest: number;
    static readonly RULE_annotationConstantRest: number;
    static readonly RULE_defaultValue: number;
    static readonly RULE_block: number;
    static readonly RULE_blockStatement: number;
    static readonly RULE_localVariableDeclarationStatement: number;
    static readonly RULE_localVariableDeclaration: number;
    static readonly RULE_variableModifiers: number;
    static readonly RULE_statement: number;
    static readonly RULE_catches: number;
    static readonly RULE_catchClause: number;
    static readonly RULE_catchType: number;
    static readonly RULE_finallyBlock: number;
    static readonly RULE_resourceSpecification: number;
    static readonly RULE_resources: number;
    static readonly RULE_resource: number;
    static readonly RULE_formalParameter: number;
    static readonly RULE_switchBlockStatementGroups: number;
    static readonly RULE_switchBlockStatementGroup: number;
    static readonly RULE_switchLabel: number;
    static readonly RULE_forControl: number;
    static readonly RULE_forInit: number;
    static readonly RULE_enhancedForControl: number;
    static readonly RULE_forUpdate: number;
    static readonly RULE_parExpression: number;
    static readonly RULE_expressionList: number;
    static readonly RULE_statementExpression: number;
    static readonly RULE_constantExpression: number;
    static readonly RULE_expression: number;
    static readonly RULE_assignmentOperator: number;
    static readonly RULE_conditionalExpression: number;
    static readonly RULE_conditionalOrExpression: number;
    static readonly RULE_conditionalAndExpression: number;
    static readonly RULE_inclusiveOrExpression: number;
    static readonly RULE_exclusiveOrExpression: number;
    static readonly RULE_andExpression: number;
    static readonly RULE_equalityExpression: number;
    static readonly RULE_instanceOfExpression: number;
    static readonly RULE_relationalExpression: number;
    static readonly RULE_relationalOp: number;
    static readonly RULE_shiftExpression: number;
    static readonly RULE_shiftOp: number;
    static readonly RULE_additiveExpression: number;
    static readonly RULE_multiplicativeExpression: number;
    static readonly RULE_unaryExpression: number;
    static readonly RULE_unaryExpressionNotPlusMinus: number;
    static readonly RULE_castExpression: number;
    static readonly RULE_primary: number;
    static readonly RULE_identifierSuffix: number;
    static readonly RULE_creator: number;
    static readonly RULE_createdName: number;
    static readonly RULE_innerCreator: number;
    static readonly RULE_arrayCreatorRest: number;
    static readonly RULE_classCreatorRest: number;
    static readonly RULE_explicitGenericInvocation: number;
    static readonly RULE_nonWildcardTypeArguments: number;
    static readonly RULE_typeArgumentsOrDiamond: number;
    static readonly RULE_nonWildcardTypeArgumentsOrDiamond: number;
    static readonly RULE_selector: number;
    static readonly RULE_superSuffix: number;
    static readonly RULE_explicitGenericInvocationSuffix: number;
    static readonly RULE_arguments: number;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    compilationUnit(): CompilationUnitContext;
    packageDeclaration(): PackageDeclarationContext;
    importDeclaration(): ImportDeclarationContext;
    typeDeclaration(): TypeDeclarationContext;
    classOrInterfaceDeclaration(): ClassOrInterfaceDeclarationContext;
    classOrInterfaceModifiers(): ClassOrInterfaceModifiersContext;
    classOrInterfaceModifier(): ClassOrInterfaceModifierContext;
    modifiers(): ModifiersContext;
    classDeclaration(): ClassDeclarationContext;
    normalClassDeclaration(): NormalClassDeclarationContext;
    typeParameters(): TypeParametersContext;
    typeParameter(): TypeParameterContext;
    typeBound(): TypeBoundContext;
    enumDeclaration(): EnumDeclarationContext;
    enumBody(): EnumBodyContext;
    enumConstants(): EnumConstantsContext;
    enumConstant(): EnumConstantContext;
    enumBodyDeclarations(): EnumBodyDeclarationsContext;
    interfaceDeclaration(): InterfaceDeclarationContext;
    normalInterfaceDeclaration(): NormalInterfaceDeclarationContext;
    typeList(): TypeListContext;
    classBody(): ClassBodyContext;
    interfaceBody(): InterfaceBodyContext;
    classBodyDeclaration(): ClassBodyDeclarationContext;
    memberDecl(): MemberDeclContext;
    memberDeclaration(): MemberDeclarationContext;
    genericMethodOrConstructorDecl(): GenericMethodOrConstructorDeclContext;
    genericMethodOrConstructorRest(): GenericMethodOrConstructorRestContext;
    methodDeclaration(): MethodDeclarationContext;
    fieldDeclaration(): FieldDeclarationContext;
    interfaceBodyDeclaration(): InterfaceBodyDeclarationContext;
    interfaceMemberDecl(): InterfaceMemberDeclContext;
    interfaceMethodOrFieldDecl(): InterfaceMethodOrFieldDeclContext;
    interfaceMethodOrFieldRest(): InterfaceMethodOrFieldRestContext;
    methodDeclaratorRest(): MethodDeclaratorRestContext;
    voidMethodDeclaratorRest(): MethodDeclaratorRestContext;
    interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext;
    interfaceGenericMethodDecl(): InterfaceGenericMethodDeclContext;
    voidInterfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext;
    constructorDeclaratorRest(): ConstructorDeclaratorRestContext;
    constantDeclarator(): ConstantDeclaratorContext;
    variableDeclarators(): VariableDeclaratorsContext;
    variableDeclarator(): VariableDeclaratorContext;
    constantDeclaratorsRest(): ConstantDeclaratorsRestContext;
    constantDeclaratorRest(): ConstantDeclaratorRestContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableInitializer(): VariableInitializerContext;
    arrayInitializer(): ArrayInitializerContext;
    modifier(): ModifierContext;
    packageOrTypeName(): PackageOrTypeNameContext;
    enumConstantName(): EnumConstantNameContext;
    typeName(): TypeNameContext;
    type(): TypeContext;
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    primitiveType(): PrimitiveTypeContext;
    variableModifier(): VariableModifierContext;
    typeArguments(): TypeArgumentsContext;
    typeArgument(): TypeArgumentContext;
    qualifiedNameList(): QualifiedNameListContext;
    formalParameters(): FormalParametersContext;
    formalParameterDecls(): FormalParameterDeclsContext;
    formalParameterDeclsRest(): FormalParameterDeclsRestContext;
    methodBody(): MethodBodyContext;
    constructorBody(): ConstructorBodyContext;
    qualifiedName(): QualifiedNameContext;
    literal(): LiteralContext;
    annotations(): AnnotationsContext;
    annotation(): AnnotationContext;
    annotationName(): AnnotationNameContext;
    elementValuePairs(): ElementValuePairsContext;
    elementValuePair(): ElementValuePairContext;
    elementValue(): ElementValueContext;
    elementValueArrayInitializer(): ElementValueArrayInitializerContext;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext;
    annotationTypeBody(): AnnotationTypeBodyContext;
    annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext;
    annotationTypeElementRest(): AnnotationTypeElementRestContext;
    annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext;
    annotationMethodRest(): AnnotationMethodRestContext;
    annotationConstantRest(): AnnotationConstantRestContext;
    defaultValue(): DefaultValueContext;
    block(): BlockContext;
    blockStatement(): BlockStatementContext;
    localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext;
    localVariableDeclaration(): LocalVariableDeclarationContext;
    variableModifiers(): VariableModifiersContext;
    statement(): StatementContext;
    catches(): CatchesContext;
    catchClause(): CatchClauseContext;
    catchType(): CatchTypeContext;
    finallyBlock(): FinallyBlockContext;
    resourceSpecification(): ResourceSpecificationContext;
    resources(): ResourcesContext;
    resource(): ResourceContext;
    formalParameter(): FormalParameterContext;
    switchBlockStatementGroups(): SwitchBlockStatementGroupsContext;
    switchBlockStatementGroup(): SwitchBlockStatementGroupContext;
    switchLabel(): SwitchLabelContext;
    forControl(): ForControlContext;
    forInit(): ForInitContext;
    enhancedForControl(): EnhancedForControlContext;
    forUpdate(): ForUpdateContext;
    parExpression(): ParExpressionContext;
    expressionList(): ExpressionListContext;
    statementExpression(): StatementExpressionContext;
    constantExpression(): ConstantExpressionContext;
    expression(): ExpressionContext;
    assignmentOperator(): AssignmentOperatorContext;
    conditionalExpression(): ConditionalExpressionContext;
    conditionalOrExpression(): ConditionalOrExpressionContext;
    conditionalAndExpression(): ConditionalAndExpressionContext;
    inclusiveOrExpression(): InclusiveOrExpressionContext;
    exclusiveOrExpression(): ExclusiveOrExpressionContext;
    andExpression(): AndExpressionContext;
    equalityExpression(): EqualityExpressionContext;
    instanceOfExpression(): InstanceOfExpressionContext;
    relationalExpression(): RelationalExpressionContext;
    relationalOp(): RelationalOpContext;
    shiftExpression(): ShiftExpressionContext;
    shiftOp(): ShiftOpContext;
    additiveExpression(): AdditiveExpressionContext;
    multiplicativeExpression(): MultiplicativeExpressionContext;
    unaryExpression(): UnaryExpressionContext;
    unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext;
    castExpression(): CastExpressionContext;
    primary(): PrimaryContext;
    identifierSuffix(): IdentifierSuffixContext;
    creator(): CreatorContext;
    createdName(): CreatedNameContext;
    innerCreator(): InnerCreatorContext;
    arrayCreatorRest(): ArrayCreatorRestContext;
    classCreatorRest(): ClassCreatorRestContext;
    explicitGenericInvocation(): ExplicitGenericInvocationContext;
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext;
    typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext;
    nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext;
    selector(): SelectorContext;
    superSuffix(): SuperSuffixContext;
    explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext;
    arguments(): ArgumentsContext;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class CompilationUnitContext extends ParserRuleContext {
    annotations(): AnnotationsContext | undefined;
    EOF(): TerminalNode;
    packageDeclaration(): PackageDeclarationContext | undefined;
    classOrInterfaceDeclaration(): ClassOrInterfaceDeclarationContext | undefined;
    importDeclaration(): ImportDeclarationContext[];
    importDeclaration(i: number): ImportDeclarationContext;
    typeDeclaration(): TypeDeclarationContext[];
    typeDeclaration(i: number): TypeDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class PackageDeclarationContext extends ParserRuleContext {
    qualifiedName(): QualifiedNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ImportDeclarationContext extends ParserRuleContext {
    qualifiedName(): QualifiedNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeDeclarationContext extends ParserRuleContext {
    classOrInterfaceDeclaration(): ClassOrInterfaceDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ClassOrInterfaceDeclarationContext extends ParserRuleContext {
    classOrInterfaceModifiers(): ClassOrInterfaceModifiersContext;
    classDeclaration(): ClassDeclarationContext | undefined;
    interfaceDeclaration(): InterfaceDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ClassOrInterfaceModifiersContext extends ParserRuleContext {
    classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
    classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ClassOrInterfaceModifierContext extends ParserRuleContext {
    annotation(): AnnotationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ModifiersContext extends ParserRuleContext {
    modifier(): ModifierContext[];
    modifier(i: number): ModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ClassDeclarationContext extends ParserRuleContext {
    normalClassDeclaration(): NormalClassDeclarationContext | undefined;
    enumDeclaration(): EnumDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class NormalClassDeclarationContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    classBody(): ClassBodyContext;
    typeParameters(): TypeParametersContext | undefined;
    type(): TypeContext | undefined;
    typeList(): TypeListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeParametersContext extends ParserRuleContext {
    typeParameter(): TypeParameterContext[];
    typeParameter(i: number): TypeParameterContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeParameterContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    typeBound(): TypeBoundContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeBoundContext extends ParserRuleContext {
    type(): TypeContext[];
    type(i: number): TypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class EnumDeclarationContext extends ParserRuleContext {
    ENUM(): TerminalNode;
    Identifier(): TerminalNode;
    enumBody(): EnumBodyContext;
    typeList(): TypeListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class EnumBodyContext extends ParserRuleContext {
    enumConstants(): EnumConstantsContext | undefined;
    enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class EnumConstantsContext extends ParserRuleContext {
    enumConstant(): EnumConstantContext[];
    enumConstant(i: number): EnumConstantContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class EnumConstantContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    annotations(): AnnotationsContext | undefined;
    arguments(): ArgumentsContext | undefined;
    classBody(): ClassBodyContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class EnumBodyDeclarationsContext extends ParserRuleContext {
    classBodyDeclaration(): ClassBodyDeclarationContext[];
    classBodyDeclaration(i: number): ClassBodyDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InterfaceDeclarationContext extends ParserRuleContext {
    normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class NormalInterfaceDeclarationContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    interfaceBody(): InterfaceBodyContext;
    typeParameters(): TypeParametersContext | undefined;
    typeList(): TypeListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeListContext extends ParserRuleContext {
    type(): TypeContext[];
    type(i: number): TypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ClassBodyContext extends ParserRuleContext {
    classBodyDeclaration(): ClassBodyDeclarationContext[];
    classBodyDeclaration(i: number): ClassBodyDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InterfaceBodyContext extends ParserRuleContext {
    interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
    interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ClassBodyDeclarationContext extends ParserRuleContext {
    block(): BlockContext | undefined;
    modifiers(): ModifiersContext | undefined;
    memberDecl(): MemberDeclContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class MemberDeclContext extends ParserRuleContext {
    genericMethodOrConstructorDecl(): GenericMethodOrConstructorDeclContext | undefined;
    memberDeclaration(): MemberDeclarationContext | undefined;
    Identifier(): TerminalNode | undefined;
    methodDeclaratorRest(): MethodDeclaratorRestContext | undefined;
    constructorDeclaratorRest(): ConstructorDeclaratorRestContext | undefined;
    interfaceDeclaration(): InterfaceDeclarationContext | undefined;
    classDeclaration(): ClassDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class MemberDeclarationContext extends ParserRuleContext {
    type(): TypeContext;
    methodDeclaration(): MethodDeclarationContext | undefined;
    fieldDeclaration(): FieldDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class GenericMethodOrConstructorDeclContext extends ParserRuleContext {
    typeParameters(): TypeParametersContext;
    genericMethodOrConstructorRest(): GenericMethodOrConstructorRestContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class GenericMethodOrConstructorRestContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    methodDeclaratorRest(): MethodDeclaratorRestContext | undefined;
    type(): TypeContext | undefined;
    constructorDeclaratorRest(): ConstructorDeclaratorRestContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class MethodDeclarationContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    methodDeclaratorRest(): MethodDeclaratorRestContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class FieldDeclarationContext extends ParserRuleContext {
    variableDeclarators(): VariableDeclaratorsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InterfaceBodyDeclarationContext extends ParserRuleContext {
    modifiers(): ModifiersContext | undefined;
    interfaceMemberDecl(): InterfaceMemberDeclContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InterfaceMemberDeclContext extends ParserRuleContext {
    interfaceMethodOrFieldDecl(): InterfaceMethodOrFieldDeclContext | undefined;
    interfaceGenericMethodDecl(): InterfaceGenericMethodDeclContext | undefined;
    Identifier(): TerminalNode | undefined;
    interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext | undefined;
    interfaceDeclaration(): InterfaceDeclarationContext | undefined;
    classDeclaration(): ClassDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InterfaceMethodOrFieldDeclContext extends ParserRuleContext {
    type(): TypeContext;
    Identifier(): TerminalNode;
    interfaceMethodOrFieldRest(): InterfaceMethodOrFieldRestContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InterfaceMethodOrFieldRestContext extends ParserRuleContext {
    constantDeclaratorsRest(): ConstantDeclaratorsRestContext | undefined;
    interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class MethodDeclaratorRestContext extends ParserRuleContext {
    formalParameters(): FormalParametersContext;
    methodBody(): MethodBodyContext | undefined;
    qualifiedNameList(): QualifiedNameListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InterfaceMethodDeclaratorRestContext extends ParserRuleContext {
    formalParameters(): FormalParametersContext;
    qualifiedNameList(): QualifiedNameListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InterfaceGenericMethodDeclContext extends ParserRuleContext {
    typeParameters(): TypeParametersContext;
    Identifier(): TerminalNode;
    interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext;
    type(): TypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConstructorDeclaratorRestContext extends ParserRuleContext {
    formalParameters(): FormalParametersContext;
    constructorBody(): ConstructorBodyContext;
    qualifiedNameList(): QualifiedNameListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConstantDeclaratorContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constantDeclaratorRest(): ConstantDeclaratorRestContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class VariableDeclaratorsContext extends ParserRuleContext {
    variableDeclarator(): VariableDeclaratorContext[];
    variableDeclarator(i: number): VariableDeclaratorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class VariableDeclaratorContext extends ParserRuleContext {
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableInitializer(): VariableInitializerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConstantDeclaratorsRestContext extends ParserRuleContext {
    constantDeclaratorRest(): ConstantDeclaratorRestContext;
    constantDeclarator(): ConstantDeclaratorContext[];
    constantDeclarator(i: number): ConstantDeclaratorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConstantDeclaratorRestContext extends ParserRuleContext {
    variableInitializer(): VariableInitializerContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class VariableDeclaratorIdContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class VariableInitializerContext extends ParserRuleContext {
    arrayInitializer(): ArrayInitializerContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ArrayInitializerContext extends ParserRuleContext {
    variableInitializer(): VariableInitializerContext[];
    variableInitializer(i: number): VariableInitializerContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ModifierContext extends ParserRuleContext {
    annotation(): AnnotationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class PackageOrTypeNameContext extends ParserRuleContext {
    qualifiedName(): QualifiedNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class EnumConstantNameContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeNameContext extends ParserRuleContext {
    qualifiedName(): QualifiedNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeContext extends ParserRuleContext {
    classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined;
    primitiveType(): PrimitiveTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ClassOrInterfaceTypeContext extends ParserRuleContext {
    Identifier(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    typeArguments(): TypeArgumentsContext[];
    typeArguments(i: number): TypeArgumentsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class PrimitiveTypeContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class VariableModifierContext extends ParserRuleContext {
    annotation(): AnnotationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeArgumentsContext extends ParserRuleContext {
    typeArgument(): TypeArgumentContext[];
    typeArgument(i: number): TypeArgumentContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeArgumentContext extends ParserRuleContext {
    type(): TypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class QualifiedNameListContext extends ParserRuleContext {
    qualifiedName(): QualifiedNameContext[];
    qualifiedName(i: number): QualifiedNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class FormalParametersContext extends ParserRuleContext {
    formalParameterDecls(): FormalParameterDeclsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class FormalParameterDeclsContext extends ParserRuleContext {
    variableModifiers(): VariableModifiersContext;
    type(): TypeContext;
    formalParameterDeclsRest(): FormalParameterDeclsRestContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class FormalParameterDeclsRestContext extends ParserRuleContext {
    variableDeclaratorId(): VariableDeclaratorIdContext;
    formalParameterDecls(): FormalParameterDeclsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class MethodBodyContext extends ParserRuleContext {
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConstructorBodyContext extends ParserRuleContext {
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class QualifiedNameContext extends ParserRuleContext {
    Identifier(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class LiteralContext extends ParserRuleContext {
    IntegerLiteral(): TerminalNode | undefined;
    FloatingPointLiteral(): TerminalNode | undefined;
    CharacterLiteral(): TerminalNode | undefined;
    StringLiteral(): TerminalNode | undefined;
    BooleanLiteral(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationsContext extends ParserRuleContext {
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationContext extends ParserRuleContext {
    annotationName(): AnnotationNameContext;
    elementValuePairs(): ElementValuePairsContext | undefined;
    elementValue(): ElementValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationNameContext extends ParserRuleContext {
    Identifier(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ElementValuePairsContext extends ParserRuleContext {
    elementValuePair(): ElementValuePairContext[];
    elementValuePair(i: number): ElementValuePairContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ElementValuePairContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    elementValue(): ElementValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ElementValueContext extends ParserRuleContext {
    conditionalExpression(): ConditionalExpressionContext | undefined;
    annotation(): AnnotationContext | undefined;
    elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ElementValueArrayInitializerContext extends ParserRuleContext {
    elementValue(): ElementValueContext[];
    elementValue(i: number): ElementValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationTypeDeclarationContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    annotationTypeBody(): AnnotationTypeBodyContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationTypeBodyContext extends ParserRuleContext {
    annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
    annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
    modifiers(): ModifiersContext | undefined;
    annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationTypeElementRestContext extends ParserRuleContext {
    type(): TypeContext | undefined;
    annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined;
    normalClassDeclaration(): NormalClassDeclarationContext | undefined;
    normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined;
    enumDeclaration(): EnumDeclarationContext | undefined;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
    annotationMethodRest(): AnnotationMethodRestContext | undefined;
    annotationConstantRest(): AnnotationConstantRestContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationMethodRestContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    defaultValue(): DefaultValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AnnotationConstantRestContext extends ParserRuleContext {
    variableDeclarators(): VariableDeclaratorsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class DefaultValueContext extends ParserRuleContext {
    elementValue(): ElementValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class BlockContext extends ParserRuleContext {
    blockStatement(): BlockStatementContext[];
    blockStatement(i: number): BlockStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class BlockStatementContext extends ParserRuleContext {
    localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined;
    classOrInterfaceDeclaration(): ClassOrInterfaceDeclarationContext | undefined;
    statement(): StatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class LocalVariableDeclarationStatementContext extends ParserRuleContext {
    localVariableDeclaration(): LocalVariableDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class LocalVariableDeclarationContext extends ParserRuleContext {
    variableModifiers(): VariableModifiersContext;
    type(): TypeContext;
    variableDeclarators(): VariableDeclaratorsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class VariableModifiersContext extends ParserRuleContext {
    variableModifier(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class StatementContext extends ParserRuleContext {
    block(): BlockContext | undefined;
    ASSERT(): TerminalNode | undefined;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    parExpression(): ParExpressionContext | undefined;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    forControl(): ForControlContext | undefined;
    catches(): CatchesContext | undefined;
    finallyBlock(): FinallyBlockContext | undefined;
    resourceSpecification(): ResourceSpecificationContext | undefined;
    switchBlockStatementGroups(): SwitchBlockStatementGroupsContext | undefined;
    Identifier(): TerminalNode | undefined;
    statementExpression(): StatementExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class CatchesContext extends ParserRuleContext {
    catchClause(): CatchClauseContext[];
    catchClause(i: number): CatchClauseContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class CatchClauseContext extends ParserRuleContext {
    variableModifiers(): VariableModifiersContext;
    catchType(): CatchTypeContext;
    Identifier(): TerminalNode;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class CatchTypeContext extends ParserRuleContext {
    qualifiedName(): QualifiedNameContext[];
    qualifiedName(i: number): QualifiedNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class FinallyBlockContext extends ParserRuleContext {
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ResourceSpecificationContext extends ParserRuleContext {
    resources(): ResourcesContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ResourcesContext extends ParserRuleContext {
    resource(): ResourceContext[];
    resource(i: number): ResourceContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ResourceContext extends ParserRuleContext {
    variableModifiers(): VariableModifiersContext;
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class FormalParameterContext extends ParserRuleContext {
    variableModifiers(): VariableModifiersContext;
    type(): TypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class SwitchBlockStatementGroupsContext extends ParserRuleContext {
    switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
    switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class SwitchBlockStatementGroupContext extends ParserRuleContext {
    switchLabel(): SwitchLabelContext[];
    switchLabel(i: number): SwitchLabelContext;
    blockStatement(): BlockStatementContext[];
    blockStatement(i: number): BlockStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class SwitchLabelContext extends ParserRuleContext {
    constantExpression(): ConstantExpressionContext | undefined;
    enumConstantName(): EnumConstantNameContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ForControlContext extends ParserRuleContext {
    enhancedForControl(): EnhancedForControlContext | undefined;
    forInit(): ForInitContext | undefined;
    expression(): ExpressionContext | undefined;
    forUpdate(): ForUpdateContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ForInitContext extends ParserRuleContext {
    localVariableDeclaration(): LocalVariableDeclarationContext | undefined;
    expressionList(): ExpressionListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class EnhancedForControlContext extends ParserRuleContext {
    variableModifiers(): VariableModifiersContext;
    type(): TypeContext;
    Identifier(): TerminalNode;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ForUpdateContext extends ParserRuleContext {
    expressionList(): ExpressionListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ParExpressionContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ExpressionListContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class StatementExpressionContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConstantExpressionContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    conditionalExpression(): ConditionalExpressionContext;
    assignmentOperator(): AssignmentOperatorContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AssignmentOperatorContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConditionalExpressionContext extends ParserRuleContext {
    conditionalOrExpression(): ConditionalOrExpressionContext;
    expression(): ExpressionContext | undefined;
    conditionalExpression(): ConditionalExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConditionalOrExpressionContext extends ParserRuleContext {
    conditionalAndExpression(): ConditionalAndExpressionContext[];
    conditionalAndExpression(i: number): ConditionalAndExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ConditionalAndExpressionContext extends ParserRuleContext {
    inclusiveOrExpression(): InclusiveOrExpressionContext[];
    inclusiveOrExpression(i: number): InclusiveOrExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InclusiveOrExpressionContext extends ParserRuleContext {
    exclusiveOrExpression(): ExclusiveOrExpressionContext[];
    exclusiveOrExpression(i: number): ExclusiveOrExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ExclusiveOrExpressionContext extends ParserRuleContext {
    andExpression(): AndExpressionContext[];
    andExpression(i: number): AndExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AndExpressionContext extends ParserRuleContext {
    equalityExpression(): EqualityExpressionContext[];
    equalityExpression(i: number): EqualityExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class EqualityExpressionContext extends ParserRuleContext {
    instanceOfExpression(): InstanceOfExpressionContext[];
    instanceOfExpression(i: number): InstanceOfExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InstanceOfExpressionContext extends ParserRuleContext {
    relationalExpression(): RelationalExpressionContext;
    type(): TypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class RelationalExpressionContext extends ParserRuleContext {
    shiftExpression(): ShiftExpressionContext[];
    shiftExpression(i: number): ShiftExpressionContext;
    relationalOp(): RelationalOpContext[];
    relationalOp(i: number): RelationalOpContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class RelationalOpContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ShiftExpressionContext extends ParserRuleContext {
    additiveExpression(): AdditiveExpressionContext[];
    additiveExpression(i: number): AdditiveExpressionContext;
    shiftOp(): ShiftOpContext[];
    shiftOp(i: number): ShiftOpContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ShiftOpContext extends ParserRuleContext {
    _t1: Token;
    _t2: Token;
    _t3: Token;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class AdditiveExpressionContext extends ParserRuleContext {
    multiplicativeExpression(): MultiplicativeExpressionContext[];
    multiplicativeExpression(i: number): MultiplicativeExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class MultiplicativeExpressionContext extends ParserRuleContext {
    unaryExpression(): UnaryExpressionContext[];
    unaryExpression(i: number): UnaryExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class UnaryExpressionContext extends ParserRuleContext {
    unaryExpression(): UnaryExpressionContext | undefined;
    unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
    unaryExpression(): UnaryExpressionContext | undefined;
    castExpression(): CastExpressionContext | undefined;
    primary(): PrimaryContext | undefined;
    selector(): SelectorContext[];
    selector(i: number): SelectorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class CastExpressionContext extends ParserRuleContext {
    primitiveType(): PrimitiveTypeContext | undefined;
    unaryExpression(): UnaryExpressionContext | undefined;
    unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined;
    type(): TypeContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class PrimaryContext extends ParserRuleContext {
    parExpression(): ParExpressionContext | undefined;
    arguments(): ArgumentsContext | undefined;
    superSuffix(): SuperSuffixContext | undefined;
    literal(): LiteralContext | undefined;
    creator(): CreatorContext | undefined;
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined;
    Identifier(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    identifierSuffix(): IdentifierSuffixContext | undefined;
    primitiveType(): PrimitiveTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class IdentifierSuffixContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    arguments(): ArgumentsContext | undefined;
    explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined;
    innerCreator(): InnerCreatorContext | undefined;
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class CreatorContext extends ParserRuleContext {
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    createdName(): CreatedNameContext;
    classCreatorRest(): ClassCreatorRestContext | undefined;
    arrayCreatorRest(): ArrayCreatorRestContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class CreatedNameContext extends ParserRuleContext {
    Identifier(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
    typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
    primitiveType(): PrimitiveTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class InnerCreatorContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    classCreatorRest(): ClassCreatorRestContext;
    nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ArrayCreatorRestContext extends ParserRuleContext {
    arrayInitializer(): ArrayInitializerContext | undefined;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ClassCreatorRestContext extends ParserRuleContext {
    arguments(): ArgumentsContext;
    classBody(): ClassBodyContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ExplicitGenericInvocationContext extends ParserRuleContext {
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext;
    explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class NonWildcardTypeArgumentsContext extends ParserRuleContext {
    typeList(): TypeListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class TypeArgumentsOrDiamondContext extends ParserRuleContext {
    typeArguments(): TypeArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class SelectorContext extends ParserRuleContext {
    Identifier(): TerminalNode | undefined;
    arguments(): ArgumentsContext | undefined;
    explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined;
    superSuffix(): SuperSuffixContext | undefined;
    innerCreator(): InnerCreatorContext | undefined;
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class SuperSuffixContext extends ParserRuleContext {
    arguments(): ArgumentsContext | undefined;
    Identifier(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
    superSuffix(): SuperSuffixContext | undefined;
    Identifier(): TerminalNode | undefined;
    arguments(): ArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
export declare class ArgumentsContext extends ParserRuleContext {
    expressionList(): ExpressionListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: JavaListener): void;
    exitRule(listener: JavaListener): void;
    accept<Result>(visitor: JavaVisitor<Result>): Result;
}
