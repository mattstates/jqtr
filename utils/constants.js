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
    COLUMN_TYPES,
    NONE,
    UNASSIGNED,
    VIEW_TYPES,
    WARNING_SYMBOL
}