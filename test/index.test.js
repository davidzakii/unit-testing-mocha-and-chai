const myFan = require('../labindex');
const capitalizeText = myFan.capitalizeText;
const createArray = myFan.createArray;

const expect = require('chai').expect;
const assertChai = require('chai').assert;
const should = require('chai').should();

describe('unit test capitalizeText function', function () {
  it('test that the function takes a string  it will return a string', function () {
    expect(capitalizeText('string')).to.be.an('string');
  });
  it('test that the function takes a string and return it after capitalize it --> iti => ITI', function () {
    expect(capitalizeText('iti')).to.equal('ITI');
  });
  it('test if the function takes number it will throw type error says parameter should be string', function () {
    expect(function () {
      capitalizeText(7);
    }).to.throw(TypeError, 'parameter should be string');
  });
  it('test if the input iti , the returned value  will not equal to hello', function () {
    expect(capitalizeText('iti')).to.not.equal('hello');
  });
});
//make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call
var count = 1;
describe('unit test creatArray function using Expect', function () {
  this.beforeEach(function () {
    console.log('before call ' + count++);
  });
  it('test that the return value of type array', function () {
    expect(createArray(1)).to.be.an('array');
  });
  it("test if we pass 3 it will return array of length 3 and test it's include 1", function () {
    expect(createArray(3)).to.have.lengthOf(3).that.includes(1);
  });
});

describe('unit test for creatArray function using Assert Chai', function () {
  this.beforeEach(function () {
    console.log('before call ' + count++);
  });
  it('test that the return value of type array', function () {
    assertChai.isArray(createArray(1));
  });
  it("test if we pass 3 it will return array of length 3 and test it's include 1", function () {
    assertChai.lengthOf(createArray(3), 3);
    assertChai.include(createArray(3), 1);
  });
});

describe('unit test creatArray function using should', function () {
  this.beforeEach(function () {
    console.log('before call ' + count++);
  });
  it('test that the return value of type array', function () {
    this.timeout(6000);
    setTimeout(() => {
      createArray(1).should.be.an('array');
    }, 5000);
  });
  xit("test if we pass 3 it will return array of length 3 and test it's include 1", function () {
    createArray(3).should.have.lengthOf(3).that.includes(1);
  });
});
