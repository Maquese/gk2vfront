angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
    .component("homeApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
        templateUrl: '../html/home.html', ///caminho do seu html brown
        bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
        controller: function (gk2vService) { /// chamada ao iniciar seu componente
            var $ctrl = this;
            $("body").css("background", "");
            $ctrl.home = true;

            //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
            $ctrl.temporadas = [];

            var api = 'api/Cup/ListarTemporadas';

            function listarTemporadas() {
                $ctrl.temporadas = [
                    temporada = {
                        mes: 'Jan',
                        dia: '05',
                        nome: 'Temporada 1',
                        descricao: 'Copa do mundo com todas as seleçoes de todas as copas'
                    },
                    temporada = {
                        mes: 'Set',
                        dia: '05',
                        nome: 'Copa do mundo',
                        descricao: 'Copa do mundo Russia 2018'
                    },
                ]


                /*$http.post(api, $scope.user)
                .success(function (response) {
                    $scope.temporadas = response
                }).error(function (error) {
                    alert("Falha ao listar temporadas");
                })*/

            }

            listarTemporadas();

            $ctrl.escolherTemporada = function (value) {
                $ctrl.temporadaEscolhida = value;
                ////chamada para partida
                gk2vService.setTemporada(value);
                gk2vService.setPagina('apostas');
                gk2vService.mudaPagina();
            }
        }
    })