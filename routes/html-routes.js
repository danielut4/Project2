// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var auth = require("../config/middleware/isAuthenticated");


// Routes
// =============================================================
module.exports = function(app) {

  // home page to login or register
  app.get("/", function(req, res) {
    res.render("index");
  });

  // register page
  app.get("/register", function(req, res) {
    res.render("register");
  });

  // login
  app.get("/login", function(req, res) {
    res.render('login');
  });

  app.get("/home", auth, function(req, res) {
    db.Book.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(books){
      res.render('home', {
        id: req.user.id,
        email: req.user.email,
        books: books
      })
    })
    
  })

  app.get("/book:bookId", auth, function(req, res){
    db.Book.findOne({
      where: {
        id: req.params.bookId
      }
    }).then(function(bookData){
      console.log("bookdata", bookData)
      var bookName = bookData.title;
      var bookId = bookData.id;
      db.Note.findAll({
        where: {
          BookId: bookData.id
        }
      }).then(function (notesData) {
        res.render("bookview", {
          title: bookName,
          notes: notesData,
          bookId: bookId
        })
      })
    }
    )
  })

};
