const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

/**
 * Test suite for the calculateNumber function.
 */
describe('calculateNumber', () => {
  /**
   * Test case for the calculateNumber function.
   * It should return the sum of rounded numbers.
   */
  it('Test case 1', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('Test case 2', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('Test case 3', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('Test case 4', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
