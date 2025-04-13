"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const PipeGuid_1 = require("./PipeGuid");
(0, vitest_1.describe)("PipeGuid", () => {
    (0, vitest_1.it)("should create a PipeGuid instance with the given value", () => {
        const value = "c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c";
        const pipeGuid = PipeGuid_1.PipeGuid.create(value);
        (0, vitest_1.expect)(pipeGuid.toString()).toEqual(value);
    });
    (0, vitest_1.it)("should generate a new PipeGuid", () => {
        const pipeGuid = PipeGuid_1.PipeGuid.generate();
        (0, vitest_1.expect)(pipeGuid).toBeInstanceOf(PipeGuid_1.PipeGuid);
        (0, vitest_1.expect)(pipeGuid.toString()).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i);
    });
});
//# sourceMappingURL=PipeGuid.test.js.map