import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; 
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';

import 'ag-grid-enterprise';

//React 18
/* 
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';  
*/
//end React 18

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import groupRowInnerRenderer from './groupRowInnerRenderer';

const App = () => {
  
  const [rowData, setRowData] = useState();

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);

  const defaultColDef = useMemo( ()=> ( {
    resizable: true, 
  }), []);  

  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete'},
    { field: 'age', headerName: 'Age12' },
    { field: 'country' , rowGroup: true  },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' }
  ]);

  const gridOptions:GridOptions = {
    suppressMovableColumns: true,
    suppressContextMenu: true,
    enableRangeSelection: true,
    suppressRowTransform: true,
    columnDefs: [...columnDefs],
    defaultColDef,
    singleClickEdit: true,
    groupUseEntireRow: true,
    animateRows: true,
    // q: I want to use a custom group row renderer, but I don't want to have to re-implement the default group row renderer, how can I do this?
    // a: You can use the gridOptions.groupRowRendererFramework property to specify a custom group row renderer.
    // q: Yes, i am using groupRowRendererFramework, but I want to use the default group row renderer and just add some extra functionality to it.
    // q: When i use groupRowRendererFramework, then all the rows display incorrect result. How can I fix this?
    // q: how to wrap defualt group row renderer?
    // q: Tell me the code for group row renderer ?
    // q: How to use groupRowRendererFramework?
    // q: How to use groupRowRendererFramework in react?
    // 
    //groupRowRendererFramework: groupRowInnerRenderer
  }

  return (
    <>
       <div className="ag-theme-alpine" style={{height: 700, width: '100%'}}>
           <AgGridReact
               animateRows={true} 
               rowData={rowData}
               gridOptions={gridOptions}
               autoGroupColumnDef={{ minWidth: 200 }}
               >
           </AgGridReact>
       </div>
    </>
   );
};
export default App;


/*
import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

//React 18
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
//end React 18

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

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
        
       <button onClick={(e => isLoading(loading => !loading))}>Click Me</button>
    </>
   );
};
export default App;
*/

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