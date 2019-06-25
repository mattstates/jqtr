import { gatherAllTasks, mapToUsefulData, getFetchOptions } from './apiUtils.js';

test('Returns a configuration', () => {
    expect(typeof getFetchOptions).toBe('function');
});