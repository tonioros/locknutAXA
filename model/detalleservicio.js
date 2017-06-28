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