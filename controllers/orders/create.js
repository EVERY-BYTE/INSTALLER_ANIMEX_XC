"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const orderModel_1 = require("../../models/orderModel");
const orderSchema_1 = require("../../schemas/orderSchema");
const logger_1 = __importDefault(require("../../utilities/logger"));
const create = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(orderSchema_1.createOrderSchema, req.body);
    if (error) {
        const message = `Invalid request body! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const order = await orderModel_1.OrdersModel.create(value);
        const response = response_1.ResponseData.success({
            message: 'Order created successfully',
            order
        });
        logger_1.default.info('Order created successfully');
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.create = create;