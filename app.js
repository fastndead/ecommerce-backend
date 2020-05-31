var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var itemsRouter = require('./routes/items');
var orderRouter = require('./routes/order');


// Mongoose setup

var mongoose = require('mongoose');
const dbUri = 'mongodb+srv://admin:DbzAxZf1fejHLwpa@ecommercecluster-lxbpx.mongodb.net/ecommerce?retryWrites=true&w=majority';


mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB is connected!')
}).catch((err) => {
  console.log(`Error while connecting DB: ${err}!`);
});


// App setup

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// app.use('/', indexRouter);
app.use('/items', itemsRouter);
app.use('/orders', orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : { message: 'An error has occurred on the server' };

  // render the error page
  res.status(err.status || 500);
    res.send(err);
});

module.exports = app;
