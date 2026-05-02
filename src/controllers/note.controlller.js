const noteModel = require("../models/note.model");
const jwt = require("jsonwebtoken");

async function createNote(req, res) {
  try {
    const { title, description } = req.body;
    const note = await noteModel.create({
      title,
      description,
      user: res.user._id,
    });

    res.status(201).json({
      message: "note created successfully!",
      title: note.title,
      description: note.description,
      user: note.user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create Note",
      error: err.message,
    });
  }
}

async function getAllNotes(req, res) {
  try {
    const notes = await noteModel.find({ user: res.user._id });
    res.status(200).json({ message: "Notes Fetched", notes: notes });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve Notes",
      error: err.message,
    });
  }
}

async function deleteNote(req, res) {
  try {
    const id = req.params.id;
    const note = await noteModel.findOneAndDelete({
      _id: id,
      user: res.user._id,
    });
    res.status(200).json({ message: "Note Deleted Successfully!", note: note });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Note",
      error: err.message,
    });
  }
}

async function updateNote(req, res) {
  try {
    const { updatedtitle, updateddescription } = req.body;
    const id = req.params.id;
    const note = await noteModel.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { title: updatedtitle, description: updateddescription },
    );

    res.status(200).json({ message: "Note updated successfully!", note: note });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update Note",
      error: err.message,
    });
  }
}

module.exports = { createNote, getAllNotes, deleteNote, updateNote };
