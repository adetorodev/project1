
import * as todoService from "./TodoService.js"

export const fetchTodos = async (req, res) => {
    try {
        const todos = await todoService.getTodos()
        return res.status(200).json(todos)
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch todos" })
    }
}

export const fetchTodoById = async (req, res) => {
    try {
        const todo = await todoService.getTodosById(req.params.id)

        if (!todo) return res.status(404).json({ error: "Todo not found" })

        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch todo" })
    }
}

export const addTodos = async (req, res) => {
    if (!req.body.title) {
        res.status(400).json({ error: "Title is required" })
        return
    }

    try {
        const newTodo = await todoService.createTodo(req.body)
        return res.status(201).json(newTodo)
    } catch (error) {
        return res.status(500).json({ error: "Failed to create todo" })
    }
}

// export const replaceTodos = (req, res) => {
//     const updatedTodo = todoService.replaceTodo(req.params.id, req.body)

//     if(!updatedTodo) return res.status(404).json({error: "Todo not found"})

//     res.status(200).json(updatedTodo)
// }


export const updateTodos = async (req, res) => {
    try {
        const updatedTodo = await todoService.updateTodos(req.params.id, req.body)

        if (!updatedTodo) return res.status(404).json({ error: "Todo not found" })

        return res.status(200).json(updatedTodo)
    } catch (error) {
        return res.status(500).json({ error: "Failed to update todo" })
    }
}

export const removeTodos = async (req, res) => {
    try {
        const isDeleted = await todoService.deleteTodos(req.params.id)

        if (!isDeleted) return res.status(404).json({ error: "Todo not found" })

        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete todo" })
    }
}