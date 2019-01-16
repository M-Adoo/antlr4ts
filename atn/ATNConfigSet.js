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
// ConvertTo-TS run at 2016-10-04T11:26:25.5488013-07:00
import { Array2DHashMap } from "../misc/Array2DHashMap";
import { Array2DHashSet } from "../misc/Array2DHashSet";
import { ArrayEqualityComparator } from "../misc/ArrayEqualityComparator";
import { ATN } from "./ATN";
import { ATNConfig } from "./ATNConfig";
import { BitSet } from "../misc/BitSet";
import { NotNull, Override } from "../Decorators";
import { ObjectEqualityComparator } from "../misc/ObjectEqualityComparator";
import { PredictionContext } from "./PredictionContext";
import { PredictionContextCache } from "./PredictionContextCache";
import { SemanticContext } from "./SemanticContext";
// import * as assert from "assert";
import * as Utils from "../misc/Utils";
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
            && Utils.equals(this._conflictInfo, obj._conflictInfo)
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
export { ATNConfigSet };
//# sourceMappingURL=ATNConfigSet.js.map