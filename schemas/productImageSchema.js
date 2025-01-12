"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProductImagesSchema = exports.findOneProductImageSchema = exports.deleteProductImageSchema = exports.updateProductImageSchema = exports.createProductImageSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Schema for creating a new ProductImage
exports.createProductImageSchema = joi_1.default.object({
    productImageProductId: joi_1.default.number().integer().positive().required(),
    productImageUrl: joi_1.default.string().uri().required()
});
// Schema for updating an existing ProductImage
exports.updateProductImageSchema = joi_1.default.object({
    productImageId: joi_1.default.number().integer().positive().required(),
    productImageProductId: joi_1.default.number().integer().positive().optional(),
    productImageUrl: joi_1.default.string().uri().optional(),
    updatedAt: joi_1.default.date().optional()
});
// Schema for deleting a ProductImage
exports.deleteProductImageSchema = joi_1.default.object({
    productImageId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching a single ProductImage
exports.findOneProductImageSchema = joi_1.default.object({
    productImageId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching all ProductImages with pagination and search support
exports.findAllProductImagesSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
