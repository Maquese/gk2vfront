angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
  .component("apostaPartida",{ //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
      templateUrl: '../html/apostaPartida.html', ///caminho do seu html brown
      bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
      controller: function(){ /// chamada ao iniciar seu componente
        var $ctrl = this;

        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar

        $ctrl.partidas = [];


        var api = 'api/Cup/Listar';
    
        function listarPartidas() {
            $ctrl.temporada = 'Temporada 1';
            $ctrl.fase = 'Quartas de final';
            $ctrl.partidas = [
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
    
    
            /*$http.post(api, $ctrl.user)
            .success(function (response) {
                $ctrl.partidas = response.data
            }).error(function (error) {
                ctrl("Falha ao listar partidas");
            })*/
    
        }
    
        listarPartidas();
    
        $ctrl.valoresAposta = [];
    
        $ctrl.apostaTime = function (value, index) {
            $ctrl.valoresAposta[index] = value;
        }
    
        $ctrl.efetuarAposta = function () {
            console.log($ctrl.valoresAposta);
            var api = 'api/Cup/EfetuarAposta'
            /* $http.post(api, $ctrl.valoresAposta)
                 .success(function (response) {
                     alert("Aposta realizada, boa sorte!");
                 }).error(function (error) {
                     alert("Falha ao realizar aposta.");
                 })*/
            
        };

      }
  });