const db = require("../models");

module.exports = function (app) {

    // GET route
    app.get("/", function (req, res) {
        db.Burgers.findAll({}).then(function (dbBurgers) {
            let hbsObject = {
                burgers: dbBurgers
            };
            res.render("index", hbsObject);
        });
    });

    // POST route
    app.post("/api/burgers/", function (req, res) {
        db.Burgers.create(req.body).then(function (Burgers) {
            console.log(Burgers._previousDataValues);
            console.log(req.body.dbBurgers.burger_name);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // PUT route
    app.put("/api/burgers/:id", function (req, res) {
        db.Burgers.update({
            devoured: true
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbBurgers) {
                res.json("/");
            }).catch(function (err) {
                res.json(err);
            });
    });
    //final brace of module export
};