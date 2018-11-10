const express = require('express');
const bodyParser = require("body-parser");
// const config = require("./config");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const  arr = ["Helo", "world", "Good Nastya!!!"];

app.get('/', (req, res) => {
  res.render("main", {arr: arr});
});

app.get('/create', (req, res) => {
  res.render("create");
});
app.post('/create', (req, res) => {
  arr.push(req.body.text);
  res.redirect("/");
});

module.exports = app;