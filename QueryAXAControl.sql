CREATE DATABASE axaControl;
USE axaControl;

CREATE TABLE empresa(
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    codigo VARCHAR(30) NOT NULL,
    direccion VARCHAR(70) NOT NULL
);

CREATE TABLE tipoUsuario(
    idTipoUsuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(20)
);

CREATE TABLE usuario(
    idUsuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    edad INT,
    fechaCreacion DATETIME NOT NULL,
    correo VARCHAR(60) NOT NULL,
    codigo VARCHAR(20) ,
    contrasena VARCHAR(20),
    urlIMG VARCHAR(100),
    idTipoUsuario INT NOT NULL,
    idEmpresa INT NOT NULL,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    FOREIGN KEY (idTipoUsuario) REFERENCES tipoUsuario(idTipoUsuario)
);

CREATE TABLE auto(
    idAuto INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idUsuario INT NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    marca VARCHAR(20) NOT NULL,
    anio VARCHAR(4) NOT NULL,
    codigo VARCHAR(20) NOT NULL,
    fechaCreacion DATETIME NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE servicio(
    idServicio INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idMecanico INT NOT NULL,
    idAuto INT NOT NULL,
    fecha DATETIME NOT NULL,
    idEmpresa INT NOT NULL,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    FOREIGN KEY (idMecanico) REFERENCES usuario(idUsuario),
    FOREIGN KEY (idAuto) REFERENCES auto(idAuto)
);

CREATE TABLE detalleServicio(
    idDetalleS INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idServicio INT NOT NULL,
    descripcion VARCHAR(60) NOT NULL,
    subtotal DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (idServicio) REFERENCES servicio(idServicio)
);

/* TABLA PARA COMENTARIOS DEL SERVICIO 
    SE USA HACIENDO DOS CONSULTAS INDEPENDIENTES 
    UNA HACIA EL MECANICO 
    OTRA PARA EL USUARIO 
    AMBAS CON SUS JOINS
*/

CREATE TABLE comentarioServicio(
    idComentarioS INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idServicio INT NOT NULL,
    idCliente INT NOT NULL,
    descripcion TEXT NOT NULL,
    FOREIGN KEY (idServicio) REFERENCES servicio(idServicio),
    FOREIGN KEY (idCliente) REFERENCES usuario(idUsuario)
);

CREATE TABLE factura(
    idFactura INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idServicio INT NOT NULL,
    fecha DATETIME NOT NULL,
    idUsuario  INT NOT NULL,
    total DECIMAL(8,2) NOT NULL,
    idEmpresa INT NOT NULL,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    FOREIGN KEY (idServicio) REFERENCES servicio(idServicio),
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

/* 
    CREATE TABLE DETALLEFACTURA
    |ID EMPRESA | CURRENT FACTURA | MAX FACTURA   

TABLA PARA COMENTARIOS DE MECANICOS | ADMINISTRADORES 
    SE USA HACIENDO DOS CONSULTAS INDEPENDIENTES 
    UNA HACIA EL MECANICO 
    OTRA PARA EL USUARIO | ADMINISTRADORES 
            AMBAS CON SUS JOINS
CREATE TABLE comentarioUsuario(
    idComentarioU INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idUsuario INT NOT NULL,
    idCliente INT NOT NULL,
    descripcion TEXT NOT NULL,
    idEmpresa INT NOT NULL,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (idCliente) REFERENCES usuario(idUsuario)
);
*/

CREATE TABLE calendario(
    idCalendario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idCliente INT NOT NULL,
    fecha DATETIME NOT NULL,
    descripcion TEXT,
    idAuto INT NOT NULL,
    idEmpresa INT NOT NULL,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    FOREIGN KEY (idCliente) REFERENCES usuario(idUsuario),
    FOREIGN KEY (idAuto) REFERENCES auto(idAuto)
);

DELIMITER $$

CREATE PROCEDURE sp_eliminarServicio(
	IN id_servicio INT
)
BEGIN
	DELETE FROM detalleServicio WHERE idServicio = id_servicio;
	DELETE FROM servicio WHERE idServicio = id_servicio;
END $$

CREATE PROCEDURE sp_crearUsuario(
	IN us_nombre VARCHAR(40), 
	IN us_edad INT, 
	IN us_correo VARCHAR(50), 
	IN us_contrasena VARCHAR(15), 
	IN us_urlIMG VARCHAR(40), 
	IN us_idTipoUsuario INT, 
	IN us_idEmpresa INT
)
BEGIN
	DECLARE em_codigo VARCHAR(5);
	DECLARE us_codigo_temp VARCHAR(5);
	DECLARE us_codigo VARCHAR(7);
	SET em_codigo = (SELECT codigo FROM empresa WHERE idEmpresa = us_idEmpresa);
	SET us_codigo_temp = CONCAT(((SELECT idUsuario FROM usuario ORDER BY idUsuario DESC LIMIT 1) +1) , LOWER(SUBSTR(us_nombre,- LENGTH(us_nombre),2)));
	SET us_codigo = CONCAT(em_codigo,'-', us_codigo_temp);
	INSERT INTO usuario(nombre,edad,fechaCreacion,correo,codigo,contrasena,urlIMG,idTipoUsuario,idEmpresa) 
	VALUES(us_nombre,us_edad,NOW(),us_correo, us_codigo, us_contrasena, us_urlIMG, us_idTipoUsuario, us_idEmpresa );
END $$

/*

dominio: johnny.heliohost.org
usuario: tonioros_axac
password: axac123
database: tonioros_axaContro


    ___________     ____   ____      ___
    |          |   |   |   |   \     |  |
    |    ______|   |   |   |    \    |  |
    |   |___       |   |   |     \   |  |
    |   ____|      |   |   |      \  |  |
    |   |          |   |   |       \ |  |
    |   |          |   |   |    |\  \|  |
    |   |          |   |   |    | \     |
    |___|          |___|   |____|  \____| ALV 
*/ 