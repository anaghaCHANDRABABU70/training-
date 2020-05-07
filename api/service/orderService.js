const orderRepository= require('../repository/orderRepository');
exports.getOrderByOrderNo =async(orderNo)=>{
    const order =await orderRepository.findOrderByOrderNo();
    return order;
}
exports.updateOrder =async(order)=>{ 
    const data =await orderRepository.updateOrder(order);
    return data;
}
