var randomResponses = new RandomResponses();
randomResponses.addResponse('OK', ['Yes', 'OK', 'For sure', 'Let\'s do this!']);
randomResponses.addResponse('Fruit', ['Apples', 'Oranges', 'Bananas', 'Mangoes', 'Pineapples', 'Kiwi']);

$().ready(function() {
    var $container = $('#responsesContainer');
    $.each(randomResponses.getKeys(), function (i, key) {
        var html = '<h3>Key: ' + key + '</h3><ol>';
        for (var j = 0; j < 5; j++)
            html += '<li>' + randomResponses.getRandomResponse(key) + '</li>';
        html += '</ol>';
        $container.append(html);
    });
});