var database = require('./database');
var usuario = {};

usuario.selectAll = function(id, callback){
  if(database){
    database.query("SELECT * FROM Usuario WHERE idEmpresa = ?", id,function(error,resultados){
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
    var sql = "SELECT * FROM Usuario WHERE idUsuario = ?";
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
    var sql = "SELECT * FROM Usuario WHERE (nick = ? OR correo = ?) AND contrasena = ?";
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
    database.query("INSERT INTO Usuario(nombre,edad,fechaCreacion,correo,nick,contrasena,"
    +"urlIMG,idTipoUsuario,idEmpresa) VALUES(?,?,?,?,?,?,?,?,?)",
    [data.nombre,data.edad,data.fechaCreacion,data.correo,data.nick,data.contrasena,
      data.urlIMG,data.idTipoUsuario,data.idEmpresa],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null, {'insertId': resultado.insertId})
      }
    });
  }
}

usuario.update = function (data,callback){
  if(database){
    database.query('UPDATE usuario SET nombre = ?, edad = ?,correo = ? ,nick = ?, contrasena = ?,'+
    'idTipoUsuario = ? WHERE idUsuario = ?',[data.nombre,data.edad,data.correo,data.nick,data.contrasena,
    data.idTipoUsuario,data.idUsuario],
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
    database.query('DELETE FROM Usuario WHERE idUsuario = ?'.id,
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
