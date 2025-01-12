"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const productImageModel_1 = require("./productImageModel");
const productRatingModel_1 = require("./productRatingModel");
const zygote_1 = require("./zygote");
const userModel_1 = require("./userModel");
exports.ProductModel = index_1.sequelize.define('Products', {
    ...zygote_1.ZygoteModel,
    productId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    productUserId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    productName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    productDescription: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    productCategoryId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    productPrice: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    productWeight: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    productColors: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    productSizes: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    productTransactionType: {
        type: sequelize_1.DataTypes.ENUM('Sell', 'Auction', 'Barter', 'PurchaseOrder'),
        allowNull: false,
        defaultValue: 'Sell'
    }
}, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
exports.ProductModel.hasMany(productImageModel_1.ProductImageModel, {
    foreignKey: 'productImageProductId',
    as: 'images'
});
exports.ProductModel.hasMany(productRatingModel_1.ProductRatingModel, {
    foreignKey: 'productRatingProductId',
    as: 'ratings'
});
exports.ProductModel.belongsTo(userModel_1.UserModel, {
    foreignKey: 'productUserId',
    as: 'user'
});
