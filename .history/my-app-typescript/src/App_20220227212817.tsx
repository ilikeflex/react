import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';


function App() {

//moving to useState
//const todos:Todo[] = [new Todo('Learn React'), new Todo('Learn TypeScript')];

const [ todos , setTodos ] = useState([new Todo('Learn React'), new Todo('Learn TypeScript')]);

const addTodoHandler = (todoText: string) => {
  console.log(`todoText=${todoText}`);
  const newTodo = new Todo(todoText);


  setTodos((prevState) => {
    
    /* Case:1 this works. concat returns new array */
    return prevState.concat(newTodo);
    
    /*Case 2: this will work -> [] braces should be used. New Array is being created*/
    /*let result = [...prevState, newTodo];
    return result;
    */

    /* Case 3: this does not works -> New Array is not returned */
    //prevState.push(newTodo);
    //return prevState;

    /*Case 4: this does not work -> Beecause {} braces are used. {} add as a property */
    /*let result = { ...prevState, newTodo };
    return result;
    */

  });
}

const removeTodoHandler = (todoId: string) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todoId !== todo.id);
    //return prevTodos.filter(todo => todo.id !== todoId);
  });
};


  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>

  );
}


/*
function App() {

  return (
    <div>
      <Todos items={[new Todo('Learn React'), new Todo('Learn TypeScript')]} />
    </div>

  );
}
*/

/*
function App() {
  return (
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
    </div>
  );
}
*/
export default App;
