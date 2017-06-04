(function () {
    'use strict';

    angular
        .module('petStore.screens.owners')
		.component('newOwnerForm', {
			// template: '<input type="text" ng-model="ownerName" placeholder="Owner name, like Michael"><button type="button" class="btn btn-primary" ng-disabled="ownerName.length == 0" title="Please enter the owner name" ng-click="saveOwner(ownerName)">Add</button>',
			templateUrl: 'Scripts/app/screens/owners/new_owner_form.component.html',
			controller: newOwnerForm,
		});

    newOwnerForm.$inject = ['$scope', 'Owners'];

    function newOwnerForm($scope, Owners) {
		$scope.ownerName = '';

		$scope.saveOwner = function (ownerName) {
			Owners.save({
				name: ownerName,
			}, function () {
				$scope.ownerName = '';
			});
		}
	}
})();
