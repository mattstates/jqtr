import './Time.scss'
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { WARNING_SYMBOL } from '../../utils/constants.js';
import { printHoursPretty } from '../../utils/utils.js';

function formatTooltip(tooltipData, id = '') {
    if (!tooltipData || !tooltipData.length) {
        return null;
    }
    if (tooltipData.length === 1) {
        return <div>{concatenateTimeValues(tooltipData[0])}</div>;
    }

    // Will show dupe entries for an assignee if they show up multiple times in subtasks. Maybe they should be aggregated?
    return tooltipData.map((person, i) => <div key={person.assignee + i + id}>{concatenateTimeValues(person, true)}</div>);
}

function concatenateTimeValues(tooltipPerson, includeTime = false) {
    const time = includeTime ? printHoursPretty(tooltipPerson.timeRemaining) : '';
    return `${tooltipPerson.assignee} ${tooltipPerson.needsEstimate ? WARNING_SYMBOL : time}`;
}

const Time = ({ tooltipData, time, warning, id, footerWarning, progressInfo }) => {
    let timeOutput = null;

    if (typeof time === 'number') {
        timeOutput = (
            <span className="time">
                {printHoursPretty(time)}
                {warning || footerWarning ? ` ${WARNING_SYMBOL}` : null}
            </span>
        );
    } else if (time === null) {
        timeOutput = (
            <span title="Needs Estimate" className={'warning-symbol'}>
                {WARNING_SYMBOL}
            </span>
        );
    }

    return (
        <React.Fragment>
            <div data-for={id} {...tooltipData ? { 'data-tip': '' } : null} className={'time' + (footerWarning ? ' footerWarning' : '')}>
                {timeOutput}
                {(progressInfo && typeof progressInfo.percent === 'number') && <ProgressBar percent={progressInfo.percent} />}
            </div>
            {tooltipData && <ReactTooltip place="top" type="dark" effect="solid" id={id} getContent={() => formatTooltip(tooltipData, id)} />}
        </React.Fragment>
    );

};

function ProgressBar({ percent }) {
    const percentage = `${percent}%`;
    const leftOffset = `-${100 - percent}%`;

    return (
        <div className="progress">
            <span title={percentage}>{percentage}</span>
            <div style={{ left: leftOffset }} />
        </div>
    );
}

export default Time;