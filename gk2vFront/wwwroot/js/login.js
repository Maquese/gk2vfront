var app = angular.module("app");

app.component("loginApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/login.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope) { /// chamada ao iniciar seu componente
        var $ctrl = this;

        $("body").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");
        $ctrl.user = {};
        var api = 'api/user/CriarUsuario';
        $ctrl.salvarUsuario = function (user) {
            if (user.senha == user.senhaConfirma && user.policy)
                /*    $http.post(api, $ctrl.user)
                    .success(function (response) {
                        alert("Usuario salvo com sucesso!");
                    }).error(function (error) {
                        alert("Falha ao salvar o usuário");
                    })*/
                alert("Usuario salvo com sucesso!");
            else
                alert("Senhas diferentes");
        };

        $ctrl.efetuarLogin = function () {
            $rootScope.logado = true;
            /*$http.post(api, $ctrl.user)
                .success(function (response) {
                    alert("Usuario salvo com sucesso!");
                    $rootScope.logado = true;
                }).error(function (error) {
                    alert("Falha ao salvar o usuário");
                })*/
        }

        $rootScope.logado = false;
        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
    }
});