document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //locate form 
const form = document.getElementById("create-task-form");
// add event listener for submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = document.getElementById("new-task-description").value;

  buildToDo(task);
});

function buildToDo(task) {
  const taskList = document.getElementById("tasks");
// new list item
  const li = document.createElement("li");

  li.textContent = task;
// add to we page
  taskList.appendChild(li);
}
});
