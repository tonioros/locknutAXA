var mysql = require("mysql"),
parametros = {
  host: 'sql9.freesqldatabase.com',
  user: 'sql9181102',
  password: '2tjarpglfK',
  database: 'sql9181102'
};
try{
  var connection = mysql.createConnection(parametros);
  console.log("Se conecto al Dominio externo");
}catch(ex){
  parametros.host = "localhost"
  parametros.user = "root"
  parametros.password = ""
  parametros.database="axaControl";
  var connection = mysql.createConnection(parametros);
  console.log("Se conecto al Dominio local");
}

module.exports = connection;