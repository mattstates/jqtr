import { gatherAllTasks, mapToUsefulData, getFetchOptions, findMissingParentTasks, mapSubtasksToParents } from './apiUtils.js';
import sampleResponse from '../mockData/sampleData1.js';

describe('mapToUsefulData', () => {
    let data = mapToUsefulData(sampleResponse.issues[0]);

    test('Mapped Data has ID property', () => {
        expect(data).toHaveProperty('id');
    });

    test('Mapped Data has subtasks property', () => {
        expect(data).toHaveProperty('subtasks');
    });

    test('Mapped Data .subtasks is an array', () => {
        expect(data.subtasks).toHaveLength(0);
    });
});

describe('mapSubtasksToParents', () => {
    let data = mapSubtasksToParents(sampleResponse.issues.map(mapToUsefulData));

    test('Does not return subtasks', () => {
        expect(data.filter((task) => task.isSubtask)).toHaveLength(0);
    });

    test('At least one parent task has a subtask array that isn\'t empty', () => {
        expect(data.filter((task) => task.subtasks.length).length).toBeGreaterThanOrEqual(1);
    });
});

describe('findMissingParentTasks', () => {
    let data = sampleResponse.issues.map(mapToUsefulData);

    test('Returns missing tasks', () => {
        expect(findMissingParentTasks(data)).toHaveLength(2);
    });
});
