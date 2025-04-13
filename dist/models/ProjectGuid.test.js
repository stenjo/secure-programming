"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ProjectGuid_1 = require("./ProjectGuid");
(0, vitest_1.describe)("ProjectGuid", () => {
    (0, vitest_1.it)("should create a ProjectGuid instance with the given value", () => {
        const value = "c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c";
        const projectGuid = ProjectGuid_1.ProjectGuid.create(value);
        (0, vitest_1.expect)(projectGuid.toString()).toEqual(value);
    });
    (0, vitest_1.it)("should generate a new ProjectGuid", () => {
        const projectGuid = ProjectGuid_1.ProjectGuid.generate();
        (0, vitest_1.expect)(projectGuid).toBeInstanceOf(ProjectGuid_1.ProjectGuid);
        (0, vitest_1.expect)(projectGuid.toString()).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i);
    });
});
//# sourceMappingURL=ProjectGuid.test.js.map