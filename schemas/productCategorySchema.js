"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProductCategoriesSchema = exports.findOneProductCategorySchema = exports.deleteProductCategorySchema = exports.updateProductCategorySchema = exports.createProductCategorySchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Schema for creating a new ProductCategory
exports.createProductCategorySchema = joi_1.default.object({
    productCategoryName: joi_1.default.string().max(255).required()
});
// Schema for updating an existing ProductCategory
exports.updateProductCategorySchema = joi_1.default.object({
    productCategoryId: joi_1.default.number().integer().positive().required(),
    productCategoryName: joi_1.default.string().max(255).optional()
});
// Schema for deleting a ProductCategory
exports.deleteProductCategorySchema = joi_1.default.object({
    productCategoryId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching a single ProductCategory
exports.findOneProductCategorySchema = joi_1.default.object({
    productCategoryId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching all ProductCategories with pagination and search support
exports.findAllProductCategoriesSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
