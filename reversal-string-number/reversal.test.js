const reversal = require('./reversal');

test('task reverse string 1', () => {
  expect(reversal.reverseString1('Gabriel')).toBe('leirbaG');
});

test('task reverse string 2', () => {
  expect(reversal.reverseString2('Gabriel')).toBe('leirbaG');
});

test('task reverse string 3', () => {
  expect(reversal.reverseString3('Gabriel')).toBe('leirbaG');
});

test('task reverse string 4', () => {
  expect(reversal.reverseString4('Gabriel')).toBe('leirbaG');
});

test('task reverse number', () => {
  expect(reversal.reverseInt(1234)).toBe(4321);
});