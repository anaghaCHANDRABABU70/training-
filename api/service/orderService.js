const orderRepository= require('../repository/orderRepository');
exports.getOrderByOrderNo =async(orderNo)=>{
    const order =await orderRepository.findOrderByOrderNo(orderNo);
    return order;
};
exports.updateOrder =async(newOrder)=>{ 
    const { orderNo,
        status,
        updatedShipments,
       updatedLineitems}=newOrder;
       console.log(newOrder);
     const order =await orderRepository.findOrderByOrderNo(orderNo);
     const { lineItems,shipments}=order;
     if (status){
         order.status=status;
        console.log("insert");
     }
     if(updatedLineitems.length >0 ){
        lineItems.map((lineItem=>{
            updatedLineitems.map((updatedLineitem=>{
                if(lineItem.productId === updatedLineitem.itemNo){
                    lineItem.itemStatus= updatedLineitem.status
                    console.log("gggg");
                }
                }));
        }))
        if(updatedShipments.length >0 ){
            shipments.map((shipment=>{
                updatedShipments.map((updatedShipment=>{
                    if(shipment.shipmentId === updatedShipment.shipmentId){
                        Shipment.shipmentStatus= updatedShipment.status
                        console.log("shipment");
                        
                    }
                    }));
                
            
            }))
            
        }
    }
    const update =await orderRepository.updateOrder(orderNo,order);
    return update;
};
