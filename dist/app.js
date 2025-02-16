"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const routers_1 = __importDefault(require("./app/routers"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true
}));
app.use('/task', routers_1.default);
// Home Route.
const homeRoute = (req, res) => {
    res.status(200).json({
        server: 'Active',
        success: true,
        stutas: 200,
        message: 'This is Home Route.'
    });
};
app.get('/', homeRoute);
// Error handling middleware
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
