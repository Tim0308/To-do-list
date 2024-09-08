import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, addTodo, toggleComplete, deleteTodo, addDate, editTodo }) {
    const [newTodoText, setNewTodoText] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodoText.trim() !== '') {
            addTodo(newTodoText);
            setNewTodoText('');
        }
    };

    return (
        <div className="todo-list">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add a new todo..."
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)} 
                />
                <button type="submit">📝</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        toggleComplete={toggleComplete} 
                        deleteTodo={deleteTodo} 
                        addDate={addDate}
                        editTodo={editTodo}  // Pass the editTodo function to TodoItem
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

