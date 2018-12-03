var app = angular.module("app");

app.component("quizApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/quiz.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope, $http, gk2vService) { /// chamada ao iniciar seu componente
        var $ctrl = this;
        $("body").css("background", "");

        $ctrl.escolherResposta = escolherResposta;
        $ctrl.responder = responder;

        $ctrl.respostaUser = "";
        $ctrl.acertou = false;

        function escolherResposta(value) {
            $ctrl.respostaUser = value;
        }

        function responder() {
            var api = "http://127.0.0.1:7000/api/Quiz/RespostaQuiz";
            if ($ctrl.respostaUser == $ctrl.pergunta.opcaoCerta) {
                alert("Certa a resposta");
                $ctrl.acertou = true;
            }
            else {
                alert("ERRRROOOOOUU");
                $ctrl.acertou = false;
            }

            var params = {
                IdUsuario: gk2vService.getUserId(),
                IdQuiz: $ctrl.pergunta._id,
                Acertou: $ctrl.acertou
            }

            $http.post(api, params)
                .success(function (response) {
                    atualizarPontuacao();
                    
                }).error(function (error) {
                    alert("Falha ao salvar resposta");
                })

        }

        function getQuiz() {
            var api = "http://127.0.0.1:7000/api/Quiz/QuizDiario"
            $http.post(api)
                .success(function (response) {
                    $ctrl.pergunta = response;
                }).error(function (error) {
                    alert("Falha ao buscar quiz");
                })
        }

        function atualizarPontuacao(){
            var api = "http://127.0.0.1:7000/api/Usuario/PontuacaoPorId"
            var params = {
                _id: gk2vService.getUserId()
            }
            $http.post(api, params)
            .success(function (response) {
                gk2vService.setUserPontos(response);
                gk2vService.setPagina('home');
                    gk2vService.mudaPagina();
            }).error(function (error) {
                alert("Falha ao atualizar pontuação");
            })
        }

        getQuiz();



        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
    }
});