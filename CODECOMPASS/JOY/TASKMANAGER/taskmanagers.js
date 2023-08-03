document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const plannedTasksList = document.getElementById("plannedTasksList");
    const doneTasksList = document.getElementById("doneTasksList");
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const taskItem = createTaskItem(taskText);
        plannedTasksList.appendChild(taskItem);
        taskInput.value = "";
      }
    });
  
    function createTaskItem(text) {
      const taskItem = document.createElement("li");
      taskItem.innerText = text;
      const deleteIcon = document.createElement("span");
      deleteIcon.classList.add("delete-icon");
      deleteIcon.innerHTML = "&#10006;"; 
      taskItem.appendChild(deleteIcon);
      deleteIcon.addEventListener("click", () => {
        taskItem.remove();
      });
  
      const moveToDoneIcon = document.createElement("span");
      moveToDoneIcon.classList.add("delete-icon");
      moveToDoneIcon.innerHTML = "&#10003;"; 
      taskItem.appendChild(moveToDoneIcon);
      moveToDoneIcon.addEventListener("click", () => {
        moveToDoneTasks(taskItem);
      });
  
      return taskItem;
    }
  
    function moveToDoneTasks(taskItem) {
      plannedTasksList.removeChild(taskItem);
      doneTasksList.appendChild(taskItem);
    }
  });


document.querySelector(".add-course-btn").addEventListener("click", function () {
    const textarea = this.nextElementSibling;
    textarea.style.display = textarea.style.display === "none" ? "block" : "none";
    textarea.focus();
  });
  
  document.querySelector(".course-textarea").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const courseName = this.value.trim();
      if (courseName !== "") {
        const courseItem = createCourseItem(courseName);
        document.querySelector(".active-courses").appendChild(courseItem);
        this.value = "";
        this.style.display = "none";
      }
    }
  });
  
  function createCourseItem(courseName) {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course-item");
    const courseTitle = document.createElement("span");
    courseTitle.innerText = courseName;
    const checkIcon = document.createElement("span");
    checkIcon.classList.add("check-course-btn");
    checkIcon.innerHTML = "✓";
    checkIcon.addEventListener("click", () => {
      moveToCompletedCourses(courseItem);
    });
  
    courseItem.appendChild(courseTitle);
    courseItem.appendChild(checkIcon);
  
    return courseItem;
  }
  
  function moveToCompletedCourses(courseItem) {
    document.querySelector(".completed-courses").appendChild(courseItem);
  }
  
  document.getElementById("saveLearningGoalBtn").addEventListener("click", function () {
    const learningGoalInput = document.getElementById("learningGoalInput");
    const learningGoal = learningGoalInput.value;
    
  });
  
  
  document.getElementById("editLearningGoalBtn").addEventListener("click", function () {
    const learningGoalInput = document.getElementById("learningGoalInput");
    learningGoalInput.disabled = false;
    learningGoalInput.focus();
  });
  

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addStepBtn").addEventListener("click", () => {
      const stepInput = document.getElementById("stepInput");
      const stepText = stepInput.value.trim();
  
      if (stepText !== "") {
        const stepItem = createStepItem(stepText);
        document.getElementById("roadmapList").appendChild(stepItem);
        stepInput.value = "";
      }
    });
  
    function createStepItem(stepText) {
      const stepItem = document.createElement("li");
      stepItem.innerText = stepText;
      stepItem.setAttribute("draggable", "true");
  
      const deleteIcon = document.createElement("span");
      deleteIcon.classList.add("delete-icon");
      deleteIcon.innerHTML = "&#10006;";
      deleteIcon.addEventListener("click", () => {
        stepItem.remove();
      });
  
      stepItem.appendChild(deleteIcon);
  
      return stepItem;
    }
  });
  