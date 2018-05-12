import React from 'react';
import { printHoursPretty } from '../../utils/utils.js';

export default (props) => {
    if (typeof props.time === 'number')
            return <span className="time">{printHoursPretty(props.time)}</span>;
        else if (props.time === null)
            // TODO: Make this link to the task with the issue.
            return (
                <span title="Needs Estimate" className={'needs-estimate'}>
                    ⚠️
                </span>
            );
        return null;
}
