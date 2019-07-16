import './Table.scss';
import './ReactTable.scss';
import Error from '../Error.jsx';
import React from 'react';
import ReactTable from 'react-table';
import Status from './Status.jsx';
import SubTable from './SubTable.jsx';
import Time from './Time.jsx';
import ViewSelector from './ViewSelector.jsx';
import { COLUMN_TYPES, UNASSIGNED, VIEW_TYPES, WARNING_SYMBOL } from '../../utils/constants.js';
import { alphabeticalSortPinnedValue, getTooltipTimeData, sortByStatus, sortByTaskNumber, sortByTime } from './tableUtils.js';
import { flattenDeep, storageAvailable, titleCase } from '../../utils/utils.js';

/**
 * <Table /> Wraps the react-table component.
 * Reference docs here: https://react-table.js.org/#/story/readme
 */
class Table extends React.Component {
    constructor(props) {
        super(props);
        // Methods
        this.formatAssigneeView = this.formatAssigneeView.bind(this);
        this.formatSubTableDataByViewType = this.formatSubTableDataByViewType.bind(this);
        this.getColumnWidthByType = this.getColumnWidthByType.bind(this);
        this.showFooterWarning = this.showFooterWarning.bind(this);
        this.updateStateByViewType = this.updateStateByViewType.bind(this);
        this.viewSelector = this.updateStateByViewType.bind(this);

        // Properties
        // totalResources is an object where the keys are the resource name and the values are aggregated total time.
        this.totalResources = Object.freeze(this.resourceAccumulator(props.issues));
        this.columnWidths = Object.freeze(
            Object.values(COLUMN_TYPES).reduce((values, columnType) => {
                values[columnType] = this.getColumnWidthByType(columnType);
                return values;
            }, {})
        );

        this.state = {
            dataSet: props.issues,
            rowCount: props.issues.length,
            timeStamp: new Date().toLocaleString(),
            viewType: VIEW_TYPES.INITIATIVE
        };
    }

