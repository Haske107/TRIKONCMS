var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const project = require('./routes/project');
const content = require('./routes/content');


// IMPORT API ROUTES
var index = require('./routes/index');
var users = require('./routes/users');


// CONNECT TO DATABASE

// Connection URL for CLOUD DB
const url = 'mongodb+srv://JHaskell:7R1K0N12345!@maincluster-etp3a.gcp.mongodb.net/test?retryWrites=true';

// Connect URL for local db
const localurl = "mongodb://localhost:27017/";

// Database Name
const dbName = 'TRIKON-DB';

// Use connect method to connect to the server
mongoose.connect(localurl + dbName, function(err, result) {
  if (err)  {
    console.error(err);
  } else {
    console.log('Succesfully Connected to '  + dbName );
  }
});
// Works

var app = express();
//
// // If an incoming request uses
// // a protocol other than HTTPS,
// // redirect that request to the
// // same url but with HTTPS
// const forceSSL = function() {
//     return function (req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(
//                 ['https://', req.get('Host'), req.url].join('')
//             );
//         }
//         next();
//     }
// };
// // Instruct the app
// // to use the forceSSL
// // middleware
// app.use(forceSSL());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist/Trikon-App')));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Content');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/api/project', project);
app.use('/content', content);
app.use('/users', users);
app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
