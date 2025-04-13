import { Name } from "../types/name";

export async function getRandomUsers(count: number) {
	const response = await fetch(`https://randomuser.me/api/?results=${count}`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();

	// Convert raw API response into instances of Name
	const users = data.results.map(
		(user: { name: { title: string; first: string; last: string } }) => ({
			...user,
			name: new Name(user.name.title, user.name.first, user.name.last),
		}),
	);

	return users;
}
