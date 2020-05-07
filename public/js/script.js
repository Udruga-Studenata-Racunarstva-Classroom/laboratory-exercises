const todos = document.getElementById("todos");
const addBtn = document.querySelector(".add-todo-btn");
const titleText = document.querySelector(".todo-title-text");

titleText.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    todos.appendChild(createTodoItem(titleText.value));
    titleText.value = "";
  }
})

addBtn.addEventListener("click", () => {
  todos.appendChild(createTodoItem(titleText.value));
  titleText.value = "";
})


const createTodoItem = (titleString) => {
  const title = document.createElement("h4");
  title.innerHTML = titleString;
  title.className = "col-1-of-3";
  
  const text = document.createElement("textarea");
  text.className = "col-2-of-3";

  const removeBtn = document.createElement("input");
  removeBtn.type = "button";
  removeBtn.className = "remove-todo-btn col-1-of-3";
  removeBtn.value = "X"
  removeBtn.addEventListener("click", () => {
    removeBtn.parentNode.parentNode.parentNode.removeChild(removeBtn.parentNode.parentNode);
  })

  const content = document.createElement("div");
  content.className = "col-2-of-3 todo-content row";
  content.appendChild(text);
  content.appendChild(removeBtn);
  
  const newItem = document.createElement("div");
  newItem.className = "todo-element row"
  newItem.appendChild(title);
  newItem.appendChild(content);
  return newItem;
}

