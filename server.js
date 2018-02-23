var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Home");
});

app.listen(3000, function (err) {
  if (err) return console.err(err);

  console.log('Listening on port 3000');
});
