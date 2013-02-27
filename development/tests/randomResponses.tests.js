(function () {
    module('random responses');

    test('Add Single Response', 1, function() {
        var randomResponses = new RandomResponses();
        var key = 'OK';
        var potentialResponse = 'Yes';
        randomResponses.addResponse(key, potentialResponse);
        equal(randomResponses.getRandomResponse(key), potentialResponse, 'The random response should be equal to the only response added.');
    });
    test('Add Array of Responses', 1, function () {
        var randomResponses = new RandomResponses();
        var key = 'OK';
        var potentialResponses = ['Yes', 'OK', 'For sure', 'Let\'s do this!'];
        randomResponses.addResponse(key, potentialResponses);
        var response = randomResponses.getRandomResponse(key);
        var foundResponse = false;
        for (var i = 0; i < potentialResponses.length; i++)
            if (potentialResponses[i] == response)
                foundResponse = true;
        ok(foundResponse, "This is a test to verify that the randomly returned response is contained within the potential responses array.");
    });
    test('Get Response Keys', 1, function() {
        var randomResponses = new RandomResponses();
        var keys = ['OK', 'Fruit'];
        for (var i = 0; i < keys.length; i++)
            randomResponses.addResponse(keys[i], 'test');
        var responseKeys = randomResponses.getKeys();
        deepEqual(keys, responseKeys, "The keys array that is returned should be identical to the keys array that was added.");
    });
})();