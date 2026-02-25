const express = require("express")
const taskController = require("../controllers/task.controller")

const router = express.Router()

router.post("/create-task",taskController.CreateTask)
router.get("/tasks",taskController.getTasks)


module.exports = router