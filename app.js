var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require('./models');
var index = require('./routes/index');
var users = require('./routes/api/users');
var expense = require('./routes/api/expense');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/expense', expense);
app.use('/api/users', users);
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

  // send error json
  res.status(err.status || 500);
  res.json({ message: 'Uh-oh, error.' });
});

// var PORT = process.env.PORT || 3001;
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log('App now listening on port:', PORT);
//   });
// });
module.exports = app;
