/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 *
 * @author Sam Harwell
 */
export var MurmurHash;
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
//# sourceMappingURL=MurmurHash.js.map