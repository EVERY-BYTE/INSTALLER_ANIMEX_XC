"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.userSchema = exports.findOneUserSchema = exports.findAllUsersSchema = exports.userRegistrationSchema = exports.userLoginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userLoginSchema = joi_1.default.object({
    userName: joi_1.default.string().required(),
    userPassword: joi_1.default.string().required()
});
exports.userRegistrationSchema = joi_1.default.object({
    userName: joi_1.default.string().required(),
    userPassword: joi_1.default.string().min(6).required(),
    userContact: joi_1.default.string().optional().allow(''),
    userRole: joi_1.default.string().valid('SuperAdmin', 'Admin', 'User').required(),
    userLevel: joi_1.default.string().valid('Silver', 'Gold', 'Platinum').optional()
});
exports.findAllUsersSchema = joi_1.default.object({
    page: joi_1.default.number().integer().min(0).default(0).optional(),
    size: joi_1.default.number().integer().min(1).default(10).optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().default(true).optional()
});
exports.findOneUserSchema = joi_1.default.object({
    userId: joi_1.default.string().required()
});
exports.userSchema = joi_1.default.object({
    userId: joi_1.default.string().required(),
    userName: joi_1.default.string().min(3).max(30).required(),
    userPassword: joi_1.default.string().min(6).max(128).required(),
    userRole: joi_1.default.string().valid('SuperAdmin', 'Admin', 'User').required(),
    userLevel: joi_1.default.string().valid('Silver', 'Gold', 'Platinum').required()
});
exports.updateUserSchema = joi_1.default.object({
    userId: joi_1.default.string().required(),
    userName: joi_1.default.string().min(3).max(30).required(),
    userContact: joi_1.default.string().optional().allow(''),
    userPassword: joi_1.default.string().min(6).max(128).required(),
    userRole: joi_1.default.string().valid('SuperAdmin', 'Admin', 'User').required(),
    userLevel: joi_1.default.string().valid('Silver', 'Gold', 'Platinum').optional()
});
