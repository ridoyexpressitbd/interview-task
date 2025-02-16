"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientValidation = void 0;
const zod_1 = require("zod");
const createClientValidationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required!' }).optional(),
        email: zod_1.z
            .string({ required_error: 'Email is required!' })
            .email()
            .optional(),
        phone: zod_1.z.string({ required_error: 'Phone is required!' }).optional()
    })
});
exports.ClientValidation = { createClientValidationZodSchema };
