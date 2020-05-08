import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
const SimpleCard = (props) => {
  const { order} = props;

  return (
    <Grid >
        <Grid>
        <h2>Order Details</h2>
        </Grid>
      <Table>
        <TableBody>
          <TableRow>
             <TableCell width="30%" component="th" scope="row" align="left"> 
             Order No : {"123"}
            </TableCell>
            <TableCell width="30%" component="th" scope="row" align="left">
              Site Id:{"order.siteid"}
            </TableCell>
          <TableCell width="30%" component="th" scope="row" align="left">
            Order Date : {"order.orderdate"}
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell width="30%" component="th" scope="row" align="left">
               Order Status :{"order.status"}
            </TableCell>
          </TableRow>
          </TableBody>
          </Table>
          <Grid><h2>Product Details</h2></Grid>
          <Box>
          <Table>
              <TableBody>
              <TableRow>
            <TableCell width="30%" component="th" scope="row" align="left">
            Product Id :{ 'order.product_id'}
            </TableCell >
           <TableCell width="30%" component="th" scope="row" align="left">
           Product Name :{'order.name'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%" component="th" scope="row" align="left">
            Quantity:{'order.model_number'}
            </TableCell>
            <TableCell width="30%" component="th" scope="row" align="left">
                Shipment ID:{"order.shipment"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%" component="th" scope="row" align="left">
             Prime Number: {'order.description'}
            </TableCell>
            <TableCell width="30%" component="th" scope="row" align="left">
             Product Status:{'order.longDescription'}
           </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </Box>
    </Grid>
  );
};

export default SimpleCard;
