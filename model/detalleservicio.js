<<<<<<< HEAD
var database = require('./database');
var detalle = {};

detalle.selectAllByServ = function(idServicio, callback) {
  if(database) {
    database.query("SELECT * FROM detalleServicio WHERE idServicio = ?",
    idServicio,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

detalle.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM detalleServicio",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

detalle.SelectOne = function(idDetalleS, callback) {
  if(database) {
    var sql = "SELECT * FROM detalleServicio WHERE idDetalleS = ?";
    database.query(sql, idDetalleS,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });
  }
}

detalle.Insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO detalleServicio(idServicio, descripcion, subtotal) VALUES(?,?,?) ", [data.idServicio, data.descripcion, 
    data.subtotal],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

detalle.Update = function(data, callback) {
  if(database) {
    var sql = "UPDATE detalleServicio SET idServicio = ?, descripcion = ?, subtotal = ? WHERE idDetalleS = ?";
    database.query(sql,
    [data.idServicio, data.descripcion, data.subtotal, data.idDetalleS],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, data);
      }
    });
  }
}

detalle.Delete = function(idDetalleS, callback) {
  if(database) {
    var sql = "DELETE FROM detalleServicio WHERE idDetalleS = ?";
    database.query(sql, idDetalleS,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });
  }
}

module.exports = detalle;
=======
var database = require("./database"),
detalleservicio = {}

detalleservicio.selectAll = function(idServicio, callback){
    database.query("SELECT * FROM detalleServicio WHERE idServicio = ? ;", 
    idServicio, function(error, resultado){
        if(!error){
            callback(null, resultado)
        }else{
            throw error
        }
    })
}

detalleservicio.select = function(idDetalleS, callback){
    database.query("SELECT * FROM detalleServicio WHERE idDetalleS = ? ;", 
    idDetalleS, function(error, resultado){
        if(!error){
            callback(null, resultado)
        }else{
            throw error
        }
    })
}

detalleservicio.insert = function(data, callback){
    database.query("INSERT INTO detalleServicio(idServicio, descripcion, subtotal) VALUES(?,?,?);", 
    data, function(error, resultado){
        if(!error){
            callback(null, {Mensaje: true})
        }else{
            throw error
        }
    })
}

detalleservicio.delete = function(idDetalleS, callback){
    database.query("DELETE FROM detalleServicio WHERE idDetalleS = ? ;", 
    idDetalleS, function(error, resultado){
        if(!error){
             callback(null, {Mensaje: true})
        }else{
            throw error
        }
    })
}

module.exports = detalleservicio
>>>>>>> 432e5cd9e92daf035686fc1c66d672c7d54913cf
