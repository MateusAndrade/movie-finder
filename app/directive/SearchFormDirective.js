app.directive('searchForm', function(){
    return {
        restric : 'E',
        template : `
            <div class="row background-form" ng-hide="movie != undefined" ng-show="formIsVisible == true">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="title">Movie:</label>
                        <input class="form-control" type="text" ng-model="name" placeholder="Type the Name of a Movie:">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success btn-block" ng-disabled="name == undefined" ng-click="searchMovie(name)">Search <span class="glyphicon glyphicon-ok"></span></button>                
                    </div>
                </div>
            </div>
        `
    }
});