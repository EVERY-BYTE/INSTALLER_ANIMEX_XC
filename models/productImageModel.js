"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.ProductImageModel = index_1.sequelize.define('ProductImages', {
    ...zygote_1.ZygoteModel,
    productImageId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    productImageProductId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    productImageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'product_images',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
