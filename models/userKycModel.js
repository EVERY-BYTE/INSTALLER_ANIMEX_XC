"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserKycModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.UserKycModel = index_1.sequelize.define('UserKyc', {
    ...zygote_1.ZygoteModel,
    userKycId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    },
    userKycUserId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    userKycKtpImage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userKycSelfieImage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userKycRealName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userKycAddress: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    userKycDateOfBirth: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    tableName: 'user_kyc',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
