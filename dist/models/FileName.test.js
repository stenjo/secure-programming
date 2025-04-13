"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const FileName_1 = require("./FileName");
(0, vitest_1.describe)("FileName", () => {
    (0, vitest_1.it)("should create a FileName instance with the given value", () => {
        const value = "example.txt";
        const fileName = FileName_1.FileName.create(value);
        (0, vitest_1.expect)(fileName.toString()).toEqual(value);
    });
    (0, vitest_1.it)("should throw an error if the filename exceeds the maximum length", () => {
        const value = "a".repeat(61);
        (0, vitest_1.expect)(() => FileName_1.FileName.create(value)).toThrowError(`Filename exceeds max length of ${FileName_1.FileName.MAX_LENGTH} characters.`);
    });
    (0, vitest_1.it)("should throw an error if the filename contains invalid characters", () => {
        const value = "example@file.txt";
        (0, vitest_1.expect)(() => FileName_1.FileName.create(value)).toThrowError("Filename contains invalid characters. Allowed: letters, numbers, dots, dashes, and underscores.");
    });
    (0, vitest_1.it)("should throw an error if the filename is a number", () => {
        const value = 123;
        (0, vitest_1.expect)(() => FileName_1.FileName.create(value)).toThrowError("Filename is not a string.");
    });
});
//# sourceMappingURL=FileName.test.js.map