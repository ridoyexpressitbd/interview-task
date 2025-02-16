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
exports.Owner = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const OwnerSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, 'User ID is required!'],
        unique: true,
        ref: 'User'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    picture: {
        type: String
    }
}, {
    timestamps: true
});
// statics method for search client in db.
OwnerSchema.statics.isExistOwnerInDBFindBy_user = function (user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield exports.Owner.findOne({ user });
    });
};
exports.Owner = mongoose_1.default.model('Owner', OwnerSchema);
