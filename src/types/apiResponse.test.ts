import { describe, it, expect } from "vitest";
import { Login, Name, User, Info, ApiResponse } from "./apiResponse";

describe("ApiResponse", () => {
	it("should create an ApiResponse instance with the given results and info", () => {
		const exampleLogin = new Login("c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c");
		const exampleName = new Name("Mr.", "John", "Doe");
		const exampleUser = new User(
			exampleLogin,
			exampleName,
			"john.doe@example.com",
		);
		const exampleInfo = new Info("abc", 1, 1, "1.3");
		const exampleApiResponse = new ApiResponse([exampleUser], exampleInfo);

		expect(exampleApiResponse.results).toEqual([exampleUser]);
		expect(exampleApiResponse.info).toEqual(exampleInfo);
	});
});
