import Error from '../Error.jsx';
import React from 'react';
import ReactTable from 'react-table';
import Status from './Status.jsx';
import Time from './Time.jsx';

/*
*   <Table /> Wraps the react-table component.
*   Reference docs here: https://react-table.js.org/#/story/readme
*/
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.sortByTimeValueAssignment = this.sortByTimeValueAssignment.bind(this);
        this.sortByTime = this.sortByTime.bind(this);
        this.state = {
            viewType: 'initiative'
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
    resourceAccumulator(taskCollection) {
        return taskCollection.reduce((totals, task) => {
            if (task.subtasks.length) {
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

    resourceNameSort(a, b) {
        // Sorting Rules Ported from original JQTR (Alphabetical with "None" coming first.)
        if (a[0] === 'None') {
            return -1;
        } else if (b[0] === 'None') {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    }

    // TODO: WIP.
    formatAssigneeView(data) {
        const allTasks = data
            .reduce((accumulation, task) => {
                return task.subtasks.length ? [...accumulation, task, ...task.subtasks] : [...accumulation, task];
            }, [])
            .filter((task) => !task.omitFromJqtr);
        return allTasks.reduce((assignees, task) => {
            let name = task.assignee.name
                .replace(/"/g, '')
                .trim()
                .replace(/None/i, 'Unassigned');
            assignees[name] ? assignees[name].push(task) : (assignees[name] = [task]);
            return assignees;
        }, {});
    }

    render() {
        // This block dynamically adds table columns for resources that are returned from the response.
        if (this.props.issues) {
            const minWidth = 75;
            const parentWidth = this.props.appWidth;
            // totalResources is an object where the keys are the resource name and the values are agregated total time.
            const totalResources = this.resourceAccumulator(this.props.issues);

            // 2D array of [...[resourceQueue, total]]
            const sortedResourceList = Object.entries(totalResources).sort(this.resourceNameSort);

            // React-Table Columns: Index, Task Name, Total Time Remaining, [Dynamic Resource Queue Time Remaining]
            const columns = [
                {
                    // INDEX & EXPANDER INFO
                    accessor: () => {
                        return 'index';
                    },
                    expander: true,
                    Expander: function({ isExpanded, ...args }) {
                        const { viewIndex, original } = arguments[0];
                        const enabled = Boolean(original.subtasks.length);
                        const classes = [isExpanded ? 'expandedIndex' : 'closedIndex', enabled ? 'expandedEnabled' : ''];
                        return <div className={classes.join(' ')}>{viewIndex + 1}</div>;
                    },
                    id: 'index',
                    sortable: false,
                    style: { textAlign: 'center', pointerEvents: 'none' },
                    width: 32
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
                    Footer: new Date().toLocaleString(),
                    Header: 'Initiative',
                    id: 'taskTitle',
                    minWidth: parentWidth * 0.25,
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
                    maxWidth: parentWidth * 0.1,
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
                                time={Object.values(totalResources).reduce((total, resourceTime) => {
                                    return total + resourceTime;
                                }, 0)}
                            />
                        );
                    },
                    Header: 'Total Time Remaining',
                    id: 'timeRemaining',
                    maxWidth: parentWidth * 0.09,
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
                        minWidth: minWidth,
                        sortMethod: this.sortByTime,
                        // TODO: Extract this logic since it is also used in the subtable.
                        width: ((headerLength) => {
                            // Attempting to have dynamic widths for columns.
                            return headerLength < minWidth ? minWidth : headerLength;
                        })(resource[0].length * 8)
                    };
                })
            ];

            return (
                <ReactTable
                    data={this.props.issues}
                    columns={columns}
                    showPaginationBottom={false}
                    showPageSizeOptions={false}
                    defaultPageSize={this.props.maxRows}
                    className="-striped"
                    SubComponent={(row) => {
                        switch (this.state.viewType) {
                            case 'initiative':
                                return (
                                    <SubTable
                                        data={this.initiativeData(row)}
                                        appWidth={this.props.appWidth}
                                        resourceList={sortedResourceList}
                                        minWidth={minWidth}
                                        lampstrackUrl={this.props.lampstrackUrl}
                                    />
                                );
                            case 'assignee':
                                return (
                                    <SubTable
                                        data={this.initiativeData(row)}
                                        appWidth={this.props.appWidth}
                                        resourceList={sortedResourceList}
                                        minWidth={minWidth}
                                        lampstrackUrl={this.props.lampstrackUrl}
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

    initiativeData(rowInfo) {
        return [...rowInfo.original.subtasks, rowInfo.original].filter((task) => !task.omitFromJqtr).sort((a, b) => Number(a.id) - Number(b.id));
    }
}

function SubTable(props) {
    const parentWidth = props.appWidth;
    const minWidth = props.minWidth;

    // TODO: Refactor widths and heights so these setting are passed in from the parent.
    const columns = [
        {
            // PLACEHOLDER - KEEPS COLUMNS ALIGNED.
            // TODO: Turn width into a variable and pass it in here from the parent.
            accessor: 'null',
            id: 'null',
            sortable: false,
            width: 32
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
            minWidth: parentWidth * 0.25,
            style: { minHeight: 45 }
        },
        {
            // STATUS
            Cell: (props) => <Status info={props} />,
            accessor: 'status',
            maxWidth: parentWidth * 0.1,
            style: { cursor: 'default' }
        },

        {
            // PLACEHOLDER - KEEPS COLUMNS ALIGNED.
            accessor: 'null',
            id: 'null',
            maxWidth: parentWidth * 0.09,
            sortable: false
        },

        ...props.resourceList.map((resource) => {
            return {
                accessor: (data) => {
                    if (data.resourceQueue === resource[0] && !data.timeProps.needsEstimate) {
                        return data.timeProps.timeEstimate;
                    }
                    return '';
                },
                Cell: (props) => <Time time={props.value} test={props} />,

                id: resource[0],
                minWidth: minWidth,
                width: ((headerLength) => {
                    // Attempting to have dynamic widths for columns.
                    // TODO: Extract this into a function now that it is used in more than one place.
                    return headerLength < minWidth ? minWidth : headerLength;
                })(resource[0].length * 8)
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

export default Table;
