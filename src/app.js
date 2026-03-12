require("dotenv").config()
const express = require("express");
const cors = require("cors")
const noteRoutes = require("./routes/note.routes")
const authRoutes = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")


const app = express()
app.use(express.json())

app.use(cors({
    origin: process.env.Frontend_URI,
    credentials: true
  }));
  
app.use(cookieParser())

//auth routes
app.use("/api/auth",authRoutes)

//notes routes
app.use("/api/notes",noteRoutes)



module.exports = app