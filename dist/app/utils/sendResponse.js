"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    return res.status(data.status).json({
        status: data.status,
        succcess: data.success,
        message: data.message,
        data: data.data
    });
};
exports.default = sendResponse;
