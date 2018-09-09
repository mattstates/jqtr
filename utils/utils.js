function printHoursPretty(duration) {
    // Ported from original JQTR
    duration = duration / 3600;
    const hours = Math.floor(duration) || 0;
    const minutes = Math.floor(((duration * 3600) % 3600) / 60) || 0;
    const prettyTime = (hours > 0 ? hours + 'h' : '') + (minutes > 0 ? ' ' + minutes + 'm' : '');
    return prettyTime || '0h';
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
