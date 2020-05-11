const Order =require ('../model/order');
exports.findOrderByOrderNo =async(orderNo)=>{
    console.log("hhhh",orderNo);
    return Order.findOne({orderNo:orderNo});

};
exports.updateOrder =async (orderNo,order)=>{
    console.log("kkkkkkk",order);
    const updated = await Order.updateOne( orderNo, order);
    
    return updated;

};
