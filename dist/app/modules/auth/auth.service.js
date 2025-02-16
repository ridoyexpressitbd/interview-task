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
exports.AuthServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../users/user.model");
const auth_utils_1 = require("./auth.utils");
const config_1 = __importDefault(require("../../config"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //checking if the user is exits in the database.
    const user = yield user_model_1.User.isUserAlreadyExistsBy_email(payload.email);
    if (!user) {
        throw new AppError_1.default(404, 'This user is not found!');
    }
    //checking if the user is already deleted.
    const isDeleted = user === null || user === void 0 ? void 0 : user.isDeleted;
    if (isDeleted) {
        throw new AppError_1.default(403, 'This user is deleted!');
    }
    //checking if the user is blocked.
    const userStatus = user === null || user === void 0 ? void 0 : user.status;
    if (userStatus === 'blocked') {
        throw new AppError_1.default(403, 'This user is Blocked');
    }
    // checking user password mached or not.
    const isPasswordMached = yield user_model_1.User.isPasswordMached(payload.password, user.password);
    if (!isPasswordMached) {
        throw new AppError_1.default(403, 'Password do not matched!');
    }
    // set jwt payload.
    const jwtPayload = {
        user_id: user._id,
        role: user.role
    };
    // create access token
    const accessToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_token_secret, config_1.default.jwt_access_token_expires_in);
    // create refresh token.
    const refreshToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_refresh_token_secret, config_1.default.jwt_refresh_token_expires_in);
    return { accessToken, refreshToken };
});
exports.AuthServices = {
    loginUser
};
