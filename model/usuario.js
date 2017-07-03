var database = require('./database');
var usuario = {};

usuario.selectAll = function(id, callback){
  if(database){
    database.query("SELECT * FROM usuario WHERE idEmpresa = ?", id,function(error,resultados){
      if(error){
        throw error;
      }else {
        callback(null,resultados);
      }
    });
  }
}

usuario.select = function(id, callback){
  if(database){
    var sql = "SELECT * FROM usuario WHERE idUsuario = ?";
    database.query(sql,id,function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null,resultado);
      }
    });
  }
}

usuario.autenticar = function(data, callback) {
  if(database) {
    var sql = "SELECT * FROM usuario WHERE (codigo = ? OR correo = ?) AND contrasena = ?";
    database.query(sql, [data.nick, data.nick ,data.contrasena],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

usuario.insert = function(data,callback){
  if(database){
    database.query("CALL sp_crearUsuario (?,?,?,?,?,?,?);",
    [data.nombre,data.edad,data.correo,data.contrasena,data.urlIMG,data.idTipoUsuario,data.idEmpresa],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null, {'Mensaje':true})
      }
    });
  }
}

usuario.update = function (data,callback){
  if(database){
    database.query('UPDATE usuario SET nombre = ?, edad = ?,correo = ? ,contrasena = ?,urlIMG=? WHERE idUsuario = ?',
    [data.nombre,data.edad,data.correo,data.contrasena,data.urlIMG,data.idUsuario],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null,{'Mensaje': 'Se edito un usuario'})
      }
    });
  }
}

usuario.delete = function (id, callback){
  if(database){
    database.query('DELETE FROM usuario WHERE idUsuario = ?',id,
    function(error,resultado){
      if(error){
        throw error;
      }else{
        callback(null,{'Mensaje': 'Eliminado'})
      }
    })
  }
}

module.exports = usuario;
