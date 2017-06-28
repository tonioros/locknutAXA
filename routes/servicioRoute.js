var express = require('express');
var servicio = require('../model/servicio');
var router = express.Router();

router.get('/api/servicio/mec/:idMecanico',
  function(req, res) {
    var idMecanico = req.params.idMecanico;
    servicio.selectAllByMec(idMecanico, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay servicio"});
      }
  });
});

router.get('/api/servicio/aut/:idAuto',
  function(req, res) {
    var idAuto = req.params.idAuto;
    servicio.selectAllByAut(idAuto, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay servicio"});
      }
  });
});

router.get('/api/servicio/emp/:idEmpresa',
  function(req, res) {
    var idEmpresa = req.params.idEmpresa;
    servicio.selectAllByEmp(idEmpresa, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay servicio"});
      }
  });
});

router.get('/api/servicio/', function(req, res) {
    servicio.selectAll(function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay servicio"});
      }
    });
});

router.get('/api/servicio/:idServicio',
  function(req, res) {
    var idServicio = req.params.idServicio;
    servicio.SelectOne(idServicio, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay servicio"});
      }
  });
});

router.post('/api/servicio', function(req, res) {
  var cookie = req.cookies;
  var data = {
    idEmpresa: cookie.idEmpresa,
    idMecanico : req.body.idMecanico,
    fecha: req.body.fecha,
    idAuto: req.body.idAuto
  }
  servicio.Insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
      res.redirect('/');
    } else {
      res.json({"Mensaje": "No se ingreso el servicio"});
    }
  });
});

router.put('/api/servicio/:idServicio', function(req, res) {
  var idServicio = req.params.idServicio;
  var cookie = req.cookies;
  var data = {
    idEmpresa: cookie.idEmpresa,
    idServicio : req.body.idServicio,
    idMecanico : req.body.idMecanico,
    fecha: req.body.fecha,
    idAuto: req.body.idAuto
  }
  if(data.idServicio === idServicio) {
    servicio.Update(data, function(err, resultado) {
      if(resultado !== undefined) {
        res.json(resultado);
      } else {
        res.json({"Mensaje": "No se modifico el servicio"});
      }
    });
  } else {
    console.log('no se porque');
    res.json({"Mensaje": "No concuerdan los datos"});
  }
});

router.delete('/api/servicio/:idServicio', function(req, res) {
    var idServicio = req.params.idServicio;
    servicio.Delete(idServicio,function(error, resultado){
      if(resultado && resultado.Mensaje === "Eliminado") {
        res.json(resultado)
      } else {
        res.json({"Mensaje": "No se puede eliminar"});
      }
  });
});


module.exports = router;