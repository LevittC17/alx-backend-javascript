const { describe, it, done } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Resolve with correct response when success = true', () => {
    // Call the function with success set to true
    getPaymentTokenFromAPI(true).then((result) => {
      // Assert that the result is as expected
      expect(result).to.have.property('result');

      // Call done to indicate that the async test is complete
      done();
    });
  });
});
