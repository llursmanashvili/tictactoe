const todoEl = document.getElementById("todos");
const addEl = document.getElementById("add");
const textEl = document.getElementById("todo");
const Todo = [];
addEl.addEventListener("click", function () {
  Todo.push(textEl.value);
  renderTodos();
});
function renderTodos() {
  let paraitem = "";
  for (let i = 0; i < Todo.length; i++) {
    paraitem += "<p>" + Todo[i] + "</p>";
  }
  todoEl.innerHTML = paraitem;
}
