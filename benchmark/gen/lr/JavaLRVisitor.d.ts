import { ParseTreeVisitor } from "../../../src/tree/ParseTreeVisitor";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JavaLRParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JavaLRVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `JavaLRParser.compilationUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.packageDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.importDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.classOrInterfaceDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceDeclaration?: (ctx: ClassOrInterfaceDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.classOrInterfaceModifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.classOrInterfaceModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.modifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifiers?: (ctx: ModifiersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.classDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.normalClassDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParameters?: (ctx: TypeParametersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParameter?: (ctx: TypeParameterContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeBound?: (ctx: TypeBoundContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.enumDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.enumBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumBody?: (ctx: EnumBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.enumConstants`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstants?: (ctx: EnumConstantsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.enumConstant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstant?: (ctx: EnumConstantContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.enumBodyDeclarations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.interfaceDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.normalInterfaceDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeList?: (ctx: TypeListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.classBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassBody?: (ctx: ClassBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.interfaceBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.classBodyDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.memberDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberDecl?: (ctx: MemberDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.memberDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.genericMethodOrConstructorDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericMethodOrConstructorDecl?: (ctx: GenericMethodOrConstructorDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.genericMethodOrConstructorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericMethodOrConstructorRest?: (ctx: GenericMethodOrConstructorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.methodDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.fieldDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.interfaceBodyDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.interfaceMemberDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.interfaceMethodOrFieldDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.interfaceMethodOrFieldRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.methodDeclaratorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodDeclaratorRest?: (ctx: MethodDeclaratorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.interfaceMethodDeclaratorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.interfaceGenericMethodDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.constructorDeclaratorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructorDeclaratorRest?: (ctx: ConstructorDeclaratorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.constantDeclarator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.variableDeclarators`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.variableDeclarator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.constantDeclaratorsRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.constantDeclaratorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.variableDeclaratorId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.variableInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.arrayInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier?: (ctx: ModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.packageOrTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.enumConstantName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeName?: (ctx: TypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.classOrInterfaceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.primitiveType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.variableModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableModifier?: (ctx: VariableModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeArguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArgument?: (ctx: TypeArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.formalParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameters?: (ctx: FormalParametersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.formalParameterDecls`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.formalParameterDeclsRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.methodBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodBody?: (ctx: MethodBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.constructorBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotations?: (ctx: AnnotationsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotation?: (ctx: AnnotationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotationName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationName?: (ctx: AnnotationNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.elementValuePairs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.elementValuePair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValuePair?: (ctx: ElementValuePairContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.elementValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValue?: (ctx: ElementValueContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.elementValueArrayInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotationTypeDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotationTypeBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotationTypeElementDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotationTypeElementRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotationMethodOrConstantRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotationMethodRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.annotationConstantRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.defaultValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultValue?: (ctx: DefaultValueContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.blockStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockStatement?: (ctx: BlockStatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.localVariableDeclarationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.localVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.variableModifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableModifiers?: (ctx: VariableModifiersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.catches`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatches?: (ctx: CatchesContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchClause?: (ctx: CatchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.catchType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchType?: (ctx: CatchTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.finallyBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.resourceSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.resources`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResources?: (ctx: ResourcesContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.resource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource?: (ctx: ResourceContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.formalParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameter?: (ctx: FormalParameterContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.switchBlockStatementGroups`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.switchBlockStatementGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.switchLabel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.forControl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForControl?: (ctx: ForControlContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.forInit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForInit?: (ctx: ForInitContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.enhancedForControl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.forUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForUpdate?: (ctx: ForUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.parExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParExpression?: (ctx: ParExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.expressionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionList?: (ctx: ExpressionListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.statementExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementExpression?: (ctx: StatementExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.constantExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.creator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreator?: (ctx: CreatorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.createdName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedName?: (ctx: CreatedNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.innerCreator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInnerCreator?: (ctx: InnerCreatorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.arrayCreatorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.classCreatorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.explicitGenericInvocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.nonWildcardTypeArguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.typeArgumentsOrDiamond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.nonWildcardTypeArgumentsOrDiamond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.superSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSuperSuffix?: (ctx: SuperSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.explicitGenericInvocationSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `JavaLRParser.arguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArguments?: (ctx: ArgumentsContext) => Result;
}
