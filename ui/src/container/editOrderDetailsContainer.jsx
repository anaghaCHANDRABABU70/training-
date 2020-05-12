import React, { Component } from "react";
import orderService from "../service/orderDetailApi";
import EditOrderDetails from "../component/editOrderDetails";

class EditOrderDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      itemStatus: [],
      status: [],
      productStatus: [],
    };
  }
  componentDidMount() {
    const orderNo = "UAU0031447";
    orderService.getOrder(orderNo).then((order) => {
      this.setState({ order });
      console.log( order);
    });
    const itemStatus = orderService.statuses;
    this.setState({ itemStatus });
    console.log( itemStatus);

    const productStatus = orderService.productStatus;
    this.setState({ productStatus });
    console.log(productStatus);
    
  }
  statusChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  productStatusChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const {
      order,
      itemStatus,
      statusChange,
      productStatus,
      productStatusChange,
    } = this.state;

    return (
      <>
        <EditOrderDetails
          productStatus={productStatus}
          order={order}
          statuses={itemStatus}
          handleStatusChange={statusChange}
          handleProductStatusChange={productStatusChange}
        />
      </>
    );
  }
}

export default EditOrderDetailsContainer;