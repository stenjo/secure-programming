"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const apiResponse_1 = require("./apiResponse");
(0, vitest_1.describe)("ApiResponse", () => {
    (0, vitest_1.it)("should create an ApiResponse instance with the given results and info", () => {
        const exampleLogin = new apiResponse_1.Login("c9b1e9b2-3f5d-4b1e-8b1e-9b2c9b1e9b2c");
        const exampleName = new apiResponse_1.Name("Mr.", "John", "Doe");
        const exampleUser = new apiResponse_1.User(exampleLogin, exampleName, "john.doe@example.com");
        const exampleInfo = new apiResponse_1.Info("abc", 1, 1, "1.3");
        const exampleApiResponse = new apiResponse_1.ApiResponse([exampleUser], exampleInfo);
        (0, vitest_1.expect)(exampleApiResponse.results).toEqual([exampleUser]);
        (0, vitest_1.expect)(exampleApiResponse.info).toEqual(exampleInfo);
    });
});
//# sourceMappingURL=apiResponse.test.js.map