function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("memberTasks")) || [];

  if (tasks.length === 0) {
    tasks = [
      {
        name: "Design Homepage",
        description: "Create homepage UI in Figma.",
        deadline: "2025-04-25",
        priority: "High",
        status: "To Do"
      },
      {
        name: "Write Blog Post",
        description: "Publish article on new feature.",
        deadline: "2025-04-28",
        priority: "Medium",
        status: "TO Do"
      }
    ];
    localStorage.setItem("memberTasks", JSON.stringify(tasks));
  }

  displayTasks(tasks);
}
function displayTasks(tasks) {
  const taskList = document.getElementById("task-list");

  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]; 

    const li = document.createElement("li");

    li.innerHTML = `
      <b>${task.name}</b>
      <br>
      ${task.description}
      <br>
      Deadline: ${task.deadline} 
      <br>
      Priority: ${task.priority}
       <br>
      Status: ${task.status}
    `;

    taskList.appendChild(li);
  }
}

function addTaskAsManager() {
  const name = prompt("Task Name:");
  const description = prompt("Task Description:");
  const deadline = prompt("Task Deadline (YYYY-MM-DD):");
  const priority = prompt("Priority (Low/Medium/High):");
  const status = "To Do";

  if (!name || !description || !deadline || !priority) {
    alert("All fields are required.");
    return;
  }

  const tasks = JSON.parse(localStorage.getItem("memberTasks")) || [];
  tasks.push({ name, description, deadline, priority, status });
  localStorage.setItem("memberTasks", JSON.stringify(tasks));
  loadTasks();
}

// Optional: Show "Add Task" button if manager
function checkIfManager() {
  const isManager = localStorage.getItem("currentUserRole") === "manager";

  if (isManager) {
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Task (Manager Only)";
    addBtn.onclick = addTaskAsManager;
    document.body.insertBefore(addBtn, document.getElementById("task-section"));
  }
}

// On page load
window.onload = function () {
  loadTasks();
  checkIfManager();
};
