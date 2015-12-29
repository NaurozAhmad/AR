'use strict';

(function () {

	class MainController {
		constructor($http, $scope) {
			this.$http = $http;
			this.awesomeThings = [];
			this.$scope = $scope;

			console.log('hey there');

			$scope.featured = [{
				title: 'Stuff here',
				description: 'More content',
				image: 'Bazaar.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Donations.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Cricket.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Dropbox.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Key.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Lexi.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'FinalFour.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Football.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'ESPNFootball.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Everpix.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Feynman.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Fox.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Maher.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Mindshare.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Elephant.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Bose.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Hitch.png'
			}, {
				title: 'Stuff here',
				description: 'More content',
				image: 'Rights.png'
			}]

			$http.get('/api/things').then(response => {
				this.awesomeThings = response.data;
			});
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
