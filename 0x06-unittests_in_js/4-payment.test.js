const { it, describe } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and log the correct message', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function that uses the stub
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub is called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that console.log is called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the original function and spy to avoid side effects in other tests
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
