(function () {
    'use strict';

    angular
        .module('petStore.core.resources')
        .factory('Pets', Pets);

    Pets.$inject = ['$resource'];

	function Pets($resource) {
		return $resource('api/Pets/:id', null, {
			query: {
				method: 'GET',
			},
		});
    }
})();