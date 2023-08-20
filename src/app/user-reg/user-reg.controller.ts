angular.module('myApp').controller('RegisterController', function($scope, $http) {
  $scope.user = {};

  $scope.registerUser = function() {
    $http.post('http://localhost:3000/user/new-users', $scope.user)
      .then(function(response:any) {
        console.log('Registration complete', response.data);
      })
      .catch(function(error:any) {
        console.error('Registration error', error);
      })
  }
})
