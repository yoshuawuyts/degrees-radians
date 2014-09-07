/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Convert degrees to radians.
 *
 * @param {Number} degrees
 * @return {Number}
 */

module.exports = function(degrees) {
  assert('number' == typeof degrees, 'Degrees should be a number');
  return degrees * (Math.PI / 180);
}
