const capitaliZation = require('./capitalization');

test('task Capitalization', () => {
    expect(capitaliZation.capitalize("a short sentence").toBe("A Short Sentence"))
});

