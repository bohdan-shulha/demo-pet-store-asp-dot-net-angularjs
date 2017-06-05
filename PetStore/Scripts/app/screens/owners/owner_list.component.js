(function () {
    'use strict';

    angular
        .module('petStore.screens.owners')
		.component('ownerList', {
			bindings: {
				ctrl: '=',
			},
			// TODO: use webpack2's "require" here or systemjs/amd/etc alternative
			templateUrl: 'Scripts/app/screens/owners/owner_list.component.html',
			controller: ownerList,
		});

    ownerList.$inject = ['$scope', '$attrs', 'Owners'];

	function ownerList($scope, $attrs, Owners) {
		var ctrl = this;

		ctrl.$scope = $scope;
		ctrl.Owners = Owners;

		$scope.owners = [];
		$scope.page = 1;

		$attrs.$observe('ctrl', function () {
			ctrl.ctrl = {
				refresh: function () {
					ctrl.refresh();
				}
			};
		});

		ctrl.refresh();

		$scope.deleteOwner = function (owner) {
			ctrl.deleteOwner(owner);
		}

		$scope.goToPage = function (page) {
			ctrl.refresh();
		}
	}

	ownerList.prototype.refresh = function () {
		var ctrl = this;

		ctrl.Owners.query({ page: ctrl.$scope.page }, function (owners) {
			ctrl.$scope.totalCount = owners.totalCount;
			ctrl.$scope.owners = owners.data;
		});
	}

	ownerList.prototype.deleteOwner = function (owner) {
		var ctrl = this;

		ctrl.Owners.delete({ id: owner.id }, function () {
			ctrl.refresh();
		});
	}
})();
