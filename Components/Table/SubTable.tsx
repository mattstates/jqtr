import './SubTable.scss';
import React from 'react';
import ReactTable, { Accessor, TableCellRenderer, Column } from 'react-table';
import Status from './Status';
import Time from './Time';
import { COLUMN_TYPES, VIEW_TYPES } from '../../utils/constants';
import { getTooltipTimeData } from './tableUtils';
import { MappedJiraIssue } from '../../types/JQTRTypes';

interface ISubTableProps {
    columnWidths: { [key: string]: number };
    data: MappedJiraIssue[];
    jiraApplicationUrl: string;
    resourceList: any[];
    viewType: VIEW_TYPES;
}

const SubTable = ({
    viewType,
    jiraApplicationUrl,
    columnWidths,
    resourceList,
    data
}: ISubTableProps) => {
    const columns: Array<Column<MappedJiraIssue>> =
        // {
        //     accessor: Accessor;
        //     id?: string;
        //     sortable?: boolean;
        //     width?: number | string;
        //     minWidth?: number | string;
        //     maxWidth?: number | string;
        //     style?: object;
        //     Cell?: TableCellRenderer;
        // }[]
        [
            {
                // PLACEHOLDER - KEEPS COLUMNS ALIGNED.
                accessor: 'null',
                id: 'null',
                sortable: false,
                width: columnWidths[COLUMN_TYPES.INDEX]
            },

            {
                // INITIATIVE
                accessor: ({
                    taskNumber,
                    taskTitle
                }: {
                    taskNumber: string;
                    taskTitle: string;
                }) => (
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
                Cell: ({ original }: any) => <Status info={original} />,
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

            ...resourceList.map(resource => {
                return {
                    accessor: ({ resourceQueue, timeProps }: any) => {
                        if (resourceQueue === resource[0] && !timeProps.needsEstimate) {
                            return timeProps.timeEstimate;
                        } else if (resourceQueue === resource[0] && timeProps.needsEstimate) {
                            return null;
                        }
                        return undefined;
                    },
                    Cell: ({ value, original }: any) => {
                        return value === undefined ? null : (
                            <Time
                                time={value}
                                id={original.id}
                                tooltipData={
                                    viewType === VIEW_TYPES.INITIATIVE
                                        ? getTooltipTimeData([original], resource[0])
                                        : null
                                }
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

export default SubTable;
