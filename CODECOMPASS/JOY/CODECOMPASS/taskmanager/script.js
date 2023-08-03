document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${task}</span>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            `;
            taskList.appendChild(listItem);
        });
    }

    function addTask() {
        const newTask = taskInput.value.trim();
        if (newTask !== "") {
            tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            renderTasks();
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }

    function editTask(index) {
        const editedTask = prompt("Edit task:", tasks[index]);
        if (editedTask !== null && editedTask.trim() !== "") {
            tasks[index] = editedTask.trim();
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        }
    }
    addTaskBtn.addEventListener("click", addTask);
    renderTasks();
});
