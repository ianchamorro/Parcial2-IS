const { average } = require('./index');

describe('average', () => {
    test('of ONE value', () => {
        expect(average([6])).toBe(6);
    });

    test('of MANY values', () => {
        expect(average([23, 5, 26, 12])).toBe(16.5);
    });

    test('of NO values is 0', () => {
        expect(average([])).toBe(0);
    });
});