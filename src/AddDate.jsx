import React, { useState } from 'react';
import './AddDate.css';


function AddDate({ todo, addDate }) {
    const handleDateChange = (e) => {
        addDate(todo.id, e.target.value);
    };

    return (
        <div className="add-date">
            <input 
                type="date" 
                value={todo.date || ''} 
                onChange={handleDateChange} 
                className="date-input"
            />
        </div>
    );
}

export default AddDate;

