angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
    .component("cupSimulator", { //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
        templateUrl: '../html/cupsimulator.html', ///caminho do seu html brown
        bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
        controller: function (gk2vService) { /// chamada ao iniciar seu componente
            var $ctrl = this;
            $ctrl.irPara = irPara;
            $("body").css("background", "");

            function irPara(pagina) {
                if (pagina == 'apostas') {
                    $ctrl.apostas = true;
                    $ctrl.temporadas = false;
                    $ctrl.perfil = false;
                    $ctrl.contato = false;
                    $ctrl.home = false;
                    $ctrl.quiz = false;
                    $ctrl.times = false;
                    $ctrl.ranking = false;
                    $ctrl.novaTemporada = false;
                } else if (pagina == 'perfil') {
                    $ctrl.apostas = false;
                    $ctrl.temporadas = false;
                    $ctrl.perfil = true;
                    $ctrl.contato = false;
                    $ctrl.home = false;
                    $ctrl.quiz = false;
                    $ctrl.times = false;
                    $ctrl.ranking = false;
                    $ctrl.novaTemporada = false;
                } else if (pagina == 'contato') {
                    $ctrl.apostas = false;
                    $ctrl.temporadas = false;
                    $ctrl.perfil = false;
                    $ctrl.contato = true;
                    $ctrl.home = false;
                    $ctrl.quiz = false;
                    $ctrl.times = false;
                    $ctrl.ranking = false;
                    $ctrl.novaTemporada = false;
                } else if (pagina == 'home' || pagina == 'temporadas') {
                    $ctrl.apostas = false;
                    $ctrl.temporadas = false;
                    $ctrl.perfil = false;
                    $ctrl.contato = false;
                    $ctrl.home = true;
                    $ctrl.quiz = false;
                    $ctrl.times = false;
                    $ctrl.ranking = false;
                    $ctrl.novaTemporada = false;
                }
                else if (pagina == 'quiz') {
                    $ctrl.apostas = false;
                    $ctrl.temporadas = false;
                    $ctrl.perfil = false;
                    $ctrl.contato = false;
                    $ctrl.home = false;
                    $ctrl.quiz = true;
                    $ctrl.times = false;
                    $ctrl.ranking = false;
                    $ctrl.novaTemporada = false;
                }
                else if (pagina == 'times') {
                    $ctrl.apostas = false;
                    $ctrl.temporadas = false;
                    $ctrl.perfil = false;
                    $ctrl.contato = false;
                    $ctrl.home = false;
                    $ctrl.quiz = false;
                    $ctrl.times = true;
                    $ctrl.ranking = false;
                    $ctrl.novaTemporada = false;
                }
                else if (pagina == 'ranking') {
                    $ctrl.apostas = false;
                    $ctrl.temporadas = false;
                    $ctrl.perfil = false;
                    $ctrl.contato = false;
                    $ctrl.home = false;
                    $ctrl.quiz = false;
                    $ctrl.times = false;
                    $ctrl.ranking = true;
                    $ctrl.novaTemporada = false;
                }
                else if (pagina == 'novaTemporada') {
                    $ctrl.apostas = false;
                    $ctrl.temporadas = false;
                    $ctrl.perfil = false;
                    $ctrl.contato = false;
                    $ctrl.home = false;
                    $ctrl.quiz = false;
                    $ctrl.times = false;
                    $ctrl.ranking = false;
                    $ctrl.novaTemporada = true;
                }
                paginaAtiva(pagina);
            }

            function paginaAtiva(pagina) {
                $("li").removeClass('current_page_item');
                $("#" + pagina).addClass('current_page_item');
            }

            if (!nullOrUndef(gk2vService.getPagina())) {
                irPara(gk2vService.getPagina());
            }
            else {
                irPara('home');
            }


           
            if (!nullOrUndef(gk2vService.getUser())) {
                gk2vService.getUserTipoUsuario() == 1 ? $ctrl.admin = true : $ctrl.admin = false;
                $ctrl.usuarioLogado = gk2vService.getUserNome();
            }else{
                $ctrl.userNaoCadastrado = true;
            }

            gk2vService.setMudaPagina(irPara);

            $ctrl.sairUser = function () {
                location.reload();
            }

            function nullOrUndef(obj) {
                return obj === undefined || obj == null;
            }

            function nullOrUndefOrEmpty(obj) {
                return obj === undefined || obj == null || obj === "";
            }
            //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
        }
    });