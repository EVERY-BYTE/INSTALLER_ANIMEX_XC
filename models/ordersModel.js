"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
const productModel_1 = require("./productModel");
const user_1 = require("./user");
const myAddress_1 = require("./myAddress");
exports.OrdersModel = _1.sequelize.define('orders', {
    ...zygote_1.ZygoteModel,
    orderId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    orderUserBuyerId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    orderUserOwnerId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    orderProductId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    orderProductPrice: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    orderTotalProductPrice: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    orderOngkirPrice: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    orderTotalItem: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    orderStatus: {
        type: sequelize_1.DataTypes.ENUM('waiting', 'process', 'delivery', 'done', 'cancel'),
        allowNull: false,
        defaultValue: 'waiting'
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'orders',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
exports.OrdersModel.hasOne(productModel_1.ProductModel, {
    sourceKey: 'orderProductId',
    foreignKey: 'productId'
});
exports.OrdersModel.hasOne(user_1.UserModel, {
    sourceKey: 'orderUserId',
    foreignKey: 'userId'
});
exports.OrdersModel.hasOne(myAddress_1.MyAddressesModel, {
    sourceKey: 'orderUserId',
    foreignKey: 'addressUserId'
});
