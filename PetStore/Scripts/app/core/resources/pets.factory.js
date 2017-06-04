(function () {
    'use strict';

    angular
        .module('petStore.core.resources')
        .factory('Pets', Pets);

    Pets.$inject = ['$resource'];

	function Pets($resource) {
		// return $resource('api/pets/:id')
		return {
			query: function (params, success) {
				success([
					{
						"id": 1,
						"name": "Jeff's dog",
					},
				]);
			},
		};
    }
})();