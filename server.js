const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use("/", require("./routes"));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
