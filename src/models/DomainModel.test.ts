import { describe, it, expect, vi } from "vitest";
import { DomainModel } from "./DomainModel";

/** Test subclass of DomainModel to allow instantiation */
class TestDomainModel extends DomainModel<string> {
	constructor(value: string) {
		super(value);
	}
	protected validate(): void {} // Empty validate method for testing
}

describe("DomainModel", () => {
	describe("constructor", () => {
		it("should throw an error if value is null", () => {
			expect(() => new TestDomainModel(null as any)).toThrowError(
				"DomainModel value cannot be null or undefined.",
			);
		});

		it("should throw an error if value is undefined", () => {
			expect(() => new TestDomainModel(undefined as any)).toThrowError(
				"DomainModel value cannot be null or undefined.",
			);
		});

		it("should set the value property", () => {
			const value = "test";
			const domainModel = new TestDomainModel(value);

			expect(domainModel.toString()).toEqual(value);
		});

		it("should call the validate method", () => {
			const validateSpy = vi.spyOn(
				TestDomainModel.prototype,
				"validate" as keyof TestDomainModel,
			);
			new TestDomainModel("test");

			expect(validateSpy).toHaveBeenCalled();
		});
	});

	describe("toString", () => {
		it("should return the string representation of the value", () => {
			const value = "test";
			const domainModel = new TestDomainModel(value);

			expect(domainModel.toString()).toEqual(String(value));
		});
	});

	describe("equals", () => {
		it("should return true if the values are equal", () => {
			const value = "test";
			const domainModel1 = new TestDomainModel(value);
			const domainModel2 = new TestDomainModel(value);

			expect(domainModel1.equals(domainModel2)).toBe(true);
		});

		it("should return false if the values are not equal", () => {
			const domainModel1 = new TestDomainModel("test1");
			const domainModel2 = new TestDomainModel("test2");

			expect(domainModel1.equals(domainModel2)).toBe(false);
		});
	});
});
