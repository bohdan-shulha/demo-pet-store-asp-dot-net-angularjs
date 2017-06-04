(function () {
    'use strict';

    angular
		.module('petStore.screens.owners')
		.component('ownersScreen', {
			template: '<new-owner-form></new-owner-form> <owner-list></owner-list>',
			controller: ownersScreen,
		});

	ownersScreen.$inject = ['$scope'];

    function ownersScreen($scope) {
        $scope.title = 'OwnersScreen';

        activate();

        function activate() { }
    }
})();
