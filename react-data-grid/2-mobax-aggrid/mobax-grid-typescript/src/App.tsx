import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CarsGrid } from './components/CarsGrid';
import { CarsGridMobax } from './components/CarsGridMobax';
import { GridRecords } from './mobox/GridRecords';
import { SampleGrid, StoreObserver } from './components/SampleGrid';

const gridRecords:GridRecords = new GridRecords();

function App() {
  //const gridRecords:GridRecords = new GridRecords();

  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div> */
      <div>
        <CarsGrid></CarsGrid>
        <CarsGridMobax records={gridRecords}></CarsGridMobax>
        <SampleGrid/>
        <StoreObserver/>
      </div>
    
  );
}

export default App;