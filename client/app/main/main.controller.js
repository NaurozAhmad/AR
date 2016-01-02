'use strict';

(function () {

	class MainController {
		constructor($http, $scope, $stateParams, $state) {
			this.$http = $http;
			this.awesomeThings = [];
			this.$scope = $scope;
			this.$stateParams = $stateParams;
			this.$state = $state;
			$scope.selectedProject = false;

			$scope.featured = [{
				name: 'bazaar',
				title: 'bazaar',
				description: 'More content',
				image: 'Bazaar.png'
			}, {
				name: 'donations',
				title: 'donations',
				description: 'More content',
				image: 'Donations.png'
			}, {
				name: 'cricket',
				title: 'cricket',
				description: 'More content',
				image: 'Cricket.png'
			}, {
				name: 'dropbox',
				title: 'Stuff here',
				description: 'More content',
				image: 'Dropbox.png'
			}, {
				name: 'key',
				title: 'Stuff here',
				description: 'More content',
				image: 'Key.png'
			}, {
				name: 'lexi',
				title: 'Stuff here',
				description: 'More content',
				image: 'Lexi.png'
			}, {
				name: 'finalfour',
				title: 'Stuff here',
				description: 'More content',
				image: 'FinalFour.png'
			}, {
				name: 'football',
				title: 'Stuff here',
				description: 'More content',
				image: 'Football.png'
			}, {
				name: 'espnfootball',
				title: 'Stuff here',
				description: 'More content',
				image: 'ESPNFootball.png'
			}, {
				name: 'everpix',
				title: 'Stuff here',
				description: 'More content',
				image: 'Everpix.png'
			}, {
				name: 'feynman',
				title: 'Stuff here',
				description: 'More content',
				image: 'Feynman.png'
			}, {
				name: 'mindshare',
				title: 'Stuff here',
				description: 'More content',
				image: 'Mindshare.png'
			}, {
				name: 'fox',
				title: 'Stuff here',
				description: 'More content',
				image: 'Fox.png'
			}, {
				name: 'maher',
				title: 'Stuff here',
				description: 'More content',
				image: 'Maher.png'
			}, {
				name: 'elephant',
				title: 'Stuff here',
				description: 'More content',
				image: 'Elephant.png'
			}, {
				name: 'bose',
				title: 'Stuff here',
				description: 'More content',
				image: 'Bose.png'
			}, {
				name: 'hitch',
				title: 'Stuff here',
				description: 'More content',
				image: 'Hitch.png'
			}, {
				name: 'rights',
				title: 'Stuff here',
				description: 'More content',
				image: 'Rights.png'
			}];

			var selectedProject = $stateParams.projectName;

			for (var i = 0; i < $scope.featured.length; i++) {
				if (selectedProject === $scope.featured[i].name) {
					$scope.selectedProject = $scope.featured[i];
				}
			}

			$http.get('/api/things').then(response => {
				this.awesomeThings = response.data;
			});

			$scope.selectProject = function (project) {
				$state.go('main', {
					projectName: project
				});
				window.scrollTo(0, 0);
			}
		}

		addThing() {
			if (this.newThing) {
				this.$http.post('/api/things', {
					name: this.newThing
				});
				this.newThing = '';
			}
		}

		deleteThing(thing) {
			this.$http.delete('/api/things/' + thing._id);
		}
	}

	angular.module('animationRepublicApp')
		.controller('MainController', MainController);

})();
