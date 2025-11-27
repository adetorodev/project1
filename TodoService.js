import { Todo } from "./TodoModel.js"

// get all Todos
export const getTodos = async () => {
  const todos =  await Todo.find()
  return todos
}

// Get TODO by ID
export const getTodosById = async (id) => {
  if (!id) return "Id is required"
  const todos = await Todo.findById({"_id": id})
  return todos
}

// Create TODO
export const createTodo = async (data) => {
  if (!data.title) {
    return "Title is required"
  }
  const todo = new Todo({ title: data.title })
  const saveTodo = await todo.save()
  return saveTodo
}

// // PUT Replacement
// export const replaceTdods = (id, data) =>{

// }

// Patch - Partial Update
// modify todo
export const updateTodos = async (id, data) => {
  if (!id) return "Id is required"
  return await Todo.findByIdAndUpdate({"_id": id}, data, { new: true })
}


// Delete TODO
export const deleteTodos = async (id) => {
  if (!id) return "Id is required"
  return await Todo.findByIdAndDelete({"_id": id})
}


// import fs from "fs";
// import path from "path";

// // resolve absolute path to todos.json
// const filePath = path.join(process.cwd(), "data", "todos.json");

// // Read todos from file
// const readTodos = () => {
//   const data = fs.readFileSync(filePath, "utf-8");  // read file
//   return JSON.parse(data);                          // parse JSON
// };

// // Save todos to file
// const saveTodos = (todos) => {
//   fs.writeFileSync(filePath, JSON.stringify(todos, null, 2)); // overwrite file
// };

// // === CRUD OPERATIONS ===

// // Get all todos
// export const getTodos = () => {
//   return readTodos();
// };

// // Get single todo
// export const getTodoById = (id) => {
//   return readTodos().find((t) => t.id === id);
// };

// // Create new todo
// export const createTodo = (data) => {
//   const todos = readTodos();
//   const newTodo = {
//     id: Date.now().toString(),
//     title: data.title,
//     completed: false,
//   };
//   todos.push(newTodo);
//   saveTodos(todos);
//   return newTodo;
// };

// // Replace entire todo
// export const replaceTodo = (id, data) => {
//   const todos = readTodos();
//   const index = todos.findIndex((t) => t.id === id);
//   if (index === -1) return null;

//   todos[index] = { id, title: data.title, completed: data.completed };
//   saveTodos(todos);
//   return todos[index];
// };

// // Partial update
// export const updateTodo = (id, data) => {
//   const todos = readTodos();
//   const todo = todos.find((t) => t.id === id);
//   if (!todo) return null;

//   if (data.title !== undefined) todo.title = data.title;
//   if (data.completed !== undefined) todo.completed = data.completed;

//   saveTodos(todos);
//   return todo;
// };

// // Delete
// export const deleteTodo = (id) => {
//   const todos = readTodos();
//   const filtered = todos.filter((t) => t.id !== id);

//   if (filtered.length === todos.length) return false; // no deletion

//   saveTodos(filtered);
//   return true;
// };