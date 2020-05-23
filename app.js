var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

// var indexRouter = require('./routes/index');
var itemsRouter = require('./routes/items');


// Mongoose setup

var session = require('express-session');
var connectMongo = require('connect-mongo');
var mongoose = require('mongoose');
const MongoStore = connectMongo(session);
const dbUri = process.env.MONGODB_URI || 'mongodb+srv://admin:TCjOOMyHbpFrOOul@ecommercecluster-lxbpx.mongodb.net/ecommerce?retryWrites=true&w=majority';
const secret = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor';

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB is connected!')
}).catch((err) => {
  console.log(`Error while connecting DB: ${err}!`);
});

var db = mongoose.connection;

// App setup

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db,
    secret: secret
  }),
  cookie: {
    maxAge: 10 * 60 * 1000
  },
}));

// app.use('/', indexRouter);
app.use('/items', itemsRouter);

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
