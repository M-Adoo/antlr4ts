/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
export declare class TestIntegerList {
    emptyListToEmptyCharArray(): void;
    negativeIntegerToCharArrayThrows(): void;
    surrogateRangeIntegerToCharArray(): void;
    tooLargeIntegerToCharArrayThrows(): void;
    unicodeBMPIntegerListToCharArray(): void;
    unicodeSMPIntegerListToCharArray(): void;
}
