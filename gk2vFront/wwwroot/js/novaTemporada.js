var app = angular.module("app");

app.component("novaTemporada", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/novaTemporada.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope, $http, gk2vService) { /// chamada ao iniciar seu componente
        var $ctrl = this;
        $("body").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");

        $ctrl.criarTemporada = criarTemporada;
        $ctrl.setMesmaTemporada = setMesmaTemporada;
        $ctrl.setRodada = setRodada;
        $ctrl.mesmaTemporada = true;
        $ctrl.rodadaTemporada = 0;
        $ctrl.nomeTemporada = "";


        function setMesmaTemporada(value) {
            $ctrl.mesmaTemporada = value;
        }

        function setRodada(value) {
            $ctrl.rodadaTemporada = value;
        }


        //$ctrl.temporada = gk2vService.getTemporada();

        function criarTemporada() {
            if ($ctrl.nomeTemporada == "") {
                alert("De um nome a sua temporada");
            } else {
                var params = {
                    Id: gk2vService.getUserId(),
                    Fase: $ctrl.rodadaTemporada,
                    TimesMesmaEpoca: $ctrl.mesmaTemporada,
                    Nome: $ctrl.nomeTemporada
                }
                var api = "http://127.0.0.1:7000/api/Temporada/Inserir";
                $http.post(api, params)
                    .success(function (response) {
                        alert("Temporada criada com sucesso!");
                    }).error(function (error) {
                        alert("Falha ao criar temporada");
                    })
            }
        }
    }
});