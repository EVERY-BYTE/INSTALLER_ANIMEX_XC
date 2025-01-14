"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMyAddress = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const address_1 = require("../../models/address");
const removeMyAddress = async (req, res) => {
    const requestQuery = req.query;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['myAddressId'],
        requestData: requestQuery
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await address_1.MyAddressesModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                myAddressId: { [sequelize_1.Op.eq]: requestQuery.myAddressId }
            }
        });
        if (result == null) {
            const message = 'address not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        result.deleted = 1;
        void result.save();
        const response = response_1.ResponseData.default;
        response.data = { message: 'success' };
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.removeMyAddress = removeMyAddress;
