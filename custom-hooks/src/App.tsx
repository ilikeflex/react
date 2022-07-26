import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCustomHooks } from './component/learnCustomHook';
import MovieList from './component/MovieList';

function App() {

  // return type variable from useCustomHooks is { movies }
  const { movies } =  useCustomHooks();
  
  //if this default is removed then lot of issues in variable declaration.
  let content = <p>No Movies Found</p>;

  if(movies.length>0)
    content = (
    <div>
      <MovieList movies={movies}/>;
      </div>
    );

  return (
    <div className="App">
      <div>
        Using Custom Hooks and Displaying Data
      </div>
      
      {content}

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
