/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
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
// ConvertTo-TS run at 2016-10-03T02:09:41.7434086-07:00
// import * as assert from "assert";
import { DefaultEqualityComparator } from "./DefaultEqualityComparator";
import { NotNull, Nullable, Override, SuppressWarnings } from "../Decorators";
import { MurmurHash } from "./MurmurHash";
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
export { Array2DHashSet };
//# sourceMappingURL=Array2DHashSet.js.map