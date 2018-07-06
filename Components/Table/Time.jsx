import React from 'react';
import { printHoursPretty } from '../../utils/utils.js';
import { WARNINGSYMBOL } from '../../utils/constants.js';

export default (props) => {
    if (typeof props.time === 'number') {
        return <span className='time' >{printHoursPretty(props.time)}{props.warning ? `  ${WARNINGSYMBOL}` : ''}</span>;
    } else if (props.time === null) {
        return (
            <span title="Needs Estimate" className={'needs-estimate'}>
                {WARNINGSYMBOL} ️️️
            </span>
        );
    }
    return null;
};
