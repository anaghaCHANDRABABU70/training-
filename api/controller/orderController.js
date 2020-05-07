const orderService =require('../service/orderService');
const asyncHandler =require('express-async-Handler');
exports.getOrderByOrderNo =asyncHandler (async(req,res)=>{
const {orderNo}=req.query;
console.log(orderNo);
const order =await orderService.getOrderByOrderNo(orderNo);
res.send(order);
});
exports.updateOrder =asyncHandler (async(req,res)=>{
    const order=req.body;
    
    const data =await orderService.updateOrder(order);
    res.send(data);
    });