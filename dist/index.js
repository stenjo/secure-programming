"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const getRandomUsers_1 = require("./api/getRandomUsers");
const prisma = new client_1.PrismaClient();
async function createPerson(name) {
    const person = await prisma.person.create({
        data: {
            firstName: name.first.toString(),
            lastName: name.last.toString(),
            title: name.title,
        },
    });
    console.log(`Created person with ID: ${person.id}`);
}
async function getAllPeople() {
    const people = await prisma.person.findMany();
    people.forEach((p) => {
        console.log(`${p.title} ${p.firstName} ${p.lastName}`);
    });
}
async function main() {
    const users = await (0, getRandomUsers_1.getRandomUsers)(5);
    for (const user of users) {
        createPerson(user.name);
    }
    await getAllPeople();
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=index.js.map