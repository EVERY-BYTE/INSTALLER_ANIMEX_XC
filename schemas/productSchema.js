"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProductsSchema = exports.findOneProductSchema = exports.deleteProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const jwtPayloadSchema_1 = require("./jwtPayloadSchema");
// Schema for creating a new Product
exports.createProductSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    productName: joi_1.default.string().max(255).required(),
    productDescription: joi_1.default.string().required(),
    productCategoryId: joi_1.default.number().integer().positive().required(),
    productPrice: joi_1.default.number().positive().required(),
    productWeight: joi_1.default.number().positive().required(),
    productColors: joi_1.default.string().optional().allow(''),
    productSizes: joi_1.default.string().optional().allow(''),
    productTransactionType: joi_1.default.valid('Sell', 'Auction', 'Barter', 'PurchaseOrder')
        .default('Sell')
        .required(),
    productImages: joi_1.default.array()
        .items(joi_1.default.object({
        productImageUrl: joi_1.default.string().uri().required()
    }))
        .required()
});
// Schema for updating an existing Product
exports.updateProductSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    productId: joi_1.default.number().integer().positive().required(),
    productUserId: joi_1.default.number().integer().positive().optional(),
    productName: joi_1.default.string().max(255).optional(),
    productDescription: joi_1.default.string().optional(),
    productCategoryId: joi_1.default.number().integer().positive().optional(),
    productPrice: joi_1.default.number().positive().optional(),
    productWeight: joi_1.default.number().positive().optional(),
    productColors: joi_1.default.string().optional().allow(''),
    productSizes: joi_1.default.string().optional().allow(''),
    productTransactionType: joi_1.default.valid('Sell', 'Auction', 'Barter', 'PurchaseOrder').optional(),
    productImages: joi_1.default.array()
        .items(joi_1.default.object({
        productImageUrl: joi_1.default.string().uri().required()
    }))
        .optional()
});
// Schema for deleting a Product
exports.deleteProductSchema = joi_1.default.object({
    productId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching a single Product
exports.findOneProductSchema = joi_1.default.object({
    productId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching all Products with pagination and search support
exports.findAllProductsSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
