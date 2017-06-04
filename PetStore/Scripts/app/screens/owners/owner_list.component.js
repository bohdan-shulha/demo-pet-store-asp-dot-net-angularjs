(function () {
    'use strict';

    angular
        .module('petStore.screens.owners')
		.component('ownerList', {
			template: '<table><tr><td>owners table</td></tr></table>',
			controller: ownerList,
		});

    ownerList.$inject = ['$scope'];

    function ownerList($scope) {
        $scope.title = 'owner_list';

        activate();

        function activate() { }
    }
})();
