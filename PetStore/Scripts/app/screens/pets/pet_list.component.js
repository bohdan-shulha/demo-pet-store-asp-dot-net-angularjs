(function () {
    'use strict';

    angular
        .module('petStore.screens.pets')
		.controller('petList', {
			bindings: {
				ownerId: '<',
			},
			templateUrl: 'Scripts/app/screens/pets/pet_list.component.html',
			controller: petList,
		});

    petList.$inject = ['$scope'];

	function petList($scope) {
		console.log('list of pets for owner', this.ownerId);
    }
})();
