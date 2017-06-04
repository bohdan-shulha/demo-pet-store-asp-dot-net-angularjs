(function () {
    'use strict';

    angular
        .module('petStore.core.resources')
        .factory('owner', owner);

    owner.$inject = ['$resource'];

    function owner($resource) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();