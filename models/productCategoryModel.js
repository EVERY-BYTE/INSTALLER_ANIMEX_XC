"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.ProductCategoryModel = index_1.sequelize.define('ProductCategory', {
    ...zygote_1.ZygoteModel,
    productCategoryId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    productCategoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'product_categories',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
