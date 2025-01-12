"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllUserKycSchema = exports.findOneUserKycSchema = exports.deleteUserKycSchema = exports.updateUserKycSchema = exports.createUserKycSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Schema for creating a new UserKyc
exports.createUserKycSchema = joi_1.default.object({
    userKycUserId: joi_1.default.number().integer().positive().required(),
    userKycKtpImage: joi_1.default.string().uri().required(),
    userKycSelfieImage: joi_1.default.string().uri().required(),
    userKycRealName: joi_1.default.string().max(255).required(),
    userKycAddress: joi_1.default.string().required(),
    userKycDateOfBirth: joi_1.default.date().iso().required() // Expecting ISO date format (YYYY-MM-DD)
});
// Schema for updating an existing UserKyc
exports.updateUserKycSchema = joi_1.default.object({
    userKycId: joi_1.default.number().integer().positive().required(),
    userKycUserId: joi_1.default.number().integer().positive().optional(),
    userKycKtpImage: joi_1.default.string().uri().optional(),
    userKycSelfieImage: joi_1.default.string().uri().optional(),
    userKycRealName: joi_1.default.string().max(255).optional(),
    userKycAddress: joi_1.default.string().optional(),
    userKycDateOfBirth: joi_1.default.date().iso().optional()
});
// Schema for deleting a UserKyc
exports.deleteUserKycSchema = joi_1.default.object({
    userKycId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching a single UserKyc
exports.findOneUserKycSchema = joi_1.default.object({
    userKycId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching all UserKyc records with pagination and search support
exports.findAllUserKycSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
