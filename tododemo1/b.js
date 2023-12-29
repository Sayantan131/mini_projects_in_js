function addTask() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');

    const taskText = taskInput.value;
    const dateText = dateInput.value;

    if (taskText.trim() === '' || dateText.trim() === '') {
        alert('Please enter both task and date.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('div');
    taskItem.className = 'task';
    taskItem.innerHTML = `
        <input type="checkbox">
        <div>${taskText}</div>
        <div>${dateText}</div>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(taskItem);

    // Clear input fields after adding task
    taskInput.value = '';
}

function removeTask(button) {
    const taskItem = button.parentNode;
    const taskList = document.getElementById('task-list');
    taskList.removeChild(taskItem);
}

function filterTasksByDate() {
    const dateInput = document.getElementById('date');
    const dateText = dateInput.value;
    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        const taskDate = task.querySelector('div:nth-child(3)').textContent;
        task.style.display = taskDate === dateText ? 'flex' : 'none';
    });
}

document.getElementById('date').addEventListener('input', filterTasksByDate);