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

    console.log("updatedLineitems", updatedLineitems);
    if (updatedLineitems) {
      console.log("inside map");

      updatedLineitems.map((ulineItem) => {
        if (ulineItem) {
          lineItems.map((item) => {
            if (ulineItem.itemNo === item.productId) {
              updatedProductStatus.push({
                itemNo: ulineItem.itemNo,
                status: ulineItem.status,
              });
            }
          });
        }
        console.log("map ulineitem", ulineItem.name);
      });
    }
    console.log("updatedProductStatus", updatedProductStatus);

    order.status = orderStatus;
    const requestData = {
      orderNo,
      status: orderStatus,
      updatedShipments,
      updatedProductStatus,
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

  render() {
    const { order, statuses, handleStatusChange, productStatus } = this.props;
    // productStatus from container
    const {
      orderNo,
      siteId,
      orderDate,
      customerName,
      status,
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
          Order Status :{status}
          <Select
            required=""
            name="orderStatus"
            // value={selectedorderStatus}
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
                  <TableCell align="left">
                    {lineItem.customAttributes.primeNumber}
                  </TableCell>
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
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {shipments &&
                shipments.map((shipments, index) => (
                  <TableCell key={index}>{shipments.shipmentId}</TableCell>
                ))}
            </TableRow>
          </TableBody>
        </Table>
        <select
          className="custom-select d-block w-100"
          required=""
          name="statuses"
          // value={selectedStatus}
          style={{ cursor: "pointer" }}
          onChange={(e) => {
            handleStatusChange(e);
          }}
        >
          {statuses.length > 0 &&
            statuses.map((status, index) => (
              <option
                key={parseInt(index.toString(), 10)}
                value={status.value}
                name="status"
              >
                {status.text}
              </option>
            ))}
        </select>
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
