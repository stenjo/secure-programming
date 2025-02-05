import fetch from 'node-fetch';
export async function getRandomUsers(count) {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json());
    return data.results;
}
