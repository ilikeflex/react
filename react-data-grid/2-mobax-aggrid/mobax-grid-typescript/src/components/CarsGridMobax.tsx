import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { observer } from "mobx-react-lite";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { GridRecords, ICar } from '../mobox/GridRecords';

// Create Singleton entries for the data ad ColumnDefs

// const InitialRowData = [
//     {make: "Toyota", model: "Celica", price: 35000},
//     {make: "Ford", model: "Mondeo", price: 32000},
//     {make: "Porsche", model: "Boxter", price: 72000}
// ];

 //const gridRecords:GridRecords = new GridRecords();


export const CarsGridMobax = observer(({records}:{records:GridRecords}) => {
//export function CarsGridMobax () {    

    //console.log('Data gridRows', gridRows);

    // set to default data
    const [rowData, setRowData] = useState<ICar[]>();

    /* const gridOptions:GridOptions = {
        columnDefs: [
            {field: 'make'},
            {field: 'model'},
            {field: 'price', editable: true},
        ]
    }   */ 

    const [colDefs, setColDefs] = useState([
        {field: 'make'},
        {field: 'model'},
        {field: 'price', editable: true},
    ]); 

    // Uncomment this to see the changing column data in action
    /* React.useEffect(
         ()=> {
         const changeColsTimer = setTimeout(() =>{
             setColDefs([{field: 'make'},{field: 'model'}])
             },3000);
         return ()=>clearTimeout(changeColsTimer);
             }
    ,[]); */

    // load the data after the grid has been setup
    //[] means on first render so no need to memo the results at this point
    React.useEffect(() => {
        /* fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData)) */
            setRowData(records.list);
    }, [records]);

    //Change the record in the gird.
    React.useEffect(() => {
        /* fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData)) */
            setTimeout(() => {
                console.log('New Record Inserted')
                const newRecord:ICar = { "make": "Porsche1", "model": "Boxter", "price": 7200011 };
                records.changeRecords(newRecord);
                //setRowData(records.getRecords());
            }, 10000);
    }, [records]);

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>   
           <h1>Yahoo</h1>
           <AgGridReact
           defaultColDef={{sortable: true, filter: true }}
           columnDefs={colDefs}
           pagination={true}
           rowData={rowData}/>
       </div>
   )

});