const { describe, it, done } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Resolve with correct response when success = true', () => {
    // Call the function with success set to true
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.have.property('result');
        done()  
      });
  });
});
