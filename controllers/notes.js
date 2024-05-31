import { query } from "../databases/db.js";

const getNotes = async (req, res) => {
  try {
    const notes = await query("SELECT * FROM notes");
    return res.status(200).json({ msg: "success", data: notes });
  } catch (error) {
    return res.status(500).json({ msg: "failed" });
  }
};

const addNote = async (req, res) => {
  const { tittle, date_time, note } = req.body;
  try {
    const data = await query(
      "INSERT INTO notes (tittle, date_time, note) VALUES (?,?,?)",
      [tittle, date_time, note]
    );

    return res.status(200).json({ msg: "added success" });
  } catch (error) {
    return res.status(400).json({ msg: "added failed", err: error });
  }
};

const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query("SELECT * FROM notes where id = (?)", [id]);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ msg: "failed", err: error });
  }
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { tittle, date_time, note } = req.body;
  try {
    const data = await query(
      "UPDATE notes SET tittle = ?, date_time = ?, note = ? WHERE id = ?",
      [tittle, date_time, note, id]
    );
    return res.status(200).json({ msg: "update success" });
  } catch (error) {
    return res.status(400).json({ msg: "update failed", err: error });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM notes WHERE id=?", [id]);
    return res.status(200).json({ msg: "delete success" });
  } catch (error) {
    return res.status(400).json({ msg: "delete failed" });
  }
};

export { getNotes, addNote, getNoteById, updateNote, deleteNote };
