import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const App = () => {
   
  const [name, setName] = useState('');
  const prevName = useRef('');
  const [loading, isLoading] = useState(false);

  useEffect(()=>{
    prevName.current = name;
  }
  ,[name])

  useEffect(()=>{
    console.log(`loading value=${loading}`)
  }
  ,[loading])

   const [rowData] = useState([
       {make: "Toyota", model: "Celica", price: 35000},
       {make: "Ford", model: "Mondeo", price: 32000},
       {make: "Porsche", model: "Boxster", price: 72000}
   ]);
   
   const [columnDefs] = useState([
       { field: 'make' },
       { field: 'model' },
       { field: 'price' }
   ])

   return (
    <>
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>

       <input value={name} onChange={(e => setName(e.target.value))}/>
       <div>My name is removed and it used to be {prevName.current}</div>
        
       {/* <button onClick={(e => isLoading(loading => !loading))}>Click Me</button> */}
    </>
   );
};
export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/