"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const productModel_1 = require("../../models/productModel");
const productSchema_1 = require("../../schemas/productSchema");
const productImageModel_1 = require("../../models/productImageModel");
const logger_1 = __importDefault(require("../../utilities/logger"));
const create = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(productSchema_1.createProductSchema, req.body);
    if (error) {
        const message = `Invalid request body! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const product = await productModel_1.ProductModel.create({
            ...value,
            productUserId: value.jwtPayload.userId
        });
        console.log(value);
        if (value.productImages && value.productImages.length > 0) {
            const productImages = value.productImages.map((image) => ({
                ...image,
                productImageProductId: product.productId
            }));
            await productImageModel_1.ProductImageModel.bulkCreate(productImages);
        }
        const response = response_1.ResponseData.success({ message: 'Product created successfully' });
        logger_1.default.info('Product created successfully');
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.create = create;
