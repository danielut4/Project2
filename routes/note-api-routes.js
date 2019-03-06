var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    app.get("/api/:bookId/notes", function (req, res) {
        console.log(req.user.id)
        db.Note.findAll({
            where: {
                BookId: req.params.bookId
            }
        }).then(function(dbNote) {
            res.json(dbNote);
            console.log(dbNote);
        });
    });

    app.post("/api/createNote", function (req, res) {
        db.Note.create({
            heading: req.body.heading,
            text: req.body.text,
            note_category: req.body.note_category,
            BookId: req.body.BookId
        }).then (function (dbNote) {
            res.json(dbNote)
             console.log(dbNote)
        });
    });

    app.put("/api/update/note/:id", function (req, res) {
        db.Note.update({
            where: {
                title: req.body.title
            }
        }).then(function (dbNote) {
            console.log(dbNote);
        });
    });

    app.delete("/api/delete/note/:id", function (req, res) {
        db.Note.destroy({
            where: {
                id: req.params.id
            }
        }).then (function (dbNote) {
            res.json(dbNote);
        });
    });
};