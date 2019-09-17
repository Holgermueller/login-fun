const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burgers.findAll({}).then(function(dbBurgers) {
      let hbsObject = {
        burgers: dbBurgers
      };
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers/", function(req, res) {
    db.Burgers.create(req.body)
      .then(function(Burgers) {
        console.log(Burgers._previousDataValues);
        console.log(req.body.dbBurgers.burger_name);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Burgers.update(
      {
        devoured: true
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(dbBurgers) {
        res.json("/");
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
