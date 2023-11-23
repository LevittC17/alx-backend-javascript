/**
 * Calculate the sum of two numbers after rounding each number
 *
 * @param {number} a - The first number to be rounded and added
 * @param {number} b - The second number to be rounded and added
 * @returns {number} The sum of the rounded numbers (rounded individually)
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
