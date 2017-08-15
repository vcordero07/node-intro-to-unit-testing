const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {



  it ('should raise error if args not numbers', function() {
    const badInputs = [
      ['a',1],
      ['1',2],
      [2, false]
    ];
    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input[0], input[1])
      }).should.throw(Error);
    });
  });

});
