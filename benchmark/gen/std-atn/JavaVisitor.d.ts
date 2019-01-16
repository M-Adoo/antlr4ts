import { ParseTreeVisitor } from "../../../src/tree/ParseTreeVisitor";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JavaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JavaVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `JavaParser.compilationUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.packageDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.importDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classOrInterfaceDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceDeclaration?: (ctx: ClassOrInterfaceDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classOrInterfaceModifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classOrInterfaceModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.modifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifiers?: (ctx: ModifiersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.normalClassDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParameters?: (ctx: TypeParametersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParameter?: (ctx: TypeParameterContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeBound?: (ctx: TypeBoundContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumBody?: (ctx: EnumBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumConstants`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstants?: (ctx: EnumConstantsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumConstant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstant?: (ctx: EnumConstantContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumBodyDeclarations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.normalInterfaceDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeList?: (ctx: TypeListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassBody?: (ctx: ClassBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classBodyDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.memberDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberDecl?: (ctx: MemberDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.memberDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.genericMethodOrConstructorDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericMethodOrConstructorDecl?: (ctx: GenericMethodOrConstructorDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.genericMethodOrConstructorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericMethodOrConstructorRest?: (ctx: GenericMethodOrConstructorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.methodDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.fieldDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceBodyDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceMemberDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMemberDecl?: (ctx: InterfaceMemberDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceMethodOrFieldDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMethodOrFieldDecl?: (ctx: InterfaceMethodOrFieldDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceMethodOrFieldRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMethodOrFieldRest?: (ctx: InterfaceMethodOrFieldRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.methodDeclaratorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodDeclaratorRest?: (ctx: MethodDeclaratorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceMethodDeclaratorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMethodDeclaratorRest?: (ctx: InterfaceMethodDeclaratorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceGenericMethodDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceGenericMethodDecl?: (ctx: InterfaceGenericMethodDeclContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constructorDeclaratorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructorDeclaratorRest?: (ctx: ConstructorDeclaratorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constantDeclarator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableDeclarators`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableDeclarator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constantDeclaratorsRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDeclaratorsRest?: (ctx: ConstantDeclaratorsRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constantDeclaratorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDeclaratorRest?: (ctx: ConstantDeclaratorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableDeclaratorId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.arrayInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier?: (ctx: ModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.packageOrTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumConstantName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeName?: (ctx: TypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classOrInterfaceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.primitiveType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableModifier?: (ctx: VariableModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeArguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArgument?: (ctx: TypeArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.formalParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameters?: (ctx: FormalParametersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.formalParameterDecls`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameterDecls?: (ctx: FormalParameterDeclsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.formalParameterDeclsRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameterDeclsRest?: (ctx: FormalParameterDeclsRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.methodBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodBody?: (ctx: MethodBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constructorBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotations?: (ctx: AnnotationsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotation?: (ctx: AnnotationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationName?: (ctx: AnnotationNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.elementValuePairs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.elementValuePair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValuePair?: (ctx: ElementValuePairContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.elementValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValue?: (ctx: ElementValueContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.elementValueArrayInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationTypeDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationTypeBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationTypeElementDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationTypeElementRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationMethodOrConstantRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationMethodRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationConstantRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.defaultValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultValue?: (ctx: DefaultValueContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.blockStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockStatement?: (ctx: BlockStatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.localVariableDeclarationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.localVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableModifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableModifiers?: (ctx: VariableModifiersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.catches`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatches?: (ctx: CatchesContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchClause?: (ctx: CatchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.catchType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchType?: (ctx: CatchTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.finallyBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.resourceSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.resources`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResources?: (ctx: ResourcesContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.resource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource?: (ctx: ResourceContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.formalParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameter?: (ctx: FormalParameterContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.switchBlockStatementGroups`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.switchBlockStatementGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.switchLabel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.forControl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForControl?: (ctx: ForControlContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.forInit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForInit?: (ctx: ForInitContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enhancedForControl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.forUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForUpdate?: (ctx: ForUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.parExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParExpression?: (ctx: ParExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.expressionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionList?: (ctx: ExpressionListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.statementExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementExpression?: (ctx: StatementExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constantExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.assignmentOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.conditionalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.conditionalOrExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.conditionalAndExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.inclusiveOrExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.exclusiveOrExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.andExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAndExpression?: (ctx: AndExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.equalityExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.instanceOfExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.relationalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.relationalOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationalOp?: (ctx: RelationalOpContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.shiftExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.shiftOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShiftOp?: (ctx: ShiftOpContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.additiveExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.multiplicativeExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.unaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.unaryExpressionNotPlusMinus`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.castExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastExpression?: (ctx: CastExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.identifierSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSuffix?: (ctx: IdentifierSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.creator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreator?: (ctx: CreatorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.createdName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedName?: (ctx: CreatedNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.innerCreator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInnerCreator?: (ctx: InnerCreatorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.arrayCreatorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classCreatorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.explicitGenericInvocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.nonWildcardTypeArguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeArgumentsOrDiamond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.nonWildcardTypeArgumentsOrDiamond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.selector`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelector?: (ctx: SelectorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.superSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSuperSuffix?: (ctx: SuperSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.explicitGenericInvocationSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.arguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArguments?: (ctx: ArgumentsContext) => Result;
}
