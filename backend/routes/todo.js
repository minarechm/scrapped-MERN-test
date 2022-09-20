const express = require("express")
const { getTodos, getTodo, createTodo, deleteTodo, updateTodo } = require("../controllers/todoController")
const router = express.Router()

// GET ALL
router.get("/", getTodos)

// GET SINGLE
router.get("/:id", getTodo)

// POST NEW
router.post("/", createTodo)

// DELETE SINGLE
router.delete("/:id", deleteTodo)

// UPDATE SINGLE
router.patch("/:id", updateTodo)


module.exports = router