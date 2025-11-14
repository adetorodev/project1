import fs from "fs";
import path from "path";

// resolve absolute path to todos.json
const filePath = path.join(process.cwd(), "data", "todos.json");

// Read todos from file
const readTodos = () => {
  const data = fs.readFileSync(filePath, "utf-8");  // read file
  return JSON.parse(data);                          // parse JSON
};

// Save todos to file
const saveTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2)); // overwrite file
};

// === CRUD OPERATIONS ===

// Get all todos
export const getTodos = () => {
  return readTodos();
};

// Get single todo
export const getTodoById = (id) => {
  return readTodos().find((t) => t.id === id);
};

// Create new todo
export const createTodo = (data) => {
  const todos = readTodos();
  const newTodo = {
    id: Date.now().toString(),
    title: data.title,
    completed: false,
  };
  todos.push(newTodo);
  saveTodos(todos);
  return newTodo;
};

// Replace entire todo
export const replaceTodo = (id, data) => {
  const todos = readTodos();
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return null;

  todos[index] = { id, title: data.title, completed: data.completed };
  saveTodos(todos);
  return todos[index];
};

// Partial update
export const updateTodo = (id, data) => {
  const todos = readTodos();
  const todo = todos.find((t) => t.id === id);
  if (!todo) return null;

  if (data.title !== undefined) todo.title = data.title;
  if (data.completed !== undefined) todo.completed = data.completed;

  saveTodos(todos);
  return todo;
};

// Delete
export const deleteTodo = (id) => {
  const todos = readTodos();
  const filtered = todos.filter((t) => t.id !== id);

  if (filtered.length === todos.length) return false; // no deletion

  saveTodos(filtered);
  return true;
};

// let todos = [] // In-memory array to store todos

// export const getTodos = () => {
//     return todos
// }

// export const getTodosById = (id) => {
//     return todos.find((t) => t.id === id)
// }

// export const createTodo = (data) => {
//     const newTodo = {
//         id: Date.now().toString(),
//         title: data.title,
//         completed: false
//     }
//     todos.push(newTodo)

//     return newTodo
// }

// // PUT Replacement
// export const replaceTdods = (id, data) =>{
//     const index = todos.findIndex((t) => t.id === id)

//     if(index === -1) return null

//     todos[index] = {
//         id: id,
//         title: data.title,
//         completed: data.completed
//     }

//     return todos[index];
// }

// // Patch - Partial Update
// export const updateTodos = (id, data) => {
//     const todo = todos.find((t) => t.id === id)

//     if(!todo) return null

//     if( data.title !== undefined) todo.title = data.title;
//     if(data.completed !== undefined) todo.completed = data.completed;

//     return todo;
// }

// export const deleteTodos = (id) => {
//     const index = todos.findIndex((t) => t.id === id)

//     if(index === -1) return null

//     todos.splice(index, 1)

//     return true
// }