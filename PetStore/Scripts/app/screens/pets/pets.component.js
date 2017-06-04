(function () {
    'use strict';

    angular
        .module('petStore.screens.pets')
		.component('petsScreen', {
			template: 'list of pets',
			controller: petsScreen,
		});

    petsScreen.$inject = ['$scope'];

    function petsScreen($scope) {
        $scope.title = 'pets';

        activate();

        function activate() { }
    }
})();
