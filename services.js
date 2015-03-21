var services = angular.module('scheduleServices', ['ngResource']);

services.factory('Sessions', function($resource){
  return $resource('http://mortalpowers.com/data.json', {})
});