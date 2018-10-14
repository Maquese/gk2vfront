var app = angular.module("app", []);

app.controller("apostaController", function ($scope, $http) {

    $scope.partidas = [];


    var api = 'api/Cup/Listar';

    function listarPartidas() {
        $scope.temporada = 'Temporada 1';
        $scope.fase = 'Quartas de final';
        $scope.partidas = [
            partida = {
                mandante: 'Brasil',
                visitante: 'Uruguai',
                resultado: null
            },
            partida = {
                mandante: 'Argentina',
                visitante: 'Alemanha',
                resultado: null
            },
        ]


        /*$http.post(api, $scope.user)
        .success(function (response) {
            $scope.partidas = response.data
        }).error(function (error) {
            alert("Falha ao listar partidas");
        })*/

    }

    listarPartidas();

    $scope.valoresAposta = [];

    $scope.apostaTime = function (value, index) {
        $scope.valoresAposta[index] = value;
    }

    $scope.efetuarAposta = function () {
        console.log($scope.valoresAposta);
        var api = 'api/Cup/EfetuarAposta'
        /* $http.post(api, $scope.valoresAposta)
             .success(function (response) {
                 alert("Aposta realizada, boa sorte!");
             }).error(function (error) {
                 alert("Falha ao realizar aposta.");
             })
        */
    };
});

/*(function (angular) {
    "use strict";

    angular.module("app").component("apostaComp", {
        //templateUrl: '../../gk2v-Front/html/aposta.html',
        //templateUrl: '../html/aposta.html',
        controller: controller,
        bindings: {

        }
    });

    controller.$inject = ["$rootScope", "$http", "$scope", "$timeout", "$q"];

    function controller($rootScope, $http, $scope, $timeout, $q) {
        var $ctrl = this;

      
        $ctrl.init = init;
        $ctrl.init();

      function init() {
          alert("componente");
       };

    }
})(window.angular);
*/