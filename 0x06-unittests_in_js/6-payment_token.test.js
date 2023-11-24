const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Resolve with correct response if success == true', () => {
    const response = getPaymentTokenFromAPI();
    expect(response).to.be.an.instanceof(Promise);
  });
  it("should return a JSON data object", () => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).to.be.equal('Successful response from the API');
        done();
      });
  });
  it('should do nothing when not success', () => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.equal('');
      });
  });
});
