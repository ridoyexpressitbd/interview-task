"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validationZodSchema_1 = require("./user.validationZodSchema");
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// user registration or signUP
router.post('/register', (0, validateRequest_1.default)(user_validationZodSchema_1.UserValidation.createUserValidationZodSchema), user_controller_1.UserController.createUser);
exports.UserRoutes = router;
