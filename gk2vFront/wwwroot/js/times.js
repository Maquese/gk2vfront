var app = angular.module("app");

app.component("timesApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/times.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope, $http) { /// chamada ao iniciar seu componente
        var $ctrl = this;

        alert("times");

        $ctrl.listaTimes = [];
        //$("body").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");
        var api = "ListarTImes";
        function listarTimes() {
            $http.post(api)
                .success(function (response) {
                    $ctrl.listaTimes = response;
                }).error(function (error) {
                    alert("Falha no listar times");
                })
        }

        listarTimes();

    }
});