import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'; // Import the CSS file

function TodoList({ todos, addTodo, toggleComplete, deleteTodo }) {
    const [newTodoText, setNewTodoText] = React.useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (newTodoText.trim() !== '') {
        addTodo(newTodoText);
        setNewTodoText('');
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Add a new todo..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)} 
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleComplete={toggleComplete} 
              deleteTodo={deleteTodo} 
            />
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;