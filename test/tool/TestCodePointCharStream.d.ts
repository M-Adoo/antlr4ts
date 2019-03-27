/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
export declare class TestCodePointCharStream {
    emptyBytesHasSize0(): void;
    emptyBytesLookAheadReturnsEOF(): void;
    consumingEmptyStreamShouldThrow(): void;
    singleLatinCodePointHasSize1(): void;
    consumingSingleLatinCodePointShouldMoveIndex(): void;
    consumingPastSingleLatinCodePointShouldThrow(): void;
    singleLatinCodePointLookAheadShouldReturnCodePoint(): void;
    multipleLatinCodePointsLookAheadShouldReturnCodePoints(): void;
    singleLatinCodePointLookAheadPastEndShouldReturnEOF(): void;
    singleCJKCodePointHasSize1(): void;
    consumingSingleCJKCodePointShouldMoveIndex(): void;
    consumingPastSingleCJKCodePointShouldThrow(): void;
    singleCJKCodePointLookAheadShouldReturnCodePoint(): void;
    singleCJKCodePointLookAheadPastEndShouldReturnEOF(): void;
    singleEmojiCodePointHasSize1(): void;
    consumingSingleEmojiCodePointShouldMoveIndex(): void;
    consumingPastEndOfEmojiCodePointWithShouldThrow(): void;
    singleEmojiCodePointLookAheadShouldReturnCodePoint(): void;
    singleEmojiCodePointLookAheadPastEndShouldReturnEOF(): void;
    getTextWithLatin(): void;
    getTextWithCJK(): void;
    getTextWithEmoji(): void;
    toStringWithLatin(): void;
    toStringWithCJK(): void;
    toStringWithEmoji(): void;
    lookAheadWithLatin(): void;
    lookAheadWithCJK(): void;
    lookAheadWithEmoji(): void;
    seekWithLatin(): void;
    seekWithCJK(): void;
    seekWithEmoji(): void;
    lookBehindWithLatin(): void;
    lookBehindWithCJK(): void;
    lookBehindWithEmoji(): void;
    asciiContentsShouldUse8BitBuffer(): void;
    bmpContentsShouldUse16BitBuffer(): void;
    smpContentsShouldUse32BitBuffer(): void;
}
