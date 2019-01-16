import { ParseTreeListener } from "../../../src/tree/ParseTreeListener";
import { CompilationUnitContext } from "./JavaLRParser";
import { PackageDeclarationContext } from "./JavaLRParser";
import { ImportDeclarationContext } from "./JavaLRParser";
import { TypeDeclarationContext } from "./JavaLRParser";
import { ClassOrInterfaceDeclarationContext } from "./JavaLRParser";
import { ClassOrInterfaceModifiersContext } from "./JavaLRParser";
import { ClassOrInterfaceModifierContext } from "./JavaLRParser";
import { ModifiersContext } from "./JavaLRParser";
import { ClassDeclarationContext } from "./JavaLRParser";
import { NormalClassDeclarationContext } from "./JavaLRParser";
import { TypeParametersContext } from "./JavaLRParser";
import { TypeParameterContext } from "./JavaLRParser";
import { TypeBoundContext } from "./JavaLRParser";
import { EnumDeclarationContext } from "./JavaLRParser";
import { EnumBodyContext } from "./JavaLRParser";
import { EnumConstantsContext } from "./JavaLRParser";
import { EnumConstantContext } from "./JavaLRParser";
import { EnumBodyDeclarationsContext } from "./JavaLRParser";
import { InterfaceDeclarationContext } from "./JavaLRParser";
import { NormalInterfaceDeclarationContext } from "./JavaLRParser";
import { TypeListContext } from "./JavaLRParser";
import { ClassBodyContext } from "./JavaLRParser";
import { InterfaceBodyContext } from "./JavaLRParser";
import { ClassBodyDeclarationContext } from "./JavaLRParser";
import { MemberDeclContext } from "./JavaLRParser";
import { MemberDeclarationContext } from "./JavaLRParser";
import { GenericMethodOrConstructorDeclContext } from "./JavaLRParser";
import { GenericMethodOrConstructorRestContext } from "./JavaLRParser";
import { MethodDeclarationContext } from "./JavaLRParser";
import { FieldDeclarationContext } from "./JavaLRParser";
import { InterfaceBodyDeclarationContext } from "./JavaLRParser";
import { InterfaceMemberDeclContext } from "./JavaLRParser";
import { InterfaceMethodOrFieldDeclContext } from "./JavaLRParser";
import { InterfaceMethodOrFieldRestContext } from "./JavaLRParser";
import { MethodDeclaratorRestContext } from "./JavaLRParser";
import { InterfaceMethodDeclaratorRestContext } from "./JavaLRParser";
import { InterfaceGenericMethodDeclContext } from "./JavaLRParser";
import { ConstructorDeclaratorRestContext } from "./JavaLRParser";
import { ConstantDeclaratorContext } from "./JavaLRParser";
import { VariableDeclaratorsContext } from "./JavaLRParser";
import { VariableDeclaratorContext } from "./JavaLRParser";
import { ConstantDeclaratorsRestContext } from "./JavaLRParser";
import { ConstantDeclaratorRestContext } from "./JavaLRParser";
import { VariableDeclaratorIdContext } from "./JavaLRParser";
import { VariableInitializerContext } from "./JavaLRParser";
import { ArrayInitializerContext } from "./JavaLRParser";
import { ModifierContext } from "./JavaLRParser";
import { PackageOrTypeNameContext } from "./JavaLRParser";
import { EnumConstantNameContext } from "./JavaLRParser";
import { TypeNameContext } from "./JavaLRParser";
import { TypeContext } from "./JavaLRParser";
import { ClassOrInterfaceTypeContext } from "./JavaLRParser";
import { PrimitiveTypeContext } from "./JavaLRParser";
import { VariableModifierContext } from "./JavaLRParser";
import { TypeArgumentsContext } from "./JavaLRParser";
import { TypeArgumentContext } from "./JavaLRParser";
import { QualifiedNameListContext } from "./JavaLRParser";
import { FormalParametersContext } from "./JavaLRParser";
import { FormalParameterDeclsContext } from "./JavaLRParser";
import { FormalParameterDeclsRestContext } from "./JavaLRParser";
import { MethodBodyContext } from "./JavaLRParser";
import { ConstructorBodyContext } from "./JavaLRParser";
import { QualifiedNameContext } from "./JavaLRParser";
import { LiteralContext } from "./JavaLRParser";
import { AnnotationsContext } from "./JavaLRParser";
import { AnnotationContext } from "./JavaLRParser";
import { AnnotationNameContext } from "./JavaLRParser";
import { ElementValuePairsContext } from "./JavaLRParser";
import { ElementValuePairContext } from "./JavaLRParser";
import { ElementValueContext } from "./JavaLRParser";
import { ElementValueArrayInitializerContext } from "./JavaLRParser";
import { AnnotationTypeDeclarationContext } from "./JavaLRParser";
import { AnnotationTypeBodyContext } from "./JavaLRParser";
import { AnnotationTypeElementDeclarationContext } from "./JavaLRParser";
import { AnnotationTypeElementRestContext } from "./JavaLRParser";
import { AnnotationMethodOrConstantRestContext } from "./JavaLRParser";
import { AnnotationMethodRestContext } from "./JavaLRParser";
import { AnnotationConstantRestContext } from "./JavaLRParser";
import { DefaultValueContext } from "./JavaLRParser";
import { BlockContext } from "./JavaLRParser";
import { BlockStatementContext } from "./JavaLRParser";
import { LocalVariableDeclarationStatementContext } from "./JavaLRParser";
import { LocalVariableDeclarationContext } from "./JavaLRParser";
import { VariableModifiersContext } from "./JavaLRParser";
import { StatementContext } from "./JavaLRParser";
import { CatchesContext } from "./JavaLRParser";
import { CatchClauseContext } from "./JavaLRParser";
import { CatchTypeContext } from "./JavaLRParser";
import { FinallyBlockContext } from "./JavaLRParser";
import { ResourceSpecificationContext } from "./JavaLRParser";
import { ResourcesContext } from "./JavaLRParser";
import { ResourceContext } from "./JavaLRParser";
import { FormalParameterContext } from "./JavaLRParser";
import { SwitchBlockStatementGroupsContext } from "./JavaLRParser";
import { SwitchBlockStatementGroupContext } from "./JavaLRParser";
import { SwitchLabelContext } from "./JavaLRParser";
import { ForControlContext } from "./JavaLRParser";
import { ForInitContext } from "./JavaLRParser";
import { EnhancedForControlContext } from "./JavaLRParser";
import { ForUpdateContext } from "./JavaLRParser";
import { ParExpressionContext } from "./JavaLRParser";
import { ExpressionListContext } from "./JavaLRParser";
import { StatementExpressionContext } from "./JavaLRParser";
import { ConstantExpressionContext } from "./JavaLRParser";
import { ExpressionContext } from "./JavaLRParser";
import { PrimaryContext } from "./JavaLRParser";
import { CreatorContext } from "./JavaLRParser";
import { CreatedNameContext } from "./JavaLRParser";
import { InnerCreatorContext } from "./JavaLRParser";
import { ArrayCreatorRestContext } from "./JavaLRParser";
import { ClassCreatorRestContext } from "./JavaLRParser";
import { ExplicitGenericInvocationContext } from "./JavaLRParser";
import { NonWildcardTypeArgumentsContext } from "./JavaLRParser";
import { TypeArgumentsOrDiamondContext } from "./JavaLRParser";
import { NonWildcardTypeArgumentsOrDiamondContext } from "./JavaLRParser";
import { SuperSuffixContext } from "./JavaLRParser";
import { ExplicitGenericInvocationSuffixContext } from "./JavaLRParser";
import { ArgumentsContext } from "./JavaLRParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `JavaLRParser`.
 */
