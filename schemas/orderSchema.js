"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllOrdersSchema = exports.findOneOrderSchema = exports.deleteOrderSchema = exports.updateOrderSchema = exports.createOrderSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createOrderSchema = joi_1.default.object({
    orderId: joi_1.default.number().integer().positive().required(),
    orderUserBuyerId: joi_1.default.number().integer().positive().required(),
    orderUserOwnerId: joi_1.default.number().integer().positive().required(),
    orderProductId: joi_1.default.number().integer().positive().required(),
    orderProductPrice: joi_1.default.number().positive().required(),
    orderTotalProductPrice: joi_1.default.number().positive().required(),
    orderOngkirPrice: joi_1.default.number().positive().required(),
    orderTotalItem: joi_1.default.number().integer().positive().required(),
    orderStatus: joi_1.default.string()
        .valid('waiting', 'process', 'delivery', 'done', 'cancel')
        .required()
});
exports.updateOrderSchema = joi_1.default.object({
    orderId: joi_1.default.number().integer().positive().required(),
    orderUserBuyerId: joi_1.default.number().integer().positive().optional().allow(''),
    orderUserOwnerId: joi_1.default.number().integer().positive().optional().allow(''),
    orderProductId: joi_1.default.number().integer().positive().optional().allow(''),
    orderProductPrice: joi_1.default.number().positive().optional().allow(''),
    orderTotalProductPrice: joi_1.default.number().positive().optional().allow(''),
    orderOngkirPrice: joi_1.default.number().positive().optional().allow(''),
    orderTotalItem: joi_1.default.number().integer().positive().optional().allow(''),
    orderStatus: joi_1.default.string()
        .valid('waiting', 'process', 'delivery', 'done', 'cancel')
        .optional()
        .allow('')
});
exports.deleteOrderSchema = joi_1.default.object({
    orderId: joi_1.default.number().integer().positive().required()
});
exports.findOneOrderSchema = joi_1.default.object({
    orderId: joi_1.default.number().integer().positive().required()
});
exports.findAllOrdersSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
