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
import { MurmurHash } from "../misc/MurmurHash";
import { NotNull, Override } from "../Decorators";
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
export { LexerModeAction };
//# sourceMappingURL=LexerModeAction.js.map