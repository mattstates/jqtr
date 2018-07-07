import Error from '../Error.jsx';
import React from 'react';
import ReactTable from 'react-table';
import Status from './Status.jsx';
import Time from './Time.jsx';
import { UNASSIGNED, NONE } from '../../utils/constants.js';
import { titleCase } from '../../utils/utils.js';

/*
*   <Table /> Wraps the react-table component.
*   Reference docs here: https://react-table.js.org/#/story/readme
*/
const viewTypes = Object.freeze({
    ASSIGNEE: 'assignee',
    INITIATIVE: 'initiative'
});

const columnTypes = Object.freeze({
    INDEX: 'index',
    RESOURCEGROUP: 'resourcegroup',
    STATUS: 'status',
    TOTALTIME: 'totaltime',
    VIEWTYPE: 'viewtype'
});

class Table extends React.Component {
    constructor(props) {
        super(props);
        // Methods
        this.alphabeticalSortPinnedValue = this.alphabeticalSortPinnedValue.bind(this);
        this.getColumnWidthByType = this.getColumnWidthByType.bind(this);
        this.formatAssigneeView = this.formatAssigneeView.bind(this);
        this.sortByTime = this.sortByTime.bind(this);
        this.sortByTimeValueAssignment = this.sortByTimeValueAssignment.bind(this);
        this.viewSelector = this.viewSelector.bind(this);

        // Properties
        // totalResources is an object where the keys are the resource name and the values are agregated total time.
        this.totalResources = this.resourceAccumulator(props.issues);
        this.columnWidths = Object.entries(columnTypes).reduce((value, columnType) => {
            value[columnType[1]] = this.getColumnWidthByType(columnType[1]);
            return value;
        }, {});

        this.state = {
            dataSet: props.issues,
            rowCount: props.issues.length,
            timeStamp: new Date().toLocaleString(),
            viewType: viewTypes.INITIATIVE
        };
    }

    sortByTimeValueAssignment(value) {
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
    }

    /**
     * @param {Array} taskCollection
     * Returns an object where each key is a resourceGroup type and its value is the aggregated total of time.
     */
    resourceAccumulator(taskCollection, ignoreSubtasks = false) {
        return taskCollection.reduce((totals, task) => {
            if (!ignoreSubtasks && task.subtasks.length) {
                const subtaskResources = this.resourceAccumulator(task.subtasks);
                Object.keys(subtaskResources).forEach((key) => {
                    totals[key] ? (totals[key] += subtaskResources[key]) : (totals[key] = subtaskResources[key]);
                });
            }
            if (task.omitFromJqtr) {
                return totals;
            }
            if (totals[task.resourceQueue]) {
                totals[task.resourceQueue] += task.timeProps.timeRemaining;
            } else {
                totals[task.resourceQueue] = task.timeProps.timeRemaining;
            }
            return totals;
        }, {});
    }

    /*
    * descending order would be:
    * Highest Numerical Value > Needs Estimate (React Component) > No Task
    */
    sortByTime(aVal, bVal) {
        const a = this.sortByTimeValueAssignment(aVal);
        const b = this.sortByTimeValueAssignment(bVal);

        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    }

