var app = angular.module("app");

app.component("quizApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/quiz.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope, $http) { /// chamada ao iniciar seu componente
        var $ctrl = this;
        $("body").css("background", "");

        $ctrl.escolherResposta = escolherResposta;
        $ctrl.responder = responder;

        $ctrl.pergunta = {
            enunciado: "Quantos gols o Pelé marcou em toda a Copa do Mundo?",
            resp1: "53 gols",
            resp2: "75 gols",
            resp3: "35 gols",
            resp4: "82 gols",
            respostaCorreta: ""
        }

        $ctrl.respostaUser = "";

        function escolherResposta(value) {
            $ctrl.respostaUser = value;
        }

        function responder() {
            if ($ctrl.respostaUser == $ctrl.pergunta.respostaCorreta) {
                alert("Certa a resposta");
            }
            else {
                alert("ERRRROOOOOUU");
            }
        }

        function getQuiz() {
            var api = "ResponderQuiz"
            $http.post(api)
                .success(function (response) {
                    $ctrl.pergunta = response;
                }).error(function (error) {
                    alert("Falha ao buscar quiz");
                })
        }

        //getQuiz();



        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
    }
});