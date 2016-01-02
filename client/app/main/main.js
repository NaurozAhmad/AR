'use strict';

angular.module('animationRepublicApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('main', {
				url: '/:projectName',
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			});
	});
