import React, {useState} from 'react';
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export function DynamicColsGrid() {

    // set to default data
    const [rowData, setRowData] = useState();
    const [colDefs, setColDefs] = useState([]);

    const url = 'https://swapi.dev/api/people/';

    // swapi.dev requires a little extra processing to process the response since it needs a content type header
    // and the json is an object but we are only interested in the results array in the object.
    React.useEffect(() => {
        fetch(url,{ 
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then(result => result.json())
            .then(data =>{
                const keys = Object.keys(data.results[0])
                let jsonColDefs = keys.map(key =>{ return {field : key};});
                setColDefs(jsonColDefs)
                setRowData(data.results)
            } )
    }, []);

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>   
           <AgGridReact
                defaultColDef={{sortable: true, filter: true }}
                pagination={true}
                rowData={rowData}
                columnDefs={colDefs}>
           </AgGridReact>
       </div>
   )

};

