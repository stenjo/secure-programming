import { describe, it, expect } from "vitest";
import { ProjectGuid } from "./ProjectGuid";

describe("ProjectGuid", () => {
	it("should create a ProjectGuid instance with the given value", () => {
		const value = "c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c";
		const projectGuid = ProjectGuid.create(value);

		expect(projectGuid.toString()).toEqual(value);
	});

	it("should generate a new ProjectGuid", () => {
		const projectGuid = ProjectGuid.generate();

		expect(projectGuid).toBeInstanceOf(ProjectGuid);
		expect(projectGuid.toString()).toMatch(
			/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i,
		);
	});
});
