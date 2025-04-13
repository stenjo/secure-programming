import { describe, it, expect } from "vitest";
import { PipeGuid } from "./PipeGuid";

describe("PipeGuid", () => {
	it("should create a PipeGuid instance with the given value", () => {
		const value = "c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c";
		const pipeGuid = PipeGuid.create(value);

		expect(pipeGuid.toString()).toEqual(value);
	});

	it("should generate a new PipeGuid", () => {
		const pipeGuid = PipeGuid.generate();

		expect(pipeGuid).toBeInstanceOf(PipeGuid);
		expect(pipeGuid.toString()).toMatch(
			/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i,
		);
	});
});
