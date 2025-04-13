"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainModel = void 0;
class DomainModel {
    value;
    constructor(value) {
        if (value === null || value === undefined) {
            throw new Error("DomainModel value cannot be null or undefined.");
        }
        this.value = value;
        this.validate(); // Ensure subclass validation runs automatically
    }
    /** Subclasses can override this method for validation */
    validate() { }
    /** Returns the stored value */
    toString() {
        return String(this.value);
    }
    /** Enhanced equality check */
    equals(other) {
        return (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && // ✅ Ensure same class type
            other.value === this.value // ✅ Ensures TypeScript recognizes 'value'
        );
    }
}
exports.DomainModel = DomainModel;
//# sourceMappingURL=DomainModel.js.map