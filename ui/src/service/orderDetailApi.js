import axios from "axios";
import orderNo from "../container/editOrderDetailsContainer";

const statuses = [
  { value: "Created", text: "Created" },
  { value: "Shipped", text: "Shipped" },
  { value: "Delivered", text: "Delivered" },
  { value: "Collected", text: "Collected" },
];

const orderStatusList = [
  { value: "Created", text: "Created" },
  { value: "Shipped", text: "Shipped" },
  { value: "Delivered", text: "Delivered" },
  { value: "Collected", text: "Collected" },
];

const productStatus = [
  { value: "Created", text: "Created" },
  { value: "Shipped", text: "Shipped" },
  { value: "Delivered", text: "Delivered" },
  { value: "Collected", text: "Collected" },
];

const getOrder = (orderNo) =>
  axios
    .get("http://localhost:9000/orders/?orderNo=UAU0031447")
    .then(response => {
      if (response) {
        const { data } = response;
        console.log(response, "abcd");
        return data;
      }
      return [];
    });

const updateOrder = (orderDetails) => {
  console.log("orderDetails", orderDetails);

  axios
    .patch("http://localhost:9000/orders",orderDetails)

    .then((response) => {
      if (response) {
        const { data } = response;
        return data;
      }
      return [];
    });
};
export default { getOrder, orderNo, updateOrder, statuses, productStatus };
