const db = require("../models");

module.exports = function(app) {

  // GET route
  app.get("/", function(req, res) {
    db.BurgerModel.findAll({}).then(function (BurgerModel){
        return res.json(BurgerModel);
        console.log(BurgerModel);
    });
  });

  // POST route
  //req.body
  app.post("/api/burgers", function(req, res) {

  });

  // DELETE route
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {

  });

  // PUT route
  app.put("/api/burgers", function(req, res) {

  });
//final brace of module export
};