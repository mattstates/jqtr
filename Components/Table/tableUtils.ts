import { NONE } from '../../utils/constants';
import { MappedJiraIssue, ToolTipTimeData } from '../../types/JQTRTypes';

function getTooltipTimeData(taskArray: MappedJiraIssue[], filterBy: string): ToolTipTimeData[] {
    return taskArray
        .filter(task => task.resourceQueue === filterBy)
        .map(task => {
            return {
                assignee: task.assignee.name,
                timeRemaining: task.timeProps.timeRemaining,
                needsEstimate: task.timeProps.needsEstimate
            };
        });
}

/**
 * Sort callback method to sort by Status (Alphabetical sort)
 */
function sortByStatus(valA: string, valB: string) {
    const a = valA.toLowerCase();
    const b = valB.toLowerCase();
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

/**
 * Sort callback method to sort by time.
 * Descending order would be:
 * Highest Numerical Value > Needs Estimate (React Component) that shows WARNING_SYMBOL > No Tasks (empty cell)
 * @param {varies} a
 * @param {varies} b
 */
type SortByTimeProp = undefined | Object | string;
function sortByTime(a: SortByTimeProp, b: SortByTimeProp) {
    const [aValue, bValue] = [a, b].map(value => {
        switch (typeof value) {
            // no task meets this criteria
            case 'undefined':
                return -6;
            // value is already a react component
            case 'object':
                return -5;
            // empty string
            case 'string':
                return -4;
            // null or a number
            default:
                return value;
        }
    });

    if (aValue < bValue) {
        return 1;
    }
    if (aValue > bValue) {
        return -1;
    }
    return 0;
}

/**
 * Sort callback method. Sorts Ascending by Project Type (LP, DBA, PSS, etc.) alphabetically then numerically by task number.
 * @param {String} a
 * @param {String} b
 */
function sortByTaskNumber(a: string, b: string) {
    const [aProject, aTaskNumber] = a.split('-');
    const [bProject, bTaskNumber] = b.split('-');
    if (aProject === bProject) {
        return Number(aTaskNumber) - Number(bTaskNumber);
    }
    if (aProject < bProject) {
        return -1;
    }
    if (aProject > bProject) {
        return 1;
    }
}

/**
 * Alphabetically sorts a 2d array by the first element of each child array.
 * Pinned value will be arranged before "A". --Use in Array.sort callback.
 * @param {Array} a - zeroeth element as a string.
 * @param {Array} b - zeroeth element as a string.
 * @param {String} pinnedValue [Optional] string to pin to the top of the sort order.
 */
function alphabeticalSortPinnedValue(a: string[], b: string[], pinnedValue = NONE) {
    if (a[0] === pinnedValue) {
        return -1;
    } else if (b[0] === pinnedValue) {
        return 1;
    } else if (a[0] < b[0]) {
        return -1;
    } else if (a[0] > b[0]) {
        return 1;
    }
    return 0;
}

export {
    alphabeticalSortPinnedValue,
    getTooltipTimeData,
    sortByStatus,
    sortByTaskNumber,
    sortByTime
};
