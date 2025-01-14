"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDetailOrder = exports.findAllOrder = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const pagination_1 = require("../../utilities/pagination");
const requestCheker_1 = require("../../utilities/requestCheker");
const log_1 = require("../../utilities/log");
const ordersModel_1 = require("../../models/ordersModel");
const products_1 = require("../../models/products");
const user_1 = require("../../models/user");
const address_1 = require("../../models/address");
const findAllOrder = async (req, res) => {
    try {
        const user = await user_1.UserModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userId: req.body?.user?.userId
            }
        });
        const page = new pagination_1.Pagination(parseInt(req.query.page) ?? 0, parseInt(req.query.size) ?? 10);
        const result = await ordersModel_1.OrdersModel.findAndCountAll({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                ...(Boolean(user?.dataValues.userRole === 'user') && {
                    orderUserId: { [sequelize_1.Op.eq]: req.body?.user?.userId },
                    orderStatus: {
                        [sequelize_1.Op.notIn]: ['done']
                    }
                }),
                ...(Boolean(req.query?.orderStatus) && {
                    orderStatus: { [sequelize_1.Op.eq]: req.query.orderStatus }
                })
            },
            include: [
                {
                    model: user_1.UserModel,
                    where: {
                        deleted: { [sequelize_1.Op.eq]: 0 }
                    },
                    attributes: ['userName']
                },
                {
                    model: products_1.ProductModel,
                    where: {
                        ...(Boolean(req.query.search) && {
                            [sequelize_1.Op.or]: [{ productName: { [sequelize_1.Op.like]: `%${req.query.search}%` } }]
                        })
                    },
                    attributes: [
                        'productId',
                        'productName',
                        'productImages',
                        'productDiscount',
                        'productTotalSale',
                        'productStock',
                        'productColors',
                        'productSizes'
                    ]
                }
            ],
            order: [['id', 'desc']],
            ...(req.query.pagination === 'true' && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.default;
        response.data = page.data(result);
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        log_1.CONSOLE.error(error.message);
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findAllOrder = findAllOrder;
const findDetailOrder = async (req, res) => {
    const requestParams = req.params;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['orderId'],
        requestData: requestParams
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await ordersModel_1.OrdersModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                orderId: { [sequelize_1.Op.eq]: requestParams.orderId }
            },
            include: [
                {
                    model: products_1.ProductModel
                },
                {
                    model: address_1.AddressesModel
                },
                {
                    model: user_1.UserModel,
                    where: {
                        deleted: { [sequelize_1.Op.eq]: 0 }
                    },
                    attributes: ['userName', 'userEmail', 'userWhatsAppNumber', 'userCoin']
                }
            ]
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const response = response_1.ResponseData.default;
        response.data = result;
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findDetailOrder = findDetailOrder;
