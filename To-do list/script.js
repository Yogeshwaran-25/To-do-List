function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    
    if (taskValue === '') return; // Do nothing if input is empty

    const taskList = document.getElementById('taskList');
    
    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;
    
    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function() {
        taskList.removeChild(listItem);
    };
    
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    
    // Clear input field
    taskInput.value = '';
}
