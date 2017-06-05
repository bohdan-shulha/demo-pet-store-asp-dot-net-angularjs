(function () {
    'use strict';

    angular
        .module('petStore.screens.owners')
		.component('newOwnerForm', {
			bindings: {
				onOwnerAdd: '<',
			},
			templateUrl: 'Scripts/app/screens/owners/new_owner_form.component.html',
			controller: newOwnerForm,
		});

    newOwnerForm.$inject = ['$scope', 'Owners'];

	function newOwnerForm($scope, Owners) {
		var ctrl = this;

		$scope.ownerName = '';

		$scope.saveOwner = function (ownerName) {
			Owners.save({
				name: ownerName,
			}, function () {
				$scope.ownerName = '';

				if (ctrl.onOwnerAdd != null) {
					ctrl.onOwnerAdd();
				}
			});
		}
	}
})();
