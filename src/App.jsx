import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    // Retrieve stored todos from localStorage when the app initializes
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });


  // Save todos to localStorage whenever the todos array changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addDate = (id, date) => {
    setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, date: date } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList 
        todos={todos} 
        addTodo={addTodo} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
        addDate={addDate} 
        editTodo={editTodo}  // New prop for editing
      />
    </div>
  );
}

export default App;

