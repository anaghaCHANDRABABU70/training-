import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const SimpleCard = (props) => {
  const { order} = props;
  
return (
  <>
     <Grid container spacing={4}>
        <Grid item xs={8}>
          <Box pt={3}>
            <h2>Order Details</h2>
        <Table>
        <TableBody>
          <TableRow>
             <TableCell width="30%" component="th" scope="row" align="left"> 
             Order No : {"123"}
            </TableCell>
            <TableCell width="30%" component="th" scope="row" align="left">
              Site Id:{"o.siteid"}
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
          <Grid container spacing={0}>
                     <Grid item xs={8}></Grid>
        <Box pt={2}>
          <h2>Product Details</h2>
          
          <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="left">Product Id</StyledTableCell>
            <StyledTableCell align="left">Product Name</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Shipment Id</StyledTableCell>
            <StyledTableCell align="left">Prime Number</StyledTableCell>
            <StyledTableCell align="left">Prime Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         <StyledTableRow>
              <StyledTableCell align="left" scope="row">{"order.name"}</StyledTableCell>
              <StyledTableCell align="left">{"order.calories"}</StyledTableCell>
              <StyledTableCell align="left">{"order.fat"}</StyledTableCell>
              <StyledTableCell align="left">{"order.carbs"}</StyledTableCell>
              <StyledTableCell align="left">{"order.protein"}</StyledTableCell>
              <StyledTableCell align="left">{"order.protein"}</StyledTableCell>
            </StyledTableRow>
    </TableBody>
   </Table>
   
   </Box>
</Grid>
  <Grid container spacing={0}>
          <Grid item xs={9}></Grid>
        <Box pt={2}>
          <h2>Shipment Details</h2>
          
          <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="left">Shipment Id</StyledTableCell>
            <StyledTableCell align="left">Shipment Status</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         <StyledTableRow>
              <StyledTableCell align="left" scope="row">{"order.name"}</StyledTableCell>
              <StyledTableCell align="left">{"order.calories"}</StyledTableCell>
             
            </StyledTableRow>
    </TableBody>
   </Table>
   
   </Box>
</Grid>
      </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default SimpleCard;
