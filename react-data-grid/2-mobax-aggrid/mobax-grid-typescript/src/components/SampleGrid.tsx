import React, { useState } from 'react';

import { observable, action, makeAutoObservable, toJS } from 'mobx';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { observer } from 'mobx-react-lite';

interface IEmployee {
  id: number;
  name: string;
}

class MyStore {
  gridData: IEmployee[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  constructor() {
    makeAutoObservable(this, {
      gridData: observable,
      updateRecord: action,
      deleteRecord: action
    });
  }

  updateRecord(id: number, newData: { name: string }) {
    const index = this.gridData.findIndex((record) => record.id === id);
    console.log('Total Length=',this.gridData.length,'content',this.gridData);
    console.log('Before index=',index,'dataElement',this.gridData[index]);
    //this.gridData[index] = { ...this.gridData[index], ...newData };
    this.gridData[index] = { ...this.gridData[index], name: 'XX John' };
    console.log('After index=',index,'dataElement',this.gridData[index]);
    this.gridData[index] = { id: 1, name: 'XX John' }
    //this.gridData[index].name = 'XX John';
  }

  deleteRecord(id: number) {
    this.gridData = this.gridData.filter((record) => record.id !== id);
  }
}

const store = new MyStore();

const MyComponent = observer(() => {
  const [colDefs, setColDefs] = useState([{ field: 'id' }, { field: 'name' }]);

  const { gridData } = store;

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={toJS(gridData)} columnDefs={colDefs}></AgGridReact>
      </div>
      <button onClick={() => store.updateRecord(1, { name: 'Updated John' })}>
        Update record
      </button>
      <button onClick={() => store.deleteRecord(2)}>Delete record</button>
    </div>
  );
})

export { MyComponent as SampleGrid };
