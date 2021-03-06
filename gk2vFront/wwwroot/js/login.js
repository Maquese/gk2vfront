var app = angular.module("app");

app.component("loginApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
    templateUrl: '../html/login.html', ///caminho do seu html brown
    bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
    controller: function ($rootScope, $http, gk2vService) { /// chamada ao iniciar seu componente
        var $ctrl = this;

        //$("body").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");
        $ctrl.user = {};
        $rootScope.logado = false;

        $ctrl.homepage = true;
        $ctrl.loginPage = false;
        $ctrl.contatoPage = false;


        setTimeout(() => {
            
            $("#header.inicio").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");
        }, 500);

        $ctrl.logarPage = function () {
            $ctrl.homepage = false;
            $ctrl.contatoPage = false;
            $ctrl.loginPage = true;    
            $("body").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");
        }

        $ctrl.contactPage = function(){
            $ctrl.homepage = false;
            $ctrl.contatoPage = true;
            $ctrl.loginPage = false;    
            $("body").css("background", " ");
        }


        $ctrl.principalPage = function(){
            $ctrl.homepage = true;
            $ctrl.contatoPage = false;
            $ctrl.loginPage = false;    
            $("body").css("background", " ");
            $("#header.inicio").css("background", "url('../images/bg-1.jpg') no-repeat center center fixed");
        }


        $ctrl.efetuarLogin = function (user) {
            var api = 'http://127.0.0.1:7000/api/Usuario/Login';
            $http.post(api, user)
                .success(function (response) {
                    if (!nullOrUndef(response)) {
                        gk2vService.setUser(response);
                        $rootScope.logado = true;
                    } else
                        alert("Usuário não cadastrado");
                }).error(function (error) {
                    alert("Falha no login");
                })
            //    $rootScope.logado = true;
        }

        $ctrl.novoCadastro = function () {
            $rootScope.logado = true;
            gk2vService.setPagina('perfil');
            //gk2vService.mudaPagina('perfil');
        };


        function nullOrUndef(obj) {
            return obj === undefined || obj == null;
        }

        function nullOrUndefOrEmpty(obj) {
            return obj === undefined || obj == null || obj === "";
        }

        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
    }
});