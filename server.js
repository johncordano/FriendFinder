// Create variables for npm packages that provide the server with additional functionality.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Create variable that identifies the server as an express server.
var app = express();
// Create a variable for the server port.
var PORT = process.env.PORT || 3322;
// Set up the express app to handle data parsing.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Allow the server to access the route files.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// Start the server to begin listening for activity.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});