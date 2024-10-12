document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.getElementById("add-task-btn");
  let taskInput = document.getElementById("task-input");
  let taskList = document.getElementById("task-list");

  function addTask() {
  let taskText = taskInput.value.trim();
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
    };
    taskItem.appendChild(removeButton);    
    taskList.appendChild(taskItem);  
    taskInput.value = "";
  }
   addButton.addEventListener("click", addTask); 
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
