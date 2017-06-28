var express = require('express');
var detalle = require('../model/detalleservicio');
var router = express.Router();

router.get('/api/detalleS/serv/:idServicio',
  function(req, res) {
    var idServicio = req.params.idServicio;
    detalle.selectAllByServ(idServicio, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay detalle"});
      }
  });
});

router.get('/api/detalleS/', function(req, res) {
    detalle.selectAll(function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay detalle"});
      }
    });
});

router.get('/api/detalleS/:idDetalleS',
  function(req, res) {
    var idDetalleS = req.params.idDetalleS;
    detalle.SelectOne(idDetalleS, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay detalle"});
      }
  });
});

router.post('/api/detalleS', function(req, res) {
  var data = {
    idServicio: req.body.idServicio,
    descripcion: req.body.descripcion,
    subtotal: req.body.subtotal
  }
  detalle.Insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
      res.redirect('/');
    } else {
      res.json({"Mensaje": "No se ingreso el detalle"});
    }
  });
});

router.put('/api/detalleS/:idDetalleS', function(req, res) {
  var idDetalleS = req.params.idDetalleS;
  var cookie = req.cookies;
  var data = {
    idDetalleS: req.body.idDetalleS,
    idServicio: req.body.idServicio,
    descripcion: req.body.descripcion,
    subtotal: req.body.subtotal
  }
  if(data.idDetalleS === idDetalleS) {
    detalle.Update(data, function(err, resultado) {
      if(resultado !== undefined) {
        res.json(resultado);
      } else {
        res.json({"Mensaje": "No se modifico el detalle"});
      }
    });
  } else {
    console.log('no se porque');
    res.json({"Mensaje": "No concuerdan los datos"});
  }
});

router.delete('/api/detalleS/:idDetalleS', function(req, res) {
    var idDetalleS = req.params.idDetalleS;
    detalle.Delete(idDetalleS,function(error, resultado){
      if(resultado && resultado.Mensaje === "Eliminado") {
        res.json(resultado)
      } else {
        res.json({"Mensaje": "No se puede eliminar"});
      }
  });
});


module.exports = router;