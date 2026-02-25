const taskModel = require("../models/task.model");

async function CreateTask(req, res) {
    const { title, completed } = req.body;

    await taskModel.create({
        title, completed
    })
    res.status(201).json({
        message: "task Created",
        task: title, completed
    })
}


async function getTasks(req,res){
    const tasks = await taskModel.find()
    res.status(200).json({message:"fetched",tasks:tasks})
}

module.exports = { CreateTask ,getTasks}