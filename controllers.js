var app = angular.module('scheduleControllers', []);

app.controller('MainCtrl', function($scope, $http, Sessions) {
  $scope.sessions = Sessions.get();
});
