/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
export declare class TestTokenStreamRewriter {
    private createLexerInterpreter(input, lexerCtor);
    testInsertBeforeIndex0(): void;
    testInsertAfterLastIndex(): void;
    test2InsertBeforeAfterMiddleIndex(): void;
    testReplaceIndex0(): void;
    testReplaceLastIndex(): void;
    testReplaceMiddleIndex(): void;
    testToStringStartStop(): void;
    testToStringStartStop2(): void;
    test2ReplaceMiddleIndex(): void;
    test2ReplaceMiddleIndex1InsertBefore(): void;
    testReplaceThenDeleteMiddleIndex(): void;
    testInsertInPriorReplace(): void;
    testInsertThenReplaceSameIndex(): void;
    test2InsertMiddleIndex(): void;
    test2InsertThenReplaceIndex0(): void;
    testReplaceThenInsertBeforeLastIndex(): void;
    testInsertThenReplaceLastIndex(): void;
    testReplaceThenInsertAfterLastIndex(): void;
    testReplaceRangeThenInsertAtLeftEdge(): void;
    testReplaceRangeThenInsertAtRightEdge(): void;
    testReplaceRangeThenInsertAfterRightEdge(): void;
    testReplaceAll(): void;
    testReplaceSubsetThenFetch(): void;
    testReplaceThenReplaceSuperset(): void;
    testReplaceThenReplaceLowerIndexedSuperset(): void;
    testReplaceSingleMiddleThenOverlappingSuperset(): void;
    testCombineInserts(): void;
    testCombine3Inserts(): void;
    testCombineInsertOnLeftWithReplace(): void;
    testCombineInsertOnLeftWithDelete(): void;
    testDisjointInserts(): void;
    testOverlappingReplace(): void;
    testOverlappingReplace2(): void;
    testOverlappingReplace3(): void;
    testOverlappingReplace4(): void;
    testDropIdenticalReplace(): void;
    testDropPrevCoveredInsert(): void;
    testLeaveAloneDisjointInsert(): void;
    testLeaveAloneDisjointInsert2(): void;
    testInsertBeforeTokenThenDeleteThatToken(): void;
    testDistinguishBetweenInsertAfterAndInsertBeforeToPreserverOrder(): void;
    testDistinguishBetweenInsertAfterAndInsertBeforeToPreserverOrder2(): void;
    testPreservesOrderOfContiguousInserts(): void;
    testInsertLiterals(): void;
}
