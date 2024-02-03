const anagram = require('./anagram');

describe('Anagram', () => {
  it('should be a function', () => {
    expect(typeof anagram).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof anagram('cool', 'loco')).toEqual('boolean');
  });
  it('should return true', () => {
    expect(anagram('cool', 'loco')).toBeTruthy();
    expect(anagram('arm', 'ram')).toBeTruthy();
    expect(anagram('cinema', 'iceman')).toBeTruthy();
  });
  it('should return false', () => {
    expect(anagram('rectangle', 'tghdeui')).toBeFalsy();
    expect(anagram('maison', 'raison')).toBeFalsy();
    expect(anagram('class', 'lacs')).toBeFalsy();
  });
})