// Included needed modules
const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

// Vars setup
const PORT = process.env.PORT || 8080;

// Init express
const app = express();

fs.readdir(__dirname, function(err, items) {
  console.log(items);

  for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
});

//Creating endpoints / route handlers
app.get("/", (req, res) => {
  res.send(__dirname);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Listen on a port
app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));
console.log(path.join(__dirname, "public", "index.html"));
