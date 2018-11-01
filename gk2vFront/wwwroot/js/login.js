var app = angular.module("app");

app.component("loginApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/login.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope, $http) { /// chamada ao iniciar seu componente
        var $ctrl = this;

        $("body").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");
        $ctrl.user = {};
        $rootScope.logado = false;

        $ctrl.efetuarLogin = function (user) {
            /*var api = 'http://127.0.0.1:7000/api/Usuario/Login';
            $http.post(api, user)
                .success(function (response) {
                    $rootScope.logado = true;
                }).error(function (error) {
                    alert("Falha no login");
                })*/
                $rootScope.logado = true;
        }

        $ctrl.novoCadastro = function () {
            $rootScope.logado = true;
            irPara('perfil');
        };
        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
    }
});