import React from 'react';
import Sidebar from './Sidebar';



const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 static">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};


export default App;
