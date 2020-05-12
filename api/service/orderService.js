const orderRepository = require("../repository/orderRepository");

exports.getOrderByOrderNo = async (orderNo) => {
  const order = await orderRepository.findOrderByOrderNo(orderNo);
  return order;
};

exports.updateOrder = async (newOrder) => {
  console.log("neworder", newOrder);

  const { orderNo, status, updatedShipments, updatedProductStatus } = newOrder;
  const order = await orderRepository.findOrderByOrderNo(orderNo);
  const { shipments, lineItems } = order;
  
  if (status) {
    console.log("status", status);

    order.status = status;
  }
  let newlineItems = [];
  console.log("updatedProductStatus", updatedProductStatus);

  if (updatedProductStatus && updatedProductStatus.length > 0) {
    console.log("inside");

    lineItems.map((lineItem) => {
      let newlineItem = lineItem;
      updatedProductStatus.map((updatedLineitem) => {
        if (lineItem.productId === updatedLineitem.itemNo) {
          console.log("hello");

          lineItem.itemStatus = updatedLineitem.status;
        }
      });
      // newlineItems.push(newlineItem);
    });
    // order.lineItems = newlineItems;
  }

  let newShipment = [];
  console.log("updatedshipment", newShipment);

  if (updatedShipments && updatedShipments.length > 0) {
    console.log("inside");

    shipments.map((ship) => {
      let newShipment = ship;
      updatedShipments.map((updatedShip) => {
        if (shipments.shipmentId === updatedShipments.itemNo) {
          console.log("hello");

          shipments.shippingMethod = updatedShipments.status;
        }
      });
      // newlineItems.push(newlineItem);
    });
    // order.lineItems = newlineItems;
  }

  const update = await orderRepository.updateOrder(order);
  return update;
};
