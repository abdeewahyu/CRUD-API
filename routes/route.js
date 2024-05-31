import express from "express";
import {
  addNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

// const addNote = require("../controllers/notes").addNote;

const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", addNote);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

export default router;
