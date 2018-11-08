const express = require('express');
const app = express();

app.set("view engine", "ejs");

const  hi = "HI WORLD! ))";

app.get('/', function (req, res) {
  res.render("index", {data: hi});
});

app.listen(3000, () =>  console.log('Example app listening on port 3000!'));