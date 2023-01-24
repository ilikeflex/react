import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { observer } from "mobx-react-lite";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { GridRecords, ICar } from '../mobox/GridRecords';

//store passed as property
export const CarsGridMobax = observer(({records}:{records:GridRecords}) => {

    const [colDefs, setColDefs] = useState([
        {field: 'make'},
        {field: 'model'},
        {field: 'price', editable: true},
    ]); 

    
    //Change the record in the gird.
    React.useEffect(() => {
            setTimeout(() => {
                console.log('New Record Inserted')
                const newRecord:ICar = { "make": "Porsche1", "model": "Boxter", "price": 7200011 };
                records.changeRecords(newRecord);                
            }, 5000);
    }, [records]);

   return (
       <div className="ag-theme-alpine" style={{height: 200, width: 600}}>   
           <h1>Yahoo</h1>
           <AgGridReact
           defaultColDef={{sortable: true, filter: true }}
           columnDefs={colDefs}
           pagination={true}
           rowData={records.list}/>
       </div>
   )

});