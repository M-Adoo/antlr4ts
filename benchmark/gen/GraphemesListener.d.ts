import { ParseTreeListener } from "../../src/tree/ParseTreeListener";
import { EmojiSequenceContext } from "./GraphemesParser";
import { GraphemeClusterContext } from "./GraphemesParser";
import { GraphemesContext } from "./GraphemesParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `GraphemesParser`.
 */
export interface GraphemesListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by `GraphemesParser.emojiSequence`.
     * @param ctx the parse tree
     */
    enterEmojiSequence?: (ctx: EmojiSequenceContext) => void;
    /**
     * Exit a parse tree produced by `GraphemesParser.emojiSequence`.
     * @param ctx the parse tree
     */
    exitEmojiSequence?: (ctx: EmojiSequenceContext) => void;
    /**
     * Enter a parse tree produced by `GraphemesParser.graphemeCluster`.
     * @param ctx the parse tree
     */
    enterGraphemeCluster?: (ctx: GraphemeClusterContext) => void;
    /**
     * Exit a parse tree produced by `GraphemesParser.graphemeCluster`.
     * @param ctx the parse tree
     */
    exitGraphemeCluster?: (ctx: GraphemeClusterContext) => void;
    /**
     * Enter a parse tree produced by `GraphemesParser.graphemes`.
     * @param ctx the parse tree
     */
    enterGraphemes?: (ctx: GraphemesContext) => void;
    /**
     * Exit a parse tree produced by `GraphemesParser.graphemes`.
     * @param ctx the parse tree
     */
    exitGraphemes?: (ctx: GraphemesContext) => void;
}
