import Error from '../Error.jsx';
import React from 'react';
import ReactTable from 'react-table';
import Status from './Status.jsx';
import Time from './Time.jsx';
import { lampstrackUrl } from '../../utils/utils.js';
/*
*   <Table /> Wraps the react-table component.
*   Reference docs here: https://react-table.js.org/#/story/readme
*/
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.sortByTimeValueAssignment = this.sortByTimeValueAssignment.bind(this);
        this.sortByTime = this.sortByTime.bind(this);
    }

    sortByTimeValueAssignment(value) {
        switch (typeof value) {
            // no task meets this criteria
            case 'undefined':
                return -6;
                break;
            // value is already a react component
            case 'object':
                return -5;
                break;
            // empty string
            case 'string':
                return -4;
                break;
            // null or a number
            default:
                return value;
        }
    }

    /*
    * descending order would be: 
    * Highest Numerical Value > Needs Estimate (React Component) > No Task
    */
    sortByTime(a, b) {
        const convertedA = this.sortByTimeValueAssignment(a);
        const convertedB = this.sortByTimeValueAssignment(b);

        if (convertedA < convertedB) return 1;
        if (convertedA > convertedB) return -1;
        return 0;
    }

    render() {
        console.log(this.props.issues);
        // This block dynamically adds table columns for resources that are returned from the response.
        if (this.props.issues) {
            const minWidth = 75;
            const parentWidth = this.props.appWidth;
            // totalResources is an object where the keys are the resource name and the values are agregated total time.
            const totalResources = this.props.issues.reduce((totals, task) => {
                if (!task.resourceInfo) {
                    console.warn(
                        `Some tasks may be missing resource information. Check ${task.taskNumber}`
                    );
                    return totals;
                }
                Object.entries(task.resourceInfo).forEach(keyValue => {
                    totals[keyValue[0]]
                        ? (totals[keyValue[0]] += keyValue[1])
                        : (totals[keyValue[0]] = keyValue[1]);
                });
                return totals;
            }, {});

            // React-Table Columns: Index, Task Name, Total Time Remaining, [Dynamic Resource Queue Time Remaining]
            const columns = [
                {
                    Cell: props => <span>{props.viewIndex + 1}</span>,
                    Header: '',
                    accessor: 'index',
                    id: 'index',
                    sortable: false,
                    style: { textAlign: 'center' },
                    width: 32
                },
                {
                    accessor: data => (
                        <React.Fragment>
                            <span className="initiative">
                                <span>
                                    {data.taskNumber}
                                    {': '}
                                </span>
                                <a href={`${this.props.lampstrackUrl}${data.taskNumber}`}>
                                    {data.taskTitle}
                                </a>
                            </span>
                        </React.Fragment>
                    ),
                    Footer: '',
                    Header: 'Initiative',
                    id: 'taskTitle',
                    minWidth: parentWidth * 0.25,
                    style: { minHeight: 45 }
                },
                {
                    Cell: props => <Status info={props} />,
                    Footer: '',
                    Header: 'Status',
                    accessor: 'status',
                    maxWidth: parentWidth * 0.1,
                    style: {cursor: 'default'}
                },
                {
                    accessor: data => {
                        let parentTaskTime =
                            data.timeProps && data.timeProps.timeRemaining
                                ? data.timeProps.timeRemaining
                                : 0;

                        return data.subtasks.reduce((total, task) => {
                            if (!task.timeProps || !task.timeProps.timeRemaining) {
                                return total;
                            }
                            return task.timeProps.timeRemaining + total;
                        }, parentTaskTime);
                    },
                    Cell: props => <Time time={props.value} />,
                    Footer: () => {
                        return (
                            <Time
                                time={Object.values(totalResources).reduce(
                                    (total, resourceTime) => {
                                        return total + resourceTime;
                                    },
                                    0
                                )}
                            />
                        );
                    },
                    Header: 'Total Time Remaining',
                    id: 'timeRemaining',
                    maxWidth: parentWidth * 0.09,
                    sortMethod: this.sortByTime
                },
                // Spread resource-based time columns into columns list.
                ...Object.entries(totalResources)
                    .sort((a, b) => {
                        // Sorting Rules Ported from original JQTR (Alphabetical with "None" coming first.)
                        if (a[0] === 'None') {
                            return -1;
                        } else if (b[0] === 'None') {
                            return 1;
                        } else if (a[0] < b[0]) return -1;
                        else if (a[0] > b[0]) return 1;
                        else return 0;
                    })

                    .map(resource => {
                        return {
                            accessor: data => {
                                // TODO: Make this link to the task with the issue.
                                return data.resourceInfo[resource[0]];
                            },
                            Cell: props => {
                                return <Time time={props.value} />;
                            },
                            Footer: <Time time={resource[1] || 0} />,
                            Header: resource[0],
                            id: resource[0],
                            minWidth: minWidth,
                            sortMethod: this.sortByTime,
                            width: (headerLength => {
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
                />
            );
        }

        return <Error />;
    }
}

export default Table;
