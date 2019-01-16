/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:49.0828748-07:00
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Override } from "./Decorators";
import { IntStream } from "./IntStream";
var READ_BUFFER_SIZE = 1024;
var INITIAL_BUFFER_SIZE = 1024;
/**
 * Vacuum all input from a {@link Reader}/{@link InputStream} and then treat it
 * like a `char[]` buffer. Can also pass in a {@link String} or
 * `char[]` to use.
 *
 * If you need encoding, pass in stream/reader with correct encoding.
 */
var ANTLRInputStream = /** @class */ (function () {
    /** Copy data in string to a local char array */
    function ANTLRInputStream(input) {
        /** 0..n-1 index into string of next char */
        this.p = 0;
        this.data = input;
        this.n = input.length;
    }
    /** Reset the stream so that it's in the same state it was
     *  when the object was created *except* the data array is not
     *  touched.
     */
    ANTLRInputStream.prototype.reset = function () {
        this.p = 0;
    };
    ANTLRInputStream.prototype.consume = function () {
        if (this.p >= this.n) {
            // assert(this.LA(1) === IntStream.EOF);
            throw new Error("cannot consume EOF");
        }
        //System.out.println("prev p="+p+", c="+(char)data[p]);
        if (this.p < this.n) {
            this.p++;
            //System.out.println("p moves to "+p+" (c='"+(char)data[p]+"')");
        }
    };
    ANTLRInputStream.prototype.LA = function (i) {
        if (i === 0) {
            return 0; // undefined
        }
        if (i < 0) {
            i++; // e.g., translate LA(-1) to use offset i=0; then data[p+0-1]
            if ((this.p + i - 1) < 0) {
                return IntStream.EOF; // invalid; no char before first char
            }
        }
        if ((this.p + i - 1) >= this.n) {
            //System.out.println("char LA("+i+")=EOF; p="+p);
            return IntStream.EOF;
        }
        //System.out.println("char LA("+i+")="+(char)data[p+i-1]+"; p="+p);
        //System.out.println("LA("+i+"); p="+p+" n="+n+" data.length="+data.length);
        return this.data.charCodeAt(this.p + i - 1);
    };
    ANTLRInputStream.prototype.LT = function (i) {
        return this.LA(i);
    };
    Object.defineProperty(ANTLRInputStream.prototype, "index", {
        /** Return the current input symbol index 0..n where n indicates the
         *  last symbol has been read.  The index is the index of char to
         *  be returned from LA(1).
         */
        get: function () {
            return this.p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANTLRInputStream.prototype, "size", {
        get: function () {
            return this.n;
        },
        enumerable: true,
        configurable: true
    });
    /** mark/release do nothing; we have entire buffer */
    ANTLRInputStream.prototype.mark = function () {
        return -1;
    };
    ANTLRInputStream.prototype.release = function (marker) {
        // No default implementation since this stream buffers the entire input
    };
    /** consume() ahead until p==index; can't just set p=index as we must
     *  update line and charPositionInLine. If we seek backwards, just set p
     */
    ANTLRInputStream.prototype.seek = function (index) {
        if (index <= this.p) {
            this.p = index; // just jump; don't update stream state (line, ...)
            return;
        }
        // seek forward, consume until p hits index or n (whichever comes first)
        index = Math.min(index, this.n);
        while (this.p < index) {
            this.consume();
        }
    };
    ANTLRInputStream.prototype.getText = function (interval) {
        var start = interval.a;
        var stop = interval.b;
        if (stop >= this.n) {
            stop = this.n - 1;
        }
        var count = stop - start + 1;
        if (start >= this.n) {
            return "";
        }
        // System.err.println("data: "+Arrays.toString(data)+", n="+n+
        // 				   ", start="+start+
        // 				   ", stop="+stop);
        return this.data.substr(start, count);
    };
    Object.defineProperty(ANTLRInputStream.prototype, "sourceName", {
        get: function () {
            if (!this.name) {
                return IntStream.UNKNOWN_SOURCE_NAME;
            }
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    ANTLRInputStream.prototype.toString = function () { return this.data; };
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "consume", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "LA", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "index", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "size", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "mark", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "release", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "seek", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "getText", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "sourceName", null);
    __decorate([
        Override
    ], ANTLRInputStream.prototype, "toString", null);
    return ANTLRInputStream;
}());
export { ANTLRInputStream };
//# sourceMappingURL=ANTLRInputStream.js.map