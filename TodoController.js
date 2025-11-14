
import * as todoService from "./TodoService.js"

export const fetchTodos = (req, res) => {
    const todos = todoService.getTodos()
    res.status(200).json(todos)
}

export const fetchTodoById = (req, res) => {
    const todo = todoService.getTodoById(req.params.id)

    if(!todo) return res. status(404).json({error: "Todo not found"})

        res.status(200).json(todo)
}

export const addTodos = (req, res) => {
    if(!req.body.title){
        res.status(400).json({error: "Title is required"})
        return
    }

    const newTodo = todoService.createTodo(req.body)
    res.status(201).json(newTodo)
}

export const replaceTodos = (req, res) => {
    const updatedTodo = todoService.replaceTodo(req.params.id, req.body)

    if(!updatedTodo) return res.status(404).json({error: "Todo not found"})

    res.status(200).json(updatedTodo)
}


export const updateTodos = (req, res) => {
    const updatedTodo = todoService.updateTodo(req.params.id, req.body)

    if(!updatedTodo) return res.status(404).json({error: "Todo not found"})

    res.status(200).json(updatedTodo)
}

export const removeTodos = (req, res) => {
    const isDeleted = todoService.deleteTodo(req.params.id)

    if(!isDeleted) return res.status(404).json({error: "Todo not found"})

    res.status(204).send()
}