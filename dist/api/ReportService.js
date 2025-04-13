"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPipeData = void 0;
const axios_1 = __importDefault(require("axios"));
const getPipeData = async (pipeId, projectId) => {
    const response = await axios_1.default.get(`/api/pipes/${projectId}/report?pipeId=${pipeId}`);
    if (!(response.status >= 200 && response.status < 300)) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = response.data;
    return data;
};
exports.getPipeData = getPipeData;
//# sourceMappingURL=ReportService.js.map