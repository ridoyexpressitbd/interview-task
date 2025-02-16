"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const store_validation_1 = require("./store.validation");
const store_controller_1 = require("./store.controller");
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(store_validation_1.StoreValidation.createStoreValidationZodSchema), store_controller_1.StoreControllers.taskCreateStore);
// router.get('/', auth('user'), StoreControllers.getMyAllStores)
// router.get('/all', auth('admin', 'superAdmin'), StoreControllers.getAllStores)
exports.StoreRoutes = router;
