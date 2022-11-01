"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const default_routes_1 = __importDefault(require("./default.routes"));
const flag_quiz_routes_1 = __importDefault(require("./flag-quiz.routes"));
const games_routes_1 = __importDefault(require("./games.routes"));
const number_memory_routes_1 = __importDefault(require("./number-memory.routes"));
const routes = (0, express_1.Router)();
routes.use('/', default_routes_1.default);
routes.use('/flag-quiz', flag_quiz_routes_1.default);
routes.use('/games', games_routes_1.default);
routes.use('/number-memory', number_memory_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map