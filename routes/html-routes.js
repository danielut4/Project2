// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

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

  app.get("/home", function(req, res) {
    res.render('home')
  })

};
