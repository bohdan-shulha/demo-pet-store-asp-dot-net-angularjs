﻿(function () {
    'use strict';

    angular
		.module('petStore.screens.pets')
		.component('newPetForm', {
			bindings: {
				ownerId: "<",
			},
			templateUrl: "Scripts/app/screens/pets/new_pet_form.component.html",
			controller: newPetForm,
		});

    newPetForm.$inject = ['$scope', 'Pets', '$attrs'];

	function newPetForm($scope, Pets, $attrs) {
		var ctrl = this;

		ctrl.$scope = $scope;
		ctrl.Pets = Pets;

		ctrl.resetScope();
	}

	newPetForm.prototype.resetScope = function () {
		this.$scope.petName = '';
	}

	newPetForm.prototype.savePet = function () {
		var ctrl = this;

		ctrl.Pets.save({
			name: ctrl.$scope.petName,
			ownerID: +ctrl.ownerId,
		}, ctrl.resetScope);
	}
})();
