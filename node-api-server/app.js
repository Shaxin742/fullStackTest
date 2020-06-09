var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userRouter = require('./routes/user');
var dashBoardRouter = require('./routes/dashBoard');
var componentsRouter = require('./routes/components');
var fs = require("fs");


app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "application/x-www-form-urlencoded");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,,content-type,X-Token,x-custom-header,Accept,Authorization,other_header,x-csrf-token,Authentication");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  res.header("X-Powered-By", '3.2.1');
  // res.header("Content-Type", "application/json;charset=utf-8");
  next()
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 这里dest对应的值是你要将上传的文件存的文件夹

app.use(logger('dev'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 路由文件
///app/api
app.use('/user', userRouter);
app.use('/dashBoard', dashBoardRouter);
app.use('/components', componentsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
