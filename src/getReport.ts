import { getPipeData } from "./api/ReportService";

type Guid = string & { readonly __brand: unique symbol };

const renderPipeReport = async () => {
	const projectId: Guid = getFromUrl("projectId") as Guid;
	const pipeId: Guid = getFromUrl("pipeId");

	const data = await getPipeData(projectId, pipeId);

	return () => (data: any) => {
		console.log(data);
	};

	// render the report
};

function getFromUrl(arg0: string): string {
	return "someId";
}
