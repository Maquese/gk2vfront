angular.module("app") /// seguindo assim pode ser sem modulos novos só pedir sempre o modulo de app fodasse a performance :)
  .component("viewTeste",{ //// nomo do componente no html trasformar as maiusculas em traço mais a letra maiscula em minuscula exemplo view-teste
      templateUrl: '../html/viewTeste.html', ///caminho do seu html brown
      bindings: { name: '@' }, /// se precisar binda pra passar parametros para seus componentes mas recomendo usar uma serivice
      controller: function(){ /// chamada ao iniciar seu componente
        var $ctrl = this;
        $ctrl.chamaPrimo = chamaPrimo;

        function chamaPrimo(){
            console.log("chamou o primo no log");
        };
        
        $ctrl.nome = "cu";


        //// aqui as logicas da tela/regras da tela criando functions e suas properts lembra de usar o $ctrl na view par apontar
      }
  });