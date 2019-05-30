const express = require("express");

// bring in the models
var db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/Customer_controller.js");

app.use(routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});