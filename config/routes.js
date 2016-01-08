var contentDb = require('../db/content-db');
var authDb = require('../db/auth-db');
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

    app.get('/api/user/auth', function(req, res) {
        var viewmodel = {isAuthenticated: false, userRoles: []};

        if(req.isAuthenticated()){
          viewmodel.isAuthenticated = true;
          viewmodel.email = req.user.email;
          viewmodel.firstName = req.user.first_name;
          viewmodel.lastName = req.user.last_name;
            viewmodel.userRoles = [];

          var userId = req.user.id;

          authDb.getUserRoles(userId).then(function(userRoles){
              var userRoleIds = _.each(userRoles, function(userRole){
                  viewmodel.userRoles.push(userRole.role_id);
              });
              res.status(200).send(viewmodel);
          });
        }
        else{
            res.status(200).send(viewmodel);
        }

    });

    app.get('/api/pages/:id', function(req, res, next) {
        var pageId = req.params.id;
        var userId = req.params.userId || 1;
        contentDb.get(pageId, userId).then(function(data){
            var viewmodel = {contentList: data,};

            res.status(200).send(viewmodel);
        });
    });
    app.post('/api/pages/:id', isLoggedIn, function(req, res, next) {
        var pageId = req.params.id;
        var contents = req.body.contents;
        var userId = req.params.userId || 1;
        contentDb.save(pageId, userId, contents).then(function(data){
            res.status(200).send(data);
        });
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
