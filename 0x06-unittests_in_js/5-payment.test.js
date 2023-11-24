const { it, describe } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  // Run before each test
  beforeEach( () => {
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // Run after each test
  afterEach( () => {
    // Restore the original function and spy to avoid effects in other tests
    consoleLogSpy.restore();
  });

  it('Log correct message for totalAmount=100 and totalShipping=20', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log is called with correct message
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;

    // Assert that console.log is only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('Log correct message for totalAmount=10 and totalShopping=10', () => {
    // Call the function with the second set of values
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log is called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;

    // Assert that console.log is only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
