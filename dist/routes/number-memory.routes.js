"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const numberMemoryRouter = (0, express_1.Router)();
numberMemoryRouter.get('/', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, '../public/html/number-memory.html'));
});
exports.default = numberMemoryRouter;
//# sourceMappingURL=number-memory.routes.js.map