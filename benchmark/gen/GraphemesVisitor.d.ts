import { ParseTreeVisitor } from "../../src";
import { EmojiSequenceContext } from "./GraphemesParser";
import { GraphemeClusterContext } from "./GraphemesParser";
import { GraphemesContext } from "./GraphemesParser";
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GraphemesParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GraphemesVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `GraphemesParser.emojiSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmojiSequence?: (ctx: EmojiSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `GraphemesParser.graphemeCluster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphemeCluster?: (ctx: GraphemeClusterContext) => Result;
    /**
     * Visit a parse tree produced by `GraphemesParser.graphemes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphemes?: (ctx: GraphemesContext) => Result;
}
