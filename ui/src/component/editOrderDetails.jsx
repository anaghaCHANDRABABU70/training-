import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import orderService from "../service/orderDetailApi";
class EditOrderDetails extends Component {
  state = {
    orderStatus: "",
    updatedShipments: [],
    updatedLineitems: [],
    updatedProductStatus: [],
  };
  cancelButtonClick = () => {
    const { history } = this.props;
    history.push("/view");
  };
  saveButtonClick = () => {
    const { history, order } = this.props;
    const { orderNo, lineItems } = order;
    const {
      orderStatus,
      updatedShipments,
      updatedLineitems,
      updatedProductStatus,
    } = this.state;
    console.log("updatedshipme",updatedShipments);
    
    console.log("updatedLineitems", updatedLineitems);
    console.log("updatedProductStatus", updatedProductStatus);
    order.status = orderStatus;
    const requestData = {
      orderNo,
      status: orderStatus,
      updatedShipments,
     updatedLineitems,
    };
    console.log("reqData all values that are changed (updated)", requestData);
    orderService.updateOrder(requestData);
    history.push("/view");
  };
  handleOrderStatusChange = (e) => {
    const { name, value } = e.target;
    console.log(
      "handleOrderStatusChange name and value when dropdown changed",
      name,
      value,
    );
    this.setState({ [name]: value });
  };
  handleProductStatusChange = (e, productId) => {
    const { name, value } = e.target;
    const { updatedLineitems } = this.state;
    updatedLineitems.push({ itemNo: productId, status: value });
    console.log(
      "handleProductStatusChange name and value when dropdown changed",
      name,
      value,
    );
    this.setState({ updatedLineitems });
  };
  handleStatusChange =(e,shipmentId)=>{
    const {name,value}=e.target;
    const { updatedShipments } = this.state;
    updatedShipments.push({ itemNo: shipmentId, status: value });
  
    console.log(
      "handleOrderStatusChange name and value when dropdown changed",
      name,
      value,
    );
    this.setState({ updatedShipments });
  };
  render() {
    const { order, statuses,productStatus,orderStatus } = this.props;
    // productStatus from container
    const {
      orderNo,
      siteId,
      status,
      orderDate,
      customerName,
      lineItems,
      shipments,
    } = order;
    return (
      <>
        <h1>Order Details</h1>
        <div>
          orderNo : {orderNo}
          <br />
          site id :{siteId}
          <br />
          Order Date :{orderDate}
          <br />
          Customer Name : {customerName}
          <br />
          Order Status :{orderStatus}
          <Select
            required=""
            name="orderStatus"
            onChange={(e) => {
              this.handleOrderStatusChange(e);
            }}
          >
            {statuses.length > 0 &&
              statuses.map((orderStatus, index) => (
                <MenuItem
                  key={parseInt(index.toString(), 10)}
                  value={orderStatus.value}
                  name="orderStatus"
                >
                  {orderStatus.text}
                </MenuItem>
              ))}
          </Select>
        </div>
        <h1>Product Details </h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Id</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Shipment Id</TableCell>
              <TableCell>Prime Number</TableCell>
              <TableCell>Product Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lineItems &&
              lineItems.map((lineItem, index) => (
                <TableRow key={index}>
                  <TableCell>{lineItem.productId}</TableCell>
                  <TableCell align="left">{lineItem.productName}</TableCell>
                  <TableCell align="left">{lineItem.quantity}</TableCell>
                  <TableCell align="left">{lineItem.shipmentId}</TableCell>
                  <TableCell align="left"> {lineItem.customAttributes.primeNumber}</TableCell>
                  <TableCell align="left">
                    <Select
                      name={index}
                      onChange={(e) => {
                        this.handleProductStatusChange(e, lineItem.productId);
                      }}
                    >
                      {productStatus.length > 0 &&
                        productStatus.map((pStatus, index) => (
                          <MenuItem
                            value=""
                            key={index}
                            value={pStatus.value}
                            name={index}
                          >
                            {pStatus.text}
                          </MenuItem>
                        ))}
                      <MenuItem>{lineItem.itemStatus}</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <h2>Shipment Details</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Shipment Id</TableCell>
           <TableCell>Shipment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {shipments &&
                shipments.map((shipment, index) => (
                  <TableRow key={index}>
                 <TableCell> {shipment.shipmentId}</TableCell>  
           
         <TableCell>
        <Select
          name={index}
          onChange={(e) => {
             this.handleStatusChange(e,shipment.shipmentId);
          }}
        >
          {statuses.length > 0 &&
            statuses.map((status, index) => (
              <MenuItem
                key={index}
                value={status.value}
                name={index}
              >
                {status.text}
              </MenuItem>
            ))}
            <MenuItem>{status}</MenuItem>
        </Select>
        </TableCell>
        </TableRow>
         ))}
        </TableBody>
        </Table>
        <Button color="primary" onClick={() => this.cancelButtonClick()}>
          CANCEL
        </Button>

        <Button color="primary" onClick={() => this.saveButtonClick()}>
          SAVE
        </Button>
      </>
    );
  }
}

export default withRouter(EditOrderDetails);
  