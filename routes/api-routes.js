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
    app.post("/api/burgers", function (req, res) {
        let  newBurger; //= {burger_name: $("#burger").val().trim()};
        db.Burgers.create({
            burger_name: req.body.newBurger
            //devoured: req.body.devoured
        }).then(function (dbBurgers) {
            res.json("/api/burgers");
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
            });
    });
    //final brace of module export
};