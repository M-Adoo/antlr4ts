/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { Interval } from "../misc/Interval";
import { Parser } from "../Parser";
import { ParseTree } from "./ParseTree";
import { ParseTreeVisitor } from "./ParseTreeVisitor";
import { RuleContext } from "../RuleContext";
import { RuleNode } from "./RuleNode";
import { Token } from "../Token";
export declare class TerminalNode implements ParseTree {
    _symbol: Token;
    _parent: RuleNode | undefined;
    constructor(symbol: Token);
    getChild(i: number): never;
    readonly symbol: Token;
    readonly parent: RuleNode | undefined;
    setParent(parent: RuleContext): void;
    readonly payload: Token;
    readonly sourceInterval: Interval;
    readonly childCount: number;
    accept<T>(visitor: ParseTreeVisitor<T>): T;
    readonly text: string;
    toStringTree(parser?: Parser): string;
    toString(): string;
}
