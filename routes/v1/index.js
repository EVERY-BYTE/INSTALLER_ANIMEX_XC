"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouterV1 = void 0;
const controllers_1 = require("../../controllers");
const uploadFileRouter_1 = __importDefault(require("./uploadFileRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const productCategoryRouter_1 = __importDefault(require("./productCategoryRouter"));
const orderRouter_1 = __importDefault(require("./orderRouter"));
const notificationRouter_1 = __importDefault(require("./notificationRouter"));
const addressRouter_1 = __importDefault(require("./addressRouter"));
const appRouterV1 = (app) => {
    app.get(`/api/v1`, async (req, res) => await (0, controllers_1.index)(req, res));
    app.use(`/api/v1/files`, uploadFileRouter_1.default);
    app.use(`/api/v1/users`, userRouter_1.default);
    app.use(`/api/v1/products`, productRouter_1.default);
    app.use(`/api/v1/products/categories`, productCategoryRouter_1.default);
    app.use(`/api/v1/orders`, orderRouter_1.default);
    app.use(`/api/v1/notifications`, notificationRouter_1.default);
    app.use(`/api/v1/addresses`, addressRouter_1.default);
};
exports.appRouterV1 = appRouterV1;
