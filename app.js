var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

<<<<<<< HEAD
var index = require('./routes/index');
var users = require('./routes/users');
var calendarioRoute = require('./routes/calendarioRoute');
var detalleSRoute = require('./routes/detalleSRoute');
var servicioRoute = require('./routes/servicioRoute');
=======
//Declaracion de Routers
/** Router para vistas */
var views = require('./routes/views'),
/** Router para WEB SERVICES */
apiServicio = require('./routes/apiServicio'),
apiDServicio = require('./routes/apiDetalleServicio'),
apiCServicio = require('./routes/apiComentarioServicio')
>>>>>>> 432e5cd9e92daf035686fc1c66d672c7d54913cf

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', '/images/favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.use('/', index);
app.use('/users', users);
app.use('/', calendarioRoute);
app.use('/', detalleSRoute);
app.use('/', servicioRoute);
=======
//Rutas para Vistas
app.use('/', views);

//Rutas para WEB SERVICES
app.use('/', apiServicio)
app.use('/', apiDServicio)
app.use('/', apiCServicio)
>>>>>>> 432e5cd9e92daf035686fc1c66d672c7d54913cf

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
