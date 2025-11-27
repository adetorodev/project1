import express from "express";
import { fetchTodos, fetchTodoById, addTodos, updateTodos, removeTodos } from "./TodoController.js";

const router = express.Router();


router.get("/", fetchTodos);        // GET all todos
router.get("/:id", fetchTodoById);      // GET single todo
router.post("/", addTodos);          // POST create new todo
// router.put("/:id", replaceTodos);    // PUT replace existing todo
router.patch("/:id", updateTodos);   // PATCH update part of todo
router.delete("/:id", removeTodos);  // DELETE todo

export default router;
