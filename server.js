const express = require("express");
const notesRoutes = require("./routes/notes");
const app = express();

app.use(express.json());
app.use("/notes", notesRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
