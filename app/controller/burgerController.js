var burger = require("../models/burger");

var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbpsobj = {
      burgers: data
    };
    res.render("index", hbpsobj);
  });
});

router.post("/api/burger", function(req, res) {
  var userInput = req.body;
  console.log(userInput);
  burger.insertOne(
    ["burger_name", "devoured"],
    [userInput.burger, false],
    function(result) {
      console.log(result);

      res.json({ id: result.insertId });
    }
  );
});
module.exports = router;
