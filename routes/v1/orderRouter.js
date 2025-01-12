"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_1 = require("../../controllers/orders");
const router = (0, express_1.Router)();
router.get('/', orders_1.orderControllers.findAll);
router.get('/detail/:orderId', orders_1.orderControllers.findOne);
router.post('/', orders_1.orderControllers.create);
router.patch('/', orders_1.orderControllers.update);
router.delete('/:orderId', orders_1.orderControllers.remove);
exports.default = router;