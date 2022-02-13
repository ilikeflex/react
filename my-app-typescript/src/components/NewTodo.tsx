import React, { useRef } from 'react';
import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
  
    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
  
      const enteredText = todoTextInputRef.current!.value;
  
      if (enteredText.trim().length === 0) {
        // throw an error
        return;
      }
  
      props.onAddTodo(enteredText);
    };
  
    return (
      <form onSubmit={submitHandler} className={classes.newTodo}>
        <label htmlFor='text'>Todo text</label>
        <input type='text' id='text' ref={todoTextInputRef} />
        <button>Add Todo</button>
      </form>
    );
  };
  
/*
const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {

    const todotextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {

        console.log('1.0');
        event.preventDefault();
        console.log('2.0');
        const enteredText = todotextInputRef.current!.value;
        console.log('3.0');
        if(enteredText.trim().length==0){
            console.log('4.0');
            return;
        }
        console.log('5.0');
        props.onAddTodo(enteredText);
        console.log('6.0');
    }


    return (
        <form onSubmit={submitHandler}>
        <div>
            <div>
                <label htmlFor="todoText">Enter Text</label>
            </div>
            <div>
                <input type="text" id="todoText" ref={todotextInputRef}/>    
            </div>
            <div>
                <input type="button" value="Add Todos"/>
            </div>
        </div>
        </form>
    );
}
*/

export default NewTodo;