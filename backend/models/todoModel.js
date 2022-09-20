const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    task: {
        type:String,
        required: true
    },
    time: {
        type:String,
        required: true
    },
    date: {
        type:String,
        required: true
    }
}, { timestamps:true})

module.exports = mongoose.model("Todo", todoSchema)