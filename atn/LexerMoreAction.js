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
export { LexerMoreAction };
(function (LexerMoreAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerMoreAction.INSTANCE = new LexerMoreAction();
})(LexerMoreAction || (LexerMoreAction = {}));
//# sourceMappingURL=LexerMoreAction.js.map