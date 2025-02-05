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
exports.Guid = void 0;
var DomainModel_1 = require("./DomainModel");
var Guid = /** @class */ (function (_super) {
    __extends(Guid, _super);
    function Guid(value) {
        return _super.call(this, value) || this;
    }
    /** Ensures the GUID is valid */
    Guid.prototype.validate = function () {
        if (!Guid.isValidGuid(this.value)) {
            throw new Error("Invalid GUID format: ".concat(this.value));
        }
    };
    /** Validate if a string is a well-formed UUID */
    Guid.isValidGuid = function (value) {
        var uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);
    };
    /** Correctly instantiate subclasses with `T` */
    Guid.generate = function () {
        return new this(crypto.randomUUID());
    };
    return Guid;
}(DomainModel_1.DomainModel));
exports.Guid = Guid;
