import React, { useState } from 'react';

import { observable, action, makeAutoObservable, toJS, computed } from 'mobx';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { observer } from 'mobx-react-lite';

interface IEmployee {
  id: number;
  name: string;
}

class MyStore {
  private _gridData: IEmployee[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  
  private _isStoreChanged:boolean = false;

  constructor() {
    makeAutoObservable(this);
  }  

  public get gridData(): IEmployee[] {
    return this._gridData;
  }

  public set gridData(value: IEmployee[]) {
    this._gridData = value;
  }

  set isRecordsChanged(value:boolean) {
    this._isStoreChanged =  value;
  }

  get isRecordsChanged():boolean {
    return this._isStoreChanged;
  }

  updateRecord(id: number, newData: { name: string }) {
    const index = this.gridData.findIndex((record) => record.id === id);
    this.gridData[index] = { ...this.gridData[index], ...newData };
    this.isRecordsChanged = true;    
  }

  deleteRecord(id: number) {
    this.isRecordsChanged = true;
    this.gridData = this.gridData.filter((record) => record.id !== id);
  }
}

//global store
const store = new MyStore();

const MyComponent = observer(() => {
  const [colDefs, setColDefs] = useState([{ field: 'id' }, { field: 'name' }]);

  const { gridData } = store;

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 200, width: 600 }}>
        <AgGridReact rowData={toJS(gridData)} columnDefs={colDefs}></AgGridReact>
      </div>
      <button onClick={() => store.updateRecord(1, { name: 'Updated John' })}>
        Update record
      </button>
      <button onClick={() => store.deleteRecord(2)}>Delete record</button>
    </div>
  );
})


export const StoreObserver = observer(() => {

  console.log('store.isRecordsChanged', store.isRecordsChanged);

  const buttonClick = () => {
    alert('Store Clicked');
  }

  return (
    <div>
      <button onClick={buttonClick} disabled={!store.isRecordsChanged}>Enable When Grid Change</button>
    </div>
  );
})



export { MyComponent as SampleGrid };