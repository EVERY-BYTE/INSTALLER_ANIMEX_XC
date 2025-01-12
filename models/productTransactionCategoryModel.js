"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTransactionCategory = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.ProductTransactionCategory = index_1.sequelize.define('TransactionCategory', {
    ...zygote_1.ZygoteModel,
    transactionCategoryId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    transactionCategoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'transaction_categories',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