    componentDidMount() {
        // Get initial state for viewType from localStorage if it exists.
        let initialViewType;

        if (
            storageAvailable &&
            window.localStorage.lpTimeRemainingViewType &&
            Object.values(VIEW_TYPES).some((viewType) => viewType === window.localStorage.lpTimeRemainingViewType)
        ) {
            initialViewType = window.localStorage.lpTimeRemainingViewType;
        } else {
            initialViewType = VIEW_TYPES.INITIATIVE;
        }

        // Set initial state.
        this.updateStateByViewType(initialViewType);
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
                    .replace(/"/g, '') // Some assignee's have quotes and spaces around their names... O_o.
                    .trim()
                    .replace(/None/i, UNASSIGNED); // 'None' is the official Jira value for an unassigned user.
                assignees[name] ? assignees[name].push(task) : (assignees[name] = [task]);
                return assignees;
            }, {})
        ).sort((a, b) => alphabeticalSortPinnedValue(a, b, UNASSIGNED));
    }

    updateStateByViewType(view) {
        let data;
        let viewType;

        switch (view) {
            case VIEW_TYPES.INITIATIVE:
                data = this.props.issues.sort((a, b) => sortByTaskNumber(a.taskNumber, b.taskNumber));
                viewType = view;
                break;
            case VIEW_TYPES.ASSIGNEE:
                data = this.formatAssigneeView(this.props.issues);
                viewType = view;
                break;
            default:
                data = this.state.dataSet;
                viewType = this.state.viewType;
        }
        this.setState({
            dataSet: data,
            rowCount: data.length,
            viewType: viewType
        });

        // Store the viewType in localStorage for future page views.
        if (storageAvailable) {
            window.localStorage.lpTimeRemainingViewType = viewType;
        }
    }

    /**
     * Assigns values to be used for each column type in the table.
     * Since there are a dynamic number of resourceQueues (Back End, Front End, QA, etc.)
     * this method will generate some ballpark numbers to be passed into the column objects for width.
     * returns a Number.
     * @param {String} columnType - must be a value from COLUMN_TYPES constant
     * @param {Number} totalWidth - should be the application width.
     */
    getColumnWidthByType(columnType, totalWidth = this.props.appWidth) {
        const resourceCount = Object.keys(this.totalResources).length;
        const largeResourceList = resourceCount > 4;
        switch (columnType) {
            case COLUMN_TYPES.INDEX:
                return totalWidth * 0.03;
            case COLUMN_TYPES.RESOURCEGROUP:
                return (totalWidth * (largeResourceList ? 0.5 : 0.4)) / resourceCount;
            case COLUMN_TYPES.STATUS:
                return totalWidth * 0.125;
            case COLUMN_TYPES.TOTALTIME:
                return totalWidth * 0.05;
            case COLUMN_TYPES.VIEWTYPE:
                return totalWidth * (largeResourceList ? 0.3 : 0.4);
            default:
                return undefined;
        }
    }

    /**
     * Returns boolean
     * @param {*} collection
     * @param {*} resourceQueue
     */
    showFooterWarning(collection, resourceQueue) {
        return collection.filter((task) => !task.omitFromJqtr && task.resourceQueue === resourceQueue && task.timeProps.needsEstimate).length > 0;
    }

    render() {
        if (this.state.dataSet.length) {
            // 2D array of [...[resourceQueue, total]]
            const sortedResourceList = Object.entries(this.totalResources).sort(alphabeticalSortPinnedValue);

            // React-Table Columns: Index, Task Name, Total Time Remaining, [Dynamic Resource Queue Time Remaining]
            let columns;
            switch (this.state.viewType) {
                case VIEW_TYPES.INITIATIVE:
                    columns = [
                        {
                            // INDEX & EXPANDER INFO
                            accessor: () => {
                                return 'index';
                            },
                            expander: true,
                            Expander: function ({ isExpanded, ...args }) {
                                const { viewIndex, original } = args;
                                const enabled = Boolean(original.subtasks.length);
                                const classes = [isExpanded ? 'expandedIndex' : 'closedIndex', enabled ? 'expandedEnabled' : ''];
                                return <div className={classes.join(' ')}>{viewIndex + 1}</div>;
                            },
                            Header: () => {
                                return (
                                    <ViewSelector
                                        currentView={this.state.viewType}
                                        views={Object.values(VIEW_TYPES)}
                                        clickHandler={this.updateStateByViewType}
                                    />
                                );
                            },
                            id: 'index',
                            sortable: false,
                            style: { textAlign: 'center', pointerEvents: 'none' },
                            width: this.columnWidths[COLUMN_TYPES.INDEX]
                        },
                        {
                            // INITIATIVES
                            accessor: (data) => (
                                <React.Fragment key={data.taskNumber}>
                                    <span className="initiative">
                                        <img src={data.issueType.iconUrl} title={data.issueType.name} />
                                        <span>
                                            {data.taskNumber}
                                            {': '}
                                        </span>
                                        <a href={`${this.props.lampstrackUrl}${data.taskNumber}`}>{data.taskTitle}</a>
                                    </span>
                                </React.Fragment>
                            ),
                            Footer: this.state.timeStamp,
                            Header: titleCase(VIEW_TYPES.INITIATIVE),
                            id: 'taskTitle',
                            minWidth: this.columnWidths[COLUMN_TYPES.VIEWTYPE],
                            sortMethod: (a, b) => sortByTaskNumber(a.key, b.key),
                            style: { minHeight: 45 }
                        },
                        {
                            // STATUS
                            accessor: (data) =>
                                data.omitFromJqtr ? (
                                    <span className="warning-symbol" title="Task Omitted from Query" info={{ status: '' }}>
                                        {WARNING_SYMBOL}
                                    </span>
                                ) : (
                                        <Status info={data} />
                                    ),
                            Footer: '',
                            Header: 'Status',
                            id: 'status',
                            maxWidth: this.columnWidths[COLUMN_TYPES.STATUS],
                            sortMethod: (a, b) => {
                                const mappedStatus = [a, b].map((component) => {
                                    return component === '' ? '' : component.props.info.status;
                                });
                                return sortByStatus(mappedStatus[0], mappedStatus[1]);
                            },
                            style: { cursor: 'default' }
                        },
                        {
                            // TOTAL TIME REMAINING
                            accessor: (data) =>
                                Object.values(this.resourceAccumulator([data])).reduce((total, value) => {
                                    return total + value;
                                }, 0),
                            Cell: (props) => {
                                return <Time time={props.value} progressInfo={props.original.timeProps.aggregateProgress} />;
                            },
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
                            minWidth: this.columnWidths[COLUMN_TYPES.TOTALTIME],
                            sortMethod: sortByTime
                        },
                        // Spread resource-based time columns into columns list.
                        ...sortedResourceList.map((resource) => {
                            return {
                                accessor: (data) => this.resourceAccumulator([data])[resource[0]],
                                Cell: (props) => {
                                    const tooltipData = getTooltipTimeData([props.original, ...props.original.subtasks], resource[0]);
                                    return props.value === undefined ? null : (
                                        <Time time={props.value} id={props.original.id + resource[0]} tooltipData={tooltipData.length ? tooltipData : null} />
                                    );
                                },
                                Footer: (info) => (
                                    <Time
                                        footerWarning={this.showFooterWarning(
                                            flattenDeep(info.data.map((item) => [item._original, ...item._original.subtasks])),
                                            resource[0]
                                        )}
                                        time={resource[1] || 0}
                                    />
                                ),
                                Header: resource[0],
                                id: resource[0],
                                maxWidth: this.columnWidths[COLUMN_TYPES.RESOURCEGROUP],
                                sortMethod: sortByTime
                            };
                        })
                    ];
                    break;
                case VIEW_TYPES.ASSIGNEE:
                    columns = [
                        {
                            // INDEX & EXPANDER INFO
                            accessor: () => {
                                return 'index';
                            },
                            expander: true,
                            Expander: function ({ isExpanded, ...args }) {
                                const { viewIndex, original } = args;
                                const enabled = Boolean(original[1].length);
                                const classes = [isExpanded ? 'expandedIndex' : 'closedIndex', enabled ? 'expandedEnabled' : ''];
                                return <div className={classes.join(' ')}>{viewIndex + 1}</div>;
                            },
                            Header: () => {
                                return (
                                    <ViewSelector
                                        currentView={this.state.viewType}
                                        views={Object.values(VIEW_TYPES)}
                                        clickHandler={this.updateStateByViewType}
                                    />
                                );
                            },
                            id: 'index',
                            sortable: false,
                            style: { textAlign: 'center', pointerEvents: 'none' },
                            width: this.columnWidths[COLUMN_TYPES.INDEX]
                        },
                        {
                            // ASSIGNEE
                            accessor: (data) => {
                                return data[0];
                            },
                            Footer: this.state.timeStamp,
                            Header: titleCase(VIEW_TYPES.ASSIGNEE),
                            id: 'taskTitle',
                            minWidth: this.columnWidths[COLUMN_TYPES.VIEWTYPE],
                            style: { minHeight: 45 }
                        },
                        {
                            // STATUS
                            accessor: 'status',
                            Footer: '',
                            Header: 'Status',
                            maxWidth: this.columnWidths[COLUMN_TYPES.STATUS],
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
                            minWidth: this.columnWidths[COLUMN_TYPES.TOTALTIME],
                            sortMethod: sortByTime
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
                                    return props.value === undefined ? null : <Time warning={warning} time={props.value} />;
                                },
                                Footer: (info) => (
                                    <Time
                                        footerWarning={this.showFooterWarning(flattenDeep(info.data.map((item) => item._original[1])), resource[0])}
                                        time={resource[1] || 0}
                                    />
                                ),
                                Header: resource[0],
                                id: resource[0],
                                maxWidth: this.columnWidths[COLUMN_TYPES.RESOURCEGROUP],
                                sortMethod: sortByTime
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
                            case VIEW_TYPES.INITIATIVE:
                                return (
                                    <SubTable
                                        data={this.formatSubTableDataByViewType(VIEW_TYPES.INITIATIVE, row)}
                                        appWidth={this.props.appWidth}
                                        resourceList={sortedResourceList}
                                        lampstrackUrl={this.props.lampstrackUrl}
                                        columnWidths={this.columnWidths}
                                        viewType={VIEW_TYPES.INITIATIVE}
                                    />
                                );
                            case VIEW_TYPES.ASSIGNEE:
                                return (
                                    <SubTable
                                        data={this.formatSubTableDataByViewType(VIEW_TYPES.ASSIGNEE, row.original[1])}
                                        appWidth={this.props.appWidth}
                                        resourceList={sortedResourceList}
                                        lampstrackUrl={this.props.lampstrackUrl}
                                        columnWidths={this.columnWidths}
                                        viewType={VIEW_TYPES.ASSIGNEE}
                                    />
                                );
                            default:
                                return;
                        }
                    }}
                />
            );
        }

        return <Error message={'No Results in Your Query.'} />;
    }

    formatSubTableDataByViewType(viewType, rowInfo) {
        switch (viewType) {
            case VIEW_TYPES.INITIATIVE:
                return [...rowInfo.original.subtasks, rowInfo.original].filter((task) => !task.omitFromJqtr).sort((a, b) => Number(a.id) - Number(b.id));
            case VIEW_TYPES.ASSIGNEE:
                return rowInfo.filter((task) => !task.omitFromJqtr).sort((a, b) => Number(a.id) - Number(b.id));
            default:
                console.error('Unsupported View Type Passed to Sub Table Data.');
                return undefined;
        }
    }
}

export default Table;
