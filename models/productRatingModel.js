"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRatingModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
const userModel_1 = require("./userModel");
exports.ProductRatingModel = index_1.sequelize.define('ProductRatings', {
    ...zygote_1.ZygoteModel,
    productRatingId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    productRatingUserId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    productRatingProductId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    productRatingStart: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    productRatingDescription: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'product_ratings',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
exports.ProductRatingModel.belongsTo(userModel_1.UserModel, {
    foreignKey: 'productRatingUserId',
    as: 'user'
});
userModel_1.UserModel.hasOne(exports.ProductRatingModel, {
    foreignKey: 'productRatingUserId',
    as: 'productRating'
});
