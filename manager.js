function createProject() {
    const projectName = document.getElementById("project-name").value;
    const projectDescription = document.getElementById("project-description").value;
    const taskName = document.getElementById("task-name").value;
    const taskDescription = document.getElementById("task-description").value;
    const taskDeadline = document.getElementById("task-deadline").value;
    const taskPriority = document.getElementById("task-priority").value;
    const teamMember = document.getElementById("member-name").value;
  
    const projectData = {
      name: projectName,
      description: projectDescription,
      tasks: [{
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
        priority: taskPriority,
        assignedTo: teamMember,
        status: "To Do"
      }]
    };
  
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
  
    existingProjects.push(projectData);
  
    localStorage.setItem("projects", JSON.stringify(existingProjects));
  
    alert("Project and task created successfully!");

    //clearing the form
    document.getElementById("project-name").value = "";
    document.getElementById("project-description").value = "";
    document.getElementById("task-name").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-deadline").value = "";
    document.getElementById("task-priority").value = "low";
    document.getElementById("team-members").selectedIndex = -1;
  }
  