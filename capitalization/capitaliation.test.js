const capitalization = require('./capitalization');

test('task Capitalization', () => {
    expect(capitalization.capitalize('a short sentence').toBe("A Short Sentence"))
});