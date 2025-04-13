"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const guid_1 = require("./guid");
(0, vitest_1.describe)("Guid", () => {
    (0, vitest_1.it)("should create a Guid instance with a valid GUID", () => {
        const validGuid = "123e4567-e89b-12d3-a456-426614174000";
        const guid = new guid_1.Guid(validGuid);
        (0, vitest_1.expect)(guid.toString()).toBe(validGuid);
    });
    (0, vitest_1.it)("should throw an error for an invalid GUID", () => {
        const invalidGuid = "invalid-guid";
        (0, vitest_1.expect)(() => new guid_1.Guid(invalidGuid)).toThrow("Invalid GUID format");
    });
    (0, vitest_1.it)("should throw an error for an empty string", () => {
        const emptyGuid = "";
        (0, vitest_1.expect)(() => new guid_1.Guid(emptyGuid)).toThrow("Invalid GUID format");
    });
    (0, vitest_1.it)("should throw an error for a GUID with incorrect length", () => {
        const shortGuid = "123e4567-e89b-12d3-a456-42661417400";
        (0, vitest_1.expect)(() => new guid_1.Guid(shortGuid)).toThrow("Invalid GUID format");
    });
    (0, vitest_1.it)("should throw an error for a GUID with invalid characters", () => {
        const invalidCharGuid = "123e4567-e89b-12d3-a456-42661417400g";
        (0, vitest_1.expect)(() => new guid_1.Guid(invalidCharGuid)).toThrow("Invalid GUID format");
    });
});
//# sourceMappingURL=guid.test.js.map