// Create variables for dependencies.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Set up express app.
var app = express();
var PORT = process.env.PORT || 3000;
// Set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





// Start the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});