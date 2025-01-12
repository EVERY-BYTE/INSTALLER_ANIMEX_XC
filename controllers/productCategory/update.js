"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const productCategoryModel_1 = require("../../models/productCategoryModel");
const productCategorySchema_1 = require("../../schemas/productCategorySchema");
const logger_1 = __importDefault(require("../../utilities/logger"));
const update = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(productCategorySchema_1.updateProductCategorySchema, req.body);
    if (error) {
        const message = `Invalid request body! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const [updated] = await productCategoryModel_1.ProductCategoryModel.update(value, {
            where: { productCategoryId: value.productCategoryId }
        });
        if (!updated) {
            const message = `Product category not found with ID: ${value.productCategoryId}`;
            logger_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error(message));
        }
        const response = response_1.ResponseData.success({
            message: 'Product category updated successfully'
        });
        logger_1.default.info('Product category updated successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.update = update;
