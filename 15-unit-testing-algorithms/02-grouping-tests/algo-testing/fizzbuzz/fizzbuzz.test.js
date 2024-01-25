const fizzbuzz = require('./fizzbizz');

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toEqual('function');
  });

  it('should return the number if not divisible by 3 or 5', () => {
    expect(fizzbuzz(1)).toEqual(1);
    expect(fizzbuzz(2)).toEqual(2);
    expect(fizzbuzz(13)).toEqual(13);
  });

  it('should return Fizz if divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(33)).toEqual('Fizz');
    expect(fizzbuzz(9)).toEqual('Fizz');
  });

  it('should return Buzz if divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
    expect(fizzbuzz(10)).toEqual('Buzz');
    expect(fizzbuzz(100)).toEqual('Buzz');
  });

  it('should return FizzBuzz if divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
    expect(fizzbuzz(30)).toEqual('FizzBuzz');
    expect(fizzbuzz(45)).toEqual('FizzBuzz');
  });
});