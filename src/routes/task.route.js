const express = require("express")
const taskController = require("../controllers/task.controller")

const router = express.Router()

router.post("/create-task",taskController.CreateTask)
router.get("/alltasks",taskController.getTasks)
router.delete("/deltetask/:id",taskController.deleteTask)

module.exports = router