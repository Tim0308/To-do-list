import React from 'react';
import './TodoItem.css'; // Import the CSS file

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <li className={todo.completed ? 'completed' : ''}>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleComplete(todo.id)} 
        />
        <span>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    );
}

export default TodoItem;