"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTotal = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const user_1 = require("../../models/user");
const saleModel_1 = require("../../models/saleModel");
const saleItemModel_1 = require("../../models/saleItemModel");
const productModel_1 = require("../../models/productModel");
const companyModel_1 = require("../../models/companyModel");
const platformModel_1 = require("../../models/platformModel");
const findTotal = async (req, res) => {
    try {
        const totalTransaction = await saleModel_1.SaleModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        const totalItemSales = await saleItemModel_1.SaleItemModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        const totalSuperAdmin = await user_1.UserModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userRole: { [sequelize_1.Op.eq]: 'superAdmin' }
            }
        });
        const totalAdmin = await user_1.UserModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userRole: { [sequelize_1.Op.eq]: 'admin' }
            }
        });
        const totalUser = await user_1.UserModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userRole: { [sequelize_1.Op.eq]: 'user' }
            }
        });
        const totalProduct = await productModel_1.ProductModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        const totalPerusahaan = await companyModel_1.CompanyModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        const totalPlatform = await platformModel_1.PlatformModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        const response = response_1.ResponseData.success({
            totalTransaction,
            totalItemSales,
            totalSuperAdmin,
            totalAdmin,
            totalUser,
            totalProduct,
            totalPerusahaan,
            totalPlatform
        });
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findTotal = findTotal;
