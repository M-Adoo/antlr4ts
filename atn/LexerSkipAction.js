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
export { LexerSkipAction };
(function (LexerSkipAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerSkipAction.INSTANCE = new LexerSkipAction();
})(LexerSkipAction || (LexerSkipAction = {}));
//# sourceMappingURL=LexerSkipAction.js.map