const woof = require('./woof')

test("Our first test", function() {
    const result = woof('oh herro')
    expect(result).toBe('8woof!')
})