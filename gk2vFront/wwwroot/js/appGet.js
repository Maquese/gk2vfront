var app = angular.module("appGet",[]);
app.controller("appControllerGet",function($scope,$http)
{
    /// teste de chamanda funcionando 100%
    $http.get("http://localhost:7000/api/Match/ListarPartidas",{})
    .then(function(response) {
        console.log(response.data);
    });
});