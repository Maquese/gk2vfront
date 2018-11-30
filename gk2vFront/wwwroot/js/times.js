var app = angular.module("app");

app.component("timesApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/ranking.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope, $http) { /// chamada ao iniciar seu componente
        var $ctrl = this;

        //alert("times");

        $ctrl.apostadores = [];
        //$("body").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");
        function listarTimes() {
            var api = "http://127.0.0.1:7000/api/Usuario/RankingUsuarioPorPontos";
            $http.post(api)
                .success(function (response) {
                    $ctrl.apostadores = response;
                }).error(function (error) {
                    alert("Falha no listar times");
                })
        }

        listarTimes();

    }
});