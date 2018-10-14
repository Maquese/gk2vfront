var app = angular.module("app", []);

app.controller("indexController", function ($scope, $http) {

    $scope.temporadas = [];

    var api = 'api/Cup/ListarTemporadas';

    function listarTemporadas() {
        $scope.temporadas = [
            temporada = {
                mes: 'Jan',
                dia: '05',
                nome: 'Temporada 1',
                descricao:'Copa do mundo com todas as seleçoes de todas as copas'
            },
            temporada = {
                mes: 'Set',
                dia: '05',
                nome: 'Copa do mundo',
                descricao:'Copa do mundo Russia 2018'
            },
        ]


        /*$http.post(api, $scope.user)
        .success(function (response) {
            $scope.temporadas = response.data
        }).error(function (error) {
            alert("Falha ao listar temporadas");
        })*/

    }

    listarTemporadas();   

    $scope.escolherTemporada = function (value) {
        $scope.temporadaEscolhida = value;
        alert($scope.temporadaEscolhida.nome);
        ////chamada para partida
    }

    
});