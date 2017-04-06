app.controller('indexController', function($scope,$http,$routeParams){

    if( localStorage.getItem('movies') == null){
        var movies = [];
        localStorage.setItem('movies',movies);
    } else {
        movies = angular.fromJson(localStorage.getItem('movies'));
    }

    $scope.habilitaForm = function(bol){
        $scope.formIsVisible = true;
        console.log($scope.formIsVisible);
        $("#menu").removeClass('in');
    };

    $scope.searchMovie = function(name){
        $http({
            method : "GET",
            url : "http://www.omdbapi.com/",
            params : {
                t : name 
            }
        }).then(function mySucces(response) {
            $scope.movie = response.data;
            console.log(response.data);
        }, function myError(response) {
            if( reponse.response == 'False'){
                console.log('Nenhum filme encontrado.');
            }
        });
    }

    $scope.saveMovie = function(movie){
        console.log(movies);        
        movies.push(angular.copy(movie));
        localStorage.setItem('movies',angular.toJson(movies));
    }

});