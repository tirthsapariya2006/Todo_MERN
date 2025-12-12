const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Get all todos
router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Add todo
router.post("/", async (req, res) => {
    const todo = await Todo.create({ text: req.body.text });
    res.json(todo);
});

// Toggle todo
router.put("/:id", async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
});

// Delete todo
router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
});

module.exports = router;
