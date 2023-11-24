// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  it('Correct status code?', function (done) {
    request('http://localhost:7865', function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', function (done) {
    // Add other integration tests if needed
    done();
  });
});

/**describe('Server', function () {
  let server;

  before(function () {
    server = require('./api');
  });

  after(function () {
    server.close();
  });

  it('Server is running', function (done) {
    // Additional test to check if the server is running
    request('http://localhost:7865', function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
*/
