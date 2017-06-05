(function () {
    'use strict';

    angular
        .module('petStore.screens.owners')
		.component('ownerList', {
			// TODO: use webpack2 require here or systemjs/amd/etc alternative
			templateUrl: 'Scripts/app/screens/owners/owner_list.component.html',
			controller: ownerList,
		});

    ownerList.$inject = ['$scope', 'Owners'];

	function ownerList($scope, Owners) {
		var ctrl = this;

		ctrl.$scope = $scope;
		ctrl.Owners = Owners;

		$scope.owners = [];

		ctrl.refresh();

		$scope.deleteOwner = function (owner) {
			ctrl.deleteOwner(owner);
		}
	}

	ownerList.prototype.refresh = function () {
		var ctrl = this;

		ctrl.Owners.query({}, function (owners) {
			ctrl.$scope.owners = owners;
		});
	}

	ownerList.prototype.deleteOwner = function (owner) {
		var ctrl = this;

		ctrl.Owners.delete({ id: owner.id }, function () {
			ctrl.refresh();
		});
	}
})();
