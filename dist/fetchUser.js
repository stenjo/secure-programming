"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomUsers_1 = require("./api/getRandomUsers");
async function fetchSingleRecord() {
    try {
        const users = await (0, getRandomUsers_1.getRandomUsers)(1);
        console.log("Fetched User:", users[0]);
    }
    catch (error) {
        console.error("Error fetching user:", error);
    }
}
// Call the function
fetchSingleRecord();
//# sourceMappingURL=fetchUser.js.map