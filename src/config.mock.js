angular.module('config', [])
    .factory('config', function() {
        return {};
    })
    .factory('configReader', function() {
        return jasmine.createSpy('configReader')
    });