require("dotenv").config()
const express = require("express");
const taskRoutes = require("./routes/task.route")
const noteRoutes = require("./routes/note.route")


const app = express()
app.use(express.json())
app.use("/api/tasks",taskRoutes)
app.use("/api/notes",noteRoutes)



module.exports = app