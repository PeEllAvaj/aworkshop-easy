var app = angular.module('scheduleControllers', []);

app.controller('MainCtrl', function($scope, $http) {
  $http.get('http://mortalpowers.com/data.json').success(function(data) {
    $scope.sessions = data["events"];
  });
});
