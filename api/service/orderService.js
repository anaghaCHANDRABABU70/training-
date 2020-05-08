const orderRepository= require('../repository/orderRepository');
exports.getOrderByOrderNo =async(orderNo)=>{
    const order =await orderRepository.findOrderByOrderNo(orderNo);
    return order;
};
exports.updateOrder =async(order)=>{ 
    console.log("jjjjjj",order);
    const update =await orderRepository.updateOrder(order);
    return update;
};
