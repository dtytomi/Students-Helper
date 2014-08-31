//controller for the form
angular.module('studentsRateCtrl', [])

    .controller('studentsListCtrl', ['$scope', 'Student', function($scope, Student) {
        $scope.students = Student.query();
        console.log($scope.students);

    }])

    .controller('searchCtrl', ['$scope', function($scope) {
        $scope.love = "I love u";
    }])

    .controller('createNewCtrl', ['$scope','$location', 'Student', function($scope, $location, Student){
        $scope.create = function(){
            var student  = new Student({
                name: this.name,
                level: this.level,
                course: this.course,
                grade: this.grade,
                email: this.email
            });
            student.$save(function(response){
                $location.path('/students');
            });
        };
    }]);