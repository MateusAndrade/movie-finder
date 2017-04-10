app.controller('indexController', function($scope,$http,$routeParams){

    $scope.searchMovie = function(movie){
        $http({
            method : "GET",
            url : "https://api.themoviedb.org/3/search/movie?api_key=52e5a9f64c7ce2377f11efdfdf1cbf61&language=pt-BR",
            params : {
                query : movie
            }
        }).then(function mySucces(response) {
            $scope.movies = response.data.results;
            console.log(response.data.results);
        }, function myError(response) {
            if( reponse.response == 'False'){
                console.log('Nenhum filme encontrado.');
            }
        });
    }

    $scope.moreInfo = function(movie){
        $http({
            method : "GET",
            url : "https://api.themoviedb.org/3/movie/"+movie.id+"?api_key=52e5a9f64c7ce2377f11efdfdf1cbf61&language=pt-BR",
        }).then(function mySucces(response) {
            console.log(response.data);
            sessionStorage.setItem('movie',angular.toJson(response.data));
            location.assign('movie-detail.html');
        }, function myError(response) {
            if( reponse.response == 'False'){
                console.log('Nenhum filme encontrado.');
            }
        });
    }


});