app.controller('MovieController', function($scope){

    $scope.movie = angular.fromJson(sessionStorage.getItem('movie'));

    console.log($scope.movie);

});