angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
  .component("cupSimulator",{ //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
      templateUrl: '../html/cupsimulator.html', ///caminho do seu html brown
      bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
      controller: function(){ /// chamada ao iniciar seu componente
        var $ctrl = this;
        $ctrl.irPara = irPara;
        $("body").css("background","");

function irPara(pagina){
    if(pagina =='apostas'){
        $ctrl.apostas = true;
        $ctrl.temporadas = false;
        $ctrl.perfil = false;
        $ctrl.contato = false;
        $ctrl.home = false;
    }else if(pagina =='temporadas'){
        $ctrl.apostas = false;
        $ctrl.temporadas = true;
        $ctrl.perfil = false;
        $ctrl.contato = false;
        $ctrl.home = false;
    }else if(pagina =='perfil'){
        $ctrl.apostas = false;
        $ctrl.temporadas = false;
        $ctrl.perfil = true;
        $ctrl.contato = false;
        $ctrl.home = false;
    }else if(pagina =='contato'){
        $ctrl.apostas = false;
        $ctrl.temporadas = false;
        $ctrl.perfil = false;
        $ctrl.contato = true;
        $ctrl.home = false;
    }else if(pagina =='home'){
        $ctrl.apostas = false;
        $ctrl.temporadas = false;
        $ctrl.perfil = false;
        $ctrl.contato = false;
        $ctrl.home = true;
    }
}

irPara('home');

        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
      }
  });