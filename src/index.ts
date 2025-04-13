// src/index.ts
import { Name } from "./types/name";
import { PrismaClient } from "@prisma/client";
type Person = Awaited<ReturnType<typeof prisma.person.findFirst>>; // ✅ Add this
import { getRandomUsers } from "./api/getRandomUsers";

const prisma = new PrismaClient();

async function createPerson(name: Name) {
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
	const people: Person[] = await prisma.person.findMany();
	people.forEach((p) => {
        if (p) {
    		console.log(`${p.title} ${p.firstName} ${p.lastName}`);
        }   
	});
}

async function main() {
    const users = await getRandomUsers(5);
    for (const user of users) {
        createPerson(user.name);
    }
	await getAllPeople();
}

main()
	.catch(console.error)
	.finally(() => prisma.$disconnect());
