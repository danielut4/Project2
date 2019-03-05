// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models')
var AuthenticationController = require('../controllers/AuthenticationController');

// Routes
// =============================================================
module.exports = function (app) {
  // Registering a new user
  app.post('/register',
    AuthenticationController.register)
}
