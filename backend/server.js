const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const todoRoutes = require("./routes/todo")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json()); //Parses data into req.body
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use("/api/todos", todoRoutes)

mongoose.connect(process.env.MONGODB)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`running on ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
