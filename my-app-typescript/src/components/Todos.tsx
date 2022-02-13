import React from 'react';
import Todo from '../models/Todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css'

const Todos: React.FC<{items: Todo[], onRemoveTodo: (id: string) => void}> = (props) => {
  return (
      <ul className='{classes.todos}'>
          {props.items.map((todoitem:Todo) => ( // Notice circular brackets and no return statements
              <TodoItem  item={todoitem} onRemoveTodo={props.onRemoveTodo.bind(null, todoitem.id)}/>
          ))}
          
          <hr/>
          
          {props.items.map((todoitem:Todo) => { // Notice curly brackets and has return statements
              return <TodoItem  item={todoitem} onRemoveTodo={props.onRemoveTodo.bind(null, todoitem.id)}/> 
          })}
      </ul>
  );
};
/*
const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
      <ul>
          {props.items.map((todoitem:Todo) => {
              return <TodoItem  item={todoitem}/> // Notice Return Statement. It is inside {} braces. 
          })}
          
          <hr/>
          
          {props.items.map((todoitem:Todo) => {
              return <TodoItem  item={todoitem}/>   // Notice Return Statement. It is inside {} braces. 
          })}
      </ul>
  );
};
*/

/*
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {props.items.map((todoitem:Todo) => {
                return <TodoItem  item={todoitem}/>
            })}
        </ul>
    );
};
*/

/*
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
               <li key={item.id}>{item.text}</li>     
            ))}
        </ul>
    );
};
*/

/*
const Todos: React.FC<{ items: string[] }> = (props) => {
    return (
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };
*/
export default Todos;