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
// ConvertTo-TS run at 2016-10-04T11:26:46.2521448-07:00
import { Chunk } from "./Chunk";
import { NotNull, Override } from "../../Decorators";
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
export { TextChunk };
//# sourceMappingURL=TextChunk.js.map