"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProductRatingsSchema = exports.findOneProductRatingSchema = exports.deleteProductRatingSchema = exports.updateProductRatingSchema = exports.createProductRatingSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Schema for creating a new ProductRating
exports.createProductRatingSchema = joi_1.default.object({
    productRatingUserId: joi_1.default.number().integer().positive().required(),
    productRatingProductId: joi_1.default.number().integer().positive().required(),
    productRatingStart: joi_1.default.number().integer().min(1).max(5).required(), // Rating scale, assuming 1-5 stars
    productRatingDescription: joi_1.default.string().allow('').optional()
});
// Schema for updating an existing ProductRating
exports.updateProductRatingSchema = joi_1.default.object({
    productRatingId: joi_1.default.number().integer().positive().required(),
    productRatingUserId: joi_1.default.number().integer().positive().optional(),
    productRatingProductId: joi_1.default.number().integer().positive().optional(),
    productRatingStart: joi_1.default.number().integer().min(1).max(5).optional(),
    productRatingDescription: joi_1.default.string().allow('').optional()
});
// Schema for deleting a ProductRating
exports.deleteProductRatingSchema = joi_1.default.object({
    productRatingId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching a single ProductRating
exports.findOneProductRatingSchema = joi_1.default.object({
    productRatingId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching all ProductRatings with pagination and search support
exports.findAllProductRatingsSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
