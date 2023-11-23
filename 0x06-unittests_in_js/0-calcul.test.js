const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

/**
 * Test suite for the calculateNumber function.
 */
describe('calculateNumber()', () => {
  /**
   * Test case for the calculateNumber function.
   * It should return the sum of rounded numbers.
   */
  it('should return the sum of rounded numbers', () => {
    // Test case 1
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return the sum of rounded numbers', () => {
    // Test case 2
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return the sum of rounded numbers', () => {
    // Test case 3
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return the sum of rounded numbers', () => {
    // Test case 4
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
