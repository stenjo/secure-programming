"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const nameString_1 = require("./nameString");
(0, vitest_1.describe)("NameString", () => {
    (0, vitest_1.it)("should create a NameString instance with a valid name", () => {
        const validName = "JohnDoe123";
        const nameString = new nameString_1.NameString(validName);
        (0, vitest_1.expect)(nameString.toString()).toBe(validName);
    });
    (0, vitest_1.it)("should throw an error if the name is empty", () => {
        (0, vitest_1.expect)(() => new nameString_1.NameString("")).toThrowError("Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.");
    });
    (0, vitest_1.it)("should throw an error if the name contains invalid characters", () => {
        (0, vitest_1.expect)(() => new nameString_1.NameString("John@Doe")).toThrowError("Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.");
    });
    (0, vitest_1.it)("should throw an error if the name is longer than 35 characters", () => {
        const longName = "a".repeat(36);
        (0, vitest_1.expect)(() => new nameString_1.NameString(longName)).toThrowError("Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.");
    });
    (0, vitest_1.it)("should create a NameString instance with a name containing apostrophes", () => {
        const validNameWithApostrophe = "O'Connor";
        const nameString = new nameString_1.NameString(validNameWithApostrophe);
        (0, vitest_1.expect)(nameString.toString()).toBe(validNameWithApostrophe);
    });
    (0, vitest_1.it)("should create a NameString instance with a name containing a dash", () => {
        const validNameWithDash = "John-Doe";
        const nameString = new nameString_1.NameString(validNameWithDash);
        (0, vitest_1.expect)(nameString.toString()).toBe(validNameWithDash);
    });
});
//# sourceMappingURL=nameString.test.js.map