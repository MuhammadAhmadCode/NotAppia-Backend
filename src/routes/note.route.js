const express = require("express")
const noteController = require("../controllers/note.controlller")

const router = express.Router()

router.post("/create-note",noteController.createNote)
router.get("/allnotes",noteController.getAllNotes)
router.delete("/deletenote/:id",noteController.deleteNote)
router.patch("/updatenote/:id",noteController.updateNote)



module.exports = router