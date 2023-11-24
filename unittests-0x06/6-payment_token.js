/**
 * Get payment token from API
 * @param {boolean} success - Indicates whether the API request is successful
 * @returns {Promise<Object>} A promise with the APU response
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise((resolve) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
}

module.exports = getPaymentTokenFromAPI;
