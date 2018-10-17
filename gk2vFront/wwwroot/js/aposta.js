angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
  .component("apostaPartida",{ //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
      templateUrl: '../html/apostaPartida.html', ///caminho do seu html brown
      bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
      controller: function(){ /// chamada ao iniciar seu componente
        var $ctrl = this;
        $ctrl.chamaPrimo = chamaPrimo;

        function chamaPrimo(){
            console.log("chamou o primo no log");
        };
        
        $ctrl.nome = "cu";


        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
      }
  });




/*var app = angular.module("app", []);

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
        })

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
        
    };
});
*/