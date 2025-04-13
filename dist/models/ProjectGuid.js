"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectGuid = void 0;
const Guid_1 = require("./Guid");
class ProjectGuid extends Guid_1.Guid {
    constructor(value) {
        super(value);
    }
    /** Factory method for controlled instantiation */
    static create(value) {
        return new ProjectGuid(value);
    }
}
exports.ProjectGuid = ProjectGuid;
//# sourceMappingURL=ProjectGuid.js.map