const HOUR_IN_SECONDS = 3600;

function printHoursPretty(seconds) {
    // Ported from original JQTR

    let hours = Math.floor(seconds / HOUR_IN_SECONDS);
    hours = hours > 0 ? `${hours}h` : '';

    let minutes = Math.floor(seconds % HOUR_IN_SECONDS / 60);
    minutes = minutes > 0 ? `${minutes}m`: '';

    return (`${hours}${hours ? ' ' : ''}${minutes}`) || '0h';
}

const storageAvailable = ((type) => {
    // Ported from original JQTR
    try {
        const storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
})('localStorage');

function titleCase(string) {
    return string
        .split(' ')
        .map((word) => `${word[0].toUpperCase()}${word.substr(1)}`)
        .join(' ');
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
function flattenDeep(arr) {
    return arr.reduce((acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)), []);
}

export { flattenDeep, printHoursPretty, storageAvailable, titleCase };
