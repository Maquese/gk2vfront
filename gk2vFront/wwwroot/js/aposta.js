angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
    .component("apostaPartida", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
        templateUrl: '../html/apostaPartida.html', ///caminho do seu html brown
        bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
        controller: function ($http, gk2vService) { /// chamada ao iniciar seu componente
            var $ctrl = this;
            $("body").css("background", "");

            // $ctrl.partidas = [];
            // $ctrl.temporada = gk2vService.getTemporada();
            // $ctrl.valoresAposta = [];
            $ctrl.pontosTemporada = [];

            function listarPartidas() {
                $ctrl.partidas = [];
                $ctrl.temporada = gk2vService.getTemporada();
                $ctrl.valoresAposta = [];
                $ctrl.partidas = gk2vService.getPartidas();
                if ($ctrl.partidas[0].fase == 0)
                    $ctrl.fase = "Oitavas";
                else if ($ctrl.partidas[0].fase == 1)
                    $ctrl.fase = "Quartas";
                else if ($ctrl.partidas[0].fase == 2)
                    $ctrl.fase = "Semi-final";
                else if ($ctrl.partidas[0].fase == 3)
                    $ctrl.fase = "Final";
            }

            listarPartidas();

            $ctrl.apostaTime = function (value, fase, vencedor, index) {
                
                var pontuacao = 0
                if (fase == 0)
                    pontuacao = 10;
                else if (fase == 1)
                    pontuacao = 20;
                else if (fase == 2)
                    pontuacao = 40;
                else if (fase == 3)
                    pontuacao = 80;


                if (value == vencedor) {
                    $ctrl.pontosTemporada[index] = pontuacao;
                }
                else {
                    $ctrl.pontosTemporada[index] = -pontuacao ;
                }
            }

            $ctrl.efetuarAposta = function () {
                var api = 'http://127.0.0.1:7000/api/Temporada/Apostar';
                var apostas = [];
                for (let index = 0; index < $ctrl.partidas.length; index++) {
                    apostas.push({ CodigoJogo: $ctrl.partidas[index]._id, Pontos: $ctrl.pontosTemporada[index] });
                }
                var params = {
                    IdUsuario: gk2vService.getUserId(),
                    IdTemporada: $ctrl.temporada._id,
                    Apostas: apostas
                }
                $http.post(api, params)
                    .success(function (response) {
                        alert("Aposta realizada, boa sorte!");
                        proximaFase();
                    }).error(function (error) {
                        alert("Falha ao realizar aposta.");
                    })

            };

            function proximaFase() {
                var api = 'http://127.0.0.1:7000/api/Temporada/ListarJogosPorTemporadaFase';
                $ctrl.temporada.faseInicial += 1;
                var params = {
                    Id: $ctrl.temporada._id,
                    Fase: $ctrl.temporada.faseInicial
                }
                $http.post(api, params)
                    .success(function (response) {
                        gk2vService.setPartidas(response);
                        gk2vService.setTemporada($ctrl.temporada);
                        listarPartidas();
                        // if (response.length <= 0) {
                        //     alert("Temporada encerrada, obrigado por jogar.");
                        // }
                    }).error(function (error) {
                        alert("Falha ao listar partidas");
                    })
            }

            $ctrl.voltarHome = function () {
                gk2vService.setPagina('home');
                gk2vService.mudaPagina();
            }
        }
    });