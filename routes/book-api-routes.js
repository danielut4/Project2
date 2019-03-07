var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    app.get("/api/books", function (req, res) {
        console.log(req.user.id)
        db.Book.findAll({
            where: {
                UserId: req.user.id
            }
        }).then(function(dbBook) {
            res.json(dbBook);
            console.log(dbBook);
        });
    });

    app.post("/api/createBook", function (req, res) {
        db.Book.create({
            title: req.body.title,
            UserId: req.body.UserId
        }).then (function (dbBook) {
             console.log(dbBook)
             res.redirect("/home")
        });
    });

    app.put("/api/update/book/:id", function (req, res) {
        db.Book.update({
            where: {
                title: req.body.title
            }
        }).then(function (dbBook) {
            console.log(dbBook);
        });
    });

    app.delete("/api/delete/book/:id", function (req, res) {
        db.Book.destroy({
            where: {
                id: req.params.id
            }
        }).then (function (dbBook) {
            res.json("/home")
        });
    });
};