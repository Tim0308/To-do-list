import React, { useState } from 'react';
import AddDate from './AddDate';
import './TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo, addDate, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing) {
            editTodo(todo.id, newText); // Update the todo text
        }
        setIsEditing(!isEditing); // Toggle editing mode
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo.id)} 
            />
            {isEditing ? (
                <input 
                    type="text" 
                    value={newText} 
                    onChange={(e) => setNewText(e.target.value)} 
                />
            ) : (
                <span>{todo.text}</span>
            )}
            <AddDate todo={todo} addDate={addDate} />
            <button onClick={handleEdit}>{isEditing ? '💾': '✏️'}</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
        </li>
    );
}

export default TodoItem;



