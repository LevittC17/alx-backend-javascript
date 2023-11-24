const { it, describe } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.have.property('data');
        done();
      });
  });
});
