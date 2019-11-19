import { alphabeticalSortPinnedValue, getTooltipTimeData, sortByStatus, sortByTaskNumber, sortByTime } from './tableUtils';
import { NONE } from '../../utils/constants';

const unsortedArrayMock = [['Apple'], ['Microsoft'], ['linux'], [NONE], ['Microsofts'], ['apple'], ['12'], ['zzz']];

describe('alphabeticalSortPinnedValue', () => {
    const sortedArrayWithPinned = flattenOneLevel(unsortedArrayMock.sort((a, b) => alphabeticalSortPinnedValue(a, b, 'linux')));
    const sortedArrayWithoutPinned = flattenOneLevel(unsortedArrayMock.sort((a, b) => alphabeticalSortPinnedValue(a, b)));

    test('Sorts with pinned value at the beginning of the array.', () => {
        const sortedPinnedArrayControl = flattenOneLevel([['linux'], ['12'], ['Apple'], ['Microsoft'], ['Microsofts'], [NONE], ['apple'], ['zzz']]);

        expect(sortedArrayWithPinned).toEqual(sortedPinnedArrayControl);
    });

    test(`Sorts with default value "${NONE}" pinned value at the beginning of the array.`, () => {
        const sortedArrayControl = flattenOneLevel([[NONE], ['12'], ['Apple'], ['Microsoft'], ['Microsofts'], ['apple'], ['linux'], ['zzz']]);

        expect(sortedArrayWithoutPinned).toEqual(sortedArrayControl);
    });

    test('Uppercase is sorted before lowercase.', () => {
        const appleUppercaseIndex = sortedArrayWithPinned.indexOf('Apple');
        const appleLowercaseIndex = sortedArrayWithPinned.indexOf('apple');
        expect(appleUppercaseIndex < appleLowercaseIndex).toBe(true);
    });

    test('Number is sorted before Uppercase.', () => {
        const appleUppercaseIndex = sortedArrayWithPinned.indexOf('Apple');
        const numberIndex = sortedArrayWithPinned.indexOf('12');
        expect(numberIndex < appleUppercaseIndex).toBe(true);
    });

    test('Shorter string is sorted before longer string.', () => {
        const microsoft = sortedArrayWithPinned.indexOf('Microsoft');
        const microsofts = sortedArrayWithPinned.indexOf('Microsofts');
        expect(microsoft < microsofts).toBe(true);
    });
});

describe('sortByStatus', () => {
    const unsortedMockData = ['z', 'd', 'fff', 'ff', 'FF', 'p', 'fF', '1', '11', 'EE'];
    const sortedControlData = ['1', '11', 'd', 'EE', 'ff', 'FF', 'fF', 'fff', 'p', 'z'];
    const sortedData = unsortedMockData.sort(sortByStatus);

    test('Results should be alphabetically sorted.', () => {
        expect(sortedData).toEqual(sortedControlData);
    });

    test('Lettercase will be ignored.', () => {
        expect(sortedData.join(',')).toContain('ff,FF,fF');
    });

    test('Numbers sort before letters.', () => {
        expect(sortedData[0]).toBe('1');
    });
});

function flattenOneLevel(array) {
    return array.reduce((collection, element) => {
        return [...collection, element[0]];
    }, []);
}
