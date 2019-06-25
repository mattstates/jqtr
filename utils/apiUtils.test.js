import { getFetchOptions } from './apiUtils.js';

test('TEST1_DEMO', () => {
    expect(typeof getFetchOptions).toBe('function');
});

test('TEST2_DEMO', () => {
    expect(typeof {}).toBe('object');
});