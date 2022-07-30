const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "todos";

function handleToDoSumbit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };

  toDoInput.value = "";
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}
function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  const btn = document.createElement("span");

  span.innerText = newToDoObj.text;
  btn.className = "material-symbols-outlined";
  btn.innerText = "check_circle";
  btn.classList.add("todo-list__button");
  btn.addEventListener("click", deleteToDo);
  li.appendChild(btn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentNode;

  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOS_KEY);

toDoForm.addEventListener("submit", handleToDoSumbit);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
