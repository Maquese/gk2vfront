var app = angular.module("app");

app.component("timesApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/times.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope, $http) { /// chamada ao iniciar seu componente
        var $ctrl = this;

        $("body").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");

        alert("times");

        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
    }
});