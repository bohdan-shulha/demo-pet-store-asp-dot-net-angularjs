(function () {
    'use strict';

    angular
        .module('petStore.core.resources')
        .factory('Owners', Owners);

    Owners.$inject = ['$resource'];

	function Owners($resource) {
		return $resource('api/Owners/:id', null, {
			query: {
				method: 'GET',
			},
		});
    }
})();