var express = require("express");
var router =express.Router();
const orderController=require('../controller/orderController');
router.get("/",orderController.getOrderByOrderNo);
router.patch("/",orderController.updateOrder);
module.exports=router;