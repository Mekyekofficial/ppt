import React, { useState } from 'react';
import TodoListStyles from './css/TodoList.module.css';
import { Plus, Check, X } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={TodoListStyles.todoList}>
      <div className={TodoListStyles.todoHeader}>
        <h2>Todo List</h2>
        <form onSubmit={handleAddTodo} className={TodoListStyles.addTodoForm}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className={TodoListStyles.todoInput}
          />
          <button type="submit" className={TodoListStyles.addButton}>
            <Plus size={20} />
          </button>
        </form>
      </div>

      <div className={TodoListStyles.todoItems}>
        {todos.length === 0 ? (
          <div className={TodoListStyles.emptyState}>
            <p>No tasks yet. Add your first task!</p>
          </div>
        ) : (
          todos.map(todo => (
            <div key={todo.id} className={`${TodoListStyles.todoItem} ${todo.completed ? TodoListStyles.completed : ''}`}>
              <button 
                className={TodoListStyles.checkButton}
                onClick={() => toggleTodo(todo.id)}
              >
                <Check size={16} />
              </button>
              <span className={TodoListStyles.todoText}>{todo.text}</span>
              <button 
                className={TodoListStyles.deleteButton}
                onClick={() => deleteTodo(todo.id)}
              >
                <X size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
