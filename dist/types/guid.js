"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guid = void 0;
class Guid {
    value;
    static guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    constructor(value) {
        if (!Guid.isValidGuid(value)) {
            throw new Error("Invalid GUID format");
        }
        this.value = value;
    }
    static isValidGuid(value) {
        return this.guidRegex.test(value);
    }
    toString() {
        return this.value;
    }
}
exports.Guid = Guid;
//# sourceMappingURL=guid.js.map