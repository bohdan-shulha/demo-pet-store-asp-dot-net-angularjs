(function () {
    'use strict';

    angular
        .module('petStore.screens.pets')
		.component('petsScreen', {
			templateUrl: 'Scripts/app/screens/pets/pets.component.html',
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
		
		$scope.onPetAdd = function () {
			$scope.listCtrl.refresh();
		}

		Owners.get({
			id: $stateParams.ownerId
		}, function (owner) {
			$scope.owner.name = owner.name
		});
	}
})();
