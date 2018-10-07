var app = angular.module("app",[]);
app.controller("appController",function($scope,$http)
{
    /// teste de chamanda funcionando 100%
    $http.get("http://localhost:7000/api/Match/ListarPartidas",{})
    .then(function(response) {
        console.log(response.data);
    });
});