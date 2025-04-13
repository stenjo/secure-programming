"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameString = void 0;
const VALID_NAME_CHARS = /^[a-zæøåA-ZÆØÅ0-9'`-]{1,75}$/;
class NameString {
    name_str;
    constructor(name_str) {
        if (!this.isValidName(name_str)) {
            throw new Error(`Invalid name: ${name_str} must be 35 characters or less and contain only letters, numbers, and apostrophes.`);
        }
        this.name_str = name_str;
    }
    toString() {
        return this.name_str;
    }
    isValidName(name) {
        return VALID_NAME_CHARS.test(name);
    }
}
exports.NameString = NameString;
//# sourceMappingURL=nameString.js.map