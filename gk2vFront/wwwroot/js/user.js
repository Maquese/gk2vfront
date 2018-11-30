angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
    .component("userApp", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
        templateUrl: '../html/user.html', ///caminho do seu html brown
        bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
        controller: function ($http, gk2vService) { /// chamada ao iniciar seu componente
            var $ctrl = this;
            $("body").css("background", "");
            $ctrl.user = {};

            var api = 'http://localhost:7000/api/Usuario/Cadastrar';
            $ctrl.salvarUsuario = function (user) {
                var usuario = {}
                if (!nullOrUndef(gk2vService.getUser()))
                    usuario = gk2vService.getUser();
                else
                    usuario = user;


                if (user.nome == '' || user.nomeSistema == '' || user.senha == '' || user.senhaConfirma == '' || user.email == '')
                    alert("Preencha os campos obrigatorios");
                else
                    if (user.senha == user.senhaConfirma)
                        $http.post(api, usuario)
                            .success(function (response) {
                                alert("Usuario salvo com sucesso!");
                                gk2vService.setUser(response);
                            }).error(function (error) {
                                alert("Falha ao salvar o usuário");
                            })
                    else
                        alert("Senhas diferentes");
            };

            function preencherUser() {
                $ctrl.user = gk2vService.getUser();
                /* var api = 'http://127.0.0.1:7000/api/Usuario/Login';
                 $ctrl.user.email = "admin@admin.com";
                 $ctrl.user.senha = "admin";
                 var params = { 
                     email: $ctrl.user.email,
                     senha: $ctrl.user.senha
                  }
                 console.log(params);
                 $http.post(api,  params)
                     .success(function (response) {
                         $ctrl.user = response;
                     }).error(function (error) {
                         alert("Falha ao buscar o usuário");
                     })*/
            }

            preencherUser();

            $ctrl.cancelarUsuario = function () {
                $ctrl.user = {};
            }

            function nullOrUndef(obj) {
                return obj === undefined || obj == null;
            }


        }
    });