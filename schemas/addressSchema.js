"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllAddressesSchema = exports.findOneAddressSchema = exports.deleteAddressSchema = exports.updateAddressSchema = exports.createAddressSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createAddressSchema = joi_1.default.object({
    addressUserId: joi_1.default.number().integer().positive().required().messages({
        'number.base': 'User ID must be a number.',
        'number.positive': 'User ID must be a positive number.'
    }),
    addressName: joi_1.default.string().required().messages({
        'string.empty': 'Address name is required.'
    }),
    addressContact: joi_1.default.string().required().messages({
        'string.empty': 'Address contact is required.'
    }),
    addressDetail: joi_1.default.string().required().messages({
        'string.empty': 'Address detail is required.'
    }),
    addressPostalCode: joi_1.default.string().required().messages({
        'string.empty': 'Postal code is required.'
    }),
    addressProvinsi: joi_1.default.string().required().messages({
        'string.empty': 'Province is required.'
    }),
    addressKabupaten: joi_1.default.string().required().messages({
        'string.empty': 'Kabupaten is required.'
    }),
    addressKecamatan: joi_1.default.string().required().messages({
        'string.empty': 'Kecamatan is required.'
    })
});
exports.updateAddressSchema = joi_1.default.object({
    addressId: joi_1.default.number().integer().positive().required().messages({
        'number.base': 'Address ID must be a number.',
        'number.positive': 'Address ID must be a positive number.'
    }),
    addressUserId: joi_1.default.number().integer().positive().optional().messages({
        'number.base': 'User ID must be a number.',
        'number.positive': 'User ID must be a positive number.'
    }),
    addressName: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Address name cannot be empty.'
    }),
    addressContact: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Address contact cannot be empty.'
    }),
    addressDetail: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Address detail cannot be empty.'
    }),
    addressPostalCode: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Postal code cannot be empty.'
    }),
    addressProvinsi: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Province cannot be empty.'
    }),
    addressKabupaten: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Kabupaten cannot be empty.'
    }),
    addressKecamatan: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Kecamatan cannot be empty.'
    })
});
exports.deleteAddressSchema = joi_1.default.object({
    addressId: joi_1.default.number().integer().positive().required().messages({
        'number.base': 'Address ID must be a number.',
        'number.positive': 'Address ID must be a positive number.'
    })
});
exports.findOneAddressSchema = joi_1.default.object({
    addressId: joi_1.default.number().integer().positive().required().messages({
        'number.base': 'Address ID must be a number.',
        'number.positive': 'Address ID must be a positive number.'
    })
});
exports.findAllAddressesSchema = joi_1.default.object({
    page: joi_1.default.number().integer().positive().optional(),
    size: joi_1.default.number().integer().positive().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
