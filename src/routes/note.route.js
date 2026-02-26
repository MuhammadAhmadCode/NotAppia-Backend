const express = require("express")
const noteController = require("../controllers/note.controlller")

const router = express.Router()

router.post("/create-note",noteController.createNote)
router.get("/allnotes",noteController.getAllNotes)
router.delete("/delete/:id",noteController.deleteNote)



module.exports = router