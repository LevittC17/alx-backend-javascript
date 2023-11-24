/**
 * Get payment token from API
 * @param {boolean} success - Indicates whether the API request is successful
 * @returns {Promise<Object>} A promise with the APU response
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Succesful response from the API' });
  } else {
    return Promise.resolve(undefined);
  }
}

module.exports = { getPaymentTokenFromAPI };
