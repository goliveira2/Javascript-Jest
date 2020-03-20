const maxChar = require('./maxchar');

test('task maxchar', () => {
  expect(maxChar.maxChar('apple 123111')).toBe('1');
});