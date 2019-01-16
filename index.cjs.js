'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
function NotNull(target, propertyKey, propertyDescriptor) {
    // intentionally empty
}
function Nullable(target, propertyKey, propertyDescriptor) {
    // intentionally empty
}
function Override(target, propertyKey, propertyDescriptor) {
    // do something with 'target' ...
}
function SuppressWarnings(options) {
    return function (target, propertyKey, descriptor) {
        // intentionally empty
    };
}

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
(function (IntStream) {
    /**
     * The value returned by {@link #LA LA()} when the end of the stream is
     * reached.
     */
    IntStream.EOF = -1;
    /**
     * The value returned by {@link #getSourceName} when the actual name of the
     * underlying source is not known.
     */
    IntStream.UNKNOWN_SOURCE_NAME = "<unknown>";
})(exports.IntStream || (exports.IntStream = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
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
                return exports.IntStream.EOF; // invalid; no char before first char
            }
        }
        if ((this.p + i - 1) >= this.n) {
            //System.out.println("char LA("+i+")=EOF; p="+p);
            return exports.IntStream.EOF;
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
                return exports.IntStream.UNKNOWN_SOURCE_NAME;
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

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:27.4734328-07:00
var ATNStateType;
(function (ATNStateType) {
    ATNStateType[ATNStateType["INVALID_TYPE"] = 0] = "INVALID_TYPE";
    ATNStateType[ATNStateType["BASIC"] = 1] = "BASIC";
    ATNStateType[ATNStateType["RULE_START"] = 2] = "RULE_START";
    ATNStateType[ATNStateType["BLOCK_START"] = 3] = "BLOCK_START";
    ATNStateType[ATNStateType["PLUS_BLOCK_START"] = 4] = "PLUS_BLOCK_START";
    ATNStateType[ATNStateType["STAR_BLOCK_START"] = 5] = "STAR_BLOCK_START";
    ATNStateType[ATNStateType["TOKEN_START"] = 6] = "TOKEN_START";
    ATNStateType[ATNStateType["RULE_STOP"] = 7] = "RULE_STOP";
    ATNStateType[ATNStateType["BLOCK_END"] = 8] = "BLOCK_END";
    ATNStateType[ATNStateType["STAR_LOOP_BACK"] = 9] = "STAR_LOOP_BACK";
    ATNStateType[ATNStateType["STAR_LOOP_ENTRY"] = 10] = "STAR_LOOP_ENTRY";
    ATNStateType[ATNStateType["PLUS_LOOP_BACK"] = 11] = "PLUS_LOOP_BACK";
    ATNStateType[ATNStateType["LOOP_END"] = 12] = "LOOP_END";
})(ATNStateType || (ATNStateType = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** The root of the ANTLR exception hierarchy. In general, ANTLR tracks just
 *  3 kinds of errors: prediction errors, failed predicate errors, and
 *  mismatched input errors. In each case, the parser knows where it is
 *  in the input, where it is in the ATN, the rule invocation stack,
 *  and what kind of problem occurred.
 */
var RecognitionException = /** @class */ (function (_super) {
    __extends(RecognitionException, _super);
    function RecognitionException(recognizer, input, ctx, message) {
        var _this = _super.call(this, message) || this;
        _this._offendingState = -1;
        _this._recognizer = recognizer;
        _this.input = input;
        _this.ctx = ctx;
        if (recognizer) {
            _this._offendingState = recognizer.state;
        }
        return _this;
    }
    Object.defineProperty(RecognitionException.prototype, "offendingState", {
        /**
         * Get the ATN state number the parser was in at the time the error
         * occurred. For {@link NoViableAltException} and
         * {@link LexerNoViableAltException} exceptions, this is the
         * {@link DecisionState} number. For others, it is the state whose outgoing
         * edge we couldn't match.
         *
         * If the state number is not known, this method returns -1.
         */
        get: function () {
            return this._offendingState;
        },
        enumerable: true,
        configurable: true
    });
    RecognitionException.prototype.setOffendingState = function (offendingState) {
        this._offendingState = offendingState;
    };
    Object.defineProperty(RecognitionException.prototype, "expectedTokens", {
        /**
         * Gets the set of input symbols which could potentially follow the
         * previously matched symbol at the time this exception was thrown.
         *
         * If the set of expected tokens is not known and could not be computed,
         * this method returns `undefined`.
         *
         * @returns The set of token types that could potentially follow the current
         * state in the ATN, or `undefined` if the information is not available.
         */
        get: function () {
            if (this._recognizer) {
                return this._recognizer.atn.getExpectedTokens(this._offendingState, this.ctx);
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionException.prototype, "context", {
        /**
         * Gets the {@link RuleContext} at the time this exception was thrown.
         *
         * If the context is not available, this method returns `undefined`.
         *
         * @returns The {@link RuleContext} at the time this exception was thrown.
         * If the context is not available, this method returns `undefined`.
         */
        get: function () {
            return this.ctx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionException.prototype, "inputStream", {
        /**
         * Gets the input stream which is the symbol source for the recognizer where
         * this exception was thrown.
         *
         * If the input stream is not available, this method returns `undefined`.
         *
         * @returns The input stream which is the symbol source for the recognizer
         * where this exception was thrown, or `undefined` if the stream is not
         * available.
         */
        get: function () {
            return this.input;
        },
        enumerable: true,
        configurable: true
    });
    RecognitionException.prototype.getOffendingToken = function (recognizer) {
        if (recognizer && recognizer !== this._recognizer) {
            return undefined;
        }
        return this.offendingToken;
    };
    RecognitionException.prototype.setOffendingToken = function (recognizer, offendingToken) {
        if (recognizer === this._recognizer) {
            this.offendingToken = offendingToken;
        }
    };
    Object.defineProperty(RecognitionException.prototype, "recognizer", {
        /**
         * Gets the {@link Recognizer} where this exception occurred.
         *
         * If the recognizer is not available, this method returns `undefined`.
         *
         * @returns The recognizer where this exception occurred, or `undefined` if
         * the recognizer is not available.
         */
        get: function () {
            return this._recognizer;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionException;
}(Error));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** An ATN transition between any two ATN states.  Subclasses define
 *  atom, set, epsilon, action, predicate, rule transitions.
 *
 *  This is a one way link.  It emanates from a state (usually via a list of
 *  transitions) and has a target state.
 *
 *  Since we never have to change the ATN transitions once we construct it,
 *  we can fix these transitions as specific classes. The DFA transitions
 *  on the other hand need to update the labels as it adds transitions to
 *  the states. We'll use the term Edge for the DFA to distinguish them from
 *  ATN transitions.
 */
var Transition = /** @class */ (function () {
    function Transition(target) {
        if (target == null) {
            throw new Error("target cannot be null.");
        }
        this.target = target;
    }
    Object.defineProperty(Transition.prototype, "isEpsilon", {
        /**
         * Determines if the transition is an "epsilon" transition.
         *
         * The default implementation returns `false`.
         *
         * @returns `true` if traversing this transition in the ATN does not
         * consume an input symbol; otherwise, `false` if traversing this
         * transition consumes (matches) an input symbol.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transition.prototype, "label", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Transition.serializationNames = [
        "INVALID",
        "EPSILON",
        "RANGE",
        "RULE",
        "PREDICATE",
        "ATOM",
        "ACTION",
        "SET",
        "NOT_SET",
        "WILDCARD",
        "PRECEDENCE",
    ];
    __decorate([
        NotNull
    ], Transition.prototype, "target", void 0);
    Transition = __decorate([
        __param(0, NotNull)
    ], Transition);
    return Transition;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var AbstractPredicateTransition = /** @class */ (function (_super) {
    __extends(AbstractPredicateTransition, _super);
    function AbstractPredicateTransition(target) {
        return _super.call(this, target) || this;
    }
    return AbstractPredicateTransition;
}(Transition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var MurmurHash;
(function (MurmurHash) {
    var DEFAULT_SEED = 0;
    /**
     * Initialize the hash using the specified `seed`.
     *
     * @param seed the seed (optional)
     * @returns the intermediate hash value
     */
    function initialize(seed) {
        if (seed === void 0) { seed = DEFAULT_SEED; }
        return seed;
    }
    MurmurHash.initialize = initialize;
    /**
     * Update the intermediate hash value for the next input `value`.
     *
     * @param hash the intermediate hash value
     * @param value the value to add to the current hash
     * @returns the updated intermediate hash value
     */
    function update(hash, value) {
        var c1 = 0xCC9E2D51;
        var c2 = 0x1B873593;
        var r1 = 15;
        var r2 = 13;
        var m = 5;
        var n = 0xE6546B64;
        if (value == null) {
            value = 0;
        }
        else if (typeof value === "string") {
            value = hashString(value);
        }
        else if (typeof value === "object") {
            value = value.hashCode();
        }
        var k = value;
        k = Math.imul(k, c1);
        k = (k << r1) | (k >>> (32 - r1));
        k = Math.imul(k, c2);
        hash = hash ^ k;
        hash = (hash << r2) | (hash >>> (32 - r2));
        hash = Math.imul(hash, m) + n;
        return hash & 0xFFFFFFFF;
    }
    MurmurHash.update = update;
    /**
     * Apply the final computation steps to the intermediate value `hash`
     * to form the final result of the MurmurHash 3 hash function.
     *
     * @param hash the intermediate hash value
     * @param numberOfWords the number of integer values added to the hash
     * @returns the final hash result
     */
    function finish(hash, numberOfWords) {
        hash = hash ^ (numberOfWords * 4);
        hash = hash ^ (hash >>> 16);
        hash = Math.imul(hash, 0x85EBCA6B);
        hash = hash ^ (hash >>> 13);
        hash = Math.imul(hash, 0xC2B2AE35);
        hash = hash ^ (hash >>> 16);
        return hash;
    }
    MurmurHash.finish = finish;
    /**
     * Utility function to compute the hash code of an array using the
     * MurmurHash algorithm.
     *
     * @param <T> the array element type
     * @param data the array data
     * @param seed the seed for the MurmurHash algorithm
     * @returns the hash code of the data
     */
    function hashCode(data, seed) {
        if (seed === void 0) { seed = DEFAULT_SEED; }
        var hash = initialize(seed);
        var length = 0;
        try {
            for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var value = data_1_1.value;
                hash = update(hash, value);
                length++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        hash = finish(hash, length);
        return hash;
        var e_1, _a;
    }
    MurmurHash.hashCode = hashCode;
    /**
     * Function to hash a string. Based on the implementation found here:
     * http://stackoverflow.com/a/7616484
     */
    function hashString(str) {
        var len = str.length;
        if (len === 0) {
            return 0;
        }
        var hash = 0;
        for (var i = 0; i < len; i++) {
            var c = str.charCodeAt(i);
            hash = (((hash << 5) >>> 0) - hash) + c;
            hash |= 0;
        }
        return hash;
    }
})(MurmurHash || (MurmurHash = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
var ObjectEqualityComparator = /** @class */ (function () {
    function ObjectEqualityComparator() {
    }
    /**
     * {@inheritDoc}
     *
     * This implementation returns
     * `obj.`{@link Object#hashCode hashCode()}.
     */
    ObjectEqualityComparator.prototype.hashCode = function (obj) {
        if (obj == null) {
            return 0;
        }
        return obj.hashCode();
    };
    /**
     * {@inheritDoc}
     *
     * This implementation relies on object equality. If both objects are
     * `undefined` or `null`, this method returns `true`. Otherwise if only
     * `a` is `undefined` or `null`, this method returns `false`. Otherwise,
     * this method returns the result of
     * `a.`{@link Object#equals equals}`(b)`.
     */
    ObjectEqualityComparator.prototype.equals = function (a, b) {
        if (a == null) {
            return b == null;
        }
        return a.equals(b);
    };
    ObjectEqualityComparator.INSTANCE = new ObjectEqualityComparator();
    __decorate([
        Override
    ], ObjectEqualityComparator.prototype, "hashCode", null);
    __decorate([
        Override
    ], ObjectEqualityComparator.prototype, "equals", null);
    return ObjectEqualityComparator;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
var DefaultEqualityComparator = /** @class */ (function () {
    function DefaultEqualityComparator() {
    }
    /**
     * {@inheritDoc}
     *
     * This implementation returns
     * `obj.`{@link Object#hashCode hashCode()}.
     */
    DefaultEqualityComparator.prototype.hashCode = function (obj) {
        if (obj == null) {
            return 0;
        }
        else if (typeof obj === "string" || typeof obj === "number") {
            return MurmurHash.hashCode([obj]);
        }
        else {
            return ObjectEqualityComparator.INSTANCE.hashCode(obj);
        }
    };
    /**
     * {@inheritDoc}
     *
     * This implementation relies on object equality. If both objects are
     * `undefined` or `null`, this method returns `true`. Otherwise if only
     * `a` is `undefined` or `null`, this method returns `false`. Otherwise,
     * this method returns the result of
     * `a.`{@link Object#equals equals}`(b)`.
     */
    DefaultEqualityComparator.prototype.equals = function (a, b) {
        if (a == null) {
            return b == null;
        }
        else if (typeof a === "string" || typeof a === "number") {
            return a === b;
        }
        else {
            return ObjectEqualityComparator.INSTANCE.equals(a, b);
        }
    };
    DefaultEqualityComparator.INSTANCE = new DefaultEqualityComparator();
    __decorate([
        Override
    ], DefaultEqualityComparator.prototype, "hashCode", null);
    __decorate([
        Override
    ], DefaultEqualityComparator.prototype, "equals", null);
    return DefaultEqualityComparator;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** {@link Set} implementation with closed hashing (open addressing). */
// NOTE:  JavaScript's Set interface has on significant different diffrence from Java's:
// 		  e.g. the return type of add() differs!
//        For this reason I've commented tweaked the implements clause
var INITAL_CAPACITY = 16; // must be power of 2
var LOAD_FACTOR = 0.75;
var Array2DHashSet = /** @class */ (function () {
    function Array2DHashSet(comparatorOrSet, initialCapacity) {
        if (initialCapacity === void 0) { initialCapacity = INITAL_CAPACITY; }
        /** How many elements in set */
        this.n = 0;
        this.threshold = Math.floor(INITAL_CAPACITY * LOAD_FACTOR); // when to expand
        if (comparatorOrSet instanceof Array2DHashSet) {
            this.comparator = comparatorOrSet.comparator;
            this.buckets = comparatorOrSet.buckets.slice(0);
            for (var i = 0; i < this.buckets.length; i++) {
                var bucket = this.buckets[i];
                if (bucket) {
                    this.buckets[i] = bucket.slice(0);
                }
            }
            this.n = comparatorOrSet.n;
            this.threshold = comparatorOrSet.threshold;
        }
        else {
            this.comparator = comparatorOrSet || DefaultEqualityComparator.INSTANCE;
            this.buckets = this.createBuckets(initialCapacity);
        }
    }
    /**
     * Add `o` to set if not there; return existing value if already
     * there. This method performs the same operation as {@link #add} aside from
     * the return value.
     */
    Array2DHashSet.prototype.getOrAdd = function (o) {
        if (this.n > this.threshold) {
            this.expand();
        }
        return this.getOrAddImpl(o);
    };
    Array2DHashSet.prototype.getOrAddImpl = function (o) {
        var b = this.getBucket(o);
        var bucket = this.buckets[b];
        // NEW BUCKET
        if (!bucket) {
            bucket = [o];
            this.buckets[b] = bucket;
            this.n++;
            return o;
        }
        try {
            // LOOK FOR IT IN BUCKET
            for (var bucket_1 = __values(bucket), bucket_1_1 = bucket_1.next(); !bucket_1_1.done; bucket_1_1 = bucket_1.next()) {
                var existing = bucket_1_1.value;
                if (this.comparator.equals(existing, o)) {
                    return existing; // found existing, quit
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (bucket_1_1 && !bucket_1_1.done && (_a = bucket_1.return)) _a.call(bucket_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // FULL BUCKET, expand and add to end
        bucket.push(o);
        this.n++;
        return o;
        var e_1, _a;
    };
    Array2DHashSet.prototype.get = function (o) {
        if (o == null) {
            return o;
        }
        var b = this.getBucket(o);
        var bucket = this.buckets[b];
        if (!bucket) {
            // no bucket
            return undefined;
        }
        try {
            for (var bucket_2 = __values(bucket), bucket_2_1 = bucket_2.next(); !bucket_2_1.done; bucket_2_1 = bucket_2.next()) {
                var e = bucket_2_1.value;
                if (this.comparator.equals(e, o)) {
                    return e;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (bucket_2_1 && !bucket_2_1.done && (_a = bucket_2.return)) _a.call(bucket_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
        var e_2, _a;
    };
    Array2DHashSet.prototype.getBucket = function (o) {
        var hash = this.comparator.hashCode(o);
        var b = hash & (this.buckets.length - 1); // assumes len is power of 2
        return b;
    };
    Array2DHashSet.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        try {
            for (var _a = __values(this.buckets), _b = _a.next(); !_b.done; _b = _a.next()) {
                var bucket = _b.value;
                if (bucket == null) {
                    continue;
                }
                try {
                    for (var bucket_3 = __values(bucket), bucket_3_1 = bucket_3.next(); !bucket_3_1.done; bucket_3_1 = bucket_3.next()) {
                        var o = bucket_3_1.value;
                        if (o == null) {
                            break;
                        }
                        hash = MurmurHash.update(hash, this.comparator.hashCode(o));
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (bucket_3_1 && !bucket_3_1.done && (_c = bucket_3.return)) _c.call(bucket_3);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        hash = MurmurHash.finish(hash, this.size);
        return hash;
        var e_4, _d, e_3, _c;
    };
    Array2DHashSet.prototype.equals = function (o) {
        if (o === this) {
            return true;
        }
        if (!(o instanceof Array2DHashSet)) {
            return false;
        }
        if (o.size !== this.size) {
            return false;
        }
        var same = this.containsAll(o);
        return same;
    };
    Array2DHashSet.prototype.expand = function () {
        var old = this.buckets;
        var newCapacity = this.buckets.length * 2;
        var newTable = this.createBuckets(newCapacity);
        this.buckets = newTable;
        this.threshold = Math.floor(newCapacity * LOAD_FACTOR);
        //		System.out.println("new size="+newCapacity+", thres="+threshold);
        // rehash all existing entries
        var oldSize = this.size;
        try {
            for (var old_1 = __values(old), old_1_1 = old_1.next(); !old_1_1.done; old_1_1 = old_1.next()) {
                var bucket = old_1_1.value;
                if (!bucket) {
                    continue;
                }
                try {
                    for (var bucket_4 = __values(bucket), bucket_4_1 = bucket_4.next(); !bucket_4_1.done; bucket_4_1 = bucket_4.next()) {
                        var o = bucket_4_1.value;
                        var b = this.getBucket(o);
                        var newBucket = this.buckets[b];
                        if (!newBucket) {
                            newBucket = [];
                            this.buckets[b] = newBucket;
                        }
                        newBucket.push(o);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (bucket_4_1 && !bucket_4_1.done && (_a = bucket_4.return)) _a.call(bucket_4);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (old_1_1 && !old_1_1.done && (_b = old_1.return)) _b.call(old_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        var e_6, _b, e_5, _a;
        // assert(this.n === oldSize);
    };
    Array2DHashSet.prototype.add = function (t) {
        var existing = this.getOrAdd(t);
        return existing === t;
    };
    Object.defineProperty(Array2DHashSet.prototype, "size", {
        get: function () {
            return this.n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Array2DHashSet.prototype, "isEmpty", {
        get: function () {
            return this.n === 0;
        },
        enumerable: true,
        configurable: true
    });
    Array2DHashSet.prototype.contains = function (o) {
        return this.containsFast(this.asElementType(o));
    };
    Array2DHashSet.prototype.containsFast = function (obj) {
        if (obj == null) {
            return false;
        }
        return this.get(obj) != null;
    };
    Array2DHashSet.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, __values(this.toArray())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    Array2DHashSet.prototype.toArray = function () {
        var a = new Array(this.size);
        // Copy elements from the nested arrays into the destination array
        var i = 0; // Position within destination array
        try {
            for (var _a = __values(this.buckets), _b = _a.next(); !_b.done; _b = _a.next()) {
                var bucket = _b.value;
                if (bucket == null) {
                    continue;
                }
                try {
                    for (var bucket_5 = __values(bucket), bucket_5_1 = bucket_5.next(); !bucket_5_1.done; bucket_5_1 = bucket_5.next()) {
                        var o = bucket_5_1.value;
                        if (o == null) {
                            break;
                        }
                        a[i++] = o;
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (bucket_5_1 && !bucket_5_1.done && (_c = bucket_5.return)) _c.call(bucket_5);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return a;
        var e_8, _d, e_7, _c;
    };
    Array2DHashSet.prototype.containsAll = function (collection) {
        if (collection instanceof Array2DHashSet) {
            var s = collection;
            try {
                for (var _a = __values(s.buckets), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var bucket = _b.value;
                    if (bucket == null) {
                        continue;
                    }
                    try {
                        for (var bucket_6 = __values(bucket), bucket_6_1 = bucket_6.next(); !bucket_6_1.done; bucket_6_1 = bucket_6.next()) {
                            var o = bucket_6_1.value;
                            if (o == null) {
                                break;
                            }
                            if (!this.containsFast(this.asElementType(o))) {
                                return false;
                            }
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (bucket_6_1 && !bucket_6_1.done && (_c = bucket_6.return)) _c.call(bucket_6);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
        else {
            try {
                for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
                    var o = collection_1_1.value;
                    if (!this.containsFast(this.asElementType(o))) {
                        return false;
                    }
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (collection_1_1 && !collection_1_1.done && (_e = collection_1.return)) _e.call(collection_1);
                }
                finally { if (e_11) throw e_11.error; }
            }
        }
        return true;
        var e_10, _d, e_9, _c, e_11, _e;
    };
    Array2DHashSet.prototype.addAll = function (c) {
        var changed = false;
        try {
            for (var c_1 = __values(c), c_1_1 = c_1.next(); !c_1_1.done; c_1_1 = c_1.next()) {
                var o = c_1_1.value;
                var existing = this.getOrAdd(o);
                if (existing !== o) {
                    changed = true;
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (c_1_1 && !c_1_1.done && (_a = c_1.return)) _a.call(c_1);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return changed;
        var e_12, _a;
    };
    Array2DHashSet.prototype.clear = function () {
        this.buckets = this.createBuckets(INITAL_CAPACITY);
        this.n = 0;
        this.threshold = Math.floor(INITAL_CAPACITY * LOAD_FACTOR);
    };
    Array2DHashSet.prototype.toString = function () {
        if (this.size === 0) {
            return "{}";
        }
        var buf = "{";
        var first = true;
        try {
            for (var _a = __values(this.buckets), _b = _a.next(); !_b.done; _b = _a.next()) {
                var bucket = _b.value;
                if (bucket == null) {
                    continue;
                }
                try {
                    for (var bucket_7 = __values(bucket), bucket_7_1 = bucket_7.next(); !bucket_7_1.done; bucket_7_1 = bucket_7.next()) {
                        var o = bucket_7_1.value;
                        if (o == null) {
                            break;
                        }
                        if (first) {
                            first = false;
                        }
                        else {
                            buf += ", ";
                        }
                        buf += o.toString();
                    }
                }
                catch (e_13_1) { e_13 = { error: e_13_1 }; }
                finally {
                    try {
                        if (bucket_7_1 && !bucket_7_1.done && (_c = bucket_7.return)) _c.call(bucket_7);
                    }
                    finally { if (e_13) throw e_13.error; }
                }
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_14) throw e_14.error; }
        }
        buf += "}";
        return buf;
        var e_14, _d, e_13, _c;
    };
    Array2DHashSet.prototype.toTableString = function () {
        var buf = "";
        try {
            for (var _a = __values(this.buckets), _b = _a.next(); !_b.done; _b = _a.next()) {
                var bucket = _b.value;
                if (bucket == null) {
                    buf += "null\n";
                    continue;
                }
                buf += "[";
                var first = true;
                try {
                    for (var bucket_8 = __values(bucket), bucket_8_1 = bucket_8.next(); !bucket_8_1.done; bucket_8_1 = bucket_8.next()) {
                        var o = bucket_8_1.value;
                        if (first) {
                            first = false;
                        }
                        else {
                            buf += " ";
                        }
                        if (o == null) {
                            buf += "_";
                        }
                        else {
                            buf += o.toString();
                        }
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (bucket_8_1 && !bucket_8_1.done && (_c = bucket_8.return)) _c.call(bucket_8);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
                buf += "]\n";
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return buf;
        var e_16, _d, e_15, _c;
    };
    /**
     * Return `o` as an instance of the element type `T`. If
     * `o` is non-undefined but known to not be an instance of `T`, this
     * method returns `undefined`. The base implementation does not perform any
     * type checks; override this method to provide strong type checks for the
     * {@link #contains} and {@link #remove} methods to ensure the arguments to
     * the {@link EqualityComparator} for the set always have the expected
     * types.
     *
     * @param o the object to try and cast to the element type of the set
     * @returns `o` if it could be an instance of `T`, otherwise
     * `undefined`.
     */
    Array2DHashSet.prototype.asElementType = function (o) {
        return o;
    };
    /**
     * Return an array of `T[]` with length `capacity`.
     *
     * @param capacity the length of the array to return
     * @returns the newly constructed array
     */
    Array2DHashSet.prototype.createBuckets = function (capacity) {
        return new Array(capacity);
    };
    __decorate([
        NotNull
    ], Array2DHashSet.prototype, "comparator", void 0);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "hashCode", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "equals", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "add", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "size", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "isEmpty", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "contains", null);
    __decorate([
        __param(0, Nullable)
    ], Array2DHashSet.prototype, "containsFast", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, Symbol.iterator, null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "toArray", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "containsAll", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "addAll", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "clear", null);
    __decorate([
        Override
    ], Array2DHashSet.prototype, "toString", null);
    __decorate([
        SuppressWarnings("unchecked")
    ], Array2DHashSet.prototype, "asElementType", null);
    __decorate([
        SuppressWarnings("unchecked")
    ], Array2DHashSet.prototype, "createBuckets", null);
    return Array2DHashSet;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This default implementation of {@link EqualityComparator} uses object equality
 * for comparisons by calling {@link Object#hashCode} and {@link Object#equals}.
 *
 * @author Sam Harwell
 */
var ArrayEqualityComparator = /** @class */ (function () {
    function ArrayEqualityComparator() {
    }
    /**
     * {@inheritDoc}
     *
     * This implementation returns
     * `obj.`{@link Object#hashCode hashCode()}.
     */
    ArrayEqualityComparator.prototype.hashCode = function (obj) {
        if (obj == null) {
            return 0;
        }
        return MurmurHash.hashCode(obj, 0);
    };
    /**
     * {@inheritDoc}
     *
     * This implementation relies on object equality. If both objects are
     * `undefined`, this method returns `true`. Otherwise if only
     * `a` is `undefined`, this method returns `false`. Otherwise,
     * this method returns the result of
     * `a.`{@link Object#equals equals}`(b)`.
     */
    ArrayEqualityComparator.prototype.equals = function (a, b) {
        if (a == null) {
            return b == null;
        }
        else if (b == null) {
            return false;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!ObjectEqualityComparator.INSTANCE.equals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    };
    ArrayEqualityComparator.INSTANCE = new ArrayEqualityComparator();
    __decorate([
        Override
    ], ArrayEqualityComparator.prototype, "hashCode", null);
    __decorate([
        Override
    ], ArrayEqualityComparator.prototype, "equals", null);
    return ArrayEqualityComparator;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
function escapeWhitespace(s, escapeSpaces) {
    return escapeSpaces ? s.replace(/ /, "\u00B7") : s
        .replace(/\t/, "\\t")
        .replace(/\n/, "\\n")
        .replace(/\r/, "\\r");
}
// Seriously: why isn't this built in to java? ugh!
function join(collection, separator) {
    var buf = "";
    var first = true;
    try {
        for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
            var current = collection_1_1.value;
            if (first) {
                first = false;
            }
            else {
                buf += separator;
            }
            buf += current;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (collection_1_1 && !collection_1_1.done && (_a = collection_1.return)) _a.call(collection_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return buf;
    var e_1, _a;
}
function equals(x, y) {
    if (x === y) {
        return true;
    }
    if (x === undefined || y === undefined) {
        return false;
    }
    return x.equals(y);
}
// export function numNonnull(data: any[]): number {
// 	let n: number =  0;
// 	if ( data == null ) return n;
// 	for (let o of data) {
// 		if ( o!=null ) n++;
// 	}
// 	return n;
// }
// export function removeAllElements<T>(data: Collection<T>, value: T): void {
// 	if ( data==null ) return;
// 	while ( data.contains(value) ) data.remove(value);
// }
// export function writeFile(@NotNull fileName: string, @NotNull content: string): void {
// 	writeFile(fileName, content, null);
// }
// export function writeFile(@NotNull fileName: string, @NotNull content: string, @Nullable encoding: string): void {
// 	let f: File =  new File(fileName);
// 	let fos: FileOutputStream =  new FileOutputStream(f);
// 	let osw: OutputStreamWriter;
// 	if (encoding != null) {
// 		osw = new OutputStreamWriter(fos, encoding);
// 	}
// 	else {
// 		osw = new OutputStreamWriter(fos);
// 	}
// 	try {
// 		osw.write(content);
// 	}
// 	finally {
// 		osw.close();
// 	}
// }
// @NotNull
// export function readFile(@NotNull fileName: string): char[] {
// 	return readFile(fileName, null);
// }
// @NotNull
// export function readFile(@NotNull fileName: string, @Nullable encoding: string): char[] {
// 	let f: File =  new File(fileName);
// 	let size: number =  (int)f.length();
// 	let isr: InputStreamReader;
// 	let fis: FileInputStream =  new FileInputStream(fileName);
// 	if ( encoding!=null ) {
// 		isr = new InputStreamReader(fis, encoding);
// 	}
// 	else {
// 		isr = new InputStreamReader(fis);
// 	}
// 	let data: char[] =  null;
// 	try {
// 		data = new char[size];
// 		let n: number =  isr.read(data);
// 		if (n < data.length) {
// 			data = Arrays.copyOf(data, n);
// 		}
// 	}
// 	finally {
// 		isr.close();
// 	}
// 	return data;
// }
// export function removeAll<T>(@NotNull predicate: List<T> list,@NotNull Predicate<? super T>): void {
// 	let j: number =  0;
// 	for (let i = 0; i < list.size; i++) {
// 		let item: T =  list.get(i);
// 		if (!predicate.eval(item)) {
// 			if (j != i) {
// 				list.set(j, item);
// 			}
// 			j++;
// 		}
// 	}
// 	if (j < list.size) {
// 		list.subList(j, list.size).clear();
// 	}
// }
// export function removeAll<T>(@NotNull predicate: Iterable<T> iterable,@NotNull Predicate<? super T>): void {
// 	if (iterable instanceof List<?>) {
// 		removeAll((List<T>)iterable, predicate);
// 		return;
// 	}
// 	for (Iterator<T> iterator = iterable.iterator(); iterator.hasNext(); ) {
// 		let item: T =  iterator.next();
// 		if (predicate.eval(item)) {
// 			iterator.remove();
// 		}
// 	}
// }
/** Convert array of strings to string&rarr;index map. Useful for
 *  converting rulenames to name&rarr;ruleindex map.
 */
function toMap(keys) {
    var m = new Map();
    for (var i = 0; i < keys.length; i++) {
        m.set(keys[i], i);
    }
    return m;
}
function toCharArray(str) {
    var result = new Uint16Array(str.length);
    for (var i = 0; i < str.length; i++) {
        result[i] = str.charCodeAt(i);
    }
    return result;
}
// export function toCharArray(data: IntegerList): char[] {
// 	if ( data==null ) return null;
// 	let cdata: char[] =  new char[data.size];
// 	for (let i=0; i<data.size; i++) {
// 		cdata[i] = (char)data.get(i);
// 	}
// 	return cdata;
// }
// /**
// 	* @since 4.5
// 	*/
// @NotNull
// export function toSet(@NotNull bits: BitSet): IntervalSet {
// 	let s: IntervalSet =  new IntervalSet();
// 	let i: number =  bits.nextSetBit(0);
// 	while ( i >= 0 ) {
// 		s.add(i);
// 		i = bits.nextSetBit(i+1);
// 	}
// 	return s;
// }

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
function max(items) {
    var result;
    try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var current = items_1_1.value;
            if (result === undefined) {
                result = current;
                continue;
            }
            var comparison = result.compareTo(current);
            if (comparison < 0) {
                result = current;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
    var e_1, _a;
}
function min(items) {
    var result;
    try {
        for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
            var current = items_2_1.value;
            if (result === undefined) {
                result = current;
                continue;
            }
            var comparison = result.compareTo(current);
            if (comparison > 0) {
                result = current;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (items_2_1 && !items_2_1.done && (_a = items_2.return)) _a.call(items_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
    var e_2, _a;
}
/** A tree structure used to record the semantic context in which
 *  an ATN configuration is valid.  It's either a single predicate,
 *  a conjunction `p1&&p2`, or a sum of products `p1||p2`.
 *
 *  I have scoped the {@link AND}, {@link OR}, and {@link Predicate} subclasses of
 *  {@link SemanticContext} within the scope of this outer class.
 */
var SemanticContext = /** @class */ (function () {
    function SemanticContext() {
    }
    Object.defineProperty(SemanticContext, "NONE", {
        /**
         * The default {@link SemanticContext}, which is semantically equivalent to
         * a predicate of the form `{true}?`.
         */
        get: function () {
            if (SemanticContext._NONE === undefined) {
                SemanticContext._NONE = new SemanticContext.Predicate();
            }
            return SemanticContext._NONE;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Evaluate the precedence predicates for the context and reduce the result.
     *
     * @param parser The parser instance.
     * @param parserCallStack
     * @returns The simplified semantic context after precedence predicates are
     * evaluated, which will be one of the following values.
     *
     * * {@link #NONE}: if the predicate simplifies to `true` after
     *   precedence predicates are evaluated.
     * * `undefined`: if the predicate simplifies to `false` after
     *   precedence predicates are evaluated.
     * * `this`: if the semantic context is not changed as a result of
     *   precedence predicate evaluation.
     * * A non-`undefined` {@link SemanticContext}: the new simplified
     *   semantic context after precedence predicates are evaluated.
     */
    SemanticContext.prototype.evalPrecedence = function (parser, parserCallStack) {
        return this;
    };
    SemanticContext.and = function (a, b) {
        if (!a || a === SemanticContext.NONE) {
            return b;
        }
        if (b === SemanticContext.NONE) {
            return a;
        }
        var result = new SemanticContext.AND(a, b);
        if (result.opnds.length === 1) {
            return result.opnds[0];
        }
        return result;
    };
    /**
     *
     *  @see ParserATNSimulator#getPredsForAmbigAlts
     */
    SemanticContext.or = function (a, b) {
        if (!a) {
            return b;
        }
        if (a === SemanticContext.NONE || b === SemanticContext.NONE) {
            return SemanticContext.NONE;
        }
        var result = new SemanticContext.OR(a, b);
        if (result.opnds.length === 1) {
            return result.opnds[0];
        }
        return result;
    };
    return SemanticContext;
}());
(function (SemanticContext) {
    /**
     * This random 30-bit prime represents the value of `AND.class.hashCode()`.
     */
    var AND_HASHCODE = 40363613;
    /**
     * This random 30-bit prime represents the value of `OR.class.hashCode()`.
     */
    var OR_HASHCODE = 486279973;
    function filterPrecedencePredicates(collection) {
        var result = [];
        for (var i = 0; i < collection.length; i++) {
            var context_1 = collection[i];
            if (context_1 instanceof SemanticContext.PrecedencePredicate) {
                result.push(context_1);
                // Remove the item from 'collection' and move i back so we look at the same index again
                collection.splice(i, 1);
                i--;
            }
        }
        return result;
    }
    var Predicate = /** @class */ (function (_super) {
        __extends(Predicate, _super);
        function Predicate(ruleIndex, predIndex, isCtxDependent) {
            if (ruleIndex === void 0) { ruleIndex = -1; }
            if (predIndex === void 0) { predIndex = -1; }
            if (isCtxDependent === void 0) { isCtxDependent = false; }
            var _this = _super.call(this) || this;
            _this.ruleIndex = ruleIndex;
            _this.predIndex = predIndex;
            _this.isCtxDependent = isCtxDependent;
            return _this;
        }
        Predicate.prototype.eval = function (parser, parserCallStack) {
            var localctx = this.isCtxDependent ? parserCallStack : undefined;
            return parser.sempred(localctx, this.ruleIndex, this.predIndex);
        };
        Predicate.prototype.hashCode = function () {
            var hashCode = MurmurHash.initialize();
            hashCode = MurmurHash.update(hashCode, this.ruleIndex);
            hashCode = MurmurHash.update(hashCode, this.predIndex);
            hashCode = MurmurHash.update(hashCode, this.isCtxDependent ? 1 : 0);
            hashCode = MurmurHash.finish(hashCode, 3);
            return hashCode;
        };
        Predicate.prototype.equals = function (obj) {
            if (!(obj instanceof Predicate)) {
                return false;
            }
            if (this === obj) {
                return true;
            }
            return this.ruleIndex === obj.ruleIndex &&
                this.predIndex === obj.predIndex &&
                this.isCtxDependent === obj.isCtxDependent;
        };
        Predicate.prototype.toString = function () {
            return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
        };
        __decorate([
            Override
        ], Predicate.prototype, "eval", null);
        __decorate([
            Override
        ], Predicate.prototype, "hashCode", null);
        __decorate([
            Override
        ], Predicate.prototype, "equals", null);
        __decorate([
            Override
        ], Predicate.prototype, "toString", null);
        return Predicate;
    }(SemanticContext));
    SemanticContext.Predicate = Predicate;
    var PrecedencePredicate = /** @class */ (function (_super) {
        __extends(PrecedencePredicate, _super);
        function PrecedencePredicate(precedence) {
            var _this = _super.call(this) || this;
            _this.precedence = precedence;
            return _this;
        }
        PrecedencePredicate.prototype.eval = function (parser, parserCallStack) {
            return parser.precpred(parserCallStack, this.precedence);
        };
        PrecedencePredicate.prototype.evalPrecedence = function (parser, parserCallStack) {
            if (parser.precpred(parserCallStack, this.precedence)) {
                return SemanticContext.NONE;
            }
            else {
                return undefined;
            }
        };
        PrecedencePredicate.prototype.compareTo = function (o) {
            return this.precedence - o.precedence;
        };
        PrecedencePredicate.prototype.hashCode = function () {
            var hashCode = 1;
            hashCode = 31 * hashCode + this.precedence;
            return hashCode;
        };
        PrecedencePredicate.prototype.equals = function (obj) {
            if (!(obj instanceof PrecedencePredicate)) {
                return false;
            }
            if (this === obj) {
                return true;
            }
            return this.precedence === obj.precedence;
        };
        PrecedencePredicate.prototype.toString = function () {
            return "{" + this.precedence + ">=prec}?";
        };
        __decorate([
            Override
        ], PrecedencePredicate.prototype, "eval", null);
        __decorate([
            Override
        ], PrecedencePredicate.prototype, "evalPrecedence", null);
        __decorate([
            Override
        ], PrecedencePredicate.prototype, "compareTo", null);
        __decorate([
            Override
        ], PrecedencePredicate.prototype, "hashCode", null);
        __decorate([
            Override
        ], PrecedencePredicate.prototype, "equals", null);
        __decorate([
            Override
            // precedence >= _precedenceStack.peek()
        ], PrecedencePredicate.prototype, "toString", null);
        return PrecedencePredicate;
    }(SemanticContext));
    SemanticContext.PrecedencePredicate = PrecedencePredicate;
    /**
     * This is the base class for semantic context "operators", which operate on
     * a collection of semantic context "operands".
     *
     * @since 4.3
     */
    var Operator = /** @class */ (function (_super) {
        __extends(Operator, _super);
        function Operator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Operator;
    }(SemanticContext));
    SemanticContext.Operator = Operator;
    /**
     * A semantic context which is true whenever none of the contained contexts
     * is false.
     */
    var AND = /** @class */ (function (_super) {
        __extends(AND, _super);
        function AND(a, b) {
            var _this = _super.call(this) || this;
            var operands = new Array2DHashSet(ObjectEqualityComparator.INSTANCE);
            if (a instanceof AND) {
                operands.addAll(a.opnds);
            }
            else {
                operands.add(a);
            }
            if (b instanceof AND) {
                operands.addAll(b.opnds);
            }
            else {
                operands.add(b);
            }
            _this.opnds = operands.toArray();
            var precedencePredicates = filterPrecedencePredicates(_this.opnds);
            // interested in the transition with the lowest precedence
            var reduced = min(precedencePredicates);
            if (reduced) {
                _this.opnds.push(reduced);
            }
            return _this;
        }
        Object.defineProperty(AND.prototype, "operands", {
            get: function () {
                return this.opnds;
            },
            enumerable: true,
            configurable: true
        });
        AND.prototype.equals = function (obj) {
            if (this === obj) {
                return true;
            }
            if (!(obj instanceof AND)) {
                return false;
            }
            return ArrayEqualityComparator.INSTANCE.equals(this.opnds, obj.opnds);
        };
        AND.prototype.hashCode = function () {
            return MurmurHash.hashCode(this.opnds, AND_HASHCODE);
        };
        /**
         * {@inheritDoc}
         *
         * The evaluation of predicates by this context is short-circuiting, but
         * unordered.
         */
        AND.prototype.eval = function (parser, parserCallStack) {
            try {
                for (var _a = __values(this.opnds), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var opnd = _b.value;
                    if (!opnd.eval(parser, parserCallStack)) {
                        return false;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return true;
            var e_3, _c;
        };
        AND.prototype.evalPrecedence = function (parser, parserCallStack) {
            var differs = false;
            var operands = [];
            try {
                for (var _a = __values(this.opnds), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var context_2 = _b.value;
                    var evaluated = context_2.evalPrecedence(parser, parserCallStack);
                    differs = differs || (evaluated !== context_2);
                    if (evaluated == null) {
                        // The AND context is false if any element is false
                        return undefined;
                    }
                    else if (evaluated !== SemanticContext.NONE) {
                        // Reduce the result by skipping true elements
                        operands.push(evaluated);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_4) throw e_4.error; }
            }
            if (!differs) {
                return this;
            }
            if (operands.length === 0) {
                // all elements were true, so the AND context is true
                return SemanticContext.NONE;
            }
            var result = operands[0];
            for (var i = 1; i < operands.length; i++) {
                result = SemanticContext.and(result, operands[i]);
            }
            return result;
            var e_4, _c;
        };
        AND.prototype.toString = function () {
            return join(this.opnds, "&&");
        };
        __decorate([
            Override
        ], AND.prototype, "operands", null);
        __decorate([
            Override
        ], AND.prototype, "equals", null);
        __decorate([
            Override
        ], AND.prototype, "hashCode", null);
        __decorate([
            Override
        ], AND.prototype, "eval", null);
        __decorate([
            Override
        ], AND.prototype, "evalPrecedence", null);
        __decorate([
            Override
        ], AND.prototype, "toString", null);
        AND = __decorate([
            __param(0, NotNull), __param(1, NotNull)
        ], AND);
        return AND;
    }(Operator));
    SemanticContext.AND = AND;
    /**
     * A semantic context which is true whenever at least one of the contained
     * contexts is true.
     */
    var OR = /** @class */ (function (_super) {
        __extends(OR, _super);
        function OR(a, b) {
            var _this = _super.call(this) || this;
            var operands = new Array2DHashSet(ObjectEqualityComparator.INSTANCE);
            if (a instanceof OR) {
                operands.addAll(a.opnds);
            }
            else {
                operands.add(a);
            }
            if (b instanceof OR) {
                operands.addAll(b.opnds);
            }
            else {
                operands.add(b);
            }
            _this.opnds = operands.toArray();
            var precedencePredicates = filterPrecedencePredicates(_this.opnds);
            // interested in the transition with the highest precedence
            var reduced = max(precedencePredicates);
            if (reduced) {
                _this.opnds.push(reduced);
            }
            return _this;
        }
        Object.defineProperty(OR.prototype, "operands", {
            get: function () {
                return this.opnds;
            },
            enumerable: true,
            configurable: true
        });
        OR.prototype.equals = function (obj) {
            if (this === obj) {
                return true;
            }
            if (!(obj instanceof OR)) {
                return false;
            }
            return ArrayEqualityComparator.INSTANCE.equals(this.opnds, obj.opnds);
        };
        OR.prototype.hashCode = function () {
            return MurmurHash.hashCode(this.opnds, OR_HASHCODE);
        };
        /**
         * {@inheritDoc}
         *
         * The evaluation of predicates by this context is short-circuiting, but
         * unordered.
         */
        OR.prototype.eval = function (parser, parserCallStack) {
            try {
                for (var _a = __values(this.opnds), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var opnd = _b.value;
                    if (opnd.eval(parser, parserCallStack)) {
                        return true;
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return false;
            var e_5, _c;
        };
        OR.prototype.evalPrecedence = function (parser, parserCallStack) {
            var differs = false;
            var operands = [];
            try {
                for (var _a = __values(this.opnds), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var context_3 = _b.value;
                    var evaluated = context_3.evalPrecedence(parser, parserCallStack);
                    differs = differs || (evaluated !== context_3);
                    if (evaluated === SemanticContext.NONE) {
                        // The OR context is true if any element is true
                        return SemanticContext.NONE;
                    }
                    else if (evaluated) {
                        // Reduce the result by skipping false elements
                        operands.push(evaluated);
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_6) throw e_6.error; }
            }
            if (!differs) {
                return this;
            }
            if (operands.length === 0) {
                // all elements were false, so the OR context is false
                return undefined;
            }
            var result = operands[0];
            for (var i = 1; i < operands.length; i++) {
                result = SemanticContext.or(result, operands[i]);
            }
            return result;
            var e_6, _c;
        };
        OR.prototype.toString = function () {
            return join(this.opnds, "||");
        };
        __decorate([
            Override
        ], OR.prototype, "operands", null);
        __decorate([
            Override
        ], OR.prototype, "equals", null);
        __decorate([
            Override
        ], OR.prototype, "hashCode", null);
        __decorate([
            Override
        ], OR.prototype, "eval", null);
        __decorate([
            Override
        ], OR.prototype, "evalPrecedence", null);
        __decorate([
            Override
        ], OR.prototype, "toString", null);
        OR = __decorate([
            __param(0, NotNull), __param(1, NotNull)
        ], OR);
        return OR;
    }(Operator));
    SemanticContext.OR = OR;
})(SemanticContext || (SemanticContext = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** TODO: this is old comment:
 *  A tree of semantic predicates from the grammar AST if label==SEMPRED.
 *  In the ATN, labels will always be exactly one predicate, but the DFA
 *  may have to combine a bunch of them as it collects predicates from
 *  multiple ATN configurations into a single DFA state.
 */
var PredicateTransition = /** @class */ (function (_super) {
    __extends(PredicateTransition, _super);
    function PredicateTransition(target, ruleIndex, predIndex, isCtxDependent) {
        var _this = _super.call(this, target) || this;
        _this.ruleIndex = ruleIndex;
        _this.predIndex = predIndex;
        _this.isCtxDependent = isCtxDependent;
        return _this;
    }
    Object.defineProperty(PredicateTransition.prototype, "serializationType", {
        get: function () {
            return 4 /* PREDICATE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredicateTransition.prototype, "isEpsilon", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    PredicateTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    };
    Object.defineProperty(PredicateTransition.prototype, "predicate", {
        get: function () {
            return new SemanticContext.Predicate(this.ruleIndex, this.predIndex, this.isCtxDependent);
        },
        enumerable: true,
        configurable: true
    });
    PredicateTransition.prototype.toString = function () {
        return "pred_" + this.ruleIndex + ":" + this.predIndex;
    };
    __decorate([
        Override
    ], PredicateTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], PredicateTransition.prototype, "isEpsilon", null);
    __decorate([
        Override
    ], PredicateTransition.prototype, "matches", null);
    __decorate([
        Override,
        NotNull
    ], PredicateTransition.prototype, "toString", null);
    PredicateTransition = __decorate([
        __param(0, NotNull)
    ], PredicateTransition);
    return PredicateTransition;
}(AbstractPredicateTransition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** A semantic predicate failed during validation.  Validation of predicates
 *  occurs when normally parsing the alternative just like matching a token.
 *  Disambiguating predicate evaluation occurs when we test a predicate during
 *  prediction.
 */
var FailedPredicateException = /** @class */ (function (_super) {
    __extends(FailedPredicateException, _super);
    function FailedPredicateException(recognizer, predicate, message) {
        var _this = _super.call(this, recognizer, recognizer.inputStream, recognizer.context, FailedPredicateException.formatMessage(predicate, message)) || this;
        var s = recognizer.interpreter.atn.states[recognizer.state];
        var trans = s.transition(0);
        if (trans instanceof PredicateTransition) {
            _this._ruleIndex = trans.ruleIndex;
            _this._predicateIndex = trans.predIndex;
        }
        else {
            _this._ruleIndex = 0;
            _this._predicateIndex = 0;
        }
        _this._predicate = predicate;
        _super.prototype.setOffendingToken.call(_this, recognizer, recognizer.currentToken);
        return _this;
    }
    Object.defineProperty(FailedPredicateException.prototype, "ruleIndex", {
        get: function () {
            return this._ruleIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FailedPredicateException.prototype, "predicateIndex", {
        get: function () {
            return this._predicateIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FailedPredicateException.prototype, "predicate", {
        get: function () {
            return this._predicate;
        },
        enumerable: true,
        configurable: true
    });
    FailedPredicateException.formatMessage = function (predicate, message) {
        if (message) {
            return message;
        }
        return "failed predicate: {" + predicate + "}?";
    };
    __decorate([
        NotNull
    ], FailedPredicateException, "formatMessage", null);
    FailedPredicateException = __decorate([
        __param(0, NotNull)
    ], FailedPredicateException);
    return FailedPredicateException;
}(RecognitionException));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** This signifies any kind of mismatched input exceptions such as
 *  when the current input does not match the expected token.
 */
var InputMismatchException = /** @class */ (function (_super) {
    __extends(InputMismatchException, _super);
    //private static serialVersionUID: number =  1532568338707443067L;
    function InputMismatchException(recognizer) {
        var _this = _super.call(this, recognizer, recognizer.inputStream, recognizer.context) || this;
        _super.prototype.setOffendingToken.call(_this, recognizer, recognizer.currentToken);
        return _this;
    }
    InputMismatchException = __decorate([
        __param(0, NotNull)
    ], InputMismatchException);
    return InputMismatchException;
}(RecognitionException));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var Arrays;
(function (Arrays) {
    /**
     * Searches the specified array of numbers for the specified value using the binary search algorithm. The array must
     * be sorted prior to making this call. If it is not sorted, the results are unspecified. If the array contains
     * multiple elements with the specified value, there is no guarantee which one will be found.
     *
     * @returns index of the search key, if it is contained in the array; otherwise, (-(insertion point) - 1). The
     * insertion point is defined as the point at which the key would be inserted into the array: the index of the first
     * element greater than the key, or array.length if all elements in the array are less than the specified key. Note
     * that this guarantees that the return value will be >= 0 if and only if the key is found.
     */
    function binarySearch(array, key, fromIndex, toIndex) {
        return binarySearch0(array, fromIndex !== undefined ? fromIndex : 0, toIndex !== undefined ? toIndex : array.length, key);
    }
    Arrays.binarySearch = binarySearch;
    function binarySearch0(array, fromIndex, toIndex, key) {
        var low = fromIndex;
        var high = toIndex - 1;
        while (low <= high) {
            var mid = (low + high) >>> 1;
            var midVal = array[mid];
            if (midVal < key) {
                low = mid + 1;
            }
            else if (midVal > key) {
                high = mid - 1;
            }
            else {
                // key found
                return mid;
            }
        }
        // key not found.
        return -(low + 1);
    }
    function toString(array) {
        var result = "[";
        var first = true;
        try {
            for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                var element = array_1_1.value;
                if (first) {
                    first = false;
                }
                else {
                    result += ", ";
                }
                if (element === null) {
                    result += "null";
                }
                else if (element === undefined) {
                    result += "undefined";
                }
                else {
                    result += element;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        result += "]";
        return result;
        var e_1, _a;
    }
    Arrays.toString = toString;
})(Arrays || (Arrays = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var EMPTY_DATA = new Int32Array(0);
var INITIAL_SIZE = 4;
var MAX_ARRAY_SIZE = (((1 << 31) >>> 0) - 1) - 8;
/**
 *
 * @author Sam Harwell
 */
var IntegerList = /** @class */ (function () {
    function IntegerList(arg) {
        if (!arg) {
            this._data = EMPTY_DATA;
            this._size = 0;
        }
        else if (arg instanceof IntegerList) {
            this._data = arg._data.slice(0);
            this._size = arg._size;
        }
        else if (typeof arg === "number") {
            if (arg === 0) {
                this._data = EMPTY_DATA;
                this._size = 0;
            }
            else {
                this._data = new Int32Array(arg);
                this._size = 0;
            }
        }
        else {
            // arg is Iterable<number>
            this._data = EMPTY_DATA;
            this._size = 0;
            try {
                for (var arg_1 = __values(arg), arg_1_1 = arg_1.next(); !arg_1_1.done; arg_1_1 = arg_1.next()) {
                    var value = arg_1_1.value;
                    this.add(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (arg_1_1 && !arg_1_1.done && (_a = arg_1.return)) _a.call(arg_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var e_1, _a;
    }
    IntegerList.prototype.add = function (value) {
        if (this._data.length === this._size) {
            this.ensureCapacity(this._size + 1);
        }
        this._data[this._size] = value;
        this._size++;
    };
    IntegerList.prototype.addAll = function (list) {
        if (Array.isArray(list)) {
            this.ensureCapacity(this._size + list.length);
            this._data.subarray(this._size, this._size + list.length).set(list);
            this._size += list.length;
        }
        else if (list instanceof IntegerList) {
            this.ensureCapacity(this._size + list._size);
            this._data.subarray(this._size, this._size + list.size).set(list._data);
            this._size += list._size;
        }
        else {
            // list is JavaCollection<number>
            this.ensureCapacity(this._size + list.size);
            var current = 0;
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var xi = list_1_1.value;
                    this._data[this._size + current] = xi;
                    current++;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this._size += list.size;
        }
        var e_2, _a;
    };
    IntegerList.prototype.get = function (index) {
        if (index < 0 || index >= this._size) {
            throw RangeError();
        }
        return this._data[index];
    };
    IntegerList.prototype.contains = function (value) {
        for (var i = 0; i < this._size; i++) {
            if (this._data[i] === value) {
                return true;
            }
        }
        return false;
    };
    IntegerList.prototype.set = function (index, value) {
        if (index < 0 || index >= this._size) {
            throw RangeError();
        }
        var previous = this._data[index];
        this._data[index] = value;
        return previous;
    };
    IntegerList.prototype.removeAt = function (index) {
        var value = this.get(index);
        this._data.copyWithin(index, index + 1, this._size);
        this._data[this._size - 1] = 0;
        this._size--;
        return value;
    };
    IntegerList.prototype.removeRange = function (fromIndex, toIndex) {
        if (fromIndex < 0 || toIndex < 0 || fromIndex > this._size || toIndex > this._size) {
            throw RangeError();
        }
        if (fromIndex > toIndex) {
            throw RangeError();
        }
        this._data.copyWithin(toIndex, fromIndex, this._size);
        this._data.fill(0, this._size - (toIndex - fromIndex), this._size);
        this._size -= (toIndex - fromIndex);
    };
    Object.defineProperty(IntegerList.prototype, "isEmpty", {
        get: function () {
            return this._size === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntegerList.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    IntegerList.prototype.trimToSize = function () {
        if (this._data.length === this._size) {
            return;
        }
        this._data = this._data.slice(0, this._size);
    };
    IntegerList.prototype.clear = function () {
        this._data.fill(0, 0, this._size);
        this._size = 0;
    };
    IntegerList.prototype.toArray = function () {
        if (this._size === 0) {
            return [];
        }
        return Array.from(this._data.subarray(0, this._size));
    };
    IntegerList.prototype.sort = function () {
        this._data.subarray(0, this._size).sort();
    };
    /**
     * Compares the specified object with this list for equality.  Returns
     * `true` if and only if the specified object is also an {@link IntegerList},
     * both lists have the same size, and all corresponding pairs of elements in
     * the two lists are equal.  In other words, two lists are defined to be
     * equal if they contain the same elements in the same order.
     *
     * This implementation first checks if the specified object is this
     * list. If so, it returns `true`; if not, it checks if the
     * specified object is an {@link IntegerList}. If not, it returns `false`;
     * if so, it checks the size of both lists. If the lists are not the same size,
     * it returns `false`; otherwise it iterates over both lists, comparing
     * corresponding pairs of elements.  If any comparison returns `false`,
     * this method returns `false`.
     *
     * @param o the object to be compared for equality with this list
     * @returns `true` if the specified object is equal to this list
     */
    IntegerList.prototype.equals = function (o) {
        if (o === this) {
            return true;
        }
        if (!(o instanceof IntegerList)) {
            return false;
        }
        if (this._size !== o._size) {
            return false;
        }
        for (var i = 0; i < this._size; i++) {
            if (this._data[i] !== o._data[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Returns the hash code value for this list.
     *
     * This implementation uses exactly the code that is used to define the
     * list hash function in the documentation for the {@link List#hashCode}
     * method.
     *
     * @returns the hash code value for this list
     */
    IntegerList.prototype.hashCode = function () {
        var hashCode = 1;
        for (var i = 0; i < this._size; i++) {
            hashCode = 31 * hashCode + this._data[i];
        }
        return hashCode;
    };
    /**
     * Returns a string representation of this list.
     */
    IntegerList.prototype.toString = function () {
        return this._data.toString();
    };
    IntegerList.prototype.binarySearch = function (key, fromIndex, toIndex) {
        if (fromIndex === undefined) {
            fromIndex = 0;
        }
        if (toIndex === undefined) {
            toIndex = this._size;
        }
        if (fromIndex < 0 || toIndex < 0 || fromIndex > this._size || toIndex > this._size) {
            throw new RangeError();
        }
        if (fromIndex > toIndex) {
            throw new RangeError();
        }
        return Arrays.binarySearch(this._data, key, fromIndex, toIndex);
    };
    IntegerList.prototype.ensureCapacity = function (capacity) {
        if (capacity < 0 || capacity > MAX_ARRAY_SIZE) {
            throw new RangeError();
        }
        var newLength;
        if (this._data.length === 0) {
            newLength = INITIAL_SIZE;
        }
        else {
            newLength = this._data.length;
        }
        while (newLength < capacity) {
            newLength = newLength * 2;
            if (newLength < 0 || newLength > MAX_ARRAY_SIZE) {
                newLength = MAX_ARRAY_SIZE;
            }
        }
        var tmp = new Int32Array(newLength);
        tmp.set(this._data);
        this._data = tmp;
    };
    __decorate([
        NotNull
    ], IntegerList.prototype, "_data", void 0);
    __decorate([
        Override
    ], IntegerList.prototype, "equals", null);
    __decorate([
        Override
    ], IntegerList.prototype, "hashCode", null);
    __decorate([
        Override
    ], IntegerList.prototype, "toString", null);
    return IntegerList;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var INTERVAL_POOL_MAX_VALUE = 1000;
/** An immutable inclusive interval a..b */
var Interval = /** @class */ (function () {
    /**
     * @param a The start of the interval
     * @param b The end of the interval (inclusive)
     */
    function Interval(a, b) {
        this.a = a;
        this.b = b;
    }
    Object.defineProperty(Interval, "INVALID", {
        get: function () {
            return Interval._INVALID;
        },
        enumerable: true,
        configurable: true
    });
    /** Interval objects are used readonly so share all with the
     *  same single value a==b up to some max size.  Use an array as a perfect hash.
     *  Return shared object for 0..INTERVAL_POOL_MAX_VALUE or a new
     *  Interval object with a..a in it.  On Java.g4, 218623 IntervalSets
     *  have a..a (set with 1 element).
     */
    Interval.of = function (a, b) {
        // cache just a..a
        if (a !== b || a < 0 || a > INTERVAL_POOL_MAX_VALUE) {
            return new Interval(a, b);
        }
        if (Interval.cache[a] == null) {
            Interval.cache[a] = new Interval(a, a);
        }
        return Interval.cache[a];
    };
    Object.defineProperty(Interval.prototype, "length", {
        /** return number of elements between a and b inclusively. x..x is length 1.
         *  if b &lt; a, then length is 0.  9..10 has length 2.
         */
        get: function () {
            if (this.b < this.a) {
                return 0;
            }
            return this.b - this.a + 1;
        },
        enumerable: true,
        configurable: true
    });
    Interval.prototype.equals = function (o) {
        if (o === this) {
            return true;
        }
        else if (!(o instanceof Interval)) {
            return false;
        }
        return this.a === o.a && this.b === o.b;
    };
    Interval.prototype.hashCode = function () {
        var hash = 23;
        hash = hash * 31 + this.a;
        hash = hash * 31 + this.b;
        return hash;
    };
    /** Does this start completely before other? Disjoint */
    Interval.prototype.startsBeforeDisjoint = function (other) {
        return this.a < other.a && this.b < other.a;
    };
    /** Does this start at or before other? Nondisjoint */
    Interval.prototype.startsBeforeNonDisjoint = function (other) {
        return this.a <= other.a && this.b >= other.a;
    };
    /** Does this.a start after other.b? May or may not be disjoint */
    Interval.prototype.startsAfter = function (other) {
        return this.a > other.a;
    };
    /** Does this start completely after other? Disjoint */
    Interval.prototype.startsAfterDisjoint = function (other) {
        return this.a > other.b;
    };
    /** Does this start after other? NonDisjoint */
    Interval.prototype.startsAfterNonDisjoint = function (other) {
        return this.a > other.a && this.a <= other.b; // this.b>=other.b implied
    };
    /** Are both ranges disjoint? I.e., no overlap? */
    Interval.prototype.disjoint = function (other) {
        return this.startsBeforeDisjoint(other) || this.startsAfterDisjoint(other);
    };
    /** Are two intervals adjacent such as 0..41 and 42..42? */
    Interval.prototype.adjacent = function (other) {
        return this.a === other.b + 1 || this.b === other.a - 1;
    };
    Interval.prototype.properlyContains = function (other) {
        return other.a >= this.a && other.b <= this.b;
    };
    /** Return the interval computed from combining this and other */
    Interval.prototype.union = function (other) {
        return Interval.of(Math.min(this.a, other.a), Math.max(this.b, other.b));
    };
    /** Return the interval in common between this and o */
    Interval.prototype.intersection = function (other) {
        return Interval.of(Math.max(this.a, other.a), Math.min(this.b, other.b));
    };
    /** Return the interval with elements from `this` not in `other`;
     *  `other` must not be totally enclosed (properly contained)
     *  within `this`, which would result in two disjoint intervals
     *  instead of the single one returned by this method.
     */
    Interval.prototype.differenceNotProperlyContained = function (other) {
        var diff;
        if (other.startsBeforeNonDisjoint(this)) {
            // other.a to left of this.a (or same)
            diff = Interval.of(Math.max(this.a, other.b + 1), this.b);
        }
        else if (other.startsAfterNonDisjoint(this)) {
            // other.a to right of this.a
            diff = Interval.of(this.a, other.a - 1);
        }
        return diff;
    };
    Interval.prototype.toString = function () {
        return this.a + ".." + this.b;
    };
    Interval._INVALID = new Interval(-1, -2);
    Interval.cache = new Array(INTERVAL_POOL_MAX_VALUE + 1);
    __decorate([
        Override
    ], Interval.prototype, "equals", null);
    __decorate([
        Override
    ], Interval.prototype, "hashCode", null);
    __decorate([
        Override
    ], Interval.prototype, "toString", null);
    return Interval;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
(function (Token) {
    Token.INVALID_TYPE = 0;
    /** During lookahead operations, this "token" signifies we hit rule end ATN state
     *  and did not follow it despite needing to.
     */
    Token.EPSILON = -2;
    Token.MIN_USER_TOKEN_TYPE = 1;
    Token.EOF = exports.IntStream.EOF;
    /** All tokens go to the parser (unless skip() is called in that rule)
     *  on a particular "channel".  The parser tunes to a particular channel
     *  so that whitespace etc... can go to the parser on a "hidden" channel.
     */
    Token.DEFAULT_CHANNEL = 0;
    /** Anything on different channel than DEFAULT_CHANNEL is not parsed
     *  by parser.
     */
    Token.HIDDEN_CHANNEL = 1;
    /**
     * This is the minimum constant value which can be assigned to a
     * user-defined token channel.
     *
     * The non-negative numbers less than {@link #MIN_USER_CHANNEL_VALUE} are
     * assigned to the predefined channels {@link #DEFAULT_CHANNEL} and
     * {@link #HIDDEN_CHANNEL}.
     *
     * @see `Token.channel`
     */
    Token.MIN_USER_CHANNEL_VALUE = 2;
})(exports.Token || (exports.Token = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var CommonToken = /** @class */ (function () {
    function CommonToken(type, text, source, channel, start, stop) {
        if (source === void 0) { source = CommonToken.EMPTY_SOURCE; }
        if (channel === void 0) { channel = exports.Token.DEFAULT_CHANNEL; }
        if (start === void 0) { start = 0; }
        if (stop === void 0) { stop = 0; }
        /**
         * This is the backing field for {@link #getLine} and {@link #setLine}.
         */
        this._line = 0;
        /**
         * This is the backing field for {@link #getCharPositionInLine} and
         * {@link #setCharPositionInLine}.
         */
        this._charPositionInLine = -1; // set to invalid position
        /**
         * This is the backing field for {@link #getChannel} and
         * {@link #setChannel}.
         */
        this._channel = exports.Token.DEFAULT_CHANNEL;
        /**
         * This is the backing field for `tokenIndex`.
         */
        this.index = -1;
        this._text = text;
        this._type = type;
        this.source = source;
        this._channel = channel;
        this.start = start;
        this.stop = stop;
        if (source.source != null) {
            this._line = source.source.line;
            this._charPositionInLine = source.source.charPositionInLine;
        }
    }
    /**
     * Constructs a new {@link CommonToken} as a copy of another {@link Token}.
     *
     * If `oldToken` is also a {@link CommonToken} instance, the newly
     * constructed token will share a reference to the {@link #text} field and
     * the {@link Tuple2} stored in {@link #source}. Otherwise, {@link #text} will
     * be assigned the result of calling {@link #getText}, and {@link #source}
     * will be constructed from the result of {@link Token#getTokenSource} and
     * {@link Token#getInputStream}.
     *
     * @param oldToken The token to copy.
     */
    CommonToken.fromToken = function (oldToken) {
        var result = new CommonToken(oldToken.type, undefined, CommonToken.EMPTY_SOURCE, oldToken.channel, oldToken.startIndex, oldToken.stopIndex);
        result._line = oldToken.line;
        result.index = oldToken.tokenIndex;
        result._charPositionInLine = oldToken.charPositionInLine;
        if (oldToken instanceof CommonToken) {
            result._text = oldToken.text;
            result.source = oldToken.source;
        }
        else {
            result._text = oldToken.text;
            result.source = { source: oldToken.tokenSource, stream: oldToken.inputStream };
        }
        return result;
    };
    Object.defineProperty(CommonToken.prototype, "type", {
        get: function () {
            return this._type;
        },
        // @Override
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "line", {
        get: function () {
            return this._line;
        },
        // @Override
        set: function (line) {
            this._line = line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "text", {
        get: function () {
            if (this._text != null) {
                return this._text;
            }
            var input = this.inputStream;
            if (input == null) {
                return undefined;
            }
            var n = input.size;
            if (this.start < n && this.stop < n) {
                return input.getText(Interval.of(this.start, this.stop));
            }
            else {
                return "<EOF>";
            }
        },
        /**
         * Explicitly set the text for this token. If {code text} is not
         * `undefined`, then {@link #getText} will return this value rather than
         * extracting the text from the input.
         *
         * @param text The explicit text of the token, or `undefined` if the text
         * should be obtained from the input along with the start and stop indexes
         * of the token.
         */
        // @Override
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "charPositionInLine", {
        get: function () {
            return this._charPositionInLine;
        },
        // @Override
        set: function (charPositionInLine) {
            this._charPositionInLine = charPositionInLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "channel", {
        get: function () {
            return this._channel;
        },
        // @Override
        set: function (channel) {
            this._channel = channel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "startIndex", {
        get: function () {
            return this.start;
        },
        set: function (start) {
            this.start = start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "stopIndex", {
        get: function () {
            return this.stop;
        },
        set: function (stop) {
            this.stop = stop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "tokenIndex", {
        get: function () {
            return this.index;
        },
        // @Override
        set: function (index) {
            this.index = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "tokenSource", {
        get: function () {
            return this.source.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonToken.prototype, "inputStream", {
        get: function () {
            return this.source.stream;
        },
        enumerable: true,
        configurable: true
    });
    CommonToken.prototype.toString = function (recognizer) {
        var channelStr = "";
        if (this._channel > 0) {
            channelStr = ",channel=" + this._channel;
        }
        var txt = this.text;
        if (txt != null) {
            txt = txt.replace(/\n/g, "\\n");
            txt = txt.replace(/\r/g, "\\r");
            txt = txt.replace(/\t/g, "\\t");
        }
        else {
            txt = "<no text>";
        }
        var typeString = String(this._type);
        if (recognizer) {
            typeString = recognizer.vocabulary.getDisplayName(this._type);
        }
        return "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + txt + "',<" + typeString + ">" + channelStr + "," + this._line + ":" + this.charPositionInLine + "]";
    };
    /**
     * An empty {@link Tuple2} which is used as the default value of
     * {@link #source} for tokens that do not have a source.
     */
    CommonToken.EMPTY_SOURCE = { source: undefined, stream: undefined };
    __decorate([
        NotNull
    ], CommonToken.prototype, "source", void 0);
    __decorate([
        Override
    ], CommonToken.prototype, "type", null);
    __decorate([
        Override
    ], CommonToken.prototype, "line", null);
    __decorate([
        Override
    ], CommonToken.prototype, "text", null);
    __decorate([
        Override
    ], CommonToken.prototype, "charPositionInLine", null);
    __decorate([
        Override
    ], CommonToken.prototype, "channel", null);
    __decorate([
        Override
    ], CommonToken.prototype, "startIndex", null);
    __decorate([
        Override
    ], CommonToken.prototype, "stopIndex", null);
    __decorate([
        Override
    ], CommonToken.prototype, "tokenIndex", null);
    __decorate([
        Override
    ], CommonToken.prototype, "tokenSource", null);
    __decorate([
        Override
    ], CommonToken.prototype, "inputStream", null);
    __decorate([
        Override
    ], CommonToken.prototype, "toString", null);
    __decorate([
        __param(0, NotNull)
    ], CommonToken, "fromToken", null);
    CommonToken = __decorate([
        __param(2, NotNull)
    ], CommonToken);
    return CommonToken;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This default implementation of {@link TokenFactory} creates
 * {@link CommonToken} objects.
 */
exports.CommonTokenFactory = /** @class */ (function () {
    /**
     * Constructs a {@link CommonTokenFactory} with the specified value for
     * {@link #copyText}.
     *
     * When `copyText` is `false`, the {@link #DEFAULT} instance
     * should be used instead of constructing a new instance.
     *
     * @param copyText The value for {@link #copyText}.
     */
    function CommonTokenFactory(copyText) {
        if (copyText === void 0) { copyText = false; }
        this.copyText = copyText;
    }
    CommonTokenFactory.prototype.create = function (source, type, text, channel, start, stop, line, charPositionInLine) {
        var t = new CommonToken(type, text, source, channel, start, stop);
        t.line = line;
        t.charPositionInLine = charPositionInLine;
        if (text == null && this.copyText && source.stream != null) {
            t.text = source.stream.getText(Interval.of(start, stop));
        }
        return t;
    };
    CommonTokenFactory.prototype.createSimple = function (type, text) {
        return new CommonToken(type, text);
    };
    __decorate([
        Override
    ], CommonTokenFactory.prototype, "create", null);
    __decorate([
        Override
    ], CommonTokenFactory.prototype, "createSimple", null);
    return CommonTokenFactory;
}());
(function (CommonTokenFactory) {
    /**
     * The default {@link CommonTokenFactory} instance.
     *
     * This token factory does not explicitly copy token text when constructing
     * tokens.
     */
    CommonTokenFactory.DEFAULT = new CommonTokenFactory();
})(exports.CommonTokenFactory || (exports.CommonTokenFactory = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var IntegerStack = /** @class */ (function (_super) {
    __extends(IntegerStack, _super);
    function IntegerStack(arg) {
        return _super.call(this, arg) || this;
    }
    IntegerStack.prototype.push = function (value) {
        this.add(value);
    };
    IntegerStack.prototype.pop = function () {
        return this.removeAt(this.size - 1);
    };
    IntegerStack.prototype.peek = function () {
        return this.get(this.size - 1);
    };
    return IntegerStack;
}(IntegerList));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Stores information about a {@link DFAState} which is an accept state under
 * some condition. Certain settings, such as
 * {@link ParserATNSimulator#getPredictionMode()}, may be used in addition to
 * this information to determine whether or not a particular state is an accept
 * state.
 *
 * @author Sam Harwell
 */
var AcceptStateInfo = /** @class */ (function () {
    function AcceptStateInfo(prediction, lexerActionExecutor) {
        this._prediction = prediction;
        this._lexerActionExecutor = lexerActionExecutor;
    }
    Object.defineProperty(AcceptStateInfo.prototype, "prediction", {
        /**
         * Gets the prediction made by this accept state. Note that this value
         * assumes the predicates, if any, in the {@link DFAState} evaluate to
         * `true`. If predicate evaluation is enabled, the final prediction of
         * the accept state will be determined by the result of predicate
         * evaluation.
         */
        get: function () {
            return this._prediction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcceptStateInfo.prototype, "lexerActionExecutor", {
        /**
         * Gets the {@link LexerActionExecutor} which can be used to execute actions
         * and/or commands after the lexer matches a token.
         */
        get: function () {
            return this._lexerActionExecutor;
        },
        enumerable: true,
        configurable: true
    });
    return AcceptStateInfo;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var MapKeyEqualityComparator = /** @class */ (function () {
    function MapKeyEqualityComparator(keyComparator) {
        this.keyComparator = keyComparator;
    }
    MapKeyEqualityComparator.prototype.hashCode = function (obj) {
        return this.keyComparator.hashCode(obj.key);
    };
    MapKeyEqualityComparator.prototype.equals = function (a, b) {
        return this.keyComparator.equals(a.key, b.key);
    };
    return MapKeyEqualityComparator;
}());
var Array2DHashMap = /** @class */ (function () {
    function Array2DHashMap(keyComparer) {
        if (keyComparer instanceof Array2DHashMap) {
            this.backingStore = new Array2DHashSet(keyComparer.backingStore);
        }
        else {
            this.backingStore = new Array2DHashSet(new MapKeyEqualityComparator(keyComparer));
        }
    }
    Array2DHashMap.prototype.clear = function () {
        this.backingStore.clear();
    };
    Array2DHashMap.prototype.containsKey = function (key) {
        return this.backingStore.contains({ key: key });
    };
    Array2DHashMap.prototype.get = function (key) {
        var bucket = this.backingStore.get({ key: key });
        if (!bucket) {
            return undefined;
        }
        return bucket.value;
    };
    Object.defineProperty(Array2DHashMap.prototype, "isEmpty", {
        get: function () {
            return this.backingStore.isEmpty;
        },
        enumerable: true,
        configurable: true
    });
    Array2DHashMap.prototype.put = function (key, value) {
        var element = this.backingStore.get({ key: key, value: value });
        var result;
        if (!element) {
            this.backingStore.add({ key: key, value: value });
        }
        else {
            result = element.value;
            element.value = value;
        }
        return result;
    };
    Array2DHashMap.prototype.putIfAbsent = function (key, value) {
        var element = this.backingStore.get({ key: key, value: value });
        var result;
        if (!element) {
            this.backingStore.add({ key: key, value: value });
        }
        else {
            result = element.value;
        }
        return result;
    };
    Object.defineProperty(Array2DHashMap.prototype, "size", {
        get: function () {
            return this.backingStore.size;
        },
        enumerable: true,
        configurable: true
    });
    Array2DHashMap.prototype.hashCode = function () {
        return this.backingStore.hashCode();
    };
    Array2DHashMap.prototype.equals = function (o) {
        if (!(o instanceof Array2DHashMap)) {
            return false;
        }
        return this.backingStore.equals(o.backingStore);
    };
    return Array2DHashMap;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * The following images show the relation of states and
 * {@link ATNState#transitions} for various grammar constructs.
 *
 * * Solid edges marked with an &#0949; indicate a required
 *   {@link EpsilonTransition}.
 *
 * * Dashed edges indicate locations where any transition derived from
 *   {@link Transition} might appear.
 *
 * * Dashed nodes are place holders for either a sequence of linked
 *   {@link BasicState} states or the inclusion of a block representing a nested
 *   construct in one of the forms below.
 *
 * * Nodes showing multiple outgoing alternatives with a `...` support
 *   any number of alternatives (one or more). Nodes without the `...` only
 *   support the exact number of alternatives shown in the diagram.
 *
 * <h2>Basic Blocks</h2>
 *
 * <h3>Rule</h3>
 *
 * <embed src="images/Rule.svg" type="image/svg+xml"/>
 *
 * <h3>Block of 1 or more alternatives</h3>
 *
 * <embed src="images/Block.svg" type="image/svg+xml"/>
 *
 * <h2>Greedy Loops</h2>
 *
 * <h3>Greedy Closure: `(...)*`</h3>
 *
 * <embed src="images/ClosureGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Greedy Positive Closure: `(...)+`</h3>
 *
 * <embed src="images/PositiveClosureGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Greedy Optional: `(...)?`</h3>
 *
 * <embed src="images/OptionalGreedy.svg" type="image/svg+xml"/>
 *
 * <h2>Non-Greedy Loops</h2>
 *
 * <h3>Non-Greedy Closure: `(...)*?`</h3>
 *
 * <embed src="images/ClosureNonGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Non-Greedy Positive Closure: `(...)+?`</h3>
 *
 * <embed src="images/PositiveClosureNonGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Non-Greedy Optional: `(...)??`</h3>
 *
 * <embed src="images/OptionalNonGreedy.svg" type="image/svg+xml"/>
 */
var ATNState = /** @class */ (function () {
    function ATNState() {
        this.stateNumber = ATNState.INVALID_STATE_NUMBER;
        this.ruleIndex = 0; // at runtime, we don't have Rule objects
        this.epsilonOnlyTransitions = false;
        /** Track the transitions emanating from this ATN state. */
        this.transitions = [];
        this.optimizedTransitions = this.transitions;
    }
    /**
     * Gets the state number.
     *
     * @returns the state number
     */
    ATNState.prototype.getStateNumber = function () {
        return this.stateNumber;
    };
    Object.defineProperty(ATNState.prototype, "nonStopStateNumber", {
        /**
         * For all states except {@link RuleStopState}, this returns the state
         * number. Returns -1 for stop states.
         *
         * @returns -1 for {@link RuleStopState}, otherwise the state number
         */
        get: function () {
            return this.getStateNumber();
        },
        enumerable: true,
        configurable: true
    });
    ATNState.prototype.hashCode = function () {
        return this.stateNumber;
    };
    ATNState.prototype.equals = function (o) {
        // are these states same object?
        if (o instanceof ATNState) {
            return this.stateNumber === o.stateNumber;
        }
        return false;
    };
    Object.defineProperty(ATNState.prototype, "isNonGreedyExitState", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ATNState.prototype.toString = function () {
        return String(this.stateNumber);
    };
    ATNState.prototype.getTransitions = function () {
        return this.transitions.slice(0);
    };
    Object.defineProperty(ATNState.prototype, "numberOfTransitions", {
        get: function () {
            return this.transitions.length;
        },
        enumerable: true,
        configurable: true
    });
    ATNState.prototype.addTransition = function (e, index) {
        if (this.transitions.length === 0) {
            this.epsilonOnlyTransitions = e.isEpsilon;
        }
        else if (this.epsilonOnlyTransitions !== e.isEpsilon) {
            this.epsilonOnlyTransitions = false;
            throw new Error("ATN state " + this.stateNumber + " has both epsilon and non-epsilon transitions.");
        }
        this.transitions.splice(index !== undefined ? index : this.transitions.length, 0, e);
    };
    ATNState.prototype.transition = function (i) {
        return this.transitions[i];
    };
    ATNState.prototype.setTransition = function (i, e) {
        this.transitions[i] = e;
    };
    ATNState.prototype.removeTransition = function (index) {
        return this.transitions.splice(index, 1)[0];
    };
    Object.defineProperty(ATNState.prototype, "onlyHasEpsilonTransitions", {
        get: function () {
            return this.epsilonOnlyTransitions;
        },
        enumerable: true,
        configurable: true
    });
    ATNState.prototype.setRuleIndex = function (ruleIndex) {
        this.ruleIndex = ruleIndex;
    };
    Object.defineProperty(ATNState.prototype, "isOptimized", {
        get: function () {
            return this.optimizedTransitions !== this.transitions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNState.prototype, "numberOfOptimizedTransitions", {
        get: function () {
            return this.optimizedTransitions.length;
        },
        enumerable: true,
        configurable: true
    });
    ATNState.prototype.getOptimizedTransition = function (i) {
        return this.optimizedTransitions[i];
    };
    ATNState.prototype.addOptimizedTransition = function (e) {
        if (!this.isOptimized) {
            this.optimizedTransitions = new Array();
        }
        this.optimizedTransitions.push(e);
    };
    ATNState.prototype.setOptimizedTransition = function (i, e) {
        if (!this.isOptimized) {
            throw new Error("This ATNState is not optimized.");
        }
        this.optimizedTransitions[i] = e;
    };
    ATNState.prototype.removeOptimizedTransition = function (i) {
        if (!this.isOptimized) {
            throw new Error("This ATNState is not optimized.");
        }
        this.optimizedTransitions.splice(i, 1);
    };
    __decorate([
        Override
    ], ATNState.prototype, "hashCode", null);
    __decorate([
        Override
    ], ATNState.prototype, "equals", null);
    __decorate([
        Override
    ], ATNState.prototype, "toString", null);
    return ATNState;
}());
(function (ATNState) {
    ATNState.INVALID_STATE_NUMBER = -1;
})(ATNState || (ATNState = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var DecisionState = /** @class */ (function (_super) {
    __extends(DecisionState, _super);
    function DecisionState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decision = -1;
        _this.nonGreedy = false;
        _this.sll = false;
        return _this;
    }
    return DecisionState;
}(ATNState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// import * as assert from "assert";
/** Used to cache {@link PredictionContext} objects. Its used for the shared
 *  context cash associated with contexts in DFA states. This cache
 *  can be used for both lexers and parsers.
 *
 * @author Sam Harwell
 */
var PredictionContextCache = /** @class */ (function () {
    function PredictionContextCache(enableCache) {
        if (enableCache === void 0) { enableCache = true; }
        this.contexts = new Array2DHashMap(ObjectEqualityComparator.INSTANCE);
        this.childContexts = new Array2DHashMap(ObjectEqualityComparator.INSTANCE);
        this.joinContexts = new Array2DHashMap(ObjectEqualityComparator.INSTANCE);
        this.enableCache = enableCache;
    }
    PredictionContextCache.prototype.getAsCached = function (context) {
        if (!this.enableCache) {
            return context;
        }
        var result = this.contexts.get(context);
        if (!result) {
            result = context;
            this.contexts.put(context, context);
        }
        return result;
    };
    PredictionContextCache.prototype.getChild = function (context, invokingState) {
        if (!this.enableCache) {
            return context.getChild(invokingState);
        }
        var operands = new PredictionContextCache.PredictionContextAndInt(context, invokingState);
        var result = this.childContexts.get(operands);
        if (!result) {
            result = context.getChild(invokingState);
            result = this.getAsCached(result);
            this.childContexts.put(operands, result);
        }
        return result;
    };
    PredictionContextCache.prototype.join = function (x, y) {
        if (!this.enableCache) {
            return PredictionContext.join(x, y, this);
        }
        var operands = new PredictionContextCache.IdentityCommutativePredictionContextOperands(x, y);
        var result = this.joinContexts.get(operands);
        if (result) {
            return result;
        }
        result = PredictionContext.join(x, y, this);
        result = this.getAsCached(result);
        this.joinContexts.put(operands, result);
        return result;
    };
    PredictionContextCache.UNCACHED = new PredictionContextCache(false);
    return PredictionContextCache;
}());
(function (PredictionContextCache) {
    var PredictionContextAndInt = /** @class */ (function () {
        function PredictionContextAndInt(obj, value) {
            this.obj = obj;
            this.value = value;
        }
        PredictionContextAndInt.prototype.equals = function (obj) {
            if (!(obj instanceof PredictionContextAndInt)) {
                return false;
            }
            else if (obj === this) {
                return true;
            }
            var other = obj;
            return this.value === other.value
                && (this.obj === other.obj || (this.obj != null && this.obj.equals(other.obj)));
        };
        PredictionContextAndInt.prototype.hashCode = function () {
            var hashCode = 5;
            hashCode = 7 * hashCode + (this.obj != null ? this.obj.hashCode() : 0);
            hashCode = 7 * hashCode + this.value;
            return hashCode;
        };
        __decorate([
            Override
        ], PredictionContextAndInt.prototype, "equals", null);
        __decorate([
            Override
        ], PredictionContextAndInt.prototype, "hashCode", null);
        return PredictionContextAndInt;
    }());
    PredictionContextCache.PredictionContextAndInt = PredictionContextAndInt;
    var IdentityCommutativePredictionContextOperands = /** @class */ (function () {
        function IdentityCommutativePredictionContextOperands(x, y) {
            // assert(x != null);
            // assert(y != null);
            this._x = x;
            this._y = y;
        }
        Object.defineProperty(IdentityCommutativePredictionContextOperands.prototype, "x", {
            get: function () {
                return this._x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IdentityCommutativePredictionContextOperands.prototype, "y", {
            get: function () {
                return this._y;
            },
            enumerable: true,
            configurable: true
        });
        IdentityCommutativePredictionContextOperands.prototype.equals = function (o) {
            if (!(o instanceof IdentityCommutativePredictionContextOperands)) {
                return false;
            }
            else if (this === o) {
                return true;
            }
            var other = o;
            return (this._x === other._x && this._y === other._y) || (this._x === other._y && this._y === other._x);
        };
        IdentityCommutativePredictionContextOperands.prototype.hashCode = function () {
            return this._x.hashCode() ^ this._y.hashCode();
        };
        __decorate([
            Override
        ], IdentityCommutativePredictionContextOperands.prototype, "equals", null);
        __decorate([
            Override
        ], IdentityCommutativePredictionContextOperands.prototype, "hashCode", null);
        return IdentityCommutativePredictionContextOperands;
    }());
    PredictionContextCache.IdentityCommutativePredictionContextOperands = IdentityCommutativePredictionContextOperands;
})(PredictionContextCache || (PredictionContextCache = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// import * as assert from "assert";
var INITIAL_HASH = 1;
var PredictionContext = /** @class */ (function () {
    function PredictionContext(cachedHashCode) {
        this.cachedHashCode = cachedHashCode;
    }
    PredictionContext.calculateEmptyHashCode = function () {
        var hash = MurmurHash.initialize(INITIAL_HASH);
        hash = MurmurHash.finish(hash, 0);
        return hash;
    };
    PredictionContext.calculateSingleHashCode = function (parent, returnState) {
        var hash = MurmurHash.initialize(INITIAL_HASH);
        hash = MurmurHash.update(hash, parent);
        hash = MurmurHash.update(hash, returnState);
        hash = MurmurHash.finish(hash, 2);
        return hash;
    };
    PredictionContext.calculateHashCode = function (parents, returnStates) {
        var hash = MurmurHash.initialize(INITIAL_HASH);
        try {
            for (var parents_1 = __values(parents), parents_1_1 = parents_1.next(); !parents_1_1.done; parents_1_1 = parents_1.next()) {
                var parent_1 = parents_1_1.value;
                hash = MurmurHash.update(hash, parent_1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (parents_1_1 && !parents_1_1.done && (_a = parents_1.return)) _a.call(parents_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var returnStates_1 = __values(returnStates), returnStates_1_1 = returnStates_1.next(); !returnStates_1_1.done; returnStates_1_1 = returnStates_1.next()) {
                var returnState = returnStates_1_1.value;
                hash = MurmurHash.update(hash, returnState);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (returnStates_1_1 && !returnStates_1_1.done && (_b = returnStates_1.return)) _b.call(returnStates_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        hash = MurmurHash.finish(hash, 2 * parents.length);
        return hash;
        var e_1, _a, e_2, _b;
    };
    PredictionContext.fromRuleContext = function (atn, outerContext, fullContext) {
        if (fullContext === void 0) { fullContext = true; }
        if (outerContext.isEmpty) {
            return fullContext ? PredictionContext.EMPTY_FULL : PredictionContext.EMPTY_LOCAL;
        }
        var parent;
        if (outerContext._parent) {
            parent = PredictionContext.fromRuleContext(atn, outerContext._parent, fullContext);
        }
        else {
            parent = fullContext ? PredictionContext.EMPTY_FULL : PredictionContext.EMPTY_LOCAL;
        }
        var state = atn.states[outerContext.invokingState];
        var transition = state.transition(0);
        return parent.getChild(transition.followState.stateNumber);
    };
    PredictionContext.addEmptyContext = function (context) {
        return context.addEmptyContext();
    };
    PredictionContext.removeEmptyContext = function (context) {
        return context.removeEmptyContext();
    };
    PredictionContext.join = function (context0, context1, contextCache) {
        if (contextCache === void 0) { contextCache = PredictionContextCache.UNCACHED; }
        if (context0 === context1) {
            return context0;
        }
        if (context0.isEmpty) {
            return PredictionContext.isEmptyLocal(context0) ? context0 : PredictionContext.addEmptyContext(context1);
        }
        else if (context1.isEmpty) {
            return PredictionContext.isEmptyLocal(context1) ? context1 : PredictionContext.addEmptyContext(context0);
        }
        var context0size = context0.size;
        var context1size = context1.size;
        if (context0size === 1 && context1size === 1 && context0.getReturnState(0) === context1.getReturnState(0)) {
            var merged = contextCache.join(context0.getParent(0), context1.getParent(0));
            if (merged === context0.getParent(0)) {
                return context0;
            }
            else if (merged === context1.getParent(0)) {
                return context1;
            }
            else {
                return merged.getChild(context0.getReturnState(0));
            }
        }
        var count = 0;
        var parentsList = new Array(context0size + context1size);
        var returnStatesList = new Array(parentsList.length);
        var leftIndex = 0;
        var rightIndex = 0;
        var canReturnLeft = true;
        var canReturnRight = true;
        while (leftIndex < context0size && rightIndex < context1size) {
            if (context0.getReturnState(leftIndex) === context1.getReturnState(rightIndex)) {
                parentsList[count] = contextCache.join(context0.getParent(leftIndex), context1.getParent(rightIndex));
                returnStatesList[count] = context0.getReturnState(leftIndex);
                canReturnLeft = canReturnLeft && parentsList[count] === context0.getParent(leftIndex);
                canReturnRight = canReturnRight && parentsList[count] === context1.getParent(rightIndex);
                leftIndex++;
                rightIndex++;
            }
            else if (context0.getReturnState(leftIndex) < context1.getReturnState(rightIndex)) {
                parentsList[count] = context0.getParent(leftIndex);
                returnStatesList[count] = context0.getReturnState(leftIndex);
                canReturnRight = false;
                leftIndex++;
            }
            else {
                // assert(context1.getReturnState(rightIndex) < context0.getReturnState(leftIndex));
                parentsList[count] = context1.getParent(rightIndex);
                returnStatesList[count] = context1.getReturnState(rightIndex);
                canReturnLeft = false;
                rightIndex++;
            }
            count++;
        }
        while (leftIndex < context0size) {
            parentsList[count] = context0.getParent(leftIndex);
            returnStatesList[count] = context0.getReturnState(leftIndex);
            leftIndex++;
            canReturnRight = false;
            count++;
        }
        while (rightIndex < context1size) {
            parentsList[count] = context1.getParent(rightIndex);
            returnStatesList[count] = context1.getReturnState(rightIndex);
            rightIndex++;
            canReturnLeft = false;
            count++;
        }
        if (canReturnLeft) {
            return context0;
        }
        else if (canReturnRight) {
            return context1;
        }
        if (count < parentsList.length) {
            parentsList = parentsList.slice(0, count);
            returnStatesList = returnStatesList.slice(0, count);
        }
        if (parentsList.length === 0) {
            // if one of them was EMPTY_LOCAL, it would be empty and handled at the beginning of the method
            return PredictionContext.EMPTY_FULL;
        }
        else if (parentsList.length === 1) {
            return new SingletonPredictionContext(parentsList[0], returnStatesList[0]);
        }
        else {
            return new ArrayPredictionContext(parentsList, returnStatesList);
        }
    };
    PredictionContext.isEmptyLocal = function (context) {
        return context === PredictionContext.EMPTY_LOCAL;
    };
    PredictionContext.getCachedContext = function (context, contextCache, visited) {
        if (context.isEmpty) {
            return context;
        }
        var existing = visited.get(context);
        if (existing) {
            return existing;
        }
        existing = contextCache.get(context);
        if (existing) {
            visited.put(context, existing);
            return existing;
        }
        var changed = false;
        var parents = new Array(context.size);
        for (var i = 0; i < parents.length; i++) {
            var parent_2 = PredictionContext.getCachedContext(context.getParent(i), contextCache, visited);
            if (changed || parent_2 !== context.getParent(i)) {
                if (!changed) {
                    parents = new Array(context.size);
                    for (var j = 0; j < context.size; j++) {
                        parents[j] = context.getParent(j);
                    }
                    changed = true;
                }
                parents[i] = parent_2;
            }
        }
        if (!changed) {
            existing = contextCache.putIfAbsent(context, context);
            visited.put(context, existing != null ? existing : context);
            return context;
        }
        // We know parents.length>0 because context.isEmpty is checked at the beginning of the method.
        var updated;
        if (parents.length === 1) {
            updated = new SingletonPredictionContext(parents[0], context.getReturnState(0));
        }
        else {
            var returnStates = new Array(context.size);
            for (var i = 0; i < context.size; i++) {
                returnStates[i] = context.getReturnState(i);
            }
            updated = new ArrayPredictionContext(parents, returnStates, context.hashCode());
        }
        existing = contextCache.putIfAbsent(updated, updated);
        visited.put(updated, existing || updated);
        visited.put(context, existing || updated);
        return updated;
    };
    PredictionContext.prototype.appendSingleContext = function (returnContext, contextCache) {
        return this.appendContext(PredictionContext.EMPTY_FULL.getChild(returnContext), contextCache);
    };
    PredictionContext.prototype.getChild = function (returnState) {
        return new SingletonPredictionContext(this, returnState);
    };
    PredictionContext.prototype.hashCode = function () {
        return this.cachedHashCode;
    };
    PredictionContext.prototype.toStrings = function (recognizer, currentState, stop) {
        if (stop === void 0) { stop = PredictionContext.EMPTY_FULL; }
        var result = [];
        outer: for (var perm = 0;; perm++) {
            var offset = 0;
            var last = true;
            var p = this;
            var stateNumber = currentState;
            var localBuffer = "";
            localBuffer += "[";
            while (!p.isEmpty && p !== stop) {
                var index = 0;
                if (p.size > 0) {
                    var bits = 1;
                    while (((1 << bits) >>> 0) < p.size) {
                        bits++;
                    }
                    var mask = ((1 << bits) >>> 0) - 1;
                    index = (perm >> offset) & mask;
                    last = last && index >= p.size - 1;
                    if (index >= p.size) {
                        continue outer;
                    }
                    offset += bits;
                }
                if (recognizer) {
                    if (localBuffer.length > 1) {
                        // first char is '[', if more than that this isn't the first rule
                        localBuffer += " ";
                    }
                    var atn = recognizer.atn;
                    var s = atn.states[stateNumber];
                    var ruleName = recognizer.ruleNames[s.ruleIndex];
                    localBuffer += ruleName;
                }
                else if (p.getReturnState(index) !== PredictionContext.EMPTY_FULL_STATE_KEY) {
                    if (!p.isEmpty) {
                        if (localBuffer.length > 1) {
                            // first char is '[', if more than that this isn't the first rule
                            localBuffer += " ";
                        }
                        localBuffer += p.getReturnState(index);
                    }
                }
                stateNumber = p.getReturnState(index);
                p = p.getParent(index);
            }
            localBuffer += "]";
            result.push(localBuffer);
            if (last) {
                break;
            }
        }
        return result;
    };
    __decorate([
        Override
    ], PredictionContext.prototype, "hashCode", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull), __param(2, NotNull)
    ], PredictionContext, "join", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull)
    ], PredictionContext, "getCachedContext", null);
    return PredictionContext;
}());
var EmptyPredictionContext = /** @class */ (function (_super) {
    __extends(EmptyPredictionContext, _super);
    function EmptyPredictionContext(fullContext) {
        var _this = _super.call(this, PredictionContext.calculateEmptyHashCode()) || this;
        _this.fullContext = fullContext;
        return _this;
    }
    Object.defineProperty(EmptyPredictionContext.prototype, "isFullContext", {
        get: function () {
            return this.fullContext;
        },
        enumerable: true,
        configurable: true
    });
    EmptyPredictionContext.prototype.addEmptyContext = function () {
        return this;
    };
    EmptyPredictionContext.prototype.removeEmptyContext = function () {
        throw new Error("Cannot remove the empty context from itself.");
    };
    EmptyPredictionContext.prototype.getParent = function (index) {
        throw new Error("index out of bounds");
    };
    EmptyPredictionContext.prototype.getReturnState = function (index) {
        throw new Error("index out of bounds");
    };
    EmptyPredictionContext.prototype.findReturnState = function (returnState) {
        return -1;
    };
    Object.defineProperty(EmptyPredictionContext.prototype, "size", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    EmptyPredictionContext.prototype.appendSingleContext = function (returnContext, contextCache) {
        return contextCache.getChild(this, returnContext);
    };
    EmptyPredictionContext.prototype.appendContext = function (suffix, contextCache) {
        return suffix;
    };
    Object.defineProperty(EmptyPredictionContext.prototype, "isEmpty", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmptyPredictionContext.prototype, "hasEmpty", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    EmptyPredictionContext.prototype.equals = function (o) {
        return this === o;
    };
    EmptyPredictionContext.prototype.toStrings = function (recognizer, currentState, stop) {
        return ["[]"];
    };
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "addEmptyContext", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "removeEmptyContext", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "getParent", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "getReturnState", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "findReturnState", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "size", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "appendSingleContext", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "appendContext", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "isEmpty", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "hasEmpty", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "equals", null);
    __decorate([
        Override
    ], EmptyPredictionContext.prototype, "toStrings", null);
    return EmptyPredictionContext;
}(PredictionContext));
var ArrayPredictionContext = /** @class */ (function (_super) {
    __extends(ArrayPredictionContext, _super);
    function ArrayPredictionContext(parents, returnStates, hashCode) {
        var _this = _super.call(this, hashCode || PredictionContext.calculateHashCode(parents, returnStates)) || this;
        // assert(parents.length === returnStates.length);
        // assert(returnStates.length > 1 || returnStates[0] !== PredictionContext.EMPTY_FULL_STATE_KEY, "Should be using PredictionContext.EMPTY instead.");
        _this.parents = parents;
        _this.returnStates = returnStates;
        return _this;
    }
    ArrayPredictionContext.prototype.getParent = function (index) {
        return this.parents[index];
    };
    ArrayPredictionContext.prototype.getReturnState = function (index) {
        return this.returnStates[index];
    };
    ArrayPredictionContext.prototype.findReturnState = function (returnState) {
        return Arrays.binarySearch(this.returnStates, returnState);
    };
    Object.defineProperty(ArrayPredictionContext.prototype, "size", {
        get: function () {
            return this.returnStates.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayPredictionContext.prototype, "isEmpty", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayPredictionContext.prototype, "hasEmpty", {
        get: function () {
            return this.returnStates[this.returnStates.length - 1] === PredictionContext.EMPTY_FULL_STATE_KEY;
        },
        enumerable: true,
        configurable: true
    });
    ArrayPredictionContext.prototype.addEmptyContext = function () {
        if (this.hasEmpty) {
            return this;
        }
        var parents2 = this.parents.slice(0);
        var returnStates2 = this.returnStates.slice(0);
        parents2.push(PredictionContext.EMPTY_FULL);
        returnStates2.push(PredictionContext.EMPTY_FULL_STATE_KEY);
        return new ArrayPredictionContext(parents2, returnStates2);
    };
    ArrayPredictionContext.prototype.removeEmptyContext = function () {
        if (!this.hasEmpty) {
            return this;
        }
        if (this.returnStates.length === 2) {
            return new SingletonPredictionContext(this.parents[0], this.returnStates[0]);
        }
        else {
            var parents2 = this.parents.slice(0, this.parents.length - 1);
            var returnStates2 = this.returnStates.slice(0, this.returnStates.length - 1);
            return new ArrayPredictionContext(parents2, returnStates2);
        }
    };
    ArrayPredictionContext.prototype.appendContext = function (suffix, contextCache) {
        return ArrayPredictionContext.appendContextImpl(this, suffix, new PredictionContext.IdentityHashMap());
    };
    ArrayPredictionContext.appendContextImpl = function (context, suffix, visited) {
        if (suffix.isEmpty) {
            if (PredictionContext.isEmptyLocal(suffix)) {
                if (context.hasEmpty) {
                    return PredictionContext.EMPTY_LOCAL;
                }
                throw new Error("what to do here?");
            }
            return context;
        }
        if (suffix.size !== 1) {
            throw new Error("Appending a tree suffix is not yet supported.");
        }
        var result = visited.get(context);
        if (!result) {
            if (context.isEmpty) {
                result = suffix;
            }
            else {
                var parentCount = context.size;
                if (context.hasEmpty) {
                    parentCount--;
                }
                var updatedParents = new Array(parentCount);
                var updatedReturnStates = new Array(parentCount);
                for (var i = 0; i < parentCount; i++) {
                    updatedReturnStates[i] = context.getReturnState(i);
                }
                for (var i = 0; i < parentCount; i++) {
                    updatedParents[i] = ArrayPredictionContext.appendContextImpl(context.getParent(i), suffix, visited);
                }
                if (updatedParents.length === 1) {
                    result = new SingletonPredictionContext(updatedParents[0], updatedReturnStates[0]);
                }
                else {
                    // assert(updatedParents.length > 1);
                    result = new ArrayPredictionContext(updatedParents, updatedReturnStates);
                }
                if (context.hasEmpty) {
                    result = PredictionContext.join(result, suffix);
                }
            }
            visited.put(context, result);
        }
        return result;
    };
    ArrayPredictionContext.prototype.equals = function (o) {
        if (this === o) {
            return true;
        }
        else if (!(o instanceof ArrayPredictionContext)) {
            return false;
        }
        if (this.hashCode() !== o.hashCode()) {
            // can't be same if hash is different
            return false;
        }
        var other = o;
        return this.equalsImpl(other, new Array2DHashSet());
    };
    ArrayPredictionContext.prototype.equalsImpl = function (other, visited) {
        var selfWorkList = [];
        var otherWorkList = [];
        selfWorkList.push(this);
        otherWorkList.push(other);
        while (true) {
            var currentSelf = selfWorkList.pop();
            var currentOther = otherWorkList.pop();
            if (!currentSelf || !currentOther) {
                break;
            }
            var operands = new PredictionContextCache.IdentityCommutativePredictionContextOperands(currentSelf, currentOther);
            if (!visited.add(operands)) {
                continue;
            }
            var selfSize = operands.x.size;
            if (selfSize === 0) {
                if (!operands.x.equals(operands.y)) {
                    return false;
                }
                continue;
            }
            var otherSize = operands.y.size;
            if (selfSize !== otherSize) {
                return false;
            }
            for (var i = 0; i < selfSize; i++) {
                if (operands.x.getReturnState(i) !== operands.y.getReturnState(i)) {
                    return false;
                }
                var selfParent = operands.x.getParent(i);
                var otherParent = operands.y.getParent(i);
                if (selfParent.hashCode() !== otherParent.hashCode()) {
                    return false;
                }
                if (selfParent !== otherParent) {
                    selfWorkList.push(selfParent);
                    otherWorkList.push(otherParent);
                }
            }
        }
        return true;
    };
    __decorate([
        NotNull
    ], ArrayPredictionContext.prototype, "parents", void 0);
    __decorate([
        NotNull
    ], ArrayPredictionContext.prototype, "returnStates", void 0);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "getParent", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "getReturnState", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "findReturnState", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "size", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "isEmpty", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "hasEmpty", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "addEmptyContext", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "removeEmptyContext", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "appendContext", null);
    __decorate([
        Override
    ], ArrayPredictionContext.prototype, "equals", null);
    ArrayPredictionContext = __decorate([
        __param(0, NotNull)
    ], ArrayPredictionContext);
    return ArrayPredictionContext;
}(PredictionContext));
var SingletonPredictionContext = /** @class */ (function (_super) {
    __extends(SingletonPredictionContext, _super);
    function SingletonPredictionContext(parent, returnState) {
        var _this = _super.call(this, PredictionContext.calculateSingleHashCode(parent, returnState)) || this;
        // assert(returnState != PredictionContext.EMPTY_FULL_STATE_KEY && returnState != PredictionContext.EMPTY_LOCAL_STATE_KEY);
        _this.parent = parent;
        _this.returnState = returnState;
        return _this;
    }
    SingletonPredictionContext.prototype.getParent = function (index) {
        // assert(index == 0);
        return this.parent;
    };
    SingletonPredictionContext.prototype.getReturnState = function (index) {
        // assert(index == 0);
        return this.returnState;
    };
    SingletonPredictionContext.prototype.findReturnState = function (returnState) {
        return this.returnState === returnState ? 0 : -1;
    };
    Object.defineProperty(SingletonPredictionContext.prototype, "size", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingletonPredictionContext.prototype, "isEmpty", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingletonPredictionContext.prototype, "hasEmpty", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    SingletonPredictionContext.prototype.appendContext = function (suffix, contextCache) {
        return contextCache.getChild(this.parent.appendContext(suffix, contextCache), this.returnState);
    };
    SingletonPredictionContext.prototype.addEmptyContext = function () {
        var parents = [this.parent, PredictionContext.EMPTY_FULL];
        var returnStates = [this.returnState, PredictionContext.EMPTY_FULL_STATE_KEY];
        return new ArrayPredictionContext(parents, returnStates);
    };
    SingletonPredictionContext.prototype.removeEmptyContext = function () {
        return this;
    };
    SingletonPredictionContext.prototype.equals = function (o) {
        if (o === this) {
            return true;
        }
        else if (!(o instanceof SingletonPredictionContext)) {
            return false;
        }
        var other = o;
        if (this.hashCode() !== other.hashCode()) {
            return false;
        }
        return this.returnState === other.returnState
            && this.parent.equals(other.parent);
    };
    __decorate([
        NotNull
    ], SingletonPredictionContext.prototype, "parent", void 0);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "getParent", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "getReturnState", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "findReturnState", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "size", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "isEmpty", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "hasEmpty", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "appendContext", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "addEmptyContext", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "removeEmptyContext", null);
    __decorate([
        Override
    ], SingletonPredictionContext.prototype, "equals", null);
    SingletonPredictionContext = __decorate([
        __param(0, NotNull)
    ], SingletonPredictionContext);
    return SingletonPredictionContext;
}(PredictionContext));
(function (PredictionContext) {
    PredictionContext.EMPTY_LOCAL = new EmptyPredictionContext(false);
    PredictionContext.EMPTY_FULL = new EmptyPredictionContext(true);
    PredictionContext.EMPTY_LOCAL_STATE_KEY = -((1 << 31) >>> 0);
    PredictionContext.EMPTY_FULL_STATE_KEY = ((1 << 31) >>> 0) - 1;
    var IdentityHashMap = /** @class */ (function (_super) {
        __extends(IdentityHashMap, _super);
        function IdentityHashMap() {
            return _super.call(this, IdentityEqualityComparator.INSTANCE) || this;
        }
        return IdentityHashMap;
    }(Array2DHashMap));
    PredictionContext.IdentityHashMap = IdentityHashMap;
    var IdentityEqualityComparator = /** @class */ (function () {
        function IdentityEqualityComparator() {
        }
        IdentityEqualityComparator.prototype.IdentityEqualityComparator = function () {
            // intentionally empty
        };
        IdentityEqualityComparator.prototype.hashCode = function (obj) {
            return obj.hashCode();
        };
        IdentityEqualityComparator.prototype.equals = function (a, b) {
            return a === b;
        };
        IdentityEqualityComparator.INSTANCE = new IdentityEqualityComparator();
        __decorate([
            Override
        ], IdentityEqualityComparator.prototype, "hashCode", null);
        __decorate([
            Override
        ], IdentityEqualityComparator.prototype, "equals", null);
        return IdentityEqualityComparator;
    }());
    PredictionContext.IdentityEqualityComparator = IdentityEqualityComparator;
})(PredictionContext || (PredictionContext = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// import * as assert from "assert";
/**
 * This field stores the bit mask for implementing the
 * {@link #isPrecedenceFilterSuppressed} property as a bit within the
 * existing {@link #altAndOuterContextDepth} field.
 */
var SUPPRESS_PRECEDENCE_FILTER = 0x80000000;
/**
 * Represents a location with context in an ATN. The location is identified by the following values:
 *
 * * The current ATN state
 * * The predicted alternative
 * * The semantic context which must be true for this configuration to be enabled
 * * The syntactic context, which is represented as a graph-structured stack whose path(s) lead to the root of the rule
 *   invocations leading to this state
 *
 * In addition to these values, `ATNConfig` stores several properties about paths taken to get to the location which
 * were added over time to help with performance, correctness, and/or debugging.
 *
 * * `reachesIntoOuterContext`:: Used to ensure semantic predicates are not evaluated in the wrong context.
 * * `hasPassedThroughNonGreedyDecision`: Used for enabling first-match-wins instead of longest-match-wins after
 *   crossing a non-greedy decision.
 * * `lexerActionExecutor`: Used for tracking the lexer action(s) to execute should this instance be selected during
 *   lexing.
 * * `isPrecedenceFilterSuppressed`: A state variable for one of the dynamic disambiguation strategies employed by
 *   `ParserATNSimulator.applyPrecedenceFilter`.
 *
 * Due to the use of a graph-structured stack, a single `ATNConfig` is capable of representing many individual ATN
 * configurations which reached the same location in an ATN by following different paths.
 *
 * PERF: To conserve memory, `ATNConfig` is split into several different concrete types. `ATNConfig` itself stores the
 * minimum amount of information typically used to define an `ATNConfig` instance. Various derived types provide
 * additional storage space for cases where a non-default value is used for some of the object properties. The
 * `ATNConfig.create` and `ATNConfig.transform` methods automatically select the smallest concrete type capable of
 * representing the unique information for any given `ATNConfig`.
 */
var ATNConfig = /** @class */ (function () {
    function ATNConfig(state, altOrConfig, context) {
        if (typeof altOrConfig === "number") {
            // assert((altOrConfig & 0xFFFFFF) === altOrConfig);
            this._state = state;
            this.altAndOuterContextDepth = altOrConfig;
            this._context = context;
        }
        else {
            this._state = state;
            this.altAndOuterContextDepth = altOrConfig.altAndOuterContextDepth;
            this._context = context;
        }
    }
    ATNConfig.create = function (state, alt, context, semanticContext, lexerActionExecutor) {
        if (semanticContext === void 0) { semanticContext = SemanticContext.NONE; }
        if (semanticContext !== SemanticContext.NONE) {
            if (lexerActionExecutor != null) {
                return new ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, alt, context, false);
            }
            else {
                return new SemanticContextATNConfig(semanticContext, state, alt, context);
            }
        }
        else if (lexerActionExecutor != null) {
            return new ActionATNConfig(lexerActionExecutor, state, alt, context, false);
        }
        else {
            return new ATNConfig(state, alt, context);
        }
    };
    Object.defineProperty(ATNConfig.prototype, "state", {
        /** Gets the ATN state associated with this configuration */
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "alt", {
        /** What alt (or lexer rule) is predicted by this configuration */
        get: function () {
            return this.altAndOuterContextDepth & 0x00FFFFFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (context) {
            this._context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "reachesIntoOuterContext", {
        get: function () {
            return this.outerContextDepth !== 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "outerContextDepth", {
        /**
         * We cannot execute predicates dependent upon local context unless
         * we know for sure we are in the correct context. Because there is
         * no way to do this efficiently, we simply cannot evaluate
         * dependent predicates unless we are in the rule that initially
         * invokes the ATN simulator.
         *
         * closure() tracks the depth of how far we dip into the outer context:
         * depth &gt; 0.  Note that it may not be totally accurate depth since I
         * don't ever decrement. TODO: make it a boolean then
         */
        get: function () {
            return (this.altAndOuterContextDepth >>> 24) & 0x7F;
        },
        set: function (outerContextDepth) {
            // assert(outerContextDepth >= 0);
            // saturate at 0x7F - everything but zero/positive is only used for debug information anyway
            outerContextDepth = Math.min(outerContextDepth, 0x7F);
            this.altAndOuterContextDepth = ((outerContextDepth << 24) | (this.altAndOuterContextDepth & ~0x7F000000) >>> 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "lexerActionExecutor", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "semanticContext", {
        get: function () {
            return SemanticContext.NONE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfig.prototype, "hasPassedThroughNonGreedyDecision", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ATNConfig.prototype.clone = function () {
        return this.transform(this.state, false);
    };
    ATNConfig.prototype.transform = function (/*@NotNull*/ state, checkNonGreedy, arg2) {
        if (arg2 == null) {
            return this.transformImpl(state, this._context, this.semanticContext, checkNonGreedy, this.lexerActionExecutor);
        }
        else if (arg2 instanceof PredictionContext) {
            return this.transformImpl(state, arg2, this.semanticContext, checkNonGreedy, this.lexerActionExecutor);
        }
        else if (arg2 instanceof SemanticContext) {
            return this.transformImpl(state, this._context, arg2, checkNonGreedy, this.lexerActionExecutor);
        }
        else {
            return this.transformImpl(state, this._context, this.semanticContext, checkNonGreedy, arg2);
        }
    };
    ATNConfig.prototype.transformImpl = function (state, context, semanticContext, checkNonGreedy, lexerActionExecutor) {
        var passedThroughNonGreedy = checkNonGreedy && ATNConfig.checkNonGreedyDecision(this, state);
        if (semanticContext !== SemanticContext.NONE) {
            if (lexerActionExecutor != null || passedThroughNonGreedy) {
                return new ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, this, context, passedThroughNonGreedy);
            }
            else {
                return new SemanticContextATNConfig(semanticContext, state, this, context);
            }
        }
        else if (lexerActionExecutor != null || passedThroughNonGreedy) {
            return new ActionATNConfig(lexerActionExecutor, state, this, context, passedThroughNonGreedy);
        }
        else {
            return new ATNConfig(state, this, context);
        }
    };
    ATNConfig.checkNonGreedyDecision = function (source, target) {
        return source.hasPassedThroughNonGreedyDecision
            || target instanceof DecisionState && target.nonGreedy;
    };
    ATNConfig.prototype.appendContext = function (context, contextCache) {
        if (typeof context === "number") {
            var appendedContext = this.context.appendSingleContext(context, contextCache);
            var result = this.transform(this.state, false, appendedContext);
            return result;
        }
        else {
            var appendedContext = this.context.appendContext(context, contextCache);
            var result = this.transform(this.state, false, appendedContext);
            return result;
        }
    };
    /**
     * Determines if this `ATNConfig` fully contains another `ATNConfig`.
     *
     * An ATN configuration represents a position (including context) in an ATN during parsing. Since `ATNConfig` stores
     * the context as a graph, a single `ATNConfig` instance is capable of representing many ATN configurations which
     * are all in the same "location" but have different contexts. These `ATNConfig` instances are again merged when
     * they are added to an `ATNConfigSet`. This method supports `ATNConfigSet.contains` by evaluating whether a
     * particular `ATNConfig` contains all of the ATN configurations represented by another `ATNConfig`.
     *
     * An `ATNConfig` _a_ contains another `ATNConfig` _b_ if all of the following conditions are met:
     *
     * * The configurations are in the same state (`state`)
     * * The configurations predict the same alternative (`alt`)
     * * The semantic context of _a_ implies the semantic context of _b_ (this method performs a weaker equality check)
     * * Joining the prediction contexts of _a_ and _b_ results in the prediction context of _a_
     *
     * This method implements a conservative approximation of containment. As a result, when this method returns `true`
     * it is known that parsing from `subconfig` can only recognize a subset of the inputs which can be recognized
     * starting at the current `ATNConfig`. However, due to the imprecise evaluation of implication for the semantic
     * contexts, no assumptions can be made about the relationship between the configurations when this method returns
     * `false`.
     *
     * @param subconfig The sub configuration.
     * @returns `true` if this configuration contains `subconfig`; otherwise, `false`.
     */
    ATNConfig.prototype.contains = function (subconfig) {
        if (this.state.stateNumber !== subconfig.state.stateNumber
            || this.alt !== subconfig.alt
            || !this.semanticContext.equals(subconfig.semanticContext)) {
            return false;
        }
        var leftWorkList = [];
        var rightWorkList = [];
        leftWorkList.push(this.context);
        rightWorkList.push(subconfig.context);
        while (true) {
            var left = leftWorkList.pop();
            var right = rightWorkList.pop();
            if (!left || !right) {
                break;
            }
            if (left === right) {
                return true;
            }
            if (left.size < right.size) {
                return false;
            }
            if (right.isEmpty) {
                return left.hasEmpty;
            }
            else {
                for (var i = 0; i < right.size; i++) {
                    var index = left.findReturnState(right.getReturnState(i));
                    if (index < 0) {
                        // assumes invokingStates has no duplicate entries
                        return false;
                    }
                    leftWorkList.push(left.getParent(index));
                    rightWorkList.push(right.getParent(i));
                }
            }
        }
        return false;
    };
    Object.defineProperty(ATNConfig.prototype, "isPrecedenceFilterSuppressed", {
        get: function () {
            return (this.altAndOuterContextDepth & SUPPRESS_PRECEDENCE_FILTER) !== 0;
        },
        set: function (value) {
            if (value) {
                this.altAndOuterContextDepth |= SUPPRESS_PRECEDENCE_FILTER;
            }
            else {
                this.altAndOuterContextDepth &= ~SUPPRESS_PRECEDENCE_FILTER;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** An ATN configuration is equal to another if both have
     *  the same state, they predict the same alternative, and
     *  syntactic/semantic contexts are the same.
     */
    ATNConfig.prototype.equals = function (o) {
        if (this === o) {
            return true;
        }
        else if (!(o instanceof ATNConfig)) {
            return false;
        }
        return this.state.stateNumber === o.state.stateNumber
            && this.alt === o.alt
            && this.reachesIntoOuterContext === o.reachesIntoOuterContext
            && this.context.equals(o.context)
            && this.semanticContext.equals(o.semanticContext)
            && this.isPrecedenceFilterSuppressed === o.isPrecedenceFilterSuppressed
            && this.hasPassedThroughNonGreedyDecision === o.hasPassedThroughNonGreedyDecision
            && ObjectEqualityComparator.INSTANCE.equals(this.lexerActionExecutor, o.lexerActionExecutor);
    };
    ATNConfig.prototype.hashCode = function () {
        var hashCode = MurmurHash.initialize(7);
        hashCode = MurmurHash.update(hashCode, this.state.stateNumber);
        hashCode = MurmurHash.update(hashCode, this.alt);
        hashCode = MurmurHash.update(hashCode, this.reachesIntoOuterContext ? 1 : 0);
        hashCode = MurmurHash.update(hashCode, this.context);
        hashCode = MurmurHash.update(hashCode, this.semanticContext);
        hashCode = MurmurHash.update(hashCode, this.hasPassedThroughNonGreedyDecision ? 1 : 0);
        hashCode = MurmurHash.update(hashCode, this.lexerActionExecutor);
        hashCode = MurmurHash.finish(hashCode, 7);
        return hashCode;
    };
    /**
     * Returns a graphical representation of the current `ATNConfig` in Graphviz format. The graph can be stored to a
     * **.dot** file and then rendered to an image using Graphviz.
     *
     * @returns A Graphviz graph representing the current `ATNConfig`.
     *
     * @see http://www.graphviz.org/
     */
    ATNConfig.prototype.toDotString = function () {
        var builder = "";
        builder += ("digraph G {\n");
        builder += ("rankdir=LR;\n");
        var visited = new Array2DHashMap(PredictionContext.IdentityEqualityComparator.INSTANCE);
        var workList = [];
        function getOrAddContext(context) {
            var newNumber = visited.size;
            var result = visited.putIfAbsent(context, newNumber);
            if (result != null) {
                // Already saw this context
                return result;
            }
            workList.push(context);
            return newNumber;
        }
        workList.push(this.context);
        visited.put(this.context, 0);
        while (true) {
            var current = workList.pop();
            if (!current) {
                break;
            }
            for (var i = 0; i < current.size; i++) {
                builder += ("  s") + (getOrAddContext(current));
                builder += ("->");
                builder += ("s") + (getOrAddContext(current.getParent(i)));
                builder += ("[label=\"") + (current.getReturnState(i)) + ("\"];\n");
            }
        }
        builder += ("}\n");
        return builder.toString();
    };
    ATNConfig.prototype.toString = function (recog, showAlt, showContext) {
        // Must check showContext before showAlt to preserve original overload behavior
        if (showContext == null) {
            showContext = showAlt != null;
        }
        if (showAlt == null) {
            showAlt = true;
        }
        var buf = "";
        // if (this.state.ruleIndex >= 0) {
        // 	if (recog != null) {
        // 		buf += (recog.ruleNames[this.state.ruleIndex] + ":");
        // 	} else {
        // 		buf += (this.state.ruleIndex + ":");
        // 	}
        // }
        var contexts;
        if (showContext) {
            contexts = this.context.toStrings(recog, this.state.stateNumber);
        }
        else {
            contexts = ["?"];
        }
        var first = true;
        try {
            for (var contexts_1 = __values(contexts), contexts_1_1 = contexts_1.next(); !contexts_1_1.done; contexts_1_1 = contexts_1.next()) {
                var contextDesc = contexts_1_1.value;
                if (first) {
                    first = false;
                }
                else {
                    buf += (", ");
                }
                buf += ("(");
                buf += (this.state);
                if (showAlt) {
                    buf += (",");
                    buf += (this.alt);
                }
                if (this.context) {
                    buf += (",");
                    buf += (contextDesc);
                }
                if (this.semanticContext !== SemanticContext.NONE) {
                    buf += (",");
                    buf += (this.semanticContext);
                }
                if (this.reachesIntoOuterContext) {
                    buf += (",up=") + (this.outerContextDepth);
                }
                buf += (")");
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (contexts_1_1 && !contexts_1_1.done && (_a = contexts_1.return)) _a.call(contexts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return buf.toString();
        var e_1, _a;
    };
    __decorate([
        NotNull
    ], ATNConfig.prototype, "_state", void 0);
    __decorate([
        NotNull
    ], ATNConfig.prototype, "_context", void 0);
    __decorate([
        NotNull
    ], ATNConfig.prototype, "state", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ATNConfig.prototype, "context", null);
    __decorate([
        NotNull
    ], ATNConfig.prototype, "semanticContext", null);
    __decorate([
        Override
    ], ATNConfig.prototype, "clone", null);
    __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ATNConfig.prototype, "transformImpl", null);
    __decorate([
        Override
    ], ATNConfig.prototype, "equals", null);
    __decorate([
        Override
    ], ATNConfig.prototype, "hashCode", null);
    __decorate([
        __param(0, NotNull), __param(3, NotNull)
    ], ATNConfig, "create", null);
    ATNConfig = __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ATNConfig);
    return ATNConfig;
}());
/**
 * This class was derived from `ATNConfig` purely as a memory optimization. It allows for the creation of an `ATNConfig`
 * with a non-default semantic context.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
var SemanticContextATNConfig = /** @class */ (function (_super) {
    __extends(SemanticContextATNConfig, _super);
    function SemanticContextATNConfig(semanticContext, state, altOrConfig, context) {
        var _this = this;
        if (typeof altOrConfig === "number") {
            _this = _super.call(this, state, altOrConfig, context) || this;
        }
        else {
            _this = _super.call(this, state, altOrConfig, context) || this;
        }
        _this._semanticContext = semanticContext;
        return _this;
    }
    Object.defineProperty(SemanticContextATNConfig.prototype, "semanticContext", {
        get: function () {
            return this._semanticContext;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], SemanticContextATNConfig.prototype, "_semanticContext", void 0);
    __decorate([
        Override
    ], SemanticContextATNConfig.prototype, "semanticContext", null);
    SemanticContextATNConfig = __decorate([
        __param(1, NotNull), __param(2, NotNull)
    ], SemanticContextATNConfig);
    return SemanticContextATNConfig;
}(ATNConfig));
/**
 * This class was derived from `ATNConfig` purely as a memory optimization. It allows for the creation of an `ATNConfig`
 * with a lexer action.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
var ActionATNConfig = /** @class */ (function (_super) {
    __extends(ActionATNConfig, _super);
    function ActionATNConfig(lexerActionExecutor, state, altOrConfig, context, passedThroughNonGreedyDecision) {
        var _this = this;
        if (typeof altOrConfig === "number") {
            _this = _super.call(this, state, altOrConfig, context) || this;
        }
        else {
            _this = _super.call(this, state, altOrConfig, context) || this;
            if (altOrConfig.semanticContext !== SemanticContext.NONE) {
                throw new Error("Not supported");
            }
        }
        _this._lexerActionExecutor = lexerActionExecutor;
        _this.passedThroughNonGreedyDecision = passedThroughNonGreedyDecision;
        return _this;
    }
    Object.defineProperty(ActionATNConfig.prototype, "lexerActionExecutor", {
        get: function () {
            return this._lexerActionExecutor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionATNConfig.prototype, "hasPassedThroughNonGreedyDecision", {
        get: function () {
            return this.passedThroughNonGreedyDecision;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], ActionATNConfig.prototype, "lexerActionExecutor", null);
    __decorate([
        Override
    ], ActionATNConfig.prototype, "hasPassedThroughNonGreedyDecision", null);
    ActionATNConfig = __decorate([
        __param(1, NotNull), __param(2, NotNull)
    ], ActionATNConfig);
    return ActionATNConfig;
}(ATNConfig));
/**
 * This class was derived from `SemanticContextATNConfig` purely as a memory optimization. It allows for the creation of
 * an `ATNConfig` with both a lexer action and a non-default semantic context.
 *
 * See the `ATNConfig` documentation for more information about conserving memory through the use of several concrete
 * types.
 */
var ActionSemanticContextATNConfig = /** @class */ (function (_super) {
    __extends(ActionSemanticContextATNConfig, _super);
    function ActionSemanticContextATNConfig(lexerActionExecutor, semanticContext, state, altOrConfig, context, passedThroughNonGreedyDecision) {
        var _this = this;
        if (typeof altOrConfig === "number") {
            _this = _super.call(this, semanticContext, state, altOrConfig, context) || this;
        }
        else {
            _this = _super.call(this, semanticContext, state, altOrConfig, context) || this;
        }
        _this._lexerActionExecutor = lexerActionExecutor;
        _this.passedThroughNonGreedyDecision = passedThroughNonGreedyDecision;
        return _this;
    }
    Object.defineProperty(ActionSemanticContextATNConfig.prototype, "lexerActionExecutor", {
        get: function () {
            return this._lexerActionExecutor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionSemanticContextATNConfig.prototype, "hasPassedThroughNonGreedyDecision", {
        get: function () {
            return this.passedThroughNonGreedyDecision;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], ActionSemanticContextATNConfig.prototype, "lexerActionExecutor", null);
    __decorate([
        Override
    ], ActionSemanticContextATNConfig.prototype, "hasPassedThroughNonGreedyDecision", null);
    ActionSemanticContextATNConfig = __decorate([
        __param(1, NotNull), __param(2, NotNull)
    ], ActionSemanticContextATNConfig);
    return ActionSemanticContextATNConfig;
}(SemanticContextATNConfig));

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var process_1 = commonjsGlobal.process;

// Copyright Joyent, Inc. and other Node contributors.


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    if (cur.indexOf('\n') >= 0) ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isNull(arg) {
  return arg === null;
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isUndefined(arg) {
  return arg === void 0;
}

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Private empty array used to construct empty BitSets
 */
var EMPTY_DATA$1 = new Uint16Array(0);
/**
 * Gets the word index of the `UInt16` element in `BitSet.data` containing the bit with the specified index.
 */
function getIndex(bitNumber) {
    return bitNumber >>> 4;
}
/**
 * Convert a word index into the bit index of the LSB of that word
 */
function unIndex(n) {
    return n * 16;
}
/**
 * Get's the bit number of the least signficant bit set LSB which is set in a word non-zero word;
 * Bit numbers run from LSB to MSB starting with 0.
 */
function findLSBSet(word) {
    var bit = 1;
    for (var i = 0; i < 16; i++) {
        if ((word & bit) !== 0) {
            return i;
        }
        bit = (bit << 1) >>> 0;
    }
    throw new RangeError("No specified bit found");
}
function findMSBSet(word) {
    var bit = (1 << 15) >>> 0;
    for (var i = 15; i >= 0; i--) {
        if ((word & bit) !== 0) {
            return i;
        }
        bit = bit >>> 1;
    }
    throw new RangeError("No specified bit found");
}
/**
 * Gets a 16-bit mask with bit numbers fromBit to toBit (inclusive) set.
 * Bit numbers run from LSB to MSB starting with 0.
 */
function bitsFor(fromBit, toBit) {
    fromBit &= 0xF;
    toBit &= 0xF;
    if (fromBit === toBit) {
        return (1 << fromBit) >>> 0;
    }
    return ((0xFFFF >>> (15 - toBit)) ^ (0xFFFF >>> (16 - fromBit)));
}
/**
 * A lookup table for number of set bits in a 16-bit integer.   This is used to quickly count the cardinality (number of unique elements) of a BitSet.
 */
var POP_CNT = new Uint8Array(65536);
for (var i = 0; i < 16; i++) {
    var stride = (1 << i) >>> 0;
    var index = 0;
    while (index < POP_CNT.length) {
        // skip the numbers where the bit isn't set
        index += stride;
        // increment the ones where the bit is set
        for (var j = 0; j < stride; j++) {
            POP_CNT[index]++;
            index++;
        }
    }
}
var BitSet = /** @class */ (function () {
    /*
    ** constructor implementation
    */
    function BitSet(arg) {
        if (!arg) {
            // covering the case of unspecified and nbits===0
            this.data = EMPTY_DATA$1;
        }
        else if (typeof arg === "number") {
            if (arg < 0) {
                throw new RangeError("nbits cannot be negative");
            }
            else {
                this.data = new Uint16Array(getIndex(arg - 1) + 1);
            }
        }
        else {
            if (arg instanceof BitSet) {
                this.data = arg.data.slice(0); // Clone the data
            }
            else {
                var max = -1;
                try {
                    for (var arg_1 = __values(arg), arg_1_1 = arg_1.next(); !arg_1_1.done; arg_1_1 = arg_1.next()) {
                        var v = arg_1_1.value;
                        if (max < v) {
                            max = v;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (arg_1_1 && !arg_1_1.done && (_a = arg_1.return)) _a.call(arg_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                this.data = new Uint16Array(getIndex(max - 1) + 1);
                try {
                    for (var arg_2 = __values(arg), arg_2_1 = arg_2.next(); !arg_2_1.done; arg_2_1 = arg_2.next()) {
                        var v = arg_2_1.value;
                        this.set(v);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (arg_2_1 && !arg_2_1.done && (_b = arg_2.return)) _b.call(arg_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        var e_1, _a, e_2, _b;
    }
    /**
     * Performs a logical **AND** of this target bit set with the argument bit set. This bit set is modified so that
     * each bit in it has the value `true` if and only if it both initially had the value `true` and the corresponding
     * bit in the bit set argument also had the value `true`.
     */
    BitSet.prototype.and = function (set) {
        var data = this.data;
        var other = set.data;
        var words = Math.min(data.length, other.length);
        var lastWord = -1; // Keep track of index of last non-zero word
        for (var i = 0; i < words; i++) {
            var value = data[i] &= other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA$1;
        }
        if (lastWord < data.length - 1) {
            this.data = data.slice(0, lastWord + 1);
        }
    };
    /**
     * Clears all of the bits in this `BitSet` whose corresponding bit is set in the specified `BitSet`.
     */
    BitSet.prototype.andNot = function (set) {
        var data = this.data;
        var other = set.data;
        var words = Math.min(data.length, other.length);
        var lastWord = -1; // Keep track of index of last non-zero word
        for (var i = 0; i < words; i++) {
            var value = data[i] &= (other[i] ^ 0xFFFF);
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA$1;
        }
        if (lastWord < data.length - 1) {
            this.data = data.slice(0, lastWord + 1);
        }
    };
    /**
     * Returns the number of bits set to `true` in this `BitSet`.
     */
    BitSet.prototype.cardinality = function () {
        if (this.isEmpty) {
            return 0;
        }
        var data = this.data;
        var length = data.length;
        var result = 0;
        for (var i = 0; i < length; i++) {
            result += POP_CNT[data[i]];
        }
        return result;
    };
    BitSet.prototype.clear = function (fromIndex, toIndex) {
        if (fromIndex == null) {
            this.data.fill(0);
        }
        else if (toIndex == null) {
            this.set(fromIndex, false);
        }
        else {
            this.set(fromIndex, toIndex, false);
        }
    };
    BitSet.prototype.flip = function (fromIndex, toIndex) {
        if (toIndex == null) {
            toIndex = fromIndex;
        }
        if (fromIndex < 0 || toIndex < fromIndex) {
            throw new RangeError();
        }
        var word = getIndex(fromIndex);
        var lastWord = getIndex(toIndex);
        if (word === lastWord) {
            this.data[word] ^= bitsFor(fromIndex, toIndex);
        }
        else {
            this.data[word++] ^= bitsFor(fromIndex, 15);
            while (word < lastWord) {
                this.data[word++] ^= 0xFFFF;
            }
            this.data[word++] ^= bitsFor(0, toIndex);
        }
    };
    BitSet.prototype.get = function (fromIndex, toIndex) {
        if (toIndex === undefined) {
            return !!(this.data[getIndex(fromIndex)] & bitsFor(fromIndex, fromIndex));
        }
        else {
            // return a BitSet
            var result = new BitSet(toIndex + 1);
            for (var i = fromIndex; i <= toIndex; i++) {
                result.set(i, this.get(i));
            }
            return result;
        }
    };
    /**
     * Returns true if the specified `BitSet` has any bits set to `true` that are also set to `true` in this `BitSet`.
     *
     * @param set `BitSet` to intersect with
     */
    BitSet.prototype.intersects = function (set) {
        var smallerLength = Math.min(this.length(), set.length());
        if (smallerLength === 0) {
            return false;
        }
        var bound = getIndex(smallerLength - 1);
        for (var i = 0; i <= bound; i++) {
            if ((this.data[i] & set.data[i]) !== 0) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(BitSet.prototype, "isEmpty", {
        /**
         * Returns true if this `BitSet` contains no bits that are set to `true`.
         */
        get: function () {
            return this.length() === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the "logical size" of this `BitSet`: the index of the highest set bit in the `BitSet` plus one. Returns
     * zero if the `BitSet` contains no set bits.
     */
    BitSet.prototype.length = function () {
        if (!this.data.length) {
            return 0;
        }
        return this.previousSetBit(unIndex(this.data.length) - 1) + 1;
    };
    /**
     * Returns the index of the first bit that is set to `false` that occurs on or after the specified starting index,
     * If no such bit exists then `-1` is returned.
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is negative
     */
    BitSet.prototype.nextClearBit = function (fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        var data = this.data;
        var length = data.length;
        var word = getIndex(fromIndex);
        if (word > length) {
            return -1;
        }
        var ignore = 0xFFFF ^ bitsFor(fromIndex, 15);
        if ((data[word] | ignore) === 0xFFFF) {
            word++;
            ignore = 0;
            for (; word < length; word++) {
                if (data[word] !== 0xFFFF) {
                    break;
                }
            }
            if (word === length) {
                // Hit the end
                return -1;
            }
        }
        return unIndex(word) + findLSBSet((data[word] | ignore) ^ 0xFFFF);
    };
    /**
     * Returns the index of the first bit that is set to `true` that occurs on or after the specified starting index.
     * If no such bit exists then `-1` is returned.
     *
     * To iterate over the `true` bits in a `BitSet`, use the following loop:
     *
     * ```
     * for (let i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i + 1)) {
     *   // operate on index i here
     * }
     * ```
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is negative
     */
    BitSet.prototype.nextSetBit = function (fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        var data = this.data;
        var length = data.length;
        var word = getIndex(fromIndex);
        if (word > length) {
            return -1;
        }
        var mask = bitsFor(fromIndex, 15);
        if ((data[word] & mask) === 0) {
            word++;
            mask = 0xFFFF;
            for (; word < length; word++) {
                if (data[word] !== 0) {
                    break;
                }
            }
            if (word >= length) {
                return -1;
            }
        }
        return unIndex(word) + findLSBSet(data[word] & mask);
    };
    /**
     * Performs a logical **OR** of this bit set with the bit set argument. This bit set is modified so that a bit in it
     * has the value `true` if and only if it either already had the value `true` or the corresponding bit in the bit
     * set argument has the value `true`.
     */
    BitSet.prototype.or = function (set) {
        var data = this.data;
        var other = set.data;
        var minWords = Math.min(data.length, other.length);
        var words = Math.max(data.length, other.length);
        var dest = data.length === words ? data : new Uint16Array(words);
        var lastWord = -1;
        // Or those words both sets have in common
        for (var i = 0; i < minWords; i++) {
            var value = dest[i] = data[i] | other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        // Copy words from larger set (if there is one)
        var longer = data.length > other.length ? data : other;
        for (var i = minWords; i < words; i++) {
            var value = dest[i] = longer[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA$1;
        }
        else if (dest.length === lastWord + 1) {
            this.data = dest;
        }
        else {
            this.data = dest.slice(0, lastWord);
        }
    };
    /**
     * Returns the index of the nearest bit that is set to `false` that occurs on or before the specified starting
     * index. If no such bit exists, or if `-1` is given as the starting index, then `-1` is returned.
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is less than `-1`
     */
    BitSet.prototype.previousClearBit = function (fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        var data = this.data;
        var length = data.length;
        var word = getIndex(fromIndex);
        if (word >= length) {
            word = length - 1;
        }
        var ignore = 0xFFFF ^ bitsFor(0, fromIndex);
        if ((data[word] | ignore) === 0xFFFF) {
            ignore = 0;
            word--;
            for (; word >= 0; word--) {
                if (data[word] !== 0xFFFF) {
                    break;
                }
            }
            if (word < 0) {
                // Hit the end
                return -1;
            }
        }
        return unIndex(word) + findMSBSet((data[word] | ignore) ^ 0xFFFF);
    };
    /**
     * Returns the index of the nearest bit that is set to `true` that occurs on or before the specified starting index.
     * If no such bit exists, or if `-1` is given as the starting index, then `-1` is returned.
     *
     * To iterate over the `true` bits in a `BitSet`, use the following loop:
     *
     * ```
     * for (let i = bs.length(); (i = bs.previousSetBit(i-1)) >= 0; ) {
     *   // operate on index i here
     * }
     * ```
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is less than `-1`
     */
    BitSet.prototype.previousSetBit = function (fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        var data = this.data;
        var length = data.length;
        var word = getIndex(fromIndex);
        if (word >= length) {
            word = length - 1;
        }
        var mask = bitsFor(0, fromIndex);
        if ((data[word] & mask) === 0) {
            word--;
            mask = 0xFFFF;
            for (; word >= 0; word--) {
                if (data[word] !== 0) {
                    break;
                }
            }
            if (word < 0) {
                return -1;
            }
        }
        return unIndex(word) + findMSBSet(data[word] & mask);
    };
    BitSet.prototype.set = function (fromIndex, toIndex, value) {
        if (toIndex === undefined) {
            toIndex = fromIndex;
            value = true;
        }
        else if (typeof toIndex === "boolean") {
            value = toIndex;
            toIndex = fromIndex;
        }
        if (value === undefined) {
            value = true;
        }
        if (fromIndex < 0 || fromIndex > toIndex) {
            throw new RangeError();
        }
        var word = getIndex(fromIndex);
        var lastWord = getIndex(toIndex);
        if (value && lastWord >= this.data.length) {
            // Grow array "just enough" for bits we need to set
            var temp_1 = new Uint16Array(lastWord + 1);
            this.data.forEach(function (value, index) { return temp_1[index] = value; });
            this.data = temp_1;
        }
        else if (!value) {
            // But there is no need to grow array to clear bits.
            if (word >= this.data.length) {
                // Early exit
                return;
            }
            if (lastWord >= this.data.length) {
                // Adjust work to fit array
                lastWord = this.data.length - 1;
                toIndex = this.data.length * 16 - 1;
            }
        }
        if (word === lastWord) {
            this._setBits(word, value, bitsFor(fromIndex, toIndex));
        }
        else {
            this._setBits(word++, value, bitsFor(fromIndex, 15));
            while (word < lastWord) {
                this.data[word++] = value ? 0xFFFF : 0;
            }
            this._setBits(word, value, bitsFor(0, toIndex));
        }
    };
    BitSet.prototype._setBits = function (word, value, mask) {
        if (value) {
            this.data[word] |= mask;
        }
        else {
            this.data[word] &= 0xFFFF ^ mask;
        }
    };
    Object.defineProperty(BitSet.prototype, "size", {
        /**
         * Returns the number of bits of space actually in use by this `BitSet` to represent bit values. The maximum element
         * in the set is the size - 1st element.
         */
        get: function () {
            return this.data.byteLength * 8;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a new byte array containing all the bits in this bit set.
     *
     * More precisely, if
     * `let bytes = s.toByteArray();`
     * then `bytes.length === (s.length()+7)/8` and `s.get(n) === ((bytes[n/8] & (1<<(n%8))) != 0)` for all
     * `n < 8 * bytes.length`.
     */
    // toByteArray(): Int8Array {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    /**
     * Returns a new integer array containing all the bits in this bit set.
     *
     * More precisely, if
     * `let integers = s.toIntegerArray();`
     * then `integers.length === (s.length()+31)/32` and `s.get(n) === ((integers[n/32] & (1<<(n%32))) != 0)` for all
     * `n < 32 * integers.length`.
     */
    // toIntegerArray(): Int32Array {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    BitSet.prototype.hashCode = function () {
        return MurmurHash.hashCode(this.data, 22);
    };
    /**
     * Compares this object against the specified object. The result is `true` if and only if the argument is not
     * `undefined` and is a `Bitset` object that has exactly the same set of bits set to `true` as this bit set. That
     * is, for every nonnegative index `k`,
     *
     * ```
     * ((BitSet)obj).get(k) == this.get(k)
     * ```
     *
     * must be true. The current sizes of the two bit sets are not compared.
     */
    BitSet.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof BitSet)) {
            return false;
        }
        var len = this.length();
        if (len !== obj.length()) {
            return false;
        }
        if (len === 0) {
            return true;
        }
        var bound = getIndex(len - 1);
        for (var i = 0; i <= bound; i++) {
            if (this.data[i] !== obj.data[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Returns a string representation of this bit set. For every index for which this `BitSet` contains a bit in the
     * set state, the decimal representation of that index is included in the result. Such indices are listed in order
     * from lowest to highest, separated by ", " (a comma and a space) and surrounded by braces, resulting in the usual
     * mathematical notation for a set of integers.
     *
     * Example:
     *
     *     BitSet drPepper = new BitSet();
     *
     * Now `drPepper.toString()` returns `"{}"`.
     *
     *     drPepper.set(2);
     *
     * Now `drPepper.toString()` returns `"{2}"`.
     *
     *     drPepper.set(4);
     *     drPepper.set(10);
     *
     * Now `drPepper.toString()` returns `"{2, 4, 10}"`.
     */
    BitSet.prototype.toString = function () {
        var result = "{";
        var first = true;
        for (var i = this.nextSetBit(0); i >= 0; i = this.nextSetBit(i + 1)) {
            if (first) {
                first = false;
            }
            else {
                result += ", ";
            }
            result += i;
        }
        result += "}";
        return result;
    };
    // static valueOf(bytes: Int8Array): BitSet;
    // static valueOf(buffer: ArrayBuffer): BitSet;
    // static valueOf(integers: Int32Array): BitSet;
    // static valueOf(data: Int8Array | Int32Array | ArrayBuffer): BitSet {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    /**
     * Performs a logical **XOR** of this bit set with the bit set argument. This bit set is modified so that a bit in
     * it has the value `true` if and only if one of the following statements holds:
     *
     * * The bit initially has the value `true`, and the corresponding bit in the argument has the value `false`.
     * * The bit initially has the value `false`, and the corresponding bit in the argument has the value `true`.
     */
    BitSet.prototype.xor = function (set) {
        var data = this.data;
        var other = set.data;
        var minWords = Math.min(data.length, other.length);
        var words = Math.max(data.length, other.length);
        var dest = data.length === words ? data : new Uint16Array(words);
        var lastWord = -1;
        // Xor those words both sets have in common
        for (var i = 0; i < minWords; i++) {
            var value = dest[i] = data[i] ^ other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        // Copy words from larger set (if there is one)
        var longer = data.length > other.length ? data : other;
        for (var i = minWords; i < words; i++) {
            var value = dest[i] = longer[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA$1;
        }
        else if (dest.length === lastWord + 1) {
            this.data = dest;
        }
        else {
            this.data = dest.slice(0, lastWord + 1);
        }
    };
    BitSet.prototype.clone = function () {
        return new BitSet(this);
    };
    BitSet.prototype[Symbol.iterator] = function () {
        return new BitSetIterator(this.data);
    };
    // Overrides formatting for nodejs assert etc.
    BitSet.prototype[inspect.custom] = function () {
        return "BitSet " + this.toString();
    };
    return BitSet;
}());
var BitSetIterator = /** @class */ (function () {
    function BitSetIterator(data) {
        this.data = data;
        this.index = 0;
        this.mask = 0xFFFF;
    }
    BitSetIterator.prototype.next = function () {
        while (this.index < this.data.length) {
            var bits = this.data[this.index] & this.mask;
            if (bits !== 0) {
                var bitNumber = unIndex(this.index) + findLSBSet(bits);
                this.mask = bitsFor(bitNumber + 1, 15);
                return { done: false, value: bitNumber };
            }
            this.index++;
            this.mask = 0xFFFF;
        }
        return { done: true, value: -1 };
    };
    BitSetIterator.prototype[Symbol.iterator] = function () { return this; };
    return BitSetIterator;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var KeyTypeEqualityComparer = /** @class */ (function () {
    function KeyTypeEqualityComparer() {
    }
    KeyTypeEqualityComparer.prototype.hashCode = function (key) {
        return key.state ^ key.alt;
    };
    KeyTypeEqualityComparer.prototype.equals = function (a, b) {
        return a.state === b.state && a.alt === b.alt;
    };
    KeyTypeEqualityComparer.INSTANCE = new KeyTypeEqualityComparer();
    return KeyTypeEqualityComparer;
}());
function NewKeyedConfigMap(map) {
    if (map) {
        return new Array2DHashMap(map);
    }
    else {
        return new Array2DHashMap(KeyTypeEqualityComparer.INSTANCE);
    }
}
/**
 * Represents a set of ATN configurations (see `ATNConfig`). As configurations are added to the set, they are merged
 * with other `ATNConfig` instances already in the set when possible using the graph-structured stack.
 *
 * An instance of this class represents the complete set of positions (with context) in an ATN which would be associated
 * with a single DFA state. Its internal representation is more complex than traditional state used for NFA to DFA
 * conversion due to performance requirements (both improving speed and reducing memory overhead) as well as supporting
 * features such as semantic predicates and non-greedy operators in a form to support ANTLR's prediction algorithm.
 *
 * @author Sam Harwell
 */
var ATNConfigSet = /** @class */ (function () {
    function ATNConfigSet(set, readonly) {
        this._uniqueAlt = 0;
        // Used in parser and lexer. In lexer, it indicates we hit a pred
        // while computing a closure operation.  Don't make a DFA state from this.
        this._hasSemanticContext = false;
        this._dipsIntoOuterContext = false;
        /**
         * When `true`, this config set represents configurations where the entire
         * outer context has been consumed by the ATN interpreter. This prevents the
         * {@link ParserATNSimulator#closure} from pursuing the global FOLLOW when a
         * rule stop state is reached with an empty prediction context.
         *
         * Note: `outermostConfigSet` and {@link #dipsIntoOuterContext} should never
         * be true at the same time.
         */
        this.outermostConfigSet = false;
        this.cachedHashCode = -1;
        if (!set) {
            this.mergedConfigs = NewKeyedConfigMap();
            this.unmerged = [];
            this.configs = [];
            this._uniqueAlt = ATN.INVALID_ALT_NUMBER;
        }
        else {
            if (readonly) {
                this.mergedConfigs = undefined;
                this.unmerged = undefined;
            }
            else if (!set.isReadOnly) {
                this.mergedConfigs = NewKeyedConfigMap(set.mergedConfigs);
                this.unmerged = set.unmerged.slice(0);
            }
            else {
                this.mergedConfigs = NewKeyedConfigMap();
                this.unmerged = [];
            }
            this.configs = set.configs.slice(0);
            this._dipsIntoOuterContext = set._dipsIntoOuterContext;
            this._hasSemanticContext = set._hasSemanticContext;
            this.outermostConfigSet = set.outermostConfigSet;
            if (readonly || !set.isReadOnly) {
                this._uniqueAlt = set._uniqueAlt;
                this._conflictInfo = set._conflictInfo;
            }
            // if (!readonly && set.isReadOnly) -> addAll is called from clone()
        }
    }
    /**
     * Get the set of all alternatives represented by configurations in this
     * set.
     */
    ATNConfigSet.prototype.getRepresentedAlternatives = function () {
        if (this._conflictInfo != null) {
            return this._conflictInfo.conflictedAlts.clone();
        }
        var alts = new BitSet();
        try {
            for (var _a = __values(this), _b = _a.next(); !_b.done; _b = _a.next()) {
                var config = _b.value;
                alts.set(config.alt);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return alts;
        var e_1, _c;
    };
    Object.defineProperty(ATNConfigSet.prototype, "isReadOnly", {
        get: function () {
            return this.mergedConfigs == null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "isOutermostConfigSet", {
        get: function () {
            return this.outermostConfigSet;
        },
        set: function (outermostConfigSet) {
            if (this.outermostConfigSet && !outermostConfigSet) {
                throw new Error("IllegalStateException");
            }
            // assert(!outermostConfigSet || !this._dipsIntoOuterContext);
            this.outermostConfigSet = outermostConfigSet;
        },
        enumerable: true,
        configurable: true
    });
    ATNConfigSet.prototype.getStates = function () {
        var states = new Array2DHashSet(ObjectEqualityComparator.INSTANCE);
        try {
            for (var _a = __values(this.configs), _b = _a.next(); !_b.done; _b = _a.next()) {
                var c = _b.value;
                states.add(c.state);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return states;
        var e_2, _c;
    };
    ATNConfigSet.prototype.optimizeConfigs = function (interpreter) {
        if (this.configs.length === 0) {
            return;
        }
        try {
            for (var _a = __values(this.configs), _b = _a.next(); !_b.done; _b = _a.next()) {
                var config = _b.value;
                config.context = interpreter.atn.getCachedContext(config.context);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _c;
    };
    ATNConfigSet.prototype.clone = function (readonly) {
        var copy = new ATNConfigSet(this, readonly);
        if (!readonly && this.isReadOnly) {
            copy.addAll(this.configs);
        }
        return copy;
    };
    Object.defineProperty(ATNConfigSet.prototype, "size", {
        get: function () {
            return this.configs.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "isEmpty", {
        get: function () {
            return this.configs.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    ATNConfigSet.prototype.contains = function (o) {
        if (!(o instanceof ATNConfig)) {
            return false;
        }
        if (this.mergedConfigs && this.unmerged) {
            var config = o;
            var configKey = this.getKey(config);
            var mergedConfig = this.mergedConfigs.get(configKey);
            if (mergedConfig != null && this.canMerge(config, configKey, mergedConfig)) {
                return mergedConfig.contains(config);
            }
            try {
                for (var _a = __values(this.unmerged), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var c = _b.value;
                    if (c.contains(o)) {
                        return true;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        else {
            try {
                for (var _d = __values(this.configs), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var c = _e.value;
                    if (c.contains(o)) {
                        return true;
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        return false;
        var e_4, _c, e_5, _f;
    };
    ATNConfigSet.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, __values(this.configs)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    ATNConfigSet.prototype.toArray = function () {
        return this.configs;
    };
    ATNConfigSet.prototype.add = function (e, contextCache) {
        this.ensureWritable();
        if (!this.mergedConfigs || !this.unmerged) {
            throw new Error("Covered by ensureWritable but duplicated here for strict null check limitation");
        }
        // assert(!this.outermostConfigSet || !e.reachesIntoOuterContext);
        if (contextCache == null) {
            contextCache = PredictionContextCache.UNCACHED;
        }
        var addKey;
        var key = this.getKey(e);
        var mergedConfig = this.mergedConfigs.get(key);
        addKey = (mergedConfig == null);
        if (mergedConfig != null && this.canMerge(e, key, mergedConfig)) {
            mergedConfig.outerContextDepth = Math.max(mergedConfig.outerContextDepth, e.outerContextDepth);
            if (e.isPrecedenceFilterSuppressed) {
                mergedConfig.isPrecedenceFilterSuppressed = true;
            }
            var joined = PredictionContext.join(mergedConfig.context, e.context, contextCache);
            this.updatePropertiesForMergedConfig(e);
            if (mergedConfig.context === joined) {
                return false;
            }
            mergedConfig.context = joined;
            return true;
        }
        for (var i = 0; i < this.unmerged.length; i++) {
            var unmergedConfig = this.unmerged[i];
            if (this.canMerge(e, key, unmergedConfig)) {
                unmergedConfig.outerContextDepth = Math.max(unmergedConfig.outerContextDepth, e.outerContextDepth);
                if (e.isPrecedenceFilterSuppressed) {
                    unmergedConfig.isPrecedenceFilterSuppressed = true;
                }
                var joined = PredictionContext.join(unmergedConfig.context, e.context, contextCache);
                this.updatePropertiesForMergedConfig(e);
                if (unmergedConfig.context === joined) {
                    return false;
                }
                unmergedConfig.context = joined;
                if (addKey) {
                    this.mergedConfigs.put(key, unmergedConfig);
                    this.unmerged.splice(i, 1);
                }
                return true;
            }
        }
        this.configs.push(e);
        if (addKey) {
            this.mergedConfigs.put(key, e);
        }
        else {
            this.unmerged.push(e);
        }
        this.updatePropertiesForAddedConfig(e);
        return true;
    };
    ATNConfigSet.prototype.updatePropertiesForMergedConfig = function (config) {
        // merged configs can't change the alt or semantic context
        this._dipsIntoOuterContext = this._dipsIntoOuterContext || config.reachesIntoOuterContext;
        // assert(!this.outermostConfigSet || !this._dipsIntoOuterContext);
    };
    ATNConfigSet.prototype.updatePropertiesForAddedConfig = function (config) {
        if (this.configs.length === 1) {
            this._uniqueAlt = config.alt;
        }
        else if (this._uniqueAlt !== config.alt) {
            this._uniqueAlt = ATN.INVALID_ALT_NUMBER;
        }
        this._hasSemanticContext = this._hasSemanticContext || !SemanticContext.NONE.equals(config.semanticContext);
        this._dipsIntoOuterContext = this._dipsIntoOuterContext || config.reachesIntoOuterContext;
        // assert(!this.outermostConfigSet || !this._dipsIntoOuterContext);
    };
    ATNConfigSet.prototype.canMerge = function (left, leftKey, right) {
        if (left.state.stateNumber !== right.state.stateNumber) {
            return false;
        }
        if (leftKey.alt !== right.alt) {
            return false;
        }
        return left.semanticContext.equals(right.semanticContext);
    };
    ATNConfigSet.prototype.getKey = function (e) {
        return { state: e.state.stateNumber, alt: e.alt };
    };
    ATNConfigSet.prototype.containsAll = function (c) {
        try {
            for (var c_1 = __values(c), c_1_1 = c_1.next(); !c_1_1.done; c_1_1 = c_1.next()) {
                var o = c_1_1.value;
                if (!(o instanceof ATNConfig)) {
                    return false;
                }
                if (!this.contains(o)) {
                    return false;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (c_1_1 && !c_1_1.done && (_a = c_1.return)) _a.call(c_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return true;
        var e_6, _a;
    };
    ATNConfigSet.prototype.addAll = function (c, contextCache) {
        this.ensureWritable();
        var changed = false;
        try {
            for (var c_2 = __values(c), c_2_1 = c_2.next(); !c_2_1.done; c_2_1 = c_2.next()) {
                var group = c_2_1.value;
                if (this.add(group, contextCache)) {
                    changed = true;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (c_2_1 && !c_2_1.done && (_a = c_2.return)) _a.call(c_2);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return changed;
        var e_7, _a;
    };
    ATNConfigSet.prototype.clear = function () {
        this.ensureWritable();
        if (!this.mergedConfigs || !this.unmerged) {
            throw new Error("Covered by ensureWritable but duplicated here for strict null check limitation");
        }
        this.mergedConfigs.clear();
        this.unmerged.length = 0;
        this.configs.length = 0;
        this._dipsIntoOuterContext = false;
        this._hasSemanticContext = false;
        this._uniqueAlt = ATN.INVALID_ALT_NUMBER;
        this._conflictInfo = undefined;
    };
    ATNConfigSet.prototype.equals = function (obj) {
        if (this === obj) {
            return true;
        }
        if (!(obj instanceof ATNConfigSet)) {
            return false;
        }
        return this.outermostConfigSet === obj.outermostConfigSet
            && equals(this._conflictInfo, obj._conflictInfo)
            && ArrayEqualityComparator.INSTANCE.equals(this.configs, obj.configs);
    };
    ATNConfigSet.prototype.hashCode = function () {
        if (this.isReadOnly && this.cachedHashCode !== -1) {
            return this.cachedHashCode;
        }
        var hashCode = 1;
        hashCode = 5 * hashCode ^ (this.outermostConfigSet ? 1 : 0);
        hashCode = 5 * hashCode ^ ArrayEqualityComparator.INSTANCE.hashCode(this.configs);
        if (this.isReadOnly) {
            this.cachedHashCode = hashCode;
        }
        return hashCode;
    };
    ATNConfigSet.prototype.toString = function (showContext) {
        if (showContext == null) {
            showContext = false;
        }
        var buf = "";
        var sortedConfigs = this.configs.slice(0);
        sortedConfigs.sort(function (o1, o2) {
            if (o1.alt !== o2.alt) {
                return o1.alt - o2.alt;
            }
            else if (o1.state.stateNumber !== o2.state.stateNumber) {
                return o1.state.stateNumber - o2.state.stateNumber;
            }
            else {
                return o1.semanticContext.toString().localeCompare(o2.semanticContext.toString());
            }
        });
        buf += ("[");
        for (var i = 0; i < sortedConfigs.length; i++) {
            if (i > 0) {
                buf += (", ");
            }
            buf += (sortedConfigs[i].toString(undefined, true, showContext));
        }
        buf += ("]");
        if (this._hasSemanticContext) {
            buf += (",hasSemanticContext=") + (this._hasSemanticContext);
        }
        if (this._uniqueAlt !== ATN.INVALID_ALT_NUMBER) {
            buf += (",uniqueAlt=") + (this._uniqueAlt);
        }
        if (this._conflictInfo != null) {
            buf += (",conflictingAlts=") + (this._conflictInfo.conflictedAlts);
            if (!this._conflictInfo.isExact) {
                buf += ("*");
            }
        }
        if (this._dipsIntoOuterContext) {
            buf += (",dipsIntoOuterContext");
        }
        return buf.toString();
    };
    Object.defineProperty(ATNConfigSet.prototype, "uniqueAlt", {
        get: function () {
            return this._uniqueAlt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "hasSemanticContext", {
        get: function () {
            return this._hasSemanticContext;
        },
        set: function (value) {
            this.ensureWritable();
            this._hasSemanticContext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "conflictInfo", {
        get: function () {
            return this._conflictInfo;
        },
        set: function (conflictInfo) {
            this.ensureWritable();
            this._conflictInfo = conflictInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "conflictingAlts", {
        get: function () {
            if (this._conflictInfo == null) {
                return undefined;
            }
            return this._conflictInfo.conflictedAlts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "isExactConflict", {
        get: function () {
            if (this._conflictInfo == null) {
                return false;
            }
            return this._conflictInfo.isExact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "dipsIntoOuterContext", {
        get: function () {
            return this._dipsIntoOuterContext;
        },
        enumerable: true,
        configurable: true
    });
    ATNConfigSet.prototype.get = function (index) {
        return this.configs[index];
    };
    ATNConfigSet.prototype.ensureWritable = function () {
        if (this.isReadOnly) {
            throw new Error("This ATNConfigSet is read only.");
        }
    };
    __decorate([
        NotNull
    ], ATNConfigSet.prototype, "getRepresentedAlternatives", null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, "size", null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, "isEmpty", null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, "contains", null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, Symbol.iterator, null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, "toArray", null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, "containsAll", null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, "clear", null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, "equals", null);
    __decorate([
        Override
    ], ATNConfigSet.prototype, "hashCode", null);
    return ATNConfigSet;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// import * as assert from "assert";
/** A DFA state represents a set of possible ATN configurations.
 *  As Aho, Sethi, Ullman p. 117 says "The DFA uses its state
 *  to keep track of all possible states the ATN can be in after
 *  reading each input symbol.  That is to say, after reading
 *  input a1a2..an, the DFA is in a state that represents the
 *  subset T of the states of the ATN that are reachable from the
 *  ATN's start state along some path labeled a1a2..an."
 *  In conventional NFA&rarr;DFA conversion, therefore, the subset T
 *  would be a bitset representing the set of states the
 *  ATN could be in.  We need to track the alt predicted by each
 *  state as well, however.  More importantly, we need to maintain
 *  a stack of states, tracking the closure operations as they
 *  jump from rule to rule, emulating rule invocations (method calls).
 *  I have to add a stack to simulate the proper lookahead sequences for
 *  the underlying LL grammar from which the ATN was derived.
 *
 *  I use a set of ATNConfig objects not simple states.  An ATNConfig
 *  is both a state (ala normal conversion) and a RuleContext describing
 *  the chain of rules (if any) followed to arrive at that state.
 *
 *  A DFA state may have multiple references to a particular state,
 *  but with different ATN contexts (with same or different alts)
 *  meaning that state was reached via a different set of rule invocations.
 */
var DFAState = /** @class */ (function () {
    /**
     * Constructs a new `DFAState`.
     *
     * @param configs The set of ATN configurations defining this state.
     */
    function DFAState(configs) {
        this.stateNumber = -1;
        this.configs = configs;
        this.edges = new Map();
        this.contextEdges = new Map();
    }
    Object.defineProperty(DFAState.prototype, "isContextSensitive", {
        get: function () {
            return !!this.contextSymbols;
        },
        enumerable: true,
        configurable: true
    });
    DFAState.prototype.isContextSymbol = function (symbol) {
        if (!this.isContextSensitive) {
            return false;
        }
        return this.contextSymbols.get(symbol);
    };
    DFAState.prototype.setContextSymbol = function (symbol) {
        // assert(this.isContextSensitive);
        this.contextSymbols.set(symbol);
    };
    DFAState.prototype.setContextSensitive = function (atn) {
        // assert(!this.configs.isOutermostConfigSet);
        if (this.isContextSensitive) {
            return;
        }
        if (!this.contextSymbols) {
            this.contextSymbols = new BitSet();
        }
    };
    Object.defineProperty(DFAState.prototype, "acceptStateInfo", {
        get: function () {
            return this._acceptStateInfo;
        },
        set: function (acceptStateInfo) {
            this._acceptStateInfo = acceptStateInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DFAState.prototype, "isAcceptState", {
        get: function () {
            return !!this._acceptStateInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DFAState.prototype, "prediction", {
        get: function () {
            if (!this._acceptStateInfo) {
                return ATN.INVALID_ALT_NUMBER;
            }
            return this._acceptStateInfo.prediction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DFAState.prototype, "lexerActionExecutor", {
        get: function () {
            if (!this._acceptStateInfo) {
                return undefined;
            }
            return this._acceptStateInfo.lexerActionExecutor;
        },
        enumerable: true,
        configurable: true
    });
    DFAState.prototype.getTarget = function (symbol) {
        return this.edges.get(symbol);
    };
    DFAState.prototype.setTarget = function (symbol, target) {
        this.edges.set(symbol, target);
    };
    DFAState.prototype.getEdgeMap = function () {
        return this.edges;
    };
    DFAState.prototype.getContextTarget = function (invokingState) {
        if (invokingState === PredictionContext.EMPTY_FULL_STATE_KEY) {
            invokingState = -1;
        }
        return this.contextEdges.get(invokingState);
    };
    DFAState.prototype.setContextTarget = function (invokingState, target) {
        if (!this.isContextSensitive) {
            throw new Error("The state is not context sensitive.");
        }
        if (invokingState === PredictionContext.EMPTY_FULL_STATE_KEY) {
            invokingState = -1;
        }
        this.contextEdges.set(invokingState, target);
    };
    DFAState.prototype.getContextEdgeMap = function () {
        var map = new Map(this.contextEdges);
        var existing = map.get(-1);
        if (existing !== undefined) {
            if (map.size === 1) {
                var result = new Map();
                result.set(PredictionContext.EMPTY_FULL_STATE_KEY, existing);
                return result;
            }
            else {
                map.delete(-1);
                map.set(PredictionContext.EMPTY_FULL_STATE_KEY, existing);
            }
        }
        return map;
    };
    DFAState.prototype.hashCode = function () {
        var hash = MurmurHash.initialize(7);
        hash = MurmurHash.update(hash, this.configs.hashCode());
        hash = MurmurHash.finish(hash, 1);
        return hash;
    };
    /**
     * Two {@link DFAState} instances are equal if their ATN configuration sets
     * are the same. This method is used to see if a state already exists.
     *
     * Because the number of alternatives and number of ATN configurations are
     * finite, there is a finite number of DFA states that can be processed.
     * This is necessary to show that the algorithm terminates.
     *
     * Cannot test the DFA state numbers here because in
     * {@link ParserATNSimulator#addDFAState} we need to know if any other state
     * exists that has this exact set of ATN configurations. The
     * {@link #stateNumber} is irrelevant.
     */
    DFAState.prototype.equals = function (o) {
        // compare set of ATN configurations in this set with other
        if (this === o) {
            return true;
        }
        if (!(o instanceof DFAState)) {
            return false;
        }
        var other = o;
        var sameSet = this.configs.equals(other.configs);
        //		System.out.println("DFAState.equals: "+configs+(sameSet?"==":"!=")+other.configs);
        return sameSet;
    };
    DFAState.prototype.toString = function () {
        var buf = "";
        buf += (this.stateNumber) + (":") + (this.configs);
        if (this.isAcceptState) {
            buf += ("=>");
            if (this.predicates) {
                buf += this.predicates;
            }
            else {
                buf += (this.prediction);
            }
        }
        return buf.toString();
    };
    __decorate([
        NotNull
    ], DFAState.prototype, "configs", void 0);
    __decorate([
        NotNull
    ], DFAState.prototype, "edges", void 0);
    __decorate([
        NotNull
    ], DFAState.prototype, "contextEdges", void 0);
    __decorate([
        Override
    ], DFAState.prototype, "hashCode", null);
    __decorate([
        Override
    ], DFAState.prototype, "equals", null);
    __decorate([
        Override
    ], DFAState.prototype, "toString", null);
    return DFAState;
}());
(function (DFAState) {
    /** Map a predicate to a predicted alternative. */
    var PredPrediction = /** @class */ (function () {
        function PredPrediction(pred, alt) {
            this.alt = alt;
            this.pred = pred;
        }
        PredPrediction.prototype.toString = function () {
            return "(" + this.pred + ", " + this.alt + ")";
        };
        __decorate([
            NotNull
        ], PredPrediction.prototype, "pred", void 0);
        __decorate([
            Override
        ], PredPrediction.prototype, "toString", null);
        PredPrediction = __decorate([
            __param(0, NotNull)
        ], PredPrediction);
        return PredPrediction;
    }());
    DFAState.PredPrediction = PredPrediction;
})(DFAState || (DFAState = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var ATNSimulator = /** @class */ (function () {
    function ATNSimulator(atn) {
        this.atn = atn;
    }
    Object.defineProperty(ATNSimulator, "ERROR", {
        get: function () {
            if (!ATNSimulator._ERROR) {
                ATNSimulator._ERROR = new DFAState(new ATNConfigSet());
                ATNSimulator._ERROR.stateNumber = PredictionContext.EMPTY_FULL_STATE_KEY;
            }
            return ATNSimulator._ERROR;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clear the DFA cache used by the current instance. Since the DFA cache may
     * be shared by multiple ATN simulators, this method may affect the
     * performance (but not accuracy) of other parsers which are being used
     * concurrently.
     *
     * @ if the current instance does not
     * support clearing the DFA.
     *
     * @since 4.3
     */
    ATNSimulator.prototype.clearDFA = function () {
        this.atn.clearDFA();
    };
    __decorate([
        NotNull
    ], ATNSimulator.prototype, "atn", void 0);
    __decorate([
        NotNull
    ], ATNSimulator, "ERROR", null);
    ATNSimulator = __decorate([
        __param(0, NotNull)
    ], ATNSimulator);
    return ATNSimulator;
}());
(function (ATNSimulator) {
})(ATNSimulator || (ATNSimulator = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var ConsoleErrorListener = /** @class */ (function () {
    function ConsoleErrorListener() {
    }
    /**
     * {@inheritDoc}
     *
     * This implementation prints messages to {@link System#err} containing the
     * values of `line`, `charPositionInLine`, and `msg` using
     * the following format.
     *
     * <pre>
     * line *line*:*charPositionInLine* *msg*
     * </pre>
     */
    ConsoleErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        console.error("line " + line + ":" + charPositionInLine + " " + msg);
    };
    /**
     * Provides a default instance of {@link ConsoleErrorListener}.
     */
    ConsoleErrorListener.INSTANCE = new ConsoleErrorListener();
    return ConsoleErrorListener;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This implementation of {@link ANTLRErrorListener} dispatches all calls to a
 * collection of delegate listeners. This reduces the effort required to support multiple
 * listeners.
 *
 * @author Sam Harwell
 */
var ProxyErrorListener = /** @class */ (function () {
    function ProxyErrorListener(delegates) {
        this.delegates = delegates;
        if (!delegates) {
            throw new Error("Invalid delegates");
        }
    }
    ProxyErrorListener.prototype.getDelegates = function () {
        return this.delegates;
    };
    ProxyErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        this.delegates.forEach(function (listener) {
            if (listener.syntaxError) {
                listener.syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
            }
        });
    };
    __decorate([
        Override,
        __param(0, NotNull),
        __param(4, NotNull)
    ], ProxyErrorListener.prototype, "syntaxError", null);
    return ProxyErrorListener;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var Recognizer = /** @class */ (function () {
    function Recognizer() {
        this._listeners = [ConsoleErrorListener.INSTANCE];
        this._stateNumber = -1;
    }
    /**
     * Get a map from token names to token types.
     *
     * Used for XPath and tree pattern compilation.
     */
    Recognizer.prototype.getTokenTypeMap = function () {
        var vocabulary = this.vocabulary;
        var result = Recognizer.tokenTypeMapCache.get(vocabulary);
        if (result == null) {
            var intermediateResult = new Map();
            for (var i = 0; i <= this.atn.maxTokenType; i++) {
                var literalName = vocabulary.getLiteralName(i);
                if (literalName != null) {
                    intermediateResult.set(literalName, i);
                }
                var symbolicName = vocabulary.getSymbolicName(i);
                if (symbolicName != null) {
                    intermediateResult.set(symbolicName, i);
                }
            }
            intermediateResult.set("EOF", exports.Token.EOF);
            result = intermediateResult;
            Recognizer.tokenTypeMapCache.set(vocabulary, result);
        }
        return result;
    };
    /**
     * Get a map from rule names to rule indexes.
     *
     * Used for XPath and tree pattern compilation.
     */
    Recognizer.prototype.getRuleIndexMap = function () {
        var ruleNames = this.ruleNames;
        if (ruleNames == null) {
            throw new Error("The current recognizer does not provide a list of rule names.");
        }
        var result = Recognizer.ruleIndexMapCache.get(ruleNames);
        if (result == null) {
            result = toMap(ruleNames);
            Recognizer.ruleIndexMapCache.set(ruleNames, result);
        }
        return result;
    };
    Recognizer.prototype.getTokenType = function (tokenName) {
        var ttype = this.getTokenTypeMap().get(tokenName);
        if (ttype != null) {
            return ttype;
        }
        return exports.Token.INVALID_TYPE;
    };
    Object.defineProperty(Recognizer.prototype, "serializedATN", {
        /**
         * If this recognizer was generated, it will have a serialized ATN
         * representation of the grammar.
         *
         * For interpreters, we don't know their serialized ATN despite having
         * created the interpreter from it.
         */
        get: function () {
            throw new Error("there is no serialized ATN");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recognizer.prototype, "atn", {
        /**
         * Get the {@link ATN} used by the recognizer for prediction.
         *
         * @returns The {@link ATN} used by the recognizer for prediction.
         */
        get: function () {
            return this._interp.atn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recognizer.prototype, "interpreter", {
        /**
         * Get the ATN interpreter used by the recognizer for prediction.
         *
         * @returns The ATN interpreter used by the recognizer for prediction.
         */
        get: function () {
            return this._interp;
        },
        /**
         * Set the ATN interpreter used by the recognizer for prediction.
         *
         * @param interpreter The ATN interpreter used by the recognizer for
         * prediction.
         */
        set: function (interpreter) {
            this._interp = interpreter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recognizer.prototype, "parseInfo", {
        /** If profiling during the parse/lex, this will return DecisionInfo records
         *  for each decision in recognizer in a ParseInfo object.
         *
         * @since 4.3
         */
        get: function () {
            return Promise.resolve(undefined);
        },
        enumerable: true,
        configurable: true
    });
    /** What is the error header, normally line/character position information? */
    Recognizer.prototype.getErrorHeader = function (e) {
        var token = e.getOffendingToken();
        if (!token) {
            return "";
        }
        var line = token.line;
        var charPositionInLine = token.charPositionInLine;
        return "line " + line + ":" + charPositionInLine;
    };
    /**
     * @exception NullPointerException if `listener` is `undefined`.
     */
    Recognizer.prototype.addErrorListener = function (listener) {
        if (!listener) {
            throw new TypeError("listener must not be null");
        }
        this._listeners.push(listener);
    };
    Recognizer.prototype.removeErrorListener = function (listener) {
        var position = this._listeners.indexOf(listener);
        if (position !== -1) {
            this._listeners.splice(position, 1);
        }
    };
    Recognizer.prototype.removeErrorListeners = function () {
        this._listeners.length = 0;
    };
    Recognizer.prototype.getErrorListeners = function () {
        return this._listeners.slice(0);
    };
    Recognizer.prototype.getErrorListenerDispatch = function () {
        return new ProxyErrorListener(this.getErrorListeners());
    };
    // subclass needs to override these if there are sempreds or actions
    // that the ATN interp needs to execute
    Recognizer.prototype.sempred = function (_localctx, ruleIndex, actionIndex) {
        return true;
    };
    Recognizer.prototype.precpred = function (localctx, precedence) {
        return true;
    };
    Recognizer.prototype.action = function (_localctx, ruleIndex, actionIndex) {
        // intentionally empty
    };
    Object.defineProperty(Recognizer.prototype, "state", {
        get: function () {
            return this._stateNumber;
        },
        /** Indicate that the recognizer has changed internal state that is
         *  consistent with the ATN state passed in.  This way we always know
         *  where we are in the ATN as the parser goes along. The rule
         *  context objects form a stack that lets us see the stack of
         *  invoking rules. Combine this and we have complete ATN
         *  configuration information.
         */
        set: function (atnState) {
            //		System.err.println("setState "+atnState);
            this._stateNumber = atnState;
            //		if ( traceATNStates ) _ctx.trace(atnState);
        },
        enumerable: true,
        configurable: true
    });
    Recognizer.EOF = -1;
    Recognizer.tokenTypeMapCache = new WeakMap();
    Recognizer.ruleIndexMapCache = new WeakMap();
    __decorate([
        SuppressWarnings("serial"),
        NotNull
    ], Recognizer.prototype, "_listeners", void 0);
    __decorate([
        NotNull
    ], Recognizer.prototype, "getTokenTypeMap", null);
    __decorate([
        NotNull
    ], Recognizer.prototype, "getRuleIndexMap", null);
    __decorate([
        NotNull
    ], Recognizer.prototype, "serializedATN", null);
    __decorate([
        NotNull
    ], Recognizer.prototype, "atn", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], Recognizer.prototype, "interpreter", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], Recognizer.prototype, "getErrorHeader", null);
    __decorate([
        __param(0, NotNull)
    ], Recognizer.prototype, "addErrorListener", null);
    __decorate([
        __param(0, NotNull)
    ], Recognizer.prototype, "removeErrorListener", null);
    __decorate([
        NotNull
    ], Recognizer.prototype, "getErrorListeners", null);
    return Recognizer;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class provides a default implementation of the {@link Vocabulary}
 * interface.
 *
 * @author Sam Harwell
 */
var VocabularyImpl = /** @class */ (function () {
    /**
     * Constructs a new instance of {@link VocabularyImpl} from the specified
     * literal, symbolic, and display token names.
     *
     * @param literalNames The literal names assigned to tokens, or an empty array
     * if no literal names are assigned.
     * @param symbolicNames The symbolic names assigned to tokens, or
     * an empty array if no symbolic names are assigned.
     * @param displayNames The display names assigned to tokens, or an empty array
     * to use the values in `literalNames` and `symbolicNames` as
     * the source of display names, as described in
     * {@link #getDisplayName(int)}.
     *
     * @see #getLiteralName(int)
     * @see #getSymbolicName(int)
     * @see #getDisplayName(int)
     */
    function VocabularyImpl(literalNames, symbolicNames, displayNames) {
        this.literalNames = literalNames;
        this.symbolicNames = symbolicNames;
        this.displayNames = displayNames;
        // See note here on -1 part: https://github.com/antlr/antlr4/pull/1146
        this._maxTokenType =
            Math.max(this.displayNames.length, Math.max(this.literalNames.length, this.symbolicNames.length)) - 1;
    }
    Object.defineProperty(VocabularyImpl.prototype, "maxTokenType", {
        get: function () {
            return this._maxTokenType;
        },
        enumerable: true,
        configurable: true
    });
    VocabularyImpl.prototype.getLiteralName = function (tokenType) {
        if (tokenType >= 0 && tokenType < this.literalNames.length) {
            return this.literalNames[tokenType];
        }
        return undefined;
    };
    VocabularyImpl.prototype.getSymbolicName = function (tokenType) {
        if (tokenType >= 0 && tokenType < this.symbolicNames.length) {
            return this.symbolicNames[tokenType];
        }
        if (tokenType === exports.Token.EOF) {
            return "EOF";
        }
        return undefined;
    };
    VocabularyImpl.prototype.getDisplayName = function (tokenType) {
        if (tokenType >= 0 && tokenType < this.displayNames.length) {
            var displayName = this.displayNames[tokenType];
            if (displayName) {
                return displayName;
            }
        }
        var literalName = this.getLiteralName(tokenType);
        if (literalName) {
            return literalName;
        }
        var symbolicName = this.getSymbolicName(tokenType);
        if (symbolicName) {
            return symbolicName;
        }
        return String(tokenType);
    };
    /**
     * Gets an empty {@link Vocabulary} instance.
     *
     * No literal or symbol names are assigned to token types, so
     * {@link #getDisplayName(int)} returns the numeric value for all tokens
     * except {@link Token#EOF}.
     */
    VocabularyImpl.EMPTY_VOCABULARY = new VocabularyImpl([], [], []);
    __decorate([
        NotNull
    ], VocabularyImpl.prototype, "literalNames", void 0);
    __decorate([
        NotNull
    ], VocabularyImpl.prototype, "symbolicNames", void 0);
    __decorate([
        NotNull
    ], VocabularyImpl.prototype, "displayNames", void 0);
    __decorate([
        Override
    ], VocabularyImpl.prototype, "maxTokenType", null);
    __decorate([
        Override
    ], VocabularyImpl.prototype, "getLiteralName", null);
    __decorate([
        Override
    ], VocabularyImpl.prototype, "getSymbolicName", null);
    __decorate([
        Override,
        NotNull
    ], VocabularyImpl.prototype, "getDisplayName", null);
    __decorate([
        NotNull
    ], VocabularyImpl, "EMPTY_VOCABULARY", void 0);
    return VocabularyImpl;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** A DFA walker that knows how to dump them to serialized strings. */
var DFASerializer = /** @class */ (function () {
    function DFASerializer(dfa, vocabulary, ruleNames, atn) {
        if (vocabulary instanceof Recognizer) {
            ruleNames = vocabulary.ruleNames;
            atn = vocabulary.atn;
            vocabulary = vocabulary.vocabulary;
        }
        else if (!vocabulary) {
            vocabulary = VocabularyImpl.EMPTY_VOCABULARY;
        }
        this.dfa = dfa;
        this.vocabulary = vocabulary;
        this.ruleNames = ruleNames;
        this.atn = atn;
    }
    DFASerializer.prototype.toString = function () {
        if (!this.dfa.s0) {
            return "";
        }
        var buf = "";
        if (this.dfa.states) {
            var states = new (Array.bind.apply(Array, __spread([void 0], this.dfa.states.toArray())))();
            states.sort(function (o1, o2) { return o1.stateNumber - o2.stateNumber; });
            try {
                for (var states_1 = __values(states), states_1_1 = states_1.next(); !states_1_1.done; states_1_1 = states_1.next()) {
                    var s = states_1_1.value;
                    var edges = s.getEdgeMap();
                    var edgeKeys = __spread(edges.keys()).sort(function (a, b) { return a - b; });
                    var contextEdges = s.getContextEdgeMap();
                    var contextEdgeKeys = __spread(contextEdges.keys()).sort(function (a, b) { return a - b; });
                    try {
                        for (var edgeKeys_1 = __values(edgeKeys), edgeKeys_1_1 = edgeKeys_1.next(); !edgeKeys_1_1.done; edgeKeys_1_1 = edgeKeys_1.next()) {
                            var entry = edgeKeys_1_1.value;
                            var value = edges.get(entry);
                            if ((value == null || value === ATNSimulator.ERROR) && !s.isContextSymbol(entry)) {
                                continue;
                            }
                            var contextSymbol = false;
                            buf += (this.getStateString(s)) + ("-") + (this.getEdgeLabel(entry)) + ("->");
                            if (s.isContextSymbol(entry)) {
                                buf += ("!");
                                contextSymbol = true;
                            }
                            var t = value;
                            if (t && t.stateNumber !== ATNSimulator.ERROR.stateNumber) {
                                buf += (this.getStateString(t)) + ("\n");
                            }
                            else if (contextSymbol) {
                                buf += ("ctx\n");
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (edgeKeys_1_1 && !edgeKeys_1_1.done && (_a = edgeKeys_1.return)) _a.call(edgeKeys_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (s.isContextSensitive) {
                        try {
                            for (var contextEdgeKeys_1 = __values(contextEdgeKeys), contextEdgeKeys_1_1 = contextEdgeKeys_1.next(); !contextEdgeKeys_1_1.done; contextEdgeKeys_1_1 = contextEdgeKeys_1.next()) {
                                var entry = contextEdgeKeys_1_1.value;
                                buf += (this.getStateString(s))
                                    + ("-")
                                    + (this.getContextLabel(entry))
                                    + ("->")
                                    + (this.getStateString(contextEdges.get(entry)))
                                    + ("\n");
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (contextEdgeKeys_1_1 && !contextEdgeKeys_1_1.done && (_b = contextEdgeKeys_1.return)) _b.call(contextEdgeKeys_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (states_1_1 && !states_1_1.done && (_c = states_1.return)) _c.call(states_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        var output = buf;
        if (output.length === 0) {
            return "";
        }
        //return Utils.sortLinesInString(output);
        return output;
        var e_3, _c, e_1, _a, e_2, _b;
    };
    DFASerializer.prototype.getContextLabel = function (i) {
        if (i === PredictionContext.EMPTY_FULL_STATE_KEY) {
            return "ctx:EMPTY_FULL";
        }
        else if (i === PredictionContext.EMPTY_LOCAL_STATE_KEY) {
            return "ctx:EMPTY_LOCAL";
        }
        if (this.atn && i > 0 && i <= this.atn.states.length) {
            var state = this.atn.states[i];
            var ruleIndex = state.ruleIndex;
            if (this.ruleNames && ruleIndex >= 0 && ruleIndex < this.ruleNames.length) {
                return "ctx:" + String(i) + "(" + this.ruleNames[ruleIndex] + ")";
            }
        }
        return "ctx:" + String(i);
    };
    DFASerializer.prototype.getEdgeLabel = function (i) {
        return this.vocabulary.getDisplayName(i);
    };
    DFASerializer.prototype.getStateString = function (s) {
        if (s === ATNSimulator.ERROR) {
            return "ERROR";
        }
        var n = s.stateNumber;
        var stateStr = "s" + n;
        if (s.isAcceptState) {
            if (s.predicates) {
                stateStr = ":s" + n + "=>" + s.predicates;
            }
            else {
                stateStr = ":s" + n + "=>" + s.prediction;
            }
        }
        if (s.isContextSensitive) {
            stateStr += "*";
            try {
                for (var _a = __values(s.configs), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var config = _b.value;
                    if (config.reachesIntoOuterContext) {
                        stateStr += "*";
                        break;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return stateStr;
        var e_4, _c;
    };
    __decorate([
        NotNull
    ], DFASerializer.prototype, "dfa", void 0);
    __decorate([
        NotNull
    ], DFASerializer.prototype, "vocabulary", void 0);
    __decorate([
        Override
    ], DFASerializer.prototype, "toString", null);
    return DFASerializer;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var LexerDFASerializer = /** @class */ (function (_super) {
    __extends(LexerDFASerializer, _super);
    function LexerDFASerializer(dfa) {
        return _super.call(this, dfa, VocabularyImpl.EMPTY_VOCABULARY) || this;
    }
    LexerDFASerializer.prototype.getEdgeLabel = function (i) {
        return "'" + String.fromCharCode(i) + "'";
    };
    __decorate([
        Override,
        NotNull
    ], LexerDFASerializer.prototype, "getEdgeLabel", null);
    LexerDFASerializer = __decorate([
        __param(0, NotNull)
    ], LexerDFASerializer);
    return LexerDFASerializer;
}(DFASerializer));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var StarLoopEntryState = /** @class */ (function (_super) {
    __extends(StarLoopEntryState, _super);
    function StarLoopEntryState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Indicates whether this state can benefit from a precedence DFA during SLL
         * decision making.
         *
         * This is a computed property that is calculated during ATN deserialization
         * and stored for use in {@link ParserATNSimulator} and
         * {@link ParserInterpreter}.
         *
         * @see `DFA.isPrecedenceDfa`
         */
        _this.precedenceRuleDecision = false;
        /**
         * For precedence decisions, this set marks states *S* which have all
         * of the following characteristics:
         *
         * * One or more invocation sites of the current rule returns to
         *   *S*.
         * * The closure from *S* includes the current decision without
         *   passing through any rule invocations or stepping out of the current
         *   rule.
         *
         * This field is not used when {@link #isPrecedenceDecision} is
         * `false`.
         */
        _this.precedenceLoopbackStates = new BitSet();
        return _this;
    }
    Object.defineProperty(StarLoopEntryState.prototype, "stateType", {
        get: function () {
            return ATNStateType.STAR_LOOP_ENTRY;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], StarLoopEntryState.prototype, "stateType", null);
    return StarLoopEntryState;
}(DecisionState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var DFA = /** @class */ (function () {
    function DFA(atnStartState, decision) {
        if (decision === void 0) { decision = 0; }
        /**
         * A set of all states in the `DFA`.
         *
         * Note that this collection of states holds the DFA states for both SLL and LL prediction. Only the start state
         * needs to be differentiated for these cases, which is tracked by the `s0` and `s0full` fields.
         */
        this.states = new Array2DHashSet(ObjectEqualityComparator.INSTANCE);
        this.nextStateNumber = 0;
        if (!atnStartState.atn) {
            throw new Error("The ATNState must be associated with an ATN");
        }
        this.atnStartState = atnStartState;
        this.atn = atnStartState.atn;
        this.decision = decision;
        // Precedence DFAs are associated with the special precedence decision created for left-recursive rules which
        // evaluate their alternatives using a precedence hierarchy. When such a decision is encountered, we mark this
        // DFA instance as a precedence DFA and initialize the initial states s0 and s0full to special DFAState
        // instances which use outgoing edges to link to the actual start state used for each precedence level.
        var isPrecedenceDfa = false;
        if (atnStartState instanceof StarLoopEntryState) {
            if (atnStartState.precedenceRuleDecision) {
                isPrecedenceDfa = true;
                this.s0 = new DFAState(new ATNConfigSet());
                this.s0full = new DFAState(new ATNConfigSet());
            }
        }
        this.precedenceDfa = isPrecedenceDfa;
    }
    Object.defineProperty(DFA.prototype, "isPrecedenceDfa", {
        /**
         * Gets whether this DFA is a precedence DFA. Precedence DFAs use a special
         * start state {@link #s0} which is not stored in {@link #states}. The
         * {@link DFAState#edges} array for this start state contains outgoing edges
         * supplying individual start states corresponding to specific precedence
         * values.
         *
         * @returns `true` if this is a precedence DFA; otherwise,
         * `false`.
         * @see Parser.precedence
         */
        get: function () {
            return this.precedenceDfa;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the start state for a specific precedence value.
     *
     * @param precedence The current precedence.
     * @returns The start state corresponding to the specified precedence, or
     * `undefined` if no start state exists for the specified precedence.
     *
     * @ if this is not a precedence DFA.
     * @see `isPrecedenceDfa`
     */
    DFA.prototype.getPrecedenceStartState = function (precedence, fullContext) {
        if (!this.isPrecedenceDfa) {
            throw new Error("Only precedence DFAs may contain a precedence start state.");
        }
        // s0 and s0full are never null for a precedence DFA
        if (fullContext) {
            return this.s0full.getTarget(precedence);
        }
        else {
            return this.s0.getTarget(precedence);
        }
    };
    /**
     * Set the start state for a specific precedence value.
     *
     * @param precedence The current precedence.
     * @param startState The start state corresponding to the specified
     * precedence.
     *
     * @ if this is not a precedence DFA.
     * @see `isPrecedenceDfa`
     */
    DFA.prototype.setPrecedenceStartState = function (precedence, fullContext, startState) {
        if (!this.isPrecedenceDfa) {
            throw new Error("Only precedence DFAs may contain a precedence start state.");
        }
        if (precedence < 0) {
            return;
        }
        if (fullContext) {
            // s0full is never null for a precedence DFA
            this.s0full.setTarget(precedence, startState);
        }
        else {
            // s0 is never null for a precedence DFA
            this.s0.setTarget(precedence, startState);
        }
    };
    Object.defineProperty(DFA.prototype, "isEmpty", {
        get: function () {
            if (this.isPrecedenceDfa) {
                // s0 and s0full are never null for a precedence DFA
                return this.s0.getEdgeMap().size === 0 && this.s0full.getEdgeMap().size === 0;
            }
            return this.s0 == null && this.s0full == null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DFA.prototype, "isContextSensitive", {
        get: function () {
            if (this.isPrecedenceDfa) {
                // s0full is never null for a precedence DFA
                return this.s0full.getEdgeMap().size > 0;
            }
            return this.s0full != null;
        },
        enumerable: true,
        configurable: true
    });
    DFA.prototype.addState = function (state) {
        state.stateNumber = this.nextStateNumber++;
        return this.states.getOrAdd(state);
    };
    DFA.prototype.toString = function (vocabulary, ruleNames) {
        if (!vocabulary) {
            vocabulary = VocabularyImpl.EMPTY_VOCABULARY;
        }
        if (!this.s0) {
            return "";
        }
        var serializer;
        if (ruleNames) {
            serializer = new DFASerializer(this, vocabulary, ruleNames, this.atnStartState.atn);
        }
        else {
            serializer = new DFASerializer(this, vocabulary);
        }
        return serializer.toString();
    };
    DFA.prototype.toLexerString = function () {
        if (!this.s0) {
            return "";
        }
        var serializer = new LexerDFASerializer(this);
        return serializer.toString();
    };
    __decorate([
        NotNull
    ], DFA.prototype, "states", void 0);
    __decorate([
        NotNull
    ], DFA.prototype, "atnStartState", void 0);
    __decorate([
        NotNull
    ], DFA.prototype, "atn", void 0);
    DFA = __decorate([
        __param(0, NotNull)
    ], DFA);
    return DFA;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var BasicState = /** @class */ (function (_super) {
    __extends(BasicState, _super);
    function BasicState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BasicState.prototype, "stateType", {
        get: function () {
            return ATNStateType.BASIC;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], BasicState.prototype, "stateType", null);
    return BasicState;
}(ATNState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var InvalidState = /** @class */ (function (_super) {
    __extends(InvalidState, _super);
    function InvalidState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InvalidState.prototype, "stateType", {
        get: function () {
            return ATNStateType.INVALID_TYPE;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], InvalidState.prototype, "stateType", null);
    return InvalidState;
}(BasicState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** A transition containing a set of values. */
var SetTransition = /** @class */ (function (_super) {
    __extends(SetTransition, _super);
    // TODO (sam): should we really allow undefined here?
    function SetTransition(target, set) {
        var _this = _super.call(this, target) || this;
        if (set == null) {
            set = IntervalSet.of(exports.Token.INVALID_TYPE);
        }
        _this.set = set;
        return _this;
    }
    Object.defineProperty(SetTransition.prototype, "serializationType", {
        get: function () {
            return 7 /* SET */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SetTransition.prototype, "label", {
        get: function () {
            return this.set;
        },
        enumerable: true,
        configurable: true
    });
    SetTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return this.set.contains(symbol);
    };
    SetTransition.prototype.toString = function () {
        return this.set.toString();
    };
    __decorate([
        NotNull
    ], SetTransition.prototype, "set", void 0);
    __decorate([
        Override
    ], SetTransition.prototype, "serializationType", null);
    __decorate([
        Override,
        NotNull
    ], SetTransition.prototype, "label", null);
    __decorate([
        Override
    ], SetTransition.prototype, "matches", null);
    __decorate([
        Override,
        NotNull
    ], SetTransition.prototype, "toString", null);
    SetTransition = __decorate([
        __param(0, NotNull), __param(1, Nullable)
    ], SetTransition);
    return SetTransition;
}(Transition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var NotSetTransition = /** @class */ (function (_super) {
    __extends(NotSetTransition, _super);
    function NotSetTransition(target, set) {
        return _super.call(this, target, set) || this;
    }
    Object.defineProperty(NotSetTransition.prototype, "serializationType", {
        get: function () {
            return 8 /* NOT_SET */;
        },
        enumerable: true,
        configurable: true
    });
    NotSetTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= minVocabSymbol
            && symbol <= maxVocabSymbol
            && !_super.prototype.matches.call(this, symbol, minVocabSymbol, maxVocabSymbol);
    };
    NotSetTransition.prototype.toString = function () {
        return "~" + _super.prototype.toString.call(this);
    };
    __decorate([
        Override
    ], NotSetTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], NotSetTransition.prototype, "matches", null);
    __decorate([
        Override
    ], NotSetTransition.prototype, "toString", null);
    NotSetTransition = __decorate([
        __param(0, NotNull), __param(1, Nullable)
    ], NotSetTransition);
    return NotSetTransition;
}(SetTransition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** The last node in the ATN for a rule, unless that rule is the start symbol.
 *  In that case, there is one transition to EOF. Later, we might encode
 *  references to all calls to this rule to compute FOLLOW sets for
 *  error handling.
 */
var RuleStopState = /** @class */ (function (_super) {
    __extends(RuleStopState, _super);
    function RuleStopState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RuleStopState.prototype, "nonStopStateNumber", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleStopState.prototype, "stateType", {
        get: function () {
            return ATNStateType.RULE_STOP;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], RuleStopState.prototype, "nonStopStateNumber", null);
    __decorate([
        Override
    ], RuleStopState.prototype, "stateType", null);
    return RuleStopState;
}(ATNState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** */
var RuleTransition = /** @class */ (function (_super) {
    __extends(RuleTransition, _super);
    function RuleTransition(ruleStart, ruleIndex, precedence, followState) {
        var _this = _super.call(this, ruleStart) || this;
        _this.tailCall = false;
        _this.optimizedTailCall = false;
        _this.ruleIndex = ruleIndex;
        _this.precedence = precedence;
        _this.followState = followState;
        return _this;
    }
    Object.defineProperty(RuleTransition.prototype, "serializationType", {
        get: function () {
            return 3 /* RULE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTransition.prototype, "isEpsilon", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    RuleTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    };
    __decorate([
        NotNull
    ], RuleTransition.prototype, "followState", void 0);
    __decorate([
        Override
    ], RuleTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], RuleTransition.prototype, "isEpsilon", null);
    __decorate([
        Override
    ], RuleTransition.prototype, "matches", null);
    RuleTransition = __decorate([
        __param(0, NotNull), __param(3, NotNull)
    ], RuleTransition);
    return RuleTransition;
}(Transition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var WildcardTransition = /** @class */ (function (_super) {
    __extends(WildcardTransition, _super);
    function WildcardTransition(target) {
        return _super.call(this, target) || this;
    }
    Object.defineProperty(WildcardTransition.prototype, "serializationType", {
        get: function () {
            return 9 /* WILDCARD */;
        },
        enumerable: true,
        configurable: true
    });
    WildcardTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= minVocabSymbol && symbol <= maxVocabSymbol;
    };
    WildcardTransition.prototype.toString = function () {
        return ".";
    };
    __decorate([
        Override
    ], WildcardTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], WildcardTransition.prototype, "matches", null);
    __decorate([
        Override,
        NotNull
    ], WildcardTransition.prototype, "toString", null);
    WildcardTransition = __decorate([
        __param(0, NotNull)
    ], WildcardTransition);
    return WildcardTransition;
}(Transition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var LL1Analyzer = /** @class */ (function () {
    function LL1Analyzer(atn) {
        this.atn = atn;
    }
    /**
     * Calculates the SLL(1) expected lookahead set for each outgoing transition
     * of an {@link ATNState}. The returned array has one element for each
     * outgoing transition in `s`. If the closure from transition
     * *i* leads to a semantic predicate before matching a symbol, the
     * element at index *i* of the result will be `undefined`.
     *
     * @param s the ATN state
     * @returns the expected symbols for each outgoing transition of `s`.
     */
    LL1Analyzer.prototype.getDecisionLookahead = function (s) {
        //		System.out.println("LOOK("+s.stateNumber+")");
        if (s == null) {
            return undefined;
        }
        var look = new Array(s.numberOfTransitions);
        for (var alt = 0; alt < s.numberOfTransitions; alt++) {
            var current = new IntervalSet();
            look[alt] = current;
            var lookBusy = new Array2DHashSet(ObjectEqualityComparator.INSTANCE);
            var seeThruPreds = false; // fail to get lookahead upon pred
            this._LOOK(s.transition(alt).target, undefined, PredictionContext.EMPTY_LOCAL, current, lookBusy, new BitSet(), seeThruPreds, false);
            // Wipe out lookahead for this alternative if we found nothing
            // or we had a predicate when we !seeThruPreds
            if (current.size === 0 || current.contains(LL1Analyzer.HIT_PRED)) {
                current = undefined;
                look[alt] = current;
            }
        }
        return look;
    };
    LL1Analyzer.prototype.LOOK = function (s, ctx, stopState) {
        if (stopState === undefined) {
            if (s.atn == null) {
                throw new Error("Illegal state");
            }
            stopState = s.atn.ruleToStopState[s.ruleIndex];
        }
        else if (stopState === null) {
            // This is an explicit request to pass undefined as the stopState to _LOOK. Used to distinguish an overload
            // from the method which simply omits the stopState parameter.
            stopState = undefined;
        }
        var r = new IntervalSet();
        var seeThruPreds = true; // ignore preds; get all lookahead
        var addEOF = true;
        this._LOOK(s, stopState, ctx, r, new Array2DHashSet(), new BitSet(), seeThruPreds, addEOF);
        return r;
    };
    /**
     * Compute set of tokens that can follow `s` in the ATN in the
     * specified `ctx`.
     * <p/>
     * If `ctx` is {@link PredictionContext#EMPTY_LOCAL} and
     * `stopState` or the end of the rule containing `s` is reached,
     * {@link Token#EPSILON} is added to the result set. If `ctx` is not
     * {@link PredictionContext#EMPTY_LOCAL} and `addEOF` is `true`
     * and `stopState` or the end of the outermost rule is reached,
     * {@link Token#EOF} is added to the result set.
     *
     * @param s the ATN state.
     * @param stopState the ATN state to stop at. This can be a
     * {@link BlockEndState} to detect epsilon paths through a closure.
     * @param ctx The outer context, or {@link PredictionContext#EMPTY_LOCAL} if
     * the outer context should not be used.
     * @param look The result lookahead set.
     * @param lookBusy A set used for preventing epsilon closures in the ATN
     * from causing a stack overflow. Outside code should pass
     * `new HashSet<ATNConfig>` for this argument.
     * @param calledRuleStack A set used for preventing left recursion in the
     * ATN from causing a stack overflow. Outside code should pass
     * `new BitSet()` for this argument.
     * @param seeThruPreds `true` to true semantic predicates as
     * implicitly `true` and "see through them", otherwise `false`
     * to treat semantic predicates as opaque and add {@link #HIT_PRED} to the
     * result if one is encountered.
     * @param addEOF Add {@link Token#EOF} to the result if the end of the
     * outermost context is reached. This parameter has no effect if `ctx`
     * is {@link PredictionContext#EMPTY_LOCAL}.
     */
    LL1Analyzer.prototype._LOOK = function (s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
        //		System.out.println("_LOOK("+s.stateNumber+", ctx="+ctx);
        var c = ATNConfig.create(s, 0, ctx);
        if (!lookBusy.add(c)) {
            return;
        }
        if (s === stopState) {
            if (PredictionContext.isEmptyLocal(ctx)) {
                look.add(exports.Token.EPSILON);
                return;
            }
            else if (ctx.isEmpty) {
                if (addEOF) {
                    look.add(exports.Token.EOF);
                }
                return;
            }
        }
        if (s instanceof RuleStopState) {
            if (ctx.isEmpty && !PredictionContext.isEmptyLocal(ctx)) {
                if (addEOF) {
                    look.add(exports.Token.EOF);
                }
                return;
            }
            var removed = calledRuleStack.get(s.ruleIndex);
            try {
                calledRuleStack.clear(s.ruleIndex);
                for (var i = 0; i < ctx.size; i++) {
                    if (ctx.getReturnState(i) === PredictionContext.EMPTY_FULL_STATE_KEY) {
                        continue;
                    }
                    var returnState = this.atn.states[ctx.getReturnState(i)];
                    //					System.out.println("popping back to "+retState);
                    this._LOOK(returnState, stopState, ctx.getParent(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
                }
            }
            finally {
                if (removed) {
                    calledRuleStack.set(s.ruleIndex);
                }
            }
        }
        var n = s.numberOfTransitions;
        for (var i = 0; i < n; i++) {
            var t = s.transition(i);
            if (t instanceof RuleTransition) {
                if (calledRuleStack.get(t.ruleIndex)) {
                    continue;
                }
                var newContext = ctx.getChild(t.followState.stateNumber);
                try {
                    calledRuleStack.set(t.ruleIndex);
                    this._LOOK(t.target, stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
                }
                finally {
                    calledRuleStack.clear(t.ruleIndex);
                }
            }
            else if (t instanceof AbstractPredicateTransition) {
                if (seeThruPreds) {
                    this._LOOK(t.target, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
                }
                else {
                    look.add(LL1Analyzer.HIT_PRED);
                }
            }
            else if (t.isEpsilon) {
                this._LOOK(t.target, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
            else if (t instanceof WildcardTransition) {
                look.addAll(IntervalSet.of(exports.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
            }
            else {
                //				System.out.println("adding "+ t);
                var set = t.label;
                if (set != null) {
                    if (t instanceof NotSetTransition) {
                        set = set.complement(IntervalSet.of(exports.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
                    }
                    look.addAll(set);
                }
            }
        }
    };
    /** Special value added to the lookahead sets to indicate that we hit
     *  a predicate during analysis if `seeThruPreds==false`.
     */
    LL1Analyzer.HIT_PRED = exports.Token.INVALID_TYPE;
    __decorate([
        NotNull
    ], LL1Analyzer.prototype, "atn", void 0);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], LL1Analyzer.prototype, "LOOK", null);
    __decorate([
        __param(0, NotNull),
        __param(2, NotNull),
        __param(3, NotNull),
        __param(4, NotNull),
        __param(5, NotNull)
    ], LL1Analyzer.prototype, "_LOOK", null);
    LL1Analyzer = __decorate([
        __param(0, NotNull)
    ], LL1Analyzer);
    return LL1Analyzer;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// import * as assert from "assert";
/** */
var ATN = /** @class */ (function () {
    /** Used for runtime deserialization of ATNs from strings */
    function ATN(grammarType, maxTokenType) {
        this.states = [];
        /** Each subrule/rule is a decision point and we must track them so we
         *  can go back later and build DFA predictors for them.  This includes
         *  all the rules, subrules, optional blocks, ()+, ()* etc...
         */
        this.decisionToState = [];
        this.modeNameToStartState = new Map();
        this.modeToStartState = [];
        this.contextCache = new Array2DHashMap(ObjectEqualityComparator.INSTANCE);
        this.decisionToDFA = [];
        this.modeToDFA = [];
        this.LL1Table = new Map();
        this.grammarType = grammarType;
        this.maxTokenType = maxTokenType;
    }
    ATN.prototype.clearDFA = function () {
        this.decisionToDFA = new Array(this.decisionToState.length);
        for (var i = 0; i < this.decisionToDFA.length; i++) {
            this.decisionToDFA[i] = new DFA(this.decisionToState[i], i);
        }
        this.modeToDFA = new Array(this.modeToStartState.length);
        for (var i = 0; i < this.modeToDFA.length; i++) {
            this.modeToDFA[i] = new DFA(this.modeToStartState[i]);
        }
        this.contextCache.clear();
        this.LL1Table.clear();
    };
    Object.defineProperty(ATN.prototype, "contextCacheSize", {
        get: function () {
            return this.contextCache.size;
        },
        enumerable: true,
        configurable: true
    });
    ATN.prototype.getCachedContext = function (context) {
        return PredictionContext.getCachedContext(context, this.contextCache, new PredictionContext.IdentityHashMap());
    };
    ATN.prototype.getDecisionToDFA = function () {
        // assert(this.decisionToDFA != null && this.decisionToDFA.length === this.decisionToState.length);
        return this.decisionToDFA;
    };
    ATN.prototype.nextTokens = function (s, ctx) {
        if (ctx) {
            var anal = new LL1Analyzer(this);
            var next = anal.LOOK(s, ctx);
            return next;
        }
        else {
            if (s.nextTokenWithinRule) {
                return s.nextTokenWithinRule;
            }
            s.nextTokenWithinRule = this.nextTokens(s, PredictionContext.EMPTY_LOCAL);
            s.nextTokenWithinRule.setReadonly(true);
            return s.nextTokenWithinRule;
        }
    };
    ATN.prototype.addState = function (state) {
        state.atn = this;
        state.stateNumber = this.states.length;
        this.states.push(state);
    };
    ATN.prototype.removeState = function (state) {
        // just replace the state, don't shift states in list
        var invalidState = new InvalidState();
        invalidState.atn = this;
        invalidState.stateNumber = state.stateNumber;
        this.states[state.stateNumber] = invalidState;
    };
    ATN.prototype.defineMode = function (name, s) {
        this.modeNameToStartState.set(name, s);
        this.modeToStartState.push(s);
        this.modeToDFA.push(new DFA(s));
        this.defineDecisionState(s);
    };
    ATN.prototype.defineDecisionState = function (s) {
        this.decisionToState.push(s);
        s.decision = this.decisionToState.length - 1;
        this.decisionToDFA.push(new DFA(s, s.decision));
        return s.decision;
    };
    ATN.prototype.getDecisionState = function (decision) {
        if (this.decisionToState.length > 0) {
            return this.decisionToState[decision];
        }
        return undefined;
    };
    Object.defineProperty(ATN.prototype, "numberOfDecisions", {
        get: function () {
            return this.decisionToState.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Computes the set of input symbols which could follow ATN state number
     * `stateNumber` in the specified full `context`. This method
     * considers the complete parser context, but does not evaluate semantic
     * predicates (i.e. all predicates encountered during the calculation are
     * assumed true). If a path in the ATN exists from the starting state to the
     * {@link RuleStopState} of the outermost context without matching any
     * symbols, {@link Token#EOF} is added to the returned set.
     *
     * If `context` is `undefined`, it is treated as
     * {@link ParserRuleContext#EMPTY}.
     *
     * Note that this does NOT give you the set of all tokens that could
     * appear at a given token position in the input phrase.  In other words, it
     * does not answer:
     *
     * > Given a specific partial input phrase, return the set of all
     * > tokens that can follow the last token in the input phrase.
     *
     * The big difference is that with just the input, the parser could land
     * right in the middle of a lookahead decision. Getting all
     * *possible* tokens given a partial input stream is a separate
     * computation. See https://github.com/antlr/antlr4/issues/1428
     *
     * For this function, we are specifying an ATN state and call stack to
     * compute what token(s) can come next and specifically: outside of a
     * lookahead decision. That is what you want for error reporting and
     * recovery upon parse error.
     *
     * @param stateNumber the ATN state number
     * @param context the full parse context
     * @returns The set of potentially valid input symbols which could follow the
     * specified state in the specified context.
     * @ if the ATN does not contain a state with
     * number `stateNumber`
     */
    ATN.prototype.getExpectedTokens = function (stateNumber, context) {
        if (stateNumber < 0 || stateNumber >= this.states.length) {
            throw new RangeError("Invalid state number.");
        }
        var ctx = context;
        var s = this.states[stateNumber];
        var following = this.nextTokens(s);
        if (!following.contains(exports.Token.EPSILON)) {
            return following;
        }
        var expected = new IntervalSet();
        expected.addAll(following);
        expected.remove(exports.Token.EPSILON);
        while (ctx != null && ctx.invokingState >= 0 && following.contains(exports.Token.EPSILON)) {
            var invokingState = this.states[ctx.invokingState];
            var rt = invokingState.transition(0);
            following = this.nextTokens(rt.followState);
            expected.addAll(following);
            expected.remove(exports.Token.EPSILON);
            ctx = ctx._parent;
        }
        if (following.contains(exports.Token.EPSILON)) {
            expected.add(exports.Token.EOF);
        }
        return expected;
    };
    __decorate([
        NotNull
    ], ATN.prototype, "states", void 0);
    __decorate([
        NotNull
    ], ATN.prototype, "decisionToState", void 0);
    __decorate([
        NotNull
    ], ATN.prototype, "modeNameToStartState", void 0);
    __decorate([
        NotNull
    ], ATN.prototype, "modeToStartState", void 0);
    __decorate([
        NotNull
    ], ATN.prototype, "decisionToDFA", void 0);
    __decorate([
        NotNull
    ], ATN.prototype, "modeToDFA", void 0);
    __decorate([
        NotNull
    ], ATN.prototype, "nextTokens", null);
    __decorate([
        __param(0, NotNull)
    ], ATN.prototype, "removeState", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull)
    ], ATN.prototype, "defineMode", null);
    __decorate([
        __param(0, NotNull)
    ], ATN.prototype, "defineDecisionState", null);
    __decorate([
        NotNull
    ], ATN.prototype, "getExpectedTokens", null);
    ATN = __decorate([
        __param(0, NotNull)
    ], ATN);
    return ATN;
}());
(function (ATN) {
    ATN.INVALID_ALT_NUMBER = 0;
})(ATN || (ATN = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This implementation of {@link LexerAction} is used for tracking input offsets
 * for position-dependent actions within a {@link LexerActionExecutor}.
 *
 * This action is not serialized as part of the ATN, and is only required for
 * position-dependent lexer actions which appear at a location other than the
 * end of a rule. For more information about DFA optimizations employed for
 * lexer actions, see {@link LexerActionExecutor#append} and
 * {@link LexerActionExecutor#fixOffsetBeforeMatch}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerIndexedCustomAction = /** @class */ (function () {
    /**
     * Constructs a new indexed custom action by associating a character offset
     * with a {@link LexerAction}.
     *
     * Note: This class is only required for lexer actions for which
     * {@link LexerAction#isPositionDependent} returns `true`.
     *
     * @param offset The offset into the input {@link CharStream}, relative to
     * the token start index, at which the specified lexer action should be
     * executed.
     * @param action The lexer action to execute at a particular offset in the
     * input {@link CharStream}.
     */
    function LexerIndexedCustomAction(offset, action) {
        this._offset = offset;
        this._action = action;
    }
    Object.defineProperty(LexerIndexedCustomAction.prototype, "offset", {
        /**
         * Gets the location in the input {@link CharStream} at which the lexer
         * action should be executed. The value is interpreted as an offset relative
         * to the token start index.
         *
         * @returns The location in the input {@link CharStream} at which the lexer
         * action should be executed.
         */
        get: function () {
            return this._offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerIndexedCustomAction.prototype, "action", {
        /**
         * Gets the lexer action to execute.
         *
         * @returns A {@link LexerAction} object which executes the lexer action.
         */
        get: function () {
            return this._action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerIndexedCustomAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         *
         * @returns This method returns the result of calling {@link #getActionType}
         * on the {@link LexerAction} returned by {@link #getAction}.
         */
        get: function () {
            return this._action.actionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerIndexedCustomAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `true`.
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This method calls {@link #execute} on the result of {@link #getAction}
     * using the provided `lexer`.
     */
    LexerIndexedCustomAction.prototype.execute = function (lexer) {
        // assume the input stream position was properly set by the calling code
        this._action.execute(lexer);
    };
    LexerIndexedCustomAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this._offset);
        hash = MurmurHash.update(hash, this._action);
        return MurmurHash.finish(hash, 2);
    };
    LexerIndexedCustomAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerIndexedCustomAction)) {
            return false;
        }
        return this._offset === obj._offset
            && this._action.equals(obj._action);
    };
    __decorate([
        NotNull
    ], LexerIndexedCustomAction.prototype, "action", null);
    __decorate([
        Override
    ], LexerIndexedCustomAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerIndexedCustomAction.prototype, "isPositionDependent", null);
    __decorate([
        Override
    ], LexerIndexedCustomAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerIndexedCustomAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerIndexedCustomAction.prototype, "equals", null);
    LexerIndexedCustomAction = __decorate([
        __param(1, NotNull)
    ], LexerIndexedCustomAction);
    return LexerIndexedCustomAction;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Represents an executor for a sequence of lexer actions which traversed during
 * the matching operation of a lexer rule (token).
 *
 * The executor tracks position information for position-dependent lexer actions
 * efficiently, ensuring that actions appearing only at the end of the rule do
 * not cause bloating of the {@link DFA} created for the lexer.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerActionExecutor = /** @class */ (function () {
    /**
     * Constructs an executor for a sequence of {@link LexerAction} actions.
     * @param lexerActions The lexer actions to execute.
     */
    function LexerActionExecutor(lexerActions) {
        this._lexerActions = lexerActions;
        var hash = MurmurHash.initialize();
        try {
            for (var lexerActions_1 = __values(lexerActions), lexerActions_1_1 = lexerActions_1.next(); !lexerActions_1_1.done; lexerActions_1_1 = lexerActions_1.next()) {
                var lexerAction = lexerActions_1_1.value;
                hash = MurmurHash.update(hash, lexerAction);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (lexerActions_1_1 && !lexerActions_1_1.done && (_a = lexerActions_1.return)) _a.call(lexerActions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.cachedHashCode = MurmurHash.finish(hash, lexerActions.length);
        var e_1, _a;
    }
    /**
     * Creates a {@link LexerActionExecutor} which executes the actions for
     * the input `lexerActionExecutor` followed by a specified
     * `lexerAction`.
     *
     * @param lexerActionExecutor The executor for actions already traversed by
     * the lexer while matching a token within a particular
     * {@link ATNConfig}. If this is `undefined`, the method behaves as though
     * it were an empty executor.
     * @param lexerAction The lexer action to execute after the actions
     * specified in `lexerActionExecutor`.
     *
     * @returns A {@link LexerActionExecutor} for executing the combine actions
     * of `lexerActionExecutor` and `lexerAction`.
     */
    LexerActionExecutor.append = function (lexerActionExecutor, lexerAction) {
        if (!lexerActionExecutor) {
            return new LexerActionExecutor([lexerAction]);
        }
        var lexerActions = lexerActionExecutor._lexerActions.slice(0);
        lexerActions.push(lexerAction);
        return new LexerActionExecutor(lexerActions);
    };
    /**
     * Creates a {@link LexerActionExecutor} which encodes the current offset
     * for position-dependent lexer actions.
     *
     * Normally, when the executor encounters lexer actions where
     * {@link LexerAction#isPositionDependent} returns `true`, it calls
     * {@link IntStream#seek} on the input {@link CharStream} to set the input
     * position to the *end* of the current token. This behavior provides
     * for efficient DFA representation of lexer actions which appear at the end
     * of a lexer rule, even when the lexer rule matches a variable number of
     * characters.
     *
     * Prior to traversing a match transition in the ATN, the current offset
     * from the token start index is assigned to all position-dependent lexer
     * actions which have not already been assigned a fixed offset. By storing
     * the offsets relative to the token start index, the DFA representation of
     * lexer actions which appear in the middle of tokens remains efficient due
     * to sharing among tokens of the same length, regardless of their absolute
     * position in the input stream.
     *
     * If the current executor already has offsets assigned to all
     * position-dependent lexer actions, the method returns `this`.
     *
     * @param offset The current offset to assign to all position-dependent
     * lexer actions which do not already have offsets assigned.
     *
     * @returns A {@link LexerActionExecutor} which stores input stream offsets
     * for all position-dependent lexer actions.
     */
    LexerActionExecutor.prototype.fixOffsetBeforeMatch = function (offset) {
        var updatedLexerActions;
        for (var i = 0; i < this._lexerActions.length; i++) {
            if (this._lexerActions[i].isPositionDependent && !(this._lexerActions[i] instanceof LexerIndexedCustomAction)) {
                if (!updatedLexerActions) {
                    updatedLexerActions = this._lexerActions.slice(0);
                }
                updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this._lexerActions[i]);
            }
        }
        if (!updatedLexerActions) {
            return this;
        }
        return new LexerActionExecutor(updatedLexerActions);
    };
    Object.defineProperty(LexerActionExecutor.prototype, "lexerActions", {
        /**
         * Gets the lexer actions to be executed by this executor.
         * @returns The lexer actions to be executed by this executor.
         */
        get: function () {
            return this._lexerActions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Execute the actions encapsulated by this executor within the context of a
     * particular {@link Lexer}.
     *
     * This method calls {@link IntStream#seek} to set the position of the
     * `input` {@link CharStream} prior to calling
     * {@link LexerAction#execute} on a position-dependent action. Before the
     * method returns, the input position will be restored to the same position
     * it was in when the method was invoked.
     *
     * @param lexer The lexer instance.
     * @param input The input stream which is the source for the current token.
     * When this method is called, the current {@link IntStream#index} for
     * `input` should be the start of the following token, i.e. 1
     * character past the end of the current token.
     * @param startIndex The token start index. This value may be passed to
     * {@link IntStream#seek} to set the `input` position to the beginning
     * of the token.
     */
    LexerActionExecutor.prototype.execute = function (lexer, input, startIndex) {
        var requiresSeek = false;
        var stopIndex = input.index;
        try {
            try {
                for (var _a = __values(this._lexerActions), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var lexerAction = _b.value;
                    if (lexerAction instanceof LexerIndexedCustomAction) {
                        var offset = lexerAction.offset;
                        input.seek(startIndex + offset);
                        lexerAction = lexerAction.action;
                        requiresSeek = (startIndex + offset) !== stopIndex;
                    }
                    else if (lexerAction.isPositionDependent) {
                        input.seek(stopIndex);
                        requiresSeek = false;
                    }
                    lexerAction.execute(lexer);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        finally {
            if (requiresSeek) {
                input.seek(stopIndex);
            }
        }
        var e_2, _c;
    };
    LexerActionExecutor.prototype.hashCode = function () {
        return this.cachedHashCode;
    };
    LexerActionExecutor.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerActionExecutor)) {
            return false;
        }
        return this.cachedHashCode === obj.cachedHashCode
            && ArrayEqualityComparator.INSTANCE.equals(this._lexerActions, obj._lexerActions);
    };
    __decorate([
        NotNull
    ], LexerActionExecutor.prototype, "_lexerActions", void 0);
    __decorate([
        NotNull
    ], LexerActionExecutor.prototype, "lexerActions", null);
    __decorate([
        __param(0, NotNull)
    ], LexerActionExecutor.prototype, "execute", null);
    __decorate([
        Override
    ], LexerActionExecutor.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerActionExecutor.prototype, "equals", null);
    __decorate([
        NotNull,
        __param(1, NotNull)
    ], LexerActionExecutor, "append", null);
    LexerActionExecutor = __decorate([
        __param(0, NotNull)
    ], LexerActionExecutor);
    return LexerActionExecutor;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var LexerNoViableAltException = /** @class */ (function (_super) {
    __extends(LexerNoViableAltException, _super);
    function LexerNoViableAltException(lexer, input, startIndex, deadEndConfigs) {
        var _this = _super.call(this, lexer, input) || this;
        _this._startIndex = startIndex;
        _this._deadEndConfigs = deadEndConfigs;
        return _this;
    }
    Object.defineProperty(LexerNoViableAltException.prototype, "startIndex", {
        get: function () {
            return this._startIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerNoViableAltException.prototype, "deadEndConfigs", {
        get: function () {
            return this._deadEndConfigs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerNoViableAltException.prototype, "inputStream", {
        get: function () {
            return this.input;
        },
        enumerable: true,
        configurable: true
    });
    LexerNoViableAltException.prototype.toString = function () {
        var symbol = "";
        if (this._startIndex >= 0 && this._startIndex < this.inputStream.size) {
            symbol = this.inputStream.getText(Interval.of(this._startIndex, this._startIndex));
            symbol = escapeWhitespace(symbol, false);
        }
        // return String.format(Locale.getDefault(), "%s('%s')", LexerNoViableAltException.class.getSimpleName(), symbol);
        return "LexerNoViableAltException('" + symbol + "')";
    };
    __decorate([
        Override
    ], LexerNoViableAltException.prototype, "inputStream", null);
    __decorate([
        Override
    ], LexerNoViableAltException.prototype, "toString", null);
    LexerNoViableAltException = __decorate([
        __param(1, NotNull)
    ], LexerNoViableAltException);
    return LexerNoViableAltException;
}(RecognitionException));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var OrderedATNConfigSet = /** @class */ (function (_super) {
    __extends(OrderedATNConfigSet, _super);
    function OrderedATNConfigSet(set, readonly) {
        var _this = this;
        if (set != null && readonly != null) {
            _this = _super.call(this, set, readonly) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        return _this;
    }
    OrderedATNConfigSet.prototype.clone = function (readonly) {
        var copy = new OrderedATNConfigSet(this, readonly);
        if (!readonly && this.isReadOnly) {
            copy.addAll(this);
        }
        return copy;
    };
    OrderedATNConfigSet.prototype.getKey = function (e) {
        // This is a specially crafted key to ensure configurations are only merged if they are equal
        return { state: 0, alt: e.hashCode() };
    };
    OrderedATNConfigSet.prototype.canMerge = function (left, leftKey, right) {
        return left.equals(right);
    };
    __decorate([
        Override
    ], OrderedATNConfigSet.prototype, "clone", null);
    __decorate([
        Override
    ], OrderedATNConfigSet.prototype, "getKey", null);
    __decorate([
        Override
    ], OrderedATNConfigSet.prototype, "canMerge", null);
    return OrderedATNConfigSet;
}(ATNConfigSet));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// import * as assert from "assert";
/** "dup" of ParserInterpreter */
var LexerATNSimulator = /** @class */ (function (_super) {
    __extends(LexerATNSimulator, _super);
    function LexerATNSimulator(atn, recog) {
        var _this = _super.call(this, atn) || this;
        _this.optimize_tail_calls = true;
        /** The current token's starting index into the character stream.
         *  Shared across DFA to ATN simulation in case the ATN fails and the
         *  DFA did not have a previous accept state. In this case, we use the
         *  ATN-generated exception object.
         */
        _this.startIndex = -1;
        /** line number 1..n within the input */
        _this._line = 1;
        /** The index of the character relative to the beginning of the line 0..n-1 */
        _this._charPositionInLine = 0;
        _this.mode = Lexer.DEFAULT_MODE;
        /** Used during DFA/ATN exec to record the most recent accept configuration info */
        _this.prevAccept = new LexerATNSimulator.SimState();
        _this.recog = recog;
        return _this;
    }
    LexerATNSimulator.prototype.copyState = function (simulator) {
        this._charPositionInLine = simulator.charPositionInLine;
        this._line = simulator._line;
        this.mode = simulator.mode;
        this.startIndex = simulator.startIndex;
    };
    LexerATNSimulator.prototype.match = function (input, mode) {
        LexerATNSimulator.match_calls++;
        this.mode = mode;
        var mark = input.mark();
        try {
            this.startIndex = input.index;
            this.prevAccept.reset();
            var s0 = this.atn.modeToDFA[mode].s0;
            if (s0 == null) {
                return this.matchATN(input);
            }
            else {
                return this.execATN(input, s0);
            }
        }
        finally {
            input.release(mark);
        }
    };
    LexerATNSimulator.prototype.reset = function () {
        this.prevAccept.reset();
        this.startIndex = -1;
        this._line = 1;
        this._charPositionInLine = 0;
        this.mode = Lexer.DEFAULT_MODE;
    };
    LexerATNSimulator.prototype.matchATN = function (input) {
        var startState = this.atn.modeToStartState[this.mode];
        if (LexerATNSimulator.debug) {
            console.log("matchATN mode " + this.mode + " start: " + startState);
        }
        var old_mode = this.mode;
        var s0_closure = this.computeStartState(input, startState);
        var suppressEdge = s0_closure.hasSemanticContext;
        if (suppressEdge) {
            s0_closure.hasSemanticContext = false;
        }
        var next = this.addDFAState(s0_closure);
        if (!suppressEdge) {
            var dfa = this.atn.modeToDFA[this.mode];
            if (!dfa.s0) {
                dfa.s0 = next;
            }
            else {
                next = dfa.s0;
            }
        }
        var predict = this.execATN(input, next);
        if (LexerATNSimulator.debug) {
            console.log("DFA after matchATN: " + this.atn.modeToDFA[old_mode].toLexerString());
        }
        return predict;
    };
    LexerATNSimulator.prototype.execATN = function (input, ds0) {
        // console.log("enter exec index "+input.index+" from "+ds0.configs);
        if (LexerATNSimulator.debug) {
            console.log("start state closure=" + ds0.configs);
        }
        if (ds0.isAcceptState) {
            // allow zero-length tokens
            this.captureSimState(this.prevAccept, input, ds0);
        }
        var t = input.LA(1);
        // @NotNull
        var s = ds0; // s is current/from DFA state
        while (true) { // while more work
            if (LexerATNSimulator.debug) {
                console.log("execATN loop starting closure: " + s.configs);
            }
            // As we move src->trg, src->trg, we keep track of the previous trg to
            // avoid looking up the DFA state again, which is expensive.
            // If the previous target was already part of the DFA, we might
            // be able to avoid doing a reach operation upon t. If s!=null,
            // it means that semantic predicates didn't prevent us from
            // creating a DFA state. Once we know s!=null, we check to see if
            // the DFA state has an edge already for t. If so, we can just reuse
            // it's configuration set; there's no point in re-computing it.
            // This is kind of like doing DFA simulation within the ATN
            // simulation because DFA simulation is really just a way to avoid
            // computing reach/closure sets. Technically, once we know that
            // we have a previously added DFA state, we could jump over to
            // the DFA simulator. But, that would mean popping back and forth
            // a lot and making things more complicated algorithmically.
            // This optimization makes a lot of sense for loops within DFA.
            // A character will take us back to an existing DFA state
            // that already has lots of edges out of it. e.g., .* in comments.
            var target = this.getExistingTargetState(s, t);
            if (target == null) {
                target = this.computeTargetState(input, s, t);
            }
            if (target === ATNSimulator.ERROR) {
                break;
            }
            // If this is a consumable input element, make sure to consume before
            // capturing the accept state so the input index, line, and char
            // position accurately reflect the state of the interpreter at the
            // end of the token.
            if (t !== exports.IntStream.EOF) {
                this.consume(input);
            }
            if (target.isAcceptState) {
                this.captureSimState(this.prevAccept, input, target);
                if (t === exports.IntStream.EOF) {
                    break;
                }
            }
            t = input.LA(1);
            s = target; // flip; current DFA target becomes new src/from state
        }
        return this.failOrAccept(this.prevAccept, input, s.configs, t);
    };
    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns `undefined`.
     *
     * @param s The current DFA state
     * @param t The next input symbol
     * @returns The existing target DFA state for the given input symbol
     * `t`, or `undefined` if the target state for this edge is not
     * already cached
     */
    LexerATNSimulator.prototype.getExistingTargetState = function (s, t) {
        var target = s.getTarget(t);
        if (LexerATNSimulator.debug && target != null) {
            console.log("reuse state " + s.stateNumber +
                " edge to " + target.stateNumber);
        }
        return target;
    };
    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param input The input stream
     * @param s The current DFA state
     * @param t The next input symbol
     *
     * @returns The computed target DFA state for the given input symbol
     * `t`. If `t` does not lead to a valid DFA state, this method
     * returns {@link #ERROR}.
     */
    LexerATNSimulator.prototype.computeTargetState = function (input, s, t) {
        var reach = new OrderedATNConfigSet();
        // if we don't find an existing DFA state
        // Fill reach starting from closure, following t transitions
        this.getReachableConfigSet(input, s.configs, reach, t);
        if (reach.isEmpty) { // we got nowhere on t from s
            if (!reach.hasSemanticContext) {
                // we got nowhere on t, don't throw out this knowledge; it'd
                // cause a failover from DFA later.
                this.addDFAEdge(s, t, ATNSimulator.ERROR);
            }
            // stop when we can't match any more char
            return ATNSimulator.ERROR;
        }
        // Add an edge from s to target DFA found/created for reach
        return this.addDFAEdge(s, t, reach);
    };
    LexerATNSimulator.prototype.failOrAccept = function (prevAccept, input, reach, t) {
        if (prevAccept.dfaState != null) {
            var lexerActionExecutor = prevAccept.dfaState.lexerActionExecutor;
            this.accept(input, lexerActionExecutor, this.startIndex, prevAccept.index, prevAccept.line, prevAccept.charPos);
            return prevAccept.dfaState.prediction;
        }
        else {
            // if no accept and EOF is first char, return EOF
            if (t === exports.IntStream.EOF && input.index === this.startIndex) {
                return exports.Token.EOF;
            }
            throw new LexerNoViableAltException(this.recog, input, this.startIndex, reach);
        }
    };
    /** Given a starting configuration set, figure out all ATN configurations
     *  we can reach upon input `t`. Parameter `reach` is a return
     *  parameter.
     */
    LexerATNSimulator.prototype.getReachableConfigSet = function (input, closure, reach, t) {
        // this is used to skip processing for configs which have a lower priority
        // than a config that already reached an accept state for the same rule
        var skipAlt = ATN.INVALID_ALT_NUMBER;
        try {
            for (var closure_1 = __values(closure), closure_1_1 = closure_1.next(); !closure_1_1.done; closure_1_1 = closure_1.next()) {
                var c = closure_1_1.value;
                var currentAltReachedAcceptState = c.alt === skipAlt;
                if (currentAltReachedAcceptState && c.hasPassedThroughNonGreedyDecision) {
                    continue;
                }
                if (LexerATNSimulator.debug) {
                    console.log("testing " + this.getTokenName(t) + " at " + c.toString(this.recog, true));
                }
                var n = c.state.numberOfOptimizedTransitions;
                for (var ti = 0; ti < n; ti++) { // for each optimized transition
                    var trans = c.state.getOptimizedTransition(ti);
                    var target = this.getReachableTarget(trans, t);
                    if (target != null) {
                        var lexerActionExecutor = c.lexerActionExecutor;
                        var config = void 0;
                        if (lexerActionExecutor != null) {
                            lexerActionExecutor = lexerActionExecutor.fixOffsetBeforeMatch(input.index - this.startIndex);
                            config = c.transform(target, true, lexerActionExecutor);
                        }
                        else {
                            // assert(c.lexerActionExecutor == null);
                            config = c.transform(target, true);
                        }
                        var treatEofAsEpsilon = t === exports.IntStream.EOF;
                        if (this.closure(input, config, reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
                            // any remaining configs for this alt have a lower priority than
                            // the one that just reached an accept state.
                            skipAlt = c.alt;
                            break;
                        }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (closure_1_1 && !closure_1_1.done && (_a = closure_1.return)) _a.call(closure_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _a;
    };
    LexerATNSimulator.prototype.accept = function (input, lexerActionExecutor, startIndex, index, line, charPos) {
        if (LexerATNSimulator.debug) {
            console.log("ACTION " + lexerActionExecutor);
        }
        // seek to after last char in token
        input.seek(index);
        this._line = line;
        this._charPositionInLine = charPos;
        if (lexerActionExecutor != null && this.recog != null) {
            lexerActionExecutor.execute(this.recog, input, startIndex);
        }
    };
    LexerATNSimulator.prototype.getReachableTarget = function (trans, t) {
        if (trans.matches(t, Lexer.MIN_CHAR_VALUE, Lexer.MAX_CHAR_VALUE)) {
            return trans.target;
        }
        return undefined;
    };
    LexerATNSimulator.prototype.computeStartState = function (input, p) {
        var initialContext = PredictionContext.EMPTY_FULL;
        var configs = new OrderedATNConfigSet();
        for (var i = 0; i < p.numberOfTransitions; i++) {
            var target = p.transition(i).target;
            var c = ATNConfig.create(target, i + 1, initialContext);
            this.closure(input, c, configs, false, false, false);
        }
        return configs;
    };
    /**
     * Since the alternatives within any lexer decision are ordered by
     * preference, this method stops pursuing the closure as soon as an accept
     * state is reached. After the first accept state is reached by depth-first
     * search from `config`, all other (potentially reachable) states for
     * this rule would have a lower priority.
     *
     * @returns `true` if an accept state is reached, otherwise
     * `false`.
     */
    LexerATNSimulator.prototype.closure = function (input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
        if (LexerATNSimulator.debug) {
            console.log("closure(" + config.toString(this.recog, true) + ")");
        }
        if (config.state instanceof RuleStopState) {
            if (LexerATNSimulator.debug) {
                if (this.recog != null) {
                    console.log("closure at " + this.recog.ruleNames[config.state.ruleIndex] + " rule stop " + config);
                }
                else {
                    console.log("closure at rule stop " + config);
                }
            }
            var context_1 = config.context;
            if (context_1.isEmpty) {
                configs.add(config);
                return true;
            }
            else if (context_1.hasEmpty) {
                configs.add(config.transform(config.state, true, PredictionContext.EMPTY_FULL));
                currentAltReachedAcceptState = true;
            }
            for (var i = 0; i < context_1.size; i++) {
                var returnStateNumber = context_1.getReturnState(i);
                if (returnStateNumber === PredictionContext.EMPTY_FULL_STATE_KEY) {
                    continue;
                }
                var newContext = context_1.getParent(i); // "pop" return state
                var returnState = this.atn.states[returnStateNumber];
                var c = config.transform(returnState, false, newContext);
                currentAltReachedAcceptState = this.closure(input, c, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
            return currentAltReachedAcceptState;
        }
        // optimization
        if (!config.state.onlyHasEpsilonTransitions) {
            if (!currentAltReachedAcceptState || !config.hasPassedThroughNonGreedyDecision) {
                configs.add(config);
            }
        }
        var p = config.state;
        for (var i = 0; i < p.numberOfOptimizedTransitions; i++) {
            var t = p.getOptimizedTransition(i);
            var c = this.getEpsilonTarget(input, config, t, configs, speculative, treatEofAsEpsilon);
            if (c != null) {
                currentAltReachedAcceptState = this.closure(input, c, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
        }
        return currentAltReachedAcceptState;
    };
    // side-effect: can alter configs.hasSemanticContext
    LexerATNSimulator.prototype.getEpsilonTarget = function (input, config, t, configs, speculative, treatEofAsEpsilon) {
        var c;
        switch (t.serializationType) {
            case 3 /* RULE */:
                var ruleTransition = t;
                if (this.optimize_tail_calls && ruleTransition.optimizedTailCall && !config.context.hasEmpty) {
                    c = config.transform(t.target, true);
                }
                else {
                    var newContext = config.context.getChild(ruleTransition.followState.stateNumber);
                    c = config.transform(t.target, true, newContext);
                }
                break;
            case 10 /* PRECEDENCE */:
                throw new Error("Precedence predicates are not supported in lexers.");
            case 4 /* PREDICATE */:
                /*  Track traversing semantic predicates. If we traverse,
                    we cannot add a DFA state for this "reach" computation
                    because the DFA would not test the predicate again in the
                    future. Rather than creating collections of semantic predicates
                    like v3 and testing them on prediction, v4 will test them on the
                    fly all the time using the ATN not the DFA. This is slower but
                    semantically it's not used that often. One of the key elements to
                    this predicate mechanism is not adding DFA states that see
                    predicates immediately afterwards in the ATN. For example,
    
                    a : ID {p1}? | ID {p2}? ;
    
                    should create the start state for rule 'a' (to save start state
                    competition), but should not create target of ID state. The
                    collection of ATN states the following ID references includes
                    states reached by traversing predicates. Since this is when we
                    test them, we cannot cash the DFA state target of ID.
                */
                var pt = t;
                if (LexerATNSimulator.debug) {
                    console.log("EVAL rule " + pt.ruleIndex + ":" + pt.predIndex);
                }
                configs.hasSemanticContext = true;
                if (this.evaluatePredicate(input, pt.ruleIndex, pt.predIndex, speculative)) {
                    c = config.transform(t.target, true);
                }
                else {
                    c = undefined;
                }
                break;
            case 6 /* ACTION */:
                if (config.context.hasEmpty) {
                    // execute actions anywhere in the start rule for a token.
                    //
                    // TODO: if the entry rule is invoked recursively, some
                    // actions may be executed during the recursive call. The
                    // problem can appear when hasEmpty is true but
                    // isEmpty is false. In this case, the config needs to be
                    // split into two contexts - one with just the empty path
                    // and another with everything but the empty path.
                    // Unfortunately, the current algorithm does not allow
                    // getEpsilonTarget to return two configurations, so
                    // additional modifications are needed before we can support
                    // the split operation.
                    var lexerActionExecutor = LexerActionExecutor.append(config.lexerActionExecutor, this.atn.lexerActions[t.actionIndex]);
                    c = config.transform(t.target, true, lexerActionExecutor);
                    break;
                }
                else {
                    // ignore actions in referenced rules
                    c = config.transform(t.target, true);
                    break;
                }
            case 1 /* EPSILON */:
                c = config.transform(t.target, true);
                break;
            case 5 /* ATOM */:
            case 2 /* RANGE */:
            case 7 /* SET */:
                if (treatEofAsEpsilon) {
                    if (t.matches(exports.IntStream.EOF, Lexer.MIN_CHAR_VALUE, Lexer.MAX_CHAR_VALUE)) {
                        c = config.transform(t.target, false);
                        break;
                    }
                }
                c = undefined;
                break;
            default:
                c = undefined;
                break;
        }
        return c;
    };
    /**
     * Evaluate a predicate specified in the lexer.
     *
     * If `speculative` is `true`, this method was called before
     * {@link #consume} for the matched character. This method should call
     * {@link #consume} before evaluating the predicate to ensure position
     * sensitive values, including {@link Lexer#getText}, {@link Lexer#getLine},
     * and {@link Lexer#getCharPositionInLine}, properly reflect the current
     * lexer state. This method should restore `input` and the simulator
     * to the original state before returning (i.e. undo the actions made by the
     * call to {@link #consume}.
     *
     * @param input The input stream.
     * @param ruleIndex The rule containing the predicate.
     * @param predIndex The index of the predicate within the rule.
     * @param speculative `true` if the current index in `input` is
     * one character before the predicate's location.
     *
     * @returns `true` if the specified predicate evaluates to
     * `true`.
     */
    LexerATNSimulator.prototype.evaluatePredicate = function (input, ruleIndex, predIndex, speculative) {
        // assume true if no recognizer was provided
        if (this.recog == null) {
            return true;
        }
        if (!speculative) {
            return this.recog.sempred(undefined, ruleIndex, predIndex);
        }
        var savedCharPositionInLine = this._charPositionInLine;
        var savedLine = this._line;
        var index = input.index;
        var marker = input.mark();
        try {
            this.consume(input);
            return this.recog.sempred(undefined, ruleIndex, predIndex);
        }
        finally {
            this._charPositionInLine = savedCharPositionInLine;
            this._line = savedLine;
            input.seek(index);
            input.release(marker);
        }
    };
    LexerATNSimulator.prototype.captureSimState = function (settings, input, dfaState) {
        settings.index = input.index;
        settings.line = this._line;
        settings.charPos = this._charPositionInLine;
        settings.dfaState = dfaState;
    };
    LexerATNSimulator.prototype.addDFAEdge = function (p, t, q) {
        if (q instanceof ATNConfigSet) {
            /* leading to this call, ATNConfigSet.hasSemanticContext is used as a
            * marker indicating dynamic predicate evaluation makes this edge
            * dependent on the specific input sequence, so the static edge in the
            * DFA should be omitted. The target DFAState is still created since
            * execATN has the ability to resynchronize with the DFA state cache
            * following the predicate evaluation step.
            *
            * TJP notes: next time through the DFA, we see a pred again and eval.
            * If that gets us to a previously created (but dangling) DFA
            * state, we can continue in pure DFA mode from there.
            */
            var suppressEdge = q.hasSemanticContext;
            if (suppressEdge) {
                q.hasSemanticContext = false;
            }
            // @NotNull
            var to = this.addDFAState(q);
            if (suppressEdge) {
                return to;
            }
            this.addDFAEdge(p, t, to);
            return to;
        }
        else {
            if (LexerATNSimulator.debug) {
                console.log("EDGE " + p + " -> " + q + " upon " + String.fromCharCode(t));
            }
            if (p != null) {
                p.setTarget(t, q);
            }
        }
    };
    /** Add a new DFA state if there isn't one with this set of
     * 	configurations already. This method also detects the first
     * 	configuration containing an ATN rule stop state. Later, when
     * 	traversing the DFA, we will know which rule to accept.
     */
    LexerATNSimulator.prototype.addDFAState = function (configs) {
        /* the lexer evaluates predicates on-the-fly; by this point configs
         * should not contain any configurations with unevaluated predicates.
         */
        // assert(!configs.hasSemanticContext);
        var proposed = new DFAState(configs);
        var existing = this.atn.modeToDFA[this.mode].states.get(proposed);
        if (existing != null) {
            return existing;
        }
        configs.optimizeConfigs(this);
        var newState = new DFAState(configs.clone(true));
        var firstConfigWithRuleStopState;
        try {
            for (var configs_1 = __values(configs), configs_1_1 = configs_1.next(); !configs_1_1.done; configs_1_1 = configs_1.next()) {
                var c = configs_1_1.value;
                if (c.state instanceof RuleStopState) {
                    firstConfigWithRuleStopState = c;
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (configs_1_1 && !configs_1_1.done && (_a = configs_1.return)) _a.call(configs_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (firstConfigWithRuleStopState != null) {
            var prediction = this.atn.ruleToTokenType[firstConfigWithRuleStopState.state.ruleIndex];
            var lexerActionExecutor = firstConfigWithRuleStopState.lexerActionExecutor;
            newState.acceptStateInfo = new AcceptStateInfo(prediction, lexerActionExecutor);
        }
        return this.atn.modeToDFA[this.mode].addState(newState);
        var e_2, _a;
    };
    LexerATNSimulator.prototype.getDFA = function (mode) {
        return this.atn.modeToDFA[mode];
    };
    /** Get the text matched so far for the current token.
     */
    LexerATNSimulator.prototype.getText = function (input) {
        // index is first lookahead char, don't include.
        return input.getText(Interval.of(this.startIndex, input.index - 1));
    };
    Object.defineProperty(LexerATNSimulator.prototype, "line", {
        get: function () {
            return this._line;
        },
        set: function (line) {
            this._line = line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerATNSimulator.prototype, "charPositionInLine", {
        get: function () {
            return this._charPositionInLine;
        },
        set: function (charPositionInLine) {
            this._charPositionInLine = charPositionInLine;
        },
        enumerable: true,
        configurable: true
    });
    LexerATNSimulator.prototype.consume = function (input) {
        var curChar = input.LA(1);
        if (curChar === "\n".charCodeAt(0)) {
            this._line++;
            this._charPositionInLine = 0;
        }
        else {
            this._charPositionInLine++;
        }
        input.consume();
    };
    LexerATNSimulator.prototype.getTokenName = function (t) {
        if (t === -1) {
            return "EOF";
        }
        //if ( atn.g!=null ) return atn.g.getTokenDisplayName(t);
        return "'" + String.fromCharCode(t) + "'";
    };
    LexerATNSimulator.match_calls = 0;
    __decorate([
        NotNull
    ], LexerATNSimulator.prototype, "prevAccept", void 0);
    __decorate([
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "copyState", null);
    __decorate([
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "match", null);
    __decorate([
        Override
    ], LexerATNSimulator.prototype, "reset", null);
    __decorate([
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "matchATN", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull)
    ], LexerATNSimulator.prototype, "execATN", null);
    __decorate([
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "getExistingTargetState", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], LexerATNSimulator.prototype, "computeTargetState", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull), __param(2, NotNull)
    ], LexerATNSimulator.prototype, "getReachableConfigSet", null);
    __decorate([
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "accept", null);
    __decorate([
        NotNull,
        __param(0, NotNull),
        __param(1, NotNull)
    ], LexerATNSimulator.prototype, "computeStartState", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull), __param(2, NotNull)
    ], LexerATNSimulator.prototype, "closure", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull),
        __param(3, NotNull)
    ], LexerATNSimulator.prototype, "getEpsilonTarget", null);
    __decorate([
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "evaluatePredicate", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull)
    ], LexerATNSimulator.prototype, "captureSimState", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "addDFAState", null);
    __decorate([
        NotNull
    ], LexerATNSimulator.prototype, "getDFA", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "getText", null);
    __decorate([
        __param(0, NotNull)
    ], LexerATNSimulator.prototype, "consume", null);
    __decorate([
        NotNull
    ], LexerATNSimulator.prototype, "getTokenName", null);
    LexerATNSimulator = __decorate([
        __param(0, NotNull)
    ], LexerATNSimulator);
    return LexerATNSimulator;
}(ATNSimulator));
(function (LexerATNSimulator) {
    LexerATNSimulator.debug = false;
    LexerATNSimulator.dfa_debug = false;
    /** When we hit an accept state in either the DFA or the ATN, we
     *  have to notify the character stream to start buffering characters
     *  via {@link IntStream#mark} and record the current state. The current sim state
     *  includes the current index into the input, the current line,
     *  and current character position in that line. Note that the Lexer is
     *  tracking the starting line and characterization of the token. These
     *  variables track the "state" of the simulator when it hits an accept state.
     *
     *  We track these variables separately for the DFA and ATN simulation
     *  because the DFA simulation often has to fail over to the ATN
     *  simulation. If the ATN simulation fails, we need the DFA to fall
     *  back to its previously accepted state, if any. If the ATN succeeds,
     *  then the ATN does the accept and the DFA simulator that invoked it
     *  can simply return the predicted token type.
     */
    var SimState = /** @class */ (function () {
        function SimState() {
            this.index = -1;
            this.line = 0;
            this.charPos = -1;
        }
        SimState.prototype.reset = function () {
            this.index = -1;
            this.line = 0;
            this.charPos = -1;
            this.dfaState = undefined;
        };
        return SimState;
    }());
    LexerATNSimulator.SimState = SimState;
})(LexerATNSimulator || (LexerATNSimulator = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** A lexer is recognizer that draws input symbols from a character stream.
 *  lexer grammars result in a subclass of this object. A Lexer object
 *  uses simplified match() and error recovery mechanisms in the interest
 *  of speed.
 */
var Lexer = /** @class */ (function (_super) {
    __extends(Lexer, _super);
    function Lexer(input) {
        var _this = _super.call(this) || this;
        /** How to create token objects */
        _this._factory = exports.CommonTokenFactory.DEFAULT;
        /** What character index in the stream did the current token start at?
         *  Needed, for example, to get the text for current token.  Set at
         *  the start of nextToken.
         */
        _this._tokenStartCharIndex = -1;
        /** The line on which the first character of the token resides */
        _this._tokenStartLine = 0;
        /** The character position of first character within the line */
        _this._tokenStartCharPositionInLine = 0;
        /** Once we see EOF on char stream, next token will be EOF.
         *  If you have DONE : EOF ; then you see DONE EOF.
         */
        _this._hitEOF = false;
        /** The channel number for the current token */
        _this._channel = 0;
        /** The token type for the current token */
        _this._type = 0;
        _this._modeStack = new IntegerStack();
        _this._mode = Lexer.DEFAULT_MODE;
        _this._input = input;
        _this._tokenFactorySourcePair = { source: _this, stream: input };
        return _this;
    }
    Object.defineProperty(Lexer, "DEFAULT_TOKEN_CHANNEL", {
        get: function () {
            return exports.Token.DEFAULT_CHANNEL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer, "HIDDEN", {
        get: function () {
            return exports.Token.HIDDEN_CHANNEL;
        },
        enumerable: true,
        configurable: true
    });
    Lexer.prototype.reset = function (resetInput) {
        // wack Lexer state variables
        if (resetInput === undefined || resetInput) {
            this._input.seek(0); // rewind the input
        }
        this._token = undefined;
        this._type = exports.Token.INVALID_TYPE;
        this._channel = exports.Token.DEFAULT_CHANNEL;
        this._tokenStartCharIndex = -1;
        this._tokenStartCharPositionInLine = -1;
        this._tokenStartLine = -1;
        this._text = undefined;
        this._hitEOF = false;
        this._mode = Lexer.DEFAULT_MODE;
        this._modeStack.clear();
        this.interpreter.reset();
    };
    /** Return a token from this source; i.e., match a token on the char
     *  stream.
     */
    Lexer.prototype.nextToken = function () {
        if (this._input == null) {
            throw new Error("nextToken requires a non-null input stream.");
        }
        // Mark start location in char stream so unbuffered streams are
        // guaranteed at least have text of current token
        var tokenStartMarker = this._input.mark();
        try {
            outer: while (true) {
                if (this._hitEOF) {
                    return this.emitEOF();
                }
                this._token = undefined;
                this._channel = exports.Token.DEFAULT_CHANNEL;
                this._tokenStartCharIndex = this._input.index;
                this._tokenStartCharPositionInLine = this.interpreter.charPositionInLine;
                this._tokenStartLine = this.interpreter.line;
                this._text = undefined;
                do {
                    this._type = exports.Token.INVALID_TYPE;
                    //				System.out.println("nextToken line "+tokenStartLine+" at "+((char)input.LA(1))+
                    //								   " in mode "+mode+
                    //								   " at index "+input.index);
                    var ttype = void 0;
                    try {
                        ttype = this.interpreter.match(this._input, this._mode);
                    }
                    catch (e) {
                        if (e instanceof LexerNoViableAltException) {
                            this.notifyListeners(e); // report error
                            this.recover(e);
                            ttype = Lexer.SKIP;
                        }
                        else {
                            throw e;
                        }
                    }
                    if (this._input.LA(1) === exports.IntStream.EOF) {
                        this._hitEOF = true;
                    }
                    if (this._type === exports.Token.INVALID_TYPE) {
                        this._type = ttype;
                    }
                    if (this._type === Lexer.SKIP) {
                        continue outer;
                    }
                } while (this._type === Lexer.MORE);
                if (this._token == null) {
                    return this.emit();
                }
                return this._token;
            }
        }
        finally {
            // make sure we release marker after match or
            // unbuffered char stream will keep buffering
            this._input.release(tokenStartMarker);
        }
    };
    /** Instruct the lexer to skip creating a token for current lexer rule
     *  and look for another token.  nextToken() knows to keep looking when
     *  a lexer rule finishes with token set to SKIP_TOKEN.  Recall that
     *  if token==undefined at end of any token rule, it creates one for you
     *  and emits it.
     */
    Lexer.prototype.skip = function () {
        this._type = Lexer.SKIP;
    };
    Lexer.prototype.more = function () {
        this._type = Lexer.MORE;
    };
    Lexer.prototype.mode = function (m) {
        this._mode = m;
    };
    Lexer.prototype.pushMode = function (m) {
        if (LexerATNSimulator.debug) {
            console.log("pushMode " + m);
        }
        this._modeStack.push(this._mode);
        this.mode(m);
    };
    Lexer.prototype.popMode = function () {
        if (this._modeStack.isEmpty) {
            throw new Error("EmptyStackException");
        }
        if (LexerATNSimulator.debug) {
            console.log("popMode back to " + this._modeStack.peek());
        }
        this.mode(this._modeStack.pop());
        return this._mode;
    };
    Object.defineProperty(Lexer.prototype, "tokenFactory", {
        get: function () {
            return this._factory;
        },
        // @Override
        set: function (factory) {
            this._factory = factory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "inputStream", {
        get: function () {
            return this._input;
        },
        /** Set the char stream and reset the lexer */
        set: function (input) {
            this.reset(false);
            this._input = input;
            this._tokenFactorySourcePair = { source: this, stream: this._input };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "sourceName", {
        get: function () {
            return this._input.sourceName;
        },
        enumerable: true,
        configurable: true
    });
    Lexer.prototype.emit = function (token) {
        if (!token) {
            token = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.charIndex - 1, this._tokenStartLine, this._tokenStartCharPositionInLine);
        }
        this._token = token;
        return token;
    };
    Lexer.prototype.emitEOF = function () {
        var cpos = this.charPositionInLine;
        var line = this.line;
        var eof = this._factory.create(this._tokenFactorySourcePair, exports.Token.EOF, undefined, exports.Token.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, line, cpos);
        this.emit(eof);
        return eof;
    };
    Object.defineProperty(Lexer.prototype, "line", {
        get: function () {
            return this.interpreter.line;
        },
        set: function (line) {
            this.interpreter.line = line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "charPositionInLine", {
        get: function () {
            return this.interpreter.charPositionInLine;
        },
        set: function (charPositionInLine) {
            this.interpreter.charPositionInLine = charPositionInLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "charIndex", {
        /** What is the index of the current character of lookahead? */
        get: function () {
            return this._input.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "text", {
        /** Return the text matched so far for the current token or any
         *  text override.
         */
        get: function () {
            if (this._text != null) {
                return this._text;
            }
            return this.interpreter.getText(this._input);
        },
        /** Set the complete text of this token; it wipes any previous
         *  changes to the text.
         */
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "token", {
        /** Override if emitting multiple tokens. */
        get: function () { return this._token; },
        set: function (_token) {
            this._token = _token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (ttype) {
            this._type = ttype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "channel", {
        get: function () {
            return this._channel;
        },
        set: function (channel) {
            this._channel = channel;
        },
        enumerable: true,
        configurable: true
    });
    /** Return a list of all Token objects in input char stream.
     *  Forces load of all tokens. Does not include EOF token.
     */
    Lexer.prototype.getAllTokens = function () {
        var tokens = [];
        var t = this.nextToken();
        while (t.type !== exports.Token.EOF) {
            tokens.push(t);
            t = this.nextToken();
        }
        return tokens;
    };
    Lexer.prototype.notifyListeners = function (e) {
        var text = this._input.getText(Interval.of(this._tokenStartCharIndex, this._input.index));
        var msg = "token recognition error at: '" +
            this.getErrorDisplay(text) + "'";
        var listener = this.getErrorListenerDispatch();
        if (listener.syntaxError) {
            listener.syntaxError(this, undefined, this._tokenStartLine, this._tokenStartCharPositionInLine, msg, e);
        }
    };
    Lexer.prototype.getErrorDisplay = function (s) {
        if (typeof s === "number") {
            switch (s) {
                case exports.Token.EOF:
                    return "<EOF>";
                case 0x0a:
                    return "\\n";
                case 0x09:
                    return "\\t";
                case 0x0d:
                    return "\\r";
            }
            return String.fromCharCode(s);
        }
        return s.replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r");
    };
    Lexer.prototype.getCharErrorDisplay = function (c) {
        var s = this.getErrorDisplay(c);
        return "'" + s + "'";
    };
    Lexer.prototype.recover = function (re) {
        if (re instanceof LexerNoViableAltException) {
            if (this._input.LA(1) !== exports.IntStream.EOF) {
                // skip a char and try again
                this.interpreter.consume(this._input);
            }
        }
        else {
            //System.out.println("consuming char "+(char)input.LA(1)+" during recovery");
            //re.printStackTrace();
            // TODO: Do we lose character or line position information?
            this._input.consume();
        }
    };
    Lexer.DEFAULT_MODE = 0;
    Lexer.MORE = -2;
    Lexer.SKIP = -3;
    Lexer.MIN_CHAR_VALUE = 0x0000;
    Lexer.MAX_CHAR_VALUE = 0xFFFF;
    __decorate([
        Override
    ], Lexer.prototype, "nextToken", null);
    __decorate([
        Override
    ], Lexer.prototype, "tokenFactory", null);
    __decorate([
        Override
    ], Lexer.prototype, "inputStream", null);
    __decorate([
        Override
    ], Lexer.prototype, "sourceName", null);
    __decorate([
        Override
    ], Lexer.prototype, "line", null);
    __decorate([
        Override
    ], Lexer.prototype, "charPositionInLine", null);
    return Lexer;
}(Recognizer));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class implements the {@link IntSet} backed by a sorted array of
 * non-overlapping intervals. It is particularly efficient for representing
 * large collections of numbers, where the majority of elements appear as part
 * of a sequential range of numbers that are all part of the set. For example,
 * the set { 1, 2, 3, 4, 7, 8 } may be represented as { [1, 4], [7, 8] }.
 *
 * This class is able to represent sets containing any combination of values in
 * the range {@link Integer#MIN_VALUE} to {@link Integer#MAX_VALUE}
 * (inclusive).
 */
var IntervalSet = /** @class */ (function () {
    function IntervalSet(intervals) {
        this.readonly = false;
        if (intervals != null) {
            this._intervals = intervals.slice(0);
        }
        else {
            this._intervals = [];
        }
    }
    Object.defineProperty(IntervalSet, "COMPLETE_CHAR_SET", {
        get: function () {
            if (IntervalSet._COMPLETE_CHAR_SET === undefined) {
                IntervalSet._COMPLETE_CHAR_SET = IntervalSet.of(Lexer.MIN_CHAR_VALUE, Lexer.MAX_CHAR_VALUE);
                IntervalSet._COMPLETE_CHAR_SET.setReadonly(true);
            }
            return IntervalSet._COMPLETE_CHAR_SET;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntervalSet, "EMPTY_SET", {
        get: function () {
            if (IntervalSet._EMPTY_SET == null) {
                IntervalSet._EMPTY_SET = new IntervalSet();
                IntervalSet._EMPTY_SET.setReadonly(true);
            }
            return IntervalSet._EMPTY_SET;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create a set with all ints within range [a..b] (inclusive). If b is omitted, the set contains the single element
     * a.
     */
    IntervalSet.of = function (a, b) {
        if (b === void 0) { b = a; }
        var s = new IntervalSet();
        s.add(a, b);
        return s;
    };
    IntervalSet.prototype.clear = function () {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        this._intervals.length = 0;
    };
    /** Add interval; i.e., add all integers from a to b to set.
     *  If b&lt;a, do nothing.
     *  Keep list in sorted order (by left range value).
     *  If overlap, combine ranges.  For example,
     *  If this is {1..5, 10..20}, adding 6..7 yields
     *  {1..5, 6..7, 10..20}.  Adding 4..8 yields {1..8, 10..20}.
     */
    IntervalSet.prototype.add = function (a, b) {
        if (b === void 0) { b = a; }
        this.addRange(Interval.of(a, b));
    };
    // copy on write so we can cache a..a intervals and sets of that
    IntervalSet.prototype.addRange = function (addition) {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        //System.out.println("add "+addition+" to "+intervals.toString());
        if (addition.b < addition.a) {
            return;
        }
        // find position in list
        // Use iterators as we modify list in place
        for (var i = 0; i < this._intervals.length; i++) {
            var r = this._intervals[i];
            if (addition.equals(r)) {
                return;
            }
            if (addition.adjacent(r) || !addition.disjoint(r)) {
                // next to each other, make a single larger interval
                var bigger = addition.union(r);
                this._intervals[i] = bigger;
                // make sure we didn't just create an interval that
                // should be merged with next interval in list
                while (i < this._intervals.length - 1) {
                    i++;
                    var next = this._intervals[i];
                    if (!bigger.adjacent(next) && bigger.disjoint(next)) {
                        break;
                    }
                    // if we bump up against or overlap next, merge
                    // remove this one
                    this._intervals.splice(i, 1);
                    i--;
                    // move backwards to what we just set
                    this._intervals[i] = bigger.union(next);
                    // set to 3 merged ones
                }
                // first call to next after previous duplicates the result
                return;
            }
            if (addition.startsBeforeDisjoint(r)) {
                // insert before r
                this._intervals.splice(i, 0, addition);
                return;
            }
            // if disjoint and after r, a future iteration will handle it
        }
        // ok, must be after last interval (and disjoint from last interval)
        // just add it
        this._intervals.push(addition);
    };
    /** combine all sets in the array returned the or'd value */
    IntervalSet.or = function (sets) {
        var r = new IntervalSet();
        try {
            for (var sets_1 = __values(sets), sets_1_1 = sets_1.next(); !sets_1_1.done; sets_1_1 = sets_1.next()) {
                var s = sets_1_1.value;
                r.addAll(s);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sets_1_1 && !sets_1_1.done && (_a = sets_1.return)) _a.call(sets_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return r;
        var e_1, _a;
    };
    IntervalSet.prototype.addAll = function (set) {
        if (set == null) {
            return this;
        }
        if (set instanceof IntervalSet) {
            var other = set;
            // walk set and add each interval
            var n = other._intervals.length;
            for (var i = 0; i < n; i++) {
                var I = other._intervals[i];
                this.add(I.a, I.b);
            }
        }
        else {
            try {
                for (var _a = __values(set.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var value = _b.value;
                    this.add(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return this;
        var e_2, _c;
    };
    IntervalSet.prototype.complementRange = function (minElement, maxElement) {
        return this.complement(IntervalSet.of(minElement, maxElement));
    };
    /** {@inheritDoc} */
    IntervalSet.prototype.complement = function (vocabulary) {
        if (vocabulary.isNil) {
            // nothing in common with null set
            return IntervalSet.EMPTY_SET;
        }
        var vocabularyIS;
        if (vocabulary instanceof IntervalSet) {
            vocabularyIS = vocabulary;
        }
        else {
            vocabularyIS = new IntervalSet();
            vocabularyIS.addAll(vocabulary);
        }
        return vocabularyIS.subtract(this);
    };
    IntervalSet.prototype.subtract = function (a) {
        if (a == null || a.isNil) {
            return new IntervalSet(this._intervals);
        }
        if (a instanceof IntervalSet) {
            return IntervalSet.subtract(this, a);
        }
        var other = new IntervalSet();
        other.addAll(a);
        return IntervalSet.subtract(this, other);
    };
    /**
     * Compute the set difference between two interval sets. The specific
     * operation is `left - right`.
     */
    IntervalSet.subtract = function (left, right) {
        if (left.isNil) {
            return new IntervalSet();
        }
        var result = new IntervalSet(left._intervals);
        if (right.isNil) {
            // right set has no elements; just return the copy of the current set
            return result;
        }
        var resultI = 0;
        var rightI = 0;
        while (resultI < result._intervals.length && rightI < right._intervals.length) {
            var resultInterval = result._intervals[resultI];
            var rightInterval = right._intervals[rightI];
            // operation: (resultInterval - rightInterval) and update indexes
            if (rightInterval.b < resultInterval.a) {
                rightI++;
                continue;
            }
            if (rightInterval.a > resultInterval.b) {
                resultI++;
                continue;
            }
            var beforeCurrent = void 0;
            var afterCurrent = void 0;
            if (rightInterval.a > resultInterval.a) {
                beforeCurrent = new Interval(resultInterval.a, rightInterval.a - 1);
            }
            if (rightInterval.b < resultInterval.b) {
                afterCurrent = new Interval(rightInterval.b + 1, resultInterval.b);
            }
            if (beforeCurrent) {
                if (afterCurrent) {
                    // split the current interval into two
                    result._intervals[resultI] = beforeCurrent;
                    result._intervals.splice(resultI + 1, 0, afterCurrent);
                    resultI++;
                    rightI++;
                    continue;
                }
                else {
                    // replace the current interval
                    result._intervals[resultI] = beforeCurrent;
                    resultI++;
                    continue;
                }
            }
            else {
                if (afterCurrent) {
                    // replace the current interval
                    result._intervals[resultI] = afterCurrent;
                    rightI++;
                    continue;
                }
                else {
                    // remove the current interval (thus no need to increment resultI)
                    result._intervals.splice(resultI, 1);
                    continue;
                }
            }
        }
        // If rightI reached right.intervals.size, no more intervals to subtract from result.
        // If resultI reached result.intervals.size, we would be subtracting from an empty set.
        // Either way, we are done.
        return result;
    };
    IntervalSet.prototype.or = function (a) {
        var o = new IntervalSet();
        o.addAll(this);
        o.addAll(a);
        return o;
    };
    /** {@inheritDoc} */
    IntervalSet.prototype.and = function (other) {
        if (other.isNil) { //|| !(other instanceof IntervalSet) ) {
            // nothing in common with null set
            return new IntervalSet();
        }
        var myIntervals = this._intervals;
        var theirIntervals = other._intervals;
        var intersection;
        var mySize = myIntervals.length;
        var theirSize = theirIntervals.length;
        var i = 0;
        var j = 0;
        // iterate down both interval lists looking for nondisjoint intervals
        while (i < mySize && j < theirSize) {
            var mine = myIntervals[i];
            var theirs = theirIntervals[j];
            //System.out.println("mine="+mine+" and theirs="+theirs);
            if (mine.startsBeforeDisjoint(theirs)) {
                // move this iterator looking for interval that might overlap
                i++;
            }
            else if (theirs.startsBeforeDisjoint(mine)) {
                // move other iterator looking for interval that might overlap
                j++;
            }
            else if (mine.properlyContains(theirs)) {
                // overlap, add intersection, get next theirs
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                j++;
            }
            else if (theirs.properlyContains(mine)) {
                // overlap, add intersection, get next mine
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                i++;
            }
            else if (!mine.disjoint(theirs)) {
                // overlap, add intersection
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                // Move the iterator of lower range [a..b], but not
                // the upper range as it may contain elements that will collide
                // with the next iterator. So, if mine=[0..115] and
                // theirs=[115..200], then intersection is 115 and move mine
                // but not theirs as theirs may collide with the next range
                // in thisIter.
                // move both iterators to next ranges
                if (mine.startsAfterNonDisjoint(theirs)) {
                    j++;
                }
                else if (theirs.startsAfterNonDisjoint(mine)) {
                    i++;
                }
            }
        }
        if (!intersection) {
            return new IntervalSet();
        }
        return intersection;
    };
    /** {@inheritDoc} */
    IntervalSet.prototype.contains = function (el) {
        var n = this._intervals.length;
        for (var i = 0; i < n; i++) {
            var I = this._intervals[i];
            var a = I.a;
            var b = I.b;
            if (el < a) {
                // list is sorted and el is before this interval; not here
                break;
            }
            if (el >= a && el <= b) {
                // found in this interval
                return true;
            }
        }
        return false;
        /*
                for (ListIterator iter = intervals.listIterator(); iter.hasNext();) {
                    let I: Interval =  (Interval) iter.next();
                    if ( el<I.a ) {
                        break; // list is sorted and el is before this interval; not here
                    }
                    if ( el>=I.a && el<=I.b ) {
                        return true; // found in this interval
                    }
                }
                return false;
                */
    };
    Object.defineProperty(IntervalSet.prototype, "isNil", {
        /** {@inheritDoc} */
        get: function () {
            return this._intervals == null || this._intervals.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /** {@inheritDoc} */
    IntervalSet.prototype.getSingleElement = function () {
        if (this._intervals != null && this._intervals.length === 1) {
            var I = this._intervals[0];
            if (I.a === I.b) {
                return I.a;
            }
        }
        return exports.Token.INVALID_TYPE;
    };
    Object.defineProperty(IntervalSet.prototype, "maxElement", {
        /**
         * Returns the maximum value contained in the set.
         *
         * @returns the maximum value contained in the set. If the set is empty, this
         * method returns {@link Token#INVALID_TYPE}.
         */
        get: function () {
            if (this.isNil) {
                return exports.Token.INVALID_TYPE;
            }
            var last = this._intervals[this._intervals.length - 1];
            return last.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntervalSet.prototype, "minElement", {
        /**
         * Returns the minimum value contained in the set.
         *
         * @returns the minimum value contained in the set. If the set is empty, this
         * method returns {@link Token#INVALID_TYPE}.
         */
        get: function () {
            if (this.isNil) {
                return exports.Token.INVALID_TYPE;
            }
            return this._intervals[0].a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntervalSet.prototype, "intervals", {
        /** Return a list of Interval objects. */
        get: function () {
            return this._intervals;
        },
        enumerable: true,
        configurable: true
    });
    IntervalSet.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        try {
            for (var _a = __values(this._intervals), _b = _a.next(); !_b.done; _b = _a.next()) {
                var I = _b.value;
                hash = MurmurHash.update(hash, I.a);
                hash = MurmurHash.update(hash, I.b);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        hash = MurmurHash.finish(hash, this._intervals.length * 2);
        return hash;
        var e_3, _c;
    };
    /** Are two IntervalSets equal?  Because all intervals are sorted
     *  and disjoint, equals is a simple linear walk over both lists
     *  to make sure they are the same.  Interval.equals() is used
     *  by the List.equals() method to check the ranges.
     */
    IntervalSet.prototype.equals = function (o) {
        if (o == null || !(o instanceof IntervalSet)) {
            return false;
        }
        return ArrayEqualityComparator.INSTANCE.equals(this._intervals, o._intervals);
    };
    IntervalSet.prototype.toString = function (elemAreChar) {
        if (elemAreChar === void 0) { elemAreChar = false; }
        var buf = "";
        if (this._intervals == null || this._intervals.length === 0) {
            return "{}";
        }
        if (this.size > 1) {
            buf += "{";
        }
        var first = true;
        try {
            for (var _a = __values(this._intervals), _b = _a.next(); !_b.done; _b = _a.next()) {
                var I = _b.value;
                if (first) {
                    first = false;
                }
                else {
                    buf += ", ";
                }
                var a = I.a;
                var b = I.b;
                if (a === b) {
                    if (a === exports.Token.EOF) {
                        buf += "<EOF>";
                    }
                    else if (elemAreChar) {
                        buf += "'" + String.fromCharCode(a) + "'";
                    }
                    else {
                        buf += a;
                    }
                }
                else {
                    if (elemAreChar) {
                        buf += "'" + String.fromCharCode(a) + "'..'" + String.fromCharCode(b) + "'";
                    }
                    else {
                        buf += a + ".." + b;
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (this.size > 1) {
            buf += "}";
        }
        return buf;
        var e_4, _c;
    };
    IntervalSet.prototype.toStringVocabulary = function (vocabulary) {
        if (this._intervals == null || this._intervals.length === 0) {
            return "{}";
        }
        var buf = "";
        if (this.size > 1) {
            buf += "{";
        }
        var first = true;
        try {
            for (var _a = __values(this._intervals), _b = _a.next(); !_b.done; _b = _a.next()) {
                var I = _b.value;
                if (first) {
                    first = false;
                }
                else {
                    buf += ", ";
                }
                var a = I.a;
                var b = I.b;
                if (a === b) {
                    buf += this.elementName(vocabulary, a);
                }
                else {
                    for (var i = a; i <= b; i++) {
                        if (i > a) {
                            buf += ", ";
                        }
                        buf += this.elementName(vocabulary, i);
                    }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (this.size > 1) {
            buf += "}";
        }
        return buf;
        var e_5, _c;
    };
    IntervalSet.prototype.elementName = function (vocabulary, a) {
        if (a === exports.Token.EOF) {
            return "<EOF>";
        }
        else if (a === exports.Token.EPSILON) {
            return "<EPSILON>";
        }
        else {
            return vocabulary.getDisplayName(a);
        }
    };
    Object.defineProperty(IntervalSet.prototype, "size", {
        get: function () {
            var n = 0;
            var numIntervals = this._intervals.length;
            if (numIntervals === 1) {
                var firstInterval = this._intervals[0];
                return firstInterval.b - firstInterval.a + 1;
            }
            for (var i = 0; i < numIntervals; i++) {
                var I = this._intervals[i];
                n += (I.b - I.a + 1);
            }
            return n;
        },
        enumerable: true,
        configurable: true
    });
    IntervalSet.prototype.toIntegerList = function () {
        var values = new IntegerList(this.size);
        var n = this._intervals.length;
        for (var i = 0; i < n; i++) {
            var I = this._intervals[i];
            var a = I.a;
            var b = I.b;
            for (var v = a; v <= b; v++) {
                values.add(v);
            }
        }
        return values;
    };
    IntervalSet.prototype.toSet = function () {
        var s = new Set();
        try {
            for (var _a = __values(this._intervals), _b = _a.next(); !_b.done; _b = _a.next()) {
                var I = _b.value;
                var a = I.a;
                var b = I.b;
                for (var v = a; v <= b; v++) {
                    s.add(v);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return s;
        var e_6, _c;
    };
    IntervalSet.prototype.toArray = function () {
        var values = new Array();
        var n = this._intervals.length;
        for (var i = 0; i < n; i++) {
            var I = this._intervals[i];
            var a = I.a;
            var b = I.b;
            for (var v = a; v <= b; v++) {
                values.push(v);
            }
        }
        return values;
    };
    IntervalSet.prototype.remove = function (el) {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        var n = this._intervals.length;
        for (var i = 0; i < n; i++) {
            var I = this._intervals[i];
            var a = I.a;
            var b = I.b;
            if (el < a) {
                break; // list is sorted and el is before this interval; not here
            }
            // if whole interval x..x, rm
            if (el === a && el === b) {
                this._intervals.splice(i, 1);
                break;
            }
            // if on left edge x..b, adjust left
            if (el === a) {
                this._intervals[i] = Interval.of(I.a + 1, I.b);
                break;
            }
            // if on right edge a..x, adjust right
            if (el === b) {
                this._intervals[i] = Interval.of(I.a, I.b - 1);
                break;
            }
            // if in middle a..x..b, split interval
            if (el > a && el < b) { // found in this interval
                var oldb = I.b;
                this._intervals[i] = Interval.of(I.a, el - 1); // [a..x-1]
                this.add(el + 1, oldb); // add [x+1..b]
            }
        }
    };
    Object.defineProperty(IntervalSet.prototype, "isReadonly", {
        get: function () {
            return this.readonly;
        },
        enumerable: true,
        configurable: true
    });
    IntervalSet.prototype.setReadonly = function (readonly) {
        if (this.readonly && !readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        this.readonly = readonly;
    };
    __decorate([
        Override
    ], IntervalSet.prototype, "addAll", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "complement", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "subtract", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "or", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "and", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "contains", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "isNil", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "getSingleElement", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "hashCode", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "equals", null);
    __decorate([
        __param(0, NotNull)
    ], IntervalSet.prototype, "toStringVocabulary", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], IntervalSet.prototype, "elementName", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "size", null);
    __decorate([
        Override
    ], IntervalSet.prototype, "remove", null);
    __decorate([
        NotNull
    ], IntervalSet, "of", null);
    __decorate([
        NotNull
    ], IntervalSet, "subtract", null);
    return IntervalSet;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var ATNDeserializationOptions = /** @class */ (function () {
    function ATNDeserializationOptions(options) {
        this.readOnly = false;
        if (options) {
            this.verifyATN = options.verifyATN;
            this.generateRuleBypassTransitions = options.generateRuleBypassTransitions;
            this.optimize = options.optimize;
        }
        else {
            this.verifyATN = true;
            this.generateRuleBypassTransitions = false;
            this.optimize = true;
        }
    }
    Object.defineProperty(ATNDeserializationOptions, "defaultOptions", {
        get: function () {
            if (ATNDeserializationOptions._defaultOptions == null) {
                ATNDeserializationOptions._defaultOptions = new ATNDeserializationOptions();
                ATNDeserializationOptions._defaultOptions.makeReadOnly();
            }
            return ATNDeserializationOptions._defaultOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNDeserializationOptions.prototype, "isReadOnly", {
        get: function () {
            return this.readOnly;
        },
        enumerable: true,
        configurable: true
    });
    ATNDeserializationOptions.prototype.makeReadOnly = function () {
        this.readOnly = true;
    };
    Object.defineProperty(ATNDeserializationOptions.prototype, "isVerifyATN", {
        get: function () {
            return this.verifyATN;
        },
        set: function (verifyATN) {
            this.throwIfReadOnly();
            this.verifyATN = verifyATN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNDeserializationOptions.prototype, "isGenerateRuleBypassTransitions", {
        get: function () {
            return this.generateRuleBypassTransitions;
        },
        set: function (generateRuleBypassTransitions) {
            this.throwIfReadOnly();
            this.generateRuleBypassTransitions = generateRuleBypassTransitions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATNDeserializationOptions.prototype, "isOptimize", {
        get: function () {
            return this.optimize;
        },
        set: function (optimize) {
            this.throwIfReadOnly();
            this.optimize = optimize;
        },
        enumerable: true,
        configurable: true
    });
    ATNDeserializationOptions.prototype.throwIfReadOnly = function () {
        if (this.isReadOnly) {
            throw new Error("The object is read only.");
        }
    };
    __decorate([
        NotNull
    ], ATNDeserializationOptions, "defaultOptions", null);
    return ATNDeserializationOptions;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var ActionTransition = /** @class */ (function (_super) {
    __extends(ActionTransition, _super);
    function ActionTransition(target, ruleIndex, actionIndex, isCtxDependent) {
        if (actionIndex === void 0) { actionIndex = -1; }
        if (isCtxDependent === void 0) { isCtxDependent = false; }
        var _this = _super.call(this, target) || this;
        _this.ruleIndex = ruleIndex;
        _this.actionIndex = actionIndex;
        _this.isCtxDependent = isCtxDependent;
        return _this;
    }
    Object.defineProperty(ActionTransition.prototype, "serializationType", {
        get: function () {
            return 6 /* ACTION */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionTransition.prototype, "isEpsilon", {
        get: function () {
            return true; // we are to be ignored by analysis 'cept for predicates
        },
        enumerable: true,
        configurable: true
    });
    ActionTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    };
    ActionTransition.prototype.toString = function () {
        return "action_" + this.ruleIndex + ":" + this.actionIndex;
    };
    __decorate([
        Override
    ], ActionTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], ActionTransition.prototype, "isEpsilon", null);
    __decorate([
        Override
    ], ActionTransition.prototype, "matches", null);
    __decorate([
        Override
    ], ActionTransition.prototype, "toString", null);
    ActionTransition = __decorate([
        __param(0, NotNull)
    ], ActionTransition);
    return ActionTransition;
}(Transition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** TODO: make all transitions sets? no, should remove set edges */
var AtomTransition = /** @class */ (function (_super) {
    __extends(AtomTransition, _super);
    function AtomTransition(target, label) {
        var _this = _super.call(this, target) || this;
        _this._label = label;
        return _this;
    }
    Object.defineProperty(AtomTransition.prototype, "serializationType", {
        get: function () {
            return 5 /* ATOM */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtomTransition.prototype, "label", {
        get: function () {
            return IntervalSet.of(this._label);
        },
        enumerable: true,
        configurable: true
    });
    AtomTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return this._label === symbol;
    };
    AtomTransition.prototype.toString = function () {
        return String(this.label);
    };
    __decorate([
        Override
    ], AtomTransition.prototype, "serializationType", null);
    __decorate([
        Override,
        NotNull
    ], AtomTransition.prototype, "label", null);
    __decorate([
        Override
    ], AtomTransition.prototype, "matches", null);
    __decorate([
        Override,
        NotNull
    ], AtomTransition.prototype, "toString", null);
    AtomTransition = __decorate([
        __param(0, NotNull)
    ], AtomTransition);
    return AtomTransition;
}(Transition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**  The start of a regular `(...)` block. */
var BlockStartState = /** @class */ (function (_super) {
    __extends(BlockStartState, _super);
    function BlockStartState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlockStartState;
}(DecisionState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var BasicBlockStartState = /** @class */ (function (_super) {
    __extends(BasicBlockStartState, _super);
    function BasicBlockStartState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BasicBlockStartState.prototype, "stateType", {
        get: function () {
            return ATNStateType.BLOCK_START;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], BasicBlockStartState.prototype, "stateType", null);
    return BasicBlockStartState;
}(BlockStartState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** Terminal node of a simple `(a|b|c)` block. */
var BlockEndState = /** @class */ (function (_super) {
    __extends(BlockEndState, _super);
    function BlockEndState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BlockEndState.prototype, "stateType", {
        get: function () {
            return ATNStateType.BLOCK_END;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], BlockEndState.prototype, "stateType", null);
    return BlockEndState;
}(ATNState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var EpsilonTransition = /** @class */ (function (_super) {
    __extends(EpsilonTransition, _super);
    function EpsilonTransition(target, outermostPrecedenceReturn) {
        if (outermostPrecedenceReturn === void 0) { outermostPrecedenceReturn = -1; }
        var _this = _super.call(this, target) || this;
        _this._outermostPrecedenceReturn = outermostPrecedenceReturn;
        return _this;
    }
    Object.defineProperty(EpsilonTransition.prototype, "outermostPrecedenceReturn", {
        /**
         * @returns the rule index of a precedence rule for which this transition is
         * returning from, where the precedence value is 0; otherwise, -1.
         *
         * @see ATNConfig.isPrecedenceFilterSuppressed
         * @see ParserATNSimulator#applyPrecedenceFilter(ATNConfigSet, ParserRuleContext, PredictionContextCache)
         * @since 4.4.1
         */
        get: function () {
            return this._outermostPrecedenceReturn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EpsilonTransition.prototype, "serializationType", {
        get: function () {
            return 1 /* EPSILON */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EpsilonTransition.prototype, "isEpsilon", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    EpsilonTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    };
    EpsilonTransition.prototype.toString = function () {
        return "epsilon";
    };
    __decorate([
        Override
    ], EpsilonTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], EpsilonTransition.prototype, "isEpsilon", null);
    __decorate([
        Override
    ], EpsilonTransition.prototype, "matches", null);
    __decorate([
        Override,
        NotNull
    ], EpsilonTransition.prototype, "toString", null);
    EpsilonTransition = __decorate([
        __param(0, NotNull)
    ], EpsilonTransition);
    return EpsilonTransition;
}(Transition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Implements the `channel` lexer action by calling
 * {@link Lexer#setChannel} with the assigned channel.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerChannelAction = /** @class */ (function () {
    /**
     * Constructs a new `channel` action with the specified channel value.
     * @param channel The channel value to pass to {@link Lexer#setChannel}.
     */
    function LexerChannelAction(channel) {
        this._channel = channel;
    }
    Object.defineProperty(LexerChannelAction.prototype, "channel", {
        /**
         * Gets the channel to use for the {@link Token} created by the lexer.
         *
         * @returns The channel to use for the {@link Token} created by the lexer.
         */
        get: function () {
            return this._channel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerChannelAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#CHANNEL}.
         */
        get: function () {
            return 0 /* CHANNEL */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerChannelAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `false`.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#setChannel} with the
     * value provided by {@link #getChannel}.
     */
    LexerChannelAction.prototype.execute = function (lexer) {
        lexer.channel = this._channel;
    };
    LexerChannelAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        hash = MurmurHash.update(hash, this._channel);
        return MurmurHash.finish(hash, 2);
    };
    LexerChannelAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerChannelAction)) {
            return false;
        }
        return this._channel === obj._channel;
    };
    LexerChannelAction.prototype.toString = function () {
        return "channel(" + this._channel + ")";
    };
    __decorate([
        Override
    ], LexerChannelAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerChannelAction.prototype, "isPositionDependent", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], LexerChannelAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerChannelAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerChannelAction.prototype, "equals", null);
    __decorate([
        Override
    ], LexerChannelAction.prototype, "toString", null);
    return LexerChannelAction;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Executes a custom lexer action by calling {@link Recognizer#action} with the
 * rule and action indexes assigned to the custom action. The implementation of
 * a custom action is added to the generated code for the lexer in an override
 * of {@link Recognizer#action} when the grammar is compiled.
 *
 * This class may represent embedded actions created with the `{...}`
 * syntax in ANTLR 4, as well as actions created for lexer commands where the
 * command argument could not be evaluated when the grammar was compiled.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerCustomAction = /** @class */ (function () {
    /**
     * Constructs a custom lexer action with the specified rule and action
     * indexes.
     *
     * @param ruleIndex The rule index to use for calls to
     * {@link Recognizer#action}.
     * @param actionIndex The action index to use for calls to
     * {@link Recognizer#action}.
     */
    function LexerCustomAction(ruleIndex, actionIndex) {
        this._ruleIndex = ruleIndex;
        this._actionIndex = actionIndex;
    }
    Object.defineProperty(LexerCustomAction.prototype, "ruleIndex", {
        /**
         * Gets the rule index to use for calls to {@link Recognizer#action}.
         *
         * @returns The rule index for the custom action.
         */
        get: function () {
            return this._ruleIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerCustomAction.prototype, "actionIndex", {
        /**
         * Gets the action index to use for calls to {@link Recognizer#action}.
         *
         * @returns The action index for the custom action.
         */
        get: function () {
            return this._actionIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerCustomAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         *
         * @returns This method returns {@link LexerActionType#CUSTOM}.
         */
        get: function () {
            return 1 /* CUSTOM */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerCustomAction.prototype, "isPositionDependent", {
        /**
         * Gets whether the lexer action is position-dependent. Position-dependent
         * actions may have different semantics depending on the {@link CharStream}
         * index at the time the action is executed.
         *
         * Custom actions are position-dependent since they may represent a
         * user-defined embedded action which makes calls to methods like
         * {@link Lexer#getText}.
         *
         * @returns This method returns `true`.
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * Custom actions are implemented by calling {@link Lexer#action} with the
     * appropriate rule and action indexes.
     */
    LexerCustomAction.prototype.execute = function (lexer) {
        lexer.action(undefined, this._ruleIndex, this._actionIndex);
    };
    LexerCustomAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        hash = MurmurHash.update(hash, this._ruleIndex);
        hash = MurmurHash.update(hash, this._actionIndex);
        return MurmurHash.finish(hash, 3);
    };
    LexerCustomAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerCustomAction)) {
            return false;
        }
        return this._ruleIndex === obj._ruleIndex
            && this._actionIndex === obj._actionIndex;
    };
    __decorate([
        Override
    ], LexerCustomAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerCustomAction.prototype, "isPositionDependent", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], LexerCustomAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerCustomAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerCustomAction.prototype, "equals", null);
    return LexerCustomAction;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Implements the `mode` lexer action by calling {@link Lexer#mode} with
 * the assigned mode.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerModeAction = /** @class */ (function () {
    /**
     * Constructs a new `mode` action with the specified mode value.
     * @param mode The mode value to pass to {@link Lexer#mode}.
     */
    function LexerModeAction(mode) {
        this._mode = mode;
    }
    Object.defineProperty(LexerModeAction.prototype, "mode", {
        /**
         * Get the lexer mode this action should transition the lexer to.
         *
         * @returns The lexer mode for this `mode` command.
         */
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerModeAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#MODE}.
         */
        get: function () {
            return 2 /* MODE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerModeAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `false`.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#mode} with the
     * value provided by {@link #getMode}.
     */
    LexerModeAction.prototype.execute = function (lexer) {
        lexer.mode(this._mode);
    };
    LexerModeAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        hash = MurmurHash.update(hash, this._mode);
        return MurmurHash.finish(hash, 2);
    };
    LexerModeAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerModeAction)) {
            return false;
        }
        return this._mode === obj._mode;
    };
    LexerModeAction.prototype.toString = function () {
        return "mode(" + this._mode + ")";
    };
    __decorate([
        Override
    ], LexerModeAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerModeAction.prototype, "isPositionDependent", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], LexerModeAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerModeAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerModeAction.prototype, "equals", null);
    __decorate([
        Override
    ], LexerModeAction.prototype, "toString", null);
    return LexerModeAction;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Implements the `more` lexer action by calling {@link Lexer#more}.
 *
 * The `more` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerMoreAction = /** @class */ (function () {
    /**
     * Constructs the singleton instance of the lexer `more` command.
     */
    function LexerMoreAction() {
        // intentionally empty
    }
    Object.defineProperty(LexerMoreAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#MORE}.
         */
        get: function () {
            return 3 /* MORE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerMoreAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `false`.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#more}.
     */
    LexerMoreAction.prototype.execute = function (lexer) {
        lexer.more();
    };
    LexerMoreAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        return MurmurHash.finish(hash, 1);
    };
    LexerMoreAction.prototype.equals = function (obj) {
        return obj === this;
    };
    LexerMoreAction.prototype.toString = function () {
        return "more";
    };
    __decorate([
        Override
    ], LexerMoreAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerMoreAction.prototype, "isPositionDependent", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], LexerMoreAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerMoreAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerMoreAction.prototype, "equals", null);
    __decorate([
        Override
    ], LexerMoreAction.prototype, "toString", null);
    return LexerMoreAction;
}());
(function (LexerMoreAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerMoreAction.INSTANCE = new LexerMoreAction();
})(LexerMoreAction || (LexerMoreAction = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Implements the `popMode` lexer action by calling {@link Lexer#popMode}.
 *
 * The `popMode` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerPopModeAction = /** @class */ (function () {
    /**
     * Constructs the singleton instance of the lexer `popMode` command.
     */
    function LexerPopModeAction() {
        // intentionally empty
    }
    Object.defineProperty(LexerPopModeAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#POP_MODE}.
         */
        get: function () {
            return 4 /* POP_MODE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerPopModeAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `false`.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#popMode}.
     */
    LexerPopModeAction.prototype.execute = function (lexer) {
        lexer.popMode();
    };
    LexerPopModeAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        return MurmurHash.finish(hash, 1);
    };
    LexerPopModeAction.prototype.equals = function (obj) {
        return obj === this;
    };
    LexerPopModeAction.prototype.toString = function () {
        return "popMode";
    };
    __decorate([
        Override
    ], LexerPopModeAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerPopModeAction.prototype, "isPositionDependent", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], LexerPopModeAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerPopModeAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerPopModeAction.prototype, "equals", null);
    __decorate([
        Override
    ], LexerPopModeAction.prototype, "toString", null);
    return LexerPopModeAction;
}());
(function (LexerPopModeAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerPopModeAction.INSTANCE = new LexerPopModeAction();
})(LexerPopModeAction || (LexerPopModeAction = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Implements the `pushMode` lexer action by calling
 * {@link Lexer#pushMode} with the assigned mode.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerPushModeAction = /** @class */ (function () {
    /**
     * Constructs a new `pushMode` action with the specified mode value.
     * @param mode The mode value to pass to {@link Lexer#pushMode}.
     */
    function LexerPushModeAction(mode) {
        this._mode = mode;
    }
    Object.defineProperty(LexerPushModeAction.prototype, "mode", {
        /**
         * Get the lexer mode this action should transition the lexer to.
         *
         * @returns The lexer mode for this `pushMode` command.
         */
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerPushModeAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#PUSH_MODE}.
         */
        get: function () {
            return 5 /* PUSH_MODE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerPushModeAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `false`.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#pushMode} with the
     * value provided by {@link #getMode}.
     */
    LexerPushModeAction.prototype.execute = function (lexer) {
        lexer.pushMode(this._mode);
    };
    LexerPushModeAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        hash = MurmurHash.update(hash, this._mode);
        return MurmurHash.finish(hash, 2);
    };
    LexerPushModeAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerPushModeAction)) {
            return false;
        }
        return this._mode === obj._mode;
    };
    LexerPushModeAction.prototype.toString = function () {
        return "pushMode(" + this._mode + ")";
    };
    __decorate([
        Override
    ], LexerPushModeAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerPushModeAction.prototype, "isPositionDependent", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], LexerPushModeAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerPushModeAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerPushModeAction.prototype, "equals", null);
    __decorate([
        Override
    ], LexerPushModeAction.prototype, "toString", null);
    return LexerPushModeAction;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Implements the `skip` lexer action by calling {@link Lexer#skip}.
 *
 * The `skip` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerSkipAction = /** @class */ (function () {
    /**
     * Constructs the singleton instance of the lexer `skip` command.
     */
    function LexerSkipAction() {
        // intentionally empty
    }
    Object.defineProperty(LexerSkipAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#SKIP}.
         */
        get: function () {
            return 6 /* SKIP */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerSkipAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `false`.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#skip}.
     */
    LexerSkipAction.prototype.execute = function (lexer) {
        lexer.skip();
    };
    LexerSkipAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        return MurmurHash.finish(hash, 1);
    };
    LexerSkipAction.prototype.equals = function (obj) {
        return obj === this;
    };
    LexerSkipAction.prototype.toString = function () {
        return "skip";
    };
    __decorate([
        Override
    ], LexerSkipAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerSkipAction.prototype, "isPositionDependent", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], LexerSkipAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerSkipAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerSkipAction.prototype, "equals", null);
    __decorate([
        Override
    ], LexerSkipAction.prototype, "toString", null);
    return LexerSkipAction;
}());
(function (LexerSkipAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerSkipAction.INSTANCE = new LexerSkipAction();
})(LexerSkipAction || (LexerSkipAction = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Implements the `type` lexer action by setting `Lexer.type`
 * with the assigned type.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerTypeAction = /** @class */ (function () {
    /**
     * Constructs a new `type` action with the specified token type value.
     * @param type The type to assign to the token using `Lexer.type`.
     */
    function LexerTypeAction(type) {
        this._type = type;
    }
    Object.defineProperty(LexerTypeAction.prototype, "type", {
        /**
         * Gets the type to assign to a token created by the lexer.
         * @returns The type to assign to a token created by the lexer.
         */
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerTypeAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#TYPE}.
         */
        get: function () {
            return 7 /* TYPE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerTypeAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `false`.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This action is implemented by setting `Lexer.type` with the
     * value provided by `type`.
     */
    LexerTypeAction.prototype.execute = function (lexer) {
        lexer.type = this._type;
    };
    LexerTypeAction.prototype.hashCode = function () {
        var hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        hash = MurmurHash.update(hash, this._type);
        return MurmurHash.finish(hash, 2);
    };
    LexerTypeAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerTypeAction)) {
            return false;
        }
        return this._type === obj._type;
    };
    LexerTypeAction.prototype.toString = function () {
        return "type(" + this._type + ")";
    };
    __decorate([
        Override
    ], LexerTypeAction.prototype, "actionType", null);
    __decorate([
        Override
    ], LexerTypeAction.prototype, "isPositionDependent", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], LexerTypeAction.prototype, "execute", null);
    __decorate([
        Override
    ], LexerTypeAction.prototype, "hashCode", null);
    __decorate([
        Override
    ], LexerTypeAction.prototype, "equals", null);
    __decorate([
        Override
    ], LexerTypeAction.prototype, "toString", null);
    return LexerTypeAction;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** Mark the end of a * or + loop. */
var LoopEndState = /** @class */ (function (_super) {
    __extends(LoopEndState, _super);
    function LoopEndState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LoopEndState.prototype, "stateType", {
        get: function () {
            return ATNStateType.LOOP_END;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], LoopEndState.prototype, "stateType", null);
    return LoopEndState;
}(ATNState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class stores information about a configuration conflict.
 *
 * @author Sam Harwell
 */
var ConflictInfo = /** @class */ (function () {
    function ConflictInfo(conflictedAlts, exact) {
        this._conflictedAlts = conflictedAlts;
        this.exact = exact;
    }
    Object.defineProperty(ConflictInfo.prototype, "conflictedAlts", {
        /**
         * Gets the set of conflicting alternatives for the configuration set.
         */
        get: function () {
            return this._conflictedAlts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConflictInfo.prototype, "isExact", {
        /**
         * Gets whether or not the configuration conflict is an exact conflict.
         * An exact conflict occurs when the prediction algorithm determines that
         * the represented alternatives for a particular configuration set cannot be
         * further reduced by consuming additional input. After reaching an exact
         * conflict during an SLL prediction, only switch to full-context prediction
         * could reduce the set of viable alternatives. In LL prediction, an exact
         * conflict indicates a true ambiguity in the input.
         *
         * For the {@link PredictionMode#LL_EXACT_AMBIG_DETECTION} prediction mode,
         * accept states are conflicting but not exact are treated as non-accept
         * states.
         */
        get: function () {
            return this.exact;
        },
        enumerable: true,
        configurable: true
    });
    ConflictInfo.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof ConflictInfo)) {
            return false;
        }
        return this.isExact === obj.isExact
            && equals(this.conflictedAlts, obj.conflictedAlts);
    };
    ConflictInfo.prototype.hashCode = function () {
        return this.conflictedAlts.hashCode();
    };
    __decorate([
        Override
    ], ConflictInfo.prototype, "equals", null);
    __decorate([
        Override
    ], ConflictInfo.prototype, "hashCode", null);
    return ConflictInfo;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var TerminalNode = /** @class */ (function () {
    function TerminalNode(symbol) {
        this._symbol = symbol;
    }
    TerminalNode.prototype.getChild = function (i) {
        throw new RangeError("Terminal Node has no children.");
    };
    Object.defineProperty(TerminalNode.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalNode.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalNode.prototype, "payload", {
        get: function () {
            return this._symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalNode.prototype, "sourceInterval", {
        get: function () {
            var tokenIndex = this._symbol.tokenIndex;
            return new Interval(tokenIndex, tokenIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalNode.prototype, "childCount", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    TerminalNode.prototype.accept = function (visitor) {
        return visitor.visitTerminal(this);
    };
    Object.defineProperty(TerminalNode.prototype, "text", {
        get: function () {
            return this._symbol.text || "";
        },
        enumerable: true,
        configurable: true
    });
    TerminalNode.prototype.toStringTree = function (parser) {
        return this.toString();
    };
    TerminalNode.prototype.toString = function () {
        if (this._symbol.type === exports.Token.EOF) {
            return "<EOF>";
        }
        return this._symbol.text || "";
    };
    __decorate([
        Override
    ], TerminalNode.prototype, "getChild", null);
    __decorate([
        Override
    ], TerminalNode.prototype, "parent", null);
    __decorate([
        Override
    ], TerminalNode.prototype, "payload", null);
    __decorate([
        Override
    ], TerminalNode.prototype, "sourceInterval", null);
    __decorate([
        Override
    ], TerminalNode.prototype, "childCount", null);
    __decorate([
        Override
    ], TerminalNode.prototype, "accept", null);
    __decorate([
        Override
    ], TerminalNode.prototype, "text", null);
    __decorate([
        Override
    ], TerminalNode.prototype, "toStringTree", null);
    __decorate([
        Override
    ], TerminalNode.prototype, "toString", null);
    return TerminalNode;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** Represents a token that was consumed during resynchronization
 *  rather than during a valid match operation. For example,
 *  we will create this kind of a node during single token insertion
 *  and deletion as well as during "consume until error recovery set"
 *  upon no viable alternative exceptions.
 */
var ErrorNode = /** @class */ (function (_super) {
    __extends(ErrorNode, _super);
    function ErrorNode(token) {
        return _super.call(this, token) || this;
    }
    ErrorNode.prototype.accept = function (visitor) {
        return visitor.visitErrorNode(this);
    };
    __decorate([
        Override
    ], ErrorNode.prototype, "accept", null);
    return ErrorNode;
}(TerminalNode));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var RuleNode = /** @class */ (function () {
    function RuleNode() {
    }
    return RuleNode;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** A set of utility routines useful for all kinds of ANTLR trees. */
var Trees = /** @class */ (function () {
    function Trees() {
    }
    Trees.toStringTree = function (t, arg2) {
        var ruleNames;
        if (arg2 instanceof Parser$$1) {
            ruleNames = arg2.ruleNames;
        }
        else {
            ruleNames = arg2;
        }
        var s = escapeWhitespace(this.getNodeText(t, ruleNames), false);
        if (t.childCount === 0) {
            return s;
        }
        var buf = "";
        buf += ("(");
        s = escapeWhitespace(this.getNodeText(t, ruleNames), false);
        buf += (s);
        buf += (" ");
        for (var i = 0; i < t.childCount; i++) {
            if (i > 0) {
                buf += (" ");
            }
            buf += (this.toStringTree(t.getChild(i), ruleNames));
        }
        buf += (")");
        return buf;
    };
    Trees.getNodeText = function (t, arg2) {
        var ruleNames;
        if (arg2 instanceof Parser$$1) {
            ruleNames = arg2.ruleNames;
        }
        else if (arg2) {
            ruleNames = arg2;
        }
        else {
            // no recog or rule names
            var payload = t.payload;
            if (typeof payload.text === "string") {
                return payload.text;
            }
            return t.payload.toString();
        }
        if (t instanceof RuleNode) {
            var ruleContext = t.ruleContext;
            var ruleIndex = ruleContext.ruleIndex;
            var ruleName = ruleNames[ruleIndex];
            var altNumber = ruleContext.altNumber;
            if (altNumber !== ATN.INVALID_ALT_NUMBER) {
                return ruleName + ":" + altNumber;
            }
            return ruleName;
        }
        else if (t instanceof ErrorNode) {
            return t.toString();
        }
        else if (t instanceof TerminalNode) {
            var symbol = t.symbol;
            return symbol.text || "";
        }
        throw new TypeError("Unexpected node type");
    };
    Trees.getChildren = function (t) {
        var kids = [];
        for (var i = 0; i < t.childCount; i++) {
            kids.push(t.getChild(i));
        }
        return kids;
    };
    Trees.getAncestors = function (t) {
        var ancestors = [];
        var p = t.parent;
        while (p) {
            ancestors.unshift(p); // insert at start
            p = p.parent;
        }
        return ancestors;
    };
    /** Return true if t is u's parent or a node on path to root from u.
     *  Use === not equals().
     *
     *  @since 4.5.1
     */
    Trees.isAncestorOf = function (t, u) {
        if (!t || !u || !t.parent) {
            return false;
        }
        var p = u.parent;
        while (p) {
            if (t === p) {
                return true;
            }
            p = p.parent;
        }
        return false;
    };
    Trees.findAllTokenNodes = function (t, ttype) {
        return Trees.findAllNodes(t, ttype, true);
    };
    Trees.findAllRuleNodes = function (t, ruleIndex) {
        return Trees.findAllNodes(t, ruleIndex, false);
    };
    Trees.findAllNodes = function (t, index, findTokens) {
        var nodes = [];
        Trees._findAllNodes(t, index, findTokens, nodes);
        return nodes;
    };
    Trees._findAllNodes = function (t, index, findTokens, nodes) {
        // check this node (the root) first
        if (findTokens && t instanceof TerminalNode) {
            if (t.symbol.type === index) {
                nodes.push(t);
            }
        }
        else if (!findTokens && t instanceof ParserRuleContext) {
            if (t.ruleIndex === index) {
                nodes.push(t);
            }
        }
        // check children
        for (var i = 0; i < t.childCount; i++) {
            Trees._findAllNodes(t.getChild(i), index, findTokens, nodes);
        }
    };
    /** Get all descendents; includes t itself.
     *
     * @since 4.5.1
     */
    Trees.getDescendants = function (t) {
        var nodes = [];
        function recurse(e) {
            nodes.push(e);
            var n = e.childCount;
            for (var i = 0; i < n; i++) {
                recurse(e.getChild(i));
            }
        }
        recurse(t);
        return nodes;
    };
    /** Find smallest subtree of t enclosing range startTokenIndex..stopTokenIndex
     *  inclusively using postorder traversal.  Recursive depth-first-search.
     *
     *  @since 4.5
     */
    Trees.getRootOfSubtreeEnclosingRegion = function (t, startTokenIndex, // inclusive
    stopTokenIndex) {
        var n = t.childCount;
        for (var i = 0; i < n; i++) {
            var child = t.getChild(i);
            var r = Trees.getRootOfSubtreeEnclosingRegion(child, startTokenIndex, stopTokenIndex);
            if (r) {
                return r;
            }
        }
        if (t instanceof ParserRuleContext) {
            var stopToken = t.stop;
            if (startTokenIndex >= t.start.tokenIndex && // is range fully contained in t?
                (stopToken == null || stopTokenIndex <= stopToken.tokenIndex)) {
                // note: r.stop==null likely implies that we bailed out of parser and there's nothing to the right
                return t;
            }
        }
        return undefined;
    };
    /** Replace any subtree siblings of root that are completely to left
     *  or right of lookahead range with a CommonToken(Token.INVALID_TYPE,"...")
     *  node. The source interval for t is not altered to suit smaller range!
     *
     *  WARNING: destructive to t.
     *
     *  @since 4.5.1
     */
    Trees.stripChildrenOutOfRange = function (t, root, startIndex, stopIndex) {
        if (!t) {
            return;
        }
        var count = t.childCount;
        for (var i = 0; i < count; i++) {
            var child = t.getChild(i);
            var range = child.sourceInterval;
            if (child instanceof ParserRuleContext && (range.b < startIndex || range.a > stopIndex)) {
                if (Trees.isAncestorOf(child, root)) { // replace only if subtree doesn't have displayed root
                    var abbrev = new CommonToken(exports.Token.INVALID_TYPE, "...");
                    t.children[i] = new TerminalNode(abbrev); // HACK access to private
                }
            }
        }
    };
    Trees.findNodeSuchThat = function (t, pred) {
        // No type check needed as long as users only use one of the available overloads
        if (pred(t)) {
            return t;
        }
        var n = t.childCount;
        for (var i = 0; i < n; i++) {
            var u = Trees.findNodeSuchThat(t.getChild(i), pred);
            if (u !== undefined) {
                return u;
            }
        }
        return undefined;
    };
    __decorate([
        __param(0, NotNull)
    ], Trees, "toStringTree", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], Trees, "getAncestors", null);
    __decorate([
        __param(0, NotNull)
    ], Trees, "getRootOfSubtreeEnclosingRegion", null);
    return Trees;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** A rule context is a record of a single rule invocation.
 *
 *  We form a stack of these context objects using the parent
 *  pointer. A parent pointer of `undefined` indicates that the current
 *  context is the bottom of the stack. The ParserRuleContext subclass
 *  as a children list so that we can turn this data structure into a
 *  tree.
 *
 *  The root node always has a `undefined` pointer and invokingState of -1.
 *
 *  Upon entry to parsing, the first invoked rule function creates a
 *  context object (a subclass specialized for that rule such as
 *  SContext) and makes it the root of a parse tree, recorded by field
 *  Parser._ctx.
 *
 *  public final SContext s() throws RecognitionException {
 *      SContext _localctx = new SContext(_ctx, state); <-- create new node
 *      enterRule(_localctx, 0, RULE_s);                     <-- push it
 *      ...
 *      exitRule();                                          <-- pop back to _localctx
 *      return _localctx;
 *  }
 *
 *  A subsequent rule invocation of r from the start rule s pushes a
 *  new context object for r whose parent points at s and use invoking
 *  state is the state with r emanating as edge label.
 *
 *  The invokingState fields from a context object to the root
 *  together form a stack of rule indication states where the root
 *  (bottom of the stack) has a -1 sentinel value. If we invoke start
 *  symbol s then call r1, which calls r2, the  would look like
 *  this:
 *
 *     SContext[-1]   <- root node (bottom of the stack)
 *     R1Context[p]   <- p in rule s called r1
 *     R2Context[q]   <- q in rule r1 called r2
 *
 *  So the top of the stack, _ctx, represents a call to the current
 *  rule and it holds the return address from another rule that invoke
 *  to this rule. To invoke a rule, we must always have a current context.
 *
 *  The parent contexts are useful for computing lookahead sets and
 *  getting error information.
 *
 *  These objects are used during parsing and prediction.
 *  For the special case of parsers, we use the subclass
 *  ParserRuleContext.
 *
 *  @see ParserRuleContext
 */
var RuleContext = /** @class */ (function (_super) {
    __extends(RuleContext, _super);
    function RuleContext(parent, invokingState) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this.invokingState = invokingState != null ? invokingState : -1;
        return _this;
    }
    RuleContext.getChildContext = function (parent, invokingState) {
        return new RuleContext(parent, invokingState);
    };
    RuleContext.prototype.depth = function () {
        var n = 0;
        var p = this;
        while (p) {
            p = p._parent;
            n++;
        }
        return n;
    };
    Object.defineProperty(RuleContext.prototype, "isEmpty", {
        /** A context is empty if there is no invoking state; meaning nobody called
         *  current context.
         */
        get: function () {
            return this.invokingState === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "sourceInterval", {
        // satisfy the ParseTree / SyntaxTree interface
        get: function () {
            return Interval.INVALID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "ruleContext", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "parent", {
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "payload", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "text", {
        /** Return the combined text of all child nodes. This method only considers
         *  tokens which have been added to the parse tree.
         *
         *  Since tokens on hidden channels (e.g. whitespace or comments) are not
         *  added to the parse trees, they will not appear in the output of this
         *  method.
         */
        get: function () {
            if (this.childCount === 0) {
                return "";
            }
            var builder = "";
            for (var i = 0; i < this.childCount; i++) {
                builder += this.getChild(i).text;
            }
            return builder.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "ruleIndex", {
        get: function () { return -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "altNumber", {
        /** For rule associated with this parse tree internal node, return
         *  the outer alternative number used to match the input. Default
         *  implementation does not compute nor store this alt num. Create
         *  a subclass of ParserRuleContext with backing field and set
         *  option contextSuperClass.
         *  to set it.
         *
         *  @since 4.5.3
         */
        get: function () { return ATN.INVALID_ALT_NUMBER; },
        /** Set the outer alternative number for this context node. Default
         *  implementation does nothing to avoid backing field overhead for
         *  trees that don't need it.  Create
         *  a subclass of ParserRuleContext with backing field and set
         *  option contextSuperClass.
         *
         *  @since 4.5.3
         */
        set: function (altNumber) {
            // intentionally ignored by the base implementation
        },
        enumerable: true,
        configurable: true
    });
    RuleContext.prototype.getChild = function (i) {
        throw new RangeError("i must be greater than or equal to 0 and less than childCount");
    };
    Object.defineProperty(RuleContext.prototype, "childCount", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    RuleContext.prototype.accept = function (visitor) {
        return visitor.visitChildren(this);
    };
    RuleContext.prototype.toStringTree = function (recog) {
        return Trees.toStringTree(this, recog);
    };
    RuleContext.prototype.toString = function (arg1, stop) {
        var ruleNames = (arg1 instanceof Recognizer) ? arg1.ruleNames : arg1;
        stop = stop || ParserRuleContext.emptyContext();
        var buf = "";
        var p = this;
        buf += ("[");
        while (p && p !== stop) {
            if (!ruleNames) {
                if (!p.isEmpty) {
                    buf += (p.invokingState);
                }
            }
            else {
                var ruleIndex = p.ruleIndex;
                var ruleName = (ruleIndex >= 0 && ruleIndex < ruleNames.length)
                    ? ruleNames[ruleIndex] : ruleIndex.toString();
                buf += (ruleName);
            }
            if (p._parent && (ruleNames || !p._parent.isEmpty)) {
                buf += (" ");
            }
            p = p._parent;
        }
        buf += ("]");
        return buf.toString();
    };
    __decorate([
        Override
    ], RuleContext.prototype, "sourceInterval", null);
    __decorate([
        Override
    ], RuleContext.prototype, "ruleContext", null);
    __decorate([
        Override
    ], RuleContext.prototype, "parent", null);
    __decorate([
        Override
    ], RuleContext.prototype, "payload", null);
    __decorate([
        Override
    ], RuleContext.prototype, "text", null);
    __decorate([
        Override
    ], RuleContext.prototype, "getChild", null);
    __decorate([
        Override
    ], RuleContext.prototype, "childCount", null);
    __decorate([
        Override
    ], RuleContext.prototype, "accept", null);
    __decorate([
        Override
    ], RuleContext.prototype, "toStringTree", null);
    return RuleContext;
}(RuleNode));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** A rule invocation record for parsing.
 *
 *  Contains all of the information about the current rule not stored in the
 *  RuleContext. It handles parse tree children list, Any ATN state
 *  tracing, and the default values available for rule invocations:
 *  start, stop, rule index, current alt number.
 *
 *  Subclasses made for each rule and grammar track the parameters,
 *  return values, locals, and labels specific to that rule. These
 *  are the objects that are returned from rules.
 *
 *  Note text is not an actual field of a rule return value; it is computed
 *  from start and stop using the input stream's toString() method.  I
 *  could add a ctor to this so that we can pass in and store the input
 *  stream, but I'm not sure we want to do that.  It would seem to be undefined
 *  to get the .text property anyway if the rule matches tokens from multiple
 *  input streams.
 *
 *  I do not use getters for fields of objects that are used simply to
 *  group values such as this aggregate.  The getters/setters are there to
 *  satisfy the superclass interface.
 */
var ParserRuleContext = /** @class */ (function (_super) {
    __extends(ParserRuleContext, _super);
    function ParserRuleContext(parent, invokingStateNumber) {
        var _this = this;
        if (invokingStateNumber == null) {
            _this = _super.call(this) || this;
        }
        else {
            _this = _super.call(this, parent, invokingStateNumber) || this;
        }
        return _this;
    }
    ParserRuleContext.emptyContext = function () {
        return ParserRuleContext.EMPTY;
    };
    /**
     * COPY a ctx (I'm deliberately not using copy constructor) to avoid
     * confusion with creating node with parent. Does not copy children.
     *
     * This is used in the generated parser code to flip a generic XContext
     * node for rule X to a YContext for alt label Y. In that sense, it is not
     * really a generic copy function.
     *
     * If we do an error sync() at start of a rule, we might add error nodes
     * to the generic XContext so this function must copy those nodes to the
     * YContext as well else they are lost!
     */
    ParserRuleContext.prototype.copyFrom = function (ctx) {
        this._parent = ctx._parent;
        this.invokingState = ctx.invokingState;
        this._start = ctx._start;
        this._stop = ctx._stop;
        // copy any error nodes to alt label node
        if (ctx.children) {
            this.children = [];
            try {
                // reset parent pointer for any error nodes
                for (var _a = __values(ctx.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var child = _b.value;
                    if (child instanceof ErrorNode) {
                        this.children.push(child);
                        child._parent = this;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var e_1, _c;
    };
    // Double dispatch methods for listeners
    ParserRuleContext.prototype.enterRule = function (listener) {
        // intentionally empty
    };
    ParserRuleContext.prototype.exitRule = function (listener) {
        // intentionally empty
    };
    ParserRuleContext.prototype.addChild = function (t) {
        var result;
        if (t instanceof TerminalNode) ;
        else if (t instanceof RuleContext) ;
        else {
            t = new TerminalNode(t);
            t._parent = this;
            result = t;
        }
        if (!this.children) {
            this.children = [t];
        }
        else {
            this.children.push(t);
        }
        return result;
    };
    /** Used by enterOuterAlt to toss out a RuleContext previously added as
     *  we entered a rule. If we have # label, we will need to remove
     *  generic ruleContext object.
     */
    ParserRuleContext.prototype.removeLastChild = function () {
        if (this.children) {
            this.children.pop();
        }
    };
    //	public void trace(int s) {
    //		if ( states==null ) states = new ArrayList<Integer>();
    //		states.add(s);
    //	}
    ParserRuleContext.prototype.addErrorNode = function (badToken) {
        var t = new ErrorNode(badToken);
        this.addChild(t);
        t._parent = this;
        return t;
    };
    Object.defineProperty(ParserRuleContext.prototype, "parent", {
        get: function () {
            var parent = this._parent;
            if (parent === undefined || parent instanceof ParserRuleContext) {
                return parent;
            }
            throw new TypeError("Invalid parent type for ParserRuleContext");
        },
        enumerable: true,
        configurable: true
    });
    // Note: in TypeScript, order or arguments reversed
    ParserRuleContext.prototype.getChild = function (i, ctxType) {
        if (!this.children || i < 0 || i >= this.children.length) {
            throw new RangeError("index parameter must be between >= 0 and <= number of children.");
        }
        if (ctxType == null) {
            return this.children[i];
        }
        var result = this.tryGetChild(i, ctxType);
        if (result === undefined) {
            throw new Error("The specified node does not exist");
        }
        return result;
    };
    ParserRuleContext.prototype.tryGetChild = function (i, ctxType) {
        if (!this.children || i < 0 || i >= this.children.length) {
            return undefined;
        }
        var j = -1; // what node with ctxType have we found?
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var o = _b.value;
                if (o instanceof ctxType) {
                    j++;
                    if (j === i) {
                        return o;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
        var e_2, _c;
    };
    ParserRuleContext.prototype.getToken = function (ttype, i) {
        var result = this.tryGetToken(ttype, i);
        if (result === undefined) {
            throw new Error("The specified token does not exist");
        }
        return result;
    };
    ParserRuleContext.prototype.tryGetToken = function (ttype, i) {
        if (!this.children || i < 0 || i >= this.children.length) {
            return undefined;
        }
        var j = -1; // what token with ttype have we found?
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var o = _b.value;
                if (o instanceof TerminalNode) {
                    var symbol = o.symbol;
                    if (symbol.type === ttype) {
                        j++;
                        if (j === i) {
                            return o;
                        }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return undefined;
        var e_3, _c;
    };
    ParserRuleContext.prototype.getTokens = function (ttype) {
        var tokens = [];
        if (!this.children) {
            return tokens;
        }
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var o = _b.value;
                if (o instanceof TerminalNode) {
                    var symbol = o.symbol;
                    if (symbol.type === ttype) {
                        tokens.push(o);
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return tokens;
        var e_4, _c;
    };
    Object.defineProperty(ParserRuleContext.prototype, "ruleContext", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    // NOTE: argument order change from Java version
    ParserRuleContext.prototype.getRuleContext = function (i, ctxType) {
        return this.getChild(i, ctxType);
    };
    ParserRuleContext.prototype.tryGetRuleContext = function (i, ctxType) {
        return this.tryGetChild(i, ctxType);
    };
    ParserRuleContext.prototype.getRuleContexts = function (ctxType) {
        var contexts = [];
        if (!this.children) {
            return contexts;
        }
        try {
            for (var _a = __values(this.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var o = _b.value;
                if (o instanceof ctxType) {
                    contexts.push(o);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return contexts;
        var e_5, _c;
    };
    Object.defineProperty(ParserRuleContext.prototype, "childCount", {
        get: function () {
            return this.children ? this.children.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "sourceInterval", {
        get: function () {
            if (!this._start) {
                return Interval.INVALID;
            }
            if (!this._stop || this._stop.tokenIndex < this._start.tokenIndex) {
                return Interval.of(this._start.tokenIndex, this._start.tokenIndex - 1); // empty
            }
            return Interval.of(this._start.tokenIndex, this._stop.tokenIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "start", {
        /**
         * Get the initial token in this context.
         * Note that the range from start to stop is inclusive, so for rules that do not consume anything
         * (for example, zero length or error productions) this token may exceed stop.
         */
        get: function () { return this._start; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "stop", {
        /**
         * Get the final token in this context.
         * Note that the range from start to stop is inclusive, so for rules that do not consume anything
         * (for example, zero length or error productions) this token may precede start.
         */
        get: function () { return this._stop; },
        enumerable: true,
        configurable: true
    });
    /** Used for rule context info debugging during parse-time, not so much for ATN debugging */
    ParserRuleContext.prototype.toInfoString = function (recognizer) {
        var rules = recognizer.getRuleInvocationStack(this).reverse();
        return "ParserRuleContext" + rules + "{" +
            "start=" + this._start +
            ", stop=" + this._stop +
            "}";
    };
    ParserRuleContext.EMPTY = new ParserRuleContext();
    __decorate([
        Override
        /** Override to make type more specific */
    ], ParserRuleContext.prototype, "parent", null);
    __decorate([
        Override
    ], ParserRuleContext.prototype, "childCount", null);
    __decorate([
        Override
    ], ParserRuleContext.prototype, "sourceInterval", null);
    return ParserRuleContext;
}(RuleContext));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This enumeration defines the prediction modes available in ANTLR 4 along with
 * utility methods for analyzing configuration sets for conflicts and/or
 * ambiguities.
 */
var PredictionMode;
(function (PredictionMode) {
    /**
     * The SLL(*) prediction mode. This prediction mode ignores the current
     * parser context when making predictions. This is the fastest prediction
     * mode, and provides correct results for many grammars. This prediction
     * mode is more powerful than the prediction mode provided by ANTLR 3, but
     * may result in syntax errors for grammar and input combinations which are
     * not SLL.
     *
     * When using this prediction mode, the parser will either return a correct
     * parse tree (i.e. the same parse tree that would be returned with the
     * {@link #LL} prediction mode), or it will report a syntax error. If a
     * syntax error is encountered when using the {@link #SLL} prediction mode,
     * it may be due to either an actual syntax error in the input or indicate
     * that the particular combination of grammar and input requires the more
     * powerful {@link #LL} prediction abilities to complete successfully.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["SLL"] = 0] = "SLL";
    /**
     * The LL(*) prediction mode. This prediction mode allows the current parser
     * context to be used for resolving SLL conflicts that occur during
     * prediction. This is the fastest prediction mode that guarantees correct
     * parse results for all combinations of grammars with syntactically correct
     * inputs.
     *
     * When using this prediction mode, the parser will make correct decisions
     * for all syntactically-correct grammar and input combinations. However, in
     * cases where the grammar is truly ambiguous this prediction mode might not
     * report a precise answer for *exactly which* alternatives are
     * ambiguous.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["LL"] = 1] = "LL";
    /**
     * The LL(*) prediction mode with exact ambiguity detection. In addition to
     * the correctness guarantees provided by the {@link #LL} prediction mode,
     * this prediction mode instructs the prediction algorithm to determine the
     * complete and exact set of ambiguous alternatives for every ambiguous
     * decision encountered while parsing.
     *
     * This prediction mode may be used for diagnosing ambiguities during
     * grammar development. Due to the performance overhead of calculating sets
     * of ambiguous alternatives, this prediction mode should be avoided when
     * the exact results are not necessary.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["LL_EXACT_AMBIG_DETECTION"] = 2] = "LL_EXACT_AMBIG_DETECTION";
})(PredictionMode || (PredictionMode = {}));
(function (PredictionMode) {
    /** A Map that uses just the state and the stack context as the key. */
    // NOTE: Base type used to be FlexibleHashMap<ATNConfig, BitSet>
    var AltAndContextMap = /** @class */ (function (_super) {
        __extends(AltAndContextMap, _super);
        function AltAndContextMap() {
            return _super.call(this, AltAndContextConfigEqualityComparator.INSTANCE) || this;
        }
        return AltAndContextMap;
    }(Array2DHashMap));
    var AltAndContextConfigEqualityComparator = /** @class */ (function () {
        function AltAndContextConfigEqualityComparator() {
        }
        AltAndContextConfigEqualityComparator.prototype.AltAndContextConfigEqualityComparator = function () {
            // intentionally empty
        };
        /**
         * The hash code is only a function of the {@link ATNState#stateNumber}
         * and {@link ATNConfig#context}.
         */
        AltAndContextConfigEqualityComparator.prototype.hashCode = function (o) {
            var hashCode = MurmurHash.initialize(7);
            hashCode = MurmurHash.update(hashCode, o.state.stateNumber);
            hashCode = MurmurHash.update(hashCode, o.context);
            hashCode = MurmurHash.finish(hashCode, 2);
            return hashCode;
        };
        AltAndContextConfigEqualityComparator.prototype.equals = function (a, b) {
            if (a === b) {
                return true;
            }
            if (a == null || b == null) {
                return false;
            }
            return a.state.stateNumber === b.state.stateNumber
                && a.context.equals(b.context);
        };
        AltAndContextConfigEqualityComparator.INSTANCE = new AltAndContextConfigEqualityComparator();
        __decorate([
            Override
        ], AltAndContextConfigEqualityComparator.prototype, "hashCode", null);
        __decorate([
            Override
        ], AltAndContextConfigEqualityComparator.prototype, "equals", null);
        return AltAndContextConfigEqualityComparator;
    }());
    /**
     * Checks if any configuration in `configs` is in a
     * {@link RuleStopState}. Configurations meeting this condition have reached
     * the end of the decision rule (local context) or end of start rule (full
     * context).
     *
     * @param configs the configuration set to test
     * @returns `true` if any configuration in `configs` is in a
     * {@link RuleStopState}, otherwise `false`
     */
    function hasConfigInRuleStopState(configs) {
        try {
            for (var configs_1 = __values(configs), configs_1_1 = configs_1.next(); !configs_1_1.done; configs_1_1 = configs_1.next()) {
                var c = configs_1_1.value;
                if (c.state instanceof RuleStopState) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (configs_1_1 && !configs_1_1.done && (_a = configs_1.return)) _a.call(configs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
        var e_1, _a;
    }
    PredictionMode.hasConfigInRuleStopState = hasConfigInRuleStopState;
    /**
     * Checks if all configurations in `configs` are in a
     * {@link RuleStopState}. Configurations meeting this condition have reached
     * the end of the decision rule (local context) or end of start rule (full
     * context).
     *
     * @param configs the configuration set to test
     * @returns `true` if all configurations in `configs` are in a
     * {@link RuleStopState}, otherwise `false`
     */
    function allConfigsInRuleStopStates(/*@NotNull*/ configs) {
        try {
            for (var configs_2 = __values(configs), configs_2_1 = configs_2.next(); !configs_2_1.done; configs_2_1 = configs_2.next()) {
                var config = configs_2_1.value;
                if (!(config.state instanceof RuleStopState)) {
                    return false;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (configs_2_1 && !configs_2_1.done && (_a = configs_2.return)) _a.call(configs_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return true;
        var e_2, _a;
    }
    PredictionMode.allConfigsInRuleStopStates = allConfigsInRuleStopStates;
})(PredictionMode || (PredictionMode = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var SimulatorState = /** @class */ (function () {
    function SimulatorState(outerContext, s0, useContext, remainingOuterContext) {
        this.outerContext = outerContext != null ? outerContext : ParserRuleContext.emptyContext();
        this.s0 = s0;
        this.useContext = useContext;
        this.remainingOuterContext = remainingOuterContext;
    }
    SimulatorState = __decorate([
        __param(1, NotNull)
    ], SimulatorState);
    return SimulatorState;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// import * as assert from "assert";
var MAX_SHORT_VALUE = 0xFFFF;
/**
 * The embodiment of the adaptive LL(*), ALL(*), parsing strategy.
 *
 * The basic complexity of the adaptive strategy makes it harder to understand.
 * We begin with ATN simulation to build paths in a DFA. Subsequent prediction
 * requests go through the DFA first. If they reach a state without an edge for
 * the current symbol, the algorithm fails over to the ATN simulation to
 * complete the DFA path for the current input (until it finds a conflict state
 * or uniquely predicting state).
 *
 * All of that is done without using the outer context because we want to create
 * a DFA that is not dependent upon the rule invocation stack when we do a
 * prediction. One DFA works in all contexts. We avoid using context not
 * necessarily because it's slower, although it can be, but because of the DFA
 * caching problem. The closure routine only considers the rule invocation stack
 * created during prediction beginning in the decision rule. For example, if
 * prediction occurs without invoking another rule's ATN, there are no context
 * stacks in the configurations. When lack of context leads to a conflict, we
 * don't know if it's an ambiguity or a weakness in the strong LL(*) parsing
 * strategy (versus full LL(*)).
 *
 * When SLL yields a configuration set with conflict, we rewind the input and
 * retry the ATN simulation, this time using full outer context without adding
 * to the DFA. Configuration context stacks will be the full invocation stacks
 * from the start rule. If we get a conflict using full context, then we can
 * definitively say we have a true ambiguity for that input sequence. If we
 * don't get a conflict, it implies that the decision is sensitive to the outer
 * context. (It is not context-sensitive in the sense of context-sensitive
 * grammars.)
 *
 * The next time we reach this DFA state with an SLL conflict, through DFA
 * simulation, we will again retry the ATN simulation using full context mode.
 * This is slow because we can't save the results and have to "interpret" the
 * ATN each time we get that input.
 *
 * **CACHING FULL CONTEXT PREDICTIONS**
 *
 * We could cache results from full context to predicted alternative easily and
 * that saves a lot of time but doesn't work in presence of predicates. The set
 * of visible predicates from the ATN start state changes depending on the
 * context, because closure can fall off the end of a rule. I tried to cache
 * tuples (stack context, semantic context, predicted alt) but it was slower
 * than interpreting and much more complicated. Also required a huge amount of
 * memory. The goal is not to create the world's fastest parser anyway. I'd like
 * to keep this algorithm simple. By launching multiple threads, we can improve
 * the speed of parsing across a large number of files.
 *
 * There is no strict ordering between the amount of input used by SLL vs LL,
 * which makes it really hard to build a cache for full context. Let's say that
 * we have input A B C that leads to an SLL conflict with full context X. That
 * implies that using X we might only use A B but we could also use A B C D to
 * resolve conflict. Input A B C D could predict alternative 1 in one position
 * in the input and A B C E could predict alternative 2 in another position in
 * input. The conflicting SLL configurations could still be non-unique in the
 * full context prediction, which would lead us to requiring more input than the
 * original A B C.	To make a	prediction cache work, we have to track	the exact
 * input	used during the previous prediction. That amounts to a cache that maps
 * X to a specific DFA for that context.
 *
 * Something should be done for left-recursive expression predictions. They are
 * likely LL(1) + pred eval. Easier to do the whole SLL unless error and retry
 * with full LL thing Sam does.
 *
 * **AVOIDING FULL CONTEXT PREDICTION**
 *
 * We avoid doing full context retry when the outer context is empty, we did not
 * dip into the outer context by falling off the end of the decision state rule,
 * or when we force SLL mode.
 *
 * As an example of the not dip into outer context case, consider as super
 * constructor calls versus function calls. One grammar might look like
 * this:
 *
 * ```antlr
 * ctorBody
 *   : '{' superCall? stat* '}'
 *   ;
 * ```
 *
 * Or, you might see something like
 *
 * ```antlr
 * stat
 *   : superCall ';'
 *   | expression ';'
 *   | ...
 *   ;
 * ```
 *
 * In both cases I believe that no closure operations will dip into the outer
 * context. In the first case ctorBody in the worst case will stop at the '}'.
 * In the 2nd case it should stop at the ';'. Both cases should stay within the
 * entry rule and not dip into the outer context.
 *
 * **PREDICATES**
 *
 * Predicates are always evaluated if present in either SLL or LL both. SLL and
 * LL simulation deals with predicates differently. SLL collects predicates as
 * it performs closure operations like ANTLR v3 did. It delays predicate
 * evaluation until it reaches and accept state. This allows us to cache the SLL
 * ATN simulation whereas, if we had evaluated predicates on-the-fly during
 * closure, the DFA state configuration sets would be different and we couldn't
 * build up a suitable DFA.
 *
 * When building a DFA accept state during ATN simulation, we evaluate any
 * predicates and return the sole semantically valid alternative. If there is
 * more than 1 alternative, we report an ambiguity. If there are 0 alternatives,
 * we throw an exception. Alternatives without predicates act like they have
 * true predicates. The simple way to think about it is to strip away all
 * alternatives with false predicates and choose the minimum alternative that
 * remains.
 *
 * When we start in the DFA and reach an accept state that's predicated, we test
 * those and return the minimum semantically viable alternative. If no
 * alternatives are viable, we throw an exception.
 *
 * During full LL ATN simulation, closure always evaluates predicates and
 * on-the-fly. This is crucial to reducing the configuration set size during
 * closure. It hits a landmine when parsing with the Java grammar, for example,
 * without this on-the-fly evaluation.
 *
 * **SHARING DFA**
 *
 * All instances of the same parser share the same decision DFAs through a
 * static field. Each instance gets its own ATN simulator but they share the
 * same {@link ATN#decisionToDFA} field. They also share a
 * {@link PredictionContextCache} object that makes sure that all
 * {@link PredictionContext} objects are shared among the DFA states. This makes
 * a big size difference.
 *
 * **THREAD SAFETY**
 *
 * The {@link ParserATNSimulator} locks on the {@link ATN#decisionToDFA} field when
 * it adds a new DFA object to that array. {@link #addDFAEdge}
 * locks on the DFA for the current decision when setting the
 * {@link DFAState#edges} field. {@link #addDFAState} locks on
 * the DFA for the current decision when looking up a DFA state to see if it
 * already exists. We must make sure that all requests to add DFA states that
 * are equivalent result in the same shared DFA object. This is because lots of
 * threads will be trying to update the DFA at once. The
 * {@link #addDFAState} method also locks inside the DFA lock
 * but this time on the shared context cache when it rebuilds the
 * configurations' {@link PredictionContext} objects using cached
 * subgraphs/nodes. No other locking occurs, even during DFA simulation. This is
 * safe as long as we can guarantee that all threads referencing
 * `s.edge[t]` get the same physical target {@link DFAState}, or
 * `undefined`. Once into the DFA, the DFA simulation does not reference the
 * {@link DFA#states} map. It follows the {@link DFAState#edges} field to new
 * targets. The DFA simulator will either find {@link DFAState#edges} to be
 * `undefined`, to be non-`undefined` and `dfa.edges[t]` undefined, or
 * `dfa.edges[t]` to be non-undefined. The
 * {@link #addDFAEdge} method could be racing to set the field
 * but in either case the DFA simulator works; if `undefined`, and requests ATN
 * simulation. It could also race trying to get `dfa.edges[t]`, but either
 * way it will work because it's not doing a test and set operation.
 *
 * **Starting with SLL then failing to combined SLL/LL (Two-Stage
 * Parsing)**
 *
 * Sam pointed out that if SLL does not give a syntax error, then there is no
 * point in doing full LL, which is slower. We only have to try LL if we get a
 * syntax error. For maximum speed, Sam starts the parser set to pure SLL
 * mode with the {@link BailErrorStrategy}:
 *
 * ```
 * parser.interpreter.{@link #setPredictionMode setPredictionMode}`(`{@link PredictionMode#SLL}`)`;
 * parser.{@link Parser#setErrorHandler setErrorHandler}(new {@link BailErrorStrategy}());
 * ```
 *
 * If it does not get a syntax error, then we're done. If it does get a syntax
 * error, we need to retry with the combined SLL/LL strategy.
 *
 * The reason this works is as follows. If there are no SLL conflicts, then the
 * grammar is SLL (at least for that input set). If there is an SLL conflict,
 * the full LL analysis must yield a set of viable alternatives which is a
 * subset of the alternatives reported by SLL. If the LL set is a singleton,
 * then the grammar is LL but not SLL. If the LL set is the same size as the SLL
 * set, the decision is SLL. If the LL set has size &gt; 1, then that decision
 * is truly ambiguous on the current input. If the LL set is smaller, then the
 * SLL conflict resolution might choose an alternative that the full LL would
 * rule out as a possibility based upon better context information. If that's
 * the case, then the SLL parse will definitely get an error because the full LL
 * analysis says it's not viable. If SLL conflict resolution chooses an
 * alternative within the LL set, them both SLL and LL would choose the same
 * alternative because they both choose the minimum of multiple conflicting
 * alternatives.
 *
 * Let's say we have a set of SLL conflicting alternatives `{1, 2, 3}` and
 * a smaller LL set called *s*. If *s* is `{2, 3}`, then SLL
 * parsing will get an error because SLL will pursue alternative 1. If
 * *s* is `{1, 2}` or `{1, 3}` then both SLL and LL will
 * choose the same alternative because alternative one is the minimum of either
 * set. If *s* is `{2}` or `{3}` then SLL will get a syntax
 * error. If *s* is `{1}` then SLL will succeed.
 *
 * Of course, if the input is invalid, then we will get an error for sure in
 * both SLL and LL parsing. Erroneous input will therefore require 2 passes over
 * the input.
 */
var ParserATNSimulator = /** @class */ (function (_super) {
    __extends(ParserATNSimulator, _super);
    function ParserATNSimulator(atn, parser) {
        var _this = _super.call(this, atn) || this;
        _this.predictionMode = PredictionMode.LL;
        _this.force_global_context = false;
        _this.always_try_local_context = true;
        /**
         * Determines whether the DFA is used for full-context predictions. When
         * `true`, the DFA stores transition information for both full-context
         * and SLL parsing; otherwise, the DFA only stores SLL transition
         * information.
         *
         * For some grammars, enabling the full-context DFA can result in a
         * substantial performance improvement. However, this improvement typically
         * comes at the expense of memory used for storing the cached DFA states,
         * configuration sets, and prediction contexts.
         *
         * The default value is `false`.
         */
        _this.enable_global_context_dfa = false;
        _this.optimize_unique_closure = true;
        _this.optimize_ll1 = true;
        _this.optimize_tail_calls = true;
        _this.tail_call_preserves_sll = true;
        _this.treat_sllk1_conflict_as_ambiguity = false;
        /**
         * When `true`, ambiguous alternatives are reported when they are
         * encountered within {@link #execATN}. When `false`, these messages
         * are suppressed. The default is `false`.
         *
         * When messages about ambiguous alternatives are not required, setting this
         * to `false` enables additional internal optimizations which may lose
         * this information.
         */
        _this.reportAmbiguities = false;
        /** By default we do full context-sensitive LL(*) parsing not
         *  Strong LL(*) parsing. If we fail with Strong LL(*) we
         *  try full LL(*). That means we rewind and use context information
         *  when closure operations fall off the end of the rule that
         *  holds the decision were evaluating.
         */
        _this.userWantsCtxSensitive = true;
        _this._parser = parser;
        return _this;
    }
    ParserATNSimulator.prototype.getPredictionMode = function () {
        return this.predictionMode;
    };
    ParserATNSimulator.prototype.setPredictionMode = function (predictionMode) {
        this.predictionMode = predictionMode;
    };
    ParserATNSimulator.prototype.reset = function () {
        // intentionally empty
    };
    ParserATNSimulator.prototype.adaptivePredict = function (input, decision, outerContext, useContext) {
        if (useContext === undefined) {
            useContext = false;
        }
        var dfa = this.atn.decisionToDFA[decision];
        // assert(dfa != null);
        if (this.optimize_ll1 && !dfa.isPrecedenceDfa && !dfa.isEmpty) {
            var ll_1 = input.LA(1);
            if (ll_1 >= 0 && ll_1 <= 0xFFFF) {
                var key = ((decision << 16) >>> 0) + ll_1;
                var alt = this.atn.LL1Table.get(key);
                if (alt != null) {
                    return alt;
                }
            }
        }
        this.dfa = dfa;
        if (this.force_global_context) {
            useContext = true;
        }
        else if (!this.always_try_local_context) {
            useContext = useContext || dfa.isContextSensitive;
        }
        this.userWantsCtxSensitive = useContext || (this.predictionMode !== PredictionMode.SLL && outerContext != null && !this.atn.decisionToState[decision].sll);
        if (outerContext == null) {
            outerContext = ParserRuleContext.emptyContext();
        }
        var state;
        if (!dfa.isEmpty) {
            state = this.getStartState(dfa, input, outerContext, useContext);
        }
        if (state == null) {
            if (outerContext == null) {
                outerContext = ParserRuleContext.emptyContext();
            }
            if (ParserATNSimulator.debug) {
                console.log("ATN decision " + dfa.decision +
                    " exec LA(1)==" + this.getLookaheadName(input) +
                    ", outerContext=" + outerContext.toString(this._parser));
            }
            state = this.computeStartState(dfa, outerContext, useContext);
        }
        var m = input.mark();
        var index = input.index;
        try {
            var alt = this.execDFA(dfa, input, index, state);
            if (ParserATNSimulator.debug) {
                console.log("DFA after predictATN: " + dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
            }
            return alt;
        }
        finally {
            this.dfa = undefined;
            input.seek(index);
            input.release(m);
        }
    };
    ParserATNSimulator.prototype.getStartState = function (dfa, input, outerContext, useContext) {
        if (!useContext) {
            if (dfa.isPrecedenceDfa) {
                // the start state for a precedence DFA depends on the current
                // parser precedence, and is provided by a DFA method.
                var state = dfa.getPrecedenceStartState(this._parser.precedence, false);
                if (state == null) {
                    return undefined;
                }
                return new SimulatorState(outerContext, state, false, outerContext);
            }
            else {
                if (dfa.s0 == null) {
                    return undefined;
                }
                return new SimulatorState(outerContext, dfa.s0, false, outerContext);
            }
        }
        if (!this.enable_global_context_dfa) {
            return undefined;
        }
        var remainingContext = outerContext;
        // assert(outerContext != null);
        var s0;
        if (dfa.isPrecedenceDfa) {
            s0 = dfa.getPrecedenceStartState(this._parser.precedence, true);
        }
        else {
            s0 = dfa.s0full;
        }
        while (remainingContext != null && s0 != null && s0.isContextSensitive) {
            remainingContext = this.skipTailCalls(remainingContext);
            s0 = s0.getContextTarget(this.getReturnState(remainingContext));
            if (remainingContext.isEmpty) ;
            else {
                remainingContext = remainingContext.parent;
            }
        }
        if (s0 == null) {
            return undefined;
        }
        return new SimulatorState(outerContext, s0, useContext, remainingContext);
    };
    ParserATNSimulator.prototype.execDFA = function (dfa, input, startIndex, state) {
        var outerContext = state.outerContext;
        if (ParserATNSimulator.dfa_debug) {
            console.log("DFA decision " + dfa.decision +
                " exec LA(1)==" + this.getLookaheadName(input) +
                ", outerContext=" + outerContext.toString(this._parser));
        }
        if (ParserATNSimulator.dfa_debug) {
            console.log(dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
        }
        var s = state.s0;
        var t = input.LA(1);
        var remainingOuterContext = state.remainingOuterContext;
        while (true) {
            if (ParserATNSimulator.dfa_debug) {
                console.log("DFA state " + s.stateNumber + " LA(1)==" + this.getLookaheadName(input));
            }
            if (state.useContext) {
                while (s.isContextSymbol(t)) {
                    var next = void 0;
                    if (remainingOuterContext != null) {
                        remainingOuterContext = this.skipTailCalls(remainingOuterContext);
                        next = s.getContextTarget(this.getReturnState(remainingOuterContext));
                    }
                    if (next == null) {
                        // fail over to ATN
                        var initialState = new SimulatorState(state.outerContext, s, state.useContext, remainingOuterContext);
                        return this.execATN(dfa, input, startIndex, initialState);
                    }
                    // assert(remainingOuterContext != null);
                    remainingOuterContext = remainingOuterContext.parent;
                    s = next;
                }
            }
            if (this.isAcceptState(s, state.useContext)) {
                if (s.predicates != null) {
                    if (ParserATNSimulator.dfa_debug) {
                        console.log("accept " + s);
                    }
                }
                else {
                    if (ParserATNSimulator.dfa_debug) {
                        console.log("accept; predict " + s.prediction + " in state " + s.stateNumber);
                    }
                }
                // keep going unless we're at EOF or state only has one alt number
                // mentioned in configs; check if something else could match
                // TODO: don't we always stop? only lexer would keep going
                // TODO: v3 dfa don't do this.
                break;
            }
            // t is not updated if one of these states is reached
            // assert(!this.isAcceptState(s, state.useContext));
            // if no edge, pop over to ATN interpreter, update DFA and return
            var target = this.getExistingTargetState(s, t);
            if (target == null) {
                if (ParserATNSimulator.dfa_debug && t >= 0) {
                    console.log("no edge for " + this._parser.vocabulary.getDisplayName(t));
                }
                var alt = void 0;
                if (ParserATNSimulator.dfa_debug) {
                    var interval = Interval.of(startIndex, this._parser.inputStream.index);
                    console.log("ATN exec upon " +
                        this._parser.inputStream.getText(interval) +
                        " at DFA state " + s.stateNumber);
                }
                var initialState = new SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                alt = this.execATN(dfa, input, startIndex, initialState);
                if (ParserATNSimulator.dfa_debug) {
                    console.log("back from DFA update, alt=" + alt + ", dfa=\n" + dfa.toString(this._parser.vocabulary, this._parser.ruleNames));
                    //dump(dfa);
                }
                // action already executed
                if (ParserATNSimulator.dfa_debug) {
                    console.log("DFA decision " + dfa.decision +
                        " predicts " + alt);
                }
                return alt; // we've updated DFA, exec'd action, and have our deepest answer
            }
            else if (target === ATNSimulator.ERROR) {
                var errorState = new SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                return this.handleNoViableAlt(input, startIndex, errorState);
            }
            s = target;
            if (!this.isAcceptState(s, state.useContext) && t !== exports.IntStream.EOF) {
                input.consume();
                t = input.LA(1);
            }
        }
        //		if ( acceptState==null ) {
        //			if ( debug ) System.out.println("!!! no viable alt in dfa");
        //			return -1;
        //		}
        if (!state.useContext && s.configs.conflictInfo != null) {
            if (dfa.atnStartState instanceof DecisionState) {
                if (!this.userWantsCtxSensitive ||
                    (!s.configs.dipsIntoOuterContext && s.configs.isExactConflict) ||
                    (this.treat_sllk1_conflict_as_ambiguity && input.index === startIndex)) ;
                else {
                    // assert(!state.useContext);
                    // Before attempting full context prediction, check to see if there are
                    // disambiguating or validating predicates to evaluate which allow an
                    // immediate decision
                    var conflictingAlts = void 0;
                    var predicates_1 = s.predicates;
                    if (predicates_1 != null) {
                        var conflictIndex = input.index;
                        if (conflictIndex !== startIndex) {
                            input.seek(startIndex);
                        }
                        conflictingAlts = this.evalSemanticContext(predicates_1, outerContext, true);
                        if (conflictingAlts.cardinality() === 1) {
                            return conflictingAlts.nextSetBit(0);
                        }
                        if (conflictIndex !== startIndex) {
                            // restore the index so reporting the fallback to full
                            // context occurs with the index at the correct spot
                            input.seek(conflictIndex);
                        }
                    }
                    if (this.reportAmbiguities) {
                        var conflictState = new SimulatorState(outerContext, s, state.useContext, remainingOuterContext);
                        this.reportAttemptingFullContext(dfa, conflictingAlts, conflictState, startIndex, input.index);
                    }
                    input.seek(startIndex);
                    return this.adaptivePredict(input, dfa.decision, outerContext, true);
                }
            }
        }
        // Before jumping to prediction, check to see if there are
        // disambiguating or validating predicates to evaluate
        var predicates = s.predicates;
        if (predicates != null) {
            var stopIndex = input.index;
            if (startIndex !== stopIndex) {
                input.seek(startIndex);
            }
            var alts = this.evalSemanticContext(predicates, outerContext, this.reportAmbiguities && this.predictionMode === PredictionMode.LL_EXACT_AMBIG_DETECTION);
            switch (alts.cardinality()) {
                case 0:
                    throw this.noViableAlt(input, outerContext, s.configs, startIndex);
                case 1:
                    return alts.nextSetBit(0);
                default:
                    // report ambiguity after predicate evaluation to make sure the correct
                    // set of ambig alts is reported.
                    if (startIndex !== stopIndex) {
                        input.seek(stopIndex);
                    }
                    this.reportAmbiguity(dfa, s, startIndex, stopIndex, s.configs.isExactConflict, alts, s.configs);
                    return alts.nextSetBit(0);
            }
        }
        if (ParserATNSimulator.dfa_debug) {
            console.log("DFA decision " + dfa.decision +
                " predicts " + s.prediction);
        }
        return s.prediction;
    };
    /**
     * Determines if a particular DFA state should be treated as an accept state
     * for the current prediction mode. In addition to the `useContext`
     * parameter, the {@link #getPredictionMode()} method provides the
     * prediction mode controlling the prediction algorithm as a whole.
     *
     * The default implementation simply returns the value of
     * `DFAState.isAcceptState` except for conflict states when
     * `useContext` is `true` and {@link #getPredictionMode()} is
     * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION}. In that case, only
     * conflict states where {@link ATNConfigSet#isExactConflict} is
     * `true` are considered accept states.
     *
     * @param state The DFA state to check.
     * @param useContext `true` if the prediction algorithm is currently
     * considering the full parser context; otherwise, `false` if the
     * algorithm is currently performing a local context prediction.
     *
     * @returns `true` if the specified `state` is an accept state;
     * otherwise, `false`.
     */
    ParserATNSimulator.prototype.isAcceptState = function (state, useContext) {
        if (!state.isAcceptState) {
            return false;
        }
        if (state.configs.conflictingAlts == null) {
            // unambiguous
            return true;
        }
        // More picky when we need exact conflicts
        if (useContext && this.predictionMode === PredictionMode.LL_EXACT_AMBIG_DETECTION) {
            return state.configs.isExactConflict;
        }
        return true;
    };
    /** Performs ATN simulation to compute a predicted alternative based
     *  upon the remaining input, but also updates the DFA cache to avoid
     *  having to traverse the ATN again for the same input sequence.
     *
     * There are some key conditions we're looking for after computing a new
     * set of ATN configs (proposed DFA state):
     *
     * * if the set is empty, there is no viable alternative for current symbol
     * * does the state uniquely predict an alternative?
     * * does the state have a conflict that would prevent us from
     *   putting it on the work list?
     * * if in non-greedy decision is there a config at a rule stop state?
     *
     * We also have some key operations to do:
     *
     * * add an edge from previous DFA state to potentially new DFA state, D,
     *   upon current symbol but only if adding to work list, which means in all
     *   cases except no viable alternative (and possibly non-greedy decisions?)
     * * collecting predicates and adding semantic context to DFA accept states
     * * adding rule context to context-sensitive DFA accept states
     * * consuming an input symbol
     * * reporting a conflict
     * * reporting an ambiguity
     * * reporting a context sensitivity
     * * reporting insufficient predicates
     *
     * We should isolate those operations, which are side-effecting, to the
     * main work loop. We can isolate lots of code into other functions, but
     * they should be side effect free. They can return package that
     * indicates whether we should report something, whether we need to add a
     * DFA edge, whether we need to augment accept state with semantic
     * context or rule invocation context. Actually, it seems like we always
     * add predicates if they exist, so that can simply be done in the main
     * loop for any accept state creation or modification request.
     *
     * cover these cases:
     *   dead end
     *   single alt
     *   single alt + preds
     *   conflict
     *   conflict + preds
     *
     * TODO: greedy + those
     */
    ParserATNSimulator.prototype.execATN = function (dfa, input, startIndex, initialState) {
        if (ParserATNSimulator.debug) {
            console.log("execATN decision " + dfa.decision + " exec LA(1)==" + this.getLookaheadName(input));
        }
        var outerContext = initialState.outerContext;
        var useContext = initialState.useContext;
        var t = input.LA(1);
        var previous = initialState;
        var contextCache = new PredictionContextCache();
        while (true) { // while more work
            var nextState = this.computeReachSet(dfa, previous, t, contextCache);
            if (nextState == null) {
                this.setDFAEdge(previous.s0, input.LA(1), ATNSimulator.ERROR);
                return this.handleNoViableAlt(input, startIndex, previous);
            }
            var D = nextState.s0;
            // predicted alt => accept state
            // assert(D.isAcceptState || D.prediction === ATN.INVALID_ALT_NUMBER);
            // conflicted => accept state
            // assert(D.isAcceptState || D.configs.conflictInfo == null);
            if (this.isAcceptState(D, useContext)) {
                var conflictingAlts = D.configs.conflictingAlts;
                var predictedAlt = conflictingAlts == null ? D.prediction : ATN.INVALID_ALT_NUMBER;
                if (predictedAlt !== ATN.INVALID_ALT_NUMBER) {
                    if (this.optimize_ll1
                        && input.index === startIndex
                        && !dfa.isPrecedenceDfa
                        && nextState.outerContext === nextState.remainingOuterContext
                        && dfa.decision >= 0
                        && !D.configs.hasSemanticContext) {
                        if (t >= 0 && t <= MAX_SHORT_VALUE) {
                            var key = ((dfa.decision << 16) >>> 0) + t;
                            this.atn.LL1Table.set(key, predictedAlt);
                        }
                    }
                    if (useContext && this.always_try_local_context) {
                        this.reportContextSensitivity(dfa, predictedAlt, nextState, startIndex, input.index);
                    }
                }
                predictedAlt = D.prediction;
                //				int k = input.index - startIndex + 1; // how much input we used
                //				System.out.println("used k="+k);
                var attemptFullContext = conflictingAlts != null && this.userWantsCtxSensitive;
                if (attemptFullContext) {
                    // Only exact conflicts are known to be ambiguous when local
                    // prediction does not step out of the decision rule.
                    attemptFullContext = !useContext
                        && (D.configs.dipsIntoOuterContext || !D.configs.isExactConflict)
                        && (!this.treat_sllk1_conflict_as_ambiguity || input.index !== startIndex);
                }
                if (D.configs.hasSemanticContext) {
                    var predPredictions = D.predicates;
                    if (predPredictions != null) {
                        var conflictIndex = input.index;
                        if (conflictIndex !== startIndex) {
                            input.seek(startIndex);
                        }
                        // use complete evaluation here if we'll want to retry with full context if still ambiguous
                        conflictingAlts = this.evalSemanticContext(predPredictions, outerContext, attemptFullContext || this.reportAmbiguities);
                        switch (conflictingAlts.cardinality()) {
                            case 0:
                                throw this.noViableAlt(input, outerContext, D.configs, startIndex);
                            case 1:
                                return conflictingAlts.nextSetBit(0);
                            default:
                                break;
                        }
                        if (conflictIndex !== startIndex) {
                            // restore the index so reporting the fallback to full
                            // context occurs with the index at the correct spot
                            input.seek(conflictIndex);
                        }
                    }
                }
                if (!attemptFullContext) {
                    if (conflictingAlts != null) {
                        if (this.reportAmbiguities && conflictingAlts.cardinality() > 1) {
                            this.reportAmbiguity(dfa, D, startIndex, input.index, D.configs.isExactConflict, conflictingAlts, D.configs);
                        }
                        predictedAlt = conflictingAlts.nextSetBit(0);
                    }
                    return predictedAlt;
                }
                else {
                    // assert(!useContext);
                    // assert(this.isAcceptState(D, false));
                    if (ParserATNSimulator.debug) {
                        console.log("RETRY with outerContext=" + outerContext);
                    }
                    var fullContextState = this.computeStartState(dfa, outerContext, true);
                    if (this.reportAmbiguities) {
                        this.reportAttemptingFullContext(dfa, conflictingAlts, nextState, startIndex, input.index);
                    }
                    input.seek(startIndex);
                    return this.execATN(dfa, input, startIndex, fullContextState);
                }
            }
            previous = nextState;
            if (t !== exports.IntStream.EOF) {
                input.consume();
                t = input.LA(1);
            }
        }
    };
    /**
     * This method is used to improve the localization of error messages by
     * choosing an alternative rather than throwing a
     * {@link NoViableAltException} in particular prediction scenarios where the
     * {@link #ERROR} state was reached during ATN simulation.
     *
     * The default implementation of this method uses the following
     * algorithm to identify an ATN configuration which successfully parsed the
     * decision entry rule. Choosing such an alternative ensures that the
     * {@link ParserRuleContext} returned by the calling rule will be complete
     * and valid, and the syntax error will be reported later at a more
     * localized location.
     *
     * * If no configuration in `configs` reached the end of the
     *   decision rule, return {@link ATN#INVALID_ALT_NUMBER}.
     * * If all configurations in `configs` which reached the end of the
     *   decision rule predict the same alternative, return that alternative.
     * * If the configurations in `configs` which reached the end of the
     *   decision rule predict multiple alternatives (call this *S*),
     *   choose an alternative in the following order.
     *
     *     1. Filter the configurations in `configs` to only those
     *        configurations which remain viable after evaluating semantic predicates.
     *        If the set of these filtered configurations which also reached the end of
     *        the decision rule is not empty, return the minimum alternative
     *        represented in this set.
     *     1. Otherwise, choose the minimum alternative in *S*.
     *
     * In some scenarios, the algorithm described above could predict an
     * alternative which will result in a {@link FailedPredicateException} in
     * parser. Specifically, this could occur if the *only* configuration
     * capable of successfully parsing to the end of the decision rule is
     * blocked by a semantic predicate. By choosing this alternative within
     * {@link #adaptivePredict} instead of throwing a
     * {@link NoViableAltException}, the resulting
     * {@link FailedPredicateException} in the parser will identify the specific
     * predicate which is preventing the parser from successfully parsing the
     * decision rule, which helps developers identify and correct logic errors
     * in semantic predicates.
     *
     * @param input The input {@link TokenStream}
     * @param startIndex The start index for the current prediction, which is
     * the input index where any semantic context in `configs` should be
     * evaluated
     * @param previous The ATN simulation state immediately before the
     * {@link #ERROR} state was reached
     *
     * @returns The value to return from {@link #adaptivePredict}, or
     * {@link ATN#INVALID_ALT_NUMBER} if a suitable alternative was not
     * identified and {@link #adaptivePredict} should report an error instead.
     */
    ParserATNSimulator.prototype.handleNoViableAlt = function (input, startIndex, previous) {
        if (previous.s0 != null) {
            var alts = new BitSet();
            var maxAlt = 0;
            try {
                for (var _a = __values(previous.s0.configs), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var config = _b.value;
                    if (config.reachesIntoOuterContext || config.state instanceof RuleStopState) {
                        alts.set(config.alt);
                        maxAlt = Math.max(maxAlt, config.alt);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            switch (alts.cardinality()) {
                case 0:
                    break;
                case 1:
                    return alts.nextSetBit(0);
                default:
                    if (!previous.s0.configs.hasSemanticContext) {
                        // configs doesn't contain any predicates, so the predicate
                        // filtering code below would be pointless
                        return alts.nextSetBit(0);
                    }
                    /*
                     * Try to find a configuration set that not only dipped into the outer
                     * context, but also isn't eliminated by a predicate.
                     */
                    var filteredConfigs = new ATNConfigSet();
                    try {
                        for (var _d = __values(previous.s0.configs), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var config = _e.value;
                            if (config.reachesIntoOuterContext || config.state instanceof RuleStopState) {
                                filteredConfigs.add(config);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    /* The following code blocks are adapted from predicateDFAState with
                     * the following key changes.
                     *
                     *  1. The code operates on an ATNConfigSet rather than a DFAState.
                     *  2. Predicates are collected for all alternatives represented in
                     *     filteredConfigs, rather than restricting the evaluation to
                     *     conflicting and/or unique configurations.
                     */
                    var altToPred = this.getPredsForAmbigAlts(alts, filteredConfigs, maxAlt);
                    if (altToPred != null) {
                        var predicates = this.getPredicatePredictions(alts, altToPred);
                        if (predicates != null) {
                            var stopIndex = input.index;
                            try {
                                input.seek(startIndex);
                                var filteredAlts = this.evalSemanticContext(predicates, previous.outerContext, false);
                                if (!filteredAlts.isEmpty) {
                                    return filteredAlts.nextSetBit(0);
                                }
                            }
                            finally {
                                input.seek(stopIndex);
                            }
                        }
                    }
                    return alts.nextSetBit(0);
            }
        }
        throw this.noViableAlt(input, previous.outerContext, previous.s0.configs, startIndex);
        var e_1, _c, e_2, _f;
    };
    ParserATNSimulator.prototype.computeReachSet = function (dfa, previous, t, contextCache) {
        var useContext = previous.useContext;
        var remainingGlobalContext = previous.remainingOuterContext;
        var s = previous.s0;
        if (useContext) {
            while (s.isContextSymbol(t)) {
                var next = void 0;
                if (remainingGlobalContext != null) {
                    remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                    next = s.getContextTarget(this.getReturnState(remainingGlobalContext));
                }
                if (next == null) {
                    break;
                }
                // assert(remainingGlobalContext != null);
                remainingGlobalContext = remainingGlobalContext.parent;
                s = next;
            }
        }
        // assert(!this.isAcceptState(s, useContext));
        if (this.isAcceptState(s, useContext)) {
            return new SimulatorState(previous.outerContext, s, useContext, remainingGlobalContext);
        }
        var s0 = s;
        var target = this.getExistingTargetState(s0, t);
        if (target == null) {
            var result = this.computeTargetState(dfa, s0, remainingGlobalContext, t, useContext, contextCache);
            target = result[0];
            remainingGlobalContext = result[1];
        }
        if (target === ATNSimulator.ERROR) {
            return undefined;
        }
        // assert(!useContext || !target.configs.dipsIntoOuterContext);
        return new SimulatorState(previous.outerContext, target, useContext, remainingGlobalContext);
    };
    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns `undefined`.
     *
     * @param s The current DFA state
     * @param t The next input symbol
     * @returns The existing target DFA state for the given input symbol
     * `t`, or `undefined` if the target state for this edge is not
     * already cached
     */
    ParserATNSimulator.prototype.getExistingTargetState = function (s, t) {
        return s.getTarget(t);
    };
    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param dfa
     * @param s The current DFA state
     * @param remainingGlobalContext
     * @param t The next input symbol
     * @param useContext
     * @param contextCache
     *
     * @returns The computed target DFA state for the given input symbol
     * `t`. If `t` does not lead to a valid DFA state, this method
     * returns {@link #ERROR}.
     */
    ParserATNSimulator.prototype.computeTargetState = function (dfa, s, remainingGlobalContext, t, useContext, contextCache) {
        var closureConfigs = s.configs.toArray();
        var contextElements;
        var reach = new ATNConfigSet();
        var stepIntoGlobal;
        do {
            var hasMoreContext = !useContext || remainingGlobalContext != null;
            if (!hasMoreContext) {
                reach.isOutermostConfigSet = true;
            }
            var reachIntermediate = new ATNConfigSet();
            /* Configurations already in a rule stop state indicate reaching the end
             * of the decision rule (local context) or end of the start rule (full
             * context). Once reached, these configurations are never updated by a
             * closure operation, so they are handled separately for the performance
             * advantage of having a smaller intermediate set when calling closure.
             *
             * For full-context reach operations, separate handling is required to
             * ensure that the alternative matching the longest overall sequence is
             * chosen when multiple such configurations can match the input.
             */
            var skippedStopStates = void 0;
            try {
                for (var closureConfigs_1 = __values(closureConfigs), closureConfigs_1_1 = closureConfigs_1.next(); !closureConfigs_1_1.done; closureConfigs_1_1 = closureConfigs_1.next()) {
                    var c = closureConfigs_1_1.value;
                    if (ParserATNSimulator.debug) {
                        console.log("testing " + this.getTokenName(t) + " at " + c.toString());
                    }
                    if (c.state instanceof RuleStopState) {
                        // assert(c.context.isEmpty);
                        if (useContext && !c.reachesIntoOuterContext || t === exports.IntStream.EOF) {
                            if (skippedStopStates == null) {
                                skippedStopStates = [];
                            }
                            skippedStopStates.push(c);
                        }
                        continue;
                    }
                    var n = c.state.numberOfOptimizedTransitions;
                    for (var ti = 0; ti < n; ti++) { // for each optimized transition
                        var trans = c.state.getOptimizedTransition(ti);
                        var target = this.getReachableTarget(c, trans, t);
                        if (target != null) {
                            reachIntermediate.add(c.transform(target, false), contextCache);
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (closureConfigs_1_1 && !closureConfigs_1_1.done && (_a = closureConfigs_1.return)) _a.call(closureConfigs_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            /* This block optimizes the reach operation for intermediate sets which
             * trivially indicate a termination state for the overall
             * adaptivePredict operation.
             *
             * The conditions assume that intermediate
             * contains all configurations relevant to the reach set, but this
             * condition is not true when one or more configurations have been
             * withheld in skippedStopStates, or when the current symbol is EOF.
             */
            if (this.optimize_unique_closure && skippedStopStates == null && t !== exports.Token.EOF && reachIntermediate.uniqueAlt !== ATN.INVALID_ALT_NUMBER) {
                reachIntermediate.isOutermostConfigSet = reach.isOutermostConfigSet;
                reach = reachIntermediate;
                break;
            }
            /* If the reach set could not be trivially determined, perform a closure
             * operation on the intermediate set to compute its initial value.
             */
            var collectPredicates = false;
            var treatEofAsEpsilon = t === exports.Token.EOF;
            this.closure(reachIntermediate, reach, collectPredicates, hasMoreContext, contextCache, treatEofAsEpsilon);
            stepIntoGlobal = reach.dipsIntoOuterContext;
            if (t === exports.IntStream.EOF) {
                /* After consuming EOF no additional input is possible, so we are
                 * only interested in configurations which reached the end of the
                 * decision rule (local context) or end of the start rule (full
                 * context). Update reach to contain only these configurations. This
                 * handles both explicit EOF transitions in the grammar and implicit
                 * EOF transitions following the end of the decision or start rule.
                 *
                 * This is handled before the configurations in skippedStopStates,
                 * because any configurations potentially added from that list are
                 * already guaranteed to meet this condition whether or not it's
                 * required.
                 */
                reach = this.removeAllConfigsNotInRuleStopState(reach, contextCache);
            }
            /* If skippedStopStates is not undefined, then it contains at least one
             * configuration. For full-context reach operations, these
             * configurations reached the end of the start rule, in which case we
             * only add them back to reach if no configuration during the current
             * closure operation reached such a state. This ensures adaptivePredict
             * chooses an alternative matching the longest overall sequence when
             * multiple alternatives are viable.
             */
            if (skippedStopStates != null && (!useContext || !PredictionMode.hasConfigInRuleStopState(reach))) {
                try {
                    // assert(skippedStopStates.length > 0);
                    for (var skippedStopStates_1 = __values(skippedStopStates), skippedStopStates_1_1 = skippedStopStates_1.next(); !skippedStopStates_1_1.done; skippedStopStates_1_1 = skippedStopStates_1.next()) {
                        var c = skippedStopStates_1_1.value;
                        reach.add(c, contextCache);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (skippedStopStates_1_1 && !skippedStopStates_1_1.done && (_b = skippedStopStates_1.return)) _b.call(skippedStopStates_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            if (useContext && stepIntoGlobal) {
                reach.clear();
                // We know remainingGlobalContext is not undefined at this point (why?)
                remainingGlobalContext = remainingGlobalContext;
                remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                var nextContextElement = this.getReturnState(remainingGlobalContext);
                if (contextElements == null) {
                    contextElements = new IntegerList();
                }
                if (remainingGlobalContext.isEmpty) {
                    remainingGlobalContext = undefined;
                }
                else {
                    remainingGlobalContext = remainingGlobalContext.parent;
                }
                contextElements.add(nextContextElement);
                if (nextContextElement !== PredictionContext.EMPTY_FULL_STATE_KEY) {
                    for (var i = 0; i < closureConfigs.length; i++) {
                        closureConfigs[i] = closureConfigs[i].appendContext(nextContextElement, contextCache);
                    }
                }
            }
        } while (useContext && stepIntoGlobal);
        if (reach.isEmpty) {
            this.setDFAEdge(s, t, ATNSimulator.ERROR);
            return [ATNSimulator.ERROR, remainingGlobalContext];
        }
        var result = this.addDFAEdge(dfa, s, t, contextElements, reach, contextCache);
        return [result, remainingGlobalContext];
        var e_3, _a, e_4, _b;
    };
    /**
     * Return a configuration set containing only the configurations from
     * `configs` which are in a {@link RuleStopState}. If all
     * configurations in `configs` are already in a rule stop state, this
     * method simply returns `configs`.
     *
     * @param configs the configuration set to update
     * @param contextCache the {@link PredictionContext} cache
     *
     * @returns `configs` if all configurations in `configs` are in a
     * rule stop state, otherwise return a new configuration set containing only
     * the configurations from `configs` which are in a rule stop state
     */
    ParserATNSimulator.prototype.removeAllConfigsNotInRuleStopState = function (configs, contextCache) {
        if (PredictionMode.allConfigsInRuleStopStates(configs)) {
            return configs;
        }
        var result = new ATNConfigSet();
        try {
            for (var configs_1 = __values(configs), configs_1_1 = configs_1.next(); !configs_1_1.done; configs_1_1 = configs_1.next()) {
                var config = configs_1_1.value;
                if (!(config.state instanceof RuleStopState)) {
                    continue;
                }
                result.add(config, contextCache);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (configs_1_1 && !configs_1_1.done && (_a = configs_1.return)) _a.call(configs_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return result;
        var e_5, _a;
    };
    ParserATNSimulator.prototype.computeStartState = function (dfa, globalContext, useContext) {
        var s0 = dfa.isPrecedenceDfa ? dfa.getPrecedenceStartState(this._parser.precedence, useContext) :
            useContext ? dfa.s0full :
                dfa.s0;
        if (s0 != null) {
            if (!useContext) {
                return new SimulatorState(globalContext, s0, useContext, globalContext);
            }
            s0.setContextSensitive(this.atn);
        }
        var decision = dfa.decision;
        // @NotNull
        var p = dfa.atnStartState;
        var previousContext = 0;
        var remainingGlobalContext = globalContext;
        var initialContext = useContext ? PredictionContext.EMPTY_FULL : PredictionContext.EMPTY_LOCAL; // always at least the implicit call to start rule
        var contextCache = new PredictionContextCache();
        if (useContext) {
            if (!this.enable_global_context_dfa) {
                while (remainingGlobalContext != null) {
                    if (remainingGlobalContext.isEmpty) {
                        previousContext = PredictionContext.EMPTY_FULL_STATE_KEY;
                        remainingGlobalContext = undefined;
                    }
                    else {
                        previousContext = this.getReturnState(remainingGlobalContext);
                        initialContext = initialContext.appendSingleContext(previousContext, contextCache);
                        remainingGlobalContext = remainingGlobalContext.parent;
                    }
                }
            }
            while (s0 != null && s0.isContextSensitive && remainingGlobalContext != null) {
                var next = void 0;
                remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
                if (remainingGlobalContext.isEmpty) {
                    next = s0.getContextTarget(PredictionContext.EMPTY_FULL_STATE_KEY);
                    previousContext = PredictionContext.EMPTY_FULL_STATE_KEY;
                    remainingGlobalContext = undefined;
                }
                else {
                    previousContext = this.getReturnState(remainingGlobalContext);
                    next = s0.getContextTarget(previousContext);
                    initialContext = initialContext.appendSingleContext(previousContext, contextCache);
                    remainingGlobalContext = remainingGlobalContext.parent;
                }
                if (next == null) {
                    break;
                }
                s0 = next;
            }
        }
        if (s0 != null && !s0.isContextSensitive) {
            return new SimulatorState(globalContext, s0, useContext, remainingGlobalContext);
        }
        var configs = new ATNConfigSet();
        while (true) {
            var reachIntermediate = new ATNConfigSet();
            var n = p.numberOfTransitions;
            for (var ti = 0; ti < n; ti++) {
                // for each transition
                var target = p.transition(ti).target;
                reachIntermediate.add(ATNConfig.create(target, ti + 1, initialContext));
            }
            var hasMoreContext = remainingGlobalContext != null;
            if (!hasMoreContext) {
                configs.isOutermostConfigSet = true;
            }
            var collectPredicates = true;
            this.closure(reachIntermediate, configs, collectPredicates, hasMoreContext, contextCache, false);
            var stepIntoGlobal = configs.dipsIntoOuterContext;
            var next = void 0;
            if (useContext && !this.enable_global_context_dfa) {
                s0 = this.addDFAState(dfa, configs, contextCache);
                break;
            }
            else if (s0 == null) {
                if (!dfa.isPrecedenceDfa) {
                    next = this.addDFAState(dfa, configs, contextCache);
                    if (useContext) {
                        if (!dfa.s0full) {
                            dfa.s0full = next;
                        }
                        else {
                            next = dfa.s0full;
                        }
                    }
                    else {
                        if (!dfa.s0) {
                            dfa.s0 = next;
                        }
                        else {
                            next = dfa.s0;
                        }
                    }
                }
                else {
                    /* If this is a precedence DFA, we use applyPrecedenceFilter
                     * to convert the computed start state to a precedence start
                     * state. We then use DFA.setPrecedenceStartState to set the
                     * appropriate start state for the precedence level rather
                     * than simply setting DFA.s0.
                     */
                    configs = this.applyPrecedenceFilter(configs, globalContext, contextCache);
                    next = this.addDFAState(dfa, configs, contextCache);
                    dfa.setPrecedenceStartState(this._parser.precedence, useContext, next);
                }
            }
            else {
                if (dfa.isPrecedenceDfa) {
                    configs = this.applyPrecedenceFilter(configs, globalContext, contextCache);
                }
                next = this.addDFAState(dfa, configs, contextCache);
                s0.setContextTarget(previousContext, next);
            }
            s0 = next;
            if (!useContext || !stepIntoGlobal) {
                break;
            }
            // TODO: make sure it distinguishes empty stack states
            next.setContextSensitive(this.atn);
            // We know remainingGlobalContext is not undefined at this point (why?)
            remainingGlobalContext = remainingGlobalContext;
            configs.clear();
            remainingGlobalContext = this.skipTailCalls(remainingGlobalContext);
            var nextContextElement = this.getReturnState(remainingGlobalContext);
            if (remainingGlobalContext.isEmpty) {
                remainingGlobalContext = undefined;
            }
            else {
                remainingGlobalContext = remainingGlobalContext.parent;
            }
            if (nextContextElement !== PredictionContext.EMPTY_FULL_STATE_KEY) {
                initialContext = initialContext.appendSingleContext(nextContextElement, contextCache);
            }
            previousContext = nextContextElement;
        }
        return new SimulatorState(globalContext, s0, useContext, remainingGlobalContext);
    };
    /**
     * This method transforms the start state computed by
     * {@link #computeStartState} to the special start state used by a
     * precedence DFA for a particular precedence value. The transformation
     * process applies the following changes to the start state's configuration
     * set.
     *
     * 1. Evaluate the precedence predicates for each configuration using
     *    {@link SemanticContext#evalPrecedence}.
     * 1. When {@link ATNConfig#isPrecedenceFilterSuppressed} is `false`,
     *    remove all configurations which predict an alternative greater than 1,
     *    for which another configuration that predicts alternative 1 is in the
     *    same ATN state with the same prediction context. This transformation is
     *    valid for the following reasons:
     *
     *     * The closure block cannot contain any epsilon transitions which bypass
     *       the body of the closure, so all states reachable via alternative 1 are
     *       part of the precedence alternatives of the transformed left-recursive
     *       rule.
     *     * The "primary" portion of a left recursive rule cannot contain an
     *       epsilon transition, so the only way an alternative other than 1 can exist
     *       in a state that is also reachable via alternative 1 is by nesting calls
     *       to the left-recursive rule, with the outer calls not being at the
     *       preferred precedence level. The
     *       {@link ATNConfig#isPrecedenceFilterSuppressed} property marks ATN
     *       configurations which do not meet this condition, and therefore are not
     *       eligible for elimination during the filtering process.
     *
     * The prediction context must be considered by this filter to address
     * situations like the following.
     *
     * ```antlr
     * grammar TA;
     * prog: statement* EOF;
     * statement: letterA | statement letterA 'b' ;
     * letterA: 'a';
     * ```
     *
     * If the above grammar, the ATN state immediately before the token
     * reference `'a'` in `letterA` is reachable from the left edge
     * of both the primary and closure blocks of the left-recursive rule
     * `statement`. The prediction context associated with each of these
     * configurations distinguishes between them, and prevents the alternative
     * which stepped out to `prog` (and then back in to `statement`
     * from being eliminated by the filter.
     *
     * @param configs The configuration set computed by
     * {@link #computeStartState} as the start state for the DFA.
     * @returns The transformed configuration set representing the start state
     * for a precedence DFA at a particular precedence level (determined by
     * calling {@link Parser#getPrecedence}).
     */
    ParserATNSimulator.prototype.applyPrecedenceFilter = function (configs, globalContext, contextCache) {
        var statesFromAlt1 = new Map();
        var configSet = new ATNConfigSet();
        try {
            for (var configs_2 = __values(configs), configs_2_1 = configs_2.next(); !configs_2_1.done; configs_2_1 = configs_2.next()) {
                var config = configs_2_1.value;
                // handle alt 1 first
                if (config.alt !== 1) {
                    continue;
                }
                var updatedContext = config.semanticContext.evalPrecedence(this._parser, globalContext);
                if (updatedContext == null) {
                    // the configuration was eliminated
                    continue;
                }
                statesFromAlt1.set(config.state.stateNumber, config.context);
                if (updatedContext !== config.semanticContext) {
                    configSet.add(config.transform(config.state, false, updatedContext), contextCache);
                }
                else {
                    configSet.add(config, contextCache);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (configs_2_1 && !configs_2_1.done && (_a = configs_2.return)) _a.call(configs_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            for (var configs_3 = __values(configs), configs_3_1 = configs_3.next(); !configs_3_1.done; configs_3_1 = configs_3.next()) {
                var config = configs_3_1.value;
                if (config.alt === 1) {
                    // already handled
                    continue;
                }
                if (!config.isPrecedenceFilterSuppressed) {
                    /* In the future, this elimination step could be updated to also
                     * filter the prediction context for alternatives predicting alt>1
                     * (basically a graph subtraction algorithm).
                     */
                    var context_1 = statesFromAlt1.get(config.state.stateNumber);
                    if (context_1 != null && context_1.equals(config.context)) {
                        // eliminated
                        continue;
                    }
                }
                configSet.add(config, contextCache);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (configs_3_1 && !configs_3_1.done && (_b = configs_3.return)) _b.call(configs_3);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return configSet;
        var e_6, _a, e_7, _b;
    };
    ParserATNSimulator.prototype.getReachableTarget = function (source, trans, ttype) {
        if (trans.matches(ttype, 0, this.atn.maxTokenType)) {
            return trans.target;
        }
        return undefined;
    };
    /** collect and set D's semantic context */
    ParserATNSimulator.prototype.predicateDFAState = function (D, configs, nalts) {
        var conflictingAlts = this.getConflictingAltsFromConfigSet(configs);
        if (!conflictingAlts) {
            throw new Error("This unhandled scenario is intended to be unreachable, but I'm currently not sure of why we know that's the case.");
        }
        if (ParserATNSimulator.debug) {
            console.log("predicateDFAState " + D);
        }
        var altToPred = this.getPredsForAmbigAlts(conflictingAlts, configs, nalts);
        // altToPred[uniqueAlt] is now our validating predicate (if any)
        var predPredictions;
        if (altToPred != null) {
            // we have a validating predicate; test it
            // Update DFA so reach becomes accept state with predicate
            predPredictions = this.getPredicatePredictions(conflictingAlts, altToPred);
            D.predicates = predPredictions;
        }
        return predPredictions;
    };
    ParserATNSimulator.prototype.getPredsForAmbigAlts = function (ambigAlts, configs, nalts) {
        // REACH=[1|1|[]|0:0, 1|2|[]|0:1]
        /* altToPred starts as an array of all undefined contexts. The entry at index i
         * corresponds to alternative i. altToPred[i] may have one of three values:
         *   1. undefined: no ATNConfig c is found such that c.alt===i
         *   2. SemanticContext.NONE: At least one ATNConfig c exists such that
         *      c.alt===i and c.semanticContext===SemanticContext.NONE. In other words,
         *      alt i has at least one unpredicated config.
         *   3. Non-NONE Semantic Context: There exists at least one, and for all
         *      ATNConfig c such that c.alt===i, c.semanticContext!==SemanticContext.NONE.
         *
         * From this, it is clear that NONE||anything==NONE.
         */
        var altToPred = new Array(nalts + 1);
        var n = altToPred.length;
        try {
            for (var configs_4 = __values(configs), configs_4_1 = configs_4.next(); !configs_4_1.done; configs_4_1 = configs_4.next()) {
                var c = configs_4_1.value;
                if (ambigAlts.get(c.alt)) {
                    altToPred[c.alt] = SemanticContext.or(altToPred[c.alt], c.semanticContext);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (configs_4_1 && !configs_4_1.done && (_a = configs_4.return)) _a.call(configs_4);
            }
            finally { if (e_8) throw e_8.error; }
        }
        var nPredAlts = 0;
        for (var i = 0; i < n; i++) {
            if (altToPred[i] == null) {
                altToPred[i] = SemanticContext.NONE;
            }
            else if (altToPred[i] !== SemanticContext.NONE) {
                nPredAlts++;
            }
        }
        // At this point we know `altToPred` doesn't contain any undefined entries
        var result = altToPred;
        // nonambig alts are undefined in result
        if (nPredAlts === 0) {
            result = undefined;
        }
        if (ParserATNSimulator.debug) {
            console.log("getPredsForAmbigAlts result " + (result ? Arrays.toString(result) : "undefined"));
        }
        return result;
        var e_8, _a;
    };
    ParserATNSimulator.prototype.getPredicatePredictions = function (ambigAlts, altToPred) {
        var pairs = [];
        var containsPredicate = false;
        for (var i = 1; i < altToPred.length; i++) {
            var pred = altToPred[i];
            // unpredicated is indicated by SemanticContext.NONE
            // assert(pred != null);
            // find first unpredicated but ambig alternative, if any.
            // Only ambiguous alternatives will have SemanticContext.NONE.
            // Any unambig alts or ambig naked alts after first ambig naked are ignored
            // (undefined, i) means alt i is the default prediction
            // if no (undefined, i), then no default prediction.
            if (ambigAlts != null && ambigAlts.get(i) && pred === SemanticContext.NONE) {
                pairs.push(new DFAState.PredPrediction(pred, i));
            }
            else if (pred !== SemanticContext.NONE) {
                containsPredicate = true;
                pairs.push(new DFAState.PredPrediction(pred, i));
            }
        }
        if (!containsPredicate) {
            return undefined;
        }
        //		System.out.println(Arrays.toString(altToPred)+"->"+pairs);
        return pairs;
    };
    /** Look through a list of predicate/alt pairs, returning alts for the
     *  pairs that win. An `undefined` predicate indicates an alt containing an
     *  unpredicated config which behaves as "always true."
     */
    ParserATNSimulator.prototype.evalSemanticContext = function (predPredictions, outerContext, complete) {
        var predictions = new BitSet();
        try {
            for (var predPredictions_1 = __values(predPredictions), predPredictions_1_1 = predPredictions_1.next(); !predPredictions_1_1.done; predPredictions_1_1 = predPredictions_1.next()) {
                var pair = predPredictions_1_1.value;
                if (pair.pred === SemanticContext.NONE) {
                    predictions.set(pair.alt);
                    if (!complete) {
                        break;
                    }
                    continue;
                }
                var evaluatedResult = this.evalSemanticContextImpl(pair.pred, outerContext, pair.alt);
                if (ParserATNSimulator.debug || ParserATNSimulator.dfa_debug) {
                    console.log("eval pred " + pair + "=" + evaluatedResult);
                }
                if (evaluatedResult) {
                    if (ParserATNSimulator.debug || ParserATNSimulator.dfa_debug) {
                        console.log("PREDICT " + pair.alt);
                    }
                    predictions.set(pair.alt);
                    if (!complete) {
                        break;
                    }
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (predPredictions_1_1 && !predPredictions_1_1.done && (_a = predPredictions_1.return)) _a.call(predPredictions_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return predictions;
        var e_9, _a;
    };
    /**
     * Evaluate a semantic context within a specific parser context.
     *
     * This method might not be called for every semantic context evaluated
     * during the prediction process. In particular, we currently do not
     * evaluate the following but it may change in the future:
     *
     * * Precedence predicates (represented by
     *   {@link SemanticContext.PrecedencePredicate}) are not currently evaluated
     *   through this method.
     * * Operator predicates (represented by {@link SemanticContext.AND} and
     *   {@link SemanticContext.OR}) are evaluated as a single semantic
     *   context, rather than evaluating the operands individually.
     *   Implementations which require evaluation results from individual
     *   predicates should override this method to explicitly handle evaluation of
     *   the operands within operator predicates.
     *
     * @param pred The semantic context to evaluate
     * @param parserCallStack The parser context in which to evaluate the
     * semantic context
     * @param alt The alternative which is guarded by `pred`
     *
     * @since 4.3
     */
    ParserATNSimulator.prototype.evalSemanticContextImpl = function (pred, parserCallStack, alt) {
        return pred.eval(this._parser, parserCallStack);
    };
    /* TODO: If we are doing predicates, there is no point in pursuing
         closure operations if we reach a DFA state that uniquely predicts
         alternative. We will not be caching that DFA state and it is a
         waste to pursue the closure. Might have to advance when we do
         ambig detection thought :(
          */
    ParserATNSimulator.prototype.closure = function (sourceConfigs, configs, collectPredicates, hasMoreContext, contextCache, treatEofAsEpsilon) {
        if (contextCache == null) {
            contextCache = PredictionContextCache.UNCACHED;
        }
        var currentConfigs = sourceConfigs;
        var closureBusy = new Array2DHashSet(ObjectEqualityComparator.INSTANCE);
        while (currentConfigs.size > 0) {
            var intermediate = new ATNConfigSet();
            try {
                for (var currentConfigs_1 = __values(currentConfigs), currentConfigs_1_1 = currentConfigs_1.next(); !currentConfigs_1_1.done; currentConfigs_1_1 = currentConfigs_1.next()) {
                    var config = currentConfigs_1_1.value;
                    this.closureImpl(config, configs, intermediate, closureBusy, collectPredicates, hasMoreContext, contextCache, 0, treatEofAsEpsilon);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (currentConfigs_1_1 && !currentConfigs_1_1.done && (_a = currentConfigs_1.return)) _a.call(currentConfigs_1);
                }
                finally { if (e_10) throw e_10.error; }
            }
            currentConfigs = intermediate;
        }
        var e_10, _a;
    };
    ParserATNSimulator.prototype.closureImpl = function (config, configs, intermediate, closureBusy, collectPredicates, hasMoreContexts, contextCache, depth, treatEofAsEpsilon) {
        if (ParserATNSimulator.debug) {
            console.log("closure(" + config.toString(this._parser, true) + ")");
        }
        if (config.state instanceof RuleStopState) {
            // We hit rule end. If we have context info, use it
            if (!config.context.isEmpty) {
                var hasEmpty = config.context.hasEmpty;
                var nonEmptySize = config.context.size - (hasEmpty ? 1 : 0);
                for (var i = 0; i < nonEmptySize; i++) {
                    var newContext = config.context.getParent(i); // "pop" return state
                    var returnState = this.atn.states[config.context.getReturnState(i)];
                    var c = ATNConfig.create(returnState, config.alt, newContext, config.semanticContext);
                    // While we have context to pop back from, we may have
                    // gotten that context AFTER having fallen off a rule.
                    // Make sure we track that we are now out of context.
                    c.outerContextDepth = config.outerContextDepth;
                    c.isPrecedenceFilterSuppressed = config.isPrecedenceFilterSuppressed;
                    // assert(depth > MIN_INTEGER_VALUE);
                    this.closureImpl(c, configs, intermediate, closureBusy, collectPredicates, hasMoreContexts, contextCache, depth - 1, treatEofAsEpsilon);
                }
                if (!hasEmpty || !hasMoreContexts) {
                    return;
                }
                config = config.transform(config.state, false, PredictionContext.EMPTY_LOCAL);
            }
            else if (!hasMoreContexts) {
                configs.add(config, contextCache);
                return;
            }
            else {
                // else if we have no context info, just chase follow links (if greedy)
                if (ParserATNSimulator.debug) {
                    console.log("FALLING off rule " +
                        this.getRuleName(config.state.ruleIndex));
                }
                if (config.context === PredictionContext.EMPTY_FULL) {
                    // no need to keep full context overhead when we step out
                    config = config.transform(config.state, false, PredictionContext.EMPTY_LOCAL);
                }
                else if (!config.reachesIntoOuterContext && PredictionContext.isEmptyLocal(config.context)) {
                    // add stop state when leaving decision rule for the first time
                    configs.add(config, contextCache);
                }
            }
        }
        var p = config.state;
        // optimization
        if (!p.onlyHasEpsilonTransitions) {
            configs.add(config, contextCache);
            // make sure to not return here, because EOF transitions can act as
            // both epsilon transitions and non-epsilon transitions.
            if (ParserATNSimulator.debug) {
                console.log("added config " + configs);
            }
        }
        for (var i = 0; i < p.numberOfOptimizedTransitions; i++) {
            // This block implements first-edge elimination of ambiguous LR
            // alternatives as part of dynamic disambiguation during prediction.
            // See antlr/antlr4#1398.
            if (i === 0
                && p.stateType === ATNStateType.STAR_LOOP_ENTRY
                && p.precedenceRuleDecision
                && !config.context.hasEmpty) {
                var precedenceDecision = p;
                // When suppress is true, it means the outgoing edge i==0 is
                // ambiguous with the outgoing edge i==1, and thus the closure
                // operation can dynamically disambiguate by suppressing this
                // edge during the closure operation.
                var suppress = true;
                for (var j = 0; j < config.context.size; j++) {
                    if (!precedenceDecision.precedenceLoopbackStates.get(config.context.getReturnState(j))) {
                        suppress = false;
                        break;
                    }
                }
                if (suppress) {
                    continue;
                }
            }
            var t = p.getOptimizedTransition(i);
            var continueCollecting = !(t instanceof ActionTransition) && collectPredicates;
            var c = this.getEpsilonTarget(config, t, continueCollecting, depth === 0, contextCache, treatEofAsEpsilon);
            if (c != null) {
                if (t instanceof RuleTransition) {
                    if (intermediate != null && !collectPredicates) {
                        intermediate.add(c, contextCache);
                        continue;
                    }
                }
                if (!t.isEpsilon && !closureBusy.add(c)) {
                    // avoid infinite recursion for EOF* and EOF+
                    continue;
                }
                var newDepth = depth;
                if (config.state instanceof RuleStopState) {
                    // target fell off end of rule; mark resulting c as having dipped into outer context
                    // We can't get here if incoming config was rule stop and we had context
                    // track how far we dip into outer context.  Might
                    // come in handy and we avoid evaluating context dependent
                    // preds if this is > 0.
                    if (!closureBusy.add(c)) {
                        // avoid infinite recursion for right-recursive rules
                        continue;
                    }
                    if (this.dfa != null && this.dfa.isPrecedenceDfa) {
                        var outermostPrecedenceReturn = t.outermostPrecedenceReturn;
                        if (outermostPrecedenceReturn === this.dfa.atnStartState.ruleIndex) {
                            c.isPrecedenceFilterSuppressed = true;
                        }
                    }
                    c.outerContextDepth = c.outerContextDepth + 1;
                    // assert(newDepth > MIN_INTEGER_VALUE);
                    newDepth--;
                    if (ParserATNSimulator.debug) {
                        console.log("dips into outer ctx: " + c);
                    }
                }
                else if (t instanceof RuleTransition) {
                    if (this.optimize_tail_calls && t.optimizedTailCall && (!this.tail_call_preserves_sll || !PredictionContext.isEmptyLocal(config.context))) {
                        // assert(c.context === config.context);
                        if (newDepth === 0) {
                            // the pop/push of a tail call would keep the depth
                            // constant, except we latch if it goes negative
                            newDepth--;
                            if (!this.tail_call_preserves_sll && PredictionContext.isEmptyLocal(config.context)) {
                                // make sure the SLL config "dips into the outer context" or prediction may not fall back to LL on conflict
                                c.outerContextDepth = c.outerContextDepth + 1;
                            }
                        }
                    }
                    else {
                        // latch when newDepth goes negative - once we step out of the entry context we can't return
                        if (newDepth >= 0) {
                            newDepth++;
                        }
                    }
                }
                this.closureImpl(c, configs, intermediate, closureBusy, continueCollecting, hasMoreContexts, contextCache, newDepth, treatEofAsEpsilon);
            }
        }
    };
    ParserATNSimulator.prototype.getRuleName = function (index) {
        if (this._parser != null && index >= 0) {
            return this._parser.ruleNames[index];
        }
        return "<rule " + index + ">";
    };
    ParserATNSimulator.prototype.getEpsilonTarget = function (config, t, collectPredicates, inContext, contextCache, treatEofAsEpsilon) {
        switch (t.serializationType) {
            case 3 /* RULE */:
                return this.ruleTransition(config, t, contextCache);
            case 10 /* PRECEDENCE */:
                return this.precedenceTransition(config, t, collectPredicates, inContext);
            case 4 /* PREDICATE */:
                return this.predTransition(config, t, collectPredicates, inContext);
            case 6 /* ACTION */:
                return this.actionTransition(config, t);
            case 1 /* EPSILON */:
                return config.transform(t.target, false);
            case 5 /* ATOM */:
            case 2 /* RANGE */:
            case 7 /* SET */:
                // EOF transitions act like epsilon transitions after the first EOF
                // transition is traversed
                if (treatEofAsEpsilon) {
                    if (t.matches(exports.Token.EOF, 0, 1)) {
                        return config.transform(t.target, false);
                    }
                }
                return undefined;
            default:
                return undefined;
        }
    };
    ParserATNSimulator.prototype.actionTransition = function (config, t) {
        if (ParserATNSimulator.debug) {
            console.log("ACTION edge " + t.ruleIndex + ":" + t.actionIndex);
        }
        return config.transform(t.target, false);
    };
    ParserATNSimulator.prototype.precedenceTransition = function (config, pt, collectPredicates, inContext) {
        if (ParserATNSimulator.debug) {
            console.log("PRED (collectPredicates=" + collectPredicates + ") " +
                pt.precedence + ">=_p" +
                ", ctx dependent=true");
            if (this._parser != null) {
                console.log("context surrounding pred is " +
                    this._parser.getRuleInvocationStack());
            }
        }
        var c;
        if (collectPredicates && inContext) {
            var newSemCtx = SemanticContext.and(config.semanticContext, pt.predicate);
            c = config.transform(pt.target, false, newSemCtx);
        }
        else {
            c = config.transform(pt.target, false);
        }
        if (ParserATNSimulator.debug) {
            console.log("config from pred transition=" + c);
        }
        return c;
    };
    ParserATNSimulator.prototype.predTransition = function (config, pt, collectPredicates, inContext) {
        if (ParserATNSimulator.debug) {
            console.log("PRED (collectPredicates=" + collectPredicates + ") " +
                pt.ruleIndex + ":" + pt.predIndex +
                ", ctx dependent=" + pt.isCtxDependent);
            if (this._parser != null) {
                console.log("context surrounding pred is " +
                    this._parser.getRuleInvocationStack());
            }
        }
        var c;
        if (collectPredicates &&
            (!pt.isCtxDependent || (pt.isCtxDependent && inContext))) {
            var newSemCtx = SemanticContext.and(config.semanticContext, pt.predicate);
            c = config.transform(pt.target, false, newSemCtx);
        }
        else {
            c = config.transform(pt.target, false);
        }
        if (ParserATNSimulator.debug) {
            console.log("config from pred transition=" + c);
        }
        return c;
    };
    ParserATNSimulator.prototype.ruleTransition = function (config, t, contextCache) {
        if (ParserATNSimulator.debug) {
            console.log("CALL rule " + this.getRuleName(t.target.ruleIndex) +
                ", ctx=" + config.context);
        }
        var returnState = t.followState;
        var newContext;
        if (this.optimize_tail_calls && t.optimizedTailCall && (!this.tail_call_preserves_sll || !PredictionContext.isEmptyLocal(config.context))) {
            newContext = config.context;
        }
        else if (contextCache != null) {
            newContext = contextCache.getChild(config.context, returnState.stateNumber);
        }
        else {
            newContext = config.context.getChild(returnState.stateNumber);
        }
        return config.transform(t.target, false, newContext);
    };
    ParserATNSimulator.prototype.isConflicted = function (configset, contextCache) {
        if (configset.uniqueAlt !== ATN.INVALID_ALT_NUMBER || configset.size <= 1) {
            return undefined;
        }
        var configs = configset.toArray();
        configs.sort(ParserATNSimulator.STATE_ALT_SORT_COMPARATOR);
        var exact = !configset.dipsIntoOuterContext;
        var alts = new BitSet();
        var minAlt = configs[0].alt;
        alts.set(minAlt);
        /* Quick checks come first (single pass, no context joining):
         *  1. Make sure first config in the sorted list predicts the minimum
         *     represented alternative.
         *  2. Make sure every represented state has at least one configuration
         *     which predicts the minimum represented alternative.
         *  3. (exact only) make sure every represented state has at least one
         *     configuration which predicts each represented alternative.
         */
        // quick check 1 & 2 => if we assume #1 holds and check #2 against the
        // minAlt from the first state, #2 will fail if the assumption was
        // incorrect
        var currentState = configs[0].state.nonStopStateNumber;
        try {
            for (var configs_5 = __values(configs), configs_5_1 = configs_5.next(); !configs_5_1.done; configs_5_1 = configs_5.next()) {
                var config = configs_5_1.value;
                var stateNumber = config.state.nonStopStateNumber;
                if (stateNumber !== currentState) {
                    if (config.alt !== minAlt) {
                        return undefined;
                    }
                    currentState = stateNumber;
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (configs_5_1 && !configs_5_1.done && (_a = configs_5.return)) _a.call(configs_5);
            }
            finally { if (e_11) throw e_11.error; }
        }
        var representedAlts;
        if (exact) {
            currentState = configs[0].state.nonStopStateNumber;
            // get the represented alternatives of the first state
            representedAlts = new BitSet();
            var maxAlt = minAlt;
            try {
                for (var configs_6 = __values(configs), configs_6_1 = configs_6.next(); !configs_6_1.done; configs_6_1 = configs_6.next()) {
                    var config = configs_6_1.value;
                    if (config.state.nonStopStateNumber !== currentState) {
                        break;
                    }
                    var alt = config.alt;
                    representedAlts.set(alt);
                    maxAlt = alt;
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (configs_6_1 && !configs_6_1.done && (_b = configs_6.return)) _b.call(configs_6);
                }
                finally { if (e_12) throw e_12.error; }
            }
            // quick check #3:
            currentState = configs[0].state.nonStopStateNumber;
            var currentAlt = minAlt;
            try {
                for (var configs_7 = __values(configs), configs_7_1 = configs_7.next(); !configs_7_1.done; configs_7_1 = configs_7.next()) {
                    var config = configs_7_1.value;
                    var stateNumber = config.state.nonStopStateNumber;
                    var alt = config.alt;
                    if (stateNumber !== currentState) {
                        if (currentAlt !== maxAlt) {
                            exact = false;
                            break;
                        }
                        currentState = stateNumber;
                        currentAlt = minAlt;
                    }
                    else if (alt !== currentAlt) {
                        if (alt !== representedAlts.nextSetBit(currentAlt + 1)) {
                            exact = false;
                            break;
                        }
                        currentAlt = alt;
                    }
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (configs_7_1 && !configs_7_1.done && (_c = configs_7.return)) _c.call(configs_7);
                }
                finally { if (e_13) throw e_13.error; }
            }
        }
        currentState = configs[0].state.nonStopStateNumber;
        var firstIndexCurrentState = 0;
        var lastIndexCurrentStateMinAlt = 0;
        var joinedCheckContext = configs[0].context;
        for (var i = 1; i < configs.length; i++) {
            var config = configs[i];
            if (config.alt !== minAlt) {
                break;
            }
            if (config.state.nonStopStateNumber !== currentState) {
                break;
            }
            lastIndexCurrentStateMinAlt = i;
            joinedCheckContext = contextCache.join(joinedCheckContext, configs[i].context);
        }
        for (var i = lastIndexCurrentStateMinAlt + 1; i < configs.length; i++) {
            var config = configs[i];
            var state = config.state;
            alts.set(config.alt);
            if (state.nonStopStateNumber !== currentState) {
                currentState = state.nonStopStateNumber;
                firstIndexCurrentState = i;
                lastIndexCurrentStateMinAlt = i;
                joinedCheckContext = config.context;
                for (var j = firstIndexCurrentState + 1; j < configs.length; j++) {
                    var config2 = configs[j];
                    if (config2.alt !== minAlt) {
                        break;
                    }
                    if (config2.state.nonStopStateNumber !== currentState) {
                        break;
                    }
                    lastIndexCurrentStateMinAlt = j;
                    joinedCheckContext = contextCache.join(joinedCheckContext, config2.context);
                }
                i = lastIndexCurrentStateMinAlt;
                continue;
            }
            var joinedCheckContext2 = config.context;
            var currentAlt = config.alt;
            var lastIndexCurrentStateCurrentAlt = i;
            for (var j = lastIndexCurrentStateCurrentAlt + 1; j < configs.length; j++) {
                var config2 = configs[j];
                if (config2.alt !== currentAlt) {
                    break;
                }
                if (config2.state.nonStopStateNumber !== currentState) {
                    break;
                }
                lastIndexCurrentStateCurrentAlt = j;
                joinedCheckContext2 = contextCache.join(joinedCheckContext2, config2.context);
            }
            i = lastIndexCurrentStateCurrentAlt;
            var check = contextCache.join(joinedCheckContext, joinedCheckContext2);
            if (!joinedCheckContext.equals(check)) {
                return undefined;
            }
            // update exact if necessary
            exact = exact && joinedCheckContext.equals(joinedCheckContext2);
        }
        return new ConflictInfo(alts, exact);
        var e_11, _a, e_12, _b, e_13, _c;
    };
    ParserATNSimulator.prototype.getConflictingAltsFromConfigSet = function (configs) {
        var conflictingAlts = configs.conflictingAlts;
        if (conflictingAlts == null && configs.uniqueAlt !== ATN.INVALID_ALT_NUMBER) {
            conflictingAlts = new BitSet();
            conflictingAlts.set(configs.uniqueAlt);
        }
        return conflictingAlts;
    };
    ParserATNSimulator.prototype.getTokenName = function (t) {
        if (t === exports.Token.EOF) {
            return "EOF";
        }
        var vocabulary = this._parser != null ? this._parser.vocabulary : VocabularyImpl.EMPTY_VOCABULARY;
        var displayName = vocabulary.getDisplayName(t);
        if (displayName === String(t)) {
            return displayName;
        }
        return displayName + "<" + t + ">";
    };
    ParserATNSimulator.prototype.getLookaheadName = function (input) {
        return this.getTokenName(input.LA(1));
    };
    ParserATNSimulator.prototype.dumpDeadEndConfigs = function (nvae) {
        console.log("dead end configs: ");
        var deadEndConfigs = nvae.deadEndConfigs;
        if (!deadEndConfigs) {
            return;
        }
        try {
            for (var deadEndConfigs_1 = __values(deadEndConfigs), deadEndConfigs_1_1 = deadEndConfigs_1.next(); !deadEndConfigs_1_1.done; deadEndConfigs_1_1 = deadEndConfigs_1.next()) {
                var c = deadEndConfigs_1_1.value;
                var trans = "no edges";
                if (c.state.numberOfOptimizedTransitions > 0) {
                    var t = c.state.getOptimizedTransition(0);
                    if (t instanceof AtomTransition) {
                        trans = "Atom " + this.getTokenName(t._label);
                    }
                    else if (t instanceof SetTransition) {
                        var not = t instanceof NotSetTransition;
                        trans = (not ? "~" : "") + "Set " + t.set.toString();
                    }
                }
                console.log(c.toString(this._parser, true) + ":" + trans);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (deadEndConfigs_1_1 && !deadEndConfigs_1_1.done && (_a = deadEndConfigs_1.return)) _a.call(deadEndConfigs_1);
            }
            finally { if (e_14) throw e_14.error; }
        }
        var e_14, _a;
    };
    ParserATNSimulator.prototype.noViableAlt = function (input, outerContext, configs, startIndex) {
        return new NoViableAltException(this._parser, input, input.get(startIndex), input.LT(1), configs, outerContext);
    };
    ParserATNSimulator.prototype.getUniqueAlt = function (configs) {
        var alt = ATN.INVALID_ALT_NUMBER;
        try {
            for (var configs_8 = __values(configs), configs_8_1 = configs_8.next(); !configs_8_1.done; configs_8_1 = configs_8.next()) {
                var c = configs_8_1.value;
                if (alt === ATN.INVALID_ALT_NUMBER) {
                    alt = c.alt; // found first alt
                }
                else if (c.alt !== alt) {
                    return ATN.INVALID_ALT_NUMBER;
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (configs_8_1 && !configs_8_1.done && (_a = configs_8.return)) _a.call(configs_8);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return alt;
        var e_15, _a;
    };
    ParserATNSimulator.prototype.configWithAltAtStopState = function (configs, alt) {
        try {
            for (var configs_9 = __values(configs), configs_9_1 = configs_9.next(); !configs_9_1.done; configs_9_1 = configs_9.next()) {
                var c = configs_9_1.value;
                if (c.alt === alt) {
                    if (c.state instanceof RuleStopState) {
                        return true;
                    }
                }
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (configs_9_1 && !configs_9_1.done && (_a = configs_9.return)) _a.call(configs_9);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return false;
        var e_16, _a;
    };
    ParserATNSimulator.prototype.addDFAEdge = function (dfa, fromState, t, contextTransitions, toConfigs, contextCache) {
        // assert(contextTransitions == null || contextTransitions.isEmpty || dfa.isContextSensitive);
        var from = fromState;
        var to = this.addDFAState(dfa, toConfigs, contextCache);
        if (contextTransitions != null) {
            try {
                for (var _a = __values(contextTransitions.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var context_2 = _b.value;
                    if (context_2 === PredictionContext.EMPTY_FULL_STATE_KEY) {
                        if (from.configs.isOutermostConfigSet) {
                            continue;
                        }
                    }
                    from.setContextSensitive(this.atn);
                    from.setContextSymbol(t);
                    var next = from.getContextTarget(context_2);
                    if (next != null) {
                        from = next;
                        continue;
                    }
                    next = this.addDFAContextState(dfa, from.configs, context_2, contextCache);
                    // assert(context !== PredictionContext.EMPTY_FULL_STATE_KEY || next.configs.isOutermostConfigSet);
                    from.setContextTarget(context_2, next);
                    from = next;
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_17) throw e_17.error; }
            }
        }
        if (ParserATNSimulator.debug) {
            console.log("EDGE " + from + " -> " + to + " upon " + this.getTokenName(t));
        }
        this.setDFAEdge(from, t, to);
        if (ParserATNSimulator.debug) {
            console.log("DFA=\n" + dfa.toString(this._parser != null ? this._parser.vocabulary : VocabularyImpl.EMPTY_VOCABULARY, this._parser != null ? this._parser.ruleNames : undefined));
        }
        return to;
        var e_17, _c;
    };
    ParserATNSimulator.prototype.setDFAEdge = function (p, t, q) {
        if (p != null) {
            p.setTarget(t, q);
        }
    };
    /** See comment on LexerInterpreter.addDFAState. */
    ParserATNSimulator.prototype.addDFAContextState = function (dfa, configs, returnContext, contextCache) {
        if (returnContext !== PredictionContext.EMPTY_FULL_STATE_KEY) {
            var contextConfigs = new ATNConfigSet();
            try {
                for (var configs_10 = __values(configs), configs_10_1 = configs_10.next(); !configs_10_1.done; configs_10_1 = configs_10.next()) {
                    var config = configs_10_1.value;
                    contextConfigs.add(config.appendContext(returnContext, contextCache));
                }
            }
            catch (e_18_1) { e_18 = { error: e_18_1 }; }
            finally {
                try {
                    if (configs_10_1 && !configs_10_1.done && (_a = configs_10.return)) _a.call(configs_10);
                }
                finally { if (e_18) throw e_18.error; }
            }
            return this.addDFAState(dfa, contextConfigs, contextCache);
        }
        else {
            // assert(!configs.isOutermostConfigSet, "Shouldn't be adding a duplicate edge.");
            configs = configs.clone(true);
            configs.isOutermostConfigSet = true;
            return this.addDFAState(dfa, configs, contextCache);
        }
        var e_18, _a;
    };
    /** See comment on LexerInterpreter.addDFAState. */
    ParserATNSimulator.prototype.addDFAState = function (dfa, configs, contextCache) {
        var enableDfa = this.enable_global_context_dfa || !configs.isOutermostConfigSet;
        if (enableDfa) {
            if (!configs.isReadOnly) {
                configs.optimizeConfigs(this);
            }
            var proposed = this.createDFAState(dfa, configs);
            var existing = dfa.states.get(proposed);
            if (existing != null) {
                return existing;
            }
        }
        if (!configs.isReadOnly) {
            if (configs.conflictInfo == null) {
                configs.conflictInfo = this.isConflicted(configs, contextCache);
            }
        }
        var newState = this.createDFAState(dfa, configs.clone(true));
        // getDecisionState won't return undefined when we request a known valid decision
        var decisionState = this.atn.getDecisionState(dfa.decision);
        var predictedAlt = this.getUniqueAlt(configs);
        if (predictedAlt !== ATN.INVALID_ALT_NUMBER) {
            newState.acceptStateInfo = new AcceptStateInfo(predictedAlt);
        }
        else if (configs.conflictingAlts != null) {
            var conflictingAlts = configs.conflictingAlts;
            if (conflictingAlts) {
                newState.acceptStateInfo = new AcceptStateInfo(conflictingAlts.nextSetBit(0));
            }
        }
        if (newState.isAcceptState && configs.hasSemanticContext) {
            this.predicateDFAState(newState, configs, decisionState.numberOfTransitions);
        }
        if (!enableDfa) {
            return newState;
        }
        var added = dfa.addState(newState);
        if (ParserATNSimulator.debug && added === newState) {
            console.log("adding new DFA state: " + newState);
        }
        return added;
    };
    ParserATNSimulator.prototype.createDFAState = function (dfa, configs) {
        return new DFAState(configs);
    };
    ParserATNSimulator.prototype.reportAttemptingFullContext = function (dfa, conflictingAlts, conflictState, startIndex, stopIndex) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            var interval = Interval.of(startIndex, stopIndex);
            console.log("reportAttemptingFullContext decision=" + dfa.decision + ":" + conflictState.s0.configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            var listener = this._parser.getErrorListenerDispatch();
            if (listener.reportAttemptingFullContext) {
                listener.reportAttemptingFullContext(this._parser, dfa, startIndex, stopIndex, conflictingAlts, conflictState);
            }
        }
    };
    ParserATNSimulator.prototype.reportContextSensitivity = function (dfa, prediction, acceptState, startIndex, stopIndex) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            var interval = Interval.of(startIndex, stopIndex);
            console.log("reportContextSensitivity decision=" + dfa.decision + ":" + acceptState.s0.configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            var listener = this._parser.getErrorListenerDispatch();
            if (listener.reportContextSensitivity) {
                listener.reportContextSensitivity(this._parser, dfa, startIndex, stopIndex, prediction, acceptState);
            }
        }
    };
    /** If context sensitive parsing, we know it's ambiguity not conflict */
    ParserATNSimulator.prototype.reportAmbiguity = function (dfa, D, // the DFA state from execATN(): void that had SLL conflicts
    startIndex, stopIndex, exact, ambigAlts, configs) {
        if (ParserATNSimulator.debug || ParserATNSimulator.retry_debug) {
            var interval = Interval.of(startIndex, stopIndex);
            console.log("reportAmbiguity " +
                ambigAlts + ":" + configs +
                ", input=" + this._parser.inputStream.getText(interval));
        }
        if (this._parser != null) {
            var listener = this._parser.getErrorListenerDispatch();
            if (listener.reportAmbiguity) {
                listener.reportAmbiguity(this._parser, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
            }
        }
    };
    ParserATNSimulator.prototype.getReturnState = function (context) {
        if (context.isEmpty) {
            return PredictionContext.EMPTY_FULL_STATE_KEY;
        }
        var state = this.atn.states[context.invokingState];
        var transition = state.transition(0);
        return transition.followState.stateNumber;
    };
    ParserATNSimulator.prototype.skipTailCalls = function (context) {
        if (!this.optimize_tail_calls) {
            return context;
        }
        while (!context.isEmpty) {
            var state = this.atn.states[context.invokingState];
            // assert(state.numberOfTransitions === 1 && state.transition(0).serializationType === TransitionType.RULE);
            var transition = state.transition(0);
            if (!transition.tailCall) {
                break;
            }
            // This method requires that the root ancestor of the ParserRuleContext be empty. If we make it to this
            // line, we know the current node is not empty, which means it does have a parent.
            context = context.parent;
        }
        return context;
    };
    Object.defineProperty(ParserATNSimulator.prototype, "parser", {
        /**
         * @since 4.3
         */
        get: function () {
            return this._parser;
        },
        enumerable: true,
        configurable: true
    });
    ParserATNSimulator.debug = false;
    ParserATNSimulator.dfa_debug = false;
    ParserATNSimulator.retry_debug = false;
    ParserATNSimulator.STATE_ALT_SORT_COMPARATOR = function (o1, o2) {
        var diff = o1.state.nonStopStateNumber - o2.state.nonStopStateNumber;
        if (diff !== 0) {
            return diff;
        }
        diff = o1.alt - o2.alt;
        if (diff !== 0) {
            return diff;
        }
        return 0;
    };
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "predictionMode", void 0);
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "getPredictionMode", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "setPredictionMode", null);
    __decorate([
        Override
    ], ParserATNSimulator.prototype, "reset", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "adaptivePredict", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull)
    ], ParserATNSimulator.prototype, "getStartState", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(3, NotNull)
    ], ParserATNSimulator.prototype, "execDFA", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(3, NotNull)
    ], ParserATNSimulator.prototype, "execATN", null);
    __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ParserATNSimulator.prototype, "handleNoViableAlt", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "getExistingTargetState", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "computeTargetState", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "removeAllConfigsNotInRuleStopState", null);
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "computeStartState", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "applyPrecedenceFilter", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "getReachableTarget", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull)
    ], ParserATNSimulator.prototype, "getPredsForAmbigAlts", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "evalSemanticContext", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "evalSemanticContextImpl", null);
    __decorate([
        __param(1, NotNull),
        __param(4, Nullable)
    ], ParserATNSimulator.prototype, "closure", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, Nullable),
        __param(3, NotNull),
        __param(6, NotNull)
    ], ParserATNSimulator.prototype, "closureImpl", null);
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "getRuleName", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "getEpsilonTarget", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "actionTransition", null);
    __decorate([
        Nullable,
        __param(0, NotNull),
        __param(1, NotNull)
    ], ParserATNSimulator.prototype, "precedenceTransition", null);
    __decorate([
        Nullable,
        __param(0, NotNull),
        __param(1, NotNull)
    ], ParserATNSimulator.prototype, "predTransition", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull), __param(2, Nullable)
    ], ParserATNSimulator.prototype, "ruleTransition", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "isConflicted", null);
    __decorate([
        NotNull
    ], ParserATNSimulator.prototype, "getTokenName", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "dumpDeadEndConfigs", null);
    __decorate([
        NotNull,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull)
    ], ParserATNSimulator.prototype, "noViableAlt", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "getUniqueAlt", null);
    __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator.prototype, "configWithAltAtStopState", null);
    __decorate([
        NotNull,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(4, NotNull)
    ], ParserATNSimulator.prototype, "addDFAEdge", null);
    __decorate([
        __param(0, Nullable), __param(2, Nullable)
    ], ParserATNSimulator.prototype, "setDFAEdge", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "addDFAContextState", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "addDFAState", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParserATNSimulator.prototype, "createDFAState", null);
    __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ParserATNSimulator.prototype, "reportAttemptingFullContext", null);
    __decorate([
        __param(0, NotNull), __param(2, NotNull)
    ], ParserATNSimulator.prototype, "reportContextSensitivity", null);
    __decorate([
        __param(0, NotNull),
        __param(5, NotNull),
        __param(6, NotNull)
    ], ParserATNSimulator.prototype, "reportAmbiguity", null);
    ParserATNSimulator = __decorate([
        __param(0, NotNull)
    ], ParserATNSimulator);
    return ParserATNSimulator;
}(ATNSimulator));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** Start of `(A|B|...)+` loop. Technically a decision state, but
 *  we don't use for code generation; somebody might need it, so I'm defining
 *  it for completeness. In reality, the {@link PlusLoopbackState} node is the
 *  real decision-making note for `A+`.
 */
var PlusBlockStartState = /** @class */ (function (_super) {
    __extends(PlusBlockStartState, _super);
    function PlusBlockStartState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PlusBlockStartState.prototype, "stateType", {
        get: function () {
            return ATNStateType.PLUS_BLOCK_START;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], PlusBlockStartState.prototype, "stateType", null);
    return PlusBlockStartState;
}(BlockStartState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** Decision state for `A+` and `(A|B)+`.  It has two transitions:
 *  one to the loop back to start of the block and one to exit.
 */
var PlusLoopbackState = /** @class */ (function (_super) {
    __extends(PlusLoopbackState, _super);
    function PlusLoopbackState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PlusLoopbackState.prototype, "stateType", {
        get: function () {
            return ATNStateType.PLUS_LOOP_BACK;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], PlusLoopbackState.prototype, "stateType", null);
    return PlusLoopbackState;
}(DecisionState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var PrecedencePredicateTransition = /** @class */ (function (_super) {
    __extends(PrecedencePredicateTransition, _super);
    function PrecedencePredicateTransition(target, precedence) {
        var _this = _super.call(this, target) || this;
        _this.precedence = precedence;
        return _this;
    }
    Object.defineProperty(PrecedencePredicateTransition.prototype, "serializationType", {
        get: function () {
            return 10 /* PRECEDENCE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrecedencePredicateTransition.prototype, "isEpsilon", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    PrecedencePredicateTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    };
    Object.defineProperty(PrecedencePredicateTransition.prototype, "predicate", {
        get: function () {
            return new SemanticContext.PrecedencePredicate(this.precedence);
        },
        enumerable: true,
        configurable: true
    });
    PrecedencePredicateTransition.prototype.toString = function () {
        return this.precedence + " >= _p";
    };
    __decorate([
        Override
    ], PrecedencePredicateTransition.prototype, "serializationType", null);
    __decorate([
        Override
    ], PrecedencePredicateTransition.prototype, "isEpsilon", null);
    __decorate([
        Override
    ], PrecedencePredicateTransition.prototype, "matches", null);
    __decorate([
        Override
    ], PrecedencePredicateTransition.prototype, "toString", null);
    PrecedencePredicateTransition = __decorate([
        __param(0, NotNull)
    ], PrecedencePredicateTransition);
    return PrecedencePredicateTransition;
}(AbstractPredicateTransition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var RangeTransition = /** @class */ (function (_super) {
    __extends(RangeTransition, _super);
    function RangeTransition(target, from, to) {
        var _this = _super.call(this, target) || this;
        _this.from = from;
        _this.to = to;
        return _this;
    }
    Object.defineProperty(RangeTransition.prototype, "serializationType", {
        get: function () {
            return 2 /* RANGE */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeTransition.prototype, "label", {
        get: function () {
            return IntervalSet.of(this.from, this.to);
        },
        enumerable: true,
        configurable: true
    });
    RangeTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= this.from && symbol <= this.to;
    };
    RangeTransition.prototype.toString = function () {
        return "'" + String.fromCharCode(this.from) + "'..'" + String.fromCharCode(this.to) + "'";
    };
    __decorate([
        Override
    ], RangeTransition.prototype, "serializationType", null);
    __decorate([
        Override,
        NotNull
    ], RangeTransition.prototype, "label", null);
    __decorate([
        Override
    ], RangeTransition.prototype, "matches", null);
    __decorate([
        Override,
        NotNull
    ], RangeTransition.prototype, "toString", null);
    RangeTransition = __decorate([
        __param(0, NotNull)
    ], RangeTransition);
    return RangeTransition;
}(Transition));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var RuleStartState = /** @class */ (function (_super) {
    __extends(RuleStartState, _super);
    function RuleStartState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPrecedenceRule = false;
        _this.leftFactored = false;
        return _this;
    }
    Object.defineProperty(RuleStartState.prototype, "stateType", {
        get: function () {
            return ATNStateType.RULE_START;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], RuleStartState.prototype, "stateType", null);
    return RuleStartState;
}(ATNState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** The block that begins a closure loop. */
var StarBlockStartState = /** @class */ (function (_super) {
    __extends(StarBlockStartState, _super);
    function StarBlockStartState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StarBlockStartState.prototype, "stateType", {
        get: function () {
            return ATNStateType.STAR_BLOCK_START;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], StarBlockStartState.prototype, "stateType", null);
    return StarBlockStartState;
}(BlockStartState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var StarLoopbackState = /** @class */ (function (_super) {
    __extends(StarLoopbackState, _super);
    function StarLoopbackState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StarLoopbackState.prototype, "loopEntryState", {
        get: function () {
            return this.transition(0).target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarLoopbackState.prototype, "stateType", {
        get: function () {
            return ATNStateType.STAR_LOOP_BACK;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], StarLoopbackState.prototype, "stateType", null);
    return StarLoopbackState;
}(ATNState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** The Tokens rule start state linking to each lexer rule start state */
var TokensStartState = /** @class */ (function (_super) {
    __extends(TokensStartState, _super);
    function TokensStartState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TokensStartState.prototype, "stateType", {
        get: function () {
            return ATNStateType.TOKEN_START;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], TokensStartState.prototype, "stateType", null);
    return TokensStartState;
}(DecisionState));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var UUID = /** @class */ (function () {
    function UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits) {
        this.data = new Uint32Array(4);
        this.data[0] = mostSigBits;
        this.data[1] = moreSigBits;
        this.data[2] = lessSigBits;
        this.data[3] = leastSigBits;
    }
    UUID.fromString = function (data) {
        if (!/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(data)) {
            throw new Error("Incorrectly formatted UUID");
        }
        var segments = data.split("-");
        var mostSigBits = parseInt(segments[0], 16);
        var moreSigBits = ((parseInt(segments[1], 16) << 16) >>> 0) + parseInt(segments[2], 16);
        var lessSigBits = ((parseInt(segments[3], 16) << 16) >>> 0) + parseInt(segments[4].substr(0, 4), 16);
        var leastSigBits = parseInt(segments[4].substr(-8), 16);
        return new UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits);
    };
    UUID.prototype.hashCode = function () {
        return MurmurHash.hashCode([this.data[0], this.data[1], this.data[2], this.data[3]]);
    };
    UUID.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof UUID)) {
            return false;
        }
        return this.data[0] === obj.data[0]
            && this.data[1] === obj.data[1]
            && this.data[2] === obj.data[2]
            && this.data[3] === obj.data[3];
    };
    UUID.prototype.toString = function () {
        return ("00000000" + this.data[0].toString(16)).substr(-8)
            + "-" + ("0000" + (this.data[1] >>> 16).toString(16)).substr(-4)
            + "-" + ("0000" + this.data[1].toString(16)).substr(-4)
            + "-" + ("0000" + (this.data[2] >>> 16).toString(16)).substr(-4)
            + "-" + ("0000" + this.data[2].toString(16)).substr(-4)
            + ("00000000" + this.data[3].toString(16)).substr(-8);
    };
    return UUID;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
var ATNDeserializer = /** @class */ (function () {
    function ATNDeserializer(deserializationOptions) {
        if (deserializationOptions == null) {
            deserializationOptions = ATNDeserializationOptions.defaultOptions;
        }
        this.deserializationOptions = deserializationOptions;
    }
    Object.defineProperty(ATNDeserializer, "SERIALIZED_VERSION", {
        get: function () {
            /* This value should never change. Updates following this version are
             * reflected as change in the unique ID SERIALIZED_UUID.
             */
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines if a particular serialized representation of an ATN supports
     * a particular feature, identified by the {@link UUID} used for serializing
     * the ATN at the time the feature was first introduced.
     *
     * @param feature The {@link UUID} marking the first time the feature was
     * supported in the serialized ATN.
     * @param actualUuid The {@link UUID} of the actual serialized ATN which is
     * currently being deserialized.
     * @returns `true` if the `actualUuid` value represents a
     * serialized ATN at or after the feature identified by `feature` was
     * introduced; otherwise, `false`.
     */
    ATNDeserializer.prototype.isFeatureSupported = function (feature, actualUuid) {
        var featureIndex = ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(feature); });
        if (featureIndex < 0) {
            return false;
        }
        return ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(actualUuid); }) >= featureIndex;
    };
    ATNDeserializer.prototype.deserialize = function (data) {
        data = data.slice(0);
        // Each Uint16 value in data is shifted by +2 at the entry to this method. This is an encoding optimization
        // targeting the serialized values 0 and -1 (serialized to 0xFFFF), each of which are very common in the
        // serialized form of the ATN. In the modified UTF-8 that Java uses for compiled string literals, these two
        // character values have multi-byte forms. By shifting each value by +2, they become characters 2 and 1 prior to
        // writing the string, each of which have single-byte representations. Since the shift occurs in the tool during
        // ATN serialization, each target is responsible for adjusting the values during deserialization.
        //
        // As a special case, note that the first element of data is not adjusted because it contains the major version
        // number of the serialized ATN, which was fixed at 3 at the time the value shifting was implemented.
        for (var i = 1; i < data.length; i++) {
            data[i] = (data[i] - 2) & 0xFFFF;
        }
        var p = 0;
        var version = ATNDeserializer.toInt(data[p++]);
        if (version !== ATNDeserializer.SERIALIZED_VERSION) {
            var reason = "Could not deserialize ATN with version " + version + " (expected " + ATNDeserializer.SERIALIZED_VERSION + ").";
            throw new Error(reason);
        }
        var uuid = ATNDeserializer.toUUID(data, p);
        p += 8;
        if (ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(uuid); }) < 0) {
            var reason = "Could not deserialize ATN with UUID " + uuid + " (expected " + ATNDeserializer.SERIALIZED_UUID + " or a legacy UUID).";
            throw new Error(reason);
        }
        var supportsLexerActions = this.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid);
        var grammarType = ATNDeserializer.toInt(data[p++]);
        var maxTokenType = ATNDeserializer.toInt(data[p++]);
        var atn = new ATN(grammarType, maxTokenType);
        //
        // STATES
        //
        var loopBackStateNumbers = [];
        var endStateNumbers = [];
        var nstates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nstates; i++) {
            var stype = ATNDeserializer.toInt(data[p++]);
            // ignore bad type of states
            if (stype === ATNStateType.INVALID_TYPE) {
                atn.addState(new InvalidState());
                continue;
            }
            var ruleIndex = ATNDeserializer.toInt(data[p++]);
            if (ruleIndex === 0xFFFF) {
                ruleIndex = -1;
            }
            var s = this.stateFactory(stype, ruleIndex);
            if (stype === ATNStateType.LOOP_END) { // special case
                var loopBackStateNumber = ATNDeserializer.toInt(data[p++]);
                loopBackStateNumbers.push([s, loopBackStateNumber]);
            }
            else if (s instanceof BlockStartState) {
                var endStateNumber = ATNDeserializer.toInt(data[p++]);
                endStateNumbers.push([s, endStateNumber]);
            }
            atn.addState(s);
        }
        try {
            // delay the assignment of loop back and end states until we know all the state instances have been initialized
            for (var loopBackStateNumbers_1 = __values(loopBackStateNumbers), loopBackStateNumbers_1_1 = loopBackStateNumbers_1.next(); !loopBackStateNumbers_1_1.done; loopBackStateNumbers_1_1 = loopBackStateNumbers_1.next()) {
                var pair = loopBackStateNumbers_1_1.value;
                pair[0].loopBackState = atn.states[pair[1]];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (loopBackStateNumbers_1_1 && !loopBackStateNumbers_1_1.done && (_a = loopBackStateNumbers_1.return)) _a.call(loopBackStateNumbers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var endStateNumbers_1 = __values(endStateNumbers), endStateNumbers_1_1 = endStateNumbers_1.next(); !endStateNumbers_1_1.done; endStateNumbers_1_1 = endStateNumbers_1.next()) {
                var pair = endStateNumbers_1_1.value;
                pair[0].endState = atn.states[pair[1]];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (endStateNumbers_1_1 && !endStateNumbers_1_1.done && (_b = endStateNumbers_1.return)) _b.call(endStateNumbers_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var numNonGreedyStates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numNonGreedyStates; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].nonGreedy = true;
        }
        var numSllDecisions = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numSllDecisions; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].sll = true;
        }
        var numPrecedenceStates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numPrecedenceStates; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].isPrecedenceRule = true;
        }
        //
        // RULES
        //
        var nrules = ATNDeserializer.toInt(data[p++]);
        if (atn.grammarType === 0 /* LEXER */) {
            atn.ruleToTokenType = new Int32Array(nrules);
        }
        atn.ruleToStartState = new Array(nrules);
        for (var i = 0; i < nrules; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            var startState = atn.states[s];
            startState.leftFactored = ATNDeserializer.toInt(data[p++]) !== 0;
            atn.ruleToStartState[i] = startState;
            if (atn.grammarType === 0 /* LEXER */) {
                var tokenType = ATNDeserializer.toInt(data[p++]);
                if (tokenType === 0xFFFF) {
                    tokenType = exports.Token.EOF;
                }
                atn.ruleToTokenType[i] = tokenType;
                if (!this.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid)) {
                    // this piece of unused metadata was serialized prior to the
                    // addition of LexerAction
                    var actionIndexIgnored = ATNDeserializer.toInt(data[p++]);
                    if (actionIndexIgnored === 0xFFFF) {
                        actionIndexIgnored = -1;
                    }
                }
            }
        }
        atn.ruleToStopState = new Array(nrules);
        try {
            for (var _c = __values(atn.states), _d = _c.next(); !_d.done; _d = _c.next()) {
                var state = _d.value;
                if (!(state instanceof RuleStopState)) {
                    continue;
                }
                atn.ruleToStopState[state.ruleIndex] = state;
                atn.ruleToStartState[state.ruleIndex].stopState = state;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        //
        // MODES
        //
        var nmodes = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nmodes; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            atn.modeToStartState.push(atn.states[s]);
        }
        atn.modeToDFA = new Array(nmodes);
        for (var i = 0; i < nmodes; i++) {
            atn.modeToDFA[i] = new DFA(atn.modeToStartState[i]);
        }
        //
        // SETS
        //
        var sets = [];
        p = this.readSets(data, p, sets, false);
        // Next, if the ATN was serialized with the Unicode SMP feature,
        // deserialize sets with 32-bit arguments <= U+10FFFF.
        if (this.isFeatureSupported(ATNDeserializer.ADDED_UNICODE_SMP, uuid)) {
            p = this.readSets(data, p, sets, true);
        }
        //
        // EDGES
        //
        var nedges = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nedges; i++) {
            var src = ATNDeserializer.toInt(data[p]);
            var trg = ATNDeserializer.toInt(data[p + 1]);
            var ttype = ATNDeserializer.toInt(data[p + 2]);
            var arg1 = ATNDeserializer.toInt(data[p + 3]);
            var arg2 = ATNDeserializer.toInt(data[p + 4]);
            var arg3 = ATNDeserializer.toInt(data[p + 5]);
            var trans = this.edgeFactory(atn, ttype, src, trg, arg1, arg2, arg3, sets);
            // console.log(`EDGE ${trans.constructor.name} ${src}->${trg} ${Transition.serializationNames[ttype]} ${arg1},${arg2},${arg3}`);
            var srcState = atn.states[src];
            srcState.addTransition(trans);
            p += 6;
        }
        var returnTransitionsSet = new Array2DHashSet({
            hashCode: function (o) { return o.stopState ^ o.returnState ^ o.outermostPrecedenceReturn; },
            equals: function (a, b) {
                return a.stopState === b.stopState
                    && a.returnState === b.returnState
                    && a.outermostPrecedenceReturn === b.outermostPrecedenceReturn;
            },
        });
        var returnTransitions = [];
        try {
            for (var _f = __values(atn.states), _g = _f.next(); !_g.done; _g = _f.next()) {
                var state = _g.value;
                var returningToLeftFactored = state.ruleIndex >= 0 && atn.ruleToStartState[state.ruleIndex].leftFactored;
                for (var i = 0; i < state.numberOfTransitions; i++) {
                    var t = state.transition(i);
                    if (!(t instanceof RuleTransition)) {
                        continue;
                    }
                    var ruleTransition = t;
                    var returningFromLeftFactored = atn.ruleToStartState[ruleTransition.target.ruleIndex].leftFactored;
                    if (!returningFromLeftFactored && returningToLeftFactored) {
                        continue;
                    }
                    var outermostPrecedenceReturn = -1;
                    if (atn.ruleToStartState[ruleTransition.target.ruleIndex].isPrecedenceRule) {
                        if (ruleTransition.precedence === 0) {
                            outermostPrecedenceReturn = ruleTransition.target.ruleIndex;
                        }
                    }
                    var current = { stopState: ruleTransition.target.ruleIndex, returnState: ruleTransition.followState.stateNumber, outermostPrecedenceReturn: outermostPrecedenceReturn };
                    if (returnTransitionsSet.add(current)) {
                        returnTransitions.push(current);
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_h = _f.return)) _h.call(_f);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            // Add all elements from returnTransitions to the ATN
            for (var returnTransitions_1 = __values(returnTransitions), returnTransitions_1_1 = returnTransitions_1.next(); !returnTransitions_1_1.done; returnTransitions_1_1 = returnTransitions_1.next()) {
                var returnTransition = returnTransitions_1_1.value;
                var transition = new EpsilonTransition(atn.states[returnTransition.returnState], returnTransition.outermostPrecedenceReturn);
                atn.ruleToStopState[returnTransition.stopState].addTransition(transition);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (returnTransitions_1_1 && !returnTransitions_1_1.done && (_j = returnTransitions_1.return)) _j.call(returnTransitions_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var _k = __values(atn.states), _l = _k.next(); !_l.done; _l = _k.next()) {
                var state = _l.value;
                if (state instanceof BlockStartState) {
                    // we need to know the end state to set its start state
                    if (state.endState == null) {
                        throw new Error("IllegalStateException");
                    }
                    // block end states can only be associated to a single block start state
                    if (state.endState.startState != null) {
                        throw new Error("IllegalStateException");
                    }
                    state.endState.startState = state;
                }
                if (state instanceof PlusLoopbackState) {
                    var loopbackState = state;
                    for (var i = 0; i < loopbackState.numberOfTransitions; i++) {
                        var target = loopbackState.transition(i).target;
                        if (target instanceof PlusBlockStartState) {
                            target.loopBackState = loopbackState;
                        }
                    }
                }
                else if (state instanceof StarLoopbackState) {
                    var loopbackState = state;
                    for (var i = 0; i < loopbackState.numberOfTransitions; i++) {
                        var target = loopbackState.transition(i).target;
                        if (target instanceof StarLoopEntryState) {
                            target.loopBackState = loopbackState;
                        }
                    }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_l && !_l.done && (_m = _k.return)) _m.call(_k);
            }
            finally { if (e_6) throw e_6.error; }
        }
        //
        // DECISIONS
        //
        var ndecisions = ATNDeserializer.toInt(data[p++]);
        for (var i = 1; i <= ndecisions; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            var decState = atn.states[s];
            atn.decisionToState.push(decState);
            decState.decision = i - 1;
        }
        //
        // LEXER ACTIONS
        //
        if (atn.grammarType === 0 /* LEXER */) {
            if (supportsLexerActions) {
                atn.lexerActions = new Array(ATNDeserializer.toInt(data[p++]));
                for (var i = 0; i < atn.lexerActions.length; i++) {
                    var actionType = ATNDeserializer.toInt(data[p++]);
                    var data1 = ATNDeserializer.toInt(data[p++]);
                    if (data1 === 0xFFFF) {
                        data1 = -1;
                    }
                    var data2 = ATNDeserializer.toInt(data[p++]);
                    if (data2 === 0xFFFF) {
                        data2 = -1;
                    }
                    var lexerAction = this.lexerActionFactory(actionType, data1, data2);
                    atn.lexerActions[i] = lexerAction;
                }
            }
            else {
                // for compatibility with older serialized ATNs, convert the old
                // serialized action index for action transitions to the new
                // form, which is the index of a LexerCustomAction
                var legacyLexerActions = [];
                try {
                    for (var _o = __values(atn.states), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var state = _p.value;
                        for (var i = 0; i < state.numberOfTransitions; i++) {
                            var transition = state.transition(i);
                            if (!(transition instanceof ActionTransition)) {
                                continue;
                            }
                            var ruleIndex = transition.ruleIndex;
                            var actionIndex = transition.actionIndex;
                            var lexerAction = new LexerCustomAction(ruleIndex, actionIndex);
                            state.setTransition(i, new ActionTransition(transition.target, ruleIndex, legacyLexerActions.length, false));
                            legacyLexerActions.push(lexerAction);
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_q = _o.return)) _q.call(_o);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                atn.lexerActions = legacyLexerActions;
            }
        }
        this.markPrecedenceDecisions(atn);
        atn.decisionToDFA = new Array(ndecisions);
        for (var i = 0; i < ndecisions; i++) {
            atn.decisionToDFA[i] = new DFA(atn.decisionToState[i], i);
        }
        if (this.deserializationOptions.isVerifyATN) {
            this.verifyATN(atn);
        }
        if (this.deserializationOptions.isGenerateRuleBypassTransitions && atn.grammarType === 1 /* PARSER */) {
            atn.ruleToTokenType = new Int32Array(atn.ruleToStartState.length);
            for (var i = 0; i < atn.ruleToStartState.length; i++) {
                atn.ruleToTokenType[i] = atn.maxTokenType + i + 1;
            }
            for (var i = 0; i < atn.ruleToStartState.length; i++) {
                var bypassStart = new BasicBlockStartState();
                bypassStart.ruleIndex = i;
                atn.addState(bypassStart);
                var bypassStop = new BlockEndState();
                bypassStop.ruleIndex = i;
                atn.addState(bypassStop);
                bypassStart.endState = bypassStop;
                atn.defineDecisionState(bypassStart);
                bypassStop.startState = bypassStart;
                var endState = void 0;
                var excludeTransition = void 0;
                if (atn.ruleToStartState[i].isPrecedenceRule) {
                    // wrap from the beginning of the rule to the StarLoopEntryState
                    endState = undefined;
                    try {
                        for (var _r = __values(atn.states), _s = _r.next(); !_s.done; _s = _r.next()) {
                            var state = _s.value;
                            if (state.ruleIndex !== i) {
                                continue;
                            }
                            if (!(state instanceof StarLoopEntryState)) {
                                continue;
                            }
                            var maybeLoopEndState = state.transition(state.numberOfTransitions - 1).target;
                            if (!(maybeLoopEndState instanceof LoopEndState)) {
                                continue;
                            }
                            if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transition(0).target instanceof RuleStopState) {
                                endState = state;
                                break;
                            }
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (_s && !_s.done && (_t = _r.return)) _t.call(_r);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                    if (!endState) {
                        throw new Error("Couldn't identify final state of the precedence rule prefix section.");
                    }
                    excludeTransition = endState.loopBackState.transition(0);
                }
                else {
                    endState = atn.ruleToStopState[i];
                }
                try {
                    // all non-excluded transitions that currently target end state need to target blockEnd instead
                    for (var _u = __values(atn.states), _v = _u.next(); !_v.done; _v = _u.next()) {
                        var state = _v.value;
                        for (var i_1 = 0; i_1 < state.numberOfTransitions; i_1++) {
                            var transition = state.transition(i_1);
                            if (transition === excludeTransition) {
                                continue;
                            }
                            if (transition.target === endState) {
                                transition.target = bypassStop;
                            }
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_v && !_v.done && (_w = _u.return)) _w.call(_u);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                // all transitions leaving the rule start state need to leave blockStart instead
                while (atn.ruleToStartState[i].numberOfTransitions > 0) {
                    var transition = atn.ruleToStartState[i].removeTransition(atn.ruleToStartState[i].numberOfTransitions - 1);
                    bypassStart.addTransition(transition);
                }
                // link the new states
                atn.ruleToStartState[i].addTransition(new EpsilonTransition(bypassStart));
                bypassStop.addTransition(new EpsilonTransition(endState));
                var matchState = new BasicState();
                atn.addState(matchState);
                matchState.addTransition(new AtomTransition(bypassStop, atn.ruleToTokenType[i]));
                bypassStart.addTransition(new EpsilonTransition(matchState));
            }
            if (this.deserializationOptions.isVerifyATN) {
                // reverify after modification
                this.verifyATN(atn);
            }
        }
        if (this.deserializationOptions.isOptimize) {
            while (true) {
                var optimizationCount = 0;
                optimizationCount += ATNDeserializer.inlineSetRules(atn);
                optimizationCount += ATNDeserializer.combineChainedEpsilons(atn);
                var preserveOrder = atn.grammarType === 0 /* LEXER */;
                optimizationCount += ATNDeserializer.optimizeSets(atn, preserveOrder);
                if (optimizationCount === 0) {
                    break;
                }
            }
            if (this.deserializationOptions.isVerifyATN) {
                // reverify after modification
                this.verifyATN(atn);
            }
        }
        ATNDeserializer.identifyTailCalls(atn);
        return atn;
        var e_1, _a, e_2, _b, e_3, _e, e_4, _h, e_5, _j, e_6, _m, e_7, _q, e_8, _t, e_9, _w;
    };
    ATNDeserializer.prototype.readSets = function (data, p, sets, read32) {
        var nsets = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nsets; i++) {
            var nintervals = ATNDeserializer.toInt(data[p]);
            p++;
            var set = new IntervalSet();
            sets.push(set);
            var containsEof = ATNDeserializer.toInt(data[p++]) !== 0;
            if (containsEof) {
                set.add(-1);
            }
            if (read32) {
                for (var j = 0; j < nintervals; j++) {
                    set.add(ATNDeserializer.toInt32(data, p), ATNDeserializer.toInt32(data, p + 2));
                    p += 4;
                }
            }
            else {
                for (var j = 0; j < nintervals; j++) {
                    set.add(ATNDeserializer.toInt(data[p]), ATNDeserializer.toInt(data[p + 1]));
                    p += 2;
                }
            }
        }
        return p;
    };
    /**
     * Analyze the {@link StarLoopEntryState} states in the specified ATN to set
     * the {@link StarLoopEntryState#precedenceRuleDecision} field to the
     * correct value.
     *
     * @param atn The ATN.
     */
    ATNDeserializer.prototype.markPrecedenceDecisions = function (atn) {
        // Map rule index -> precedence decision for that rule
        var rulePrecedenceDecisions = new Map();
        try {
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                if (!(state instanceof StarLoopEntryState)) {
                    continue;
                }
                /* We analyze the ATN to determine if this ATN decision state is the
                 * decision for the closure block that determines whether a
                 * precedence rule should continue or complete.
                 */
                if (atn.ruleToStartState[state.ruleIndex].isPrecedenceRule) {
                    var maybeLoopEndState = state.transition(state.numberOfTransitions - 1).target;
                    if (maybeLoopEndState instanceof LoopEndState) {
                        if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transition(0).target instanceof RuleStopState) {
                            rulePrecedenceDecisions.set(state.ruleIndex, state);
                            state.precedenceRuleDecision = true;
                            state.precedenceLoopbackStates = new BitSet(atn.states.length);
                        }
                    }
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_10) throw e_10.error; }
        }
        try {
            // After marking precedence decisions, we go back through and fill in
            // StarLoopEntryState.precedenceLoopbackStates.
            for (var rulePrecedenceDecisions_1 = __values(rulePrecedenceDecisions), rulePrecedenceDecisions_1_1 = rulePrecedenceDecisions_1.next(); !rulePrecedenceDecisions_1_1.done; rulePrecedenceDecisions_1_1 = rulePrecedenceDecisions_1.next()) {
                var precedenceDecision = rulePrecedenceDecisions_1_1.value;
                try {
                    for (var _d = __values(atn.ruleToStopState[precedenceDecision[0]].getTransitions()), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var transition = _e.value;
                        if (transition.serializationType !== 1 /* EPSILON */) {
                            continue;
                        }
                        var epsilonTransition = transition;
                        if (epsilonTransition.outermostPrecedenceReturn !== -1) {
                            continue;
                        }
                        precedenceDecision[1].precedenceLoopbackStates.set(transition.target.stateNumber);
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (rulePrecedenceDecisions_1_1 && !rulePrecedenceDecisions_1_1.done && (_g = rulePrecedenceDecisions_1.return)) _g.call(rulePrecedenceDecisions_1);
            }
            finally { if (e_12) throw e_12.error; }
        }
        var e_10, _c, e_12, _g, e_11, _f;
    };
    ATNDeserializer.prototype.verifyATN = function (atn) {
        try {
            // verify assumptions
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                this.checkCondition(state != null, "ATN states should not be null.");
                if (state.stateType === ATNStateType.INVALID_TYPE) {
                    continue;
                }
                this.checkCondition(state.onlyHasEpsilonTransitions || state.numberOfTransitions <= 1);
                if (state instanceof PlusBlockStartState) {
                    this.checkCondition(state.loopBackState != null);
                }
                if (state instanceof StarLoopEntryState) {
                    var starLoopEntryState = state;
                    this.checkCondition(starLoopEntryState.loopBackState != null);
                    this.checkCondition(starLoopEntryState.numberOfTransitions === 2);
                    if (starLoopEntryState.transition(0).target instanceof StarBlockStartState) {
                        this.checkCondition(starLoopEntryState.transition(1).target instanceof LoopEndState);
                        this.checkCondition(!starLoopEntryState.nonGreedy);
                    }
                    else if (starLoopEntryState.transition(0).target instanceof LoopEndState) {
                        this.checkCondition(starLoopEntryState.transition(1).target instanceof StarBlockStartState);
                        this.checkCondition(starLoopEntryState.nonGreedy);
                    }
                    else {
                        throw new Error("IllegalStateException");
                    }
                }
                if (state instanceof StarLoopbackState) {
                    this.checkCondition(state.numberOfTransitions === 1);
                    this.checkCondition(state.transition(0).target instanceof StarLoopEntryState);
                }
                if (state instanceof LoopEndState) {
                    this.checkCondition(state.loopBackState != null);
                }
                if (state instanceof RuleStartState) {
                    this.checkCondition(state.stopState != null);
                }
                if (state instanceof BlockStartState) {
                    this.checkCondition(state.endState != null);
                }
                if (state instanceof BlockEndState) {
                    this.checkCondition(state.startState != null);
                }
                if (state instanceof DecisionState) {
                    var decisionState = state;
                    this.checkCondition(decisionState.numberOfTransitions <= 1 || decisionState.decision >= 0);
                }
                else {
                    this.checkCondition(state.numberOfTransitions <= 1 || state instanceof RuleStopState);
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_13) throw e_13.error; }
        }
        var e_13, _c;
    };
    ATNDeserializer.prototype.checkCondition = function (condition, message) {
        if (!condition) {
            throw new Error("IllegalStateException: " + message);
        }
    };
    ATNDeserializer.inlineSetRules = function (atn) {
        var inlinedCalls = 0;
        var ruleToInlineTransition = new Array(atn.ruleToStartState.length);
        for (var i = 0; i < atn.ruleToStartState.length; i++) {
            var startState = atn.ruleToStartState[i];
            var middleState = startState;
            while (middleState.onlyHasEpsilonTransitions
                && middleState.numberOfOptimizedTransitions === 1
                && middleState.getOptimizedTransition(0).serializationType === 1 /* EPSILON */) {
                middleState = middleState.getOptimizedTransition(0).target;
            }
            if (middleState.numberOfOptimizedTransitions !== 1) {
                continue;
            }
            var matchTransition = middleState.getOptimizedTransition(0);
            var matchTarget = matchTransition.target;
            if (matchTransition.isEpsilon
                || !matchTarget.onlyHasEpsilonTransitions
                || matchTarget.numberOfOptimizedTransitions !== 1
                || !(matchTarget.getOptimizedTransition(0).target instanceof RuleStopState)) {
                continue;
            }
            switch (matchTransition.serializationType) {
                case 5 /* ATOM */:
                case 2 /* RANGE */:
                case 7 /* SET */:
                    ruleToInlineTransition[i] = matchTransition;
                    break;
                case 8 /* NOT_SET */:
                case 9 /* WILDCARD */:
                    // not implemented yet
                    continue;
                default:
                    continue;
            }
        }
        try {
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                if (state.ruleIndex < 0) {
                    continue;
                }
                var optimizedTransitions = void 0;
                for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                    var transition = state.getOptimizedTransition(i);
                    if (!(transition instanceof RuleTransition)) {
                        if (optimizedTransitions != null) {
                            optimizedTransitions.push(transition);
                        }
                        continue;
                    }
                    var ruleTransition = transition;
                    var effective = ruleToInlineTransition[ruleTransition.target.ruleIndex];
                    if (effective == null) {
                        if (optimizedTransitions != null) {
                            optimizedTransitions.push(transition);
                        }
                        continue;
                    }
                    if (optimizedTransitions == null) {
                        optimizedTransitions = [];
                        for (var j = 0; j < i; j++) {
                            optimizedTransitions.push(state.getOptimizedTransition(i));
                        }
                    }
                    inlinedCalls++;
                    var target = ruleTransition.followState;
                    var intermediateState = new BasicState();
                    intermediateState.setRuleIndex(target.ruleIndex);
                    atn.addState(intermediateState);
                    optimizedTransitions.push(new EpsilonTransition(intermediateState));
                    switch (effective.serializationType) {
                        case 5 /* ATOM */:
                            intermediateState.addTransition(new AtomTransition(target, effective._label));
                            break;
                        case 2 /* RANGE */:
                            intermediateState.addTransition(new RangeTransition(target, effective.from, effective.to));
                            break;
                        case 7 /* SET */:
                            intermediateState.addTransition(new SetTransition(target, effective.label));
                            break;
                        default:
                            throw new Error("UnsupportedOperationException");
                    }
                }
                if (optimizedTransitions != null) {
                    if (state.isOptimized) {
                        while (state.numberOfOptimizedTransitions > 0) {
                            state.removeOptimizedTransition(state.numberOfOptimizedTransitions - 1);
                        }
                    }
                    try {
                        for (var optimizedTransitions_1 = __values(optimizedTransitions), optimizedTransitions_1_1 = optimizedTransitions_1.next(); !optimizedTransitions_1_1.done; optimizedTransitions_1_1 = optimizedTransitions_1.next()) {
                            var transition = optimizedTransitions_1_1.value;
                            state.addOptimizedTransition(transition);
                        }
                    }
                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                    finally {
                        try {
                            if (optimizedTransitions_1_1 && !optimizedTransitions_1_1.done && (_c = optimizedTransitions_1.return)) _c.call(optimizedTransitions_1);
                        }
                        finally { if (e_14) throw e_14.error; }
                    }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_15) throw e_15.error; }
        }
        if (ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + inlinedCalls + " rule invocations by inlining sets.");
        }
        return inlinedCalls;
        var e_15, _d, e_14, _c;
    };
    ATNDeserializer.combineChainedEpsilons = function (atn) {
        var removedEdges = 0;
        try {
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                if (!state.onlyHasEpsilonTransitions || state instanceof RuleStopState) {
                    continue;
                }
                var optimizedTransitions = void 0;
                nextTransition: for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                    var transition = state.getOptimizedTransition(i);
                    var intermediate = transition.target;
                    if (transition.serializationType !== 1 /* EPSILON */
                        || transition.outermostPrecedenceReturn !== -1
                        || intermediate.stateType !== ATNStateType.BASIC
                        || !intermediate.onlyHasEpsilonTransitions) {
                        if (optimizedTransitions != null) {
                            optimizedTransitions.push(transition);
                        }
                        continue nextTransition;
                    }
                    for (var j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
                        if (intermediate.getOptimizedTransition(j).serializationType !== 1 /* EPSILON */
                            || intermediate.getOptimizedTransition(j).outermostPrecedenceReturn !== -1) {
                            if (optimizedTransitions != null) {
                                optimizedTransitions.push(transition);
                            }
                            continue nextTransition;
                        }
                    }
                    removedEdges++;
                    if (optimizedTransitions == null) {
                        optimizedTransitions = [];
                        for (var j = 0; j < i; j++) {
                            optimizedTransitions.push(state.getOptimizedTransition(j));
                        }
                    }
                    for (var j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
                        var target = intermediate.getOptimizedTransition(j).target;
                        optimizedTransitions.push(new EpsilonTransition(target));
                    }
                }
                if (optimizedTransitions != null) {
                    if (state.isOptimized) {
                        while (state.numberOfOptimizedTransitions > 0) {
                            state.removeOptimizedTransition(state.numberOfOptimizedTransitions - 1);
                        }
                    }
                    try {
                        for (var optimizedTransitions_2 = __values(optimizedTransitions), optimizedTransitions_2_1 = optimizedTransitions_2.next(); !optimizedTransitions_2_1.done; optimizedTransitions_2_1 = optimizedTransitions_2.next()) {
                            var transition = optimizedTransitions_2_1.value;
                            state.addOptimizedTransition(transition);
                        }
                    }
                    catch (e_16_1) { e_16 = { error: e_16_1 }; }
                    finally {
                        try {
                            if (optimizedTransitions_2_1 && !optimizedTransitions_2_1.done && (_c = optimizedTransitions_2.return)) _c.call(optimizedTransitions_2);
                        }
                        finally { if (e_16) throw e_16.error; }
                    }
                }
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_17) throw e_17.error; }
        }
        if (ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + removedEdges + " transitions by combining chained epsilon transitions.");
        }
        return removedEdges;
        var e_17, _d, e_16, _c;
    };
    ATNDeserializer.optimizeSets = function (atn, preserveOrder) {
        if (preserveOrder) {
            // this optimization currently doesn't preserve edge order.
            return 0;
        }
        var removedPaths = 0;
        var decisions = atn.decisionToState;
        try {
            for (var decisions_1 = __values(decisions), decisions_1_1 = decisions_1.next(); !decisions_1_1.done; decisions_1_1 = decisions_1.next()) {
                var decision = decisions_1_1.value;
                var setTransitions = new IntervalSet();
                for (var i = 0; i < decision.numberOfOptimizedTransitions; i++) {
                    var epsTransition = decision.getOptimizedTransition(i);
                    if (!(epsTransition instanceof EpsilonTransition)) {
                        continue;
                    }
                    if (epsTransition.target.numberOfOptimizedTransitions !== 1) {
                        continue;
                    }
                    var transition = epsTransition.target.getOptimizedTransition(0);
                    if (!(transition.target instanceof BlockEndState)) {
                        continue;
                    }
                    if (transition instanceof NotSetTransition) {
                        // TODO: not yet implemented
                        continue;
                    }
                    if (transition instanceof AtomTransition
                        || transition instanceof RangeTransition
                        || transition instanceof SetTransition) {
                        setTransitions.add(i);
                    }
                }
                if (setTransitions.size <= 1) {
                    continue;
                }
                var optimizedTransitions = [];
                for (var i = 0; i < decision.numberOfOptimizedTransitions; i++) {
                    if (!setTransitions.contains(i)) {
                        optimizedTransitions.push(decision.getOptimizedTransition(i));
                    }
                }
                var blockEndState = decision.getOptimizedTransition(setTransitions.minElement).target.getOptimizedTransition(0).target;
                var matchSet = new IntervalSet();
                try {
                    for (var _a = __values(setTransitions.intervals), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var interval = _b.value;
                        for (var j = interval.a; j <= interval.b; j++) {
                            var matchTransition = decision.getOptimizedTransition(j).target.getOptimizedTransition(0);
                            if (matchTransition instanceof NotSetTransition) {
                                throw new Error("Not yet implemented.");
                            }
                            else {
                                matchSet.addAll(matchTransition.label);
                            }
                        }
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                var newTransition = void 0;
                if (matchSet.intervals.length === 1) {
                    if (matchSet.size === 1) {
                        newTransition = new AtomTransition(blockEndState, matchSet.minElement);
                    }
                    else {
                        var matchInterval = matchSet.intervals[0];
                        newTransition = new RangeTransition(blockEndState, matchInterval.a, matchInterval.b);
                    }
                }
                else {
                    newTransition = new SetTransition(blockEndState, matchSet);
                }
                var setOptimizedState = new BasicState();
                setOptimizedState.setRuleIndex(decision.ruleIndex);
                atn.addState(setOptimizedState);
                setOptimizedState.addTransition(newTransition);
                optimizedTransitions.push(new EpsilonTransition(setOptimizedState));
                removedPaths += decision.numberOfOptimizedTransitions - optimizedTransitions.length;
                if (decision.isOptimized) {
                    while (decision.numberOfOptimizedTransitions > 0) {
                        decision.removeOptimizedTransition(decision.numberOfOptimizedTransitions - 1);
                    }
                }
                try {
                    for (var optimizedTransitions_3 = __values(optimizedTransitions), optimizedTransitions_3_1 = optimizedTransitions_3.next(); !optimizedTransitions_3_1.done; optimizedTransitions_3_1 = optimizedTransitions_3.next()) {
                        var transition = optimizedTransitions_3_1.value;
                        decision.addOptimizedTransition(transition);
                    }
                }
                catch (e_19_1) { e_19 = { error: e_19_1 }; }
                finally {
                    try {
                        if (optimizedTransitions_3_1 && !optimizedTransitions_3_1.done && (_d = optimizedTransitions_3.return)) _d.call(optimizedTransitions_3);
                    }
                    finally { if (e_19) throw e_19.error; }
                }
            }
        }
        catch (e_20_1) { e_20 = { error: e_20_1 }; }
        finally {
            try {
                if (decisions_1_1 && !decisions_1_1.done && (_e = decisions_1.return)) _e.call(decisions_1);
            }
            finally { if (e_20) throw e_20.error; }
        }
        if (ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + removedPaths + " paths by collapsing sets.");
        }
        return removedPaths;
        var e_20, _e, e_18, _c, e_19, _d;
    };
    ATNDeserializer.identifyTailCalls = function (atn) {
        try {
            for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                var state = _b.value;
                for (var i = 0; i < state.numberOfTransitions; i++) {
                    var transition = state.transition(i);
                    if (!(transition instanceof RuleTransition)) {
                        continue;
                    }
                    transition.tailCall = this.testTailCall(atn, transition, false);
                    transition.optimizedTailCall = this.testTailCall(atn, transition, true);
                }
                if (!state.isOptimized) {
                    continue;
                }
                for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                    var transition = state.getOptimizedTransition(i);
                    if (!(transition instanceof RuleTransition)) {
                        continue;
                    }
                    transition.tailCall = this.testTailCall(atn, transition, false);
                    transition.optimizedTailCall = this.testTailCall(atn, transition, true);
                }
            }
        }
        catch (e_21_1) { e_21 = { error: e_21_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_21) throw e_21.error; }
        }
        var e_21, _c;
    };
    ATNDeserializer.testTailCall = function (atn, transition, optimizedPath) {
        if (!optimizedPath && transition.tailCall) {
            return true;
        }
        if (optimizedPath && transition.optimizedTailCall) {
            return true;
        }
        var reachable = new BitSet(atn.states.length);
        var worklist = [];
        worklist.push(transition.followState);
        while (true) {
            var state = worklist.pop();
            if (!state) {
                break;
            }
            if (reachable.get(state.stateNumber)) {
                continue;
            }
            if (state instanceof RuleStopState) {
                continue;
            }
            if (!state.onlyHasEpsilonTransitions) {
                return false;
            }
            var transitionCount = optimizedPath ? state.numberOfOptimizedTransitions : state.numberOfTransitions;
            for (var i = 0; i < transitionCount; i++) {
                var t = optimizedPath ? state.getOptimizedTransition(i) : state.transition(i);
                if (t.serializationType !== 1 /* EPSILON */) {
                    return false;
                }
                worklist.push(t.target);
            }
        }
        return true;
    };
    ATNDeserializer.toInt = function (c) {
        return c;
    };
    ATNDeserializer.toInt32 = function (data, offset) {
        return (data[offset] | (data[offset + 1] << 16)) >>> 0;
    };
    ATNDeserializer.toUUID = function (data, offset) {
        var leastSigBits = ATNDeserializer.toInt32(data, offset);
        var lessSigBits = ATNDeserializer.toInt32(data, offset + 2);
        var moreSigBits = ATNDeserializer.toInt32(data, offset + 4);
        var mostSigBits = ATNDeserializer.toInt32(data, offset + 6);
        return new UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits);
    };
    ATNDeserializer.prototype.edgeFactory = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
        var target = atn.states[trg];
        switch (type) {
            case 1 /* EPSILON */: return new EpsilonTransition(target);
            case 2 /* RANGE */:
                if (arg3 !== 0) {
                    return new RangeTransition(target, exports.Token.EOF, arg2);
                }
                else {
                    return new RangeTransition(target, arg1, arg2);
                }
            case 3 /* RULE */:
                var rt = new RuleTransition(atn.states[arg1], arg2, arg3, target);
                return rt;
            case 4 /* PREDICATE */:
                var pt = new PredicateTransition(target, arg1, arg2, arg3 !== 0);
                return pt;
            case 10 /* PRECEDENCE */:
                return new PrecedencePredicateTransition(target, arg1);
            case 5 /* ATOM */:
                if (arg3 !== 0) {
                    return new AtomTransition(target, exports.Token.EOF);
                }
                else {
                    return new AtomTransition(target, arg1);
                }
            case 6 /* ACTION */:
                var a = new ActionTransition(target, arg1, arg2, arg3 !== 0);
                return a;
            case 7 /* SET */: return new SetTransition(target, sets[arg1]);
            case 8 /* NOT_SET */: return new NotSetTransition(target, sets[arg1]);
            case 9 /* WILDCARD */: return new WildcardTransition(target);
        }
        throw new Error("The specified transition type is not valid.");
    };
    ATNDeserializer.prototype.stateFactory = function (type, ruleIndex) {
        var s;
        switch (type) {
            case ATNStateType.INVALID_TYPE: return new InvalidState();
            case ATNStateType.BASIC:
                s = new BasicState();
                break;
            case ATNStateType.RULE_START:
                s = new RuleStartState();
                break;
            case ATNStateType.BLOCK_START:
                s = new BasicBlockStartState();
                break;
            case ATNStateType.PLUS_BLOCK_START:
                s = new PlusBlockStartState();
                break;
            case ATNStateType.STAR_BLOCK_START:
                s = new StarBlockStartState();
                break;
            case ATNStateType.TOKEN_START:
                s = new TokensStartState();
                break;
            case ATNStateType.RULE_STOP:
                s = new RuleStopState();
                break;
            case ATNStateType.BLOCK_END:
                s = new BlockEndState();
                break;
            case ATNStateType.STAR_LOOP_BACK:
                s = new StarLoopbackState();
                break;
            case ATNStateType.STAR_LOOP_ENTRY:
                s = new StarLoopEntryState();
                break;
            case ATNStateType.PLUS_LOOP_BACK:
                s = new PlusLoopbackState();
                break;
            case ATNStateType.LOOP_END:
                s = new LoopEndState();
                break;
            default:
                var message = "The specified state type " + type + " is not valid.";
                throw new Error(message);
        }
        s.ruleIndex = ruleIndex;
        return s;
    };
    ATNDeserializer.prototype.lexerActionFactory = function (type, data1, data2) {
        switch (type) {
            case 0 /* CHANNEL */:
                return new LexerChannelAction(data1);
            case 1 /* CUSTOM */:
                return new LexerCustomAction(data1, data2);
            case 2 /* MODE */:
                return new LexerModeAction(data1);
            case 3 /* MORE */:
                return LexerMoreAction.INSTANCE;
            case 4 /* POP_MODE */:
                return LexerPopModeAction.INSTANCE;
            case 5 /* PUSH_MODE */:
                return new LexerPushModeAction(data1);
            case 6 /* SKIP */:
                return LexerSkipAction.INSTANCE;
            case 7 /* TYPE */:
                return new LexerTypeAction(data1);
            default:
                var message = "The specified lexer action type " + type + " is not valid.";
                throw new Error(message);
        }
    };
    /* WARNING: DO NOT MERGE THESE LINES. If UUIDs differ during a merge,
     * resolve the conflict by generating a new ID!
     */
    /**
     * This is the earliest supported serialized UUID.
     */
    ATNDeserializer.BASE_SERIALIZED_UUID = UUID.fromString("E4178468-DF95-44D0-AD87-F22A5D5FB6D3");
    /**
     * This UUID indicates an extension of {@link #ADDED_PRECEDENCE_TRANSITIONS}
     * for the addition of lexer actions encoded as a sequence of
     * {@link LexerAction} instances.
     */
    ATNDeserializer.ADDED_LEXER_ACTIONS = UUID.fromString("AB35191A-1603-487E-B75A-479B831EAF6D");
    /**
     * This UUID indicates the serialized ATN contains two sets of
     * IntervalSets, where the second set's values are encoded as
     * 32-bit integers to support the full Unicode SMP range up to U+10FFFF.
     */
    ATNDeserializer.ADDED_UNICODE_SMP = UUID.fromString("59627784-3BE5-417A-B9EB-8131A7286089");
    /**
     * This list contains all of the currently supported UUIDs, ordered by when
     * the feature first appeared in this branch.
     */
    ATNDeserializer.SUPPORTED_UUIDS = [
        ATNDeserializer.BASE_SERIALIZED_UUID,
        ATNDeserializer.ADDED_LEXER_ACTIONS,
        ATNDeserializer.ADDED_UNICODE_SMP,
    ];
    /**
     * This is the current serialized UUID.
     */
    ATNDeserializer.SERIALIZED_UUID = ATNDeserializer.ADDED_UNICODE_SMP;
    __decorate([
        NotNull
    ], ATNDeserializer.prototype, "deserializationOptions", void 0);
    __decorate([
        __param(0, NotNull)
    ], ATNDeserializer.prototype, "deserialize", null);
    __decorate([
        __param(0, NotNull)
    ], ATNDeserializer.prototype, "markPrecedenceDecisions", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ATNDeserializer.prototype, "edgeFactory", null);
    return ATNDeserializer;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class provides access to specific and aggregate statistics gathered
 * during profiling of a parser.
 *
 * @since 4.3
 */
var ParseInfo = /** @class */ (function () {
    function ParseInfo(atnSimulator) {
        this.atnSimulator = atnSimulator;
    }
    /**
     * Gets an array of {@link DecisionInfo} instances containing the profiling
     * information gathered for each decision in the ATN.
     *
     * @returns An array of {@link DecisionInfo} instances, indexed by decision
     * number.
     */
    ParseInfo.prototype.getDecisionInfo = function () {
        return this.atnSimulator.getDecisionInfo();
    };
    /**
     * Gets the decision numbers for decisions that required one or more
     * full-context predictions during parsing. These are decisions for which
     * {@link DecisionInfo#LL_Fallback} is non-zero.
     *
     * @returns A list of decision numbers which required one or more
     * full-context predictions during parsing.
     */
    ParseInfo.prototype.getLLDecisions = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var LL = [];
        for (var i = 0; i < decisions.length; i++) {
            var fallBack = decisions[i].LL_Fallback;
            if (fallBack > 0) {
                LL.push(i);
            }
        }
        return LL;
    };
    /**
     * Gets the total time spent during prediction across all decisions made
     * during parsing. This value is the sum of
     * {@link DecisionInfo#timeInPrediction} for all decisions.
     */
    ParseInfo.prototype.getTotalTimeInPrediction = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var t = 0;
        try {
            for (var decisions_1 = __values(decisions), decisions_1_1 = decisions_1.next(); !decisions_1_1.done; decisions_1_1 = decisions_1.next()) {
                var decision = decisions_1_1.value;
                t += decision.timeInPrediction;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (decisions_1_1 && !decisions_1_1.done && (_a = decisions_1.return)) _a.call(decisions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return t;
        var e_1, _a;
    };
    /**
     * Gets the total number of SLL lookahead operations across all decisions
     * made during parsing. This value is the sum of
     * {@link DecisionInfo#SLL_TotalLook} for all decisions.
     */
    ParseInfo.prototype.getTotalSLLLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_2 = __values(decisions), decisions_2_1 = decisions_2.next(); !decisions_2_1.done; decisions_2_1 = decisions_2.next()) {
                var decision = decisions_2_1.value;
                k += decision.SLL_TotalLook;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (decisions_2_1 && !decisions_2_1.done && (_a = decisions_2.return)) _a.call(decisions_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return k;
        var e_2, _a;
    };
    /**
     * Gets the total number of LL lookahead operations across all decisions
     * made during parsing. This value is the sum of
     * {@link DecisionInfo#LL_TotalLook} for all decisions.
     */
    ParseInfo.prototype.getTotalLLLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_3 = __values(decisions), decisions_3_1 = decisions_3.next(); !decisions_3_1.done; decisions_3_1 = decisions_3.next()) {
                var decision = decisions_3_1.value;
                k += decision.LL_TotalLook;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (decisions_3_1 && !decisions_3_1.done && (_a = decisions_3.return)) _a.call(decisions_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return k;
        var e_3, _a;
    };
    /**
     * Gets the total number of ATN lookahead operations for SLL prediction
     * across all decisions made during parsing.
     */
    ParseInfo.prototype.getTotalSLLATNLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_4 = __values(decisions), decisions_4_1 = decisions_4.next(); !decisions_4_1.done; decisions_4_1 = decisions_4.next()) {
                var decision = decisions_4_1.value;
                k += decision.SLL_ATNTransitions;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (decisions_4_1 && !decisions_4_1.done && (_a = decisions_4.return)) _a.call(decisions_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return k;
        var e_4, _a;
    };
    /**
     * Gets the total number of ATN lookahead operations for LL prediction
     * across all decisions made during parsing.
     */
    ParseInfo.prototype.getTotalLLATNLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_5 = __values(decisions), decisions_5_1 = decisions_5.next(); !decisions_5_1.done; decisions_5_1 = decisions_5.next()) {
                var decision = decisions_5_1.value;
                k += decision.LL_ATNTransitions;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (decisions_5_1 && !decisions_5_1.done && (_a = decisions_5.return)) _a.call(decisions_5);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return k;
        var e_5, _a;
    };
    /**
     * Gets the total number of ATN lookahead operations for SLL and LL
     * prediction across all decisions made during parsing.
     *
     * This value is the sum of {@link #getTotalSLLATNLookaheadOps} and
     * {@link #getTotalLLATNLookaheadOps}.
     */
    ParseInfo.prototype.getTotalATNLookaheadOps = function () {
        var decisions = this.atnSimulator.getDecisionInfo();
        var k = 0;
        try {
            for (var decisions_6 = __values(decisions), decisions_6_1 = decisions_6.next(); !decisions_6_1.done; decisions_6_1 = decisions_6.next()) {
                var decision = decisions_6_1.value;
                k += decision.SLL_ATNTransitions;
                k += decision.LL_ATNTransitions;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (decisions_6_1 && !decisions_6_1.done && (_a = decisions_6.return)) _a.call(decisions_6);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return k;
        var e_6, _a;
    };
    ParseInfo.prototype.getDFASize = function (decision) {
        if (decision) {
            var decisionToDFA = this.atnSimulator.atn.decisionToDFA[decision];
            return decisionToDFA.states.size;
        }
        else {
            var n = 0;
            var decisionToDFA = this.atnSimulator.atn.decisionToDFA;
            for (var i = 0; i < decisionToDFA.length; i++) {
                n += this.getDFASize(i);
            }
            return n;
        }
    };
    __decorate([
        NotNull
    ], ParseInfo.prototype, "getDecisionInfo", null);
    __decorate([
        NotNull
    ], ParseInfo.prototype, "getLLDecisions", null);
    ParseInfo = __decorate([
        __param(0, NotNull)
    ], ParseInfo);
    return ParseInfo;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This implementation of {@link TokenStream} loads tokens from a
 * {@link TokenSource} on-demand, and places the tokens in a buffer to provide
 * access to any previous token by index.
 *
 * This token stream ignores the value of {@link Token#getChannel}. If your
 * parser requires the token stream filter tokens to only those on a particular
 * channel, such as {@link Token#DEFAULT_CHANNEL} or
 * {@link Token#HIDDEN_CHANNEL}, use a filtering token stream such a
 * {@link CommonTokenStream}.
 */
var BufferedTokenStream = /** @class */ (function () {
    function BufferedTokenStream(tokenSource) {
        /**
         * A collection of all tokens fetched from the token source. The list is
         * considered a complete view of the input once {@link #fetchedEOF} is set
         * to `true`.
         */
        this.tokens = [];
        /**
         * The index into {@link #tokens} of the current token (next token to
         * {@link #consume}). {@link #tokens}`[`{@link #p}`]` should be
         * {@link #LT LT(1)}.
         *
         * This field is set to -1 when the stream is first constructed or when
         * {@link #setTokenSource} is called, indicating that the first token has
         * not yet been fetched from the token source. For additional information,
         * see the documentation of {@link IntStream} for a description of
         * Initializing Methods.
         */
        this.p = -1;
        /**
         * Indicates whether the {@link Token#EOF} token has been fetched from
         * {@link #tokenSource} and added to {@link #tokens}. This field improves
         * performance for the following cases:
         *
         * * {@link #consume}: The lookahead check in {@link #consume} to prevent
         *   consuming the EOF symbol is optimized by checking the values of
         *   {@link #fetchedEOF} and {@link #p} instead of calling {@link #LA}.
         * * {@link #fetch}: The check to prevent adding multiple EOF symbols into
         *   {@link #tokens} is trivial with this field.
         */
        this.fetchedEOF = false;
        if (tokenSource == null) {
            throw new Error("tokenSource cannot be null");
        }
        this._tokenSource = tokenSource;
    }
    Object.defineProperty(BufferedTokenStream.prototype, "tokenSource", {
        get: function () {
            return this._tokenSource;
        },
        /** Reset this token stream by setting its token source. */
        set: function (tokenSource) {
            this._tokenSource = tokenSource;
            this.tokens.length = 0;
            this.p = -1;
            this.fetchedEOF = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferedTokenStream.prototype, "index", {
        get: function () {
            return this.p;
        },
        enumerable: true,
        configurable: true
    });
    BufferedTokenStream.prototype.mark = function () {
        return 0;
    };
    BufferedTokenStream.prototype.release = function (marker) {
        // no resources to release
    };
    BufferedTokenStream.prototype.seek = function (index) {
        this.lazyInit();
        this.p = this.adjustSeekIndex(index);
    };
    Object.defineProperty(BufferedTokenStream.prototype, "size", {
        get: function () {
            return this.tokens.length;
        },
        enumerable: true,
        configurable: true
    });
    BufferedTokenStream.prototype.consume = function () {
        var skipEofCheck;
        if (this.p >= 0) {
            if (this.fetchedEOF) {
                // the last token in tokens is EOF. skip check if p indexes any
                // fetched token except the last.
                skipEofCheck = this.p < this.tokens.length - 1;
            }
            else {
                // no EOF token in tokens. skip check if p indexes a fetched token.
                skipEofCheck = this.p < this.tokens.length;
            }
        }
        else {
            // not yet initialized
            skipEofCheck = false;
        }
        if (!skipEofCheck && this.LA(1) === exports.Token.EOF) {
            throw new Error("cannot consume EOF");
        }
        if (this.sync(this.p + 1)) {
            this.p = this.adjustSeekIndex(this.p + 1);
        }
    };
    /** Make sure index `i` in tokens has a token.
     *
     * @returns `true` if a token is located at index `i`, otherwise
     *    `false`.
     * @see #get(int i)
     */
    BufferedTokenStream.prototype.sync = function (i) {
        // assert(i >= 0);
        var n = i - this.tokens.length + 1; // how many more elements we need?
        //System.out.println("sync("+i+") needs "+n);
        if (n > 0) {
            var fetched = this.fetch(n);
            return fetched >= n;
        }
        return true;
    };
    /** Add `n` elements to buffer.
     *
     * @returns The actual number of elements added to the buffer.
     */
    BufferedTokenStream.prototype.fetch = function (n) {
        if (this.fetchedEOF) {
            return 0;
        }
        for (var i = 0; i < n; i++) {
            var t = this.tokenSource.nextToken();
            if (this.isWritableToken(t)) {
                t.tokenIndex = this.tokens.length;
            }
            this.tokens.push(t);
            if (t.type === exports.Token.EOF) {
                this.fetchedEOF = true;
                return i + 1;
            }
        }
        return n;
    };
    BufferedTokenStream.prototype.get = function (i) {
        if (i < 0 || i >= this.tokens.length) {
            throw new RangeError("token index " + i + " out of range 0.." + (this.tokens.length - 1));
        }
        return this.tokens[i];
    };
    /** Get all tokens from start..stop inclusively. */
    BufferedTokenStream.prototype.getRange = function (start, stop) {
        if (start < 0 || stop < 0) {
            return [];
        }
        this.lazyInit();
        var subset = new Array();
        if (stop >= this.tokens.length) {
            stop = this.tokens.length - 1;
        }
        for (var i = start; i <= stop; i++) {
            var t = this.tokens[i];
            if (t.type === exports.Token.EOF) {
                break;
            }
            subset.push(t);
        }
        return subset;
    };
    BufferedTokenStream.prototype.LA = function (i) {
        var token = this.LT(i);
        if (!token) {
            return exports.Token.INVALID_TYPE;
        }
        return token.type;
    };
    BufferedTokenStream.prototype.tryLB = function (k) {
        if ((this.p - k) < 0) {
            return undefined;
        }
        return this.tokens[this.p - k];
    };
    BufferedTokenStream.prototype.LT = function (k) {
        var result = this.tryLT(k);
        if (result === undefined) {
            throw new RangeError("requested lookback index out of range");
        }
        return result;
    };
    BufferedTokenStream.prototype.tryLT = function (k) {
        this.lazyInit();
        if (k === 0) {
            throw new RangeError("0 is not a valid lookahead index");
        }
        if (k < 0) {
            return this.tryLB(-k);
        }
        var i = this.p + k - 1;
        this.sync(i);
        if (i >= this.tokens.length) {
            // return EOF token
            // EOF must be last token
            return this.tokens[this.tokens.length - 1];
        }
        //		if ( i>range ) range = i;
        return this.tokens[i];
    };
    /**
     * Allowed derived classes to modify the behavior of operations which change
     * the current stream position by adjusting the target token index of a seek
     * operation. The default implementation simply returns `i`. If an
     * exception is thrown in this method, the current stream index should not be
     * changed.
     *
     * For example, {@link CommonTokenStream} overrides this method to ensure that
     * the seek target is always an on-channel token.
     *
     * @param i The target token index.
     * @returns The adjusted target token index.
     */
    BufferedTokenStream.prototype.adjustSeekIndex = function (i) {
        return i;
    };
    BufferedTokenStream.prototype.lazyInit = function () {
        if (this.p === -1) {
            this.setup();
        }
    };
    BufferedTokenStream.prototype.setup = function () {
        this.sync(0);
        this.p = this.adjustSeekIndex(0);
    };
    /** Given a start and stop index, return a `List` of all tokens in
     *  the token type `BitSet`.  Return an empty array if no tokens were found.  This
     *  method looks at both on and off channel tokens.
     */
    BufferedTokenStream.prototype.getTokens = function (start, stop, types) {
        this.lazyInit();
        start = start || 0;
        stop = stop || this.tokens.length - 1;
        if (start < 0 || stop >= this.tokens.length || stop < 0 || start >= this.tokens.length) {
            throw new RangeError("start " + start + " or stop " + stop + " not in 0.." + (this.tokens.length - 1));
        }
        if (start === 0 && stop === this.tokens.length - 1) {
            return this.tokens;
        }
        if (start > stop) {
            return [];
        }
        if (types == null) {
            return this.tokens.slice(start, stop + 1);
        }
        else if (typeof types === "number") {
            types = new Set().add(types);
        }
        var typesSet = types;
        // list = tokens[start:stop]:{T t, t.type in types}
        var filteredTokens = this.tokens.slice(start, stop + 1);
        filteredTokens = filteredTokens.filter(function (value) { return typesSet.has(value.type); });
        return filteredTokens;
    };
    /**
     * Given a starting index, return the index of the next token on channel.
     * Return `i` if `tokens[i]` is on channel. Return the index of
     * the EOF token if there are no tokens on channel between `i` and
     * EOF.
     */
    BufferedTokenStream.prototype.nextTokenOnChannel = function (i, channel) {
        this.sync(i);
        if (i >= this.size) {
            return this.size - 1;
        }
        var token = this.tokens[i];
        while (token.channel !== channel) {
            if (token.type === exports.Token.EOF) {
                return i;
            }
            i++;
            this.sync(i);
            token = this.tokens[i];
        }
        return i;
    };
    /**
     * Given a starting index, return the index of the previous token on
     * channel. Return `i` if `tokens[i]` is on channel. Return -1
     * if there are no tokens on channel between `i` and 0.
     *
     * If `i` specifies an index at or after the EOF token, the EOF token
     * index is returned. This is due to the fact that the EOF token is treated
     * as though it were on every channel.
     */
    BufferedTokenStream.prototype.previousTokenOnChannel = function (i, channel) {
        this.sync(i);
        if (i >= this.size) {
            // the EOF token is on every channel
            return this.size - 1;
        }
        while (i >= 0) {
            var token = this.tokens[i];
            if (token.type === exports.Token.EOF || token.channel === channel) {
                return i;
            }
            i--;
        }
        return i;
    };
    /** Collect all tokens on specified channel to the right of
     *  the current token up until we see a token on {@link Lexer#DEFAULT_TOKEN_CHANNEL} or
     *  EOF. If `channel` is `-1`, find any non default channel token.
     */
    BufferedTokenStream.prototype.getHiddenTokensToRight = function (tokenIndex, channel) {
        if (channel === void 0) { channel = -1; }
        this.lazyInit();
        if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
            throw new RangeError(tokenIndex + " not in 0.." + (this.tokens.length - 1));
        }
        var nextOnChannel = this.nextTokenOnChannel(tokenIndex + 1, Lexer.DEFAULT_TOKEN_CHANNEL);
        var to;
        var from = tokenIndex + 1;
        // if none onchannel to right, nextOnChannel=-1 so set to = last token
        if (nextOnChannel === -1) {
            to = this.size - 1;
        }
        else {
            to = nextOnChannel;
        }
        return this.filterForChannel(from, to, channel);
    };
    /** Collect all tokens on specified channel to the left of
     *  the current token up until we see a token on {@link Lexer#DEFAULT_TOKEN_CHANNEL}.
     *  If `channel` is `-1`, find any non default channel token.
     */
    BufferedTokenStream.prototype.getHiddenTokensToLeft = function (tokenIndex, channel) {
        if (channel === void 0) { channel = -1; }
        this.lazyInit();
        if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
            throw new RangeError(tokenIndex + " not in 0.." + (this.tokens.length - 1));
        }
        if (tokenIndex === 0) {
            // obviously no tokens can appear before the first token
            return [];
        }
        var prevOnChannel = this.previousTokenOnChannel(tokenIndex - 1, Lexer.DEFAULT_TOKEN_CHANNEL);
        if (prevOnChannel === tokenIndex - 1) {
            return [];
        }
        // if none onchannel to left, prevOnChannel=-1 then from=0
        var from = prevOnChannel + 1;
        var to = tokenIndex - 1;
        return this.filterForChannel(from, to, channel);
    };
    BufferedTokenStream.prototype.filterForChannel = function (from, to, channel) {
        var hidden = new Array();
        for (var i = from; i <= to; i++) {
            var t = this.tokens[i];
            if (channel === -1) {
                if (t.channel !== Lexer.DEFAULT_TOKEN_CHANNEL) {
                    hidden.push(t);
                }
            }
            else {
                if (t.channel === channel) {
                    hidden.push(t);
                }
            }
        }
        return hidden;
    };
    Object.defineProperty(BufferedTokenStream.prototype, "sourceName", {
        get: function () {
            return this.tokenSource.sourceName;
        },
        enumerable: true,
        configurable: true
    });
    BufferedTokenStream.prototype.getText = function (interval) {
        if (interval === undefined) {
            interval = Interval.of(0, this.size - 1);
        }
        else if (!(interval instanceof Interval)) {
            // Note: the more obvious check for 'instanceof RuleContext' results in a circular dependency problem
            interval = interval.sourceInterval;
        }
        var start = interval.a;
        var stop = interval.b;
        if (start < 0 || stop < 0) {
            return "";
        }
        this.fill();
        if (stop >= this.tokens.length) {
            stop = this.tokens.length - 1;
        }
        var buf = "";
        for (var i = start; i <= stop; i++) {
            var t = this.tokens[i];
            if (t.type === exports.Token.EOF) {
                break;
            }
            buf += t.text;
        }
        return buf.toString();
    };
    BufferedTokenStream.prototype.getTextFromRange = function (start, stop) {
        if (this.isToken(start) && this.isToken(stop)) {
            return this.getText(Interval.of(start.tokenIndex, stop.tokenIndex));
        }
        return "";
    };
    /** Get all tokens from lexer until EOF. */
    BufferedTokenStream.prototype.fill = function () {
        this.lazyInit();
        var blockSize = 1000;
        while (true) {
            var fetched = this.fetch(blockSize);
            if (fetched < blockSize) {
                return;
            }
        }
    };
    // TODO: Figure out a way to make this more flexible?
    BufferedTokenStream.prototype.isWritableToken = function (t) {
        return t instanceof CommonToken;
    };
    // TODO: Figure out a way to make this more flexible?
    BufferedTokenStream.prototype.isToken = function (t) {
        return t instanceof CommonToken;
    };
    __decorate([
        NotNull
    ], BufferedTokenStream.prototype, "_tokenSource", void 0);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "tokenSource", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "index", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "mark", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "release", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "seek", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "size", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "consume", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "get", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "LA", null);
    __decorate([
        NotNull,
        Override
    ], BufferedTokenStream.prototype, "LT", null);
    __decorate([
        Override
    ], BufferedTokenStream.prototype, "sourceName", null);
    __decorate([
        NotNull,
        Override
    ], BufferedTokenStream.prototype, "getText", null);
    __decorate([
        NotNull,
        Override
    ], BufferedTokenStream.prototype, "getTextFromRange", null);
    BufferedTokenStream = __decorate([
        __param(0, NotNull)
    ], BufferedTokenStream);
    return BufferedTokenStream;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class extends {@link BufferedTokenStream} with functionality to filter
 * token streams to tokens on a particular channel (tokens where
 * {@link Token#getChannel} returns a particular value).
 *
 * This token stream provides access to all tokens by index or when calling
 * methods like {@link #getText}. The channel filtering is only used for code
 * accessing tokens via the lookahead methods {@link #LA}, {@link #LT}, and
 * {@link #LB}.
 *
 * By default, tokens are placed on the default channel
 * ({@link Token#DEFAULT_CHANNEL}), but may be reassigned by using the
 * `->channel(HIDDEN)` lexer command, or by using an embedded action to
 * call {@link Lexer#setChannel}.
 *
 * Note: lexer rules which use the `->skip` lexer command or call
 * {@link Lexer#skip} do not produce tokens at all, so input text matched by
 * such a rule will not be available as part of the token stream, regardless of
 * channel.
 */
var CommonTokenStream = /** @class */ (function (_super) {
    __extends(CommonTokenStream, _super);
    /**
     * Constructs a new {@link CommonTokenStream} using the specified token
     * source and filtering tokens to the specified channel. Only tokens whose
     * {@link Token#getChannel} matches `channel` or have the
     * `Token.type` equal to {@link Token#EOF} will be returned by the
     * token stream lookahead methods.
     *
     * @param tokenSource The token source.
     * @param channel The channel to use for filtering tokens.
     */
    function CommonTokenStream(tokenSource, channel) {
        if (channel === void 0) { channel = exports.Token.DEFAULT_CHANNEL; }
        var _this = _super.call(this, tokenSource) || this;
        _this.channel = channel;
        return _this;
    }
    CommonTokenStream.prototype.adjustSeekIndex = function (i) {
        return this.nextTokenOnChannel(i, this.channel);
    };
    CommonTokenStream.prototype.tryLB = function (k) {
        if ((this.p - k) < 0) {
            return undefined;
        }
        var i = this.p;
        var n = 1;
        // find k good tokens looking backwards
        while (n <= k && i > 0) {
            // skip off-channel tokens
            i = this.previousTokenOnChannel(i - 1, this.channel);
            n++;
        }
        if (i < 0) {
            return undefined;
        }
        return this.tokens[i];
    };
    CommonTokenStream.prototype.tryLT = function (k) {
        //System.out.println("enter LT("+k+")");
        this.lazyInit();
        if (k === 0) {
            throw new RangeError("0 is not a valid lookahead index");
        }
        if (k < 0) {
            return this.tryLB(-k);
        }
        var i = this.p;
        var n = 1; // we know tokens[p] is a good one
        // find k good tokens
        while (n < k) {
            // skip off-channel tokens, but make sure to not look past EOF
            if (this.sync(i + 1)) {
                i = this.nextTokenOnChannel(i + 1, this.channel);
            }
            n++;
        }
        //		if ( i>range ) range = i;
        return this.tokens[i];
    };
    /** Count EOF just once. */
    CommonTokenStream.prototype.getNumberOfOnChannelTokens = function () {
        var n = 0;
        this.fill();
        try {
            for (var _a = __values(this.tokens), _b = _a.next(); !_b.done; _b = _a.next()) {
                var t = _b.value;
                if (t.channel === this.channel) {
                    n++;
                }
                if (t.type === exports.Token.EOF) {
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return n;
        var e_1, _c;
    };
    __decorate([
        Override
    ], CommonTokenStream.prototype, "adjustSeekIndex", null);
    __decorate([
        Override
    ], CommonTokenStream.prototype, "tryLB", null);
    __decorate([
        Override
    ], CommonTokenStream.prototype, "tryLT", null);
    CommonTokenStream = __decorate([
        __param(0, NotNull)
    ], CommonTokenStream);
    return CommonTokenStream;
}(BufferedTokenStream));

// Generated from XPathLexer.g4 by ANTLR 4.6-SNAPSHOT
var XPathLexer = /** @class */ (function (_super) {
    __extends(XPathLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function XPathLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator(XPathLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(XPathLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return XPathLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XPathLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "XPathLexer.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XPathLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return XPathLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XPathLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return XPathLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XPathLexer.prototype, "modeNames", {
        // @Override
        get: function () { return XPathLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    // @Override
    XPathLexer.prototype.action = function (_localctx, ruleIndex, actionIndex) {
        switch (ruleIndex) {
            case 4:
                this.ID_action(_localctx, actionIndex);
                break;
        }
    };
    XPathLexer.prototype.ID_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 0:
                var text = this.text;
                if (text.charAt(0) === text.charAt(0).toUpperCase()) {
                    this.type = XPathLexer.TOKEN_REF;
                }
                else {
                    this.type = XPathLexer.RULE_REF;
                }
                break;
        }
    };
    Object.defineProperty(XPathLexer, "_ATN", {
        get: function () {
            if (!XPathLexer.__ATN) {
                XPathLexer.__ATN = new ATNDeserializer().deserialize(toCharArray(XPathLexer._serializedATN));
            }
            return XPathLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    XPathLexer.TOKEN_REF = 1;
    XPathLexer.RULE_REF = 2;
    XPathLexer.ANYWHERE = 3;
    XPathLexer.ROOT = 4;
    XPathLexer.WILDCARD = 5;
    XPathLexer.BANG = 6;
    XPathLexer.ID = 7;
    XPathLexer.STRING = 8;
    // tslint:disable:no-trailing-whitespace
    XPathLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    XPathLexer.ruleNames = [
        "ANYWHERE", "ROOT", "WILDCARD", "BANG", "ID", "NameChar", "NameStartChar",
        "STRING",
    ];
    XPathLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, "'//'", "'/'", "'*'", "'!'",
    ];
    XPathLexer._SYMBOLIC_NAMES = [
        undefined, "TOKEN_REF", "RULE_REF", "ANYWHERE", "ROOT", "WILDCARD", "BANG",
        "ID", "STRING",
    ];
    XPathLexer.VOCABULARY = new VocabularyImpl(XPathLexer._LITERAL_NAMES, XPathLexer._SYMBOLIC_NAMES, []);
    XPathLexer._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\n4\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
        "\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06\x1F\n\x06\f\x06" +
        "\x0E\x06\"\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07(\n\x07\x03\b" +
        "\x03\b\x03\t\x03\t\x07\t.\n\t\f\t\x0E\t1\v\t\x03\t\x03\t\x03/\x02\x02" +
        "\n\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\x02\x0F\x02" +
        "\x02\x11\x02\n\x03\x02\x04\x07\x022;aa\xB9\xB9\u0302\u0371\u2041\u2042" +
        "\x0F\x02C\\c|\xC2\xD8\xDA\xF8\xFA\u0301\u0372\u037F\u0381\u2001\u200E" +
        "\u200F\u2072\u2191\u2C02\u2FF1\u3003\uD801\uF902\uFDD1\uFDF2\uFFFF4\x02" +
        "\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
        "\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x03\x13" +
        "\x03\x02\x02\x02\x05\x16\x03\x02\x02\x02\x07\x18\x03\x02\x02\x02\t\x1A" +
        "\x03\x02\x02\x02\v\x1C\x03\x02\x02\x02\r\'\x03\x02\x02\x02\x0F)\x03\x02" +
        "\x02\x02\x11+\x03\x02\x02\x02\x13\x14\x071\x02\x02\x14\x15\x071\x02\x02" +
        "\x15\x04\x03\x02\x02\x02\x16\x17\x071\x02\x02\x17\x06\x03\x02\x02\x02" +
        "\x18\x19\x07,\x02\x02\x19\b\x03\x02\x02\x02\x1A\x1B\x07#\x02\x02\x1B\n" +
        "\x03\x02\x02\x02\x1C \x05\x0F\b\x02\x1D\x1F\x05\r\x07\x02\x1E\x1D\x03" +
        "\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02" +
        "\x02!#\x03\x02\x02\x02\" \x03\x02\x02\x02#$\b\x06\x02\x02$\f\x03\x02\x02" +
        "\x02%(\x05\x0F\b\x02&(\t\x02\x02\x02\'%\x03\x02\x02\x02\'&\x03\x02\x02" +
        "\x02(\x0E\x03\x02\x02\x02)*\t\x03\x02\x02*\x10\x03\x02\x02\x02+/\x07)" +
        "\x02\x02,.\v\x02\x02\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02/0\x03\x02" +
        "\x02\x02/-\x03\x02\x02\x0202\x03\x02\x02\x021/\x03\x02\x02\x0223\x07)" +
        "\x02\x023\x12\x03\x02\x02\x02\x06\x02 \'/\x03\x03\x06\x02";
    return XPathLexer;
}(Lexer));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var XPathLexerErrorListener = /** @class */ (function () {
    function XPathLexerErrorListener() {
    }
    XPathLexerErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        // intentionally empty
    };
    __decorate([
        Override
    ], XPathLexerErrorListener.prototype, "syntaxError", null);
    return XPathLexerErrorListener;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var XPathElement = /** @class */ (function () {
    /** Construct element like `/ID` or `ID` or `/*` etc...
     *  op is null if just node
     */
    function XPathElement(nodeName) {
        this.nodeName = nodeName;
        this.invert = false;
    }
    XPathElement.prototype.toString = function () {
        var inv = this.invert ? "!" : "";
        var className = Object.constructor.name;
        return className + "[" + inv + this.nodeName + "]";
    };
    __decorate([
        Override
    ], XPathElement.prototype, "toString", null);
    return XPathElement;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Either `ID` at start of path or `...//ID` in middle of path.
 */
var XPathRuleAnywhereElement = /** @class */ (function (_super) {
    __extends(XPathRuleAnywhereElement, _super);
    function XPathRuleAnywhereElement(ruleName, ruleIndex) {
        var _this = _super.call(this, ruleName) || this;
        _this.ruleIndex = ruleIndex;
        return _this;
    }
    XPathRuleAnywhereElement.prototype.evaluate = function (t) {
        return Trees.findAllRuleNodes(t, this.ruleIndex);
    };
    __decorate([
        Override
    ], XPathRuleAnywhereElement.prototype, "evaluate", null);
    return XPathRuleAnywhereElement;
}(XPathElement));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var XPathRuleElement = /** @class */ (function (_super) {
    __extends(XPathRuleElement, _super);
    function XPathRuleElement(ruleName, ruleIndex) {
        var _this = _super.call(this, ruleName) || this;
        _this.ruleIndex = ruleIndex;
        return _this;
    }
    XPathRuleElement.prototype.evaluate = function (t) {
        // return all children of t that match nodeName
        var nodes = [];
        try {
            for (var _a = __values(Trees.getChildren(t)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var c = _b.value;
                if (c instanceof ParserRuleContext) {
                    if ((c.ruleIndex === this.ruleIndex && !this.invert) ||
                        (c.ruleIndex !== this.ruleIndex && this.invert)) {
                        nodes.push(c);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return nodes;
        var e_1, _c;
    };
    __decorate([
        Override
    ], XPathRuleElement.prototype, "evaluate", null);
    return XPathRuleElement;
}(XPathElement));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var XPathTokenAnywhereElement = /** @class */ (function (_super) {
    __extends(XPathTokenAnywhereElement, _super);
    function XPathTokenAnywhereElement(tokenName, tokenType) {
        var _this = _super.call(this, tokenName) || this;
        _this.tokenType = tokenType;
        return _this;
    }
    XPathTokenAnywhereElement.prototype.evaluate = function (t) {
        return Trees.findAllTokenNodes(t, this.tokenType);
    };
    __decorate([
        Override
    ], XPathTokenAnywhereElement.prototype, "evaluate", null);
    return XPathTokenAnywhereElement;
}(XPathElement));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var XPathTokenElement = /** @class */ (function (_super) {
    __extends(XPathTokenElement, _super);
    function XPathTokenElement(tokenName, tokenType) {
        var _this = _super.call(this, tokenName) || this;
        _this.tokenType = tokenType;
        return _this;
    }
    XPathTokenElement.prototype.evaluate = function (t) {
        // return all children of t that match nodeName
        var nodes = [];
        try {
            for (var _a = __values(Trees.getChildren(t)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var c = _b.value;
                if (c instanceof TerminalNode) {
                    if ((c.symbol.type === this.tokenType && !this.invert) ||
                        (c.symbol.type !== this.tokenType && this.invert)) {
                        nodes.push(c);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return nodes;
        var e_1, _c;
    };
    __decorate([
        Override
    ], XPathTokenElement.prototype, "evaluate", null);
    return XPathTokenElement;
}(XPathElement));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var XPathWildcardAnywhereElement = /** @class */ (function (_super) {
    __extends(XPathWildcardAnywhereElement, _super);
    function XPathWildcardAnywhereElement() {
        return _super.call(this, XPath.WILDCARD) || this;
    }
    XPathWildcardAnywhereElement.prototype.evaluate = function (t) {
        if (this.invert) {
            // !* is weird but valid (empty)
            return [];
        }
        return Trees.getDescendants(t);
    };
    __decorate([
        Override
    ], XPathWildcardAnywhereElement.prototype, "evaluate", null);
    return XPathWildcardAnywhereElement;
}(XPathElement));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var XPathWildcardElement = /** @class */ (function (_super) {
    __extends(XPathWildcardElement, _super);
    function XPathWildcardElement() {
        return _super.call(this, XPath.WILDCARD) || this;
    }
    XPathWildcardElement.prototype.evaluate = function (t) {
        var kids = [];
        if (this.invert) {
            // !* is weird but valid (empty)
            return kids;
        }
        try {
            for (var _a = __values(Trees.getChildren(t)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var c = _b.value;
                kids.push(c);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return kids;
        var e_1, _c;
    };
    __decorate([
        Override
    ], XPathWildcardElement.prototype, "evaluate", null);
    return XPathWildcardElement;
}(XPathElement));

/*!
* Copyright 2016 The ANTLR Project. All rights reserved.
* Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
*/
/**
 * Represent a subset of XPath XML path syntax for use in identifying nodes in
 * parse trees.
 *
 * Split path into words and separators `/` and `//` via ANTLR
 * itself then walk path elements from left to right. At each separator-word
 * pair, find set of nodes. Next stage uses those as work list.
 *
 * The basic interface is
 * {@link XPath#findAll ParseTree.findAll}`(tree, pathString, parser)`.
 * But that is just shorthand for:
 *
 * ```
 * let p = new XPath(parser, pathString);
 * return p.evaluate(tree);
 * ```
 *
 * See `TestXPath` for descriptions. In short, this
 * allows operators:
 *
 * | | |
 * | --- | --- |
 * | `/` | root |
 * | `//` | anywhere |
 * | `!` | invert; this much appear directly after root or anywhere operator |
 *
 * and path elements:
 *
 * | | |
 * | --- | --- |
 * | `ID` | token name |
 * | `'string'` | any string literal token from the grammar |
 * | `expr` | rule name |
 * | `*` | wildcard matching any node |
 *
 * Whitespace is not allowed.
 */
var XPath = /** @class */ (function () {
    function XPath(parser, path) {
        this.parser = parser;
        this.path = path;
        this.elements = this.split(path);
        // console.log(this.elements.toString());
    }
    // TODO: check for invalid token/rule names, bad syntax
    XPath.prototype.split = function (path) {
        var input = new ANTLRInputStream(path);
        var lexer = new XPathLexer(input);
        lexer.recover = function (e) { throw e; };
        lexer.removeErrorListeners();
        lexer.addErrorListener(new XPathLexerErrorListener());
        var tokenStream = new CommonTokenStream(lexer);
        try {
            tokenStream.fill();
        }
        catch (e) {
            if (e instanceof LexerNoViableAltException) {
                var pos = lexer.charPositionInLine;
                var msg = "Invalid tokens or characters at index " + pos + " in path '" + path + "' -- " + e.message;
                throw new RangeError(msg);
            }
            throw e;
        }
        var tokens = tokenStream.getTokens();
        // console.log("path=" + path + "=>" + tokens);
        var elements = [];
        var n = tokens.length;
        var i = 0;
        loop: while (i < n) {
            var el = tokens[i];
            var next = void 0;
            switch (el.type) {
                case XPathLexer.ROOT:
                case XPathLexer.ANYWHERE:
                    var anywhere = el.type === XPathLexer.ANYWHERE;
                    i++;
                    next = tokens[i];
                    var invert = next.type === XPathLexer.BANG;
                    if (invert) {
                        i++;
                        next = tokens[i];
                    }
                    var pathElement = this.getXPathElement(next, anywhere);
                    pathElement.invert = invert;
                    elements.push(pathElement);
                    i++;
                    break;
                case XPathLexer.TOKEN_REF:
                case XPathLexer.RULE_REF:
                case XPathLexer.WILDCARD:
                    elements.push(this.getXPathElement(el, false));
                    i++;
                    break;
                case exports.Token.EOF:
                    break loop;
                default:
                    throw new Error("Unknowth path element " + el);
            }
        }
        return elements;
    };
    /**
     * Convert word like `*` or `ID` or `expr` to a path
     * element. `anywhere` is `true` if `//` precedes the
     * word.
     */
    XPath.prototype.getXPathElement = function (wordToken, anywhere) {
        if (wordToken.type === exports.Token.EOF) {
            throw new Error("Missing path element at end of path");
        }
        var word = wordToken.text;
        if (word == null) {
            throw new Error("Expected wordToken to have text content.");
        }
        var ttype = this.parser.getTokenType(word);
        var ruleIndex = this.parser.getRuleIndex(word);
        switch (wordToken.type) {
            case XPathLexer.WILDCARD:
                return anywhere ?
                    new XPathWildcardAnywhereElement() :
                    new XPathWildcardElement();
            case XPathLexer.TOKEN_REF:
            case XPathLexer.STRING:
                if (ttype === exports.Token.INVALID_TYPE) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid token name");
                }
                return anywhere ?
                    new XPathTokenAnywhereElement(word, ttype) :
                    new XPathTokenElement(word, ttype);
            default:
                if (ruleIndex === -1) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid rule name");
                }
                return anywhere ?
                    new XPathRuleAnywhereElement(word, ruleIndex) :
                    new XPathRuleElement(word, ruleIndex);
        }
    };
    XPath.findAll = function (tree, xpath, parser) {
        var p = new XPath(parser, xpath);
        return p.evaluate(tree);
    };
    /**
     * Return a list of all nodes starting at `t` as root that satisfy the
     * path. The root `/` is relative to the node passed to {@link evaluate}.
     */
    XPath.prototype.evaluate = function (t) {
        var dummyRoot = new ParserRuleContext();
        dummyRoot.addChild(t);
        var work = new Set([dummyRoot]);
        var i = 0;
        while (i < this.elements.length) {
            var next = new Set();
            try {
                for (var work_1 = __values(work), work_1_1 = work_1.next(); !work_1_1.done; work_1_1 = work_1.next()) {
                    var node = work_1_1.value;
                    if (node.childCount > 0) {
                        // only try to match next element if it has children
                        // e.g., //func/*/stat might have a token node for which
                        // we can't go looking for stat nodes.
                        var matching = this.elements[i].evaluate(node);
                        matching.forEach(next.add, next);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (work_1_1 && !work_1_1.done && (_a = work_1.return)) _a.call(work_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            i++;
            work = next;
        }
        return work;
        var e_1, _a;
    };
    XPath.WILDCARD = "*"; // word not operator/separator
    XPath.NOT = "!"; // word for invert operator
    return XPath;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * A pattern like `<ID> = <expr>;` converted to a {@link ParseTree} by
 * {@link ParseTreePatternMatcher#compile(String, int)}.
 */
var ParseTreePattern = /** @class */ (function () {
    /**
     * Construct a new instance of the {@link ParseTreePattern} class.
     *
     * @param matcher The {@link ParseTreePatternMatcher} which created this
     * tree pattern.
     * @param pattern The tree pattern in concrete syntax form.
     * @param patternRuleIndex The parser rule which serves as the root of the
     * tree pattern.
     * @param patternTree The tree pattern in {@link ParseTree} form.
     */
    function ParseTreePattern(matcher, pattern, patternRuleIndex, patternTree) {
        this._matcher = matcher;
        this._patternRuleIndex = patternRuleIndex;
        this._pattern = pattern;
        this._patternTree = patternTree;
    }
    /**
     * Match a specific parse tree against this tree pattern.
     *
     * @param tree The parse tree to match against this tree pattern.
     * @returns A {@link ParseTreeMatch} object describing the result of the
     * match operation. The `ParseTreeMatch.succeeded` method can be
     * used to determine whether or not the match was successful.
     */
    ParseTreePattern.prototype.match = function (tree) {
        return this._matcher.match(tree, this);
    };
    /**
     * Determine whether or not a parse tree matches this tree pattern.
     *
     * @param tree The parse tree to match against this tree pattern.
     * @returns `true` if `tree` is a match for the current tree
     * pattern; otherwise, `false`.
     */
    ParseTreePattern.prototype.matches = function (tree) {
        return this._matcher.match(tree, this).succeeded;
    };
    /**
     * Find all nodes using XPath and then try to match those subtrees against
     * this tree pattern.
     *
     * @param tree The {@link ParseTree} to match against this pattern.
     * @param xpath An expression matching the nodes
     *
     * @returns A collection of {@link ParseTreeMatch} objects describing the
     * successful matches. Unsuccessful matches are omitted from the result,
     * regardless of the reason for the failure.
     */
    ParseTreePattern.prototype.findAll = function (tree, xpath) {
        var subtrees = XPath.findAll(tree, xpath, this._matcher.parser);
        var matches = [];
        try {
            for (var subtrees_1 = __values(subtrees), subtrees_1_1 = subtrees_1.next(); !subtrees_1_1.done; subtrees_1_1 = subtrees_1.next()) {
                var t = subtrees_1_1.value;
                var match = this.match(t);
                if (match.succeeded) {
                    matches.push(match);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (subtrees_1_1 && !subtrees_1_1.done && (_a = subtrees_1.return)) _a.call(subtrees_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return matches;
        var e_1, _a;
    };
    Object.defineProperty(ParseTreePattern.prototype, "matcher", {
        /**
         * Get the {@link ParseTreePatternMatcher} which created this tree pattern.
         *
         * @returns The {@link ParseTreePatternMatcher} which created this tree
         * pattern.
         */
        get: function () {
            return this._matcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseTreePattern.prototype, "pattern", {
        /**
         * Get the tree pattern in concrete syntax form.
         *
         * @returns The tree pattern in concrete syntax form.
         */
        get: function () {
            return this._pattern;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseTreePattern.prototype, "patternRuleIndex", {
        /**
         * Get the parser rule which serves as the outermost rule for the tree
         * pattern.
         *
         * @returns The parser rule which serves as the outermost rule for the tree
         * pattern.
         */
        get: function () {
            return this._patternRuleIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseTreePattern.prototype, "patternTree", {
        /**
         * Get the tree pattern as a {@link ParseTree}. The rule and token tags from
         * the pattern are present in the parse tree as terminal nodes with a symbol
         * of type {@link RuleTagToken} or {@link TokenTagToken}.
         *
         * @returns The tree pattern as a {@link ParseTree}.
         */
        get: function () {
            return this._patternTree;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], ParseTreePattern.prototype, "_pattern", void 0);
    __decorate([
        NotNull
    ], ParseTreePattern.prototype, "_patternTree", void 0);
    __decorate([
        NotNull
    ], ParseTreePattern.prototype, "_matcher", void 0);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ParseTreePattern.prototype, "match", null);
    __decorate([
        __param(0, NotNull)
    ], ParseTreePattern.prototype, "matches", null);
    __decorate([
        NotNull,
        __param(0, NotNull), __param(1, NotNull)
    ], ParseTreePattern.prototype, "findAll", null);
    __decorate([
        NotNull
    ], ParseTreePattern.prototype, "matcher", null);
    __decorate([
        NotNull
    ], ParseTreePattern.prototype, "pattern", null);
    __decorate([
        NotNull
    ], ParseTreePattern.prototype, "patternTree", null);
    ParseTreePattern = __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(3, NotNull)
    ], ParseTreePattern);
    return ParseTreePattern;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * @author Sam Harwell
 */
var ProxyParserErrorListener = /** @class */ (function (_super) {
    __extends(ProxyParserErrorListener, _super);
    function ProxyParserErrorListener(delegates) {
        return _super.call(this, delegates) || this;
    }
    ProxyParserErrorListener.prototype.reportAmbiguity = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        this.getDelegates()
            .forEach(function (listener) {
            if (listener.reportAmbiguity) {
                listener.reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
            }
        });
    };
    ProxyParserErrorListener.prototype.reportAttemptingFullContext = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState) {
        this.getDelegates()
            .forEach(function (listener) {
            if (listener.reportAttemptingFullContext) {
                listener.reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState);
            }
        });
    };
    ProxyParserErrorListener.prototype.reportContextSensitivity = function (recognizer, dfa, startIndex, stopIndex, prediction, acceptState) {
        this.getDelegates()
            .forEach(function (listener) {
            if (listener.reportContextSensitivity) {
                listener.reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, acceptState);
            }
        });
    };
    __decorate([
        Override
    ], ProxyParserErrorListener.prototype, "reportAmbiguity", null);
    __decorate([
        Override
    ], ProxyParserErrorListener.prototype, "reportAttemptingFullContext", null);
    __decorate([
        Override
    ], ProxyParserErrorListener.prototype, "reportContextSensitivity", null);
    return ProxyParserErrorListener;
}(ProxyErrorListener));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This is the base class for gathering detailed information about prediction
 * events which occur during parsing.
 *
 * Note that we could record the parser call stack at the time this event
 * occurred but in the presence of left recursive rules, the stack is kind of
 * meaningless. It's better to look at the individual configurations for their
 * individual stacks. Of course that is a {@link PredictionContext} object
 * not a parse tree node and so it does not have information about the extent
 * (start...stop) of the various subtrees. Examining the stack tops of all
 * configurations provide the return states for the rule invocations.
 * From there you can get the enclosing rule.
 *
 * @since 4.3
 */
var DecisionEventInfo = /** @class */ (function () {
    function DecisionEventInfo(decision, state, input, startIndex, stopIndex, fullCtx) {
        this.decision = decision;
        this.fullCtx = fullCtx;
        this.stopIndex = stopIndex;
        this.input = input;
        this.startIndex = startIndex;
        this.state = state;
    }
    __decorate([
        NotNull
    ], DecisionEventInfo.prototype, "input", void 0);
    DecisionEventInfo = __decorate([
        __param(2, NotNull)
    ], DecisionEventInfo);
    return DecisionEventInfo;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class represents profiling event information for an ambiguity.
 * Ambiguities are decisions where a particular input resulted in an SLL
 * conflict, followed by LL prediction also reaching a conflict state
 * (indicating a true ambiguity in the grammar).
 *
 * This event may be reported during SLL prediction in cases where the
 * conflicting SLL configuration set provides sufficient information to
 * determine that the SLL conflict is truly an ambiguity. For example, if none
 * of the ATN configurations in the conflicting SLL configuration set have
 * traversed a global follow transition (i.e.
 * {@link ATNConfig#getReachesIntoOuterContext} is `false` for all
 * configurations), then the result of SLL prediction for that input is known to
 * be equivalent to the result of LL prediction for that input.
 *
 * In some cases, the minimum represented alternative in the conflicting LL
 * configuration set is not equal to the minimum represented alternative in the
 * conflicting SLL configuration set. Grammars and inputs which result in this
 * scenario are unable to use {@link PredictionMode#SLL}, which in turn means
 * they cannot use the two-stage parsing strategy to improve parsing performance
 * for that input.
 *
 * @see ParserATNSimulator#reportAmbiguity
 * @see ParserErrorListener#reportAmbiguity
 *
 * @since 4.3
 */
var AmbiguityInfo = /** @class */ (function (_super) {
    __extends(AmbiguityInfo, _super);
    /**
     * Constructs a new instance of the {@link AmbiguityInfo} class with the
     * specified detailed ambiguity information.
     *
     * @param decision The decision number
     * @param state The final simulator state identifying the ambiguous
     * alternatives for the current input
     * @param ambigAlts The set of alternatives in the decision that lead to a valid parse.
     *                  The predicted alt is the min(ambigAlts)
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the ambiguity was identified during
     * prediction
     */
    function AmbiguityInfo(decision, state, ambigAlts, input, startIndex, stopIndex) {
        var _this = _super.call(this, decision, state, input, startIndex, stopIndex, state.useContext) || this;
        _this.ambigAlts = ambigAlts;
        return _this;
    }
    Object.defineProperty(AmbiguityInfo.prototype, "ambiguousAlternatives", {
        /**
         * Gets the set of alternatives in the decision that lead to a valid parse.
         *
         * @since 4.5
         */
        get: function () {
            return this.ambigAlts;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], AmbiguityInfo.prototype, "ambigAlts", void 0);
    __decorate([
        NotNull
    ], AmbiguityInfo.prototype, "ambiguousAlternatives", null);
    AmbiguityInfo = __decorate([
        __param(1, NotNull),
        __param(2, NotNull),
        __param(3, NotNull)
    ], AmbiguityInfo);
    return AmbiguityInfo;
}(DecisionEventInfo));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:27.6094030-07:00
/**
 * Represents the type of recognizer an ATN applies to.
 *
 * @author Sam Harwell
 */
var ATNType;
(function (ATNType) {
    /**
     * A lexer grammar.
     */
    ATNType[ATNType["LEXER"] = 0] = "LEXER";
    /**
     * A parser grammar.
     */
    ATNType[ATNType["PARSER"] = 1] = "PARSER";
})(ATNType || (ATNType = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class represents profiling event information for a context sensitivity.
 * Context sensitivities are decisions where a particular input resulted in an
 * SLL conflict, but LL prediction produced a single unique alternative.
 *
 * In some cases, the unique alternative identified by LL prediction is not
 * equal to the minimum represented alternative in the conflicting SLL
 * configuration set. Grammars and inputs which result in this scenario are
 * unable to use {@link PredictionMode#SLL}, which in turn means they cannot use
 * the two-stage parsing strategy to improve parsing performance for that
 * input.
 *
 * @see ParserATNSimulator#reportContextSensitivity
 * @see ParserErrorListener#reportContextSensitivity
 *
 * @since 4.3
 */
var ContextSensitivityInfo = /** @class */ (function (_super) {
    __extends(ContextSensitivityInfo, _super);
    /**
     * Constructs a new instance of the {@link ContextSensitivityInfo} class
     * with the specified detailed context sensitivity information.
     *
     * @param decision The decision number
     * @param state The final simulator state containing the unique
     * alternative identified by full-context prediction
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the context sensitivity was
     * identified during full-context prediction
     */
    function ContextSensitivityInfo(decision, state, input, startIndex, stopIndex) {
        return _super.call(this, decision, state, input, startIndex, stopIndex, true) || this;
    }
    ContextSensitivityInfo = __decorate([
        __param(1, NotNull),
        __param(2, NotNull)
    ], ContextSensitivityInfo);
    return ContextSensitivityInfo;
}(DecisionEventInfo));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class contains profiling gathered for a particular decision.
 *
 * Parsing performance in ANTLR 4 is heavily influenced by both static factors
 * (e.g. the form of the rules in the grammar) and dynamic factors (e.g. the
 * choice of input and the state of the DFA cache at the time profiling
 * operations are started). For best results, gather and use aggregate
 * statistics from a large sample of inputs representing the inputs expected in
 * production before using the results to make changes in the grammar.
 *
 * @since 4.3
 */
var DecisionInfo = /** @class */ (function () {
    /**
     * Constructs a new instance of the {@link DecisionInfo} class to contain
     * statistics for a particular decision.
     *
     * @param decision The decision number
     */
    function DecisionInfo(decision) {
        /**
         * The total number of times {@link ParserATNSimulator#adaptivePredict} was
         * invoked for this decision.
         */
        this.invocations = 0;
        /**
         * The total time spent in {@link ParserATNSimulator#adaptivePredict} for
         * this decision, in nanoseconds.
         *
         * The value of this field contains the sum of differential results obtained
         * by {@link System#nanoTime()}, and is not adjusted to compensate for JIT
         * and/or garbage collection overhead. For best accuracy, use a modern JVM
         * implementation that provides precise results from
         * {@link System#nanoTime()}, and perform profiling in a separate process
         * which is warmed up by parsing the input prior to profiling. If desired,
         * call {@link ATNSimulator#clearDFA} to reset the DFA cache to its initial
         * state before starting the profiling measurement pass.
         */
        this.timeInPrediction = 0;
        /**
         * The sum of the lookahead required for SLL prediction for this decision.
         * Note that SLL prediction is used before LL prediction for performance
         * reasons even when {@link PredictionMode#LL} or
         * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION} is used.
         */
        this.SLL_TotalLook = 0;
        /**
         * Gets the minimum lookahead required for any single SLL prediction to
         * complete for this decision, by reaching a unique prediction, reaching an
         * SLL conflict state, or encountering a syntax error.
         */
        this.SLL_MinLook = 0;
        /**
         * Gets the maximum lookahead required for any single SLL prediction to
         * complete for this decision, by reaching a unique prediction, reaching an
         * SLL conflict state, or encountering a syntax error.
         */
        this.SLL_MaxLook = 0;
        /**
         * The sum of the lookahead required for LL prediction for this decision.
         * Note that LL prediction is only used when SLL prediction reaches a
         * conflict state.
         */
        this.LL_TotalLook = 0;
        /**
         * Gets the minimum lookahead required for any single LL prediction to
         * complete for this decision. An LL prediction completes when the algorithm
         * reaches a unique prediction, a conflict state (for
         * {@link PredictionMode#LL}, an ambiguity state (for
         * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION}, or a syntax error.
         */
        this.LL_MinLook = 0;
        /**
         * Gets the maximum lookahead required for any single LL prediction to
         * complete for this decision. An LL prediction completes when the algorithm
         * reaches a unique prediction, a conflict state (for
         * {@link PredictionMode#LL}, an ambiguity state (for
         * {@link PredictionMode#LL_EXACT_AMBIG_DETECTION}, or a syntax error.
         */
        this.LL_MaxLook = 0;
        /**
         * A collection of {@link ContextSensitivityInfo} instances describing the
         * context sensitivities encountered during LL prediction for this decision.
         *
         * @see ContextSensitivityInfo
         */
        this.contextSensitivities = [];
        /**
         * A collection of {@link ErrorInfo} instances describing the parse errors
         * identified during calls to {@link ParserATNSimulator#adaptivePredict} for
         * this decision.
         *
         * @see ErrorInfo
         */
        this.errors = [];
        /**
         * A collection of {@link AmbiguityInfo} instances describing the
         * ambiguities encountered during LL prediction for this decision.
         *
         * @see AmbiguityInfo
         */
        this.ambiguities = [];
        /**
         * A collection of {@link PredicateEvalInfo} instances describing the
         * results of evaluating individual predicates during prediction for this
         * decision.
         *
         * @see PredicateEvalInfo
         */
        this.predicateEvals = [];
        /**
         * The total number of ATN transitions required during SLL prediction for
         * this decision. An ATN transition is determined by the number of times the
         * DFA does not contain an edge that is required for prediction, resulting
         * in on-the-fly computation of that edge.
         *
         * If DFA caching of SLL transitions is employed by the implementation, ATN
         * computation may cache the computed edge for efficient lookup during
         * future parsing of this decision. Otherwise, the SLL parsing algorithm
         * will use ATN transitions exclusively.
         *
         * @see #SLL_ATNTransitions
         * @see ParserATNSimulator#computeTargetState
         * @see LexerATNSimulator#computeTargetState
         */
        this.SLL_ATNTransitions = 0;
        /**
         * The total number of DFA transitions required during SLL prediction for
         * this decision.
         *
         * If the ATN simulator implementation does not use DFA caching for SLL
         * transitions, this value will be 0.
         *
         * @see ParserATNSimulator#getExistingTargetState
         * @see LexerATNSimulator#getExistingTargetState
         */
        this.SLL_DFATransitions = 0;
        /**
         * Gets the total number of times SLL prediction completed in a conflict
         * state, resulting in fallback to LL prediction.
         *
         * Note that this value is not related to whether or not
         * {@link PredictionMode#SLL} may be used successfully with a particular
         * grammar. If the ambiguity resolution algorithm applied to the SLL
         * conflicts for this decision produce the same result as LL prediction for
         * this decision, {@link PredictionMode#SLL} would produce the same overall
         * parsing result as {@link PredictionMode#LL}.
         */
        this.LL_Fallback = 0;
        /**
         * The total number of ATN transitions required during LL prediction for
         * this decision. An ATN transition is determined by the number of times the
         * DFA does not contain an edge that is required for prediction, resulting
         * in on-the-fly computation of that edge.
         *
         * If DFA caching of LL transitions is employed by the implementation, ATN
         * computation may cache the computed edge for efficient lookup during
         * future parsing of this decision. Otherwise, the LL parsing algorithm will
         * use ATN transitions exclusively.
         *
         * @see #LL_DFATransitions
         * @see ParserATNSimulator#computeTargetState
         * @see LexerATNSimulator#computeTargetState
         */
        this.LL_ATNTransitions = 0;
        /**
         * The total number of DFA transitions required during LL prediction for
         * this decision.
         *
         * If the ATN simulator implementation does not use DFA caching for LL
         * transitions, this value will be 0.
         *
         * @see ParserATNSimulator#getExistingTargetState
         * @see LexerATNSimulator#getExistingTargetState
         */
        this.LL_DFATransitions = 0;
        this.decision = decision;
    }
    DecisionInfo.prototype.toString = function () {
        return "{" +
            "decision=" + this.decision +
            ", contextSensitivities=" + this.contextSensitivities.length +
            ", errors=" + this.errors.length +
            ", ambiguities=" + this.ambiguities.length +
            ", SLL_lookahead=" + this.SLL_TotalLook +
            ", SLL_ATNTransitions=" + this.SLL_ATNTransitions +
            ", SLL_DFATransitions=" + this.SLL_DFATransitions +
            ", LL_Fallback=" + this.LL_Fallback +
            ", LL_lookahead=" + this.LL_TotalLook +
            ", LL_ATNTransitions=" + this.LL_ATNTransitions +
            "}";
    };
    __decorate([
        Override
    ], DecisionInfo.prototype, "toString", null);
    return DecisionInfo;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class represents profiling event information for a syntax error
 * identified during prediction. Syntax errors occur when the prediction
 * algorithm is unable to identify an alternative which would lead to a
 * successful parse.
 *
 * @see Parser#notifyErrorListeners(Token, String, RecognitionException)
 * @see ANTLRErrorListener#syntaxError
 *
 * @since 4.3
 */
var ErrorInfo = /** @class */ (function (_super) {
    __extends(ErrorInfo, _super);
    /**
     * Constructs a new instance of the {@link ErrorInfo} class with the
     * specified detailed syntax error information.
     *
     * @param decision The decision number
     * @param state The final simulator state reached during prediction
     * prior to reaching the {@link ATNSimulator#ERROR} state
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the syntax error was identified
     */
    function ErrorInfo(decision, state, input, startIndex, stopIndex) {
        return _super.call(this, decision, state, input, startIndex, stopIndex, state.useContext) || this;
    }
    ErrorInfo = __decorate([
        __param(1, NotNull),
        __param(2, NotNull)
    ], ErrorInfo);
    return ErrorInfo;
}(DecisionEventInfo));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:29.0172086-07:00
/**
 * Represents the serialization type of a {@link LexerAction}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerActionType;
(function (LexerActionType) {
    /**
     * The type of a {@link LexerChannelAction} action.
     */
    LexerActionType[LexerActionType["CHANNEL"] = 0] = "CHANNEL";
    /**
     * The type of a {@link LexerCustomAction} action.
     */
    LexerActionType[LexerActionType["CUSTOM"] = 1] = "CUSTOM";
    /**
     * The type of a {@link LexerModeAction} action.
     */
    LexerActionType[LexerActionType["MODE"] = 2] = "MODE";
    /**
     * The type of a {@link LexerMoreAction} action.
     */
    LexerActionType[LexerActionType["MORE"] = 3] = "MORE";
    /**
     * The type of a {@link LexerPopModeAction} action.
     */
    LexerActionType[LexerActionType["POP_MODE"] = 4] = "POP_MODE";
    /**
     * The type of a {@link LexerPushModeAction} action.
     */
    LexerActionType[LexerActionType["PUSH_MODE"] = 5] = "PUSH_MODE";
    /**
     * The type of a {@link LexerSkipAction} action.
     */
    LexerActionType[LexerActionType["SKIP"] = 6] = "SKIP";
    /**
     * The type of a {@link LexerTypeAction} action.
     */
    LexerActionType[LexerActionType["TYPE"] = 7] = "TYPE";
})(LexerActionType || (LexerActionType = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class represents profiling event information for tracking the lookahead
 * depth required in order to make a prediction.
 *
 * @since 4.3
 */
var LookaheadEventInfo = /** @class */ (function (_super) {
    __extends(LookaheadEventInfo, _super);
    /**
     * Constructs a new instance of the {@link LookaheadEventInfo} class with
     * the specified detailed lookahead information.
     *
     * @param decision The decision number
     * @param state The final simulator state containing the necessary
     * information to determine the result of a prediction, or `undefined` if
     * the final state is not available
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the prediction was finally made
     * @param fullCtx `true` if the current lookahead is part of an LL
     * prediction; otherwise, `false` if the current lookahead is part of
     * an SLL prediction
     */
    function LookaheadEventInfo(decision, state, predictedAlt, input, startIndex, stopIndex, fullCtx) {
        var _this = _super.call(this, decision, state, input, startIndex, stopIndex, fullCtx) || this;
        _this.predictedAlt = predictedAlt;
        return _this;
    }
    LookaheadEventInfo = __decorate([
        __param(3, NotNull)
    ], LookaheadEventInfo);
    return LookaheadEventInfo;
}(DecisionEventInfo));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class represents profiling event information for semantic predicate
 * evaluations which occur during prediction.
 *
 * @see ParserATNSimulator#evalSemanticContext
 *
 * @since 4.3
 */
var PredicateEvalInfo = /** @class */ (function (_super) {
    __extends(PredicateEvalInfo, _super);
    /**
     * Constructs a new instance of the {@link PredicateEvalInfo} class with the
     * specified detailed predicate evaluation information.
     *
     * @param state The simulator state
     * @param decision The decision number
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the predicate evaluation was
     * triggered. Note that the input stream may be reset to other positions for
     * the actual evaluation of individual predicates.
     * @param semctx The semantic context which was evaluated
     * @param evalResult The results of evaluating the semantic context
     * @param predictedAlt The alternative number for the decision which is
     * guarded by the semantic context `semctx`. See {@link #predictedAlt}
     * for more information.
     *
     * @see ParserATNSimulator#evalSemanticContext(SemanticContext, ParserRuleContext, int)
     * @see SemanticContext#eval(Recognizer, RuleContext)
     */
    function PredicateEvalInfo(state, decision, input, startIndex, stopIndex, semctx, evalResult, predictedAlt) {
        var _this = _super.call(this, decision, state, input, startIndex, stopIndex, state.useContext) || this;
        _this.semctx = semctx;
        _this.evalResult = evalResult;
        _this.predictedAlt = predictedAlt;
        return _this;
    }
    PredicateEvalInfo = __decorate([
        __param(0, NotNull),
        __param(2, NotNull),
        __param(5, NotNull)
    ], PredicateEvalInfo);
    return PredicateEvalInfo;
}(DecisionEventInfo));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:37.8530496-07:00
var TransitionType;
(function (TransitionType) {
    // constants for serialization
    TransitionType[TransitionType["EPSILON"] = 1] = "EPSILON";
    TransitionType[TransitionType["RANGE"] = 2] = "RANGE";
    TransitionType[TransitionType["RULE"] = 3] = "RULE";
    TransitionType[TransitionType["PREDICATE"] = 4] = "PREDICATE";
    TransitionType[TransitionType["ATOM"] = 5] = "ATOM";
    TransitionType[TransitionType["ACTION"] = 6] = "ACTION";
    TransitionType[TransitionType["SET"] = 7] = "SET";
    TransitionType[TransitionType["NOT_SET"] = 8] = "NOT_SET";
    TransitionType[TransitionType["WILDCARD"] = 9] = "WILDCARD";
    TransitionType[TransitionType["PRECEDENCE"] = 10] = "PRECEDENCE";
})(TransitionType || (TransitionType = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:42.1346951-07:00
var MultiMap = /** @class */ (function (_super) {
    __extends(MultiMap, _super);
    function MultiMap() {
        return _super.call(this) || this;
    }
    MultiMap.prototype.map = function (key, value) {
        var elementsForKey = _super.prototype.get.call(this, key);
        if (!elementsForKey) {
            elementsForKey = [];
            _super.prototype.set.call(this, key, elementsForKey);
        }
        elementsForKey.push(value);
    };
    MultiMap.prototype.getPairs = function () {
        var pairs = [];
        this.forEach(function (values, key) {
            values.forEach(function (v) {
                pairs.push([key, v]);
            });
        });
        return pairs;
    };
    return MultiMap;
}(Map));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:42.5447085-07:00
/**
 * This exception is thrown to cancel a parsing operation. This exception does
 * not extend {@link RecognitionException}, allowing it to bypass the standard
 * error recovery mechanisms. {@link BailErrorStrategy} throws this exception in
 * response to a parse error.
 *
 * @author Sam Harwell
 */
var ParseCancellationException = /** @class */ (function (_super) {
    __extends(ParseCancellationException, _super);
    function ParseCancellationException(cause) {
        var _this = _super.call(this, cause.message) || this;
        _this.cause = cause;
        _this.stack = cause.stack;
        return _this;
    }
    ParseCancellationException.prototype.getCause = function () {
        return this.cause;
    };
    return ParseCancellationException;
}(Error));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var AbstractParseTreeVisitor = /** @class */ (function () {
    function AbstractParseTreeVisitor() {
    }
    /**
     * {@inheritDoc}
     *
     * The default implementation calls {@link ParseTree#accept} on the
     * specified tree.
     */
    AbstractParseTreeVisitor.prototype.visit = function (tree) {
        return tree.accept(this);
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation initializes the aggregate result to
     * {@link #defaultResult defaultResult()}. Before visiting each child, it
     * calls {@link #shouldVisitNextChild shouldVisitNextChild}; if the result
     * is `false` no more children are visited and the current aggregate
     * result is returned. After visiting a child, the aggregate result is
     * updated by calling {@link #aggregateResult aggregateResult} with the
     * previous aggregate result and the result of visiting the child.
     *
     * The default implementation is not safe for use in visitors that modify
     * the tree structure. Visitors that modify the tree should override this
     * method to behave properly in respect to the specific algorithm in use.
     */
    AbstractParseTreeVisitor.prototype.visitChildren = function (node) {
        var result = this.defaultResult();
        var n = node.childCount;
        for (var i = 0; i < n; i++) {
            if (!this.shouldVisitNextChild(node, result)) {
                break;
            }
            var c = node.getChild(i);
            var childResult = c.accept(this);
            result = this.aggregateResult(result, childResult);
        }
        return result;
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation returns the result of
     * {@link #defaultResult defaultResult}.
     */
    AbstractParseTreeVisitor.prototype.visitTerminal = function (node) {
        return this.defaultResult();
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation returns the result of
     * {@link #defaultResult defaultResult}.
     */
    AbstractParseTreeVisitor.prototype.visitErrorNode = function (node) {
        return this.defaultResult();
    };
    /**
     * Aggregates the results of visiting multiple children of a node. After
     * either all children are visited or {@link #shouldVisitNextChild} returns
     * `false`, the aggregate value is returned as the result of
     * {@link #visitChildren}.
     *
     * The default implementation returns `nextResult`, meaning
     * {@link #visitChildren} will return the result of the last child visited
     * (or return the initial value if the node has no children).
     *
     * @param aggregate The previous aggregate value. In the default
     * implementation, the aggregate value is initialized to
     * {@link #defaultResult}, which is passed as the `aggregate` argument
     * to this method after the first child node is visited.
     * @param nextResult The result of the immediately preceeding call to visit
     * a child node.
     *
     * @returns The updated aggregate result.
     */
    AbstractParseTreeVisitor.prototype.aggregateResult = function (aggregate, nextResult) {
        return nextResult;
    };
    /**
     * This method is called after visiting each child in
     * {@link #visitChildren}. This method is first called before the first
     * child is visited; at that point `currentResult` will be the initial
     * value (in the default implementation, the initial value is returned by a
     * call to {@link #defaultResult}. This method is not called after the last
     * child is visited.
     *
     * The default implementation always returns `true`, indicating that
     * `visitChildren` should only return after all children are visited.
     * One reason to override this method is to provide a "short circuit"
     * evaluation option for situations where the result of visiting a single
     * child has the potential to determine the result of the visit operation as
     * a whole.
     *
     * @param node The {@link RuleNode} whose children are currently being
     * visited.
     * @param currentResult The current aggregate result of the children visited
     * to the current point.
     *
     * @returns `true` to continue visiting children. Otherwise return
     * `false` to stop visiting children and immediately return the
     * current aggregate result from {@link #visitChildren}.
     */
    AbstractParseTreeVisitor.prototype.shouldVisitNextChild = function (node, currentResult) {
        return true;
    };
    __decorate([
        Override,
        __param(0, NotNull)
    ], AbstractParseTreeVisitor.prototype, "visit", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], AbstractParseTreeVisitor.prototype, "visitChildren", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], AbstractParseTreeVisitor.prototype, "visitTerminal", null);
    __decorate([
        Override,
        __param(0, NotNull)
    ], AbstractParseTreeVisitor.prototype, "visitErrorNode", null);
    __decorate([
        __param(0, NotNull)
    ], AbstractParseTreeVisitor.prototype, "shouldVisitNextChild", null);
    return AbstractParseTreeVisitor;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var ParseTreeWalker = /** @class */ (function () {
    function ParseTreeWalker() {
    }
    ParseTreeWalker.prototype.walk = function (listener, t) {
        var nodeStack = [];
        var indexStack = [];
        var currentNode = t;
        var currentIndex = 0;
        while (currentNode) {
            // pre-order visit
            if (currentNode instanceof ErrorNode) {
                if (listener.visitErrorNode) {
                    listener.visitErrorNode(currentNode);
                }
            }
            else if (currentNode instanceof TerminalNode) {
                if (listener.visitTerminal) {
                    listener.visitTerminal(currentNode);
                }
            }
            else {
                this.enterRule(listener, currentNode);
            }
            // Move down to first child, if exists
            if (currentNode.childCount > 0) {
                nodeStack.push(currentNode);
                indexStack.push(currentIndex);
                currentIndex = 0;
                currentNode = currentNode.getChild(0);
                continue;
            }
            // No child nodes, so walk tree
            do {
                // post-order visit
                if (currentNode instanceof RuleNode) {
                    this.exitRule(listener, currentNode);
                }
                // No parent, so no siblings
                if (nodeStack.length === 0) {
                    currentNode = undefined;
                    currentIndex = 0;
                    break;
                }
                // Move to next sibling if possible
                var last = nodeStack[nodeStack.length - 1];
                currentIndex++;
                currentNode = currentIndex < last.childCount ? last.getChild(currentIndex) : undefined;
                if (currentNode) {
                    break;
                }
                // No next sibling, so move up
                currentNode = nodeStack.pop();
                currentIndex = indexStack.pop();
            } while (currentNode);
        }
    };
    /**
     * The discovery of a rule node, involves sending two events: the generic
     * {@link ParseTreeListener#enterEveryRule} and a
     * {@link RuleContext}-specific event. First we trigger the generic and then
     * the rule specific. We to them in reverse order upon finishing the node.
     */
    ParseTreeWalker.prototype.enterRule = function (listener, r) {
        var ctx = r.ruleContext;
        if (listener.enterEveryRule) {
            listener.enterEveryRule(ctx);
        }
        ctx.enterRule(listener);
    };
    ParseTreeWalker.prototype.exitRule = function (listener, r) {
        var ctx = r.ruleContext;
        ctx.exitRule(listener);
        if (listener.exitEveryRule) {
            listener.exitEveryRule(ctx);
        }
    };
    return ParseTreeWalker;
}());
(function (ParseTreeWalker) {
    ParseTreeWalker.DEFAULT = new ParseTreeWalker();
})(ParseTreeWalker || (ParseTreeWalker = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Represents the result of matching a {@link ParseTree} against a tree pattern.
 */
var ParseTreeMatch = /** @class */ (function () {
    /**
     * Constructs a new instance of {@link ParseTreeMatch} from the specified
     * parse tree and pattern.
     *
     * @param tree The parse tree to match against the pattern.
     * @param pattern The parse tree pattern.
     * @param labels A mapping from label names to collections of
     * {@link ParseTree} objects located by the tree pattern matching process.
     * @param mismatchedNode The first node which failed to match the tree
     * pattern during the matching process.
     *
     * @throws {@link Error} if `tree` is not defined
     * @throws {@link Error} if `pattern` is not defined
     * @throws {@link Error} if `labels` is not defined
     */
    function ParseTreeMatch(tree, pattern, labels, mismatchedNode) {
        if (!tree) {
            throw new Error("tree cannot be null");
        }
        if (!pattern) {
            throw new Error("pattern cannot be null");
        }
        if (!labels) {
            throw new Error("labels cannot be null");
        }
        this._tree = tree;
        this._pattern = pattern;
        this._labels = labels;
        this._mismatchedNode = mismatchedNode;
    }
    /**
     * Get the last node associated with a specific `label`.
     *
     * For example, for pattern `<id:ID>`, `get("id")` returns the
     * node matched for that `ID`. If more than one node
     * matched the specified label, only the last is returned. If there is
     * no node associated with the label, this returns `undefined`.
     *
     * Pattern tags like `<ID>` and `<expr>` without labels are
     * considered to be labeled with `ID` and `expr`, respectively.
     *
     * @param label The label to check.
     *
     * @returns The last {@link ParseTree} to match a tag with the specified
     * label, or `undefined` if no parse tree matched a tag with the label.
     */
    ParseTreeMatch.prototype.get = function (label) {
        var parseTrees = this._labels.get(label);
        if (!parseTrees || parseTrees.length === 0) {
            return undefined;
        }
        return parseTrees[parseTrees.length - 1]; // return last if multiple
    };
    /**
     * Return all nodes matching a rule or token tag with the specified label.
     *
     * If the `label` is the name of a parser rule or token in the
     * grammar, the resulting list will contain both the parse trees matching
     * rule or tags explicitly labeled with the label and the complete set of
     * parse trees matching the labeled and unlabeled tags in the pattern for
     * the parser rule or token. For example, if `label` is `"foo"`,
     * the result will contain *all* of the following.
     *
     * * Parse tree nodes matching tags of the form `<foo:anyRuleName>` and
     *   `<foo:AnyTokenName>`.
     * * Parse tree nodes matching tags of the form `<anyLabel:foo>`.
     * * Parse tree nodes matching tags of the form `<foo>`.
     *
     * @param label The label.
     *
     * @returns A collection of all {@link ParseTree} nodes matching tags with
     * the specified `label`. If no nodes matched the label, an empty list
     * is returned.
     */
    ParseTreeMatch.prototype.getAll = function (label) {
        var nodes = this._labels.get(label);
        if (!nodes) {
            return [];
        }
        return nodes;
    };
    Object.defineProperty(ParseTreeMatch.prototype, "labels", {
        /**
         * Return a mapping from label &rarr; [list of nodes].
         *
         * The map includes special entries corresponding to the names of rules and
         * tokens referenced in tags in the original pattern. For additional
         * information, see the description of {@link #getAll(String)}.
         *
         * @returns A mapping from labels to parse tree nodes. If the parse tree
         * pattern did not contain any rule or token tags, this map will be empty.
         */
        get: function () {
            return this._labels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseTreeMatch.prototype, "mismatchedNode", {
        /**
         * Get the node at which we first detected a mismatch.
         *
         * @returns the node at which we first detected a mismatch, or `undefined`
         * if the match was successful.
         */
        get: function () {
            return this._mismatchedNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseTreeMatch.prototype, "succeeded", {
        /**
         * Gets a value indicating whether the match operation succeeded.
         *
         * @returns `true` if the match operation succeeded; otherwise,
         * `false`.
         */
        get: function () {
            return !this._mismatchedNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseTreeMatch.prototype, "pattern", {
        /**
         * Get the tree pattern we are matching against.
         *
         * @returns The tree pattern we are matching against.
         */
        get: function () {
            return this._pattern;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseTreeMatch.prototype, "tree", {
        /**
         * Get the parse tree we are trying to match to a pattern.
         *
         * @returns The {@link ParseTree} we are trying to match to a pattern.
         */
        get: function () {
            return this._tree;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     */
    ParseTreeMatch.prototype.toString = function () {
        return "Match " + (this.succeeded ? "succeeded" : "failed") + "; found " + this.labels.size + " labels";
    };
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], ParseTreeMatch.prototype, "getAll", null);
    __decorate([
        NotNull
    ], ParseTreeMatch.prototype, "labels", null);
    __decorate([
        NotNull
    ], ParseTreeMatch.prototype, "pattern", null);
    __decorate([
        NotNull
    ], ParseTreeMatch.prototype, "tree", null);
    __decorate([
        Override
    ], ParseTreeMatch.prototype, "toString", null);
    ParseTreeMatch = __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull)
    ], ParseTreeMatch);
    return ParseTreeMatch;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * A {@link Token} object representing an entire subtree matched by a parser
 * rule; e.g., `<expr>`. These tokens are created for {@link TagChunk}
 * chunks where the tag corresponds to a parser rule.
 */
var RuleTagToken = /** @class */ (function () {
    /**
     * Constructs a new instance of {@link RuleTagToken} with the specified rule
     * name, bypass token type, and label.
     *
     * @param ruleName The name of the parser rule this rule tag matches.
     * @param bypassTokenType The bypass token type assigned to the parser rule.
     * @param label The label associated with the rule tag, or `undefined` if
     * the rule tag is unlabeled.
     *
     * @exception IllegalArgumentException if `ruleName` is not defined
     * or empty.
     */
    function RuleTagToken(ruleName, bypassTokenType, label) {
        if (ruleName == null || ruleName.length === 0) {
            throw new Error("ruleName cannot be null or empty.");
        }
        this._ruleName = ruleName;
        this.bypassTokenType = bypassTokenType;
        this._label = label;
    }
    Object.defineProperty(RuleTagToken.prototype, "ruleName", {
        /**
         * Gets the name of the rule associated with this rule tag.
         *
         * @returns The name of the parser rule associated with this rule tag.
         */
        get: function () {
            return this._ruleName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "label", {
        /**
         * Gets the label associated with the rule tag.
         *
         * @returns The name of the label associated with the rule tag, or
         * `undefined` if this is an unlabeled rule tag.
         */
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "channel", {
        /**
         * {@inheritDoc}
         *
         * Rule tag tokens are always placed on the {@link #DEFAULT_CHANNEL}.
         */
        get: function () {
            return exports.Token.DEFAULT_CHANNEL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "text", {
        /**
         * {@inheritDoc}
         *
         * This method returns the rule tag formatted with `<` and `>`
         * delimiters.
         */
        get: function () {
            if (this._label != null) {
                return "<" + this._label + ":" + this._ruleName + ">";
            }
            return "<" + this._ruleName + ">";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "type", {
        /**
         * {@inheritDoc}
         *
         * Rule tag tokens have types assigned according to the rule bypass
         * transitions created during ATN deserialization.
         */
        get: function () {
            return this.bypassTokenType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "line", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns 0.
         */
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "charPositionInLine", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns -1.
         */
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "tokenIndex", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns -1.
         */
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "startIndex", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns -1.
         */
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "stopIndex", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns -1.
         */
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "tokenSource", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns `undefined`.
         */
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "inputStream", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns `undefined`.
         */
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} returns a string of the form
     * `ruleName:bypassTokenType`.
     */
    RuleTagToken.prototype.toString = function () {
        return this._ruleName + ":" + this.bypassTokenType;
    };
    __decorate([
        NotNull
    ], RuleTagToken.prototype, "ruleName", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "channel", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "text", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "type", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "line", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "charPositionInLine", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "tokenIndex", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "startIndex", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "stopIndex", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "tokenSource", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "inputStream", null);
    __decorate([
        Override
    ], RuleTagToken.prototype, "toString", null);
    RuleTagToken = __decorate([
        __param(0, NotNull)
    ], RuleTagToken);
    return RuleTagToken;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * A {@link Token} object representing a token of a particular type; e.g.,
 * `<ID>`. These tokens are created for {@link TagChunk} chunks where the
 * tag corresponds to a lexer rule or token type.
 */
var TokenTagToken = /** @class */ (function (_super) {
    __extends(TokenTagToken, _super);
    /**
     * Constructs a new instance of {@link TokenTagToken} with the specified
     * token name, type, and label.
     *
     * @param tokenName The token name.
     * @param type The token type.
     * @param label The label associated with the token tag, or `undefined` if
     * the token tag is unlabeled.
     */
    function TokenTagToken(tokenName, type, label) {
        var _this = _super.call(this, type) || this;
        _this._tokenName = tokenName;
        _this._label = label;
        return _this;
    }
    Object.defineProperty(TokenTagToken.prototype, "tokenName", {
        /**
         * Gets the token name.
         * @returns The token name.
         */
        get: function () {
            return this._tokenName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenTagToken.prototype, "label", {
        /**
         * Gets the label associated with the rule tag.
         *
         * @returns The name of the label associated with the rule tag, or
         * `undefined` if this is an unlabeled rule tag.
         */
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenTagToken.prototype, "text", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link TokenTagToken} returns the token tag
         * formatted with `<` and `>` delimiters.
         */
        get: function () {
            if (this._label != null) {
                return "<" + this._label + ":" + this._tokenName + ">";
            }
            return "<" + this._tokenName + ">";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link TokenTagToken} returns a string of the form
     * `tokenName:type`.
     */
    TokenTagToken.prototype.toString = function () {
        return this._tokenName + ":" + this.type;
    };
    __decorate([
        NotNull
    ], TokenTagToken.prototype, "_tokenName", void 0);
    __decorate([
        NotNull
    ], TokenTagToken.prototype, "tokenName", null);
    __decorate([
        Override
    ], TokenTagToken.prototype, "text", null);
    __decorate([
        Override
    ], TokenTagToken.prototype, "toString", null);
    TokenTagToken = __decorate([
        __param(0, NotNull)
    ], TokenTagToken);
    return TokenTagToken;
}(CommonToken));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// The following are "package-private modules" - exported individually but don't need to be part of the public API
// exposed by this file.
//
// export * from "./Chunk";
// export * from "./TagChunk";
// export * from "./TextChunk";

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
// ConvertTo-TS run at 2016-10-04T11:26:45.2799060-07:00
/**
 * A chunk is either a token tag, a rule tag, or a span of literal text within a
 * tree pattern.
 *
 * The method {@link ParseTreePatternMatcher#split(String)} returns a list of
 * chunks in preparation for creating a token stream by
 * {@link ParseTreePatternMatcher#tokenize(String)}. From there, we get a parse
 * tree from with {@link ParseTreePatternMatcher#compile(String, int)}. These
 * chunks are converted to {@link RuleTagToken}, {@link TokenTagToken}, or the
 * regular tokens of the text surrounding the tags.
 */
var Chunk = /** @class */ (function () {
    function Chunk() {
    }
    return Chunk;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Represents a placeholder tag in a tree pattern. A tag can have any of the
 * following forms.
 *
 * * `expr`: An unlabeled placeholder for a parser rule `expr`.
 * * `ID`: An unlabeled placeholder for a token of type `ID`.
 * * `e:expr`: A labeled placeholder for a parser rule `expr`.
 * * `id:ID`: A labeled placeholder for a token of type `ID`.
 *
 * This class does not perform any validation on the tag or label names aside
 * from ensuring that the tag is a defined, non-empty string.
 */
var TagChunk = /** @class */ (function (_super) {
    __extends(TagChunk, _super);
    /**
     * Construct a new instance of {@link TagChunk} using the specified label
     * and tag.
     *
     * @param label The label for the tag. If this is `undefined`, the
     * {@link TagChunk} represents an unlabeled tag.
     * @param tag The tag, which should be the name of a parser rule or token
     * type.
     *
     * @exception IllegalArgumentException if `tag` is not defined or
     * empty.
     */
    function TagChunk(tag, label) {
        var _this = _super.call(this) || this;
        if (tag == null || tag.length === 0) {
            throw new Error("tag cannot be null or empty");
        }
        _this._tag = tag;
        _this._label = label;
        return _this;
    }
    Object.defineProperty(TagChunk.prototype, "tag", {
        /**
         * Get the tag for this chunk.
         *
         * @returns The tag for the chunk.
         */
        get: function () {
            return this._tag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagChunk.prototype, "label", {
        /**
         * Get the label, if any, assigned to this chunk.
         *
         * @returns The label assigned to this chunk, or `undefined` if no label is
         * assigned to the chunk.
         */
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns a text representation of the tag chunk. Labeled tags
     * are returned in the form `label:tag`, and unlabeled tags are
     * returned as just the tag name.
     */
    TagChunk.prototype.toString = function () {
        if (this._label != null) {
            return this._label + ":" + this._tag;
        }
        return this._tag;
    };
    __decorate([
        NotNull
    ], TagChunk.prototype, "tag", null);
    __decorate([
        Override
    ], TagChunk.prototype, "toString", null);
    return TagChunk;
}(Chunk));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Represents a span of raw text (concrete syntax) between tags in a tree
 * pattern string.
 */
var TextChunk = /** @class */ (function (_super) {
    __extends(TextChunk, _super);
    /**
     * Constructs a new instance of {@link TextChunk} with the specified text.
     *
     * @param text The text of this chunk.
     * @exception IllegalArgumentException if `text` is not defined.
     */
    function TextChunk(text) {
        var _this = _super.call(this) || this;
        if (text == null) {
            throw new Error("text cannot be null");
        }
        _this._text = text;
        return _this;
    }
    Object.defineProperty(TextChunk.prototype, "text", {
        /**
         * Gets the raw text of this chunk.
         *
         * @returns The text of the chunk.
         */
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link TextChunk} returns the result of
     * `text` in single quotes.
     */
    TextChunk.prototype.toString = function () {
        return "'" + this._text + "'";
    };
    __decorate([
        NotNull
    ], TextChunk.prototype, "_text", void 0);
    __decorate([
        NotNull
    ], TextChunk.prototype, "text", null);
    __decorate([
        Override
    ], TextChunk.prototype, "toString", null);
    TextChunk = __decorate([
        __param(0, NotNull)
    ], TextChunk);
    return TextChunk;
}(Chunk));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var TraceListener = /** @class */ (function () {
    function TraceListener(ruleNames, tokenStream) {
        this.ruleNames = ruleNames;
        this.tokenStream = tokenStream;
    }
    TraceListener.prototype.enterEveryRule = function (ctx) {
        console.log("enter   " + this.ruleNames[ctx.ruleIndex] +
            ", LT(1)=" + this.tokenStream.LT(1).text);
    };
    TraceListener.prototype.exitEveryRule = function (ctx) {
        console.log("exit    " + this.ruleNames[ctx.ruleIndex] +
            ", LT(1)=" + this.tokenStream.LT(1).text);
    };
    TraceListener.prototype.visitErrorNode = function (node) {
        // intentionally empty
    };
    TraceListener.prototype.visitTerminal = function (node) {
        var parent = node.parent.ruleContext;
        var token = node.symbol;
        console.log("consume " + token + " rule " + this.ruleNames[parent.ruleIndex]);
    };
    __decorate([
        Override
    ], TraceListener.prototype, "enterEveryRule", null);
    __decorate([
        Override
    ], TraceListener.prototype, "exitEveryRule", null);
    __decorate([
        Override
    ], TraceListener.prototype, "visitErrorNode", null);
    __decorate([
        Override
    ], TraceListener.prototype, "visitTerminal", null);
    return TraceListener;
}());
exports.ParseTreePatternMatcher = /** @class */ (function () {
    /**
     * Constructs a {@link ParseTreePatternMatcher} or from a {@link Lexer} and
     * {@link Parser} object. The lexer input stream is altered for tokenizing
     * the tree patterns. The parser is used as a convenient mechanism to get
     * the grammar name, plus token, rule names.
     */
    function ParseTreePatternMatcher(lexer, parser) {
        this.start = "<";
        this.stop = ">";
        this.escape = "\\"; // e.g., \< and \> must escape BOTH!
        /**
         * Regular expression corresponding to escape, for global replace
         */
        this.escapeRE = /\\/g;
        this._lexer = lexer;
        this._parser = parser;
    }
    /**
     * Set the delimiters used for marking rule and token tags within concrete
     * syntax used by the tree pattern parser.
     *
     * @param start The start delimiter.
     * @param stop The stop delimiter.
     * @param escapeLeft The escape sequence to use for escaping a start or stop delimiter.
     *
     * @throws {@link Error} if `start` is not defined or empty.
     * @throws {@link Error} if `stop` is not defined or empty.
     */
    ParseTreePatternMatcher.prototype.setDelimiters = function (start, stop, escapeLeft) {
        if (!start) {
            throw new Error("start cannot be null or empty");
        }
        if (!stop) {
            throw new Error("stop cannot be null or empty");
        }
        this.start = start;
        this.stop = stop;
        this.escape = escapeLeft;
        this.escapeRE = new RegExp(escapeLeft.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    };
    ParseTreePatternMatcher.prototype.matches = function (tree, pattern, patternRuleIndex) {
        if (patternRuleIndex === void 0) { patternRuleIndex = 0; }
        if (typeof pattern === "string") {
            var p = this.compile(pattern, patternRuleIndex);
            return this.matches(tree, p);
        }
        else {
            var labels = new MultiMap();
            var mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
            return !mismatchedNode;
        }
    };
    // Implementation of match
    ParseTreePatternMatcher.prototype.match = function (tree, pattern, patternRuleIndex) {
        if (patternRuleIndex === void 0) { patternRuleIndex = 0; }
        if (typeof pattern === "string") {
            var p = this.compile(pattern, patternRuleIndex);
            return this.match(tree, p);
        }
        else {
            var labels = new MultiMap();
            var mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
            return new ParseTreeMatch(tree, pattern, labels, mismatchedNode);
        }
    };
    /**
     * For repeated use of a tree pattern, compile it to a
     * {@link ParseTreePattern} using this method.
     */
    ParseTreePatternMatcher.prototype.compile = function (pattern, patternRuleIndex) {
        var tokenList = this.tokenize(pattern);
        var tokenSrc = new ListTokenSource(tokenList);
        var tokens = new CommonTokenStream(tokenSrc);
        var parser = this._parser;
        var parserInterp = new ParserInterpreter(parser.grammarFileName, parser.vocabulary, parser.ruleNames, parser.getATNWithBypassAlts(), tokens);
        var tree;
        try {
            parserInterp.errorHandler = new BailErrorStrategy();
            tree = parserInterp.parse(patternRuleIndex);
            //			System.out.println("pattern tree = "+tree.toStringTree(parserInterp));
        }
        catch (e) {
            if (e instanceof ParseCancellationException) {
                throw e.getCause();
            }
            else if (e instanceof RecognitionException) {
                throw e;
            }
            else if (e instanceof Error) {
                throw new ParseTreePatternMatcher.CannotInvokeStartRule(e);
            }
            else {
                throw e;
            }
        }
        // Make sure tree pattern compilation checks for a complete parse
        if (tokens.LA(1) !== exports.Token.EOF) {
            throw new ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern();
        }
        return new ParseTreePattern(this, pattern, patternRuleIndex, tree);
    };
    Object.defineProperty(ParseTreePatternMatcher.prototype, "lexer", {
        /**
         * Used to convert the tree pattern string into a series of tokens. The
         * input stream is reset.
         */
        get: function () {
            return this._lexer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseTreePatternMatcher.prototype, "parser", {
        /**
         * Used to collect to the grammar file name, token names, rule names for
         * used to parse the pattern into a parse tree.
         */
        get: function () {
            return this._parser;
        },
        enumerable: true,
        configurable: true
    });
    // ---- SUPPORT CODE ----
    /**
     * Recursively walk `tree` against `patternTree`, filling
     * `match.`{@link ParseTreeMatch#labels labels}.
     *
     * @returns the first node encountered in `tree` which does not match
     * a corresponding node in `patternTree`, or `undefined` if the match
     * was successful. The specific node returned depends on the matching
     * algorithm used by the implementation, and may be overridden.
     */
    ParseTreePatternMatcher.prototype.matchImpl = function (tree, patternTree, labels) {
        if (!tree) {
            throw new TypeError("tree cannot be null");
        }
        if (!patternTree) {
            throw new TypeError("patternTree cannot be null");
        }
        // x and <ID>, x and y, or x and x; or could be mismatched types
        if (tree instanceof TerminalNode && patternTree instanceof TerminalNode) {
            var mismatchedNode = void 0;
            // both are tokens and they have same type
            if (tree.symbol.type === patternTree.symbol.type) {
                if (patternTree.symbol instanceof TokenTagToken) { // x and <ID>
                    var tokenTagToken = patternTree.symbol;
                    // track label->list-of-nodes for both token name and label (if any)
                    labels.map(tokenTagToken.tokenName, tree);
                    var l = tokenTagToken.label;
                    if (l) {
                        labels.map(l, tree);
                    }
                }
                else if (tree.text === patternTree.text) ;
                else {
                    // x and y
                    if (!mismatchedNode) {
                        mismatchedNode = tree;
                    }
                }
            }
            else {
                if (!mismatchedNode) {
                    mismatchedNode = tree;
                }
            }
            return mismatchedNode;
        }
        if (tree instanceof ParserRuleContext
            && patternTree instanceof ParserRuleContext) {
            var mismatchedNode = void 0;
            // (expr ...) and <expr>
            var ruleTagToken = this.getRuleTagToken(patternTree);
            if (ruleTagToken) {
                if (tree.ruleContext.ruleIndex === patternTree.ruleContext.ruleIndex) {
                    // track label->list-of-nodes for both rule name and label (if any)
                    labels.map(ruleTagToken.ruleName, tree);
                    var l = ruleTagToken.label;
                    if (l) {
                        labels.map(l, tree);
                    }
                }
                else {
                    if (!mismatchedNode) {
                        mismatchedNode = tree;
                    }
                }
                return mismatchedNode;
            }
            // (expr ...) and (expr ...)
            if (tree.childCount !== patternTree.childCount) {
                if (!mismatchedNode) {
                    mismatchedNode = tree;
                }
                return mismatchedNode;
            }
            var n = tree.childCount;
            for (var i = 0; i < n; i++) {
                var childMatch = this.matchImpl(tree.getChild(i), patternTree.getChild(i), labels);
                if (childMatch) {
                    return childMatch;
                }
            }
            return mismatchedNode;
        }
        // if nodes aren't both tokens or both rule nodes, can't match
        return tree;
    };
    /** Is `t` `(expr <expr>)` subtree? */
    ParseTreePatternMatcher.prototype.getRuleTagToken = function (t) {
        if (t instanceof RuleNode) {
            if (t.childCount === 1 && t.getChild(0) instanceof TerminalNode) {
                var c = t.getChild(0);
                if (c.symbol instanceof RuleTagToken) {
                    //					System.out.println("rule tag subtree "+t.toStringTree(parser));
                    return c.symbol;
                }
            }
        }
        return undefined;
    };
    ParseTreePatternMatcher.prototype.tokenize = function (pattern) {
        // split pattern into chunks: sea (raw input) and islands (<ID>, <expr>)
        var chunks = this.split(pattern);
        // create token stream from text and tags
        var tokens = [];
        try {
            for (var chunks_1 = __values(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
                var chunk = chunks_1_1.value;
                if (chunk instanceof TagChunk) {
                    var tagChunk = chunk;
                    var firstChar = tagChunk.tag.substr(0, 1);
                    // add special rule token or conjure up new token from name
                    if (firstChar === firstChar.toUpperCase()) {
                        var ttype = this._parser.getTokenType(tagChunk.tag);
                        if (ttype === exports.Token.INVALID_TYPE) {
                            throw new Error("Unknown token " + tagChunk.tag + " in pattern: " + pattern);
                        }
                        var t = new TokenTagToken(tagChunk.tag, ttype, tagChunk.label);
                        tokens.push(t);
                    }
                    else if (firstChar === firstChar.toLowerCase()) {
                        var ruleIndex = this._parser.getRuleIndex(tagChunk.tag);
                        if (ruleIndex === -1) {
                            throw new Error("Unknown rule " + tagChunk.tag + " in pattern: " + pattern);
                        }
                        var ruleImaginaryTokenType = this._parser.getATNWithBypassAlts().ruleToTokenType[ruleIndex];
                        tokens.push(new RuleTagToken(tagChunk.tag, ruleImaginaryTokenType, tagChunk.label));
                    }
                    else {
                        throw new Error("invalid tag: " + tagChunk.tag + " in pattern: " + pattern);
                    }
                }
                else {
                    var textChunk = chunk;
                    var input = new ANTLRInputStream(textChunk.text);
                    this._lexer.inputStream = input;
                    var t = this._lexer.nextToken();
                    while (t.type !== exports.Token.EOF) {
                        tokens.push(t);
                        t = this._lexer.nextToken();
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (chunks_1_1 && !chunks_1_1.done && (_a = chunks_1.return)) _a.call(chunks_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        //		System.out.println("tokens="+tokens);
        return tokens;
        var e_1, _a;
    };
    /** Split `<ID> = <e:expr> ;` into 4 chunks for tokenizing by {@link #tokenize}. */
    ParseTreePatternMatcher.prototype.split = function (pattern) {
        var p = 0;
        var n = pattern.length;
        var chunks = [];
        // find all start and stop indexes first, then collect
        var starts = [];
        var stops = [];
        while (p < n) {
            if (p === pattern.indexOf(this.escape + this.start, p)) {
                p += this.escape.length + this.start.length;
            }
            else if (p === pattern.indexOf(this.escape + this.stop, p)) {
                p += this.escape.length + this.stop.length;
            }
            else if (p === pattern.indexOf(this.start, p)) {
                starts.push(p);
                p += this.start.length;
            }
            else if (p === pattern.indexOf(this.stop, p)) {
                stops.push(p);
                p += this.stop.length;
            }
            else {
                p++;
            }
        }
        //		System.out.println("");
        //		System.out.println(starts);
        //		System.out.println(stops);
        if (starts.length > stops.length) {
            throw new Error("unterminated tag in pattern: " + pattern);
        }
        if (starts.length < stops.length) {
            throw new Error("missing start tag in pattern: " + pattern);
        }
        var ntags = starts.length;
        for (var i = 0; i < ntags; i++) {
            if (starts[i] >= stops[i]) {
                throw new Error("tag delimiters out of order in pattern: " + pattern);
            }
        }
        // collect into chunks now
        if (ntags === 0) {
            var text = pattern.substring(0, n);
            chunks.push(new TextChunk(text));
        }
        if (ntags > 0 && starts[0] > 0) { // copy text up to first tag into chunks
            var text = pattern.substring(0, starts[0]);
            chunks.push(new TextChunk(text));
        }
        for (var i = 0; i < ntags; i++) {
            // copy inside of <tag>
            var tag = pattern.substring(starts[i] + this.start.length, stops[i]);
            var ruleOrToken = tag;
            var label = void 0;
            var colon = tag.indexOf(":");
            if (colon >= 0) {
                label = tag.substring(0, colon);
                ruleOrToken = tag.substring(colon + 1, tag.length);
            }
            chunks.push(new TagChunk(ruleOrToken, label));
            if (i + 1 < ntags) {
                // copy from end of <tag> to start of next
                var text = pattern.substring(stops[i] + this.stop.length, starts[i + 1]);
                chunks.push(new TextChunk(text));
            }
        }
        if (ntags > 0) {
            var afterLastTag = stops[ntags - 1] + this.stop.length;
            if (afterLastTag < n) { // copy text from end of last tag to end
                var text = pattern.substring(afterLastTag, n);
                chunks.push(new TextChunk(text));
            }
        }
        // strip out the escape sequences from text chunks but not tags
        for (var i = 0; i < chunks.length; i++) {
            var c = chunks[i];
            if (c instanceof TextChunk) {
                var unescaped = c.text.replace(this.escapeRE, "");
                if (unescaped.length < c.text.length) {
                    chunks[i] = new TextChunk(unescaped);
                }
            }
        }
        return chunks;
    };
    __decorate([
        NotNull,
        __param(1, NotNull)
    ], ParseTreePatternMatcher.prototype, "match", null);
    __decorate([
        NotNull
    ], ParseTreePatternMatcher.prototype, "lexer", null);
    __decorate([
        NotNull
    ], ParseTreePatternMatcher.prototype, "parser", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull),
        __param(2, NotNull)
    ], ParseTreePatternMatcher.prototype, "matchImpl", null);
    return ParseTreePatternMatcher;
}());
(function (ParseTreePatternMatcher) {
    var CannotInvokeStartRule = /** @class */ (function (_super) {
        __extends(CannotInvokeStartRule, _super);
        function CannotInvokeStartRule(error) {
            var _this = _super.call(this, "CannotInvokeStartRule: " + error) || this;
            _this.error = error;
            return _this;
        }
        return CannotInvokeStartRule;
    }(Error));
    ParseTreePatternMatcher.CannotInvokeStartRule = CannotInvokeStartRule;
    // Fixes https://github.com/antlr/antlr4/issues/413
    // "Tree pattern compilation doesn't check for a complete parse"
    var StartRuleDoesNotConsumeFullPattern = /** @class */ (function (_super) {
        __extends(StartRuleDoesNotConsumeFullPattern, _super);
        function StartRuleDoesNotConsumeFullPattern() {
            return _super.call(this, "StartRuleDoesNotConsumeFullPattern") || this;
        }
        return StartRuleDoesNotConsumeFullPattern;
    }(Error));
    ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern = StartRuleDoesNotConsumeFullPattern;
})(exports.ParseTreePatternMatcher || (exports.ParseTreePatternMatcher = {}));
var ProfilingATNSimulator$$1 = /** @class */ (function (_super) {
    __extends(ProfilingATNSimulator$$1, _super);
    function ProfilingATNSimulator$$1(parser) {
        var _this = _super.call(this, parser.interpreter.atn, parser) || this;
        _this._startIndex = 0;
        _this._sllStopIndex = 0;
        _this._llStopIndex = 0;
        _this.currentDecision = 0;
        /** At the point of LL failover, we record how SLL would resolve the conflict so that
         *  we can determine whether or not a decision / input pair is context-sensitive.
         *  If LL gives a different result than SLL's predicted alternative, we have a
         *  context sensitivity for sure. The converse is not necessarily true, however.
         *  It's possible that after conflict resolution chooses minimum alternatives,
         *  SLL could get the same answer as LL. Regardless of whether or not the result indicates
         *  an ambiguity, it is not treated as a context sensitivity because LL prediction
         *  was not required in order to produce a correct prediction for this decision and input sequence.
         *  It may in fact still be a context sensitivity but we don't know by looking at the
         *  minimum alternatives for the current input.
         */
        _this.conflictingAltResolvedBySLL = 0;
        _this.optimize_ll1 = false;
        _this.reportAmbiguities = true;
        _this.numDecisions = _this.atn.decisionToState.length;
        _this.decisions = [];
        for (var i = 0; i < _this.numDecisions; i++) {
            _this.decisions.push(new DecisionInfo(i));
        }
        return _this;
    }
    ProfilingATNSimulator$$1.prototype.adaptivePredict = function (input, decision, outerContext) {
        try {
            this._input = input;
            this._startIndex = input.index;
            // it's possible for SLL to reach a conflict state without consuming any input
            this._sllStopIndex = this._startIndex - 1;
            this._llStopIndex = -1;
            this.currentDecision = decision;
            this.currentState = undefined;
            this.conflictingAltResolvedBySLL = ATN.INVALID_ALT_NUMBER;
            var start = process.hrtime();
            var alt = _super.prototype.adaptivePredict.call(this, input, decision, outerContext);
            var stop_1 = process.hrtime();
            var nanoseconds = (stop_1[0] - start[0]) * 1000000000;
            if (nanoseconds === 0) {
                nanoseconds = stop_1[1] - start[1];
            }
            else {
                // Add nanoseconds from start to end of that second, plus start of the end second to end
                nanoseconds += (1000000000 - start[1]) + stop_1[1];
            }
            this.decisions[decision].timeInPrediction += nanoseconds;
            this.decisions[decision].invocations++;
            var SLL_k = this._sllStopIndex - this._startIndex + 1;
            this.decisions[decision].SLL_TotalLook += SLL_k;
            this.decisions[decision].SLL_MinLook = this.decisions[decision].SLL_MinLook === 0 ? SLL_k : Math.min(this.decisions[decision].SLL_MinLook, SLL_k);
            if (SLL_k > this.decisions[decision].SLL_MaxLook) {
                this.decisions[decision].SLL_MaxLook = SLL_k;
                this.decisions[decision].SLL_MaxLookEvent =
                    new LookaheadEventInfo(decision, undefined, alt, input, this._startIndex, this._sllStopIndex, false);
            }
            if (this._llStopIndex >= 0) {
                var LL_k = this._llStopIndex - this._startIndex + 1;
                this.decisions[decision].LL_TotalLook += LL_k;
                this.decisions[decision].LL_MinLook = this.decisions[decision].LL_MinLook === 0 ? LL_k : Math.min(this.decisions[decision].LL_MinLook, LL_k);
                if (LL_k > this.decisions[decision].LL_MaxLook) {
                    this.decisions[decision].LL_MaxLook = LL_k;
                    this.decisions[decision].LL_MaxLookEvent =
                        new LookaheadEventInfo(decision, undefined, alt, input, this._startIndex, this._llStopIndex, true);
                }
            }
            return alt;
        }
        finally {
            this._input = undefined;
            this.currentDecision = -1;
        }
    };
    ProfilingATNSimulator$$1.prototype.getStartState = function (dfa, input, outerContext, useContext) {
        var state = _super.prototype.getStartState.call(this, dfa, input, outerContext, useContext);
        this.currentState = state;
        return state;
    };
    ProfilingATNSimulator$$1.prototype.computeStartState = function (dfa, globalContext, useContext) {
        var state = _super.prototype.computeStartState.call(this, dfa, globalContext, useContext);
        this.currentState = state;
        return state;
    };
    ProfilingATNSimulator$$1.prototype.computeReachSet = function (dfa, previous, t, contextCache) {
        if (this._input === undefined) {
            throw new Error("Invalid state");
        }
        var reachState = _super.prototype.computeReachSet.call(this, dfa, previous, t, contextCache);
        if (reachState == null) {
            // no reach on current lookahead symbol. ERROR.
            this.decisions[this.currentDecision].errors.push(new ErrorInfo(this.currentDecision, previous, this._input, this._startIndex, this._input.index));
        }
        this.currentState = reachState;
        return reachState;
    };
    ProfilingATNSimulator$$1.prototype.getExistingTargetState = function (previousD, t) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        // this method is called after each time the input position advances
        if (this.currentState.useContext) {
            this._llStopIndex = this._input.index;
        }
        else {
            this._sllStopIndex = this._input.index;
        }
        var existingTargetState = _super.prototype.getExistingTargetState.call(this, previousD, t);
        if (existingTargetState != null) {
            // this method is directly called by execDFA; must construct a SimulatorState
            // to represent the current state for this case
            this.currentState = new SimulatorState(this.currentState.outerContext, existingTargetState, this.currentState.useContext, this.currentState.remainingOuterContext);
            if (this.currentState.useContext) {
                this.decisions[this.currentDecision].LL_DFATransitions++;
            }
            else {
                this.decisions[this.currentDecision].SLL_DFATransitions++; // count only if we transition over a DFA state
            }
            if (existingTargetState === ATNSimulator.ERROR) {
                var state = new SimulatorState(this.currentState.outerContext, previousD, this.currentState.useContext, this.currentState.remainingOuterContext);
                this.decisions[this.currentDecision].errors.push(new ErrorInfo(this.currentDecision, state, this._input, this._startIndex, this._input.index));
            }
        }
        return existingTargetState;
    };
    ProfilingATNSimulator$$1.prototype.computeTargetState = function (dfa, s, remainingGlobalContext, t, useContext, contextCache) {
        var targetState = _super.prototype.computeTargetState.call(this, dfa, s, remainingGlobalContext, t, useContext, contextCache);
        if (useContext) {
            this.decisions[this.currentDecision].LL_ATNTransitions++;
        }
        else {
            this.decisions[this.currentDecision].SLL_ATNTransitions++;
        }
        return targetState;
    };
    ProfilingATNSimulator$$1.prototype.evalSemanticContextImpl = function (pred, parserCallStack, alt) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        var result = _super.prototype.evalSemanticContextImpl.call(this, pred, parserCallStack, alt);
        if (!(pred instanceof SemanticContext.PrecedencePredicate)) {
            var fullContext = this._llStopIndex >= 0;
            var stopIndex = fullContext ? this._llStopIndex : this._sllStopIndex;
            this.decisions[this.currentDecision].predicateEvals.push(new PredicateEvalInfo(this.currentState, this.currentDecision, this._input, this._startIndex, stopIndex, pred, result, alt));
        }
        return result;
    };
    ProfilingATNSimulator$$1.prototype.reportContextSensitivity = function (dfa, prediction, acceptState, startIndex, stopIndex) {
        if (this._input === undefined) {
            throw new Error("Invalid state");
        }
        if (prediction !== this.conflictingAltResolvedBySLL) {
            this.decisions[this.currentDecision].contextSensitivities.push(new ContextSensitivityInfo(this.currentDecision, acceptState, this._input, startIndex, stopIndex));
        }
        _super.prototype.reportContextSensitivity.call(this, dfa, prediction, acceptState, startIndex, stopIndex);
    };
    ProfilingATNSimulator$$1.prototype.reportAttemptingFullContext = function (dfa, conflictingAlts, conflictState, startIndex, stopIndex) {
        if (conflictingAlts != null) {
            this.conflictingAltResolvedBySLL = conflictingAlts.nextSetBit(0);
        }
        else {
            this.conflictingAltResolvedBySLL = conflictState.s0.configs.getRepresentedAlternatives().nextSetBit(0);
        }
        this.decisions[this.currentDecision].LL_Fallback++;
        _super.prototype.reportAttemptingFullContext.call(this, dfa, conflictingAlts, conflictState, startIndex, stopIndex);
    };
    ProfilingATNSimulator$$1.prototype.reportAmbiguity = function (dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        var prediction;
        if (ambigAlts != null) {
            prediction = ambigAlts.nextSetBit(0);
        }
        else {
            prediction = configs.getRepresentedAlternatives().nextSetBit(0);
        }
        if (this.conflictingAltResolvedBySLL !== ATN.INVALID_ALT_NUMBER && prediction !== this.conflictingAltResolvedBySLL) {
            // Even though this is an ambiguity we are reporting, we can
            // still detect some context sensitivities.  Both SLL and LL
            // are showing a conflict, hence an ambiguity, but if they resolve
            // to different minimum alternatives we have also identified a
            // context sensitivity.
            this.decisions[this.currentDecision].contextSensitivities.push(new ContextSensitivityInfo(this.currentDecision, this.currentState, this._input, startIndex, stopIndex));
        }
        this.decisions[this.currentDecision].ambiguities.push(new AmbiguityInfo(this.currentDecision, this.currentState, ambigAlts, this._input, startIndex, stopIndex));
        _super.prototype.reportAmbiguity.call(this, dfa, D, startIndex, stopIndex, exact, ambigAlts, configs);
    };
    // ---------------------------------------------------------------------
    ProfilingATNSimulator$$1.prototype.getDecisionInfo = function () {
        return this.decisions;
    };
    ProfilingATNSimulator$$1.prototype.getCurrentState = function () {
        return this.currentState;
    };
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "adaptivePredict", null);
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "getStartState", null);
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "computeStartState", null);
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "computeReachSet", null);
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "getExistingTargetState", null);
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "computeTargetState", null);
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "evalSemanticContextImpl", null);
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "reportContextSensitivity", null);
    __decorate([
        Override
    ], ProfilingATNSimulator$$1.prototype, "reportAttemptingFullContext", null);
    __decorate([
        Override,
        __param(0, NotNull), __param(5, NotNull), __param(6, NotNull)
    ], ProfilingATNSimulator$$1.prototype, "reportAmbiguity", null);
    return ProfilingATNSimulator$$1;
}(ParserATNSimulator));
/** This is all the parsing support code essentially; most of it is error recovery stuff. */
var Parser$$1 = /** @class */ (function (_super) {
    __extends(Parser$$1, _super);
    function Parser$$1(input) {
        var _this = _super.call(this) || this;
        /**
         * The error handling strategy for the parser. The default value is a new
         * instance of {@link DefaultErrorStrategy}.
         *
         * @see #getErrorHandler
         * @see #setErrorHandler
         */
        _this._errHandler = new DefaultErrorStrategy();
        _this._precedenceStack = new IntegerStack();
        /**
         * Specifies whether or not the parser should construct a parse tree during
         * the parsing process. The default value is `true`.
         *
         * @see `buildParseTree`
         */
        _this._buildParseTrees = true;
        /**
         * The list of {@link ParseTreeListener} listeners registered to receive
         * events during the parse.
         *
         * @see #addParseListener
         */
        _this._parseListeners = [];
        /**
         * The number of syntax errors reported during parsing. This value is
         * incremented each time {@link #notifyErrorListeners} is called.
         */
        _this._syntaxErrors = 0;
        /** Indicates parser has match()ed EOF token. See {@link #exitRule()}. */
        _this.matchedEOF = false;
        _this._precedenceStack.push(0);
        _this.inputStream = input;
        return _this;
    }
    Parser$$1.prototype.reset = function (resetInput) {
        // Note: this method executes when not parsing, so _ctx can be undefined
        if (resetInput === undefined || resetInput) {
            this.inputStream.seek(0);
        }
        this._errHandler.reset(this);
        this._ctx = undefined;
        this._syntaxErrors = 0;
        this.matchedEOF = false;
        this.isTrace = false;
        this._precedenceStack.clear();
        this._precedenceStack.push(0);
        var interpreter = this.interpreter;
        if (interpreter != null) {
            interpreter.reset();
        }
    };
    /**
     * Match current input symbol against `ttype`. If the symbol type
     * matches, {@link ANTLRErrorStrategy#reportMatch} and {@link #consume} are
     * called to complete the match process.
     *
     * If the symbol type does not match,
     * {@link ANTLRErrorStrategy#recoverInline} is called on the current error
     * strategy to attempt recovery. If {@link #getBuildParseTree} is
     * `true` and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy#recoverInline} is -1, the symbol is added to
     * the parse tree by calling {@link ParserRuleContext#addErrorNode}.
     *
     * @param ttype the token type to match
     * @returns the matched symbol
     * @ if the current input symbol did not match
     * `ttype` and the error strategy could not recover from the
     * mismatched symbol
     */
    Parser$$1.prototype.match = function (ttype) {
        var t = this.currentToken;
        if (t.type === ttype) {
            if (ttype === exports.Token.EOF) {
                this.matchedEOF = true;
            }
            this._errHandler.reportMatch(this);
            this.consume();
        }
        else {
            t = this._errHandler.recoverInline(this);
            if (this._buildParseTrees && t.tokenIndex === -1) {
                // we must have conjured up a new token during single token insertion
                // if it's not the current symbol
                this._ctx.addErrorNode(t);
            }
        }
        return t;
    };
    /**
     * Match current input symbol as a wildcard. If the symbol type matches
     * (i.e. has a value greater than 0), {@link ANTLRErrorStrategy#reportMatch}
     * and {@link #consume} are called to complete the match process.
     *
     * If the symbol type does not match,
     * {@link ANTLRErrorStrategy#recoverInline} is called on the current error
     * strategy to attempt recovery. If {@link #getBuildParseTree} is
     * `true` and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy#recoverInline} is -1, the symbol is added to
     * the parse tree by calling {@link ParserRuleContext#addErrorNode}.
     *
     * @returns the matched symbol
     * @ if the current input symbol did not match
     * a wildcard and the error strategy could not recover from the mismatched
     * symbol
     */
    Parser$$1.prototype.matchWildcard = function () {
        var t = this.currentToken;
        if (t.type > 0) {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        else {
            t = this._errHandler.recoverInline(this);
            if (this._buildParseTrees && t.tokenIndex === -1) {
                // we must have conjured up a new token during single token insertion
                // if it's not the current symbol
                this._ctx.addErrorNode(t);
            }
        }
        return t;
    };
    Object.defineProperty(Parser$$1.prototype, "buildParseTree", {
        /**
         * Gets whether or not a complete parse tree will be constructed while
         * parsing. This property is `true` for a newly constructed parser.
         *
         * @returns `true` if a complete parse tree will be constructed while
         * parsing, otherwise `false`
         */
        get: function () {
            return this._buildParseTrees;
        },
        /**
         * Track the {@link ParserRuleContext} objects during the parse and hook
         * them up using the {@link ParserRuleContext#children} list so that it
         * forms a parse tree. The {@link ParserRuleContext} returned from the start
         * rule represents the root of the parse tree.
         *
         * Note that if we are not building parse trees, rule contexts only point
         * upwards. When a rule exits, it returns the context but that gets garbage
         * collected if nobody holds a reference. It points upwards but nobody
         * points at it.
         *
         * When we build parse trees, we are adding all of these contexts to
         * {@link ParserRuleContext#children} list. Contexts are then not candidates
         * for garbage collection.
         */
        set: function (buildParseTrees) {
            this._buildParseTrees = buildParseTrees;
        },
        enumerable: true,
        configurable: true
    });
    Parser$$1.prototype.getParseListeners = function () {
        return this._parseListeners;
    };
    /**
     * Registers `listener` to receive events during the parsing process.
     *
     * To support output-preserving grammar transformations (including but not
     * limited to left-recursion removal, automated left-factoring, and
     * optimized code generation), calls to listener methods during the parse
     * may differ substantially from calls made by
     * {@link ParseTreeWalker#DEFAULT} used after the parse is complete. In
     * particular, rule entry and exit events may occur in a different order
     * during the parse than after the parser. In addition, calls to certain
     * rule entry methods may be omitted.
     *
     * With the following specific exceptions, calls to listener events are
     * *deterministic*, i.e. for identical input the calls to listener
     * methods will be the same.
     *
     * * Alterations to the grammar used to generate code may change the
     *   behavior of the listener calls.
     * * Alterations to the command line options passed to ANTLR 4 when
     *   generating the parser may change the behavior of the listener calls.
     * * Changing the version of the ANTLR Tool used to generate the parser
     *   may change the behavior of the listener calls.
     *
     * @param listener the listener to add
     *
     * @throws {@link TypeError} if `listener` is `undefined`
     */
    Parser$$1.prototype.addParseListener = function (listener) {
        if (listener == null) {
            throw new TypeError("listener cannot be null");
        }
        this._parseListeners.push(listener);
    };
    /**
     * Remove `listener` from the list of parse listeners.
     *
     * If `listener` is `undefined` or has not been added as a parse
     * listener, this method does nothing.
     *
     * @see #addParseListener
     *
     * @param listener the listener to remove
     */
    Parser$$1.prototype.removeParseListener = function (listener) {
        var index = this._parseListeners.findIndex(function (l) { return l === listener; });
        if (index !== -1) {
            this._parseListeners.splice(index, 1);
        }
    };
    /**
     * Remove all parse listeners.
     *
     * @see #addParseListener
     */
    Parser$$1.prototype.removeParseListeners = function () {
        this._parseListeners.length = 0;
    };
    /**
     * Notify any parse listeners of an enter rule event.
     *
     * @see #addParseListener
     */
    Parser$$1.prototype.triggerEnterRuleEvent = function () {
        try {
            for (var _a = __values(this._parseListeners), _b = _a.next(); !_b.done; _b = _a.next()) {
                var listener = _b.value;
                if (listener.enterEveryRule) {
                    listener.enterEveryRule(this._ctx);
                }
                this._ctx.enterRule(listener);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _c;
    };
    /**
     * Notify any parse listeners of an exit rule event.
     *
     * @see #addParseListener
     */
    Parser$$1.prototype.triggerExitRuleEvent = function () {
        // reverse order walk of listeners
        for (var i = this._parseListeners.length - 1; i >= 0; i--) {
            var listener = this._parseListeners[i];
            this._ctx.exitRule(listener);
            if (listener.exitEveryRule) {
                listener.exitEveryRule(this._ctx);
            }
        }
    };
    Object.defineProperty(Parser$$1.prototype, "numberOfSyntaxErrors", {
        /**
         * Gets the number of syntax errors reported during parsing. This value is
         * incremented each time {@link #notifyErrorListeners} is called.
         *
         * @see #notifyErrorListeners
         */
        get: function () {
            return this._syntaxErrors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser$$1.prototype, "tokenFactory", {
        get: function () {
            return this._input.tokenSource.tokenFactory;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The ATN with bypass alternatives is expensive to create so we create it
     * lazily.
     *
     * @ if the current parser does not
     * implement the `serializedATN` property.
     */
    Parser$$1.prototype.getATNWithBypassAlts = function () {
        var serializedAtn = this.serializedATN;
        if (serializedAtn == null) {
            throw new Error("The current parser does not support an ATN with bypass alternatives.");
        }
        var result = Parser$$1.bypassAltsAtnCache.get(serializedAtn);
        if (result == null) {
            var deserializationOptions = new ATNDeserializationOptions();
            deserializationOptions.isGenerateRuleBypassTransitions = true;
            result = new ATNDeserializer(deserializationOptions).deserialize(toCharArray(serializedAtn));
            Parser$$1.bypassAltsAtnCache.set(serializedAtn, result);
        }
        return result;
    };
    Parser$$1.prototype.compileParseTreePattern = function (pattern, patternRuleIndex, lexer) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenSource, currentLexer, matcher;
            return __generator(this, function (_a) {
                if (!lexer) {
                    if (this.inputStream) {
                        tokenSource = this.inputStream.tokenSource;
                        if (tokenSource instanceof Lexer) {
                            lexer = tokenSource;
                        }
                    }
                    if (!lexer) {
                        throw new Error("Parser can't discover a lexer to use");
                    }
                }
                currentLexer = lexer;
                matcher = new exports.ParseTreePatternMatcher(currentLexer, this);
                return [2 /*return*/, matcher.compile(pattern, patternRuleIndex)];
            });
        });
    };
    Object.defineProperty(Parser$$1.prototype, "errorHandler", {
        get: function () {
            return this._errHandler;
        },
        set: function (handler) {
            this._errHandler = handler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser$$1.prototype, "inputStream", {
        get: function () {
            return this._input;
        },
        /** Set the token stream and reset the parser. */
        set: function (input) {
            this.reset(false);
            this._input = input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser$$1.prototype, "currentToken", {
        /** Match needs to return the current input symbol, which gets put
         *  into the label for the associated token ref; e.g., x=ID.
         */
        get: function () {
            return this._input.LT(1);
        },
        enumerable: true,
        configurable: true
    });
    Parser$$1.prototype.notifyErrorListeners = function (msg, offendingToken, e) {
        if (offendingToken === undefined) {
            offendingToken = this.currentToken;
        }
        else if (offendingToken === null) {
            offendingToken = undefined;
        }
        this._syntaxErrors++;
        var line = -1;
        var charPositionInLine = -1;
        if (offendingToken != null) {
            line = offendingToken.line;
            charPositionInLine = offendingToken.charPositionInLine;
        }
        var listener = this.getErrorListenerDispatch();
        if (listener.syntaxError) {
            listener.syntaxError(this, offendingToken, line, charPositionInLine, msg, e);
        }
    };
    /**
     * Consume and return the [current symbol](`currentToken`).
     *
     * E.g., given the following input with `A` being the current
     * lookahead symbol, this function moves the cursor to `B` and returns
     * `A`.
     *
     * ```
     * A B
     * ^
     * ```
     *
     * If the parser is not in error recovery mode, the consumed symbol is added
     * to the parse tree using {@link ParserRuleContext#addChild(Token)}, and
     * {@link ParseTreeListener#visitTerminal} is called on any parse listeners.
     * If the parser *is* in error recovery mode, the consumed symbol is
     * added to the parse tree using
     * {@link ParserRuleContext#addErrorNode(Token)}, and
     * {@link ParseTreeListener#visitErrorNode} is called on any parse
     * listeners.
     */
    Parser$$1.prototype.consume = function () {
        var o = this.currentToken;
        if (o.type !== Parser$$1.EOF) {
            this.inputStream.consume();
        }
        var hasListener = this._parseListeners.length !== 0;
        if (this._buildParseTrees || hasListener) {
            if (this._errHandler.inErrorRecoveryMode(this)) {
                var node = this._ctx.addErrorNode(o);
                if (hasListener) {
                    try {
                        for (var _a = __values(this._parseListeners), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var listener = _b.value;
                            if (listener.visitErrorNode) {
                                listener.visitErrorNode(node);
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            else {
                var node = this._ctx.addChild(o);
                if (hasListener) {
                    try {
                        for (var _d = __values(this._parseListeners), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var listener = _e.value;
                            if (listener.visitTerminal) {
                                listener.visitTerminal(node);
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        return o;
        var e_3, _c, e_4, _f;
    };
    Parser$$1.prototype.addContextToParseTree = function () {
        var parent = this._ctx._parent;
        // add current context to parent if we have a parent
        if (parent != null) {
            parent.addChild(this._ctx);
        }
    };
    /**
     * Always called by generated parsers upon entry to a rule. Access field
     * {@link #_ctx} get the current context.
     */
    Parser$$1.prototype.enterRule = function (localctx, state, ruleIndex) {
        this.state = state;
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        if (this._buildParseTrees) {
            this.addContextToParseTree();
        }
        this.triggerEnterRuleEvent();
    };
    Parser$$1.prototype.enterLeftFactoredRule = function (localctx, state, ruleIndex) {
        this.state = state;
        if (this._buildParseTrees) {
            var factoredContext = this._ctx.getChild(this._ctx.childCount - 1);
            this._ctx.removeLastChild();
            factoredContext._parent = localctx;
            localctx.addChild(factoredContext);
        }
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        if (this._buildParseTrees) {
            this.addContextToParseTree();
        }
        this.triggerEnterRuleEvent();
    };
    Parser$$1.prototype.exitRule = function () {
        if (this.matchedEOF) {
            // if we have matched EOF, it cannot consume past EOF so we use LT(1) here
            this._ctx._stop = this._input.LT(1); // LT(1) will be end of file
        }
        else {
            this._ctx._stop = this._input.tryLT(-1); // stop node is what we just matched
        }
        // trigger event on _ctx, before it reverts to parent
        this.triggerExitRuleEvent();
        this.state = this._ctx.invokingState;
        this._ctx = this._ctx._parent;
    };
    Parser$$1.prototype.enterOuterAlt = function (localctx, altNum) {
        localctx.altNumber = altNum;
        // if we have new localctx, make sure we replace existing ctx
        // that is previous child of parse tree
        if (this._buildParseTrees && this._ctx !== localctx) {
            var parent_1 = this._ctx._parent;
            if (parent_1 != null) {
                parent_1.removeLastChild();
                parent_1.addChild(localctx);
            }
        }
        this._ctx = localctx;
    };
    Object.defineProperty(Parser$$1.prototype, "precedence", {
        /**
         * Get the precedence level for the top-most precedence rule.
         *
         * @returns The precedence level for the top-most precedence rule, or -1 if
         * the parser context is not nested within a precedence rule.
         */
        get: function () {
            if (this._precedenceStack.isEmpty) {
                return -1;
            }
            return this._precedenceStack.peek();
        },
        enumerable: true,
        configurable: true
    });
    Parser$$1.prototype.enterRecursionRule = function (localctx, state, ruleIndex, precedence) {
        this.state = state;
        this._precedenceStack.push(precedence);
        this._ctx = localctx;
        this._ctx._start = this._input.LT(1);
        this.triggerEnterRuleEvent(); // simulates rule entry for left-recursive rules
    };
    /** Like {@link #enterRule} but for recursive rules.
     *  Make the current context the child of the incoming localctx.
     */
    Parser$$1.prototype.pushNewRecursionContext = function (localctx, state, ruleIndex) {
        var previous = this._ctx;
        previous._parent = localctx;
        previous.invokingState = state;
        previous._stop = this._input.tryLT(-1);
        this._ctx = localctx;
        this._ctx._start = previous._start;
        if (this._buildParseTrees) {
            this._ctx.addChild(previous);
        }
        this.triggerEnterRuleEvent(); // simulates rule entry for left-recursive rules
    };
    Parser$$1.prototype.unrollRecursionContexts = function (_parentctx) {
        this._precedenceStack.pop();
        this._ctx._stop = this._input.tryLT(-1);
        var retctx = this._ctx; // save current ctx (return value)
        // unroll so _ctx is as it was before call to recursive method
        if (this._parseListeners.length > 0) {
            while (this._ctx !== _parentctx) {
                this.triggerExitRuleEvent();
                this._ctx = this._ctx._parent;
            }
        }
        else {
            this._ctx = _parentctx;
        }
        // hook into tree
        retctx._parent = _parentctx;
        if (this._buildParseTrees && _parentctx != null) {
            // add return ctx into invoking rule's tree
            _parentctx.addChild(retctx);
        }
    };
    Parser$$1.prototype.getInvokingContext = function (ruleIndex) {
        var p = this._ctx;
        while (p && p.ruleIndex !== ruleIndex) {
            p = p._parent;
        }
        return p;
    };
    Object.defineProperty(Parser$$1.prototype, "context", {
        get: function () {
            return this._ctx;
        },
        set: function (ctx) {
            this._ctx = ctx;
        },
        enumerable: true,
        configurable: true
    });
    Parser$$1.prototype.precpred = function (localctx, precedence) {
        return precedence >= this._precedenceStack.peek();
    };
    Parser$$1.prototype.getErrorListenerDispatch = function () {
        return new ProxyParserErrorListener(this.getErrorListeners());
    };
    Parser$$1.prototype.inContext = function (context) {
        // TODO: useful in parser?
        return false;
    };
    /**
     * Checks whether or not `symbol` can follow the current state in the
     * ATN. The behavior of this method is equivalent to the following, but is
     * implemented such that the complete context-sensitive follow set does not
     * need to be explicitly constructed.
     *
     * ```
     * return getExpectedTokens().contains(symbol);
     * ```
     *
     * @param symbol the symbol type to check
     * @returns `true` if `symbol` can follow the current state in
     * the ATN, otherwise `false`.
     */
    Parser$$1.prototype.isExpectedToken = function (symbol) {
        //   		return interpreter.atn.nextTokens(_ctx);
        var atn = this.interpreter.atn;
        var ctx = this._ctx;
        var s = atn.states[this.state];
        var following = atn.nextTokens(s);
        if (following.contains(symbol)) {
            return true;
        }
        //        System.out.println("following "+s+"="+following);
        if (!following.contains(exports.Token.EPSILON)) {
            return false;
        }
        while (ctx != null && ctx.invokingState >= 0 && following.contains(exports.Token.EPSILON)) {
            var invokingState = atn.states[ctx.invokingState];
            var rt = invokingState.transition(0);
            following = atn.nextTokens(rt.followState);
            if (following.contains(symbol)) {
                return true;
            }
            ctx = ctx._parent;
        }
        if (following.contains(exports.Token.EPSILON) && symbol === exports.Token.EOF) {
            return true;
        }
        return false;
    };
    Object.defineProperty(Parser$$1.prototype, "isMatchedEOF", {
        get: function () {
            return this.matchedEOF;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Computes the set of input symbols which could follow the current parser
     * state and context, as given by {@link #getState} and {@link #getContext},
     * respectively.
     *
     * @see ATN#getExpectedTokens(int, RuleContext)
     */
    Parser$$1.prototype.getExpectedTokens = function () {
        return this.atn.getExpectedTokens(this.state, this.context);
    };
    Parser$$1.prototype.getExpectedTokensWithinCurrentRule = function () {
        var atn = this.interpreter.atn;
        var s = atn.states[this.state];
        return atn.nextTokens(s);
    };
    /** Get a rule's index (i.e., `RULE_ruleName` field) or -1 if not found. */
    Parser$$1.prototype.getRuleIndex = function (ruleName) {
        var ruleIndex = this.getRuleIndexMap().get(ruleName);
        if (ruleIndex != null) {
            return ruleIndex;
        }
        return -1;
    };
    Object.defineProperty(Parser$$1.prototype, "ruleContext", {
        get: function () { return this._ctx; },
        enumerable: true,
        configurable: true
    });
    /** Return List&lt;String&gt; of the rule names in your parser instance
     *  leading up to a call to the current rule.  You could override if
     *  you want more details such as the file/line info of where
     *  in the ATN a rule is invoked.
     *
     *  This is very useful for error messages.
     */
    Parser$$1.prototype.getRuleInvocationStack = function (ctx) {
        if (ctx === void 0) { ctx = this._ctx; }
        var p = ctx; // Workaround for Microsoft/TypeScript#14487
        var ruleNames = this.ruleNames;
        var stack = [];
        while (p != null) {
            // compute what follows who invoked us
            var ruleIndex = p.ruleIndex;
            if (ruleIndex < 0) {
                stack.push("n/a");
            }
            else {
                stack.push(ruleNames[ruleIndex]);
            }
            p = p._parent;
        }
        return stack;
    };
    /** For debugging and other purposes. */
    Parser$$1.prototype.getDFAStrings = function () {
        var s = [];
        try {
            for (var _a = __values(this._interp.atn.decisionToDFA), _b = _a.next(); !_b.done; _b = _a.next()) {
                var dfa = _b.value;
                s.push(dfa.toString(this.vocabulary, this.ruleNames));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return s;
        var e_5, _c;
    };
    /** For debugging and other purposes. */
    Parser$$1.prototype.dumpDFA = function () {
        var seenOne = false;
        try {
            for (var _a = __values(this._interp.atn.decisionToDFA), _b = _a.next(); !_b.done; _b = _a.next()) {
                var dfa = _b.value;
                if (!dfa.isEmpty) {
                    if (seenOne) {
                        console.log();
                    }
                    console.log("Decision " + dfa.decision + ":");
                    process.stdout.write(dfa.toString(this.vocabulary, this.ruleNames));
                    seenOne = true;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_6) throw e_6.error; }
        }
        var e_6, _c;
    };
    Object.defineProperty(Parser$$1.prototype, "sourceName", {
        get: function () {
            return this._input.sourceName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser$$1.prototype, "parseInfo", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var interp = _this.interpreter;
                if (interp instanceof ProfilingATNSimulator$$1) {
                    resolve(new ParseInfo(interp));
                }
                resolve();
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @since 4.3
     */
    Parser$$1.prototype.setProfile = function (profile) {
        return __awaiter(this, void 0, void 0, function () {
            var interp;
            return __generator(this, function (_a) {
                interp = this.interpreter;
                if (profile) {
                    if (!(interp instanceof ProfilingATNSimulator$$1)) {
                        this.interpreter = new ProfilingATNSimulator$$1(this);
                    }
                }
                else if (interp instanceof ProfilingATNSimulator$$1) {
                    this.interpreter = new ParserATNSimulator(this.atn, this);
                }
                this.interpreter.setPredictionMode(interp.getPredictionMode());
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(Parser$$1.prototype, "isTrace", {
        /**
         * Gets whether a {@link TraceListener} is registered as a parse listener
         * for the parser.
         */
        get: function () {
            return this._tracer != null;
        },
        /** During a parse is sometimes useful to listen in on the rule entry and exit
         *  events as well as token matches. This is for quick and dirty debugging.
         */
        set: function (trace) {
            if (!trace) {
                if (this._tracer) {
                    this.removeParseListener(this._tracer);
                    this._tracer = undefined;
                }
            }
            else {
                if (this._tracer) {
                    this.removeParseListener(this._tracer);
                }
                else {
                    this._tracer = new TraceListener(this.ruleNames, this._input);
                }
                this.addParseListener(this._tracer);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This field maps from the serialized ATN string to the deserialized {@link ATN} with
     * bypass alternatives.
     *
     * @see ATNDeserializationOptions.isGenerateRuleBypassTransitions
     */
    Parser$$1.bypassAltsAtnCache = new Map();
    __decorate([
        NotNull
    ], Parser$$1.prototype, "_errHandler", void 0);
    __decorate([
        NotNull
    ], Parser$$1.prototype, "match", null);
    __decorate([
        NotNull
    ], Parser$$1.prototype, "matchWildcard", null);
    __decorate([
        NotNull
    ], Parser$$1.prototype, "getParseListeners", null);
    __decorate([
        __param(0, NotNull)
    ], Parser$$1.prototype, "addParseListener", null);
    __decorate([
        NotNull
    ], Parser$$1.prototype, "getATNWithBypassAlts", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], Parser$$1.prototype, "errorHandler", null);
    __decorate([
        Override
    ], Parser$$1.prototype, "inputStream", null);
    __decorate([
        NotNull
    ], Parser$$1.prototype, "currentToken", null);
    __decorate([
        __param(0, NotNull)
    ], Parser$$1.prototype, "enterRule", null);
    __decorate([
        Override,
        __param(0, Nullable)
    ], Parser$$1.prototype, "precpred", null);
    __decorate([
        Override
    ], Parser$$1.prototype, "getErrorListenerDispatch", null);
    __decorate([
        NotNull
    ], Parser$$1.prototype, "getExpectedTokens", null);
    __decorate([
        NotNull
    ], Parser$$1.prototype, "getExpectedTokensWithinCurrentRule", null);
    __decorate([
        Override
    ], Parser$$1.prototype, "parseInfo", null);
    return Parser$$1;
}(Recognizer));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** Indicates that the parser could not decide which of two or more paths
 *  to take based upon the remaining input. It tracks the starting token
 *  of the offending input and also knows where the parser was
 *  in the various paths when the error. Reported by reportNoViableAlternative()
 */
var NoViableAltException = /** @class */ (function (_super) {
    __extends(NoViableAltException, _super);
    function NoViableAltException(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
        var _this = this;
        if (recognizer instanceof Parser$$1) {
            if (input === undefined) {
                input = recognizer.inputStream;
            }
            if (startToken === undefined) {
                startToken = recognizer.currentToken;
            }
            if (offendingToken === undefined) {
                offendingToken = recognizer.currentToken;
            }
            if (ctx === undefined) {
                ctx = recognizer.context;
            }
        }
        _this = _super.call(this, recognizer, input, ctx) || this;
        _this._deadEndConfigs = deadEndConfigs;
        _this._startToken = startToken;
        _this.setOffendingToken(recognizer, offendingToken);
        return _this;
    }
    Object.defineProperty(NoViableAltException.prototype, "startToken", {
        get: function () {
            return this._startToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoViableAltException.prototype, "deadEndConfigs", {
        get: function () {
            return this._deadEndConfigs;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], NoViableAltException.prototype, "_startToken", void 0);
    return NoViableAltException;
}(RecognitionException));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This is the default implementation of {@link ANTLRErrorStrategy} used for
 * error reporting and recovery in ANTLR parsers.
 */
var DefaultErrorStrategy = /** @class */ (function () {
    function DefaultErrorStrategy() {
        /**
         * Indicates whether the error strategy is currently "recovering from an
         * error". This is used to suppress reporting multiple error messages while
         * attempting to recover from a detected syntax error.
         *
         * @see #inErrorRecoveryMode
         */
        this.errorRecoveryMode = false;
        /** The index into the input stream where the last error occurred.
         * 	This is used to prevent infinite loops where an error is found
         *  but no token is consumed during recovery...another error is found,
         *  ad nauseum.  This is a failsafe mechanism to guarantee that at least
         *  one token/tree node is consumed for two errors.
         */
        this.lastErrorIndex = -1;
    }
    /**
     * {@inheritDoc}
     *
     * The default implementation simply calls {@link #endErrorCondition} to
     * ensure that the handler is not in error recovery mode.
     */
    DefaultErrorStrategy.prototype.reset = function (recognizer) {
        this.endErrorCondition(recognizer);
    };
    /**
     * This method is called to enter error recovery mode when a recognition
     * exception is reported.
     *
     * @param recognizer the parser instance
     */
    DefaultErrorStrategy.prototype.beginErrorCondition = function (recognizer) {
        this.errorRecoveryMode = true;
    };
    /**
     * {@inheritDoc}
     */
    DefaultErrorStrategy.prototype.inErrorRecoveryMode = function (recognizer) {
        return this.errorRecoveryMode;
    };
    /**
     * This method is called to leave error recovery mode after recovering from
     * a recognition exception.
     *
     * @param recognizer
     */
    DefaultErrorStrategy.prototype.endErrorCondition = function (recognizer) {
        this.errorRecoveryMode = false;
        this.lastErrorStates = undefined;
        this.lastErrorIndex = -1;
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation simply calls {@link #endErrorCondition}.
     */
    DefaultErrorStrategy.prototype.reportMatch = function (recognizer) {
        this.endErrorCondition(recognizer);
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation returns immediately if the handler is already
     * in error recovery mode. Otherwise, it calls {@link #beginErrorCondition}
     * and dispatches the reporting task based on the runtime type of `e`
     * according to the following table.
     *
     * * {@link NoViableAltException}: Dispatches the call to
     *   {@link #reportNoViableAlternative}
     * * {@link InputMismatchException}: Dispatches the call to
     *   {@link #reportInputMismatch}
     * * {@link FailedPredicateException}: Dispatches the call to
     *   {@link #reportFailedPredicate}
     * * All other types: calls {@link Parser#notifyErrorListeners} to report
     *   the exception
     */
    DefaultErrorStrategy.prototype.reportError = function (recognizer, e) {
        // if we've already reported an error and have not matched a token
        // yet successfully, don't report any errors.
        if (this.inErrorRecoveryMode(recognizer)) {
            //			System.err.print("[SPURIOUS] ");
            return; // don't report spurious errors
        }
        this.beginErrorCondition(recognizer);
        if (e instanceof NoViableAltException) {
            this.reportNoViableAlternative(recognizer, e);
        }
        else if (e instanceof InputMismatchException) {
            this.reportInputMismatch(recognizer, e);
        }
        else if (e instanceof FailedPredicateException) {
            this.reportFailedPredicate(recognizer, e);
        }
        else {
            console.error("unknown recognition error type: " + e);
            this.notifyErrorListeners(recognizer, e.toString(), e);
        }
    };
    DefaultErrorStrategy.prototype.notifyErrorListeners = function (recognizer, message, e) {
        var offendingToken = e.getOffendingToken(recognizer);
        if (offendingToken === undefined) {
            // Pass null to notifyErrorListeners so it in turn calls the error listeners with undefined as the offending
            // token. If we passed undefined, it would instead call the listeners with currentToken from the parser.
            offendingToken = null;
        }
        recognizer.notifyErrorListeners(message, offendingToken, e);
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation resynchronizes the parser by consuming tokens
     * until we find one in the resynchronization set--loosely the set of tokens
     * that can follow the current rule.
     */
    DefaultErrorStrategy.prototype.recover = function (recognizer, e) {
        //		System.out.println("recover in "+recognizer.getRuleInvocationStack()+
        //						   " index="+recognizer.inputStream.index+
        //						   ", lastErrorIndex="+
        //						   lastErrorIndex+
        //						   ", states="+lastErrorStates);
        if (this.lastErrorIndex === recognizer.inputStream.index &&
            this.lastErrorStates &&
            this.lastErrorStates.contains(recognizer.state)) {
            // uh oh, another error at same token index and previously-visited
            // state in ATN; must be a case where LT(1) is in the recovery
            // token set so nothing got consumed. Consume a single token
            // at least to prevent an infinite loop; this is a failsafe.
            //			System.err.println("seen error condition before index="+
            //							   lastErrorIndex+", states="+lastErrorStates);
            //			System.err.println("FAILSAFE consumes "+recognizer.getTokenNames()[recognizer.inputStream.LA(1)]);
            recognizer.consume();
        }
        this.lastErrorIndex = recognizer.inputStream.index;
        if (!this.lastErrorStates) {
            this.lastErrorStates = new IntervalSet();
        }
        this.lastErrorStates.add(recognizer.state);
        var followSet = this.getErrorRecoverySet(recognizer);
        this.consumeUntil(recognizer, followSet);
    };
    /**
     * The default implementation of {@link ANTLRErrorStrategy#sync} makes sure
     * that the current lookahead symbol is consistent with what were expecting
     * at this point in the ATN. You can call this anytime but ANTLR only
     * generates code to check before subrules/loops and each iteration.
     *
     * Implements Jim Idle's magic sync mechanism in closures and optional
     * subrules. E.g.,
     *
     * ```antlr
     * a : sync ( stuff sync )* ;
     * sync : {consume to what can follow sync} ;
     * ```
     *
     * At the start of a sub rule upon error, {@link #sync} performs single
     * token deletion, if possible. If it can't do that, it bails on the current
     * rule and uses the default error recovery, which consumes until the
     * resynchronization set of the current rule.
     *
     * If the sub rule is optional (`(...)?`, `(...)*`, or block
     * with an empty alternative), then the expected set includes what follows
     * the subrule.
     *
     * During loop iteration, it consumes until it sees a token that can start a
     * sub rule or what follows loop. Yes, that is pretty aggressive. We opt to
     * stay in the loop as long as possible.
     *
     * **ORIGINS**
     *
     * Previous versions of ANTLR did a poor job of their recovery within loops.
     * A single mismatch token or missing token would force the parser to bail
     * out of the entire rules surrounding the loop. So, for rule
     *
     * ```antlr
     * classDef : 'class' ID '{' member* '}'
     * ```
     *
     * input with an extra token between members would force the parser to
     * consume until it found the next class definition rather than the next
     * member definition of the current class.
     *
     * This functionality cost a little bit of effort because the parser has to
     * compare token set at the start of the loop and at each iteration. If for
     * some reason speed is suffering for you, you can turn off this
     * functionality by simply overriding this method as a blank { }.
     */
    DefaultErrorStrategy.prototype.sync = function (recognizer) {
        var s = recognizer.interpreter.atn.states[recognizer.state];
        //		System.err.println("sync @ "+s.stateNumber+"="+s.getClass().getSimpleName());
        // If already recovering, don't try to sync
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        var tokens = recognizer.inputStream;
        var la = tokens.LA(1);
        // try cheaper subset first; might get lucky. seems to shave a wee bit off
        var nextTokens = recognizer.atn.nextTokens(s);
        if (nextTokens.contains(exports.Token.EPSILON) || nextTokens.contains(la)) {
            return;
        }
        switch (s.stateType) {
            case ATNStateType.BLOCK_START:
            case ATNStateType.STAR_BLOCK_START:
            case ATNStateType.PLUS_BLOCK_START:
            case ATNStateType.STAR_LOOP_ENTRY:
                // report error and recover if possible
                if (this.singleTokenDeletion(recognizer)) {
                    return;
                }
                throw new InputMismatchException(recognizer);
            case ATNStateType.PLUS_LOOP_BACK:
            case ATNStateType.STAR_LOOP_BACK:
                //			System.err.println("at loop back: "+s.getClass().getSimpleName());
                this.reportUnwantedToken(recognizer);
                var expecting = recognizer.getExpectedTokens();
                var whatFollowsLoopIterationOrRule = expecting.or(this.getErrorRecoverySet(recognizer));
                this.consumeUntil(recognizer, whatFollowsLoopIterationOrRule);
                break;
            default:
                // do nothing if we can't identify the exact kind of ATN state
                break;
        }
    };
    /**
     * This is called by {@link #reportError} when the exception is a
     * {@link NoViableAltException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    DefaultErrorStrategy.prototype.reportNoViableAlternative = function (recognizer, e) {
        var tokens = recognizer.inputStream;
        var input;
        if (tokens) {
            if (e.startToken.type === exports.Token.EOF) {
                input = "<EOF>";
            }
            else {
                input = tokens.getTextFromRange(e.startToken, e.getOffendingToken());
            }
        }
        else {
            input = "<unknown input>";
        }
        var msg = "no viable alternative at input " + this.escapeWSAndQuote(input);
        this.notifyErrorListeners(recognizer, msg, e);
    };
    /**
     * This is called by {@link #reportError} when the exception is an
     * {@link InputMismatchException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    DefaultErrorStrategy.prototype.reportInputMismatch = function (recognizer, e) {
        var expected = e.expectedTokens;
        var expectedString = expected ? expected.toStringVocabulary(recognizer.vocabulary) : "";
        var msg = "mismatched input " + this.getTokenErrorDisplay(e.getOffendingToken(recognizer)) +
            " expecting " + expectedString;
        this.notifyErrorListeners(recognizer, msg, e);
    };
    /**
     * This is called by {@link #reportError} when the exception is a
     * {@link FailedPredicateException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    DefaultErrorStrategy.prototype.reportFailedPredicate = function (recognizer, e) {
        var ruleName = recognizer.ruleNames[recognizer.context.ruleIndex];
        var msg = "rule " + ruleName + " " + e.message;
        this.notifyErrorListeners(recognizer, msg, e);
    };
    /**
     * This method is called to report a syntax error which requires the removal
     * of a token from the input stream. At the time this method is called, the
     * erroneous symbol is current `LT(1)` symbol and has not yet been
     * removed from the input stream. When this method returns,
     * `recognizer` is in error recovery mode.
     *
     * This method is called when {@link #singleTokenDeletion} identifies
     * single-token deletion as a viable recovery strategy for a mismatched
     * input error.
     *
     * The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link #beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser#notifyErrorListeners}.
     *
     * @param recognizer the parser instance
     */
    DefaultErrorStrategy.prototype.reportUnwantedToken = function (recognizer) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        var t = recognizer.currentToken;
        var tokenName = this.getTokenErrorDisplay(t);
        var expecting = this.getExpectedTokens(recognizer);
        var msg = "extraneous input " + tokenName + " expecting " +
            expecting.toStringVocabulary(recognizer.vocabulary);
        recognizer.notifyErrorListeners(msg, t, undefined);
    };
    /**
     * This method is called to report a syntax error which requires the
     * insertion of a missing token into the input stream. At the time this
     * method is called, the missing token has not yet been inserted. When this
     * method returns, `recognizer` is in error recovery mode.
     *
     * This method is called when {@link #singleTokenInsertion} identifies
     * single-token insertion as a viable recovery strategy for a mismatched
     * input error.
     *
     * The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link #beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser#notifyErrorListeners}.
     *
     * @param recognizer the parser instance
     */
    DefaultErrorStrategy.prototype.reportMissingToken = function (recognizer) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        var t = recognizer.currentToken;
        var expecting = this.getExpectedTokens(recognizer);
        var msg = "missing " + expecting.toStringVocabulary(recognizer.vocabulary) +
            " at " + this.getTokenErrorDisplay(t);
        recognizer.notifyErrorListeners(msg, t, undefined);
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation attempts to recover from the mismatched input
     * by using single token insertion and deletion as described below. If the
     * recovery attempt fails, this method
     * {@link InputMismatchException}.
     *
     * **EXTRA TOKEN** (single token deletion)
     *
     * `LA(1)` is not what we are looking for. If `LA(2)` has the
     * right token, however, then assume `LA(1)` is some extra spurious
     * token and delete it. Then consume and return the next token (which was
     * the `LA(2)` token) as the successful result of the match operation.
     *
     * This recovery strategy is implemented by {@link #singleTokenDeletion}.
     *
     * **MISSING TOKEN** (single token insertion)
     *
     * If current token (at `LA(1)`) is consistent with what could come
     * after the expected `LA(1)` token, then assume the token is missing
     * and use the parser's {@link TokenFactory} to create it on the fly. The
     * "insertion" is performed by returning the created token as the successful
     * result of the match operation.
     *
     * This recovery strategy is implemented by {@link #singleTokenInsertion}.
     *
     * **EXAMPLE**
     *
     * For example, Input `i=(3;` is clearly missing the `')'`. When
     * the parser returns from the nested call to `expr`, it will have
     * call chain:
     *
     * ```
     * stat → expr → atom
     * ```
     *
     * and it will be trying to match the `')'` at this point in the
     * derivation:
     *
     * ```
     * => ID '=' '(' INT ')' ('+' atom)* ';'
     *                    ^
     * ```
     *
     * The attempt to match `')'` will fail when it sees `';'` and
     * call {@link #recoverInline}. To recover, it sees that `LA(1)==';'`
     * is in the set of tokens that can follow the `')'` token reference
     * in rule `atom`. It can assume that you forgot the `')'`.
     */
    DefaultErrorStrategy.prototype.recoverInline = function (recognizer) {
        // SINGLE TOKEN DELETION
        var matchedSymbol = this.singleTokenDeletion(recognizer);
        if (matchedSymbol) {
            // we have deleted the extra token.
            // now, move past ttype token as if all were ok
            recognizer.consume();
            return matchedSymbol;
        }
        // SINGLE TOKEN INSERTION
        if (this.singleTokenInsertion(recognizer)) {
            return this.getMissingSymbol(recognizer);
        }
        // even that didn't work; must throw the exception
        throw new InputMismatchException(recognizer);
    };
    /**
     * This method implements the single-token insertion inline error recovery
     * strategy. It is called by {@link #recoverInline} if the single-token
     * deletion strategy fails to recover from the mismatched input. If this
     * method returns `true`, `recognizer` will be in error recovery
     * mode.
     *
     * This method determines whether or not single-token insertion is viable by
     * checking if the `LA(1)` input symbol could be successfully matched
     * if it were instead the `LA(2)` symbol. If this method returns
     * `true`, the caller is responsible for creating and inserting a
     * token with the correct type to produce this behavior.
     *
     * @param recognizer the parser instance
     * @returns `true` if single-token insertion is a viable recovery
     * strategy for the current mismatched input, otherwise `false`
     */
    DefaultErrorStrategy.prototype.singleTokenInsertion = function (recognizer) {
        var currentSymbolType = recognizer.inputStream.LA(1);
        // if current token is consistent with what could come after current
        // ATN state, then we know we're missing a token; error recovery
        // is free to conjure up and insert the missing token
        var currentState = recognizer.interpreter.atn.states[recognizer.state];
        var next = currentState.transition(0).target;
        var atn = recognizer.interpreter.atn;
        var expectingAtLL2 = atn.nextTokens(next, PredictionContext.fromRuleContext(atn, recognizer.context));
        //		console.warn("LT(2) set="+expectingAtLL2.toString(recognizer.getTokenNames()));
        if (expectingAtLL2.contains(currentSymbolType)) {
            this.reportMissingToken(recognizer);
            return true;
        }
        return false;
    };
    /**
     * This method implements the single-token deletion inline error recovery
     * strategy. It is called by {@link #recoverInline} to attempt to recover
     * from mismatched input. If this method returns `undefined`, the parser and error
     * handler state will not have changed. If this method returns non-`undefined`,
     * `recognizer` will *not* be in error recovery mode since the
     * returned token was a successful match.
     *
     * If the single-token deletion is successful, this method calls
     * {@link #reportUnwantedToken} to report the error, followed by
     * {@link Parser#consume} to actually "delete" the extraneous token. Then,
     * before returning {@link #reportMatch} is called to signal a successful
     * match.
     *
     * @param recognizer the parser instance
     * @returns the successfully matched {@link Token} instance if single-token
     * deletion successfully recovers from the mismatched input, otherwise
     * `undefined`
     */
    DefaultErrorStrategy.prototype.singleTokenDeletion = function (recognizer) {
        var nextTokenType = recognizer.inputStream.LA(2);
        var expecting = this.getExpectedTokens(recognizer);
        if (expecting.contains(nextTokenType)) {
            this.reportUnwantedToken(recognizer);
            /*
            System.err.println("recoverFromMismatchedToken deleting "+
                               ((TokenStream)recognizer.inputStream).LT(1)+
                               " since "+((TokenStream)recognizer.inputStream).LT(2)+
                               " is what we want");
            */
            recognizer.consume(); // simply delete extra token
            // we want to return the token we're actually matching
            var matchedSymbol = recognizer.currentToken;
            this.reportMatch(recognizer); // we know current token is correct
            return matchedSymbol;
        }
        return undefined;
    };
    /** Conjure up a missing token during error recovery.
     *
     *  The recognizer attempts to recover from single missing
     *  symbols. But, actions might refer to that missing symbol.
     *  For example, x=ID {f($x);}. The action clearly assumes
     *  that there has been an identifier matched previously and that
     *  $x points at that token. If that token is missing, but
     *  the next token in the stream is what we want we assume that
     *  this token is missing and we keep going. Because we
     *  have to return some token to replace the missing token,
     *  we have to conjure one up. This method gives the user control
     *  over the tokens returned for missing tokens. Mostly,
     *  you will want to create something special for identifier
     *  tokens. For literals such as '{' and ',', the default
     *  action in the parser or tree parser works. It simply creates
     *  a CommonToken of the appropriate type. The text will be the token.
     *  If you change what tokens must be created by the lexer,
     *  override this method to create the appropriate tokens.
     */
    DefaultErrorStrategy.prototype.getMissingSymbol = function (recognizer) {
        var currentSymbol = recognizer.currentToken;
        var expecting = this.getExpectedTokens(recognizer);
        var expectedTokenType = expecting.minElement; // get any element
        var tokenText;
        if (expectedTokenType === exports.Token.EOF) {
            tokenText = "<missing EOF>";
        }
        else {
            tokenText = "<missing " + recognizer.vocabulary.getDisplayName(expectedTokenType) + ">";
        }
        var current = currentSymbol;
        var lookback = recognizer.inputStream.tryLT(-1);
        if (current.type === exports.Token.EOF && lookback != null) {
            current = lookback;
        }
        return this.constructToken(recognizer.inputStream.tokenSource, expectedTokenType, tokenText, current);
    };
    DefaultErrorStrategy.prototype.constructToken = function (tokenSource, expectedTokenType, tokenText, current) {
        var factory = tokenSource.tokenFactory;
        var x = current.tokenSource;
        var stream = x ? x.inputStream : undefined;
        return factory.create({ source: tokenSource, stream: stream }, expectedTokenType, tokenText, exports.Token.DEFAULT_CHANNEL, -1, -1, current.line, current.charPositionInLine);
    };
    DefaultErrorStrategy.prototype.getExpectedTokens = function (recognizer) {
        return recognizer.getExpectedTokens();
    };
    /** How should a token be displayed in an error message? The default
     *  is to display just the text, but during development you might
     *  want to have a lot of information spit out.  Override in that case
     *  to use t.toString() (which, for CommonToken, dumps everything about
     *  the token). This is better than forcing you to override a method in
     *  your token objects because you don't have to go modify your lexer
     *  so that it creates a new Java type.
     */
    DefaultErrorStrategy.prototype.getTokenErrorDisplay = function (t) {
        if (!t) {
            return "<no token>";
        }
        var s = this.getSymbolText(t);
        if (!s) {
            if (this.getSymbolType(t) === exports.Token.EOF) {
                s = "<EOF>";
            }
            else {
                s = "<" + this.getSymbolType(t) + ">";
            }
        }
        return this.escapeWSAndQuote(s);
    };
    DefaultErrorStrategy.prototype.getSymbolText = function (symbol) {
        return symbol.text;
    };
    DefaultErrorStrategy.prototype.getSymbolType = function (symbol) {
        return symbol.type;
    };
    DefaultErrorStrategy.prototype.escapeWSAndQuote = function (s) {
        //		if ( s==null ) return s;
        s = s.replace("\n", "\\n");
        s = s.replace("\r", "\\r");
        s = s.replace("\t", "\\t");
        return "'" + s + "'";
    };
    /*  Compute the error recovery set for the current rule.  During
     *  rule invocation, the parser pushes the set of tokens that can
     *  follow that rule reference on the stack; this amounts to
     *  computing FIRST of what follows the rule reference in the
     *  enclosing rule. See LinearApproximator.FIRST().
     *  This local follow set only includes tokens
     *  from within the rule; i.e., the FIRST computation done by
     *  ANTLR stops at the end of a rule.
     *
     *  EXAMPLE
     *
     *  When you find a "no viable alt exception", the input is not
     *  consistent with any of the alternatives for rule r.  The best
     *  thing to do is to consume tokens until you see something that
     *  can legally follow a call to r *or* any rule that called r.
     *  You don't want the exact set of viable next tokens because the
     *  input might just be missing a token--you might consume the
     *  rest of the input looking for one of the missing tokens.
     *
     *  Consider grammar:
     *
     *  a : '[' b ']'
     *    | '(' b ')'
     *    ;
     *  b : c '^' INT ;
     *  c : ID
     *    | INT
     *    ;
     *
     *  At each rule invocation, the set of tokens that could follow
     *  that rule is pushed on a stack.  Here are the various
     *  context-sensitive follow sets:
     *
     *  FOLLOW(b1_in_a) = FIRST(']') = ']'
     *  FOLLOW(b2_in_a) = FIRST(')') = ')'
     *  FOLLOW(c_in_b) = FIRST('^') = '^'
     *
     *  Upon erroneous input "[]", the call chain is
     *
     *  a -> b -> c
     *
     *  and, hence, the follow context stack is:
     *
     *  depth     follow set       start of rule execution
     *    0         <EOF>                    a (from main())
     *    1          ']'                     b
     *    2          '^'                     c
     *
     *  Notice that ')' is not included, because b would have to have
     *  been called from a different context in rule a for ')' to be
     *  included.
     *
     *  For error recovery, we cannot consider FOLLOW(c)
     *  (context-sensitive or otherwise).  We need the combined set of
     *  all context-sensitive FOLLOW sets--the set of all tokens that
     *  could follow any reference in the call chain.  We need to
     *  resync to one of those tokens.  Note that FOLLOW(c)='^' and if
     *  we resync'd to that token, we'd consume until EOF.  We need to
     *  sync to context-sensitive FOLLOWs for a, b, and c: {']','^'}.
     *  In this case, for input "[]", LA(1) is ']' and in the set, so we would
     *  not consume anything. After printing an error, rule c would
     *  return normally.  Rule b would not find the required '^' though.
     *  At this point, it gets a mismatched token error and
     *  exception (since LA(1) is not in the viable following token
     *  set).  The rule exception handler tries to recover, but finds
     *  the same recovery set and doesn't consume anything.  Rule b
     *  exits normally returning to rule a.  Now it finds the ']' (and
     *  with the successful match exits errorRecovery mode).
     *
     *  So, you can see that the parser walks up the call chain looking
     *  for the token that was a member of the recovery set.
     *
     *  Errors are not generated in errorRecovery mode.
     *
     *  ANTLR's error recovery mechanism is based upon original ideas:
     *
     *  "Algorithms + Data Structures = Programs" by Niklaus Wirth
     *
     *  and
     *
     *  "A note on error recovery in recursive descent parsers":
     *  http://portal.acm.org/citation.cfm?id=947902.947905
     *
     *  Later, Josef Grosch had some good ideas:
     *
     *  "Efficient and Comfortable Error Recovery in Recursive Descent
     *  Parsers":
     *  ftp://www.cocolab.com/products/cocktail/doca4.ps/ell.ps.zip
     *
     *  Like Grosch I implement context-sensitive FOLLOW sets that are combined
     *  at run-time upon error to avoid overhead during parsing.
     */
    DefaultErrorStrategy.prototype.getErrorRecoverySet = function (recognizer) {
        var atn = recognizer.interpreter.atn;
        var ctx = recognizer.context;
        var recoverSet = new IntervalSet();
        while (ctx && ctx.invokingState >= 0) {
            // compute what follows who invoked us
            var invokingState = atn.states[ctx.invokingState];
            var rt = invokingState.transition(0);
            var follow = atn.nextTokens(rt.followState);
            recoverSet.addAll(follow);
            ctx = ctx._parent;
        }
        recoverSet.remove(exports.Token.EPSILON);
        //		System.out.println("recover set "+recoverSet.toString(recognizer.getTokenNames()));
        return recoverSet;
    };
    /** Consume tokens until one matches the given token set. */
    DefaultErrorStrategy.prototype.consumeUntil = function (recognizer, set) {
        //		System.err.println("consumeUntil("+set.toString(recognizer.getTokenNames())+")");
        var ttype = recognizer.inputStream.LA(1);
        while (ttype !== exports.Token.EOF && !set.contains(ttype)) {
            //System.out.println("consume during recover LA(1)="+getTokenNames()[input.LA(1)]);
            //			recognizer.inputStream.consume();
            recognizer.consume();
            ttype = recognizer.inputStream.LA(1);
        }
    };
    __decorate([
        Override
    ], DefaultErrorStrategy.prototype, "reset", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "beginErrorCondition", null);
    __decorate([
        Override
    ], DefaultErrorStrategy.prototype, "inErrorRecoveryMode", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "endErrorCondition", null);
    __decorate([
        Override
    ], DefaultErrorStrategy.prototype, "reportMatch", null);
    __decorate([
        Override
    ], DefaultErrorStrategy.prototype, "reportError", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "notifyErrorListeners", null);
    __decorate([
        Override
    ], DefaultErrorStrategy.prototype, "recover", null);
    __decorate([
        Override
    ], DefaultErrorStrategy.prototype, "sync", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull)
    ], DefaultErrorStrategy.prototype, "reportNoViableAlternative", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull)
    ], DefaultErrorStrategy.prototype, "reportInputMismatch", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull)
    ], DefaultErrorStrategy.prototype, "reportFailedPredicate", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "reportUnwantedToken", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "reportMissingToken", null);
    __decorate([
        Override
    ], DefaultErrorStrategy.prototype, "recoverInline", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "singleTokenInsertion", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "singleTokenDeletion", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "getMissingSymbol", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "getExpectedTokens", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "getSymbolText", null);
    __decorate([
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "getSymbolType", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "escapeWSAndQuote", null);
    __decorate([
        NotNull,
        __param(0, NotNull)
    ], DefaultErrorStrategy.prototype, "getErrorRecoverySet", null);
    __decorate([
        __param(0, NotNull), __param(1, NotNull)
    ], DefaultErrorStrategy.prototype, "consumeUntil", null);
    return DefaultErrorStrategy;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This implementation of {@link ANTLRErrorStrategy} responds to syntax errors
 * by immediately canceling the parse operation with a
 * {@link ParseCancellationException}. The implementation ensures that the
 * {@link ParserRuleContext#exception} field is set for all parse tree nodes
 * that were not completed prior to encountering the error.
 *
 * This error strategy is useful in the following scenarios.
 *
 * * **Two-stage parsing:** This error strategy allows the first
 *   stage of two-stage parsing to immediately terminate if an error is
 *   encountered, and immediately fall back to the second stage. In addition to
 *   avoiding wasted work by attempting to recover from errors here, the empty
 *   implementation of {@link BailErrorStrategy#sync} improves the performance of
 *   the first stage.
 * * **Silent validation:** When syntax errors are not being
 *   reported or logged, and the parse result is simply ignored if errors occur,
 *   the {@link BailErrorStrategy} avoids wasting work on recovering from errors
 *   when the result will be ignored either way.
 *
 * ```
 * myparser.errorHandler = new BailErrorStrategy();
 * ```
 *
 * @see Parser.errorHandler
 */
var BailErrorStrategy = /** @class */ (function (_super) {
    __extends(BailErrorStrategy, _super);
    function BailErrorStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Instead of recovering from exception `e`, re-throw it wrapped
     *  in a {@link ParseCancellationException} so it is not caught by the
     *  rule function catches.  Use {@link Exception#getCause()} to get the
     *  original {@link RecognitionException}.
     */
    BailErrorStrategy.prototype.recover = function (recognizer, e) {
        for (var context_1 = recognizer.context; context_1; context_1 = context_1.parent) {
            context_1.exception = e;
        }
        throw new ParseCancellationException(e);
    };
    /** Make sure we don't attempt to recover inline; if the parser
     *  successfully recovers, it won't throw an exception.
     */
    BailErrorStrategy.prototype.recoverInline = function (recognizer) {
        var e = new InputMismatchException(recognizer);
        for (var context_2 = recognizer.context; context_2; context_2 = context_2.parent) {
            context_2.exception = e;
        }
        throw new ParseCancellationException(e);
    };
    /** Make sure we don't attempt to recover from problems in subrules. */
    BailErrorStrategy.prototype.sync = function (recognizer) {
        // intentionally empty
    };
    __decorate([
        Override
    ], BailErrorStrategy.prototype, "recover", null);
    __decorate([
        Override
    ], BailErrorStrategy.prototype, "recoverInline", null);
    __decorate([
        Override
    ], BailErrorStrategy.prototype, "sync", null);
    return BailErrorStrategy;
}(DefaultErrorStrategy));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
(function (Dependents) {
    /**
     * The element is dependent upon the specified rule.
     */
    Dependents[Dependents["SELF"] = 0] = "SELF";
    /**
     * The element is dependent upon the set of the specified rule's parents
     * (rules which directly reference it).
     */
    Dependents[Dependents["PARENTS"] = 1] = "PARENTS";
    /**
     * The element is dependent upon the set of the specified rule's children
     * (rules which it directly references).
     */
    Dependents[Dependents["CHILDREN"] = 2] = "CHILDREN";
    /**
     * The element is dependent upon the set of the specified rule's ancestors
     * (the transitive closure of `PARENTS` rules).
     */
    Dependents[Dependents["ANCESTORS"] = 3] = "ANCESTORS";
    /**
     * The element is dependent upon the set of the specified rule's descendants
     * (the transitive closure of `CHILDREN` rules).
     */
    Dependents[Dependents["DESCENDANTS"] = 4] = "DESCENDANTS";
    /**
     * The element is dependent upon the set of the specified rule's siblings
     * (the union of `CHILDREN` of its `PARENTS`).
     */
    Dependents[Dependents["SIBLINGS"] = 5] = "SIBLINGS";
    /**
     * The element is dependent upon the set of the specified rule's preceeding
     * siblings (the union of `CHILDREN` of its `PARENTS` which
     * appear before a reference to the rule).
     */
    Dependents[Dependents["PRECEEDING_SIBLINGS"] = 6] = "PRECEEDING_SIBLINGS";
    /**
     * The element is dependent upon the set of the specified rule's following
     * siblings (the union of `CHILDREN` of its `PARENTS` which
     * appear after a reference to the rule).
     */
    Dependents[Dependents["FOLLOWING_SIBLINGS"] = 7] = "FOLLOWING_SIBLINGS";
    /**
     * The element is dependent upon the set of the specified rule's preceeding
     * elements (rules which might end before the start of the specified rule
     * while parsing). This is calculated by taking the
     * `PRECEEDING_SIBLINGS` of the rule and each of its
     * `ANCESTORS`, along with the `DESCENDANTS` of those
     * elements.
     */
    Dependents[Dependents["PRECEEDING"] = 8] = "PRECEEDING";
    /**
     * The element is dependent upon the set of the specified rule's following
     * elements (rules which might start after the end of the specified rule
     * while parsing). This is calculated by taking the
     * `FOLLOWING_SIBLINGS` of the rule and each of its
     * `ANCESTORS`, along with the `DESCENDANTS` of those
     * elements.
     */
    Dependents[Dependents["FOLLOWING"] = 9] = "FOLLOWING";
})(exports.Dependents || (exports.Dependents = {}));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This implementation of {@link ANTLRErrorListener} can be used to identify
 * certain potential correctness and performance problems in grammars. "Reports"
 * are made by calling {@link Parser#notifyErrorListeners} with the appropriate
 * message.
 *
 * * **Ambiguities**: These are cases where more than one path through the
 *   grammar can match the input.
 * * **Weak context sensitivity**: These are cases where full-context
 *   prediction resolved an SLL conflict to a unique alternative which equaled the
 *   minimum alternative of the SLL conflict.
 * * **Strong (forced) context sensitivity**: These are cases where the
 *   full-context prediction resolved an SLL conflict to a unique alternative,
 *   *and* the minimum alternative of the SLL conflict was found to not be
 *   a truly viable alternative. Two-stage parsing cannot be used for inputs where
 *   this situation occurs.
 *
 * @author Sam Harwell
 */
var DiagnosticErrorListener = /** @class */ (function () {
    /**
     * Initializes a new instance of {@link DiagnosticErrorListener}, specifying
     * whether all ambiguities or only exact ambiguities are reported.
     *
     * @param exactOnly `true` to report only exact ambiguities, otherwise
     * `false` to report all ambiguities.  Defaults to true.
     */
    function DiagnosticErrorListener(exactOnly) {
        if (exactOnly === void 0) { exactOnly = true; }
        this.exactOnly = exactOnly;
        this.exactOnly = exactOnly;
    }
    DiagnosticErrorListener.prototype.syntaxError = function (
    /*@NotNull*/
    recognizer, offendingSymbol, line, charPositionInLine, 
    /*@NotNull*/
    msg, e) {
        // intentionally empty
    };
    DiagnosticErrorListener.prototype.reportAmbiguity = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        if (this.exactOnly && !exact) {
            return;
        }
        var decision = this.getDecisionDescription(recognizer, dfa);
        var conflictingAlts = this.getConflictingAlts(ambigAlts, configs);
        var text = recognizer.inputStream.getText(Interval.of(startIndex, stopIndex));
        var message = "reportAmbiguity d=" + decision + ": ambigAlts=" + conflictingAlts + ", input='" + text + "'";
        recognizer.notifyErrorListeners(message);
    };
    DiagnosticErrorListener.prototype.reportAttemptingFullContext = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, conflictState) {
        var decision = this.getDecisionDescription(recognizer, dfa);
        var text = recognizer.inputStream.getText(Interval.of(startIndex, stopIndex));
        var message = "reportAttemptingFullContext d=" + decision + ", input='" + text + "'";
        recognizer.notifyErrorListeners(message);
    };
    DiagnosticErrorListener.prototype.reportContextSensitivity = function (recognizer, dfa, startIndex, stopIndex, prediction, acceptState) {
        var decision = this.getDecisionDescription(recognizer, dfa);
        var text = recognizer.inputStream.getText(Interval.of(startIndex, stopIndex));
        var message = "reportContextSensitivity d=" + decision + ", input='" + text + "'";
        recognizer.notifyErrorListeners(message);
    };
    DiagnosticErrorListener.prototype.getDecisionDescription = function (recognizer, dfa) {
        var decision = dfa.decision;
        var ruleIndex = dfa.atnStartState.ruleIndex;
        var ruleNames = recognizer.ruleNames;
        if (ruleIndex < 0 || ruleIndex >= ruleNames.length) {
            return decision.toString();
        }
        var ruleName = ruleNames[ruleIndex];
        if (!ruleName) {
            return decision.toString();
        }
        return decision + " (" + ruleName + ")";
    };
    /**
     * Computes the set of conflicting or ambiguous alternatives from a
     * configuration set, if that information was not already provided by the
     * parser.
     *
     * @param reportedAlts The set of conflicting or ambiguous alternatives, as
     * reported by the parser.
     * @param configs The conflicting or ambiguous configuration set.
     * @returns Returns `reportedAlts` if it is not `undefined`, otherwise
     * returns the set of alternatives represented in `configs`.
     */
    DiagnosticErrorListener.prototype.getConflictingAlts = function (reportedAlts, configs) {
        if (reportedAlts != null) {
            return reportedAlts;
        }
        var result = new BitSet();
        try {
            for (var configs_1 = __values(configs), configs_1_1 = configs_1.next(); !configs_1_1.done; configs_1_1 = configs_1.next()) {
                var config = configs_1_1.value;
                result.set(config.alt);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (configs_1_1 && !configs_1_1.done && (_a = configs_1.return)) _a.call(configs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
        var e_1, _a;
    };
    __decorate([
        Override
    ], DiagnosticErrorListener.prototype, "syntaxError", null);
    __decorate([
        Override,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(6, NotNull)
    ], DiagnosticErrorListener.prototype, "reportAmbiguity", null);
    __decorate([
        Override,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(5, NotNull)
    ], DiagnosticErrorListener.prototype, "reportAttemptingFullContext", null);
    __decorate([
        Override,
        __param(0, NotNull),
        __param(1, NotNull),
        __param(5, NotNull)
    ], DiagnosticErrorListener.prototype, "reportContextSensitivity", null);
    __decorate([
        __param(0, NotNull),
        __param(1, NotNull)
    ], DiagnosticErrorListener.prototype, "getDecisionDescription", null);
    __decorate([
        NotNull,
        __param(1, NotNull)
    ], DiagnosticErrorListener.prototype, "getConflictingAlts", null);
    return DiagnosticErrorListener;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * This class extends {@link ParserRuleContext} by allowing the value of
 * {@link #getRuleIndex} to be explicitly set for the context.
 *
 * {@link ParserRuleContext} does not include field storage for the rule index
 * since the context classes created by the code generator override the
 * {@link #getRuleIndex} method to return the correct value for that context.
 * Since the parser interpreter does not use the context classes generated for a
 * parser, this class (with slightly more memory overhead per node) is used to
 * provide equivalent functionality.
 */
var InterpreterRuleContext = /** @class */ (function (_super) {
    __extends(InterpreterRuleContext, _super);
    function InterpreterRuleContext(ruleIndex, parent, invokingStateNumber) {
        var _this = this;
        if (invokingStateNumber !== undefined) {
            _this = _super.call(this, parent, invokingStateNumber) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        _this._ruleIndex = ruleIndex;
        return _this;
    }
    Object.defineProperty(InterpreterRuleContext.prototype, "ruleIndex", {
        get: function () {
            return this._ruleIndex;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], InterpreterRuleContext.prototype, "ruleIndex", null);
    return InterpreterRuleContext;
}(ParserRuleContext));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var LexerInterpreter = /** @class */ (function (_super) {
    __extends(LexerInterpreter, _super);
    function LexerInterpreter(grammarFileName, vocabulary, modeNames, ruleNames, atn, input) {
        var _this = _super.call(this, input) || this;
        if (atn.grammarType !== 0 /* LEXER */) {
            throw new Error("IllegalArgumentException: The ATN must be a lexer ATN.");
        }
        _this._grammarFileName = grammarFileName;
        _this._atn = atn;
        _this._ruleNames = ruleNames.slice(0);
        _this._modeNames = modeNames.slice(0);
        _this._vocabulary = vocabulary;
        _this._interp = new LexerATNSimulator(atn, _this);
        return _this;
    }
    Object.defineProperty(LexerInterpreter.prototype, "atn", {
        get: function () {
            return this._atn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "grammarFileName", {
        get: function () {
            return this._grammarFileName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "ruleNames", {
        get: function () {
            return this._ruleNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "modeNames", {
        get: function () {
            return this._modeNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexerInterpreter.prototype, "vocabulary", {
        get: function () {
            return this._vocabulary;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], LexerInterpreter.prototype, "_vocabulary", void 0);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "atn", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "grammarFileName", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "ruleNames", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "modeNames", null);
    __decorate([
        Override
    ], LexerInterpreter.prototype, "vocabulary", null);
    LexerInterpreter = __decorate([
        __param(1, NotNull)
    ], LexerInterpreter);
    return LexerInterpreter;
}(Lexer));

/*!
* Copyright 2016 The ANTLR Project. All rights reserved.
* Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
*/
/**
 * Provides an implementation of {@link TokenSource} as a wrapper around a list
 * of {@link Token} objects.
 *
 * If the final token in the list is an {@link Token#EOF} token, it will be used
 * as the EOF token for every call to {@link #nextToken} after the end of the
 * list is reached. Otherwise, an EOF token will be created.
 */
var ListTokenSource = /** @class */ (function () {
    /**
     * Constructs a new {@link ListTokenSource} instance from the specified
     * collection of {@link Token} objects and source name.
     *
     * @param tokens The collection of {@link Token} objects to provide as a
     * {@link TokenSource}.
     * @param sourceName The name of the {@link TokenSource}. If this value is
     * `undefined`, {@link #getSourceName} will attempt to infer the name from
     * the next {@link Token} (or the previous token if the end of the input has
     * been reached).
     *
     * @exception NullPointerException if `tokens` is `undefined`
     */
    function ListTokenSource(tokens, sourceName) {
        /**
         * The index into {@link #tokens} of token to return by the next call to
         * {@link #nextToken}. The end of the input is indicated by this value
         * being greater than or equal to the number of items in {@link #tokens}.
         */
        this.i = 0;
        /**
         * This is the backing field for {@link #getTokenFactory} and
         * {@link setTokenFactory}.
         */
        this._factory = exports.CommonTokenFactory.DEFAULT;
        if (tokens == null) {
            throw new Error("tokens cannot be null");
        }
        this.tokens = tokens;
        this._sourceName = sourceName;
    }
    Object.defineProperty(ListTokenSource.prototype, "charPositionInLine", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            if (this.i < this.tokens.length) {
                return this.tokens[this.i].charPositionInLine;
            }
            else if (this.eofToken != null) {
                return this.eofToken.charPositionInLine;
            }
            else if (this.tokens.length > 0) {
                // have to calculate the result from the line/column of the previous
                // token, along with the text of the token.
                var lastToken = this.tokens[this.tokens.length - 1];
                var tokenText = lastToken.text;
                if (tokenText != null) {
                    var lastNewLine = tokenText.lastIndexOf("\n");
                    if (lastNewLine >= 0) {
                        return tokenText.length - lastNewLine - 1;
                    }
                }
                return lastToken.charPositionInLine + lastToken.stopIndex - lastToken.startIndex + 1;
            }
            // only reach this if tokens is empty, meaning EOF occurs at the first
            // position in the input
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * {@inheritDoc}
     */
    ListTokenSource.prototype.nextToken = function () {
        if (this.i >= this.tokens.length) {
            if (this.eofToken == null) {
                var start = -1;
                if (this.tokens.length > 0) {
                    var previousStop = this.tokens[this.tokens.length - 1].stopIndex;
                    if (previousStop !== -1) {
                        start = previousStop + 1;
                    }
                }
                var stop_1 = Math.max(-1, start - 1);
                this.eofToken = this._factory.create({ source: this, stream: this.inputStream }, exports.Token.EOF, "EOF", exports.Token.DEFAULT_CHANNEL, start, stop_1, this.line, this.charPositionInLine);
            }
            return this.eofToken;
        }
        var t = this.tokens[this.i];
        if (this.i === this.tokens.length - 1 && t.type === exports.Token.EOF) {
            this.eofToken = t;
        }
        this.i++;
        return t;
    };
    Object.defineProperty(ListTokenSource.prototype, "line", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            if (this.i < this.tokens.length) {
                return this.tokens[this.i].line;
            }
            else if (this.eofToken != null) {
                return this.eofToken.line;
            }
            else if (this.tokens.length > 0) {
                // have to calculate the result from the line/column of the previous
                // token, along with the text of the token.
                var lastToken = this.tokens[this.tokens.length - 1];
                var line = lastToken.line;
                var tokenText = lastToken.text;
                if (tokenText != null) {
                    for (var i = 0; i < tokenText.length; i++) {
                        if (tokenText.charAt(i) === "\n") {
                            line++;
                        }
                    }
                }
                // if no text is available, assume the token did not contain any newline characters.
                return line;
            }
            // only reach this if tokens is empty, meaning EOF occurs at the first
            // position in the input
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTokenSource.prototype, "inputStream", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            if (this.i < this.tokens.length) {
                return this.tokens[this.i].inputStream;
            }
            else if (this.eofToken != null) {
                return this.eofToken.inputStream;
            }
            else if (this.tokens.length > 0) {
                return this.tokens[this.tokens.length - 1].inputStream;
            }
            // no input stream information is available
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTokenSource.prototype, "sourceName", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            if (this._sourceName) {
                return this._sourceName;
            }
            var inputStream = this.inputStream;
            if (inputStream != null) {
                return inputStream.sourceName;
            }
            return "List";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListTokenSource.prototype, "tokenFactory", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            return this._factory;
        },
        /**
         * {@inheritDoc}
         */
        // @Override
        set: function (factory) {
            this._factory = factory;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], ListTokenSource.prototype, "charPositionInLine", null);
    __decorate([
        Override
    ], ListTokenSource.prototype, "nextToken", null);
    __decorate([
        Override
    ], ListTokenSource.prototype, "line", null);
    __decorate([
        Override
    ], ListTokenSource.prototype, "inputStream", null);
    __decorate([
        Override
    ], ListTokenSource.prototype, "sourceName", null);
    __decorate([
        Override,
        NotNull,
        __param(0, NotNull)
    ], ListTokenSource.prototype, "tokenFactory", null);
    ListTokenSource = __decorate([
        __param(0, NotNull)
    ], ListTokenSource);
    return ListTokenSource;
}());

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/** A parser simulator that mimics what ANTLR's generated
 *  parser code does. A ParserATNSimulator is used to make
 *  predictions via adaptivePredict but this class moves a pointer through the
 *  ATN to simulate parsing. ParserATNSimulator just
 *  makes us efficient rather than having to backtrack, for example.
 *
 *  This properly creates parse trees even for left recursive rules.
 *
 *  We rely on the left recursive rule invocation and special predicate
 *  transitions to make left recursive rules work.
 *
 *  See TestParserInterpreter for examples.
 */
var ParserInterpreter = /** @class */ (function (_super) {
    __extends(ParserInterpreter, _super);
    function ParserInterpreter(grammarFileName, vocabulary, ruleNames, atn, input) {
        var _this = _super.call(this, grammarFileName instanceof ParserInterpreter ? grammarFileName.inputStream : input) || this;
        /** This stack corresponds to the _parentctx, _parentState pair of locals
         *  that would exist on call stack frames with a recursive descent parser;
         *  in the generated function for a left-recursive rule you'd see:
         *
         *  private EContext e(int _p) {
         *      ParserRuleContext _parentctx = _ctx;    // Pair.a
         *      int _parentState = state;          // Pair.b
         *      ...
         *  }
         *
         *  Those values are used to create new recursive rule invocation contexts
         *  associated with left operand of an alt like "expr '*' expr".
         */
        _this._parentContextStack = [];
        /** We need a map from (decision,inputIndex)->forced alt for computing ambiguous
         *  parse trees. For now, we allow exactly one override.
         */
        _this.overrideDecision = -1;
        _this.overrideDecisionInputIndex = -1;
        _this.overrideDecisionAlt = -1;
        _this.overrideDecisionReached = false; // latch and only override once; error might trigger infinite loop
        /** What is the current context when we override a decisions?  This tells
         *  us what the root of the parse tree is when using override
         *  for an ambiguity/lookahead check.
         */
        _this._overrideDecisionRoot = undefined;
        if (grammarFileName instanceof ParserInterpreter) {
            var old = grammarFileName;
            _this._grammarFileName = old._grammarFileName;
            _this._atn = old._atn;
            _this.pushRecursionContextStates = old.pushRecursionContextStates;
            _this._ruleNames = old._ruleNames;
            _this._vocabulary = old._vocabulary;
            _this.interpreter = new ParserATNSimulator(_this._atn, _this);
        }
        else {
            // The second constructor requires non-null arguments
            vocabulary = vocabulary;
            ruleNames = ruleNames;
            atn = atn;
            _this._grammarFileName = grammarFileName;
            _this._atn = atn;
            _this._ruleNames = ruleNames.slice(0);
            _this._vocabulary = vocabulary;
            // identify the ATN states where pushNewRecursionContext() must be called
            _this.pushRecursionContextStates = new BitSet(atn.states.length);
            try {
                for (var _a = __values(atn.states), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var state = _b.value;
                    if (!(state instanceof StarLoopEntryState)) {
                        continue;
                    }
                    if (state.precedenceRuleDecision) {
                        _this.pushRecursionContextStates.set(state.stateNumber);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // get atn simulator that knows how to do predictions
            _this.interpreter = new ParserATNSimulator(atn, _this);
        }
        return _this;
        var e_1, _c;
    }
    ParserInterpreter.prototype.reset = function (resetInput) {
        if (resetInput === undefined) {
            _super.prototype.reset.call(this);
        }
        else {
            _super.prototype.reset.call(this, resetInput);
        }
        this.overrideDecisionReached = false;
        this._overrideDecisionRoot = undefined;
    };
    Object.defineProperty(ParserInterpreter.prototype, "atn", {
        get: function () {
            return this._atn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserInterpreter.prototype, "vocabulary", {
        get: function () {
            return this._vocabulary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserInterpreter.prototype, "ruleNames", {
        get: function () {
            return this._ruleNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserInterpreter.prototype, "grammarFileName", {
        get: function () {
            return this._grammarFileName;
        },
        enumerable: true,
        configurable: true
    });
    /** Begin parsing at startRuleIndex */
    ParserInterpreter.prototype.parse = function (startRuleIndex) {
        var startRuleStartState = this._atn.ruleToStartState[startRuleIndex];
        this._rootContext = this.createInterpreterRuleContext(undefined, ATNState.INVALID_STATE_NUMBER, startRuleIndex);
        if (startRuleStartState.isPrecedenceRule) {
            this.enterRecursionRule(this._rootContext, startRuleStartState.stateNumber, startRuleIndex, 0);
        }
        else {
            this.enterRule(this._rootContext, startRuleStartState.stateNumber, startRuleIndex);
        }
        while (true) {
            var p = this.atnState;
            switch (p.stateType) {
                case ATNStateType.RULE_STOP:
                    // pop; return from rule
                    if (this._ctx.isEmpty) {
                        if (startRuleStartState.isPrecedenceRule) {
                            var result = this._ctx;
                            var parentContext = this._parentContextStack.pop();
                            this.unrollRecursionContexts(parentContext[0]);
                            return result;
                        }
                        else {
                            this.exitRule();
                            return this._rootContext;
                        }
                    }
                    this.visitRuleStopState(p);
                    break;
                default:
                    try {
                        this.visitState(p);
                    }
                    catch (e) {
                        if (e instanceof RecognitionException) {
                            this.state = this._atn.ruleToStopState[p.ruleIndex].stateNumber;
                            this.context.exception = e;
                            this.errorHandler.reportError(this, e);
                            this.recover(e);
                        }
                        else {
                            throw e;
                        }
                    }
                    break;
            }
        }
    };
    ParserInterpreter.prototype.enterRecursionRule = function (localctx, state, ruleIndex, precedence) {
        this._parentContextStack.push([this._ctx, localctx.invokingState]);
        _super.prototype.enterRecursionRule.call(this, localctx, state, ruleIndex, precedence);
    };
    Object.defineProperty(ParserInterpreter.prototype, "atnState", {
        get: function () {
            return this._atn.states[this.state];
        },
        enumerable: true,
        configurable: true
    });
    ParserInterpreter.prototype.visitState = function (p) {
        var predictedAlt = 1;
        if (p.numberOfTransitions > 1) {
            predictedAlt = this.visitDecisionState(p);
        }
        var transition = p.transition(predictedAlt - 1);
        switch (transition.serializationType) {
            case 1 /* EPSILON */:
                if (this.pushRecursionContextStates.get(p.stateNumber) &&
                    !(transition.target instanceof LoopEndState)) {
                    // We are at the start of a left recursive rule's (...)* loop
                    // and we're not taking the exit branch of loop.
                    var parentContext = this._parentContextStack[this._parentContextStack.length - 1];
                    var localctx = this.createInterpreterRuleContext(parentContext[0], parentContext[1], this._ctx.ruleIndex);
                    this.pushNewRecursionContext(localctx, this._atn.ruleToStartState[p.ruleIndex].stateNumber, this._ctx.ruleIndex);
                }
                break;
            case 5 /* ATOM */:
                this.match(transition._label);
                break;
            case 2 /* RANGE */:
            case 7 /* SET */:
            case 8 /* NOT_SET */:
                if (!transition.matches(this._input.LA(1), exports.Token.MIN_USER_TOKEN_TYPE, 65535)) {
                    this.recoverInline();
                }
                this.matchWildcard();
                break;
            case 9 /* WILDCARD */:
                this.matchWildcard();
                break;
            case 3 /* RULE */:
                var ruleStartState = transition.target;
                var ruleIndex = ruleStartState.ruleIndex;
                var newctx = this.createInterpreterRuleContext(this._ctx, p.stateNumber, ruleIndex);
                if (ruleStartState.isPrecedenceRule) {
                    this.enterRecursionRule(newctx, ruleStartState.stateNumber, ruleIndex, transition.precedence);
                }
                else {
                    this.enterRule(newctx, transition.target.stateNumber, ruleIndex);
                }
                break;
            case 4 /* PREDICATE */:
                var predicateTransition = transition;
                if (!this.sempred(this._ctx, predicateTransition.ruleIndex, predicateTransition.predIndex)) {
                    throw new FailedPredicateException(this);
                }
                break;
            case 6 /* ACTION */:
                var actionTransition = transition;
                this.action(this._ctx, actionTransition.ruleIndex, actionTransition.actionIndex);
                break;
            case 10 /* PRECEDENCE */:
                if (!this.precpred(this._ctx, transition.precedence)) {
                    var precedence = transition.precedence;
                    throw new FailedPredicateException(this, "precpred(_ctx, " + precedence + ")");
                }
                break;
            default:
                throw new Error("UnsupportedOperationException: Unrecognized ATN transition type.");
        }
        this.state = transition.target.stateNumber;
    };
    /** Method visitDecisionState() is called when the interpreter reaches
     *  a decision state (instance of DecisionState). It gives an opportunity
     *  for subclasses to track interesting things.
     */
    ParserInterpreter.prototype.visitDecisionState = function (p) {
        var predictedAlt;
        this.errorHandler.sync(this);
        var decision = p.decision;
        if (decision === this.overrideDecision && this._input.index === this.overrideDecisionInputIndex && !this.overrideDecisionReached) {
            predictedAlt = this.overrideDecisionAlt;
            this.overrideDecisionReached = true;
        }
        else {
            predictedAlt = this.interpreter.adaptivePredict(this._input, decision, this._ctx);
        }
        return predictedAlt;
    };
    /** Provide simple "factory" for InterpreterRuleContext's.
     *  @since 4.5.1
     */
    ParserInterpreter.prototype.createInterpreterRuleContext = function (parent, invokingStateNumber, ruleIndex) {
        return new InterpreterRuleContext(ruleIndex, parent, invokingStateNumber);
    };
    ParserInterpreter.prototype.visitRuleStopState = function (p) {
        var ruleStartState = this._atn.ruleToStartState[p.ruleIndex];
        if (ruleStartState.isPrecedenceRule) {
            var parentContext = this._parentContextStack.pop();
            this.unrollRecursionContexts(parentContext[0]);
            this.state = parentContext[1];
        }
        else {
            this.exitRule();
        }
        var ruleTransition = this._atn.states[this.state].transition(0);
        this.state = ruleTransition.followState.stateNumber;
    };
    /** Override this parser interpreters normal decision-making process
     *  at a particular decision and input token index. Instead of
     *  allowing the adaptive prediction mechanism to choose the
     *  first alternative within a block that leads to a successful parse,
     *  force it to take the alternative, 1..n for n alternatives.
     *
     *  As an implementation limitation right now, you can only specify one
     *  override. This is sufficient to allow construction of different
     *  parse trees for ambiguous input. It means re-parsing the entire input
     *  in general because you're never sure where an ambiguous sequence would
     *  live in the various parse trees. For example, in one interpretation,
     *  an ambiguous input sequence would be matched completely in expression
     *  but in another it could match all the way back to the root.
     *
     *  s : e '!'? ;
     *  e : ID
     *    | ID '!'
     *    ;
     *
     *  Here, x! can be matched as (s (e ID) !) or (s (e ID !)). In the first
     *  case, the ambiguous sequence is fully contained only by the root.
     *  In the second case, the ambiguous sequences fully contained within just
     *  e, as in: (e ID !).
     *
     *  Rather than trying to optimize this and make
     *  some intelligent decisions for optimization purposes, I settled on
     *  just re-parsing the whole input and then using
     *  {link Trees#getRootOfSubtreeEnclosingRegion} to find the minimal
     *  subtree that contains the ambiguous sequence. I originally tried to
     *  record the call stack at the point the parser detected and ambiguity but
     *  left recursive rules create a parse tree stack that does not reflect
     *  the actual call stack. That impedance mismatch was enough to make
     *  it it challenging to restart the parser at a deeply nested rule
     *  invocation.
     *
     *  Only parser interpreters can override decisions so as to avoid inserting
     *  override checking code in the critical ALL(*) prediction execution path.
     *
     *  @since 4.5
     */
    ParserInterpreter.prototype.addDecisionOverride = function (decision, tokenIndex, forcedAlt) {
        this.overrideDecision = decision;
        this.overrideDecisionInputIndex = tokenIndex;
        this.overrideDecisionAlt = forcedAlt;
    };
    Object.defineProperty(ParserInterpreter.prototype, "overrideDecisionRoot", {
        get: function () {
            return this._overrideDecisionRoot;
        },
        enumerable: true,
        configurable: true
    });
    /** Rely on the error handler for this parser but, if no tokens are consumed
     *  to recover, add an error node. Otherwise, nothing is seen in the parse
     *  tree.
     */
    ParserInterpreter.prototype.recover = function (e) {
        var i = this._input.index;
        this.errorHandler.recover(this, e);
        if (this._input.index === i) {
            // no input consumed, better add an error node
            var tok = e.getOffendingToken();
            if (!tok) {
                throw new Error("Expected exception to have an offending token");
            }
            var source = tok.tokenSource;
            var stream = source !== undefined ? source.inputStream : undefined;
            var sourcePair = { source: source, stream: stream };
            if (e instanceof InputMismatchException) {
                var expectedTokens = e.expectedTokens;
                if (expectedTokens === undefined) {
                    throw new Error("Expected the exception to provide expected tokens");
                }
                var expectedTokenType = expectedTokens.minElement; // get any element
                var errToken = this.tokenFactory.create(sourcePair, expectedTokenType, tok.text, exports.Token.DEFAULT_CHANNEL, -1, -1, // invalid start/stop
                tok.line, tok.charPositionInLine);
                this._ctx.addErrorNode(errToken);
            }
            else { // NoViableAlt
                var source_1 = tok.tokenSource;
                var errToken = this.tokenFactory.create(sourcePair, exports.Token.INVALID_TYPE, tok.text, exports.Token.DEFAULT_CHANNEL, -1, -1, // invalid start/stop
                tok.line, tok.charPositionInLine);
                this._ctx.addErrorNode(errToken);
            }
        }
    };
    ParserInterpreter.prototype.recoverInline = function () {
        return this._errHandler.recoverInline(this);
    };
    Object.defineProperty(ParserInterpreter.prototype, "rootContext", {
        /** Return the root of the parse, which can be useful if the parser
         *  bails out. You still can access the top node. Note that,
         *  because of the way left recursive rules add children, it's possible
         *  that the root will not have any children if the start rule immediately
         *  called and left recursive rule that fails.
         *
         * @since 4.5.1
         */
        get: function () {
            return this._rootContext;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        NotNull
    ], ParserInterpreter.prototype, "_vocabulary", void 0);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "reset", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "atn", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "vocabulary", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "ruleNames", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "grammarFileName", null);
    __decorate([
        Override
    ], ParserInterpreter.prototype, "enterRecursionRule", null);
    ParserInterpreter = __decorate([
        __param(1, NotNull)
    ], ParserInterpreter);
    return ParserInterpreter;
}(Parser$$1));

/*!
* Copyright 2016 The ANTLR Project. All rights reserved.
* Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
*/
/** A handy class for use with
 *
 *  options {contextSuperClass=org.antlr.v4.runtime.RuleContextWithAltNum;}
 *
 *  that provides a backing field / impl for the outer alternative number
 *  matched for an internal parse tree node.
 *
 *  I'm only putting into Java runtime as I'm certain I'm the only one that
 *  will really every use this.
 */
var RuleContextWithAltNum = /** @class */ (function (_super) {
    __extends(RuleContextWithAltNum, _super);
    function RuleContextWithAltNum(parent, invokingStateNumber) {
        var _this = this;
        if (invokingStateNumber !== undefined) {
            _this = _super.call(this, parent, invokingStateNumber) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        _this._altNumber = ATN.INVALID_ALT_NUMBER;
        return _this;
    }
    Object.defineProperty(RuleContextWithAltNum.prototype, "altNumber", {
        get: function () {
            return this._altNumber;
        },
        // @Override
        set: function (altNum) {
            this._altNumber = altNum;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Override
    ], RuleContextWithAltNum.prototype, "altNumber", null);
    return RuleContextWithAltNum;
}(ParserRuleContext));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Declares a dependency upon a grammar rule, along with a set of zero or more dependent rules.
 *
 * Version numbers within a grammar should be assigned on a monotonically increasing basis to allow for accurate
 * tracking of dependent rules.
 *
 * @author Sam Harwell
 */
function RuleDependency(dependency) {
    return function (target, propertyKey, propertyDescriptor) {
        // intentionally empty
    };
}

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 *
 * @author Sam Harwell
 */
function RuleVersion(version) {
    return function (target, propertyKey, propertyDescriptor) {
        // intentionally empty
    };
}

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
/**
 * Useful for rewriting out a buffered input token stream after doing some
 * augmentation or other manipulations on it.
 *
 * You can insert stuff, replace, and delete chunks. Note that the operations
 * are done lazily--only if you convert the buffer to a {@link String} with
 * {@link TokenStream#getText()}. This is very efficient because you are not
 * moving data around all the time. As the buffer of tokens is converted to
 * strings, the {@link #getText()} method(s) scan the input token stream and
 * check to see if there is an operation at the current index. If so, the
 * operation is done and then normal {@link String} rendering continues on the
 * buffer. This is like having multiple Turing machine instruction streams
 * (programs) operating on a single input tape. :)
 *
 * This rewriter makes no modifications to the token stream. It does not ask the
 * stream to fill itself up nor does it advance the input cursor. The token
 * stream `TokenStream.index` will return the same value before and
 * after any {@link #getText()} call.
 *
 * The rewriter only works on tokens that you have in the buffer and ignores the
 * current input cursor. If you are buffering tokens on-demand, calling
 * {@link #getText()} halfway through the input will only do rewrites for those
 * tokens in the first half of the file.
 *
 * Since the operations are done lazily at {@link #getText}-time, operations do
 * not screw up the token index values. That is, an insert operation at token
 * index `i` does not change the index values for tokens
 * `i`+1..n-1.
 *
 * Because operations never actually alter the buffer, you may always get the
 * original token stream back without undoing anything. Since the instructions
 * are queued up, you can easily simulate transactions and roll back any changes
 * if there is an error just by removing instructions. For example,
 *
 * ```
 * CharStream input = new ANTLRFileStream("input");
 * TLexer lex = new TLexer(input);
 * CommonTokenStream tokens = new CommonTokenStream(lex);
 * T parser = new T(tokens);
 * TokenStreamRewriter rewriter = new TokenStreamRewriter(tokens);
 * parser.startRule();
 * ```
 *
 * Then in the rules, you can execute (assuming rewriter is visible):
 *
 * ```
 * Token t,u;
 * ...
 * rewriter.insertAfter(t, "text to put after t");}
 * rewriter.insertAfter(u, "text after u");}
 * System.out.println(rewriter.getText());
 * ```
 *
 * You can also have multiple "instruction streams" and get multiple rewrites
 * from a single pass over the input. Just name the instruction streams and use
 * that name again when printing the buffer. This could be useful for generating
 * a C file and also its header file--all from the same buffer:
 *
 * ```
 * rewriter.insertAfter("pass1", t, "text to put after t");}
 * rewriter.insertAfter("pass2", u, "text after u");}
 * System.out.println(rewriter.getText("pass1"));
 * System.out.println(rewriter.getText("pass2"));
 * ```
 *
 * If you don't use named rewrite streams, a "default" stream is used as the
 * first example shows.
 */
var TokenStreamRewriter = /** @class */ (function () {
    function TokenStreamRewriter(tokens) {
        this.tokens = tokens;
        this.programs = new Map();
        this.programs.set(TokenStreamRewriter.DEFAULT_PROGRAM_NAME, []);
        this.lastRewriteTokenIndexes = new Map();
    }
    TokenStreamRewriter.prototype.getTokenStream = function () {
        return this.tokens;
    };
    TokenStreamRewriter.prototype.rollback = function (instructionIndex, programName) {
        if (programName === void 0) { programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME; }
        var is = this.programs.get(programName);
        if (is != null) {
            this.programs.set(programName, is.slice(TokenStreamRewriter.MIN_TOKEN_INDEX, instructionIndex));
        }
    };
    TokenStreamRewriter.prototype.deleteProgram = function (programName) {
        if (programName === void 0) { programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME; }
        this.rollback(TokenStreamRewriter.MIN_TOKEN_INDEX, programName);
    };
    TokenStreamRewriter.prototype.insertAfter = function (tokenOrIndex, text, programName) {
        if (programName === void 0) { programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME; }
        var index;
        if (typeof tokenOrIndex === "number") {
            index = tokenOrIndex;
        }
        else {
            index = tokenOrIndex.tokenIndex;
        }
        // to insert after, just insert before next index (even if past end)
        var op = new InsertAfterOp(this.tokens, index, text);
        var rewrites = this.getProgram(programName);
        op.instructionIndex = rewrites.length;
        rewrites.push(op);
    };
    TokenStreamRewriter.prototype.insertBefore = function (tokenOrIndex, text, programName) {
        if (programName === void 0) { programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME; }
        var index;
        if (typeof tokenOrIndex === "number") {
            index = tokenOrIndex;
        }
        else {
            index = tokenOrIndex.tokenIndex;
        }
        var op = new InsertBeforeOp(this.tokens, index, text);
        var rewrites = this.getProgram(programName);
        op.instructionIndex = rewrites.length;
        rewrites.push(op);
    };
    TokenStreamRewriter.prototype.replaceSingle = function (index, text) {
        if (typeof index === "number") {
            this.replace(index, index, text);
        }
        else {
            this.replace(index, index, text);
        }
    };
    TokenStreamRewriter.prototype.replace = function (from, to, text, programName) {
        if (programName === void 0) { programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME; }
        if (typeof from !== "number") {
            from = from.tokenIndex;
        }
        if (typeof to !== "number") {
            to = to.tokenIndex;
        }
        if (from > to || from < 0 || to < 0 || to >= this.tokens.size) {
            throw new RangeError("replace: range invalid: " + from + ".." + to + "(size=" + this.tokens.size + ")");
        }
        var op = new ReplaceOp(this.tokens, from, to, text);
        var rewrites = this.getProgram(programName);
        op.instructionIndex = rewrites.length;
        rewrites.push(op);
    };
    TokenStreamRewriter.prototype.delete = function (from, to, programName) {
        if (programName === void 0) { programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME; }
        if (to === undefined) {
            to = from;
        }
        if (typeof from === "number") {
            this.replace(from, to, "", programName);
        }
        else {
            this.replace(from, to, "", programName);
        }
    };
    TokenStreamRewriter.prototype.getLastRewriteTokenIndex = function (programName) {
        if (programName === void 0) { programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME; }
        var I = this.lastRewriteTokenIndexes.get(programName);
        if (I == null) {
            return -1;
        }
        return I;
    };
    TokenStreamRewriter.prototype.setLastRewriteTokenIndex = function (programName, i) {
        this.lastRewriteTokenIndexes.set(programName, i);
    };
    TokenStreamRewriter.prototype.getProgram = function (name) {
        var is = this.programs.get(name);
        if (is == null) {
            is = this.initializeProgram(name);
        }
        return is;
    };
    TokenStreamRewriter.prototype.initializeProgram = function (name) {
        var is = [];
        this.programs.set(name, is);
        return is;
    };
    TokenStreamRewriter.prototype.getText = function (intervalOrProgram, programName) {
        if (programName === void 0) { programName = TokenStreamRewriter.DEFAULT_PROGRAM_NAME; }
        var interval;
        if (intervalOrProgram instanceof Interval) {
            interval = intervalOrProgram;
        }
        else {
            interval = Interval.of(0, this.tokens.size - 1);
        }
        if (typeof intervalOrProgram === "string") {
            programName = intervalOrProgram;
        }
        var rewrites = this.programs.get(programName);
        var start = interval.a;
        var stop = interval.b;
        // ensure start/end are in range
        if (stop > this.tokens.size - 1) {
            stop = this.tokens.size - 1;
        }
        if (start < 0) {
            start = 0;
        }
        if (rewrites == null || rewrites.length === 0) {
            return this.tokens.getText(interval); // no instructions to execute
        }
        var buf = [];
        // First, optimize instruction stream
        var indexToOp = this.reduceToSingleOperationPerIndex(rewrites);
        // Walk buffer, executing instructions and emitting tokens
        var i = start;
        while (i <= stop && i < this.tokens.size) {
            var op = indexToOp.get(i);
            indexToOp.delete(i); // remove so any left have index size-1
            var t = this.tokens.get(i);
            if (op == null) {
                // no operation at that index, just dump token
                if (t.type !== exports.Token.EOF) {
                    buf.push(String(t.text));
                }
                i++; // move to next token
            }
            else {
                i = op.execute(buf); // execute operation and skip
            }
        }
        // include stuff after end if it's last index in buffer
        // So, if they did an insertAfter(lastValidIndex, "foo"), include
        // foo if end==lastValidIndex.
        if (stop === this.tokens.size - 1) {
            try {
                // Scan any remaining operations after last token
                // should be included (they will be inserts).
                for (var _a = __values(indexToOp.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var op = _b.value;
                    if (op.index >= this.tokens.size - 1) {
                        buf.push(op.text.toString());
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return buf.join("");
        var e_1, _c;
    };
    /** We need to combine operations and report invalid operations (like
     *  overlapping replaces that are not completed nested). Inserts to
     *  same index need to be combined etc...  Here are the cases:
     *
     *  I.i.u I.j.v								leave alone, nonoverlapping
     *  I.i.u I.i.v								combine: Iivu
     *
     *  R.i-j.u R.x-y.v	| i-j in x-y			delete first R
     *  R.i-j.u R.i-j.v							delete first R
     *  R.i-j.u R.x-y.v	| x-y in i-j			ERROR
     *  R.i-j.u R.x-y.v	| boundaries overlap	ERROR
     *
     *  Delete special case of replace (text==undefined):
     *  D.i-j.u D.x-y.v	| boundaries overlap	combine to max(min)..max(right)
     *
     *  I.i.u R.x-y.v | i in (x+1)-y			delete I (since insert before
     * 											we're not deleting i)
     *  I.i.u R.x-y.v | i not in (x+1)-y		leave alone, nonoverlapping
     *  R.x-y.v I.i.u | i in x-y				ERROR
     *  R.x-y.v I.x.u 							R.x-y.uv (combine, delete I)
     *  R.x-y.v I.i.u | i not in x-y			leave alone, nonoverlapping
     *
     *  I.i.u = insert u before op @ index i
     *  R.x-y.u = replace x-y indexed tokens with u
     *
     *  First we need to examine replaces. For any replace op:
     *
     * 		1. wipe out any insertions before op within that range.
     * 		2. Drop any replace op before that is contained completely within
     * 	 that range.
     * 		3. Throw exception upon boundary overlap with any previous replace.
     *
     *  Then we can deal with inserts:
     *
     * 		1. for any inserts to same index, combine even if not adjacent.
     * 		2. for any prior replace with same left boundary, combine this
     * 	 insert with replace and delete this replace.
     * 		3. throw exception if index in same range as previous replace
     *
     *  Don't actually delete; make op undefined in list. Easier to walk list.
     *  Later we can throw as we add to index &rarr; op map.
     *
     *  Note that I.2 R.2-2 will wipe out I.2 even though, technically, the
     *  inserted stuff would be before the replace range. But, if you
     *  add tokens in front of a method body '{' and then delete the method
     *  body, I think the stuff before the '{' you added should disappear too.
     *
     *  Return a map from token index to operation.
     */
    TokenStreamRewriter.prototype.reduceToSingleOperationPerIndex = function (rewrites) {
        // console.log(`rewrites=[${Utils.join(rewrites, ", ")}]`);
        // WALK REPLACES
        for (var i = 0; i < rewrites.length; i++) {
            var op = rewrites[i];
            if (op == null) {
                continue;
            }
            if (!(op instanceof ReplaceOp)) {
                continue;
            }
            var rop = op;
            // Wipe prior inserts within range
            var inserts = this.getKindOfOps(rewrites, InsertBeforeOp, i);
            try {
                for (var inserts_1 = __values(inserts), inserts_1_1 = inserts_1.next(); !inserts_1_1.done; inserts_1_1 = inserts_1.next()) {
                    var iop = inserts_1_1.value;
                    if (iop.index === rop.index) {
                        // E.g., insert before 2, delete 2..2; update replace
                        // text to include insert before, kill insert
                        rewrites[iop.instructionIndex] = undefined;
                        rop.text = iop.text.toString() + (rop.text != null ? rop.text.toString() : "");
                    }
                    else if (iop.index > rop.index && iop.index <= rop.lastIndex) {
                        // delete insert as it's a no-op.
                        rewrites[iop.instructionIndex] = undefined;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (inserts_1_1 && !inserts_1_1.done && (_a = inserts_1.return)) _a.call(inserts_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Drop any prior replaces contained within
            var prevReplaces = this.getKindOfOps(rewrites, ReplaceOp, i);
            try {
                for (var prevReplaces_1 = __values(prevReplaces), prevReplaces_1_1 = prevReplaces_1.next(); !prevReplaces_1_1.done; prevReplaces_1_1 = prevReplaces_1.next()) {
                    var prevRop = prevReplaces_1_1.value;
                    if (prevRop.index >= rop.index && prevRop.lastIndex <= rop.lastIndex) {
                        // delete replace as it's a no-op.
                        rewrites[prevRop.instructionIndex] = undefined;
                        continue;
                    }
                    // throw exception unless disjoint or identical
                    var disjoint = prevRop.lastIndex < rop.index || prevRop.index > rop.lastIndex;
                    // Delete special case of replace (text==null):
                    // D.i-j.u D.x-y.v	| boundaries overlap	combine to max(min)..max(right)
                    if (prevRop.text == null && rop.text == null && !disjoint) {
                        // console.log(`overlapping deletes: ${prevRop}, ${rop}`);
                        rewrites[prevRop.instructionIndex] = undefined; // kill first delete
                        rop.index = Math.min(prevRop.index, rop.index);
                        rop.lastIndex = Math.max(prevRop.lastIndex, rop.lastIndex);
                        // console.log(`new rop ${rop}`);
                    }
                    else if (!disjoint) {
                        throw new Error("replace op boundaries of " + rop + " overlap with previous " + prevRop);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (prevReplaces_1_1 && !prevReplaces_1_1.done && (_b = prevReplaces_1.return)) _b.call(prevReplaces_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        // WALK INSERTS
        for (var i = 0; i < rewrites.length; i++) {
            var op = rewrites[i];
            if (op == null) {
                continue;
            }
            if (!(op instanceof InsertBeforeOp)) {
                continue;
            }
            var iop = op;
            // combine current insert with prior if any at same index
            var prevInserts = this.getKindOfOps(rewrites, InsertBeforeOp, i);
            try {
                for (var prevInserts_1 = __values(prevInserts), prevInserts_1_1 = prevInserts_1.next(); !prevInserts_1_1.done; prevInserts_1_1 = prevInserts_1.next()) {
                    var prevIop = prevInserts_1_1.value;
                    if (prevIop.index === iop.index) {
                        if (prevIop instanceof InsertAfterOp) {
                            iop.text = this.catOpText(prevIop.text, iop.text);
                            rewrites[prevIop.instructionIndex] = undefined;
                        }
                        else if (prevIop instanceof InsertBeforeOp) { // combine objects
                            // convert to strings...we're in process of toString'ing
                            // whole token buffer so no lazy eval issue with any templates
                            iop.text = this.catOpText(iop.text, prevIop.text);
                            // delete redundant prior insert
                            rewrites[prevIop.instructionIndex] = undefined;
                        }
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (prevInserts_1_1 && !prevInserts_1_1.done && (_c = prevInserts_1.return)) _c.call(prevInserts_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
            // look for replaces where iop.index is in range; error
            var prevReplaces = this.getKindOfOps(rewrites, ReplaceOp, i);
            try {
                for (var prevReplaces_2 = __values(prevReplaces), prevReplaces_2_1 = prevReplaces_2.next(); !prevReplaces_2_1.done; prevReplaces_2_1 = prevReplaces_2.next()) {
                    var rop = prevReplaces_2_1.value;
                    if (iop.index === rop.index) {
                        rop.text = this.catOpText(iop.text, rop.text);
                        rewrites[i] = undefined; // delete current insert
                        continue;
                    }
                    if (iop.index >= rop.index && iop.index <= rop.lastIndex) {
                        throw new Error("insert op " + iop + " within boundaries of previous " + rop);
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (prevReplaces_2_1 && !prevReplaces_2_1.done && (_d = prevReplaces_2.return)) _d.call(prevReplaces_2);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        // console.log(`rewrites after=[${Utils.join(rewrites, ", ")}]`);
        var m = new Map();
        try {
            for (var rewrites_1 = __values(rewrites), rewrites_1_1 = rewrites_1.next(); !rewrites_1_1.done; rewrites_1_1 = rewrites_1.next()) {
                var op = rewrites_1_1.value;
                if (op == null) {
                    // ignore deleted ops
                    continue;
                }
                if (m.get(op.index) != null) {
                    throw new Error("should only be one op per index");
                }
                m.set(op.index, op);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (rewrites_1_1 && !rewrites_1_1.done && (_e = rewrites_1.return)) _e.call(rewrites_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        // console.log(`index to op: ${m}`);
        return m;
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d, e_6, _e;
    };
    TokenStreamRewriter.prototype.catOpText = function (a, b) {
        var x = "";
        var y = "";
        if (a != null) {
            x = a.toString();
        }
        if (b != null) {
            y = b.toString();
        }
        return x + y;
    };
    /** Get all operations before an index of a particular kind */
    TokenStreamRewriter.prototype.getKindOfOps = function (rewrites, kind, before) {
        var ops = [];
        for (var i = 0; i < before && i < rewrites.length; i++) {
            var op = rewrites[i];
            if (op == null) {
                // ignore deleted
                continue;
            }
            if (op instanceof kind) {
                ops.push(op);
            }
        }
        return ops;
    };
    TokenStreamRewriter.DEFAULT_PROGRAM_NAME = "default";
    TokenStreamRewriter.PROGRAM_INIT_SIZE = 100;
    TokenStreamRewriter.MIN_TOKEN_INDEX = 0;
    return TokenStreamRewriter;
}());
// Define the rewrite operation hierarchy
var RewriteOperation = /** @class */ (function () {
    function RewriteOperation(tokens, index, text) {
        this.tokens = tokens;
        this.index = index;
        this.text = text === undefined ? "" : text;
    }
    /** Execute the rewrite operation by possibly adding to the buffer.
     *  Return the index of the next token to operate on.
     */
    RewriteOperation.prototype.execute = function (buf) {
        return this.index;
    };
    RewriteOperation.prototype.toString = function () {
        var opName = this.constructor.name;
        var $index = opName.indexOf("$");
        opName = opName.substring($index + 1, opName.length);
        return "<" + opName + "@" + this.tokens.get(this.index) +
            ":\"" + this.text + "\">";
    };
    __decorate([
        Override
    ], RewriteOperation.prototype, "toString", null);
    return RewriteOperation;
}());
var InsertBeforeOp = /** @class */ (function (_super) {
    __extends(InsertBeforeOp, _super);
    function InsertBeforeOp(tokens, index, text) {
        return _super.call(this, tokens, index, text) || this;
    }
    InsertBeforeOp.prototype.execute = function (buf) {
        buf.push(this.text.toString());
        if (this.tokens.get(this.index).type !== exports.Token.EOF) {
            buf.push(String(this.tokens.get(this.index).text));
        }
        return this.index + 1;
    };
    __decorate([
        Override
    ], InsertBeforeOp.prototype, "execute", null);
    return InsertBeforeOp;
}(RewriteOperation));
/** Distinguish between insert after/before to do the "insert afters"
 *  first and then the "insert befores" at same index. Implementation
 *  of "insert after" is "insert before index+1".
 */
var InsertAfterOp = /** @class */ (function (_super) {
    __extends(InsertAfterOp, _super);
    function InsertAfterOp(tokens, index, text) {
        return _super.call(this, tokens, index + 1, text) || this;
    }
    return InsertAfterOp;
}(InsertBeforeOp));
/** I'm going to try replacing range from x..y with (y-x)+1 ReplaceOp
 *  instructions.
 */
var ReplaceOp = /** @class */ (function (_super) {
    __extends(ReplaceOp, _super);
    function ReplaceOp(tokens, from, to, text) {
        var _this = _super.call(this, tokens, from, text) || this;
        _this.lastIndex = to;
        return _this;
    }
    ReplaceOp.prototype.execute = function (buf) {
        if (this.text != null) {
            buf.push(this.text.toString());
        }
        return this.lastIndex + 1;
    };
    ReplaceOp.prototype.toString = function () {
        if (this.text == null) {
            return "<DeleteOp@" + this.tokens.get(this.index) +
                ".." + this.tokens.get(this.lastIndex) + ">";
        }
        return "<ReplaceOp@" + this.tokens.get(this.index) +
            ".." + this.tokens.get(this.lastIndex) + ":\"" + this.text + "\">";
    };
    __decorate([
        Override
    ], ReplaceOp.prototype, "execute", null);
    __decorate([
        Override
    ], ReplaceOp.prototype, "toString", null);
    return ReplaceOp;
}(RewriteOperation));

/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

exports.ANTLRInputStream = ANTLRInputStream;
exports.BailErrorStrategy = BailErrorStrategy;
exports.BufferedTokenStream = BufferedTokenStream;
exports.CommonToken = CommonToken;
exports.CommonTokenStream = CommonTokenStream;
exports.ConsoleErrorListener = ConsoleErrorListener;
exports.DefaultErrorStrategy = DefaultErrorStrategy;
exports.DiagnosticErrorListener = DiagnosticErrorListener;
exports.FailedPredicateException = FailedPredicateException;
exports.InputMismatchException = InputMismatchException;
exports.InterpreterRuleContext = InterpreterRuleContext;
exports.Lexer = Lexer;
exports.LexerInterpreter = LexerInterpreter;
exports.LexerNoViableAltException = LexerNoViableAltException;
exports.ListTokenSource = ListTokenSource;
exports.NoViableAltException = NoViableAltException;
exports.ProfilingATNSimulator = ProfilingATNSimulator$$1;
exports.Parser = Parser$$1;
exports.ParserInterpreter = ParserInterpreter;
exports.ParserRuleContext = ParserRuleContext;
exports.ProxyErrorListener = ProxyErrorListener;
exports.ProxyParserErrorListener = ProxyParserErrorListener;
exports.RecognitionException = RecognitionException;
exports.Recognizer = Recognizer;
exports.RuleContext = RuleContext;
exports.RuleContextWithAltNum = RuleContextWithAltNum;
exports.RuleDependency = RuleDependency;
exports.RuleVersion = RuleVersion;
exports.TokenStreamRewriter = TokenStreamRewriter;
exports.RewriteOperation = RewriteOperation;
exports.VocabularyImpl = VocabularyImpl;
//# sourceMappingURL=index.cjs.js.map
