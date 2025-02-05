"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileName = void 0;
var DomainModel_1 = require("./DomainModel");
var FileName = /** @class */ (function (_super) {
    __extends(FileName, _super);
    function FileName(filename) {
        return _super.call(this, filename) || this;
    }
    /** Ensure filename follows rules */
    FileName.prototype.validate = function () {
        if (this.value.length > FileName.MAX_LENGTH) {
            throw new Error("Filename exceeds max length of ".concat(FileName.MAX_LENGTH, " characters."));
        }
        if (!FileName.ALLOWED_CHARACTERS.test(this.value)) {
            throw new Error("Filename contains invalid characters. Allowed: letters, numbers, dots, dashes, and underscores.");
        }
    };
    FileName.MAX_LENGTH = 60;
    FileName.ALLOWED_CHARACTERS = /^[a-zA-Z0-9._-]+$/;
    return FileName;
}(DomainModel_1.DomainModel));
exports.FileName = FileName;
