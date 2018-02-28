// Create variable for the path npm package to get the correct file path for the html files.
var path = require("path");
// Use get requests to associate routes with html files.
module.exports = function(app) {
    // Go to the survey html file for the survey route.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // Default to the home html file for no matching route.
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};