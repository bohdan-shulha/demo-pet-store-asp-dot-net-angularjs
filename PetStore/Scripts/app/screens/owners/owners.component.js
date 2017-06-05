(function () {
    'use strict';

    angular
		.module('petStore.screens.owners')
		.component('ownersScreen', {
			template: '<new-owner-form on-owner-add="onOwnerAdd"></new-owner-form> <owner-list ctrl="listCtrl"></owner-list>',
			controller: ownersScreen,
		});

	ownersScreen.$inject = ['$scope'];

	function ownersScreen($scope) {
		$scope.onOwnerAdd = function () {
			$scope.listCtrl.refresh();
		};
	};
})();
