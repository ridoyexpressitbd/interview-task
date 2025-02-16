"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ownerValidation = void 0;
const zod_1 = require("zod");
const createOwnerValidationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required!' }).optional(),
        email: zod_1.z
            .string({ required_error: 'Email is required!' })
            .email()
            .optional(),
        phone: zod_1.z.string({ required_error: 'Phone is required!' }).optional()
    })
});
exports.ownerValidation = {
    createOwnerValidationZodSchema
};
