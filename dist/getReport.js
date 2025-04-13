"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReportService_1 = require("./api/ReportService");
const renderPipeReport = async () => {
    const projectId = getFromUrl("projectId");
    const pipeId = getFromUrl("pipeId");
    const data = await (0, ReportService_1.getPipeData)(projectId, pipeId);
    return () => (data) => {
        console.log(data);
    };
    // render the report
};
function getFromUrl(arg0) {
    return "someId";
}
//# sourceMappingURL=getReport.js.map