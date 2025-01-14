"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.AddressModel = _1.sequelize.define('addresses', {
    ...zygote_1.ZygoteModel,
    addressId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    addressUserId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    addressName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressContact: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressDetail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressPostalCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressProvinsi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressKabupaten: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressKecamatan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'addresses',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
