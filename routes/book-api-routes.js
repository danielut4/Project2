var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    app.get("/api/:userid/books/", function (req, res) {
        var books = db.Book.findAll({});
        console.log(books);
        res.render("home", {books: books})
    });

    app.post("api/create/book", function (req, res) {
        db.Book.create({
            title: req.body.title
        }).then (function (dbBook) {
            res.json(dbBook);
        });
    });

    app.put("api/update/book/:id", function (req, res) {
        db.Book.update({
            where: {
                title: req.body.title
            }
        }).then(function (dbBook) {
            res.json(dbBook);
        });
    });

    app.delete("api/delete/book/:id", function (req, res) {
        db.Book.destroy({
            where: {
                id: req.params.id
            }
        }).then (function (dbBook) {
            res.json(dbBook);
        });
    });
};