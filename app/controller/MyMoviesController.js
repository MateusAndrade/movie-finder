app.controller('MyMoviesController', function($scope){

    $scope.movies = angular.fromJson(localStorage.getItem('movies'));

    

});