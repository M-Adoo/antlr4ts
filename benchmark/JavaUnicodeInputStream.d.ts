/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { CharStream } from "../src/CharStream";
import { Interval } from "../src/misc/Interval";
/**
 *
 * @author Sam Harwell
 */
export declare class JavaUnicodeInputStream implements CharStream {
    private source;
    private escapeIndexes;
    private escapeCharacters;
    private escapeIndirectionLevels;
    private escapeListIndex;
    private range;
    private slashCount;
    private la1;
    constructor(source: CharStream);
    readonly size: number;
    readonly index: number;
    readonly sourceName: string;
    getText(interval: Interval): string;
    consume(): void;
    LA(i: number): number;
    mark(): number;
    release(marker: number): void;
    seek(index: number): void;
    private static isHexDigit(c);
    private static hexValue(c);
    private readCharAt(nextIndexPtr, slashCountPtr, indirectionLevelPtr);
}
