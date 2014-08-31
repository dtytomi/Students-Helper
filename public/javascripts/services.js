angular.module('studentServices', ['ngResource'])
  .factory('Student', ['$resource', 
  	function($resource) {
	  	return $resource('students/:id', { studentId: '@_id'},
	  	{
	  		updates: {
	  			method: 'PUT'
	  		}
  		});
  	}]);