angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
    .component("userApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
        templateUrl: '../html/user.html', ///caminho do seu html brown
        bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
        controller: function ($http) { /// chamada ao iniciar seu componente
            var $ctrl = this;

            $ctrl.user = {};

            //var api = 'api/Usuario/Cadastrar';

            var api = 'http://localhost:7000/api/Usuario/Cadastrar';
            $ctrl.salvarUsuario = function (user) {
                if (user.nome == '' || user.nomeSistema == '' || user.senha == '' || user.senhaConfirma == '' || user.mail == '')
                    alert("Preencha os campos obrigatorios");
                else
                    if (user.senha == user.senhaConfirma && user.policy)
                        $http.post(api, $ctrl.user)
                            .success(function (response) {
                                alert("Usuario salvo com sucesso!");
                            }).error(function (error) {
                                alert("Falha ao salvar o usuário");
                            })
                    else
                        alert("Senhas diferentes");
            };

            function preencherUser() {
                var api = 'http://localhost:7000/api/Usuario/Login';
                $ctrl.user.mail = "g@gk2v.com";
                $ctrl.user.senha = "g";
                var params = { 
                    email: $ctrl.user.mail,
                    senha: $ctrl.user.senha
                 }

                $http.post(api, params)
                    .success(function (response) {
                        $ctrl.user = response.data;
                    }).error(function (error) {
                        alert("Falha ao buscar o usuário");
                    })
            }

            preencherUser();

            $ctrl.cancelarUsuario = function () {
                $ctrl.user = {};
            }

        }
    });