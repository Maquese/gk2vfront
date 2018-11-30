angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
    .component("homeApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
        templateUrl: '../html/home.html', ///caminho do seu html brown
        bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
        controller: function ($http, gk2vService) { /// chamada ao iniciar seu componente
            var $ctrl = this;
            $("body").css("background", "");
            $ctrl.home = true;
            $ctrl.temporadas = [];
            
                        
            function listarTemporadas() {
                var api = 'http://127.0.0.1:7000/api/Temporada/ListarTemporadas';
                $http.post(api, {IdUsuario:gk2vService.getUserId()})
                .success(function (response) {
                    $ctrl.temporadas = response
                }).error(function (error) {
                    alert("Falha ao listar temporadas");
                })
            }

            listarTemporadas();

            $ctrl.escolherTemporada = function (value) {
                var api = 'http://127.0.0.1:7000/api/Temporada/ListarJogosPorTemporadaFase';
                var params = {
                    Id:value._id,
                    Fase: value.faseInicial
                }
                $http.post(api, params)
                .success(function (response) {
                    gk2vService.setPartidas(response);
                    gk2vService.setTemporada(value);
                    gk2vService.setPagina('apostas');
                    gk2vService.mudaPagina(value);
                }).error(function (error) {
                    alert("Falha ao listar temporadas");
                })
            }
        }
    })