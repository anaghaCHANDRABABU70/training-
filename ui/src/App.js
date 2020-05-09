import React from 'react';
import ViewOrderDetail from './component/viewOrderDetail';
import ViewOrderDetailsContainer from './container/viewOrderDetailContainer';
function App() {
    return (
    <div className="App">
      <ViewOrderDetail/>
      <ViewOrderDetailsContainer/>
    </div>
  );
  }
export default App;