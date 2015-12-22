'use strict';

angular.module('animationRepublicApp.auth', [
  'animationRepublicApp.constants',
  'animationRepublicApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
