/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
export declare class TestParseTreeMatcher {
    testChunking(): void;
    testDelimiters(): void;
    testInvertedTags(): void;
    testUnclosedTag(): void;
    testExtraClose(): void;
    testTokenizingPattern(): void;
    testCompilingPattern(): void;
    testCompilingPatternConsumesAllTokens(): void;
    testPatternMatchesStartRule(): void;
    testPatternMatchesStartRule2(): void;
    testHiddenTokensNotSeenByTreePatternParser(): void;
    testCompilingMultipleTokens(): void;
    testIDNodeMatches(): Promise<void>;
    testIDNodeWithLabelMatches(): Promise<void>;
    testLabelGetsLastIDNode(): Promise<void>;
    testIDNodeWithMultipleLabelMatches(): Promise<void>;
    testTokenAndRuleMatch(): Promise<void>;
    testTokenTextMatch(): Promise<void>;
    testAssign(): Promise<void>;
    testLRecursiveExpr(): Promise<void>;
    private execParser<TParser>(startRule, input, lexerCtor, parserCtor);
    private checkPatternMatch<TParser>(startRule, startRuleIndex, input, pattern, lexerCtor, parserCtor, invertMatch?);
    private getPattern(lexerCtor, parserCtor, pattern, ruleIndex);
    private getPatternMatcher(lexerCtor, parserCtor);
}
