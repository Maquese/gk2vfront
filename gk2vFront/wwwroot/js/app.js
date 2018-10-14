var app = angular.module("app", []);

app.controller("appController", function ($scope, $http) {

    $scope.user = {};

    var api = 'api/user/CriarUsuario';

    $scope.salvarUsuario = function (user) {
        if (user.nome == '' || user.nomeSistema == '' || user.senha == '' || user.senhaConfirma == '' || user.mail == '')
            alert("Preencha os campos obrigatorios");
        else
            if (user.senha == user.senhaConfirma && user.policy)
                $http.post(api, $scope.user)
                    .success(function (response) {
                        alert("Usuario salvo com sucesso!");
                    }).error(function (error) {
                        alert("Falha ao salvar o usuário");
                    })
            else
                alert("Senhas diferentes");
    };


    $scope.cancelarUsuario = function () {
        $scope.user = {};
    }


});