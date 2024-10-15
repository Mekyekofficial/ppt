import React from 'react';
import TodoListStyles from './css/TodoList.module.css';

const TodoList = () => {
  return (
    <div className={TodoListStyles["todo-list"]}>
      <button className={TodoListStyles["add-todo-btn"]}><span>+</span><br /> Add <br />ToDo List</button>
    </div>
  );
};

export default TodoList;
