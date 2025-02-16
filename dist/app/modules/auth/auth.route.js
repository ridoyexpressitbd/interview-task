"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validationZodSchema_1 = require("./auth.validationZodSchema");
const auth_contoller_1 = require("./auth.contoller");
const router = express_1.default.Router();
//this route for user login.
router.post('/login', (0, validateRequest_1.default)(auth_validationZodSchema_1.AuthValidation.loginValidationZodSchema), auth_contoller_1.AuthController.loginUser);
// export this routes.
exports.AuthRoutes = router;
