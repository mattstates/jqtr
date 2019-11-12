import './SubTable.scss';
import React from 'react';
import ReactTable from 'react-table';
import Status from './Status';
import Time from './Time';
import { COLUMN_TYPES, VIEW_TYPES } from '../../utils/constants';
import { getTooltipTimeData } from './tableUtils.js';

export default ({ viewType, jiraApplicationUrl, columnWidths, resourceList, data }) => {
    const columns = [
        {
            // PLACEHOLDER - KEEPS COLUMNS ALIGNED.
            accessor: 'null',
            id: 'null',
            sortable: false,
            width: columnWidths[COLUMN_TYPES.INDEX]
        },

        {
            // INITIATIVE
            accessor: ({ taskNumber, taskTitle }) => (
                <React.Fragment>
                    <span className="initiative">
                        <span>
                            {taskNumber}
                            {': '}
                        </span>
                        <a href={`${jiraApplicationUrl}${taskNumber}`}>{taskTitle}</a>
                    </span>
                </React.Fragment>
            ),
            id: 'taskTitle',
            minWidth: columnWidths[COLUMN_TYPES.VIEWTYPE],
            style: { minHeight: 45 }
        },

        {
            // STATUS
            Cell: ({ original }) => <Status info={original} />,
            accessor: 'status',
            maxWidth: columnWidths[COLUMN_TYPES.STATUS],
            style: { cursor: 'default' }
        },

        {
            // TOTAL TIME PLACEHOLDER - KEEPS COLUMNS ALIGNED.
            accessor: 'null',
            id: 'null',
            minWidth: columnWidths[COLUMN_TYPES.TOTALTIME],
            sortable: false
        },

        ...resourceList.map((resource) => {
            return {
                accessor: ({ resourceQueue, timeProps }) => {
                    if (resourceQueue === resource[0] && !timeProps.needsEstimate) {
                        return timeProps.timeEstimate;
                    } else if (resourceQueue === resource[0] && timeProps.needsEstimate) {
                        return null;
                    }
                    return undefined;
                },
                Cell: ({ value, original }) => {
                    return value === undefined ? null : (
                        <Time
                            time={value}
                            id={original.id}
                            tooltipData={viewType === VIEW_TYPES.INITIATIVE ? getTooltipTimeData([original], resource[0]) : null}
                            progressInfo={original.timeProps.progress}
                        />
                    );
                },
                id: resource[0],
                maxWidth: columnWidths[COLUMN_TYPES.RESOURCEGROUP]
            };
        })
    ];

    return data.length ? (
        <ReactTable
            data={data}
            columns={columns}
            showPaginationBottom={false}
            showPageSizeOptions={false}
            defaultPageSize={data.length}
            className="-striped subtable"
            resizable={false}
        />
    ) : null;
};
