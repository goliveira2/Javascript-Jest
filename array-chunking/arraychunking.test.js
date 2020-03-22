const arrayChunking = require('./arraychunking');

test('task Array chunking', () => {
    // expect(fizzBuzz.fizzbuzz("[1,2,3,4,5]", '4')).toBe("[[1,2,3,4],[5]]");
    expect(arrayChunking.arraychunking([1,2,3,4,5], '4')).toBe("1,2,3,4,5")
});