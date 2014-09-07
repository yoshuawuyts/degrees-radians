/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var should = require('should');
var radians = require('./index');

/**
 * Test
 */

describe('radians()', function() {
  it('should catch errors', function() {
    radians.bind(radians, 'hello')
      .should.throw('Degrees should be a number');
  });
  it('should convert degrees to radians', function() {
    radians(90).should.eql(1.5707963267948966);
  });
});
