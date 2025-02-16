"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const StoreSchema = new mongoose_1.default.Schema({
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, 'Client id is required!'],
        ref: 'Owner'
    },
    name: {
        type: String,
        required: [true, 'Store name is requred!'],
        trim: true
    },
    currency: {
        type: String,
        required: [true, 'Currency is required!'],
        default: 'BDT',
        trim: true
    },
    country: {
        type: String,
        default: 'Bangladesh'
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        trim: true
    },
    domain: {
        type: String,
        required: [true, 'Domain is required!'],
        unique: true,
        trim: true
    },
    customDomain: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
        default: 'e-commerce',
        trim: true
    }
}, {
    timestamps: true
});
exports.Store = mongoose_1.default.model('Store', StoreSchema);
