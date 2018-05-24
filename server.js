//require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const db = require("./models");

//create port
const app = express();
const PORT = process.env.PORT || 8080;

//use public folder
app.use(express.static("public"));

//use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
require("./routes/api-routes.js")(app);

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//start server
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost: " + PORT);
    });
});