"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreServices = void 0;
const store_model_1 = require("./store.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const owner_model_1 = require("../owner/owner.model");
// create a new store into db
const taskCreateStoreIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = '67a1066a1ad7ae4f925067f4';
    const owner = yield owner_model_1.Owner.findById(user_id);
    if (!owner) {
        throw new AppError_1.default(404, 'Owner information not found!');
    }
    payload.owner = owner === null || owner === void 0 ? void 0 : owner._id;
    payload.domain = `${payload.domain}.expressitbd.com`;
    const result = yield store_model_1.Store.create(payload);
    return result;
});
exports.StoreServices = {
    taskCreateStoreIntoDB
};
