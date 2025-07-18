function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.onclick = function () {
    li.classList.toggle("completed");
  };

  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = ""; 
}