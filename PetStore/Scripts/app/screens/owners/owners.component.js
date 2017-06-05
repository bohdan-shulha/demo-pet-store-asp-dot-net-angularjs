(function () {
    'use strict';

    angular
		.module('petStore.screens.owners')
		.component('ownersScreen', {
			templateUrl: 'Scripts/app/screens/owners/owners.component.html',
			controller: ownersScreen,
		});

	ownersScreen.$inject = ['$scope'];

	function ownersScreen($scope) {
		$scope.onOwnerAdd = function () {
			$scope.listCtrl.refresh();
		};
	};
})();
