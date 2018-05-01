(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-animate');
  /* import control */
  var mainCtrl = require('./controllers/mainctrl');

  /* import directive */
  var employeelist = require('./directives/employeelist');

  var app = angular.module('SampleApp', ['ngRoute', 'ngAnimate']);

  app.config([
      '$locationProvider',
      '$routeProvider',
      function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        // routes
        $routeProvider
          .when("/", {
            templateUrl: "./partials/partial1.html",
            controller: "MainController"
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ])

    /* load controller */
    .controller('MainController', ['$scope', mainCtrl])

    /* load directive */
    .directive('employeeList', employeelist);


}());