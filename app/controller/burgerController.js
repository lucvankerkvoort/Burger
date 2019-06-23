// we require the burger model
var burger = require("../models/burger");

// we require express
var express = require("express");

// we initialize the express method router
var router = express.Router();

// we do our get request for our handlebars page
router.get("/", function(req, res) {
  // we make a request to the database
  burger.selectAll(function(data) {
    // store the data from the database table into an object
    var hbpsobj = {
      burgers: data
    };
    // render the page with the object
    res.render("index", hbpsobj);
  });
});

// we send new data to the database using a post request
router.post("/api/burger", function(req, res) {
  // we capture the user input from our handlebars page
  var userInput = req.body;
  // check check double check
  console.log(userInput);
  // we use our ORM to send the data to the database
  burger.insertOne(
    ["burger_name", "devoured"],
    [userInput.burger, false],
    function(result) {
      // double check the results
      console.log(result);

      // send back a result id to the handlebars page
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/status/:id", function(req, res) {
  var val = "id = " + req.params.id;
  var input = req.body;

  console.log(input);
  console.log(val);

  burger.updateOne(input, val, function(result) {
    console.log(result);
    res.status(200).end();
  });
});
// we export the router object (literally everything  on this page) to the server (server.js file)
module.exports = router;
