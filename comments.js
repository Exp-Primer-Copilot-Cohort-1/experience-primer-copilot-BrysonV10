// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create a comment
app.post('/comments', function (req, res) {
  var comment = req.body;
  console.log('body:', comment);
  res.json(comment);
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

// Test
// POST /comments
// Content-Type: application/json
//
// {
//   "name": "John",
//   "email": "