import { ParseTreeListener } from "../../../src";
import { CompilationUnitContext } from "./JavaParser";
import { PackageDeclarationContext } from "./JavaParser";
import { ImportDeclarationContext } from "./JavaParser";
import { TypeDeclarationContext } from "./JavaParser";
import { ClassOrInterfaceDeclarationContext } from "./JavaParser";
import { ClassOrInterfaceModifiersContext } from "./JavaParser";
import { ClassOrInterfaceModifierContext } from "./JavaParser";
import { ModifiersContext } from "./JavaParser";
import { ClassDeclarationContext } from "./JavaParser";
import { NormalClassDeclarationContext } from "./JavaParser";
import { TypeParametersContext } from "./JavaParser";
import { TypeParameterContext } from "./JavaParser";
import { TypeBoundContext } from "./JavaParser";
import { EnumDeclarationContext } from "./JavaParser";
import { EnumBodyContext } from "./JavaParser";
import { EnumConstantsContext } from "./JavaParser";
import { EnumConstantContext } from "./JavaParser";
import { EnumBodyDeclarationsContext } from "./JavaParser";
import { InterfaceDeclarationContext } from "./JavaParser";
import { NormalInterfaceDeclarationContext } from "./JavaParser";
import { TypeListContext } from "./JavaParser";
import { ClassBodyContext } from "./JavaParser";
import { InterfaceBodyContext } from "./JavaParser";
import { ClassBodyDeclarationContext } from "./JavaParser";
import { MemberDeclContext } from "./JavaParser";
import { MemberDeclarationContext } from "./JavaParser";
import { GenericMethodOrConstructorDeclContext } from "./JavaParser";
import { GenericMethodOrConstructorRestContext } from "./JavaParser";
import { MethodDeclarationContext } from "./JavaParser";
import { FieldDeclarationContext } from "./JavaParser";
import { InterfaceBodyDeclarationContext } from "./JavaParser";
import { InterfaceMemberDeclContext } from "./JavaParser";
import { InterfaceMethodOrFieldDeclContext } from "./JavaParser";
import { InterfaceMethodOrFieldRestContext } from "./JavaParser";
import { MethodDeclaratorRestContext } from "./JavaParser";
import { InterfaceMethodDeclaratorRestContext } from "./JavaParser";
import { InterfaceGenericMethodDeclContext } from "./JavaParser";
import { ConstructorDeclaratorRestContext } from "./JavaParser";
import { ConstantDeclaratorContext } from "./JavaParser";
import { VariableDeclaratorsContext } from "./JavaParser";
import { VariableDeclaratorContext } from "./JavaParser";
import { ConstantDeclaratorsRestContext } from "./JavaParser";
import { ConstantDeclaratorRestContext } from "./JavaParser";
import { VariableDeclaratorIdContext } from "./JavaParser";
import { VariableInitializerContext } from "./JavaParser";
import { ArrayInitializerContext } from "./JavaParser";
import { ModifierContext } from "./JavaParser";
import { PackageOrTypeNameContext } from "./JavaParser";
import { EnumConstantNameContext } from "./JavaParser";
import { TypeNameContext } from "./JavaParser";
import { TypeContext } from "./JavaParser";
import { ClassOrInterfaceTypeContext } from "./JavaParser";
import { PrimitiveTypeContext } from "./JavaParser";
import { VariableModifierContext } from "./JavaParser";
import { TypeArgumentsContext } from "./JavaParser";
import { TypeArgumentContext } from "./JavaParser";
import { QualifiedNameListContext } from "./JavaParser";
import { FormalParametersContext } from "./JavaParser";
import { FormalParameterDeclsContext } from "./JavaParser";
import { FormalParameterDeclsRestContext } from "./JavaParser";
import { MethodBodyContext } from "./JavaParser";
import { ConstructorBodyContext } from "./JavaParser";
import { QualifiedNameContext } from "./JavaParser";
import { LiteralContext } from "./JavaParser";
import { AnnotationsContext } from "./JavaParser";
import { AnnotationContext } from "./JavaParser";
import { AnnotationNameContext } from "./JavaParser";
import { ElementValuePairsContext } from "./JavaParser";
import { ElementValuePairContext } from "./JavaParser";
import { ElementValueContext } from "./JavaParser";
import { ElementValueArrayInitializerContext } from "./JavaParser";
import { AnnotationTypeDeclarationContext } from "./JavaParser";
import { AnnotationTypeBodyContext } from "./JavaParser";
import { AnnotationTypeElementDeclarationContext } from "./JavaParser";
import { AnnotationTypeElementRestContext } from "./JavaParser";
import { AnnotationMethodOrConstantRestContext } from "./JavaParser";
import { AnnotationMethodRestContext } from "./JavaParser";
import { AnnotationConstantRestContext } from "./JavaParser";
import { DefaultValueContext } from "./JavaParser";
import { BlockContext } from "./JavaParser";
import { BlockStatementContext } from "./JavaParser";
import { LocalVariableDeclarationStatementContext } from "./JavaParser";
import { LocalVariableDeclarationContext } from "./JavaParser";
import { VariableModifiersContext } from "./JavaParser";
import { StatementContext } from "./JavaParser";
import { CatchesContext } from "./JavaParser";
import { CatchClauseContext } from "./JavaParser";
import { CatchTypeContext } from "./JavaParser";
import { FinallyBlockContext } from "./JavaParser";
import { ResourceSpecificationContext } from "./JavaParser";
import { ResourcesContext } from "./JavaParser";
import { ResourceContext } from "./JavaParser";
import { FormalParameterContext } from "./JavaParser";
import { SwitchBlockStatementGroupsContext } from "./JavaParser";
import { SwitchBlockStatementGroupContext } from "./JavaParser";
import { SwitchLabelContext } from "./JavaParser";
import { ForControlContext } from "./JavaParser";
import { ForInitContext } from "./JavaParser";
import { EnhancedForControlContext } from "./JavaParser";
import { ForUpdateContext } from "./JavaParser";
import { ParExpressionContext } from "./JavaParser";
import { ExpressionListContext } from "./JavaParser";
import { StatementExpressionContext } from "./JavaParser";
import { ConstantExpressionContext } from "./JavaParser";
import { ExpressionContext } from "./JavaParser";
import { AssignmentOperatorContext } from "./JavaParser";
import { ConditionalExpressionContext } from "./JavaParser";
import { ConditionalOrExpressionContext } from "./JavaParser";
import { ConditionalAndExpressionContext } from "./JavaParser";
import { InclusiveOrExpressionContext } from "./JavaParser";
import { ExclusiveOrExpressionContext } from "./JavaParser";
import { AndExpressionContext } from "./JavaParser";
import { EqualityExpressionContext } from "./JavaParser";
import { InstanceOfExpressionContext } from "./JavaParser";
import { RelationalExpressionContext } from "./JavaParser";
import { RelationalOpContext } from "./JavaParser";
import { ShiftExpressionContext } from "./JavaParser";
import { ShiftOpContext } from "./JavaParser";
import { AdditiveExpressionContext } from "./JavaParser";
import { MultiplicativeExpressionContext } from "./JavaParser";
import { UnaryExpressionContext } from "./JavaParser";
import { UnaryExpressionNotPlusMinusContext } from "./JavaParser";
import { CastExpressionContext } from "./JavaParser";
import { PrimaryContext } from "./JavaParser";
import { IdentifierSuffixContext } from "./JavaParser";
import { CreatorContext } from "./JavaParser";
import { CreatedNameContext } from "./JavaParser";
import { InnerCreatorContext } from "./JavaParser";
import { ArrayCreatorRestContext } from "./JavaParser";
import { ClassCreatorRestContext } from "./JavaParser";
import { ExplicitGenericInvocationContext } from "./JavaParser";
import { NonWildcardTypeArgumentsContext } from "./JavaParser";
import { TypeArgumentsOrDiamondContext } from "./JavaParser";
import { NonWildcardTypeArgumentsOrDiamondContext } from "./JavaParser";
import { SelectorContext } from "./JavaParser";
import { SuperSuffixContext } from "./JavaParser";
import { ExplicitGenericInvocationSuffixContext } from "./JavaParser";
import { ArgumentsContext } from "./JavaParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `JavaParser`.
 */
