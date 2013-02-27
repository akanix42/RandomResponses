function RandomResponses() {
    this.responses = {};
}

RandomResponses.prototype.addResponse = function (key, response) {
    var self = this;
    if (!(key in self.responses))
        self.responses[key] = [];

    var responsesArray = self.responses[key];
    if ($.isArray(response))
        $.each(response, function (i, r) {
            responsesArray.push(r);
        });
    else
        responsesArray.push(response);
};

RandomResponses.prototype.getKeys = function() {
    var self = this;
    var array = [];
    $.each(self.responses, function(key) {
        array.push(key);
    });
    return array;
};

RandomResponses.prototype.getRandomResponse = function(key) {
    var self = this;
    if (!(key in self.responses))
        return null;
    var responsesArray = self.responses[key];
    return responsesArray[Math.floor(Math.random() * responsesArray.length)];
};