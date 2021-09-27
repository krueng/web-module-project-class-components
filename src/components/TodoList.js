// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    const handleClick = () => {
        props.handleClear();
    }

    return (
        <div className='todo-list'>
            {props.todotask.map(task => (
                <Todo handleToggle={props.handleToggle} key={task.id} todo={task}/>
            ))}
            <button onClick={handleClick} className='clear-btn'>
                Clear List
            </button>
        </div>
    );
};
export default TodoList;