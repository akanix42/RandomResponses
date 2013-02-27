RandomResponses
===============

Author: Nathan Reid  
License: MIT License
Description:  
This is a simple library to retrieve random responses for a given key from a supplied list.
For example, given the key "OK" and the responses "OK", "Yes", and "Oh yeah!", each random response call
will randomly return one of the three responses.

Usage:
```javascript
// Create a new RandomResponses object:
var randomResponses = new RandomResponses();
// Add a response
randomResponses.addResponse('OK', 'Test');
// Add an array of responses
randomResponses.addResponse('OK', ['Yes', 'OK', 'For sure', 'Let\'s do this!']);
// Retrieve a list of the keys
randomResponses.getKeys();
// Retrieve a random response
randomResponses.getRandomResponse('OK');
```

To see it in action, check out [the example](http://htmlpreview.github.com/?https://github.com/nathantreid/RandomResponses/blob/master/development/example.html) or [the tests](http://htmlpreview.github.com/?https://github.com/nathantreid/RandomResponses/blob/master/development/tests/tests.html). 

Example Screenshots 

![Screenshot 1](https://raw.github.com/nathantreid/RandomResponses/master/development/example1.png)

![Screenshot 2](https://raw.github.com/nathantreid/RandomResponses/master/development/example2.png)
