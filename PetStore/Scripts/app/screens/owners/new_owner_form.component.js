(function () {
    'use strict';

    angular
        .module('petStore.screens.owners')
		.component('newOwnerForm', {
			template: '<input type="text" placeholder="Owner name, like Michael"><button type="button">Add</button>',
			controller: newOwnerForm,
		});

    newOwnerForm.$inject = ['$scope'];

    function newOwnerForm($scope) {
        $scope.title = 'new_owner_form';
	}
})();
