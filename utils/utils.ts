const HOUR_IN_SECONDS = 3600;

function printHoursPretty(seconds: number): string {
    const hours = Math.floor(seconds / HOUR_IN_SECONDS);
    const hoursOutput = hours > 0 ? `${hours}h` : '';

    const minutes = Math.floor((seconds % HOUR_IN_SECONDS) / 60);
    const minutesOutput = minutes > 0 ? `${minutes}m` : '';

    return `${hoursOutput}${Boolean(hoursOutput && minutesOutput) ? ' ' : ''}${minutesOutput}` || '0h';
}

const checkStorageAvailability = (browserStorageType: string): boolean => {
    try {
        const storage = (window as { [key: string]: any })[browserStorageType] as Storage;
        const temp = '__storage_test__';
        storage.setItem(temp, temp);
        storage.removeItem(temp);
        return true;
    } catch (e) {
        const message = (e?.message as string) || 'No error message available';
        console.error(`${browserStorageType} Storage is Not Available`, message);
        return false;
    }
};

function titleCase(string: string): string {
    return string
        .split(' ')
        .map(word => `${word[0].toUpperCase()}${word.substr(1)}`)
        .join(' ');
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// TODO: Describe the nestedArray type better with Typescript.
function flattenDeep<T>(nestedArray: Array<T>): T[] {
    return nestedArray.reduce((acc, val) => {
        return Array.isArray(val) ? [...acc, ...flattenDeep<T>(val)] : [...acc, val];
    }, []);
}

export { checkStorageAvailability, flattenDeep, printHoursPretty, titleCase };
