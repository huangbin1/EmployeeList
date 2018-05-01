(function () {

    'use strict';

    require('angular');
    require('angular-route');
    require('angular-animate');
    var mainCtrl = require('./controllers/mainctrl');

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

      //Load controller
      .controller('MainController', ['$scope', mainCtrl]);

    app.directive('employeeList', function () {

        var link = function (scope, element, attr) {
          scope.list = [{
            name: 'summer',
            info: 'summer info',
            foldFlag: false
          }, {
            name: 'summer',
            info: 'summer info',
            foldFlag: false
          }, {
            name: 'summer',
            info: 'summer info',
            foldFlag: false
          }, {
            name: 'summer',
            info: 'summer info',
            foldFlag: false
          }];
          scope.showErrorTip = function (on) {
            scope.errors['SHOW' + scope.field] = on;
          };
          scope.isShowErrorTip = function () {
            return scope.errors['SHOW' + scope.field];
          };
        };

          return {
            // template: '<h1>自定义指令!</h1>',
            templateUrl: './views/employeelist.html',
            replace: true,
            restrict: 'E',
            
            link: link
          };
        });
    }());