    /**
     * Alphabetically sorts a 2d array by the first element of each child array.
     * Pinned value will be arranged before "A"
     * @param {Array} a - zeroeth element as a string.
     * @param {Array} b - zeroeth element as a string.
     * @param {String} pinnedValue [Optional] string to pin to the top of the sort order.
     */
    alphabeticalSortPinnedValue(a, b, pinnedValue = NONE) {
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

    /**
     * Returns a nested array sorted by Assignee Name. The second element in each nested array is an array of Jira Task Issues.
     * EX: [...['Assignee', [...{ JIRAISSUE }] ] ]
     * @param {Array} data - a collection of Jira Issues.
     */
    formatAssigneeView(data) {
        const allTasks = data
            .reduce((accumulation, task) => {
                return task.subtasks.length ? [...accumulation, task, ...task.subtasks] : [...accumulation, task];
            }, [])
            .filter((task) => !task.omitFromJqtr);

        return Object.entries(
            allTasks.reduce((assignees, task) => {
                let name = task.assignee.name
                    .replace(/"/g, '')
                    .trim()
                    .replace(/None/i, UNASSIGNED);
                assignees[name] ? assignees[name].push(task) : (assignees[name] = [task]);
                return assignees;
            }, {})
        ).sort((a, b) => this.alphabeticalSortPinnedValue(a, b, UNASSIGNED));
    }

    getDataByViewType(viewType) {
        switch (viewType) {
            case viewTypes.INITIATIVE:
                return this.props.issues;
            case viewTypes.ASSIGNEE:
                return this.formatAssigneeView(this.props.issues);
            default:
                return this.props.issues;
        }
    }

    viewSelector(viewType) {
        const data = this.getDataByViewType(viewType);
        this.setState({
            dataSet: data,
            rowCount: data.length,
            viewType: viewType
        });
    }

    getColumnWidthByType(columnType, totalWidth = this.props.appWidth) {
        const resourceCount = Object.keys(this.totalResources).length;
        const largeResourceList = resourceCount > 5;
        switch (columnType) {
            case columnTypes.INDEX:
                return totalWidth * 0.03;
            case columnTypes.RESOURCEGROUP:
                return totalWidth * (largeResourceList ? 0.5 : 0.4) / resourceCount;
            case columnTypes.STATUS:
                return totalWidth * 0.1;
            case columnTypes.TOTALTIME:
                return totalWidth * 0.06;
            case columnTypes.VIEWTYPE:
                return totalWidth * (largeResourceList ? 0.3 : 0.4);
            default:
                return undefined;
        }
    }

    render() {
        // This block dynamically adds table columns for resources that are returned from the response.
        if (this.state.dataSet.length) {
            // 2D array of [...[resourceQueue, total]]
            const sortedResourceList = Object.entries(this.totalResources).sort(this.alphabeticalSortPinnedValue);

            // React-Table Columns: Index, Task Name, Total Time Remaining, [Dynamic Resource Queue Time Remaining]

            let columns;
            switch (this.state.viewType) {
                case viewTypes.INITIATIVE:
                    columns = [
                        {
                            // INDEX & EXPANDER INFO
                            accessor: () => {
                                return 'index';
                            },
                            expander: true,
                            Expander: function({ isExpanded, ...args }) {
                                const { viewIndex, original } = args;
                                const enabled = Boolean(original.subtasks.length);
                                const classes = [isExpanded ? 'expandedIndex' : 'closedIndex', enabled ? 'expandedEnabled' : ''];
                                return <div className={classes.join(' ')}>{viewIndex + 1}</div>;
                            },
                            Header: (data) => {
                                return <ViewSelector currentView={this.state.viewType} views={Object.values(viewTypes)} clickHandler={this.viewSelector} />;
                            },
                            id: 'index',
                            sortable: false,
                            style: { textAlign: 'center', pointerEvents: 'none' },
                            width: this.columnWidths[columnTypes.INDEX]
                        },
                        {
                            // INITIATIVES
                            accessor: (data) => (
                                <React.Fragment key={data.taskNumber}>
                                    <span className="initiative">
                                        <span>
                                            {data.taskNumber}
                                            {': '}
                                        </span>
                                        <a href={`${this.props.lampstrackUrl}${data.taskNumber}`}>{data.taskTitle}</a>
                                    </span>
                                </React.Fragment>
                            ),
                            Footer: this.state.timeStamp,
                            Header: titleCase(viewTypes.INITIATIVE),
                            id: 'taskTitle',
                            minWidth: this.columnWidths[columnTypes.VIEWTYPE],
                            sortMethod: (aVal, bVal) => {
                                const a = aVal.key.split('-');
                                const b = bVal.key.split('-');
                                if (a[0] === b[0]) {
                                    return Number(b[1]) - Number(a[1]);
                                }
                                return b[0] - a[0];
                            },
                            style: { minHeight: 45 }
                        },
                        {
                            // STATUS
                            accessor: 'status',
                            Cell: (props) => (props.original.subtasks.length ? null : <Status info={props} />),
                            Footer: '',
                            Header: 'Status',
                            maxWidth: this.columnWidths[columnTypes.STATUS],
                            style: { cursor: 'default' }
                        },
                        {
                            // TOTAL TIME REMAINING
                            accessor: (data) =>
                                Object.values(this.resourceAccumulator([data])).reduce((total, value) => {
                                    return total + value;
                                }, 0),
                            Cell: (props) => <Time time={props.value} />,
                            Footer: () => {
                                return (
                                    <Time
                                        time={Object.values(this.totalResources).reduce((total, resourceTime) => {
                                            return total + resourceTime;
                                        }, 0)}
                                    />
                                );
                            },
                            Header: 'Total Time Remaining',
                            id: 'timeRemaining',
                            minWidth: this.columnWidths[columnTypes.TOTALTIME],
                            sortMethod: this.sortByTime
                        },
                        // Spread resource-based time columns into columns list.
                        ...sortedResourceList.map((resource) => {
                            return {
                                accessor: (data) => this.resourceAccumulator([data])[resource[0]],
                                Cell: (props) => <Time time={props.value} />,
                                Footer: <Time time={resource[1] || 0} />,
                                Header: resource[0],
                                id: resource[0],
                                maxWidth: this.columnWidths[columnTypes.RESOURCEGROUP],
                                sortMethod: this.sortByTime
                            };
                        })
                    ];
                    break;
                case viewTypes.ASSIGNEE:
                    columns = [
                        {
                            // INDEX & EXPANDER INFO
                            accessor: () => {
                                return 'index';
                            },
                            expander: true,
                            Expander: function({ isExpanded, ...args }) {
                                const { viewIndex, original } = args;
                                const enabled = Boolean(original[1].length);
                                const classes = [isExpanded ? 'expandedIndex' : 'closedIndex', enabled ? 'expandedEnabled' : ''];
                                return <div className={classes.join(' ')}>{viewIndex + 1}</div>;
                            },
                            Header: () => {
                                return <ViewSelector currentView={this.state.viewType} views={Object.values(viewTypes)} clickHandler={this.viewSelector} />;
                            },
                            id: 'index',
                            sortable: false,
                            style: { textAlign: 'center', pointerEvents: 'none' },
                            width: this.columnWidths[columnTypes.INDEX]
                        },
                        {
                            // ASSIGNEE
                            accessor: (data) => {
                                return data[0];
                            },
                            Footer: this.state.timeStamp,
                            Header: titleCase(viewTypes.ASSIGNEE),
                            id: 'taskTitle',
                            minWidth: this.columnWidths[columnTypes.VIEWTYPE],
                            sortable: false,
                            style: { minHeight: 45 }
                        },
                        {
                            // STATUS
                            accessor: 'status',
                            Footer: '',
                            Header: 'Status',
                            maxWidth: this.columnWidths[columnTypes.STATUS],
                            style: { cursor: 'default' }
                        },
                        {
                            // TOTAL TIME REMAINING
                            accessor: (data) => {
                                return data[1].reduce((total, value) => {
                                    return total + value.timeProps.timeRemaining;
                                }, 0);
                            },
                            Cell: (props) => <Time time={props.value} />,
                            Footer: () => {
                                return (
                                    <Time
                                        time={Object.values(this.totalResources).reduce((total, resourceTime) => {
                                            return total + resourceTime;
                                        }, 0)}
                                    />
                                );
                            },
                            Header: 'Total Time Remaining',
                            id: 'timeRemaining',
                            minWidth: this.columnWidths[columnTypes.TOTALTIME],
                            sortMethod: this.sortByTime
                        },
                        // Spread resource-based time columns into columns list.
                        ...sortedResourceList.map((resource) => {
                            return {
                                accessor: (data) => {
                                    const matchingTasks = data[1].filter((task) => task.resourceQueue === resource[0]);

                                    return matchingTasks.length ?
                                        matchingTasks.reduce((total, task) => {
                                            return total + task.timeProps.timeRemaining;
                                        }, 0) :
                                        '';
                                },
                                Cell: (props) => {
                                    const warning = props.original[1].some((task) => {
                                        return task.timeProps.needsEstimate && task.resourceQueue === resource[0];
                                    });
                                    return <Time className={warning} warning={warning} time={props.value} />;
                                },
                                Footer: <Time time={resource[1] || 0} />,
                                Header: resource[0],
                                id: resource[0],
                                maxWidth: this.columnWidths[columnTypes.RESOURCEGROUP],
                                sortMethod: this.sortByTime
                            };
                        })
                    ];
                    break;
                default:
                    return [];
            }

            return (
                <ReactTable
                    data={this.state.dataSet}
                    columns={columns}
                    showPaginationBottom={false}
                    showPageSizeOptions={false}
                    pageSize={this.state.rowCount}
                    className="-striped"
                    SubComponent={(row) => {
                        switch (this.state.viewType) {
                            case viewTypes.INITIATIVE:
                                return (
                                    <SubTable
                                        data={this.dropDownTableInitiativeViewData(row)}
                                        appWidth={this.props.appWidth}
                                        resourceList={sortedResourceList}
                                        lampstrackUrl={this.props.lampstrackUrl}
                                        columnWidths={this.columnWidths}
                                    />
                                );
                            case viewTypes.ASSIGNEE:
                                return (
                                    <SubTable
                                        data={this.dropDownTableAssigneeViewData(row.original[1])}
                                        appWidth={this.props.appWidth}
                                        resourceList={sortedResourceList}
                                        lampstrackUrl={this.props.lampstrackUrl}
                                        columnWidths={this.columnWidths}
                                    />
                                );
                            default:
                                return;
                        }
                    }}
                />
            );
        }

        return <Error />;
    }

    dropDownTableInitiativeViewData(rowInfo) {
        return [...rowInfo.original.subtasks, rowInfo.original].filter((task) => !task.omitFromJqtr).sort((a, b) => Number(a.id) - Number(b.id));
    }
    dropDownTableAssigneeViewData(rowInfo) {
        return rowInfo.filter((task) => !task.omitFromJqtr).sort((a, b) => Number(a.id) - Number(b.id));
    }
}

function SubTable(props) {
    const columns = [
        {
            // PLACEHOLDER - KEEPS COLUMNS ALIGNED.
            accessor: 'null',
            id: 'null',
            sortable: false,
            width: props.columnWidths[columnTypes.INDEX]
        },
        {
            // INITIATIVE
            accessor: (data) => (
                <React.Fragment>
                    <span className="initiative">
                        <span>
                            {data.taskNumber}
                            {': '}
                        </span>
                        <a href={`${props.lampstrackUrl}${data.taskNumber}`}>{data.taskTitle}</a>
                    </span>
                </React.Fragment>
            ),
            id: 'taskTitle',
            minWidth: props.columnWidths[columnTypes.VIEWTYPE],
            style: { minHeight: 45 }
        },
        {
            // STATUS
            Cell: (props) => <Status info={props} />,
            accessor: 'status',
            maxWidth: props.columnWidths[columnTypes.STATUS],
            style: { cursor: 'default' }
        },

        {
            // TOTAL TIME PLACEHOLDER - KEEPS COLUMNS ALIGNED.
            accessor: 'null',
            id: 'null',
            minWidth: props.columnWidths[columnTypes.TOTALTIME],
            sortable: false
        },

        ...props.resourceList.map((resource) => {
            return {
                accessor: (data) => {
                    if (data.resourceQueue === resource[0] && !data.timeProps.needsEstimate) {
                        return data.timeProps.timeEstimate;
                    } else if (data.resourceQueue === resource[0] && data.timeProps.needsEstimate) {
                        return null;
                    }
                    return '';
                },
                Cell: (props) => <Time time={props.value} test={props} />,
                id: resource[0],
                maxWidth: props.columnWidths[columnTypes.RESOURCEGROUP]
            };
        })
    ];

    return props.data.length ? (
        <ReactTable
            data={props.data}
            columns={columns}
            showPaginationBottom={false}
            showPageSizeOptions={false}
            defaultPageSize={props.data.length}
            className="-striped subtable"
            resizable={false}
        />
    ) : null;
}

function ViewSelector(props) {
    return (
        <div className="viewSelector">
            {props.views.map((view, index) => {
                return (
                    <div
                        key={index}
                        className={`${view}${props.currentView === view ? ' disabled' : ''}`}
                        title={`${titleCase(view)} View`}
                        onClick={props.clickHandler.bind(null, view)}
                    />
                );
            })}
        </div>
    );
}

export default Table;
