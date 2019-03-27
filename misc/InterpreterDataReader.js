/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
import * as fs from "fs";
import * as util from "util";
import { VocabularyImpl } from "../VocabularyImpl";
import { ATNDeserializer } from "../atn/ATNDeserializer";
function splitToLines(buffer) {
    var lines = [];
    var index = 0;
    while (index < buffer.length) {
        var lineStart = index;
        var lineEndLF = buffer.indexOf("\n".charCodeAt(0), index);
        var lineEndCR = buffer.indexOf("\r".charCodeAt(0), index);
        var lineEnd = void 0;
        if (lineEndCR >= 0 && (lineEndCR < lineEndLF || lineEndLF === -1)) {
            lineEnd = lineEndCR;
        }
        else if (lineEndLF >= 0) {
            lineEnd = lineEndLF;
        }
        else {
            lineEnd = buffer.length;
        }
        lines.push(buffer.toString("utf-8", lineStart, lineEnd));
        if (lineEnd === lineEndCR && lineEnd + 1 === lineEndLF) {
            index = lineEnd + 2;
        }
        else {
            index = lineEnd + 1;
        }
    }
    return lines;
}
// A class to read plain text interpreter data produced by ANTLR.
export var InterpreterDataReader;
(function (InterpreterDataReader) {
    /**
     * The structure of the data file is very simple. Everything is line based with empty lines
     * separating the different parts. For lexers the layout is:
     * token literal names:
     * ...
     *
     * token symbolic names:
     * ...
     *
     * rule names:
     * ...
     *
     * channel names:
     * ...
     *
     * mode names:
     * ...
     *
     * atn:
     * <a single line with comma separated int values> enclosed in a pair of squared brackets.
     *
     * Data for a parser does not contain channel and mode names.
     */
    function parseFile(fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var result, input, lines, line, lineIndex, literalNames, symbolicNames, displayNames, elements, serializedATN, i, value, element, deserializer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = new InterpreterDataReader.InterpreterData();
                        result.ruleNames = [];
                        return [4 /*yield*/, util.promisify(fs.readFile)(fileName)];
                    case 1:
                        input = _a.sent();
                        lines = splitToLines(input);
                        try {
                            line = void 0;
                            lineIndex = 0;
                            literalNames = [];
                            symbolicNames = [];
                            line = lines[lineIndex++];
                            if (line !== "token literal names:") {
                                throw new RangeError("Unexpected data entry");
                            }
                            for (line = lines[lineIndex++]; line !== undefined; line = lines[lineIndex++]) {
                                if (line.length === 0) {
                                    break;
                                }
                                literalNames.push(line === "null" ? "" : line);
                            }
                            line = lines[lineIndex++];
                            if (line !== "token symbolic names:") {
                                throw new RangeError("Unexpected data entry");
                            }
                            for (line = lines[lineIndex++]; line !== undefined; line = lines[lineIndex++]) {
                                if (line.length === 0) {
                                    break;
                                }
                                symbolicNames.push(line === "null" ? "" : line);
                            }
                            displayNames = [];
                            result.vocabulary = new VocabularyImpl(literalNames, symbolicNames, displayNames);
                            line = lines[lineIndex++];
                            if (line !== "rule names:") {
                                throw new RangeError("Unexpected data entry");
                            }
                            for (line = lines[lineIndex++]; line !== undefined; line = lines[lineIndex++]) {
                                if (line.length === 0) {
                                    break;
                                }
                                result.ruleNames.push(line);
                            }
                            line = lines[lineIndex++];
                            if (line === "channel names:") { // Additional lexer data.
                                result.channels = [];
                                for (line = lines[lineIndex++]; line !== undefined; line = lines[lineIndex++]) {
                                    if (line.length === 0) {
                                        break;
                                    }
                                    result.channels.push(line);
                                }
                                line = lines[lineIndex++];
                                if (line !== "mode names:") {
                                    throw new RangeError("Unexpected data entry");
                                }
                                result.modes = [];
                                for (line = lines[lineIndex++]; line !== undefined; line = lines[lineIndex++]) {
                                    if (line.length === 0) {
                                        break;
                                    }
                                    result.modes.push(line);
                                }
                            }
                            line = lines[lineIndex++];
                            if (line !== "atn:") {
                                throw new RangeError("Unexpected data entry");
                            }
                            line = lines[lineIndex++];
                            elements = line.split(",");
                            serializedATN = new Uint16Array(elements.length);
                            for (i = 0; i < elements.length; ++i) {
                                value = void 0;
                                element = elements[i];
                                if (element.startsWith("[")) {
                                    value = parseInt(element.substring(1).trim(), 10);
                                }
                                else if (element.endsWith("]")) {
                                    value = parseInt(element.substring(0, element.length - 1).trim(), 10);
                                }
                                else {
                                    value = parseInt(element.trim(), 10);
                                }
                                serializedATN[i] = value;
                            }
                            deserializer = new ATNDeserializer();
                            result.atn = deserializer.deserialize(serializedATN);
                        }
                        catch (e) {
                            // We just swallow the error and return empty objects instead.
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    }
    InterpreterDataReader.parseFile = parseFile;
    var InterpreterData = /** @class */ (function () {
        function InterpreterData() {
        }
        return InterpreterData;
    }());
    InterpreterDataReader.InterpreterData = InterpreterData;
})(InterpreterDataReader || (InterpreterDataReader = {}));
//# sourceMappingURL=InterpreterDataReader.js.map