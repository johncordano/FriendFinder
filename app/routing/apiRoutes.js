// Create a variable to link the API route to the friends.js data source
var friendsData = require("../data/friends");

module.exports = function(app) {
    // Use an API get request to associate a route with the friends.js file to show a JSON file of the data in the file.
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    // Use an API post request to push form submission data to a JavaScript array.
    app.post("/api/friends", function(req, res) {
        // Create variables to use in comparing the new user scores to existing user scores.
        var userAnswers = req.body;
        var userScores = userAnswers.scores;
        var matchName = '';
        var matchImage = '';
        var totalDifference = 1000
        // Loop through the users and the user scores in the friends.js file to find the name and image of the best match for the new user. 
        for (var i = 0; i < friendsData.length; i++) {
                var diff = 0;
                for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friendsData[i].scores[j] - userScores[j]);
                }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;
            }
        }
        // Create a variable containing an object with the name and image of the best match. 
        var bestMatch = {
            name:matchName,
            image: matchImage
        }
        // Push form submission data to a JavaScript array.
        friendsData.push(req.body);
        // Forward the best match to the survery.html file.
        res.json(bestMatch)
    });
};