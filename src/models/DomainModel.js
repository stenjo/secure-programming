"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainModel = void 0;
var DomainModel = /** @class */ (function () {
    function DomainModel(value) {
        if (value === null || value === undefined) {
            throw new Error("DomainModel value cannot be null or undefined.");
        }
        this.value = value;
        this.validate(); // Ensure subclass validation runs automatically
    }
    /** Subclasses can override this method for validation */
    DomainModel.prototype.validate = function () { };
    /** Returns the stored value */
    DomainModel.prototype.toString = function () {
        return String(this.value);
    };
    /** Check if two DomainModel objects are equal */
    DomainModel.prototype.equals = function (other) {
        return this.value === other.value;
    };
    return DomainModel;
}());
exports.DomainModel = DomainModel;
