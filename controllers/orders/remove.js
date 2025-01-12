"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const orderModel_1 = require("../../models/orderModel");
const orderSchema_1 = require("../../schemas/orderSchema");
const logger_1 = __importDefault(require("../../utilities/logger"));
const remove = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(orderSchema_1.deleteOrderSchema, req.params);
    if (error) {
        const message = `Invalid request parameters! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const result = await orderModel_1.OrdersModel.findOne({
            where: {
                deleted: 0,
                orderId: value.orderId
            }
        });
        if (!result) {
            const message = `Order not found with ID: ${value.orderId}`;
            logger_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error(message));
        }
        result.set('deleted', 1);
        await result.save();
        const response = response_1.ResponseData.success({
            message: 'Order deleted successfully'
        });
        logger_1.default.info('Order deleted successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.remove = remove;
