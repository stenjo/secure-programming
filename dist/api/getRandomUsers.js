"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomUsers = getRandomUsers;
const name_1 = require("../types/name");
async function getRandomUsers(count) {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Convert raw API response into instances of Name
    const users = data.results.map((user) => ({
        ...user,
        name: new name_1.Name(user.name.title, user.name.first, user.name.last),
    }));
    return users;
}
//# sourceMappingURL=getRandomUsers.js.map