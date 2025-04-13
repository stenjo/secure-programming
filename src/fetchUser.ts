import { getRandomUsers } from "./api/getRandomUsers";

async function fetchSingleRecord() {
	try {
		const users = await getRandomUsers(1);
		console.log("Fetched User:", users[0]);
	} catch (error) {
		console.error("Error fetching user:", error);
	}
}

// Call the function
fetchSingleRecord();
