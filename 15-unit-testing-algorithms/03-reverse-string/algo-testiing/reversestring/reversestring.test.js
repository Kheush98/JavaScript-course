const reverseString = require('./reversestring');

describe('Reverse String', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });

  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  it('should return the reversed string', () => {
    expect(reverseString('bye').toEqual('eyb'));
    expect(reverseString('cheikh').toEqual('hkiehc'));
    expect(reverseString('gaye').toEqual('eyag'));
    expect(reverseString('ecole').toEqual('eloce'));
    expect(reverseString('merci').toEqual('icrem'));
  });
});