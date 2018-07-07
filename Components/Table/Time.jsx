import React from 'react';
import { printHoursPretty } from '../../utils/utils.js';
import { WARNING_SYMBOL } from '../../utils/constants.js';

export default (props) => {
    if (typeof props.time === 'number') {
        return <span className='time' >{printHoursPretty(props.time)}{props.warning ? `  ${WARNING_SYMBOL}` : ''}</span>;
    } else if (props.time === null) {
        return (
            <span title="Needs Estimate" className={'needs-estimate'}>
                {WARNING_SYMBOL} ️️️
            </span>
        );
    }
    return null;
};
