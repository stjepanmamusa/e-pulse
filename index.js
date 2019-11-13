// Included needed modules
const express = require("express");
const path = require("path");

// Vars setup
const PORT = process.env.PORT || 8080;

// Init express
const app = express();

//Creating endpoints / route handlers
app.get("/", (req, res) => {
  res.send(__dirname);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Listen on a port
app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));

//Heroku connect to database

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

client.query("SELECT * FROM public.room_data;", (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    var data = JSON.stringify(row);
    console.log(data);
  }
  client.end();
});

app.get("/data", (req, res) => {
  res.send(data);
});
