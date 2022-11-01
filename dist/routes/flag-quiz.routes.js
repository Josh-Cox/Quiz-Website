"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const flagQuizRouter = (0, express_1.Router)();
flagQuizRouter.get('/', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, '../public/html/flag-quiz.html'));
});
exports.default = flagQuizRouter;
//# sourceMappingURL=flag-quiz.routes.js.map