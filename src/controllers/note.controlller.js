const noteModel = require("../models/note.model")
const jwt = require("jsonwebtoken")

async function createNote(req, res) {
        const { title, description } = req.body;
        const note = await noteModel.create({
            title,
            description,
            user: res.user._id
        })

        res.status(201).json({
            message: "note created successfully!",
            title: note.title,
            description: note.description,
            user: note.user
        })

}

async function getAllNotes(req, res) {
        const notes = await noteModel.find({ user: res.user._id });
        res.status(200).json({ message: "Notes Fetched", notes: notes })
}

async function deleteNote(req, res) {
        const id = req.params.id
        const note = await noteModel.findOneAndDelete({ _id: id, user: res.user._id })
        res.status(200).json({ message: "Note Deleted Successfully!", note: note })
}


async function updateNote(req, res) {
        const { updatedtitle,updateddescription } = req.body
        const id = req.params.id
        const note = await noteModel.findOneAndUpdate({ _id: id, user: res.user._id }, { title: updatedtitle, description: updateddescription })
        
        res.status(200).json({ message: "Note updated successfully!", note: note })
}

module.exports = { createNote, getAllNotes, deleteNote, updateNote }