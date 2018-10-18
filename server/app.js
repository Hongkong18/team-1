var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var additionRoutes = require('./routes/Addition');
var modificationRoutes = require('./routes/Modification');
var searchRoutes = require('./routes/Search');
var indexRoutes = require("./routes/index");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/code_for_good");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRoutes);
app.use('/addition', additionRoutes);
app.use('/modification', modificationRoutes);
app.use('/search', searchRoutes);

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
