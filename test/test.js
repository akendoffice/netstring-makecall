var assert = require('assert');
var constants = require('../net/netstringConstants.js');

describe('netStringConstants', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });

  it('retrieve constant value correctly', function(){
  	assert(constants.CHARACTER_COLON ==  58, "First constant is not matching");
  	assert(constants.CHARACTER_COMMA ==  44, "Second constant is not matching");
  	assert(constants.CHARACTER_COMMA !=  34, "Second constant negative testcase failed");
  	assert(constants.CHARACTER_COLON !=  8, "First constant negative testcase failed");
  });
})
