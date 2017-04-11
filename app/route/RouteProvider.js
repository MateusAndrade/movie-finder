app.config(['$routeProvider','$locationProvider', function( $routeProvider, $locationProvider ){
        //configura hashbang prefix 
        $locationProvider.hashPrefix('!');

        //inicia configuração de rotas
        $routeProvider
        .when('/pesquisa',{
            templateUrl : 'app/views/form-pesquisa.html'
        })
        .otherwise({
            redirectTo : '/',
            templateUrl : 'app/views/menu-principal.html'           
        });

}]); 