const db = require("../models");

module.exports = function (app) {

    // GET route
    app.get("/", function (req, res) {
        db.Burgers.findAll({}).then(function (dbBurgers) {
            let hbsObject = {
                burgers: dbBurgers
            };
            res.render("index", hbsObject);
            console.log(dbBurgers[0].burger_name);
        });
    });

    // POST route
    //req.body
    app.post("/", function (req, res) {
        db.Burgers.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function (dbBurgers) {
            res.json(dbBurgers);
        });
    });

    // DELETE route
    // req.params.id
    app.delete("/", function (req, res) {

    });

    // PUT route
    app.put("/", function (req, res) {

    });
    //final brace of module export
};