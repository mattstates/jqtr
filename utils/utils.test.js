import { printHoursPretty } from './utils.js';

describe('printHoursPretty', () => {

    test('Does not have js rounding error - 7800 returns 2h 10m not 2h 9m', () => {
        expect(printHoursPretty(7800)).toEqual('2h 10m');
    });

    test('No input returns 0h', () => {
        expect(printHoursPretty()).toEqual('0h');
    });

    test('Accepts more than 24hrs', () => {
        expect(printHoursPretty(90000)).toEqual('25h');
    });

    test('No trailing space', () => {
        expect(printHoursPretty(90000).endsWith(' ')).toBe(false);
    });

    test('No leading space', () => {
        expect(printHoursPretty(120).startsWith(' ')).toBe(false);
    });

    test('Hours and Minutes are separated by a space', () => {
        expect(printHoursPretty(3660).indexOf(' ')).toBeGreaterThan(1);
    })

    test('Negative input returns 0h', () => {
        expect(printHoursPretty(-555)).toEqual('0h');
    });
});

