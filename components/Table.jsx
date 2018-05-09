import React from 'react';
import ReactTable from 'react-table';
import { printHoursPretty, lampstrackUrl } from '../utils/utils.js';
import Error from './Error.jsx';
/*
*   <Table /> Wraps the react-table component.
*   Reference docs here: https://react-table.js.org/#/story/readme
*/
class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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

            const columns = [
                {
                    Header: '',
                    accessor: 'index',
                    id: 'index',
                    sortable: false,
                    Cell: props => <span>{props.viewIndex + 1}</span>,
                    width: 32,
                    style: { textAlign: 'center' }
                },
                {
                    Header: 'Initiative',
                    Footer: '',
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
                    id: 'taskTitle',
                    minWidth: parentWidth * 0.25,
                    style: { minHeight: 45 }
                },
                {
                    Header: 'Status',
                    Footer: '',
                    accessor: 'status',
                    maxWidth: parentWidth * 0.1,
                    Cell: props => <Status info={props} />
                },
                {
                    Header: 'Total Time Remaining',
                    Footer: printHoursPretty(
                        Object.values(totalResources).reduce((total, resourceTime) => {
                            return total + resourceTime;
                        }, 0)
                    ),
                    id: 'timeRemaining',
                    accessor: data => {
                        let initialTime =
                            data.timeProps && data.timeProps.timeRemaining
                                ? data.timeProps.timeRemaining
                                : 0;
                        return printHoursPretty(
                            data.subtasks.reduce((total, task) => {
                                if (!task.timeProps || !task.timeProps.timeRemaining) {
                                    return total;
                                }
                                return task.timeProps.timeRemaining + total;
                            }, initialTime)
                        );
                    },
                    maxWidth: parentWidth * 0.09
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
                    // TODO: Consider passing in dependencies so this can be more pure.
                    .map(resource => {
                        return {
                            Header: resource[0],
                            Footer: printHoursPretty(resource[1]),
                            id: resource[0],
                            accessor: data => {
                                /*
                                    * Tasks that have not been estimated have a value of null
                                    * When the value for the resource is a number, we will show it
                                    * to the user, otherwise we will notify the user that there is
                                    * a task that needs an estimate.
                                    */
                                // TODO: Make this link to the task with the issue.
                                if (typeof data.resourceInfo[resource[0]] === 'number')
                                    return printHoursPretty(data.resourceInfo[resource[0]]);
                                if (data.resourceInfo[resource[0]] === null)
                                    return (
                                        <span title="Needs Estimate" className={'needs-estimate'}>
                                            ⚠️
                                        </span>
                                    );
                                return '';
                            },
                            minWidth: minWidth,
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
                    className="-striped -highlight"
                />
            );
        }

        return <Error />;
    }
}

/*
* Render the Status component in the table column object. Has access to the row's data
* will show team name on hover.
*/
class Status extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mousedOver: false
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover(e) {
        this.setState(this.toggleMousedOver);
    }

    toggleMousedOver(prevState) {
        return {
            mousedOver: !prevState.mousedOver
        };
    }

    render() {
        const showTeamName =
            this.props.info.original.resourceGroup && this.props.info.original.resourceGroup.name;
        const keyTask = this.props.info.original.labels &&
            Boolean(this.props.info.original.labels.indexOf('key_task') >= 0) && (
                <span className="keyTask" />
            );
        return (
            <div
                className="status"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
            >
                {keyTask}
                {this.state.mousedOver && showTeamName ? showTeamName : this.props.info.value}
            </div>
        );
    }
}

export default Table;
