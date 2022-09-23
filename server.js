const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/api-routes.js")(app);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost: " + PORT);
});
