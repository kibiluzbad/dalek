'use strict';


// Declare app level module which depends on filters, and services
angular.module('dalek', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/timesheet', {templateUrl: 'partials/timesheet.html', controller: TimesheetController});
    $routeProvider.when('/timesheet/:date', {templateUrl: 'partials/editTime.html', controller: EditTimeController});
    $routeProvider.otherwise({redirectTo: '/timesheet'});
  }]);
