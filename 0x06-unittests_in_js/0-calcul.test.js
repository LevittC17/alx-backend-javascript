const assert = require('assert');
const calculateNumber = require('./0-calcul');

/**
 * Test suite for the calculateNumber function.
 */
describe('calculateNumber', function () {
  /**
   * Test case for the calculateNumber function.
   * It should return the sum of rounded numbers.
   */
  it('should return the sum of rounded numbers', function () {
    // Test case 1
    assert.strictEqual(calculateNumber(1, 3), 4);

    // Test case 2
    assert.strictEqual(calculateNumber(1, 3.7), 5);

    // Test case 3
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);

    // Test case 4
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
