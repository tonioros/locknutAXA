var database = require('./database');
var servicio = {};

servicio.selectAllByMec = function(idMecanico, callback) {
  if(database) {
    database.query("SELECT * FROM servicio WHERE idMecanico = ?",
    idMecanico,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

servicio.selectAllByAut = function(idAuto, callback) {
  if(database) {
    database.query("SELECT * FROM servicio WHERE idAuto = ?",
    idAuto,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

servicio.selectAllByEmp = function(idEmpresa, callback) {
  if(database) {
    database.query("SELECT * FROM servicio WHERE idEmpresa = ?",
    idEmpresa,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

servicio.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM servicio",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

servicio.SelectOne = function(idServicio, callback) {
  if(database) {
    var sql = "SELECT * FROM servicio WHERE idServicio = ?";
    database.query(sql, idServicio,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });
  }
}

servicio.Insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO servicio(idMecanico, idAuto, fecha, idEmpresa) VALUES(?,?,?,?) ", [data.idMecanico, data.idAuto, 
    data.fecha, data.idEmpresa],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

servicio.Update = function(data, callback) {
  if(database) {
    var sql = "UPDATE servicio SET idMecanico = ?, idAuto = ?, fecha = ?, idEmpresa = ? WHERE idServicio = ?";
    database.query(sql,
    [data.idMecanico, data.idAuto, data.fecha, data.idEmpresa, data.idServicio],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, data);
      }
    });
  }
}

servicio.Delete = function(idServicio, callback) {
  if(database) {
    var sql = "DELETE FROM servicio WHERE idServicio = ?";
    database.query(sql, idServicio,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });
  }
}

module.exports = servicio;