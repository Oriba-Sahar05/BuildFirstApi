const express = require("express");
const notesRoutes = require("./routes/notes");
const app = express();

app.use(express.json());
app.use("/notes", notesRoutes);

// Local testing ke liye
if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () =>
    console.log("Server running on http://localhost:3000")
  );
}

module.exports = app;
