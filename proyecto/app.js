var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productRouter = require('./routes/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:"Colibri",
  resave: false,
  saveUninitialized: true,
}));

app.use(function (req, res, next){
  if (req.session.NombreUsuario != undefined) {
    res.locals.NombreUsuario = req.session.NombreUsuario;
  }
  return next();
});

app.use(function (req, res, next){
  if (req.session.IdUsuario != undefined) {
    res.locals.IdUsuario = req.session.IdUsuario;
  }
  return next();
});

app.use((req, res, next) => {
  if (req.cookies.RecordarmeEmail != undefined) {
    res.locals.RecordarmeEmail = req.cookies.RecordarmeEmail;
  }
  return next();
});

app.use((req, res, next) => {
  if (req.cookies.RecordarmeID != undefined) {
    res.locals.RecordarmeID = req.cookies.RecordarmeID;
  }
  return next();
});

app.use(function (req, res, next){
  if (req.session.UserName != undefined) {
    res.locals.UserName = req.session.UserName;
  }
  return next();
});

app.use(function (req, res, next){
  if (req.session.UserId != undefined) {
    res.locals.UserId = req.session.UserId;
  }
  return next();
});

app.use(function (req, res, next){
  if (req.session.UsuarioActualizado != undefined) {
    res.locals.UsuarioActualizado = req.session.UsuarioActualizado;
  }
  return next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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