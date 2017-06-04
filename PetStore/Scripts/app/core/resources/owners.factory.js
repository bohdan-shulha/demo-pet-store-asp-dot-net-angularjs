(function () {
    'use strict';

    angular
        .module('petStore.core.resources')
        .factory('Owners', Owners);

    Owners.$inject = ['$resource'];

	function Owners($resource) {
		// return $resource('api/owners/:id');
		return {
			query: function (params, success) {
				success([
					{
						"id": 1,
						"name": "Jeff",
						"petsCount": 20,
					},
					{
						"id": 2,
						"name": "Jeremy",
						"petsCount": 0,
					},
				]);
			}
		};
    }
})();