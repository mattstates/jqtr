const ALERT_SYMBOL = '❗';
const ERROR_SYMBOL = '😔';
const FLAG_SYMBOL = '🚩'
const KEYTASK_SYMBOL = '🔑';
const NONE = 'None';
const UNASSIGNED = 'Unassigned';
const WARNING_SYMBOL = '⚠️';

const VIEW_TYPES = Object.freeze({
    ASSIGNEE: 'assignee',
    INITIATIVE: 'initiative'
});

const COLUMN_TYPES = Object.freeze({
    INDEX: 'index',
    RESOURCEGROUP: 'resourcegroup',
    STATUS: 'status',
    TOTALTIME: 'totaltime',
    VIEWTYPE: 'viewtype'
});

export {
    ALERT_SYMBOL,
    COLUMN_TYPES,
    ERROR_SYMBOL,
    FLAG_SYMBOL,
    KEYTASK_SYMBOL,
    NONE,
    UNASSIGNED,
    VIEW_TYPES,
    WARNING_SYMBOL
};