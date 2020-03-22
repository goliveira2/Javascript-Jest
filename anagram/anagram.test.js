const anaGram = require('./anagram');

test('task anagram 1', () => {
    expect(anaGram.anagram1('rail safety', 'fairy tales')).toBe(true);
});

test('task anagram 2', () => {
    expect(anaGram.anagram2('rail safety', 'fairy tales')).toBe(true);
});