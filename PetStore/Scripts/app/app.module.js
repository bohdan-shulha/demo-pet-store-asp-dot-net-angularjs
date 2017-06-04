(function () {
    'use strict';

    const app = angular.module('petStore', [
		'ui.router',

		'petStore.screens',
	]);

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/owners');

		$stateProvider.state('owners', {
			url: '/owners',
			template: '<owners-screen></owners-screen>',
		});

		$stateProvider.state('pets', {
			url: '/pets/{ownerId}',
			template: '<pets-screen></pets-screen>',
		});
	}]);
})();