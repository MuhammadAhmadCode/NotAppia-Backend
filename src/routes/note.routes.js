const express = require("express")
const noteController = require("../controllers/note.controlller")
const authMiddleware = require("../middlewares/note.middleware")

const router = express.Router()

router.post("/create-note", authMiddleware.notemiddleware,noteController.createNote)
router.get("/allnotes", authMiddleware.notemiddleware,noteController.getAllNotes)
router.delete("/deletenote/:id", authMiddleware.notemiddleware,noteController.deleteNote)
router.patch("/updatenote/:id", authMiddleware.notemiddleware,noteController.updateNote)



module.exports = router