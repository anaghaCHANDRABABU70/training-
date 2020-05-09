import React, { Component } from 'react';
import ViewOrderDetails from "../component/viewOrderDetail";
import OrderService from "../service/orderDetailApi";
class ViewOrderContainer extends Component {
    state = {
        order:[]  
    };
    
    componentDidMount(){
        OrderService.getOrder().then(order=>{
            this.setState({order});
        });
    }
    render() { 
        const { order }=this.state;
        console.log(order);
        return (
         <ViewOrderDetails order={order}/>
        );
    }
    
    }

 
export default ViewOrderContainer;