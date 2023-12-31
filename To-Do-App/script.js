const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById('list-container');
const dateInput = document.getElementById("dateInput");

function addTask() {

    if (inputBox.value === '') {
        alert("you have to enter something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let date = document.createElement("p");
        date.innerHTML = dateInput.value;
        li.appendChild(date);
        let dueDate = document.createElement("h4");
        dueDate.innerHTML = "Due Date: " + dueDateInput.value; // Display "Due Date:" for clarity
        li.appendChild(dueDate);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }

    inputBox.value = "";
    dateInput.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }

}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

function filterTasksByDate() {
    const dateText = dateInput.value;
    const tasks = document.querySelectorAll('#list-container li');

    tasks.forEach(task => {
        const taskDate = task.querySelector('p').textContent;
        task.style.display = taskDate === dateText ? 'flex' : 'none';
    });
}

document.getElementById('dateInput').addEventListener('input', filterTasksByDate);





