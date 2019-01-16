/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// ConvertTo-TS run at 2016-10-04T11:26:35.3812636-07:00
import { Array2DHashMap } from "../misc/Array2DHashMap";
import { Array2DHashSet } from "../misc/Array2DHashSet";
import { Arrays } from "../misc/Arrays";
import { MurmurHash } from "../misc/MurmurHash";
import { NotNull, Override } from "../Decorators";
import { PredictionContextCache } from "./PredictionContextCache";
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
export { PredictionContext };
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
export { SingletonPredictionContext };
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
//# sourceMappingURL=PredictionContext.js.map