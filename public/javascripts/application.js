$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >0){
            $(".header").addClass("acortar");
            $("#h2-headerr").removeClass("text-header");
            $("#h2-header").addClass("text-no-header");
        }else{
            $(".header").removeClass("acortar");
            $("#h2-header").addClass("text-header");
            $("#h2-header").removeClass("text-no-header");
   }
    })
})

var app = angular.module("axac",['ngCookies'])
app.controller("loginUsers", ["$scope","$http","$cookies", function($scope,$http,$cookies){
    /**@param user - Input de Codigo o Correo *@param pass - Input para Contraseña
     * Esto proviene desde el FORM de la vista
    */
    $scope.loginUS = function(){
        $http({
            method: 'post',
            url: '/autenticar',
            headers: {"Content-Type":"application/json"},
            data: {nick: $scope.LOGU.codigoUS,contrasena: $scope.LOGU.passUS}
        }).then(function(response){
            if(respose.data.Mensaje == true){
                $cookies.put("UDI", response.data.usuario.idUsuario)
                $cookies.put("UNA", response.data.usuario.nombre)
                $cookies.put("UCO", response.data.usuario.correo)
                $cookies.put("UCD", response.data.usuario.codigo)
                window.localStorage.setItem("usuarioCl",response.data.usuario)
                window.location = response.data.location
            }else{
            $scope.error = {}
            $scope.error.status = true;
            $scope.error.titulo = "¡Oh vaya!"
            $scope.error.mensaje = "Correo o contraseña incorrecto, prueba denuevo :c"
            }
        }, function (response){
            $scope.error = {}
            $scope.error.status = true;
            $scope.error.titulo = "¡Tenemos problemas!"
            $scope.error.mensaje = "Ocurrio un error de red, recarga la pagina, sino consulta con el administrador de la pagina"
        })
    }
}])

app.controller("registrarCLCNTR", ["$scope","$http","$cookies", function($scope,$http,$cookies){
    $scope.searchCD = function(){
        $http({
            url: "/api/empresa/CD/"+$scope.codigoEMRE,
            method: "get"
        }).then(function(response){
            if(response.data.Mensaje != false){
                $scope.nombreEM = response.data.Mensaje.nombre
                $cookies.put("IDE", response.data.Mensaje.idEmpresa)
            }else{
                $scope.nombreEM = "Codigo de Empresa no encontrado"
            }
        })
    }
    $scope.registrarCL = function(){
        if($scope.contrasenaCL == $scope.contrasenaCL2){
        if(typeof $scope.nombreEM != undefined && $scope.nombreEM != "" && $scope.nombreEM != "Codigo de Empresa no encontrado"){
            var data = {
                nombre: $scope.nombreCL,
                edad: $scope.edadCL,
                correo: $scope.correoCL,
                urlIMG: $scope.urlIMGCL,
                idTipoUsuario: 3,
                idEmpresa: $cookies.get("IDE"),
                contrasena: $scope.contrasenaCL
            }
            $http({
                url:"/api/usuario",
                method :"post",
                data: data,
                headers: {"Content-Type": "application/json"}
            }).then(function(response){
                if(response.data.Mensaje != false){
                    $cookies.remove("IDE")
                }
            })          
        }else{
            $scope.error.show =true
            $scope.error.titulo = "¡Oh no!"
            $scope.error.mensaje = "Escribe un codigo de taller valido"
        }
        }else{
            $scope.error.show =true
            $scope.error.titulo = "¡Oh oh!"
            $scope.error.mensaje = "Las contraseñas no conciden"
        }
    }
}])

app.controller("servicioCTRL",["$scope","$http","$cookies", function($scope,$http,$cookies){
    function getData(){
        $http.get("../../api/servicio/ID/1").then(function(response){
        $scope.servicioList =response.data            
        })
    }
    getData()
}])