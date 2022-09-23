const path = require("path");

module.exports = (app) => {
  app.get("/404", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public.index.html"));
  });
};
