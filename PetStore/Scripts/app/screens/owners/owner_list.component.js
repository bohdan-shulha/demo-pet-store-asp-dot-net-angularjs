(function () {
    'use strict';

    angular
        .module('petStore.screens.owners')
		.component('ownerList', {
			template: '<table><tr ng-repeat="owner in owners"><td>{{ owner.name }}</td><td>{{ owner.petsCount > 0 ? owner.petsCount : "has no pets :(" }}</td></tr></table>',
			controller: ownerList,
		});

    ownerList.$inject = ['$scope', 'Owners'];

    function ownerList($scope, Owners) {
		$scope.owners = [];

		Owners.query({}, function(owners) {
			$scope.owners = owners;
		});
    }
})();
