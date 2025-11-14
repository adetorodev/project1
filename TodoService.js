

let todos = [] // In-memory array to store todos

export const getTodos = () => {
    return todos
}

export const getTodosById = (id) => {
    return todos.find((t) => t.id === id)
}

export const createTodo = (data) => {
    const newTodo = {
        id: Date.now().toString(),
        title: data.title,
        completed: false
    }
    todos.push(newTodo)

    return newTodo
}

// PUT Replacement
export const replaceTdods = (id, data) =>{
    const index = todos.findIndex((t) => t.id === id)

    if(index === -1) return null

    todos[index] = {
        id: id,
        title: data.title,
        completed: data.completed
    }

    return todos[index];
}

// Patch - Partial Update
export const updateTodos = (id, data) => {
    const todo = todos.find((t) => t.id === id)

    if(!todo) return null

    if( data.title !== undefined) todo.title = data.title;
    if(data.completed !== undefined) todo.completed = data.completed;

    return todo;
}

export const deleteTodos = (id) => {
    const index = todos.findIndex((t) => t.id === id)

    if(index === -1) return null

    todos.splice(index, 1)

    return true
}