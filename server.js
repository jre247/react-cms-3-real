require('babel-core/register');


var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var flash    = require('connect-flash');
var passport = require("passport");
var session      = require('express-session');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

//app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 4400);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var contentDb = require('./db/content-db');
app.get('/api/pages/:id', function(req, res, next) {
  var pageId = req.params.id;
  var userId = req.params.userId || 1;
  contentDb.get(pageId, userId).then(function(data){
    res.status(200).send(data);
  });
});
app.post('/api/pages/:id', function(req, res, next) {
  var pageId = req.params.id;
  var contents = req.body.contents;
  var userId = req.params.userId || 1;
  contentDb.save(pageId, userId, contents).then(function(data){
    res.status(200).send(data);
  });
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// server routes ======================================================================
//require('./config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
