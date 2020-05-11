import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import ViewOrderDetailsContainer from './container/viewOrderDetailContainer';
import EditOrderDetails from './container/editOrderDetailsContainer';
function App(){
  
   
    return (  <Router>
     <React.Fragment>
      <Route path="/view" component={ViewOrderDetailsContainer}/>
      <Route path="/edit" component={EditOrderDetails}/>
      </React.Fragment>
    </Router> );

}
 
export default App;
