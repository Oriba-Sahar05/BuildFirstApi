const express = require("express");
const router = express.Router();

let notes = [{ id: 1, title: "First note", content: "Hello world" }];
let nextId = 2;

router.get("/", (req, res) => res.status(200).json(notes));

router.get("/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.status(200).json(note);
});

router.post("/", (req, res) => {
  const { title, content } = req.body;
  if (!title || title.trim() === "")
    return res.status(400).json({ error: "Title is required" });
  const newNote = { id: nextId++, title, content: content || "" };
  notes.push(newNote);
  res.status(201).json(newNote);
});

router.put("/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ error: "Note not found" });
  const { title, content } = req.body;
  if (title !== undefined) note.title = title;
  if (content !== undefined) note.content = content;
  res.status(200).json(note);
});

router.delete("/:id", (req, res) => {
  const index = notes.findIndex((n) => n.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Note not found" });
  notes.splice(index, 1);
  res.status(200).json({ message: "Note deleted" });
});

module.exports = router;
