angular.module("ratesApp", ['ngRoute', 'studentsRateCtrl', 'studentServices'])

	// configuring our routes
	.config(['$routeProvider', 
		function($routeProvider){
			$routeProvider.
				when( '/students', { templateUrl: 'partials/list.html', controller:'studentsListCtrl'})
				.when( '/students/:studentId', {templateUrl: 'partials/search.html', controller: 'searchCtrl'})
				.when( '/new', {templateUrl: 'partials/new.html', controller: 'createNewCtrl'})
				.otherwise({redirectTo: '/new'
		});

	}]);
