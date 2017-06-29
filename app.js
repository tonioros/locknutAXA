var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Declaracion de Routers
/** Router para vistas */
var views = require('./routes/views'),
/** Router para WEB SERVICES */
apiServicio = require('./routes/apiServicio'),
apiDServicio = require('./routes/apiDetalleServicio'),
apiCServicio = require('./routes/apiComentarioServicio'),
apiCalendario  = require("./routes/apiCalendario"),
apiAuto = require('./routes/apiAuto'),
apiEmpresa = require('./routes/apiEmpresa'),
apiUsuario = require('./routes/apiUsuario')
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

//Rutas para Vistas
app.use('/', views);

//Rutas para WEB SERVICES
app.use('/', apiServicio)
app.use('/', apiDServicio)
app.use('/', apiCServicio)
app.use('/', apiCalendario)
app.use('/', apiAuto)
app.use('/', apiEmpresa)
app.use('/', apiUsuario)
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
