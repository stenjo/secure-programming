import axios from "axios";

export const getPipeData = async (
	pipeId: string,
	projectId: string,
): Promise<any> => {
	const response = await axios.get(
		`/api/pipes/${projectId}/report?pipeId=${pipeId}`,
	);
	if (!(response.status >= 200 && response.status < 300)) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = response.data;
	return data;
};
