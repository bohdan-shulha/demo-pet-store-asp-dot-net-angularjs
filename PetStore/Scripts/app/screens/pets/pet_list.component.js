(function () {
    'use strict';

    angular
        .module('petStore.screens.pets')
		.component('petList', {
			bindings: {
				ownerId: '<',
				ctrl: '=',
			},
			templateUrl: 'Scripts/app/screens/pets/pet_list.component.html',
			controller: petList,
		});

    petList.$inject = ['$scope', 'Pets', '$attrs'];

	function petList($scope, Pets, $attrs) {
		var ctrl = this;

		ctrl.$scope = $scope;
		ctrl.Pets = Pets;

		$scope.pets = [];

		$attrs.$observe("ownerId", function () {
			ctrl.refresh();
		});

		$attrs.$observe('ctrl', function () {
			ctrl.ctrl = {
				refresh: function () {
					ctrl.refresh();
				}
			}
		});
	}

	petList.prototype.refresh = function () {
		var ctrl = this;

		ctrl.Pets.query({ ownerId: ctrl.ownerId }, function (pets) {
			ctrl.$scope.pets = pets;
		});
	};

	petList.prototype.deletePet = function (pet) {
		var ctrl = this;

		ctrl.Pets.delete({ id: pet.id }, function () {
			ctrl.refresh();
		});
	};
})();
