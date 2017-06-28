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
            url: '',
            headers: {"Content-Type":"application/json"},
            data: {CodigoUS: $scope.LOGU.codigoUS,PassUS: $scope.LOGU.passUS}
        }).then(function(response){
            console.log("SUCCESS")
            if(respose.data.Mensaje == true){

            }else{

            }

        }, function (response){
            console.log("FAIL")
            $scope.error = {}
            $scope.error.status = true;
            $scope.error.titulo = "¡Tenemos problemas!"
            $scope.error.mensaje = "Ocurrio un error de red, recarga la pagina, sino consulta con el administrador de la pagina"
        })
    }
}])