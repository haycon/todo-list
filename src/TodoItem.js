import React from 'react';

function TodoItem(props) {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={props.checked}
        onChange={props.handleChange}
      ></input>
      <p>{props.text}</p>
    </div>
  );
}

export default TodoItem;
