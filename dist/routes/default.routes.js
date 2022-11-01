"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const defaultRouter = (0, express_1.Router)();
defaultRouter.get('/', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, '../public/html/index.html'));
});
exports.default = defaultRouter;
//# sourceMappingURL=default.routes.js.map