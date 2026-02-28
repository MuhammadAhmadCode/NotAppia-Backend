require("dotenv").config()
const express = require("express");
const cors = require("cors")
const taskRoutes = require("./routes/task.routes")
const noteRoutes = require("./routes/note.routes")
const AuthRoutes = require("./routes/auth.routes")


const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/tasks",taskRoutes)
app.use("/api/notes",noteRoutes)



module.exports = app