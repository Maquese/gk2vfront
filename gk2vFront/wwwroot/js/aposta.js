angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
  .component("apostaPartida",{ //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
      templateUrl: '../html/apostaPartida.html', ///caminho do seu html brown
      bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
      controller: function($http, gk2vService){ /// chamada ao iniciar seu componente
        var $ctrl = this;
        $("body").css("background", "");
        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar

        $ctrl.partidas = [];
        $ctrl.temporada = gk2vService.getTemporada();
        $ctrl.valoresAposta = [];

        //var api = 'api/Cup/Listar';
    
        function listarPartidas() {

            $ctrl.partidas = gk2vService.getPartidas();
            // $ctrl.temporada = 'Temporada 1';

            if($ctrl.partidas[0].fase == 0)
             $ctrl.fase = "Oitavas";
             else if ($ctrl.partidas[0].fase == 1)
             $ctrl.fase = "Quartas";
             else if ($ctrl.partidas[0].fase == 2)
             $ctrl.fase = "Semi-final";
             else if ($ctrl.partidas[0].fase == 3)
             $ctrl.fase = "Final";
            // $ctrl.partidas = [
            //     partida = {
            //         mandante: 'Brasil',
            //         visitante: 'Uruguai',
            //         resultado: null
            //     },
            //     partida = {
            //         mandante: 'Argentina',
            //         visitante: 'Alemanha',
            //         resultado: null
            //     },
            // ]
        }
    
        listarPartidas();
        
        $ctrl.apostaTime = function (value, index) {
            $ctrl.valoresAposta[index] = value;
        }


    
        $ctrl.efetuarAposta = function () {
            var api = 'http://127.0.0.1:7000/api/Temporada/Apostar';

            var apostas= [];
for (let index = 0; index < $ctrl.partidas.length; index++) {
    apostas.push({CodigoJogo: $ctrl.partidas[index]._id, Pontos:0});
}


            var params = {
                IdUsuario: gk2vService.getUserId(),
                IdTemporada: $ctrl.temporada._id,
                Apostas:apostas
            }
            
            $http.post(api, params)
                 .success(function (response) {
                     alert("Aposta realizada, boa sorte!");
                 }).error(function (error) {
                     alert("Falha ao realizar aposta.");
                 })
            
        };

      }
  });