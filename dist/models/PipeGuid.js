"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipeGuid = void 0;
const Guid_1 = require("./Guid");
class PipeGuid extends Guid_1.Guid {
    /** Factory method for controlled instantiation */
    static create(value) {
        return new PipeGuid(value);
    }
    /** Ensure constructor is protected */
    constructor(value) {
        super(value);
    }
}
exports.PipeGuid = PipeGuid;
//# sourceMappingURL=PipeGuid.js.map