var ContentDb = require('../db/content-db');
var AuthDb = require('../db/auth-db');
var UserDb = require('../db/user-db');
var _ = require('underscore-node');

// app/routes.js
module.exports = function(app, passport) {

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/users', isAdmin, function(req, res) {
        UserDb.getAllUsers()
          .then(function(users){
            res.status(200).send(users);
          });
    });

    app.post('/api/users/:id', isAdmin, function(req, res) {
        var userViewmodel = req.body.userViewmodel;

        UserDb.updateUser(userViewmodel.user)
          .then(function(){
              return AuthDb.saveUserRoles(userViewmodel);
          })
          .then(function(){
              res.status(200).send("success");
          });
    });

    app.get('/api/users/:id', isAdmin, function(req, res) {
        var viewmodel = {user: null, userRoles: []};
        var userId = req.params.id;

        UserDb.findById(userId)
          .then(function(user){
            var userData = {id: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name};
            viewmodel.user = userData;

            return AuthDb.getUserRoles(userId);
          })
          .then(function(userRoles){
            var userRoleIds = _.each(userRoles, function(userRole){
                viewmodel.userRoles.push(userRole.role_id);
            });
            res.status(200).send(viewmodel);
          })

    });

    app.get('/api/getLoggedInUser', isLoggedIn, function(req, res) {
        var viewmodel = {isAuthenticated: false, userRoles: []};

        viewmodel.isAuthenticated = true;
        viewmodel.email = req.user.email;
        viewmodel.firstName = req.user.first_name;
        viewmodel.lastName = req.user.last_name;
        viewmodel.userRoles = [];

        var userId = req.user.id;

        AuthDb.getUserRoles(userId)
          .then(function(userRoles){
              var userRoleIds = _.each(userRoles, function(userRole){
                  viewmodel.userRoles.push(userRole.role_id);
              });
              res.status(200).send(viewmodel);
          });
    });

    app.get('/api/pages/edit/:id', isPublisher, function(req, res, next) {
        getPage(req, res, next);
    });

    app.get('/api/pages/:id/', function(req, res, next) {
      getPage(req, res, next);
    });

    app.post('/api/pages/:id', isPublisher, function(req, res, next) {
      var pageId = req.params.id;
      var contents = req.body.contents;
      var userId = req.params.userId || 1;
      ContentDb.save(pageId, userId, contents).then(function(data){
          res.status(200).send(data);
      });
    });
};

var getPage = function(req, res, next){
  var pageId = req.params.id;
  var userId = req.params.userId || 1;
  ContentDb.get(pageId, userId).then(function(data){
      var viewmodel = {contentList: data,};

      res.status(200).send(viewmodel);
  });
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

function isAdmin(req, res, next) {
  var userRoles = req.session.userRoles;
  var isUserAdminRole = false;
  var adminRoles = [2]; //TODO: put in common utility
  var adminRolesForUser = _.intersection(userRoles, adminRoles);
  if(adminRolesForUser.length > 0){
    isUserAdminRole = true;
  }

  // if user is authenticated in the session and has an admin role, carry on
  if (req.isAuthenticated() && isUserAdminRole)
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}

function isPublisher(req, res, next) {
  var userRoles = req.session.userRoles;
  var isPublisher = false;
  var publisherRoles = [1, 2];

  var publisherRolesForUser = _.intersection(userRoles, publisherRoles);
  if(publisherRolesForUser.length > 0){
    isPublisher = true;
  }

  // if user is authenticated in the session and has an admin role, carry on
  if (req.isAuthenticated() && isPublisher)
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
