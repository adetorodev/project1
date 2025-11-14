const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Fetch and display todos on load
async function loadTodos() {
  const res = await fetch("/api/todos");
  const todos = await res.json();
  renderTodos(todos);
}

function renderTodos(todos) {
  todoList.innerHTML = ""; // clear UI

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo";

    div.innerHTML = `
      <span>${todo.title}</span>
      <div>
        <button onclick="editTodo('${todo.id}', '${todo.title}')">Edit</button>
        <button onclick="deleteTodo('${todo.id}')">Delete</button>
      </div>
    `;

    todoList.appendChild(div);
  });
}

// Add new todo
addBtn.addEventListener("click", async () => {
  const title = todoInput.value.trim();
  if (!title) return alert("Todo cannot be empty");

  await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  todoInput.value = "";
  loadTodos();
});

// Delete todo
async function deleteTodo(id) {
  await fetch(`/api/todos/${id}`, { method: "DELETE" });
  loadTodos();
}

// Edit todo
async function editTodo(id, oldTitle) {
  const newTitle = prompt("Edit todo:", oldTitle);
  if (!newTitle) return;

  await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle }),
  });

  loadTodos();
}

// Load todos initially
loadTodos();
