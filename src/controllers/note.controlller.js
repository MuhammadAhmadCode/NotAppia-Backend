const noteModel = require("../models/note.model")

async function createNote(req,res){
    const {title,description} = req.body;

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"note created successfully!",
        note:note
    })
}

async function getAllNotes(req,res) {
    const notes = await noteModel.find();
    res.status(200).json({message:"Notes Fetched",notes:notes})
}

async function deleteNote(req,res){
    const id = req.params.id
    const note = await noteModel.findOneAndDelete({_id:id})
    res.status(200).json({message:"Note Deleted Successfully!",note:note})
}


module.exports = {createNote,getAllNotes,deleteNote}