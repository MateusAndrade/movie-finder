app.config(['$routeProvider','$locationProvider', function( $routeProvider, $locationProvider ){
        //configura hashbang prefix 
        $locationProvider.hashPrefix('!');

        //inicia configuração de rotas
        $routeProvider
        .when('/livro/:id',{
            templateUrl : 'livro.html',
            controller : 'livroController'
        })
        .when('/livro/:id/capitulo/:idCap',{
            templateUrl : 'capitulo.html',
            controller : 'capituloController'
        })
        .otherwise({
            redirectTo : '/',
            controller : 'controller/IndexController'            
        });

}]); 