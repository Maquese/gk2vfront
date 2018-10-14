var app = angular.module("loginApp", []);

app.controller("loginCtrl", function ($scope, $http) {

    $scope.user = {};

    var api = 'api/user/CriarUsuario';

    $scope.salvarUsuario = function (user) {
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


    $scope.efetuarLogin = function () {
        console.log($scope.user);
        $http.post(api, $scope.user)
            .success(function (response) {
                alert("Usuario salvo com sucesso!");
            }).error(function (error) {
                alert("Falha ao salvar o usuário");
            })
    }


});