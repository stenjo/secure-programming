"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileName = void 0;
const DomainModel_1 = require("./DomainModel");
class FileName extends DomainModel_1.DomainModel {
    static MAX_LENGTH = 60;
    static ALLOWED_CHARACTERS = /^[a-zA-Z0-9._-]+$/;
    static create(filename) {
        return new FileName(filename);
    }
    /** Ensure filename follows rules */
    validate() {
        if (typeof this.value !== "string") {
            throw new Error("Filename is not a string.");
        }
        if (this.value.length > FileName.MAX_LENGTH) {
            throw new Error(`Filename exceeds max length of ${FileName.MAX_LENGTH} characters.`);
        }
        if (!FileName.ALLOWED_CHARACTERS.test(this.value)) {
            throw new Error("Filename contains invalid characters. Allowed: letters, numbers, dots, dashes, and underscores.");
        }
    }
}
exports.FileName = FileName;
//# sourceMappingURL=FileName.js.map