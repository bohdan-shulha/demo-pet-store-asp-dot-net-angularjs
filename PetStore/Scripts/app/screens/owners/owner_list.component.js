(function () {
    'use strict';

    angular
        .module('petStore.screens.owners')
		.component('ownerList', {
			// template: '<table><tr ng-repeat="owner in owners"><td><a ui-sref="pets({ ownerId: owner.id })">{{ owner.name }}</a></td><td>{{ owner.petsCount > 0 ? owner.petsCount : "has no pets :(" }}</td></tr></table>',
			// TODO: use webpack2 require here or systemjs/amd/etc alternative
			templateUrl: 'Scripts/app/screens/owners/owner_list.component.html',
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
