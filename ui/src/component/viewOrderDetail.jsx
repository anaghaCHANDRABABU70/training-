import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import { withRouter } from "react-router-dom";
class ViewOrderDetail extends Component {
  state = {};
editButtonClick =()=>{
  const{ history }=this.props;
  history.push("/edit");
}
  render() { 
    const {order}=this.props;
  const { orderNo, siteId, status,orderDate,lineItems,shipments,customerName} =order;
  console.log("order",order.billingAddress);
  console.log("order 123",order.paymentStatus);
  
  
    return ( <>
      <Grid container spacing={4}>
         <Grid item xs={8}>
           <Box pt={3}>
             <h2>Order Details</h2>
         <Table>
         <TableBody>
           <TableRow>
              <TableCell width="30%" component="th" scope="row" align="left"> 
              Order No :{orderNo}
             </TableCell>
             <TableCell width="30%" component="th" scope="row" align="left">
               Site Id:{siteId}
             </TableCell>
           <TableCell width="30%" component="th" scope="row" align="left">
             Order Date : {orderDate}
             </TableCell>
             <TableCell width="30%" component="th" scope="row" align="left">
               Customer Name:{customerName}
             </TableCell>
             </TableRow>
             <TableRow>
             <TableCell width="30%" component="th" scope="row" align="left">
                Order Status :{status}
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
           <TableCell align="left">Product Id</TableCell>
             <TableCell align="left">Product Name</TableCell>
             <TableCell align="left">Quantity</TableCell>
             <TableCell align="left">Shipment Id</TableCell>
             <TableCell align="left">Prime Number</TableCell>
             <TableCell align="left">Product Status</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {lineItems && 
                       lineItems.map((lineItems,index)=>(
           
          <TableRow key={index}>
               <TableCell align="left" scope="row">{lineItems.productId}</TableCell>
               <TableCell align="left">{lineItems.productName}</TableCell>
               <TableCell align="left">{lineItems.quantity}</TableCell>
               <TableCell align="left">{lineItems.shipmentId}</TableCell>
               <TableCell align="left">{lineItems.customAttributes.primeNumber}</TableCell>
               <TableCell align="left">{lineItems.itemStatus}</TableCell>
             </TableRow>
                       ) ) }
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
           <TableCell align="left">Shipment Id</TableCell>
             <TableCell align="left">Shipment Status</TableCell>
             
           </TableRow>
         </TableHead>
         <TableBody>
         {shipments &&
         shipments.map((shipments,index)=>(
          <TableRow key={index}>
               <TableCell align="left" scope="row">{shipments.shipmentId}</TableCell>
               <TableCell align="left">{status}</TableCell>
             </TableRow>
 )) }
     </TableBody>
    </Table>
    </Box>
 </Grid>
       </Box>
       </Grid>
     </Grid>
     <Grid container spacing={0}>
      <Grid item xs={5}></Grid>
      <Button color="primary" onClick={()=>this.editButtonClick()}>
                   Edit
          </Button>
 </Grid>
        </> 
     );
  }
}
export default withRouter( ViewOrderDetail);
  
  
  
