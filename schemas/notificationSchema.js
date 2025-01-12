"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllNotificationsSchema = exports.findOneNotificationSchema = exports.deleteNotificationSchema = exports.updateNotificationSchema = exports.createNotificationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createNotificationSchema = joi_1.default.object({
    notificationId: joi_1.default.number().integer().positive().optional(),
    notificationName: joi_1.default.string().required().messages({
        'string.empty': 'Notification name is required.'
    }),
    notificationMessage: joi_1.default.string().required().messages({
        'string.empty': 'Notification message is required.'
    })
});
exports.updateNotificationSchema = joi_1.default.object({
    notificationId: joi_1.default.number().integer().positive().required(),
    notificationName: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Notification name cannot be empty.'
    }),
    notificationMessage: joi_1.default.string().optional().allow('').messages({
        'string.empty': 'Notification message cannot be empty.'
    })
});
exports.deleteNotificationSchema = joi_1.default.object({
    notificationId: joi_1.default.number().integer().positive().required().messages({
        'number.base': 'Notification ID must be a number.',
        'number.positive': 'Notification ID must be a positive number.'
    })
});
exports.findOneNotificationSchema = joi_1.default.object({
    notificationId: joi_1.default.number().integer().positive().required().messages({
        'number.base': 'Notification ID must be a number.',
        'number.positive': 'Notification ID must be a positive number.'
    })
});
exports.findAllNotificationsSchema = joi_1.default.object({
    page: joi_1.default.number().integer().positive().optional(),
    size: joi_1.default.number().integer().positive().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
