import React from 'react';
import ReactTooltip from 'react-tooltip';
import TimeInStatus from './TimeInStatus.jsx';
import { ALERT_SYMBOL, FLAG_SYMBOL, KEYTASK_SYMBOL } from '../../utils/constants.js';

const Status = (props) => {
    const showTeamName = props.info.resourceGroup && props.info.resourceGroup.name;

    const resourceGroupWarningIcon = showTeamName ? null : (
        <span className="hasTeam" title="No Team Assigned">
            {ALERT_SYMBOL}
        </span>
    );

    const keyTaskIcon = props.info.keyTask && (
        <span className="keyTask" title="Key Task">
            {KEYTASK_SYMBOL}
        </span>
    );

    const flagsIcon = props.info.flags && (
        <span className="keyTask" title={props.info.flags}>
            {FLAG_SYMBOL}
        </span>
    );

    return (
        <div className="status" data-tip={showTeamName}>
            {props.info.status}
            <div className="iconRow">
                {resourceGroupWarningIcon}
                {keyTaskIcon}
                {flagsIcon}
            </div>
            <ReactTooltip place="top" type="dark" effect="solid" />
            {props.info.status && <TimeInStatus issueId={props.info.id} status={props.info.status} />}
        </div>
    );
};

export default Status;
