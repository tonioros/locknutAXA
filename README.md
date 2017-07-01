# Mecanica
![AXA Control Logo](https://axacontrol.herokuapp.com/images/favicon.png)

**Este archivo sera usado como documentacion de proyecto**
## Web Services

Estamos teniendo un estandar para las URLs dentro del APP
Todas inician Con 

```http
    axacontrol.herokuapp.com | localhost /api<Nombre_Controlador>
```
Quisiera si pueden modificar este archivo y colocar las URL que tiene su WS y los datos que devuelve

### Servicio
#### /apiServicio/ID/:EmpresaID

```json
{
	idServicio : Integer , 
	idUsuario : Integer , 
	nombreUsuario : String , 
	codigoUsuario : String , 
	imgUsuario : String , 
	idAuto : Integer , 
	modelo : String , 
	marca : String , 
	anio : Integer , 
	codigoAuto : String , 
	fechaServicio : String , 
	idEmpresa : Integer 
}
```

Si quieren poner algo aca, modifiquen el archivo README.md

#### Frameworks en uso

	* AngularJS
	* Bootstrap 4
	* Font Awesome
	* Jquery


Si estan usando Visual Studio Code hagan **Ctrl + Shift + P** y en la paleta de opciones escriban **Markdown Open Preview** para tener una previa de como se vera esta archivo en Git Hub
