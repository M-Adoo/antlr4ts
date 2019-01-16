/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class contains tests for specific API functionality in `TokenStream` and derived types.
 */
export declare class TestTokenStream {
    /**
     * This is a targeted regression test for antlr/antlr4#1584 (`BufferedTokenStream` cannot be reused after EOF).
     */
    testBufferedTokenStreamReuseAfterFill(): void;
}
