(function () {
    'use strict';

    angular
        .module('petStore.screens.pets')
		.component('petsScreen', {
			template: '<h1>{{ owner.name }}\' pets</h1><new-pet-form owner-id="owner.id"></new-pet-form><pets-list></pets-list>',
			controller: petsScreen,
		});

    petsScreen.$inject = ['$scope', '$stateParams', 'Owners'];

	function petsScreen($scope, $stateParams, Owners) {
		var ctrl = this;

		ctrl.$scope = $scope;

		$scope.owner = {
			id: $stateParams.ownerId,
			name: '',
		};

		Owners.get({
			id: $stateParams.ownerId
		}, function (owner) {
			$scope.owner.name = owner.name
		});
    }
})();
