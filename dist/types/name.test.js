"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const name_1 = require("./name");
(0, vitest_1.describe)("Name", () => {
    (0, vitest_1.it)("should create a Name instance with valid first and last names", () => {
        const title = "Mr";
        const firstName = "John";
        const lastName = "Doe";
        const name = new name_1.Name(title, firstName, lastName);
        (0, vitest_1.expect)(name.first.toString()).toBe(firstName);
        (0, vitest_1.expect)(name.last.toString()).toBe(lastName);
    });
    (0, vitest_1.it)("should throw an error if first name is empty", () => {
        (0, vitest_1.expect)(() => new name_1.Name("Mr", "", "Doe")).toThrowError("First name cannot be empty.");
    });
    (0, vitest_1.it)("should throw an error if last name is empty", () => {
        (0, vitest_1.expect)(() => new name_1.Name("Mr", "John", "")).toThrowError("Last name cannot be empty.");
    });
    (0, vitest_1.it)("should throw an error if first name is invalid", () => {
        (0, vitest_1.expect)(() => new name_1.Name("Mr", "John@", "Doe")).toThrowError("Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.");
    });
    (0, vitest_1.it)("should throw an error if last name is invalid", () => {
        (0, vitest_1.expect)(() => new name_1.Name("Mr", "John", "Doe@")).toThrowError("Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.");
    });
    (0, vitest_1.it)("should throw an error if first name is longer than 35 characters", () => {
        const longName = "a".repeat(36);
        (0, vitest_1.expect)(() => new name_1.Name("Mr", longName, "Doe")).toThrowError("Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.");
    });
    (0, vitest_1.it)("should throw an error if last name is longer than 35 characters", () => {
        const longName = "a".repeat(36);
        (0, vitest_1.expect)(() => new name_1.Name("Mr", "John", longName)).toThrowError("Invalid name: must be 35 characters or less and contain only letters, numbers, and apostrophes.");
    });
});
//# sourceMappingURL=name.test.js.map