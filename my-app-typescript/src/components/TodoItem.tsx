import React from 'react';
import Todo from '../models/Todo';
import classes from "./TodoItem.module.css";

const TodoItem: React.FC <{ item:Todo, onRemoveTodo: () => void }> = (props) => {

    /*
    const onRemoveClick = (event:MouseEventMouseEvent<HTMLLIElement, MouseEvent>) => {
    };
    */


    return (
        <li className={classes.item} key={props.item.id} onClick={props.onRemoveTodo}>{props.item.text}</li>  
   );
}

export default TodoItem;