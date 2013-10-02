angular.module('spec', [])
    .factory('configHolder', function(config) {
        return {config:config};
    });

describe('config.mock.js', function() {
    beforeEach(module('config'));
    beforeEach(module('spec'));

    it('provides a shared config object', inject(function(config, configHolder) {
        config.key = 'value';
        expect(configHolder.config.key).toEqual(config.key);
    }));
});