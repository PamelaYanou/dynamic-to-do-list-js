document.addEventListener("DOMContentLoaded", () => {
  let addButton = document.getElementById("add-task-btn");
  let taskInput = document.getElementById("task-input");
  let taskList = document.getElementById("task-list");
  loadTasks();
  addButton.addEventListener("click", () => addTask()); 
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

    function loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); 
  }

  
  function addTask(taskText = taskInput.value.trim(), save = true) {
       if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    let taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.classList.add("task-item"); 
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");   
    removeButton.onclick = function () {
      taskList.removeChild(taskItem);
      removeTaskFromLocalStorage(taskText);
    };
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
    if (save) {
      saveTaskToLocalStorage(taskText);
    }
  }
  function saveTaskToLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
  function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    let updatedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
});
