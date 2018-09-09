import React from 'react';
import ReactTable from 'react-table';
import Status from './Status.jsx';
import Time from './Time.jsx';
import { COLUMN_TYPES, VIEW_TYPES } from '../../utils/constants.js';

export default (props) => {
    const { viewType } = props;
    const columns = [
        {
            // PLACEHOLDER - KEEPS COLUMNS ALIGNED.
            accessor: 'null',
            id: 'null',
            sortable: false,
            width: props.columnWidths[COLUMN_TYPES.INDEX]
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
            minWidth: props.columnWidths[COLUMN_TYPES.VIEWTYPE],
            style: { minHeight: 45 }
        },

        {
            // STATUS
            Cell: (data) => <Status info={data.original} />,
            accessor: 'status',
            maxWidth: props.columnWidths[COLUMN_TYPES.STATUS],
            style: { cursor: 'default' }
        },

        {
            // TOTAL TIME PLACEHOLDER - KEEPS COLUMNS ALIGNED.
            accessor: 'null',
            id: 'null',
            minWidth: props.columnWidths[COLUMN_TYPES.TOTALTIME],
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
                Cell: (data) => <Time time={data.value} assignee={viewType === VIEW_TYPES.INITIATIVE ? data.original.assignee : null} />,
                id: resource[0],
                maxWidth: props.columnWidths[COLUMN_TYPES.RESOURCEGROUP]
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
};
