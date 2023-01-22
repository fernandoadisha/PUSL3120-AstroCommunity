const stot = require("../simpletot");

test('test running the tests', () => {
    const output = stot(3,4);
    console.log("test running!");
    expect(output).toBe(7);
})

