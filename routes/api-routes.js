const db = require("../models");

module.exports = function(app) {

  // GET route
  app.get("/", function(req, res) {
    db.Burgers.findAll({}).then(function (Burgers){
        return res.json(Burgers);
        console.log(Burgers);
    });
  });

  // POST route
  //req.body
  app.post("/", function(req, res) {

  });

  // DELETE route
  // req.params.id
  app.delete("/", function(req, res) {

  });

  // PUT route
  app.put("/", function(req, res) {

  });
//final brace of module export
};