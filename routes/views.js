var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AXA Control | Inicio' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'AXA Control | Iniciar Sesion' });
});

module.exports = router;
