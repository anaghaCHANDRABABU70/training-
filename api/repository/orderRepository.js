const Order =require ('../model/order');
exports.findOrderByOrderNo =async(orderNo)=>{
    return Order.findOne({orderNo:orderNo});

}
exports.updateOrder =async(order)=>{
    const updated =await Order.updateOne({orderNo:order.orderNo},order);
    return updated;

}