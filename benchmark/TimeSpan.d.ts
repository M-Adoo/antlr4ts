/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
export declare class TimeSpan {
    readonly seconds: number;
    readonly nanos: number;
    constructor(seconds: number, nanos: number);
    static fromMilliseconds(millis: number): TimeSpan;
    readonly totalMilliseconds: number;
    readonly totalMicroseconds: number;
}
export declare namespace TimeSpan {
    const MILLIS_PER_SECOND: number;
    const MICROS_PER_SECOND: number;
    const NANOS_PER_SECOND: number;
    const NANOS_PER_MICROSECOND: number;
    const NANOS_PER_MILLISECOND: number;
}
