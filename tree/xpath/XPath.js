/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
// ConvertTo-TS run at 2016-10-04T11:26:46.4373888-07:00
import { ANTLRInputStream } from "../../ANTLRInputStream";
import { CommonTokenStream } from "../../CommonTokenStream";
import { LexerNoViableAltException } from "../../LexerNoViableAltException";
import { ParserRuleContext } from "../../ParserRuleContext";
import { Token } from "../../Token";
import { XPathLexer } from "./XPathLexer";
import { XPathLexerErrorListener } from "./XPathLexerErrorListener";
import { XPathRuleAnywhereElement } from "./XPathRuleAnywhereElement";
import { XPathRuleElement } from "./XPathRuleElement";
import { XPathTokenAnywhereElement } from "./XPathTokenAnywhereElement";
import { XPathTokenElement } from "./XPathTokenElement";
import { XPathWildcardAnywhereElement } from "./XPathWildcardAnywhereElement";
import { XPathWildcardElement } from "./XPathWildcardElement";
/**
 * Represent a subset of XPath XML path syntax for use in identifying nodes in
 * parse trees.
 *
 * Split path into words and separators `/` and `//` via ANTLR
 * itself then walk path elements from left to right. At each separator-word
 * pair, find set of nodes. Next stage uses those as work list.
 *
 * The basic interface is
 * {@link XPath#findAll ParseTree.findAll}`(tree, pathString, parser)`.
 * But that is just shorthand for:
 *
 * ```
 * let p = new XPath(parser, pathString);
 * return p.evaluate(tree);
 * ```
 *
 * See `TestXPath` for descriptions. In short, this
 * allows operators:
 *
 * | | |
 * | --- | --- |
 * | `/` | root |
 * | `//` | anywhere |
 * | `!` | invert; this much appear directly after root or anywhere operator |
 *
 * and path elements:
 *
 * | | |
 * | --- | --- |
 * | `ID` | token name |
 * | `'string'` | any string literal token from the grammar |
 * | `expr` | rule name |
 * | `*` | wildcard matching any node |
 *
 * Whitespace is not allowed.
 */
var XPath = /** @class */ (function () {
    function XPath(parser, path) {
        this.parser = parser;
        this.path = path;
        this.elements = this.split(path);
        // console.log(this.elements.toString());
    }
    // TODO: check for invalid token/rule names, bad syntax
    XPath.prototype.split = function (path) {
        var input = new ANTLRInputStream(path);
        var lexer = new XPathLexer(input);
        lexer.recover = function (e) { throw e; };
        lexer.removeErrorListeners();
        lexer.addErrorListener(new XPathLexerErrorListener());
        var tokenStream = new CommonTokenStream(lexer);
        try {
            tokenStream.fill();
        }
        catch (e) {
            if (e instanceof LexerNoViableAltException) {
                var pos = lexer.charPositionInLine;
                var msg = "Invalid tokens or characters at index " + pos + " in path '" + path + "' -- " + e.message;
                throw new RangeError(msg);
            }
            throw e;
        }
        var tokens = tokenStream.getTokens();
        // console.log("path=" + path + "=>" + tokens);
        var elements = [];
        var n = tokens.length;
        var i = 0;
        loop: while (i < n) {
            var el = tokens[i];
            var next = void 0;
            switch (el.type) {
                case XPathLexer.ROOT:
                case XPathLexer.ANYWHERE:
                    var anywhere = el.type === XPathLexer.ANYWHERE;
                    i++;
                    next = tokens[i];
                    var invert = next.type === XPathLexer.BANG;
                    if (invert) {
                        i++;
                        next = tokens[i];
                    }
                    var pathElement = this.getXPathElement(next, anywhere);
                    pathElement.invert = invert;
                    elements.push(pathElement);
                    i++;
                    break;
                case XPathLexer.TOKEN_REF:
                case XPathLexer.RULE_REF:
                case XPathLexer.WILDCARD:
                    elements.push(this.getXPathElement(el, false));
                    i++;
                    break;
                case Token.EOF:
                    break loop;
                default:
                    throw new Error("Unknowth path element " + el);
            }
        }
        return elements;
    };
    /**
     * Convert word like `*` or `ID` or `expr` to a path
     * element. `anywhere` is `true` if `//` precedes the
     * word.
     */
    XPath.prototype.getXPathElement = function (wordToken, anywhere) {
        if (wordToken.type === Token.EOF) {
            throw new Error("Missing path element at end of path");
        }
        var word = wordToken.text;
        if (word == null) {
            throw new Error("Expected wordToken to have text content.");
        }
        var ttype = this.parser.getTokenType(word);
        var ruleIndex = this.parser.getRuleIndex(word);
        switch (wordToken.type) {
            case XPathLexer.WILDCARD:
                return anywhere ?
                    new XPathWildcardAnywhereElement() :
                    new XPathWildcardElement();
            case XPathLexer.TOKEN_REF:
            case XPathLexer.STRING:
                if (ttype === Token.INVALID_TYPE) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid token name");
                }
                return anywhere ?
                    new XPathTokenAnywhereElement(word, ttype) :
                    new XPathTokenElement(word, ttype);
            default:
                if (ruleIndex === -1) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid rule name");
                }
                return anywhere ?
                    new XPathRuleAnywhereElement(word, ruleIndex) :
                    new XPathRuleElement(word, ruleIndex);
        }
    };
    XPath.findAll = function (tree, xpath, parser) {
        var p = new XPath(parser, xpath);
        return p.evaluate(tree);
    };
    /**
     * Return a list of all nodes starting at `t` as root that satisfy the
     * path. The root `/` is relative to the node passed to {@link evaluate}.
     */
    XPath.prototype.evaluate = function (t) {
        var dummyRoot = new ParserRuleContext();
        dummyRoot.addChild(t);
        var work = new Set([dummyRoot]);
        var i = 0;
        while (i < this.elements.length) {
            var next = new Set();
            try {
                for (var work_1 = __values(work), work_1_1 = work_1.next(); !work_1_1.done; work_1_1 = work_1.next()) {
                    var node = work_1_1.value;
                    if (node.childCount > 0) {
                        // only try to match next element if it has children
                        // e.g., //func/*/stat might have a token node for which
                        // we can't go looking for stat nodes.
                        var matching = this.elements[i].evaluate(node);
                        matching.forEach(next.add, next);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (work_1_1 && !work_1_1.done && (_a = work_1.return)) _a.call(work_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            i++;
            work = next;
        }
        return work;
        var e_1, _a;
    };
    XPath.WILDCARD = "*"; // word not operator/separator
    XPath.NOT = "!"; // word for invert operator
    return XPath;
}());
export { XPath };
//# sourceMappingURL=XPath.js.map