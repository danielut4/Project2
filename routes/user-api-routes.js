var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {
  // app.get("/api/users", function(req, res) {
  //   // 1. Add a join to include all of each Author's Posts
  //   db.User.findAll({include: [db.Post]}).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  app.get("/api/users/:id", function(req, res) {
    // 2; Add a join to include all of the User's Posts here
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/home");
  });

  //route for registering
  app.post("/api/register", function(req, res) {
    db.User.create(req.body).then(function() {
      res.redirect(307, "/api/login")
    }).catch(function(err) {
      console.log(err)
      res.json(err)
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
