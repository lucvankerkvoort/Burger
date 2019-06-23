var express = require("express");

var app = express();

var exphbs = require("express-handlebars");

PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burgerController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening at https://localhost" + PORT);
});
