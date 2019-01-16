/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
export declare class TestIntervalSet {
    testSingleElement(): void;
    testMin(): void;
    testIsolatedElements(): void;
    testMixedRangesAndElements(): void;
    testSimpleAnd(): void;
    testRangeAndIsolatedElement(): void;
    testEmptyIntersection(): void;
    testEmptyIntersectionSingleElements(): void;
    testNotSingleElement(): void;
    testNotSet(): void;
    testNotEqualSet(): void;
    testNotSetEdgeElement(): void;
    testNotSetFragmentedVocabulary(): void;
    testSubtractOfCompletelyContainedRange(): void;
    testSubtractFromSetWithEOF(): void;
    testSubtractOfOverlappingRangeFromLeft(): void;
    testSubtractOfOverlappingRangeFromRight(): void;
    testSubtractOfCompletelyCoveredRange(): void;
    testSubtractOfRangeSpanningMultipleRanges(): void;
    /** The following was broken:
     * 	{0..113, 115..65534}-{0..115, 117..65534}=116..65534
     */
    testSubtractOfWackyRange(): void;
    testSimpleEquals(): void;
    testEquals(): void;
    testSingleElementMinusDisjointSet(): void;
    testMembership(): void;
    testIntersectionWithTwoContainedElements(): void;
    testIntersectionWithTwoContainedElementsReversed(): void;
    testComplement(): void;
    testComplement2(): void;
    testComplement3(): void;
    testMergeOfRangesAndSingleValues(): void;
    testMergeOfRangesAndSingleValuesReverse(): void;
    testMergeWhereAdditionMergesTwoExistingIntervals(): void;
    /**
     * This case is responsible for antlr/antlr4#153.
     * https://github.com/antlr/antlr4/issues/153
     */
    testMergeWhereAdditionMergesThreeExistingIntervals(): void;
    testMergeWithDoubleOverlap(): void;
    testSize(): void;
    testToArray(): void;
    /** The following was broken:
     *   {'\u0000'..'s', 'u'..'\uFFFE'} & {'\u0000'..'q', 's'..'\uFFFE'}=
     *   {'\u0000'..'q', 's'}!!!! broken...
     *   'q' is 113 ascii
     *   'u' is 117
     */
    testNotRIntersectionNotT(): void;
    testRmSingleElement(): void;
    testRmLeftSide(): void;
    testRmRightSide(): void;
    testRmMiddleRange(): void;
    testEmptyIsNil(): void;
    testNotEmptyIsNotNil(): void;
}
