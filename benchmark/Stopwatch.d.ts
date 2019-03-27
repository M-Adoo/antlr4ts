/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { TimeSpan } from "./TimeSpan";
export declare class Stopwatch {
    private _elapsed;
    private _start?;
    static startNew(): Stopwatch;
    start(): void;
    elapsed(): TimeSpan;
    elapsedMillis(): number;
}
