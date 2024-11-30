var tasks = [];

document.getElementById("add-btn").onclick = function () {
  var taskInput = document.getElementById("task-input");
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push(taskText);
  taskInput.value = "";
  renderTasks();
};

function renderTasks() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var taskItem = document.createElement("div");
    taskItem.className = "todo-item";

    var taskText = document.createElement("span");
    taskText.textContent = tasks[i];

    var buttonContainer = document.createElement("div");
    buttonContainer.className = "todo-buttons";

    var editButton = document.createElement("button");
    editButton.textContent = "EDIT";
    editButton.className = "edit-btn";
    editButton.onclick = (function (index) {
      return function () {
        editTask(index);
      };
    })(i);

    var completedButton = document.createElement("button");
    completedButton.textContent = "COMPLETED";
    completedButton.className = "completed-btn";
    completedButton.onclick = (function (index) {
      return function () {
        markCompleted(index);
      };
    })(i);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = (function (index) {
      return function () {
        deleteTask(index);
      };
    })(i);

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(completedButton);
    buttonContainer.appendChild(deleteButton);

    taskItem.appendChild(taskText);
    taskItem.appendChild(buttonContainer);

    taskList.appendChild(taskItem);
  }
}

function editTask(index) {
  var newTask = prompt("Edit your task:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

function markCompleted(index) {
  alert("Task Completed: " + tasks[index]);
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
