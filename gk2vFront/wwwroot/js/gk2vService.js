angular.module('app')
    .factory("gk2vService", ["$rootScope", function ($rootScope) {
        var service = this;

        return {
            setUser: setUser,
            getUser: getUser,
            setPagina: setPagina,
            getPagina: getPagina,
            nullOrUndef: nullOrUndef,
            setTemporada: setTemporada,
            getTemporada: getTemporada,
            setMudaPagina:setMudaPagina,
            mudaPagina:mudaPagina
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

        //pagina
        function setPagina(value) {
            service.pagina = value;
        }

        function getPagina() {
            return service.pagina;
        }

        function setMudaPagina(func) {
            service.irPagina = func;
        }

        function mudaPagina(func) {
            service.irPagina(service.getPagina());
        }


        function nullOrUndef(obj) {
            return obj === undefined || obj == null;
        }

        function nullOrUndefOrEmpty(obj) {
            return obj === undefined || obj == null || obj === "";
        }

        //temporada
        function setTemporada(value) {
            service.temporada = value;
        }

        function getTemporada() {
            return service.temporada;
        }
    }]);
