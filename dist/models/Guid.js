"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guid = void 0;
const DomainModel_1 = require("./DomainModel");
class Guid extends DomainModel_1.DomainModel {
    constructor(value) {
        super(value);
        this.validate(); // ✅ Ensure validation is applied
    }
    /** Ensures the GUID is valid */
    validate() {
        if (!Guid.isValidGuid(this.value)) {
            throw new Error(`Invalid GUID format: ${this.value}`);
        }
    }
    /** Validate if a string is a well-formed UUID */
    static isValidGuid(value) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);
    }
    /** Generate a new GUID instance using the controlled create() method */
    static generate() {
        return new this(crypto.randomUUID()); // ✅ Calls the factory method
    }
}
exports.Guid = Guid;
//# sourceMappingURL=Guid.js.map