'use strict';

angular.module('animationRepublicApp', [
  'animationRepublicApp.auth',
  'animationRepublicApp.admin',
  'animationRepublicApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
