# Getting Started with the TO-do list app 

Click on this link to open the application: https://tim0308.github.io/To-do-list/

### `Add event: 📝`

1) Type the task you need to complete
2) Press the button 📝 or enter key to add an new task
3) Use the calendar entry to set a deadline for your task
4) <div className="add-date">
            <input 
                type="date" 
                value={todo.date || ''} 
                onChange={handleDateChange} 
                className="date-input"
            />
        </div>

### `Edit: ✏️`

4) Edit the event you added before by clicking ✏️  and save it with 💾 

### `Save: 💾`
5) Save your changes with 💾

### `Tick: ✅`
6) Click the tick box to mark your completed task

### `Bin: 🗑️`
7) Delete the task with 🗑️
