// Babel ES6/JSX Compiler

require('babel-register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var colors = require('colors');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig = require('swig');
var xml2js = require('xml2js');
var services = require('./routers/services');
var character = require('./routers/character');
var config = require('./config');
var FileStreamRotator = require('file-stream-rotator')
var routes = require('./app/routes');
var fs = require('fs')
var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.set('port', process.env.PORT || 3000);
app.use(compression());
// app.use(logger('dev'));

/**
 * [create files that log request record by date]
 * @type {[type]}
 */
var logDirectory = __dirname + '/logs';

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
});
// setup the logger
app.use(logger('combined', {
  stream: accessLogStream
}));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));


/*
 * register routers
 * 
 */
app.use('/api', services);
// app.use('/', character);



app.use(function(req, res) {
  Router.match({
    routes: routes.default,
    location: req.url
  }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', {
        html: html
      });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});
/**
 * deal the error
 * 
 */
app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({
    message: err.message
  });
});


/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', {
    onlineUsers: onlineUsers
  });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', {
      onlineUsers: onlineUsers
    });
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});