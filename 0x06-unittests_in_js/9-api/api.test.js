const request = require("request");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("Index page", () => {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", (done) => {
	request(options, (err, res, body) => {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", (done) => {
	request(options, (err, res, body) => {
	    expect(body).to.contain("Welcome to the payment system");
	    done();
	});
    });
    it("check correct content length", (done) => {
	request(options, (err, res, body) => {
	    expect(res.headers['content-length']).to.equal('29');
	    done();
	});
    });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request('http://localhost:7865/cart/12', (error, response) => {
      expect(response && response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response && response.statusCode).to.equal(404);
      done();
    });
  });

  // Add other cart page tests if needed
});