var app = angular.module('movies',['ngRoute']);

    app.factory('movieService', function($http){
          var _getMovies = function(movie){
            var params = {
                query : movie.name,
                api_key : '52e5a9f64c7ce2377f11efdfdf1cbf61',
                language : 'pt-BR'
            };
            return $http.get('https://api.themoviedb.org/3/search/movie',{ params : params });
          };

          var _getMovieDetail =  function(movie){
            var params = {
                api_key : '52e5a9f64c7ce2377f11efdfdf1cbf61',
                language : 'pt-BR'
            };
            return $http({
                method : "GET",
                url : "https://api.themoviedb.org/3/movie/"+movie.id+"?api_key=52e5a9f64c7ce2377f11efdfdf1cbf61&language=pt-BR",
                params : {
                    params : params
                }
            });
              
          };

          return {
              getMovies : _getMovies,
              getMovieDetail : _getMovieDetail
          }

       })
       .controller('indexController',function($scope){

       })
       .controller('searchMovieController',function($scope, movieService){        

            $scope.searchMovie = function(movie){
                movieService.getMovies(movie).then( function success(response){
                    sessionStorage.setItem('movies',angular.toJson(response.data.results));
                    location.assign("#!/movies");
                }, function error(response){
                    console.log(response);
                });
            }

       })
       .controller('listMoviesController',function($scope,$http, movieService){
            $scope.movies = angular.fromJson(sessionStorage.getItem('movies'));
            
            $scope.movieDetail = function(movie){

               movieService.getMovieDetail(movie).then( function success(response){
                   console.log(response);   
                   sessionStorage.setItem('movie',angular.toJson(response.data));
                   location.assign('#!/movieDetail');
               }, function error(response){
                   console.log(response);
               });

            };

       })
       .controller('detailMovie',function($scope){
            $scope.movie = angular.fromJson(sessionStorage.getItem('movie'));
       })
       .controller('searchSerie',function($scope){
           
       })
       .controller('detailSerie',function($scope){
           
       })