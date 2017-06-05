(function () {
	'use strict';

	// It would be perfect to use something like TypeScript with UMD and/or webpack2,
	// but I'm tired and it is better for me to spend time on ASP.NET and AngularJS parts.

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