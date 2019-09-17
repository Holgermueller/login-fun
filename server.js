const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const compression = require("compression");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/api-routes.js")(app);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
  });
});
