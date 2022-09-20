const mongoose = require("mongoose")
const Todo = require("../models/todoModel")

// GET ALL
const getTodos = async (req, res) => {
    const todos = await Todo.find({}).sort({createdAt: -1})
    res.status(200)
    res.json(todos)
}

// GET SINGLE
const getTodo = async (req, res) => {
    const { id } = req.params //zoberie id z /:id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Doesnt exist"})
    }

    const todo = await Todo.findById(id)
    if (!todo) { //todo return 0, takže je empty
        return res.status(404).json({ error: "Doesnt exist"}) //musi tu byť return aby sa ukončila funkcia getWorkout
    }

    res.status(200).json(todo)
}

const createTodo = async (req, res) => {
    const { title, task, time, date } = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push("title")
    }
    if(!task){
        emptyFields.push("task")
    }
    if(!time){
        emptyFields.push("time")
    }
    if(!date){
        emptyFields.push("date")
    }

    if (emptyFields.length > 0){
        return res.status(400).json({error: "Please fill all the fields.", emptyFields })
    }

    try {
        const todo = await Todo.create({ title, task, time, date})
        res.status(200).json(todo)
    }
    catch (error) {
        res.status(400).json({ error: error.message})
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Doesnt exist"})
    }

    const todo = await Todo.findOneAndDelete({_id: id})

    if (!todo) { //todo return 0, takže je empty
        return res.status(404).json({ error: "Doesnt exist"}) 
    }
    res.status(200).json(todo)
}

const updateTodo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Doesnt exist"})
    }

    const todo = await Todo.findOneAndUpdate({ _id : id}, {
        ...req.body
    })

    if (!todo) {
        return res.status(404).json({ error: "Doesnt exist"}) 
    }

    res.status(200).json(todo)
}

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo
}