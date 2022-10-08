import React, { Children } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayGround from './component/PlayGround';
import { PlayGroundWebsockets } from './component/PlayGroundWebsockets';

function App() {
  return (
    <div className="App">
      
      <PlayGround title='Hello World'/>
      
      <PlayGroundWebsockets/>
      
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
    </div>
  );
}

export default App;
