'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/primeSum.js');
describe("Test should check if a number is prime", function() {
 it("should give false, for input 9", function() {
    assert(lib.isPrime(9) == false);
  });
  });
  
  describe("Test should check for valid inputs", function() {
    it("should return invalid input for numbers less than 0", function(){
    assert(lib.sumOfPrimes(-1) == "Invalid input");
  });
  it("should return invalid input for non-integers", function() {
    assert(lib.sumOfPrimes("a") === "Invalid input");
  }); 
});

