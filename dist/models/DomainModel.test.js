"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const DomainModel_1 = require("./DomainModel");
/** Test subclass of DomainModel to allow instantiation */
class TestDomainModel extends DomainModel_1.DomainModel {
    constructor(value) {
        super(value);
    }
    validate() { } // Empty validate method for testing
}
(0, vitest_1.describe)("DomainModel", () => {
    (0, vitest_1.describe)("constructor", () => {
        (0, vitest_1.it)("should throw an error if value is null", () => {
            (0, vitest_1.expect)(() => new TestDomainModel(null)).toThrowError("DomainModel value cannot be null or undefined.");
        });
        (0, vitest_1.it)("should throw an error if value is undefined", () => {
            (0, vitest_1.expect)(() => new TestDomainModel(undefined)).toThrowError("DomainModel value cannot be null or undefined.");
        });
        (0, vitest_1.it)("should set the value property", () => {
            const value = "test";
            const domainModel = new TestDomainModel(value);
            (0, vitest_1.expect)(domainModel.toString()).toEqual(value);
        });
        (0, vitest_1.it)("should call the validate method", () => {
            const validateSpy = vitest_1.vi.spyOn(TestDomainModel.prototype, "validate");
            new TestDomainModel("test");
            (0, vitest_1.expect)(validateSpy).toHaveBeenCalled();
        });
    });
    (0, vitest_1.describe)("toString", () => {
        (0, vitest_1.it)("should return the string representation of the value", () => {
            const value = "test";
            const domainModel = new TestDomainModel(value);
            (0, vitest_1.expect)(domainModel.toString()).toEqual(String(value));
        });
    });
    (0, vitest_1.describe)("equals", () => {
        (0, vitest_1.it)("should return true if the values are equal", () => {
            const value = "test";
            const domainModel1 = new TestDomainModel(value);
            const domainModel2 = new TestDomainModel(value);
            (0, vitest_1.expect)(domainModel1.equals(domainModel2)).toBe(true);
        });
        (0, vitest_1.it)("should return false if the values are not equal", () => {
            const domainModel1 = new TestDomainModel("test1");
            const domainModel2 = new TestDomainModel("test2");
            (0, vitest_1.expect)(domainModel1.equals(domainModel2)).toBe(false);
        });
    });
});
//# sourceMappingURL=DomainModel.test.js.map