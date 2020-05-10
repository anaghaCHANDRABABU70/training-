import React from 'react';
import ViewOrderDetailsContainer from './container/viewOrderDetailContainer';
import EditOrderDetails from './container/editOrderDetailsContainer';
function App() {
    return (
    <div className="App">
      <ViewOrderDetailsContainer/>
      <EditOrderDetails/>
    </div>
  );
  }
export default App;