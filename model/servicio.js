<<<<<<< HEAD
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

=======
var database = require("./database"), servicio = {}

/**@author Antonio Xocoy Rosales 
 *@version 1.0.0
*/

/**
*@param {Integer} idEmpresa - Numero de empresa que se necesita el servicio
*@param {function} callback - funcion para devolver datos 
*@function
* Obtener todos los servicios de una empresa
*/
servicio.selectAll = function(idEmpresa,callback){
    if(database){
    database.query("SELECT sr.idServicio, me.idUsuario, me.nombre, me.correo, me.codigo AS codigoUsuario , me.urlIMG "
        +",au.idAuto, au.modelo, au.marca, au.anio, au.codigo AS codigoAuto "
        +",sr.fecha AS fechaServicio, sr.idEmpresa FROM servicio sr "
        +"INNER JOIN usuario me ON me.idUsuario = sr.idServicio INNER JOIN auto au ON au.idAuto = sr.idAuto "
        +"WHERE sr.idEmpresa = ? ;",idEmpresa,
        function(error, resultado){
            if(resultado != null){
                callback(null, resultado)
            }else{
                throw error;
            }
        }
    )
    }
}

/**
*@param {Integer} idServicio - Numero de servicio que se necesita consultar
*@param {function} callback - funcion para devolver datos 
*@function 
* Obtener un servicio de una empresa
*/
servicio.select = function(idServicio, callback){
    if(database){
        database.query("SELECT sr.idServicio, me.idUsuario, me.nombre, me.correo, me.codigo AS codigoUsuario , me.urlIMG "
        +",au.idAuto, au.modelo, au.marca, au.anio, au.codigo AS codigoAuto "
        +",sr.fecha AS fechaServicio, sr.idEmpresa FROM servicio sr "
        +"INNER JOIN usuario me ON me.idUsuario = sr.idServicio INNER JOIN auto au ON au.idAuto = sr.idAuto "
        +"WHERE sr.idServicio = ?",idServicio, function(error, resultado){
            if(resultado != null){
                callback(null, resultado);
            }else{
                throw error;
            }
        })
    }
}

/**
*@param {Integer} fecha - Numero de servicio que se necesita consultar
*@param {function} callback - funcion para devolver datos 
*@function 
* Obtener un servicio de una empresa
*/
servicio.select = function(idServicio, callback){
    if(database){
        database.query("SELECT sr.idServicio, me.idUsuario, me.nombre, me.correo, me.codigo AS codigoUsuario , me.urlIMG "
        +",au.idAuto, au.modelo, au.marca, au.anio, au.codigo AS codigoAuto "
        +",sr.fecha AS fechaServicio, sr.idEmpresa FROM servicio sr "
        +"INNER JOIN usuario me ON me.idUsuario = sr.idServicio INNER JOIN auto au ON au.idAuto = sr.idAuto "
        +"WHERE sr.idServicio = ?",idServicio, function(error, resultado){
            if(resultado != null){
                callback(null, resultado);
            }else{
                throw error;
            }
        })
    }
}

/**
*@param {Array} data - datos para insert [idMecanico, idAuto, fecha, idEmpresa]
*@param {function} callback - funcion para confirmar insercion
*@function 
* insertar nuevo servicio de una empresa
*/
servicio.insert = function(data, callback){
    if(database){
        database.query("INSERT INTO servicio(idMecanico, idAuto, fecha, idEmpresa) VALUES (?,?,?,?);",
         data, function(erro, resultado){
            if(!error){
                callback(null, resultado);
            }else{
                throw error;
            }
        });
    }
}

/**
*@param {Array} data - datos para insert [idMecanico, idAuto, fecha, idEmpresa, idServicio]
*@param {function} callback - funcion para confirmar actualizacion
*@function 
* editar datos de un servicio de una empresa
*/
servicio.update = function(data, callback){
    if(database){
        database.query("UPDATE servicio SET idMecanico = ? , SET idAuto = ?, SET fecha = ? , SET idEmpresa = ? WHERE idServicio = ? ;",
         data, function(erro, resultado){
            if(!error){
                callback(null, resultado);
            }else{
                throw error;
            }
        });
    }
}

/**
*@param {Integer} idServicio - ID de servicio a eliminar
*@param {function} callback - funcion para confirmar eliminacion
*@function 
* eliminar un servicio de una empresa
*/
servicio.delete = function(idServicio, callback){
    if(database){
        database.query("CALL sp_eliminarServicio ( ? ) ;",
         idServicio, function(erro, resultado){
            if(!error){
                callback(null, resultado);
            }else{
                throw error;
            }
        });
    }
}
>>>>>>> 432e5cd9e92daf035686fc1c66d672c7d54913cf
module.exports = servicio;