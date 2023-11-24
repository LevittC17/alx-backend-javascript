/**
 * Calculate the sum of two numbers after rounding each number
 *
 * @param {number} a - The first number to be rounded and added
 * @param {number} b - The second number to be rounded and added
 * @returns {number} The sum of the rounded numbers (rounded individually)
 */
function calculateNumber(a, b) {
  return Math.ceil(a) + Math.ceil(b);
}

module.exports = calculateNumber;
