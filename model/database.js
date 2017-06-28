var mysql = require("mysql"),
parametros = {
  host: 'johnny.heliohost.org',
  user: 'tonioros_axac',
  password: 'axac123',
  database: 'tonioros_axaControl'
};
try{
  var connection = mysql.createConnection(parametros);
  console.log("Se conecto al Dominio externo");
}catch(ex){
  parametros.host = "localhost"
  parametros.user = "root"
  parametros.password = ""
  parametros.database="axaControl";
}
module.exports = connection
