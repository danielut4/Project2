// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models')

// Routes
// =============================================================
module.exports = function (app) {
  // Registering a new user
  app.post('/register', (req, res) => {
    res.send({ message: `Hello, ${req.body.email}! Your user was registered.` })
    db.User.create(req.body).then(function (newUser) {
      res.json(newUser)
    })
  })
}