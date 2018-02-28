// Create a variable to link the API route to the friends.js data source
var friendsData = require("../data/friends");

module.exports = function(app) {
    // Use an API get request to associate a route with the friends.js file to show a JSON file of the data in the file.
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    // Use an API post request to push form submission data to a JavaScript array.
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
    });
    // Clears the JavaScript array for testing purposes. 
   //  app.post("/api/clear", function() {
   // 	friendsData = [];
   //  console.log(friendsData);
  	// });
};