export interface JavaListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by `JavaParser.compilationUnit`.
     * @param ctx the parse tree
     */
    enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.compilationUnit`.
     * @param ctx the parse tree
     */
    exitCompilationUnit?: (ctx: CompilationUnitContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.packageDeclaration`.
     * @param ctx the parse tree
     */
    enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.packageDeclaration`.
     * @param ctx the parse tree
     */
    exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.importDeclaration`.
     * @param ctx the parse tree
     */
    enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.importDeclaration`.
     * @param ctx the parse tree
     */
    exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeDeclaration`.
     * @param ctx the parse tree
     */
    enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeDeclaration`.
     * @param ctx the parse tree
     */
    exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.classOrInterfaceDeclaration`.
     * @param ctx the parse tree
     */
    enterClassOrInterfaceDeclaration?: (ctx: ClassOrInterfaceDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.classOrInterfaceDeclaration`.
     * @param ctx the parse tree
     */
    exitClassOrInterfaceDeclaration?: (ctx: ClassOrInterfaceDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.classOrInterfaceModifiers`.
     * @param ctx the parse tree
     */
    enterClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.classOrInterfaceModifiers`.
     * @param ctx the parse tree
     */
    exitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.classOrInterfaceModifier`.
     * @param ctx the parse tree
     */
    enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.classOrInterfaceModifier`.
     * @param ctx the parse tree
     */
    exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.modifiers`.
     * @param ctx the parse tree
     */
    enterModifiers?: (ctx: ModifiersContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.modifiers`.
     * @param ctx the parse tree
     */
    exitModifiers?: (ctx: ModifiersContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.classDeclaration`.
     * @param ctx the parse tree
     */
    enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.classDeclaration`.
     * @param ctx the parse tree
     */
    exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.normalClassDeclaration`.
     * @param ctx the parse tree
     */
    enterNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.normalClassDeclaration`.
     * @param ctx the parse tree
     */
    exitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeParameters`.
     * @param ctx the parse tree
     */
    enterTypeParameters?: (ctx: TypeParametersContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeParameters`.
     * @param ctx the parse tree
     */
    exitTypeParameters?: (ctx: TypeParametersContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeParameter`.
     * @param ctx the parse tree
     */
    enterTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeParameter`.
     * @param ctx the parse tree
     */
    exitTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeBound`.
     * @param ctx the parse tree
     */
    enterTypeBound?: (ctx: TypeBoundContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeBound`.
     * @param ctx the parse tree
     */
    exitTypeBound?: (ctx: TypeBoundContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.enumDeclaration`.
     * @param ctx the parse tree
     */
    enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.enumDeclaration`.
     * @param ctx the parse tree
     */
    exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.enumBody`.
     * @param ctx the parse tree
     */
    enterEnumBody?: (ctx: EnumBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.enumBody`.
     * @param ctx the parse tree
     */
    exitEnumBody?: (ctx: EnumBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.enumConstants`.
     * @param ctx the parse tree
     */
    enterEnumConstants?: (ctx: EnumConstantsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.enumConstants`.
     * @param ctx the parse tree
     */
    exitEnumConstants?: (ctx: EnumConstantsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.enumConstant`.
     * @param ctx the parse tree
     */
    enterEnumConstant?: (ctx: EnumConstantContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.enumConstant`.
     * @param ctx the parse tree
     */
    exitEnumConstant?: (ctx: EnumConstantContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.enumBodyDeclarations`.
     * @param ctx the parse tree
     */
    enterEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.enumBodyDeclarations`.
     * @param ctx the parse tree
     */
    exitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.interfaceDeclaration`.
     * @param ctx the parse tree
     */
    enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.interfaceDeclaration`.
     * @param ctx the parse tree
     */
    exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.normalInterfaceDeclaration`.
     * @param ctx the parse tree
     */
    enterNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.normalInterfaceDeclaration`.
     * @param ctx the parse tree
     */
    exitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeList`.
     * @param ctx the parse tree
     */
    enterTypeList?: (ctx: TypeListContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeList`.
     * @param ctx the parse tree
     */
    exitTypeList?: (ctx: TypeListContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.classBody`.
     * @param ctx the parse tree
     */
    enterClassBody?: (ctx: ClassBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.classBody`.
     * @param ctx the parse tree
     */
    exitClassBody?: (ctx: ClassBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.interfaceBody`.
     * @param ctx the parse tree
     */
    enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.interfaceBody`.
     * @param ctx the parse tree
     */
    exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.classBodyDeclaration`.
     * @param ctx the parse tree
     */
    enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.classBodyDeclaration`.
     * @param ctx the parse tree
     */
    exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.memberDecl`.
     * @param ctx the parse tree
     */
    enterMemberDecl?: (ctx: MemberDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.memberDecl`.
     * @param ctx the parse tree
     */
    exitMemberDecl?: (ctx: MemberDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.memberDeclaration`.
     * @param ctx the parse tree
     */
    enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.memberDeclaration`.
     * @param ctx the parse tree
     */
    exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.genericMethodOrConstructorDecl`.
     * @param ctx the parse tree
     */
    enterGenericMethodOrConstructorDecl?: (ctx: GenericMethodOrConstructorDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.genericMethodOrConstructorDecl`.
     * @param ctx the parse tree
     */
    exitGenericMethodOrConstructorDecl?: (ctx: GenericMethodOrConstructorDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.genericMethodOrConstructorRest`.
     * @param ctx the parse tree
     */
    enterGenericMethodOrConstructorRest?: (ctx: GenericMethodOrConstructorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.genericMethodOrConstructorRest`.
     * @param ctx the parse tree
     */
    exitGenericMethodOrConstructorRest?: (ctx: GenericMethodOrConstructorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.methodDeclaration`.
     * @param ctx the parse tree
     */
    enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.methodDeclaration`.
     * @param ctx the parse tree
     */
    exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.fieldDeclaration`.
     * @param ctx the parse tree
     */
    enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.fieldDeclaration`.
     * @param ctx the parse tree
     */
    exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.interfaceBodyDeclaration`.
     * @param ctx the parse tree
     */
    enterInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.interfaceBodyDeclaration`.
     * @param ctx the parse tree
     */
    exitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.interfaceMemberDecl`.
     * @param ctx the parse tree
     */
    enterInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.interfaceMemberDecl`.
     * @param ctx the parse tree
     */
    exitInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.interfaceMethodOrFieldDecl`.
     * @param ctx the parse tree
     */
    enterInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.interfaceMethodOrFieldDecl`.
     * @param ctx the parse tree
     */
    exitInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.interfaceMethodOrFieldRest`.
     * @param ctx the parse tree
     */
    enterInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.interfaceMethodOrFieldRest`.
     * @param ctx the parse tree
     */
    exitInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.methodDeclaratorRest`.
     * @param ctx the parse tree
     */
    enterMethodDeclaratorRest?: (ctx: MethodDeclaratorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.methodDeclaratorRest`.
     * @param ctx the parse tree
     */
    exitMethodDeclaratorRest?: (ctx: MethodDeclaratorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.interfaceMethodDeclaratorRest`.
     * @param ctx the parse tree
     */
    enterInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.interfaceMethodDeclaratorRest`.
     * @param ctx the parse tree
     */
    exitInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.interfaceGenericMethodDecl`.
     * @param ctx the parse tree
     */
    enterInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.interfaceGenericMethodDecl`.
     * @param ctx the parse tree
     */
    exitInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.constructorDeclaratorRest`.
     * @param ctx the parse tree
     */
    enterConstructorDeclaratorRest?: (ctx: ConstructorDeclaratorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.constructorDeclaratorRest`.
     * @param ctx the parse tree
     */
    exitConstructorDeclaratorRest?: (ctx: ConstructorDeclaratorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.constantDeclarator`.
     * @param ctx the parse tree
     */
    enterConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.constantDeclarator`.
     * @param ctx the parse tree
     */
    exitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.variableDeclarators`.
     * @param ctx the parse tree
     */
    enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.variableDeclarators`.
     * @param ctx the parse tree
     */
    exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.variableDeclarator`.
     * @param ctx the parse tree
     */
    enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.variableDeclarator`.
     * @param ctx the parse tree
     */
    exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.constantDeclaratorsRest`.
     * @param ctx the parse tree
     */
    enterConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.constantDeclaratorsRest`.
     * @param ctx the parse tree
     */
    exitConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.constantDeclaratorRest`.
     * @param ctx the parse tree
     */
    enterConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.constantDeclaratorRest`.
     * @param ctx the parse tree
     */
    exitConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.variableDeclaratorId`.
     * @param ctx the parse tree
     */
    enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.variableDeclaratorId`.
     * @param ctx the parse tree
     */
    exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.variableInitializer`.
     * @param ctx the parse tree
     */
    enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.variableInitializer`.
     * @param ctx the parse tree
     */
    exitVariableInitializer?: (ctx: VariableInitializerContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.arrayInitializer`.
     * @param ctx the parse tree
     */
    enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.arrayInitializer`.
     * @param ctx the parse tree
     */
    exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.modifier`.
     * @param ctx the parse tree
     */
    enterModifier?: (ctx: ModifierContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.modifier`.
     * @param ctx the parse tree
     */
    exitModifier?: (ctx: ModifierContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.packageOrTypeName`.
     * @param ctx the parse tree
     */
    enterPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.packageOrTypeName`.
     * @param ctx the parse tree
     */
    exitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.enumConstantName`.
     * @param ctx the parse tree
     */
    enterEnumConstantName?: (ctx: EnumConstantNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.enumConstantName`.
     * @param ctx the parse tree
     */
    exitEnumConstantName?: (ctx: EnumConstantNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeName`.
     * @param ctx the parse tree
     */
    enterTypeName?: (ctx: TypeNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeName`.
     * @param ctx the parse tree
     */
    exitTypeName?: (ctx: TypeNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.classOrInterfaceType`.
     * @param ctx the parse tree
     */
    enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.classOrInterfaceType`.
     * @param ctx the parse tree
     */
    exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.primitiveType`.
     * @param ctx the parse tree
     */
    enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.primitiveType`.
     * @param ctx the parse tree
     */
    exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.variableModifier`.
     * @param ctx the parse tree
     */
    enterVariableModifier?: (ctx: VariableModifierContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.variableModifier`.
     * @param ctx the parse tree
     */
    exitVariableModifier?: (ctx: VariableModifierContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeArguments`.
     * @param ctx the parse tree
     */
    enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeArguments`.
     * @param ctx the parse tree
     */
    exitTypeArguments?: (ctx: TypeArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeArgument`.
     * @param ctx the parse tree
     */
    enterTypeArgument?: (ctx: TypeArgumentContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeArgument`.
     * @param ctx the parse tree
     */
    exitTypeArgument?: (ctx: TypeArgumentContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.formalParameters`.
     * @param ctx the parse tree
     */
    enterFormalParameters?: (ctx: FormalParametersContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.formalParameters`.
     * @param ctx the parse tree
     */
    exitFormalParameters?: (ctx: FormalParametersContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.formalParameterDecls`.
     * @param ctx the parse tree
     */
    enterFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.formalParameterDecls`.
     * @param ctx the parse tree
     */
    exitFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.formalParameterDeclsRest`.
     * @param ctx the parse tree
     */
    enterFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.formalParameterDeclsRest`.
     * @param ctx the parse tree
     */
    exitFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.methodBody`.
     * @param ctx the parse tree
     */
    enterMethodBody?: (ctx: MethodBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.methodBody`.
     * @param ctx the parse tree
     */
    exitMethodBody?: (ctx: MethodBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.constructorBody`.
     * @param ctx the parse tree
     */
    enterConstructorBody?: (ctx: ConstructorBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.constructorBody`.
     * @param ctx the parse tree
     */
    exitConstructorBody?: (ctx: ConstructorBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotations`.
     * @param ctx the parse tree
     */
    enterAnnotations?: (ctx: AnnotationsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotations`.
     * @param ctx the parse tree
     */
    exitAnnotations?: (ctx: AnnotationsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotation`.
     * @param ctx the parse tree
     */
    enterAnnotation?: (ctx: AnnotationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotation`.
     * @param ctx the parse tree
     */
    exitAnnotation?: (ctx: AnnotationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotationName`.
     * @param ctx the parse tree
     */
    enterAnnotationName?: (ctx: AnnotationNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotationName`.
     * @param ctx the parse tree
     */
    exitAnnotationName?: (ctx: AnnotationNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.elementValuePairs`.
     * @param ctx the parse tree
     */
    enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.elementValuePairs`.
     * @param ctx the parse tree
     */
    exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.elementValuePair`.
     * @param ctx the parse tree
     */
    enterElementValuePair?: (ctx: ElementValuePairContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.elementValuePair`.
     * @param ctx the parse tree
     */
    exitElementValuePair?: (ctx: ElementValuePairContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.elementValue`.
     * @param ctx the parse tree
     */
    enterElementValue?: (ctx: ElementValueContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.elementValue`.
     * @param ctx the parse tree
     */
    exitElementValue?: (ctx: ElementValueContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.elementValueArrayInitializer`.
     * @param ctx the parse tree
     */
    enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.elementValueArrayInitializer`.
     * @param ctx the parse tree
     */
    exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotationTypeDeclaration`.
     * @param ctx the parse tree
     */
    enterAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotationTypeDeclaration`.
     * @param ctx the parse tree
     */
    exitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotationTypeBody`.
     * @param ctx the parse tree
     */
    enterAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotationTypeBody`.
     * @param ctx the parse tree
     */
    exitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotationTypeElementDeclaration`.
     * @param ctx the parse tree
     */
    enterAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotationTypeElementDeclaration`.
     * @param ctx the parse tree
     */
    exitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotationTypeElementRest`.
     * @param ctx the parse tree
     */
    enterAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotationTypeElementRest`.
     * @param ctx the parse tree
     */
    exitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotationMethodOrConstantRest`.
     * @param ctx the parse tree
     */
    enterAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotationMethodOrConstantRest`.
     * @param ctx the parse tree
     */
    exitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotationMethodRest`.
     * @param ctx the parse tree
     */
    enterAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotationMethodRest`.
     * @param ctx the parse tree
     */
    exitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.annotationConstantRest`.
     * @param ctx the parse tree
     */
    enterAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.annotationConstantRest`.
     * @param ctx the parse tree
     */
    exitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.defaultValue`.
     * @param ctx the parse tree
     */
    enterDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.defaultValue`.
     * @param ctx the parse tree
     */
    exitDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.blockStatement`.
     * @param ctx the parse tree
     */
    enterBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.blockStatement`.
     * @param ctx the parse tree
     */
    exitBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.localVariableDeclarationStatement`.
     * @param ctx the parse tree
     */
    enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.localVariableDeclarationStatement`.
     * @param ctx the parse tree
     */
    exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.localVariableDeclaration`.
     * @param ctx the parse tree
     */
    enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.localVariableDeclaration`.
     * @param ctx the parse tree
     */
    exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.variableModifiers`.
     * @param ctx the parse tree
     */
    enterVariableModifiers?: (ctx: VariableModifiersContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.variableModifiers`.
     * @param ctx the parse tree
     */
    exitVariableModifiers?: (ctx: VariableModifiersContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.catches`.
     * @param ctx the parse tree
     */
    enterCatches?: (ctx: CatchesContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.catches`.
     * @param ctx the parse tree
     */
    exitCatches?: (ctx: CatchesContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.catchClause`.
     * @param ctx the parse tree
     */
    enterCatchClause?: (ctx: CatchClauseContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.catchClause`.
     * @param ctx the parse tree
     */
    exitCatchClause?: (ctx: CatchClauseContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.catchType`.
     * @param ctx the parse tree
     */
    enterCatchType?: (ctx: CatchTypeContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.catchType`.
     * @param ctx the parse tree
     */
    exitCatchType?: (ctx: CatchTypeContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.finallyBlock`.
     * @param ctx the parse tree
     */
    enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.finallyBlock`.
     * @param ctx the parse tree
     */
    exitFinallyBlock?: (ctx: FinallyBlockContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.resourceSpecification`.
     * @param ctx the parse tree
     */
    enterResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.resourceSpecification`.
     * @param ctx the parse tree
     */
    exitResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.resources`.
     * @param ctx the parse tree
     */
    enterResources?: (ctx: ResourcesContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.resources`.
     * @param ctx the parse tree
     */
    exitResources?: (ctx: ResourcesContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.resource`.
     * @param ctx the parse tree
     */
    enterResource?: (ctx: ResourceContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.resource`.
     * @param ctx the parse tree
     */
    exitResource?: (ctx: ResourceContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.formalParameter`.
     * @param ctx the parse tree
     */
    enterFormalParameter?: (ctx: FormalParameterContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.formalParameter`.
     * @param ctx the parse tree
     */
    exitFormalParameter?: (ctx: FormalParameterContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.switchBlockStatementGroups`.
     * @param ctx the parse tree
     */
    enterSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.switchBlockStatementGroups`.
     * @param ctx the parse tree
     */
    exitSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.switchBlockStatementGroup`.
     * @param ctx the parse tree
     */
    enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.switchBlockStatementGroup`.
     * @param ctx the parse tree
     */
    exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.switchLabel`.
     * @param ctx the parse tree
     */
    enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.switchLabel`.
     * @param ctx the parse tree
     */
    exitSwitchLabel?: (ctx: SwitchLabelContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.forControl`.
     * @param ctx the parse tree
     */
    enterForControl?: (ctx: ForControlContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.forControl`.
     * @param ctx the parse tree
     */
    exitForControl?: (ctx: ForControlContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.forInit`.
     * @param ctx the parse tree
     */
    enterForInit?: (ctx: ForInitContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.forInit`.
     * @param ctx the parse tree
     */
    exitForInit?: (ctx: ForInitContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.enhancedForControl`.
     * @param ctx the parse tree
     */
    enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.enhancedForControl`.
     * @param ctx the parse tree
     */
    exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.forUpdate`.
     * @param ctx the parse tree
     */
    enterForUpdate?: (ctx: ForUpdateContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.forUpdate`.
     * @param ctx the parse tree
     */
    exitForUpdate?: (ctx: ForUpdateContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.parExpression`.
     * @param ctx the parse tree
     */
    enterParExpression?: (ctx: ParExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.parExpression`.
     * @param ctx the parse tree
     */
    exitParExpression?: (ctx: ParExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.expressionList`.
     * @param ctx the parse tree
     */
    enterExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.expressionList`.
     * @param ctx the parse tree
     */
    exitExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.statementExpression`.
     * @param ctx the parse tree
     */
    enterStatementExpression?: (ctx: StatementExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.statementExpression`.
     * @param ctx the parse tree
     */
    exitStatementExpression?: (ctx: StatementExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.constantExpression`.
     * @param ctx the parse tree
     */
    enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.constantExpression`.
     * @param ctx the parse tree
     */
    exitConstantExpression?: (ctx: ConstantExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.assignmentOperator`.
     * @param ctx the parse tree
     */
    enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.assignmentOperator`.
     * @param ctx the parse tree
     */
    exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.conditionalExpression`.
     * @param ctx the parse tree
     */
    enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.conditionalExpression`.
     * @param ctx the parse tree
     */
    exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.conditionalOrExpression`.
     * @param ctx the parse tree
     */
    enterConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.conditionalOrExpression`.
     * @param ctx the parse tree
     */
    exitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.conditionalAndExpression`.
     * @param ctx the parse tree
     */
    enterConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.conditionalAndExpression`.
     * @param ctx the parse tree
     */
    exitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.inclusiveOrExpression`.
     * @param ctx the parse tree
     */
    enterInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.inclusiveOrExpression`.
     * @param ctx the parse tree
     */
    exitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.exclusiveOrExpression`.
     * @param ctx the parse tree
     */
    enterExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.exclusiveOrExpression`.
     * @param ctx the parse tree
     */
    exitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.andExpression`.
     * @param ctx the parse tree
     */
    enterAndExpression?: (ctx: AndExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.andExpression`.
     * @param ctx the parse tree
     */
    exitAndExpression?: (ctx: AndExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.equalityExpression`.
     * @param ctx the parse tree
     */
    enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.equalityExpression`.
     * @param ctx the parse tree
     */
    exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.instanceOfExpression`.
     * @param ctx the parse tree
     */
    enterInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.instanceOfExpression`.
     * @param ctx the parse tree
     */
    exitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.relationalExpression`.
     * @param ctx the parse tree
     */
    enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.relationalExpression`.
     * @param ctx the parse tree
     */
    exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.relationalOp`.
     * @param ctx the parse tree
     */
    enterRelationalOp?: (ctx: RelationalOpContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.relationalOp`.
     * @param ctx the parse tree
     */
    exitRelationalOp?: (ctx: RelationalOpContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.shiftExpression`.
     * @param ctx the parse tree
     */
    enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.shiftExpression`.
     * @param ctx the parse tree
     */
    exitShiftExpression?: (ctx: ShiftExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.shiftOp`.
     * @param ctx the parse tree
     */
    enterShiftOp?: (ctx: ShiftOpContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.shiftOp`.
     * @param ctx the parse tree
     */
    exitShiftOp?: (ctx: ShiftOpContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.additiveExpression`.
     * @param ctx the parse tree
     */
    enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.additiveExpression`.
     * @param ctx the parse tree
     */
    exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.multiplicativeExpression`.
     * @param ctx the parse tree
     */
    enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.multiplicativeExpression`.
     * @param ctx the parse tree
     */
    exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.unaryExpression`.
     * @param ctx the parse tree
     */
    enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.unaryExpression`.
     * @param ctx the parse tree
     */
    exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.unaryExpressionNotPlusMinus`.
     * @param ctx the parse tree
     */
    enterUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.unaryExpressionNotPlusMinus`.
     * @param ctx the parse tree
     */
    exitUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.castExpression`.
     * @param ctx the parse tree
     */
    enterCastExpression?: (ctx: CastExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.castExpression`.
     * @param ctx the parse tree
     */
    exitCastExpression?: (ctx: CastExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.primary`.
     * @param ctx the parse tree
     */
    enterPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.primary`.
     * @param ctx the parse tree
     */
    exitPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.identifierSuffix`.
     * @param ctx the parse tree
     */
    enterIdentifierSuffix?: (ctx: IdentifierSuffixContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.identifierSuffix`.
     * @param ctx the parse tree
     */
    exitIdentifierSuffix?: (ctx: IdentifierSuffixContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.creator`.
     * @param ctx the parse tree
     */
    enterCreator?: (ctx: CreatorContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.creator`.
     * @param ctx the parse tree
     */
    exitCreator?: (ctx: CreatorContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.createdName`.
     * @param ctx the parse tree
     */
    enterCreatedName?: (ctx: CreatedNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.createdName`.
     * @param ctx the parse tree
     */
    exitCreatedName?: (ctx: CreatedNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.innerCreator`.
     * @param ctx the parse tree
     */
    enterInnerCreator?: (ctx: InnerCreatorContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.innerCreator`.
     * @param ctx the parse tree
     */
    exitInnerCreator?: (ctx: InnerCreatorContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.arrayCreatorRest`.
     * @param ctx the parse tree
     */
    enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.arrayCreatorRest`.
     * @param ctx the parse tree
     */
    exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.classCreatorRest`.
     * @param ctx the parse tree
     */
    enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.classCreatorRest`.
     * @param ctx the parse tree
     */
    exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.explicitGenericInvocation`.
     * @param ctx the parse tree
     */
    enterExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.explicitGenericInvocation`.
     * @param ctx the parse tree
     */
    exitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.nonWildcardTypeArguments`.
     * @param ctx the parse tree
     */
    enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.nonWildcardTypeArguments`.
     * @param ctx the parse tree
     */
    exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.typeArgumentsOrDiamond`.
     * @param ctx the parse tree
     */
    enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.typeArgumentsOrDiamond`.
     * @param ctx the parse tree
     */
    exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.nonWildcardTypeArgumentsOrDiamond`.
     * @param ctx the parse tree
     */
    enterNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.nonWildcardTypeArgumentsOrDiamond`.
     * @param ctx the parse tree
     */
    exitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.selector`.
     * @param ctx the parse tree
     */
    enterSelector?: (ctx: SelectorContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.selector`.
     * @param ctx the parse tree
     */
    exitSelector?: (ctx: SelectorContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.superSuffix`.
     * @param ctx the parse tree
     */
    enterSuperSuffix?: (ctx: SuperSuffixContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.superSuffix`.
     * @param ctx the parse tree
     */
    exitSuperSuffix?: (ctx: SuperSuffixContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.explicitGenericInvocationSuffix`.
     * @param ctx the parse tree
     */
    enterExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.explicitGenericInvocationSuffix`.
     * @param ctx the parse tree
     */
    exitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;
    /**
     * Enter a parse tree produced by `JavaParser.arguments`.
     * @param ctx the parse tree
     */
    enterArguments?: (ctx: ArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `JavaParser.arguments`.
     * @param ctx the parse tree
     */
    exitArguments?: (ctx: ArgumentsContext) => void;
}
