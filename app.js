var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var db = require('./models');
var index = require('./routes/index');
var users = require('./routes/api/users');
var expense = require('./routes/api/expense');
var statements = require('./routes/api/statement');

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

var app = express();

const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://billsapp.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'bill-buster-api',
  issuer: `https://billsapp.auth0.com/`,
  algorithms: ['RS256']
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/expense', expense);
app.use('/api/users', users);
app.use('/api/statements', statements);
app.use('*', index);

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
  res.send(err);
});

module.exports = app;
