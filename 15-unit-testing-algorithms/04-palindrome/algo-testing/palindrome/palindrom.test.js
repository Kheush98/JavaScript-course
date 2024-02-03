const palindrome = require('./palindrome');

describe('Palindrome', () => {
  it('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });
  it('should return a function', () => {
    expect(typeof palindrome('hello')).toEqual('boolean');
  });
  it('should return true if is a palindrome', () => {
    expect(palindrome('wow')).toBeTruthy();
    expect(palindrome('kayak')).toBeTruthy();
    expect(palindrome('miccim')).toBeTruthy();
  });
  it('should return false if is not palindrome', () => {
    expect(palindrome('home')).toBeFalsy();
    expect(palindrome('school')).toBeFalsy();
    expect(palindrome('monsieur')).toBeFalsy();
  });
  it('should return false if has spaces', () => {
    expect(palindrome('  wow')).toBeFalsy();
  });
});