// Included needed modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Vars setup
const PORT = process.env.PORT || 8080;

// Init express
const app = express();

//Creating endpoints / route handlers
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Listen on a port
app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));
