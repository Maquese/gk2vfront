var app = angular.module("app");

app.component("loginApp",{ //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
      templateUrl: '../html/login.html', ///caminho do seu html brown
      bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
      controller: function($rootScope){ /// chamada ao iniciar seu componente
        var $ctrl = this;
        
        $ctrl.chamaPrimo = chamaPrimo;

        function chamaPrimo(){
            console.log("chamou o primo no log");
        };
        
        $ctrl.nome = "cu";

        $ctrl.user = {};

    var api = 'api/user/CriarUsuario';

    $ctrl.salvarUsuario = function (user) {
        if (user.senha == user.senhaConfirma && user.policy)
            $http.post(api, $ctrl.user)
            .success(function (response) {
                alert("Usuario salvo com sucesso!");
            }).error(function (error) {
                alert("Falha ao salvar o usuário");
            })
        else
            alert("Senhas diferentes");
    };


    $ctrl.efetuarLogin = function () {
        console.log($ctrl.user);
        $http.post(api, $ctrl.user)
            .success(function (response) {
                alert("Usuario salvo com sucesso!");
            }).error(function (error) {
                alert("Falha ao salvar o usuário");
            })
    } 

    $rootScope.logado = false;
    console.log("chamou");
       }       //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
      
  });