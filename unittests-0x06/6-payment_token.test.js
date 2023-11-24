const { it, describe } = require('mocha');
const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () {
  it('should resolve with the correct response when success is true', (done) {
    // Call the function with success set to true
    getPaymentTokenFromAPI(true).then((result) => {
      // Assert that the result is as expected
      expect(result).to.deep.equal({ data: 'Successful response from the API' });

      // Call done to indicate that the async test is complete
      done();
    })
  });
});
