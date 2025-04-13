import { describe, it, expect, vi } from "vitest";
import { getRandomUsers } from "./getRandomUsers";

describe("getRandomUsers", () => {
	it("fetches random users successfully", async () => {
		const mockResponse = {
			ok: true,
			status: 200,
			json: async () => ({
				results: [
					{
						name: { title: "Ms", first: "Ella", last: "Williams" },
						email: "ella.williams@example.com",
						login: {
							uuid: "5fda1259-5db9-46dc-ae23-b8574762a61e",
							username: "bluepanda563",
							password: "burning",
							salt: "2RLxZWl4",
							md5: "3f2594ed4a5906bb7d8d5465cf9a0f79",
							sha1: "67a85c62158b7c45fc783169c2162edc9f0a7c1c",
							sha256:
								"d878a257790ea3b3151a7956379a0b0705971544843d3b4f7bb8226a8399569b",
						},
					},
				],
			}),
		};
		vi.spyOn(global, "fetch").mockResolvedValue(mockResponse as Response);

		const users = await getRandomUsers(1);
		const name = users[0].name.toString();
		console.log(name);
		expect(users[0].name.toString()).toEqual("Ms Ella Williams");

		vi.restoreAllMocks();
	});
});
