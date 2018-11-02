angular.module('app')
    .factory("gk2vService", ["$rootScope", function ($rootScope) {
        var service = this;

        return {
            setUser: setUser,
            getUser: getUser,
        };
///construtor
        function setUser(value) {
            service.usuarioLogado = value;
        }

        function getUser() {
            return service.usuarioLogado;
        }


        ///getters e setters
        function setUserId(value) {
            service.usuarioLogado.id = value;
        }

        function getUserId() {
            return service.usuarioLogado.id;
        }


        function setUserMail(value) {
            service.usuarioLogado.email = value;
        }

        function getUserMail() {
            return service.usuarioLogado.email;
        }

        function setUserSenha(value) {
            service.usuarioLogado.senha = value;
        }

        function getUserSenha() {
            return service.usuarioLogado.senha;
        }

        function setUserNome(value) {
            service.usuarioLogado.nome = value;
        }

        function getUserNome() {
            return service.usuarioLogado.nome;
        }

        function setUserTipoUsuario(value) {
            service.usuarioLogado.tipoUsuario = value;
        }

        function getUserTipoUsuario() {
            return service.usuarioLogado.tipoUsuario;
        }
    }]);
