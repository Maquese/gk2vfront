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
        $ctrl.mesmaTemporada = null;
        $ctrl.rodadaTemporada = "";

        function setMesmaTemporada(value) {
            $ctrl.mesmaTemporada = value;
        }

        function setRodada(value){
            $ctrl.rodadaTemporada = value;
        }


        $ctrl.temporada = gk2vService.getTemporada();

        function criarTemporada() {
            var api = "api/CriarTemporada";
            /*$http.post(api, {Temporada:$ctrl.mesmaTemporada,Rodada: $ctrl.rodadaTemporada })
            .success(function (response) {
                alert("Temporada criada com sucesso!");
            }).error(function (error) {
                ctrl("Falha ao criar temporada");
            })*/
        }
    }
});