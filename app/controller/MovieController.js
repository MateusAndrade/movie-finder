app.controller('MovieController', function($scope){

    $scope.movie = angular.fromJson(sessionStorage.getItem('movie'));
    var movies = angular.fromJson(localStorage.getItem('my_movies'));

    $scope.saveMovie = function(movie){
        
        if(localStorage.getItem('my_movies')){
            movies.push(movie);
            localStorage.setItem('my_movies',movies);
            console.log(localStorage.getItem('my_movies'));
            console.log(movie);
        } else {
            localStorage.setItem('my_movies',angular.toJson([movie]));
        }

    }

});