export interface JavaLRListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by `JavaLRParser.compilationUnit`.
     * @param ctx the parse tree
     */
    enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.compilationUnit`.
     * @param ctx the parse tree
     */
    exitCompilationUnit?: (ctx: CompilationUnitContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.packageDeclaration`.
     * @param ctx the parse tree
     */
    enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.packageDeclaration`.
     * @param ctx the parse tree
     */
    exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.importDeclaration`.
     * @param ctx the parse tree
     */
    enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.importDeclaration`.
     * @param ctx the parse tree
     */
    exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeDeclaration`.
     * @param ctx the parse tree
     */
    enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeDeclaration`.
     * @param ctx the parse tree
     */
    exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.classOrInterfaceDeclaration`.
     * @param ctx the parse tree
     */
    enterClassOrInterfaceDeclaration?: (ctx: ClassOrInterfaceDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.classOrInterfaceDeclaration`.
     * @param ctx the parse tree
     */
    exitClassOrInterfaceDeclaration?: (ctx: ClassOrInterfaceDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.classOrInterfaceModifiers`.
     * @param ctx the parse tree
     */
    enterClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.classOrInterfaceModifiers`.
     * @param ctx the parse tree
     */
    exitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.classOrInterfaceModifier`.
     * @param ctx the parse tree
     */
    enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.classOrInterfaceModifier`.
     * @param ctx the parse tree
     */
    exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.modifiers`.
     * @param ctx the parse tree
     */
    enterModifiers?: (ctx: ModifiersContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.modifiers`.
     * @param ctx the parse tree
     */
    exitModifiers?: (ctx: ModifiersContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.classDeclaration`.
     * @param ctx the parse tree
     */
    enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.classDeclaration`.
     * @param ctx the parse tree
     */
    exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.normalClassDeclaration`.
     * @param ctx the parse tree
     */
    enterNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.normalClassDeclaration`.
     * @param ctx the parse tree
     */
    exitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeParameters`.
     * @param ctx the parse tree
     */
    enterTypeParameters?: (ctx: TypeParametersContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeParameters`.
     * @param ctx the parse tree
     */
    exitTypeParameters?: (ctx: TypeParametersContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeParameter`.
     * @param ctx the parse tree
     */
    enterTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeParameter`.
     * @param ctx the parse tree
     */
    exitTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeBound`.
     * @param ctx the parse tree
     */
    enterTypeBound?: (ctx: TypeBoundContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeBound`.
     * @param ctx the parse tree
     */
    exitTypeBound?: (ctx: TypeBoundContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.enumDeclaration`.
     * @param ctx the parse tree
     */
    enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.enumDeclaration`.
     * @param ctx the parse tree
     */
    exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.enumBody`.
     * @param ctx the parse tree
     */
    enterEnumBody?: (ctx: EnumBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.enumBody`.
     * @param ctx the parse tree
     */
    exitEnumBody?: (ctx: EnumBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.enumConstants`.
     * @param ctx the parse tree
     */
    enterEnumConstants?: (ctx: EnumConstantsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.enumConstants`.
     * @param ctx the parse tree
     */
    exitEnumConstants?: (ctx: EnumConstantsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.enumConstant`.
     * @param ctx the parse tree
     */
    enterEnumConstant?: (ctx: EnumConstantContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.enumConstant`.
     * @param ctx the parse tree
     */
    exitEnumConstant?: (ctx: EnumConstantContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.enumBodyDeclarations`.
     * @param ctx the parse tree
     */
    enterEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.enumBodyDeclarations`.
     * @param ctx the parse tree
     */
    exitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.interfaceDeclaration`.
     * @param ctx the parse tree
     */
    enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.interfaceDeclaration`.
     * @param ctx the parse tree
     */
    exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.normalInterfaceDeclaration`.
     * @param ctx the parse tree
     */
    enterNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.normalInterfaceDeclaration`.
     * @param ctx the parse tree
     */
    exitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeList`.
     * @param ctx the parse tree
     */
    enterTypeList?: (ctx: TypeListContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeList`.
     * @param ctx the parse tree
     */
    exitTypeList?: (ctx: TypeListContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.classBody`.
     * @param ctx the parse tree
     */
    enterClassBody?: (ctx: ClassBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.classBody`.
     * @param ctx the parse tree
     */
    exitClassBody?: (ctx: ClassBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.interfaceBody`.
     * @param ctx the parse tree
     */
    enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.interfaceBody`.
     * @param ctx the parse tree
     */
    exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.classBodyDeclaration`.
     * @param ctx the parse tree
     */
    enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.classBodyDeclaration`.
     * @param ctx the parse tree
     */
    exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.memberDecl`.
     * @param ctx the parse tree
     */
    enterMemberDecl?: (ctx: MemberDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.memberDecl`.
     * @param ctx the parse tree
     */
    exitMemberDecl?: (ctx: MemberDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.memberDeclaration`.
     * @param ctx the parse tree
     */
    enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.memberDeclaration`.
     * @param ctx the parse tree
     */
    exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.genericMethodOrConstructorDecl`.
     * @param ctx the parse tree
     */
    enterGenericMethodOrConstructorDecl?: (ctx: GenericMethodOrConstructorDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.genericMethodOrConstructorDecl`.
     * @param ctx the parse tree
     */
    exitGenericMethodOrConstructorDecl?: (ctx: GenericMethodOrConstructorDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.genericMethodOrConstructorRest`.
     * @param ctx the parse tree
     */
    enterGenericMethodOrConstructorRest?: (ctx: GenericMethodOrConstructorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.genericMethodOrConstructorRest`.
     * @param ctx the parse tree
     */
    exitGenericMethodOrConstructorRest?: (ctx: GenericMethodOrConstructorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.methodDeclaration`.
     * @param ctx the parse tree
     */
    enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.methodDeclaration`.
     * @param ctx the parse tree
     */
    exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.fieldDeclaration`.
     * @param ctx the parse tree
     */
    enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.fieldDeclaration`.
     * @param ctx the parse tree
     */
    exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.interfaceBodyDeclaration`.
     * @param ctx the parse tree
     */
    enterInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.interfaceBodyDeclaration`.
     * @param ctx the parse tree
     */
    exitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.interfaceMemberDecl`.
     * @param ctx the parse tree
     */
    enterInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.interfaceMemberDecl`.
     * @param ctx the parse tree
     */
    exitInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.interfaceMethodOrFieldDecl`.
     * @param ctx the parse tree
     */
    enterInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.interfaceMethodOrFieldDecl`.
     * @param ctx the parse tree
     */
    exitInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.interfaceMethodOrFieldRest`.
     * @param ctx the parse tree
     */
    enterInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.interfaceMethodOrFieldRest`.
     * @param ctx the parse tree
     */
    exitInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.methodDeclaratorRest`.
     * @param ctx the parse tree
     */
    enterMethodDeclaratorRest?: (ctx: MethodDeclaratorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.methodDeclaratorRest`.
     * @param ctx the parse tree
     */
    exitMethodDeclaratorRest?: (ctx: MethodDeclaratorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.interfaceMethodDeclaratorRest`.
     * @param ctx the parse tree
     */
    enterInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.interfaceMethodDeclaratorRest`.
     * @param ctx the parse tree
     */
    exitInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.interfaceGenericMethodDecl`.
     * @param ctx the parse tree
     */
    enterInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.interfaceGenericMethodDecl`.
     * @param ctx the parse tree
     */
    exitInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.constructorDeclaratorRest`.
     * @param ctx the parse tree
     */
    enterConstructorDeclaratorRest?: (ctx: ConstructorDeclaratorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.constructorDeclaratorRest`.
     * @param ctx the parse tree
     */
    exitConstructorDeclaratorRest?: (ctx: ConstructorDeclaratorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.constantDeclarator`.
     * @param ctx the parse tree
     */
    enterConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.constantDeclarator`.
     * @param ctx the parse tree
     */
    exitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.variableDeclarators`.
     * @param ctx the parse tree
     */
    enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.variableDeclarators`.
     * @param ctx the parse tree
     */
    exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.variableDeclarator`.
     * @param ctx the parse tree
     */
    enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.variableDeclarator`.
     * @param ctx the parse tree
     */
    exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.constantDeclaratorsRest`.
     * @param ctx the parse tree
     */
    enterConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.constantDeclaratorsRest`.
     * @param ctx the parse tree
     */
    exitConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.constantDeclaratorRest`.
     * @param ctx the parse tree
     */
    enterConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.constantDeclaratorRest`.
     * @param ctx the parse tree
     */
    exitConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.variableDeclaratorId`.
     * @param ctx the parse tree
     */
    enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.variableDeclaratorId`.
     * @param ctx the parse tree
     */
    exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.variableInitializer`.
     * @param ctx the parse tree
     */
    enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.variableInitializer`.
     * @param ctx the parse tree
     */
    exitVariableInitializer?: (ctx: VariableInitializerContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.arrayInitializer`.
     * @param ctx the parse tree
     */
    enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.arrayInitializer`.
     * @param ctx the parse tree
     */
    exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.modifier`.
     * @param ctx the parse tree
     */
    enterModifier?: (ctx: ModifierContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.modifier`.
     * @param ctx the parse tree
     */
    exitModifier?: (ctx: ModifierContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.packageOrTypeName`.
     * @param ctx the parse tree
     */
    enterPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.packageOrTypeName`.
     * @param ctx the parse tree
     */
    exitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.enumConstantName`.
     * @param ctx the parse tree
     */
    enterEnumConstantName?: (ctx: EnumConstantNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.enumConstantName`.
     * @param ctx the parse tree
     */
    exitEnumConstantName?: (ctx: EnumConstantNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeName`.
     * @param ctx the parse tree
     */
    enterTypeName?: (ctx: TypeNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeName`.
     * @param ctx the parse tree
     */
    exitTypeName?: (ctx: TypeNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.classOrInterfaceType`.
     * @param ctx the parse tree
     */
    enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.classOrInterfaceType`.
     * @param ctx the parse tree
     */
    exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.primitiveType`.
     * @param ctx the parse tree
     */
    enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.primitiveType`.
     * @param ctx the parse tree
     */
    exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.variableModifier`.
     * @param ctx the parse tree
     */
    enterVariableModifier?: (ctx: VariableModifierContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.variableModifier`.
     * @param ctx the parse tree
     */
    exitVariableModifier?: (ctx: VariableModifierContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeArguments`.
     * @param ctx the parse tree
     */
    enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeArguments`.
     * @param ctx the parse tree
     */
    exitTypeArguments?: (ctx: TypeArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeArgument`.
     * @param ctx the parse tree
     */
    enterTypeArgument?: (ctx: TypeArgumentContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeArgument`.
     * @param ctx the parse tree
     */
    exitTypeArgument?: (ctx: TypeArgumentContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.formalParameters`.
     * @param ctx the parse tree
     */
    enterFormalParameters?: (ctx: FormalParametersContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.formalParameters`.
     * @param ctx the parse tree
     */
    exitFormalParameters?: (ctx: FormalParametersContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.formalParameterDecls`.
     * @param ctx the parse tree
     */
    enterFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.formalParameterDecls`.
     * @param ctx the parse tree
     */
    exitFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.formalParameterDeclsRest`.
     * @param ctx the parse tree
     */
    enterFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.formalParameterDeclsRest`.
     * @param ctx the parse tree
     */
    exitFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.methodBody`.
     * @param ctx the parse tree
     */
    enterMethodBody?: (ctx: MethodBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.methodBody`.
     * @param ctx the parse tree
     */
    exitMethodBody?: (ctx: MethodBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.constructorBody`.
     * @param ctx the parse tree
     */
    enterConstructorBody?: (ctx: ConstructorBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.constructorBody`.
     * @param ctx the parse tree
     */
    exitConstructorBody?: (ctx: ConstructorBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotations`.
     * @param ctx the parse tree
     */
    enterAnnotations?: (ctx: AnnotationsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotations`.
     * @param ctx the parse tree
     */
    exitAnnotations?: (ctx: AnnotationsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotation`.
     * @param ctx the parse tree
     */
    enterAnnotation?: (ctx: AnnotationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotation`.
     * @param ctx the parse tree
     */
    exitAnnotation?: (ctx: AnnotationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotationName`.
     * @param ctx the parse tree
     */
    enterAnnotationName?: (ctx: AnnotationNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotationName`.
     * @param ctx the parse tree
     */
    exitAnnotationName?: (ctx: AnnotationNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.elementValuePairs`.
     * @param ctx the parse tree
     */
    enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.elementValuePairs`.
     * @param ctx the parse tree
     */
    exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.elementValuePair`.
     * @param ctx the parse tree
     */
    enterElementValuePair?: (ctx: ElementValuePairContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.elementValuePair`.
     * @param ctx the parse tree
     */
    exitElementValuePair?: (ctx: ElementValuePairContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.elementValue`.
     * @param ctx the parse tree
     */
    enterElementValue?: (ctx: ElementValueContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.elementValue`.
     * @param ctx the parse tree
     */
    exitElementValue?: (ctx: ElementValueContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.elementValueArrayInitializer`.
     * @param ctx the parse tree
     */
    enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.elementValueArrayInitializer`.
     * @param ctx the parse tree
     */
    exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotationTypeDeclaration`.
     * @param ctx the parse tree
     */
    enterAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotationTypeDeclaration`.
     * @param ctx the parse tree
     */
    exitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotationTypeBody`.
     * @param ctx the parse tree
     */
    enterAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotationTypeBody`.
     * @param ctx the parse tree
     */
    exitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotationTypeElementDeclaration`.
     * @param ctx the parse tree
     */
    enterAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotationTypeElementDeclaration`.
     * @param ctx the parse tree
     */
    exitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotationTypeElementRest`.
     * @param ctx the parse tree
     */
    enterAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotationTypeElementRest`.
     * @param ctx the parse tree
     */
    exitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotationMethodOrConstantRest`.
     * @param ctx the parse tree
     */
    enterAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotationMethodOrConstantRest`.
     * @param ctx the parse tree
     */
    exitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotationMethodRest`.
     * @param ctx the parse tree
     */
    enterAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotationMethodRest`.
     * @param ctx the parse tree
     */
    exitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.annotationConstantRest`.
     * @param ctx the parse tree
     */
    enterAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.annotationConstantRest`.
     * @param ctx the parse tree
     */
    exitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.defaultValue`.
     * @param ctx the parse tree
     */
    enterDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.defaultValue`.
     * @param ctx the parse tree
     */
    exitDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.blockStatement`.
     * @param ctx the parse tree
     */
    enterBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.blockStatement`.
     * @param ctx the parse tree
     */
    exitBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.localVariableDeclarationStatement`.
     * @param ctx the parse tree
     */
    enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.localVariableDeclarationStatement`.
     * @param ctx the parse tree
     */
    exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.localVariableDeclaration`.
     * @param ctx the parse tree
     */
    enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.localVariableDeclaration`.
     * @param ctx the parse tree
     */
    exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.variableModifiers`.
     * @param ctx the parse tree
     */
    enterVariableModifiers?: (ctx: VariableModifiersContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.variableModifiers`.
     * @param ctx the parse tree
     */
    exitVariableModifiers?: (ctx: VariableModifiersContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.catches`.
     * @param ctx the parse tree
     */
    enterCatches?: (ctx: CatchesContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.catches`.
     * @param ctx the parse tree
     */
    exitCatches?: (ctx: CatchesContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.catchClause`.
     * @param ctx the parse tree
     */
    enterCatchClause?: (ctx: CatchClauseContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.catchClause`.
     * @param ctx the parse tree
     */
    exitCatchClause?: (ctx: CatchClauseContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.catchType`.
     * @param ctx the parse tree
     */
    enterCatchType?: (ctx: CatchTypeContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.catchType`.
     * @param ctx the parse tree
     */
    exitCatchType?: (ctx: CatchTypeContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.finallyBlock`.
     * @param ctx the parse tree
     */
    enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.finallyBlock`.
     * @param ctx the parse tree
     */
    exitFinallyBlock?: (ctx: FinallyBlockContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.resourceSpecification`.
     * @param ctx the parse tree
     */
    enterResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.resourceSpecification`.
     * @param ctx the parse tree
     */
    exitResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.resources`.
     * @param ctx the parse tree
     */
    enterResources?: (ctx: ResourcesContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.resources`.
     * @param ctx the parse tree
     */
    exitResources?: (ctx: ResourcesContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.resource`.
     * @param ctx the parse tree
     */
    enterResource?: (ctx: ResourceContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.resource`.
     * @param ctx the parse tree
     */
    exitResource?: (ctx: ResourceContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.formalParameter`.
     * @param ctx the parse tree
     */
    enterFormalParameter?: (ctx: FormalParameterContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.formalParameter`.
     * @param ctx the parse tree
     */
    exitFormalParameter?: (ctx: FormalParameterContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.switchBlockStatementGroups`.
     * @param ctx the parse tree
     */
    enterSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.switchBlockStatementGroups`.
     * @param ctx the parse tree
     */
    exitSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.switchBlockStatementGroup`.
     * @param ctx the parse tree
     */
    enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.switchBlockStatementGroup`.
     * @param ctx the parse tree
     */
    exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.switchLabel`.
     * @param ctx the parse tree
     */
    enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.switchLabel`.
     * @param ctx the parse tree
     */
    exitSwitchLabel?: (ctx: SwitchLabelContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.forControl`.
     * @param ctx the parse tree
     */
    enterForControl?: (ctx: ForControlContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.forControl`.
     * @param ctx the parse tree
     */
    exitForControl?: (ctx: ForControlContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.forInit`.
     * @param ctx the parse tree
     */
    enterForInit?: (ctx: ForInitContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.forInit`.
     * @param ctx the parse tree
     */
    exitForInit?: (ctx: ForInitContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.enhancedForControl`.
     * @param ctx the parse tree
     */
    enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.enhancedForControl`.
     * @param ctx the parse tree
     */
    exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.forUpdate`.
     * @param ctx the parse tree
     */
    enterForUpdate?: (ctx: ForUpdateContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.forUpdate`.
     * @param ctx the parse tree
     */
    exitForUpdate?: (ctx: ForUpdateContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.parExpression`.
     * @param ctx the parse tree
     */
    enterParExpression?: (ctx: ParExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.parExpression`.
     * @param ctx the parse tree
     */
    exitParExpression?: (ctx: ParExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.expressionList`.
     * @param ctx the parse tree
     */
    enterExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.expressionList`.
     * @param ctx the parse tree
     */
    exitExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.statementExpression`.
     * @param ctx the parse tree
     */
    enterStatementExpression?: (ctx: StatementExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.statementExpression`.
     * @param ctx the parse tree
     */
    exitStatementExpression?: (ctx: StatementExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.constantExpression`.
     * @param ctx the parse tree
     */
    enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.constantExpression`.
     * @param ctx the parse tree
     */
    exitConstantExpression?: (ctx: ConstantExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.primary`.
     * @param ctx the parse tree
     */
    enterPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.primary`.
     * @param ctx the parse tree
     */
    exitPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.creator`.
     * @param ctx the parse tree
     */
    enterCreator?: (ctx: CreatorContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.creator`.
     * @param ctx the parse tree
     */
    exitCreator?: (ctx: CreatorContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.createdName`.
     * @param ctx the parse tree
     */
    enterCreatedName?: (ctx: CreatedNameContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.createdName`.
     * @param ctx the parse tree
     */
    exitCreatedName?: (ctx: CreatedNameContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.innerCreator`.
     * @param ctx the parse tree
     */
    enterInnerCreator?: (ctx: InnerCreatorContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.innerCreator`.
     * @param ctx the parse tree
     */
    exitInnerCreator?: (ctx: InnerCreatorContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.arrayCreatorRest`.
     * @param ctx the parse tree
     */
    enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.arrayCreatorRest`.
     * @param ctx the parse tree
     */
    exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.classCreatorRest`.
     * @param ctx the parse tree
     */
    enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.classCreatorRest`.
     * @param ctx the parse tree
     */
    exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.explicitGenericInvocation`.
     * @param ctx the parse tree
     */
    enterExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.explicitGenericInvocation`.
     * @param ctx the parse tree
     */
    exitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.nonWildcardTypeArguments`.
     * @param ctx the parse tree
     */
    enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.nonWildcardTypeArguments`.
     * @param ctx the parse tree
     */
    exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.typeArgumentsOrDiamond`.
     * @param ctx the parse tree
     */
    enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.typeArgumentsOrDiamond`.
     * @param ctx the parse tree
     */
    exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.nonWildcardTypeArgumentsOrDiamond`.
     * @param ctx the parse tree
     */
    enterNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.nonWildcardTypeArgumentsOrDiamond`.
     * @param ctx the parse tree
     */
    exitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.superSuffix`.
     * @param ctx the parse tree
     */
    enterSuperSuffix?: (ctx: SuperSuffixContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.superSuffix`.
     * @param ctx the parse tree
     */
    exitSuperSuffix?: (ctx: SuperSuffixContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.explicitGenericInvocationSuffix`.
     * @param ctx the parse tree
     */
    enterExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.explicitGenericInvocationSuffix`.
     * @param ctx the parse tree
     */
    exitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;
    /**
     * Enter a parse tree produced by `JavaLRParser.arguments`.
     * @param ctx the parse tree
     */
    enterArguments?: (ctx: ArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `JavaLRParser.arguments`.
     * @param ctx the parse tree
     */
    exitArguments?: (ctx: ArgumentsContext) => void;
}
