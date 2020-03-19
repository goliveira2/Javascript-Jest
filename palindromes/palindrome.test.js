const reversal = require('./palindrome');

test('task palindrome', () => {
  expect(reversal.palindrome1('Mirim')).toBe(true);
});