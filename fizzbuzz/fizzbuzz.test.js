const fizzBuzz = require('./fizzbuzz');

test('task fizzbuzz', () => {
    expect(fizzBuzz.fizzbuzz('[1,2,3,4,5]', '4')).toBe('[[1,2,3,4],[5]]');
});