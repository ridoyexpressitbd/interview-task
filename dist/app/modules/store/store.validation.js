"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreValidation = void 0;
const zod_1 = require("zod");
const createStoreValidationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Store name is required!'
        })
            .min(3, { message: 'Store name must be at least 3 characters long' })
            .max(63, { message: 'Store name must be at most 63 characters long' }),
        currency: zod_1.z.enum(['BDT'], {
            required_error: 'Currency is required and must be "BDT"!'
        }),
        country: zod_1.z.enum(['Bangladesh'], {
            required_error: 'Country is required and must be "Bangladesh"!'
        }),
        domain: zod_1.z
            .string({
            required_error: 'Domain is required!'
        })
            .trim()
            .min(3, { message: 'Domain must be at least 3 characters long' })
            .max(63, { message: 'Domain must be at most 63 characters long' })
            .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, {
            message: 'Domain can only contain lowercase letters, numbers, and hyphens (-), but cannot start or end with a hyphen'
        }),
        category: zod_1.z
            .string({
            required_error: 'Category is required!'
        })
            .min(3, { message: 'Category must be at least 3 characters long' })
            .max(63, { message: 'Category must be at most 63 characters long' }),
        email: zod_1.z
            .string({
            required_error: 'Email is required!'
        })
            .email('Invalid email format!')
            .min(3, { message: 'Email must be at least 3 characters long' })
            .max(63, { message: 'Email must be at most 63 characters long' })
    })
});
exports.StoreValidation = {
    createStoreValidationZodSchema
};
