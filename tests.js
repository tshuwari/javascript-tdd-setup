'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/primeSum.js');
describe("Test should check if a number is prime", function() {
 it("should give false, for input 9", function() {
    assert(lib.isPrime(9) == false);
  });
  });
  describe("Test that the sum of the primes are computed properly", function() {
  it("should give 10, for input 5", function() {
    assert(lib.sumOfPrimes(5) == 10);
  });
  it("should give 17, for input 7", function() {
    assert(lib.sumOfPrimes(7) == 17);
  });
  it("should give 28, for input 11", function() {
    assert(lib.sumOfPrimes(11) == 28);
  });
  it("should give 41, for input 13", function() {
    assert(lib.sumOfPrimes(13) == 41);
  });
  it("should give 58, for input 17", function() {
    assert(lib.sumOfPrimes(17) == 58);
  });
  it("should give 77, for input 19", function() {
    assert(lib.sumOfPrimes(19) == 77);
  });
  it("should give 100, for input 23", function() {
    assert(lib.sumOfPrimes(23) == 100);
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

