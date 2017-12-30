var app = angular.module("myApp",[]);

app.controller('MyController',['$scope', '$http', function($scope, $http){
    
    var req ={
        
    }
    $http({
        method: 'GET',
        url:'http://ip-api.com/json',
        
    }).then(function(response){

        console.log(response);
        $scope.data = response.data;
        
        
    })
    //http://ip-api.com/json
    //https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699
    
}]);