app.config(['$routeProvider','$locationProvider', function( $routeProvider, $locationProvider ){
        //configura hashbang prefix 
        $locationProvider.hashPrefix('!');

        //inicia configuração de rotas
        $routeProvider
        .when('/pesquisa',{
            templateUrl : 'app/views/form-pesquisa.html',
            controller : 'searchMovieController'
        })
        .when('/movies',{
            templateUrl : 'app/views/lista-filmes.html',
            controller : 'listMoviesController'
        })
        .when('/movieDetail',{
            templateUrl : 'app/views/movie-detail.html',
            controller : 'detailMovieController'
        })
        .when('/myMovies',{
            templateUrl : 'app/views/meus-filmes.html',
            controller : 'myMovieController'
        })
        .otherwise({
            redirectTo : '/',
            templateUrl : 'app/views/menu-principal.html'           
        });

}]); 