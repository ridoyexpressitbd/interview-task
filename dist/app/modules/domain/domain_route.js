"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainRoutes = void 0;
const express_1 = __importDefault(require("express"));
const domain_controller_1 = require("./domain_controller");
const router = express_1.default.Router();
router.get('/check/:domain', domain_controller_1.DomainControllers.getCheckDomain);
exports.DomainRoutes = router;
