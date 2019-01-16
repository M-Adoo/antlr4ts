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
// CONVERSTION complete, Burt Harris 10/14/2016
import { Override } from "../../Decorators";
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
export { XPathElement };
//# sourceMappingURL=XPathElement.js.map