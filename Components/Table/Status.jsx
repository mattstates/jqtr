import './Status.scss';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import TimeInStatus from './TimeInStatus.jsx';
import { ALERT_SYMBOL, FLAG_SYMBOL, KEYTASK_SYMBOL } from '../../utils/constants';

export default function Status({ info }) {
    const showTeamName = info.resourceGroup && info.resourceGroup.name;

    const resourceGroupWarningIcon = showTeamName ? null : (
        <span className="hasTeam" title="No Team Assigned">
            {ALERT_SYMBOL}
        </span>
    );

    const keyTaskIcon = info.keyTask && (
        <span className="keyTask" title="Key Task">
            {KEYTASK_SYMBOL}
        </span>
    );

    const flagsIcon = info.flags && (
        <span className="keyTask" title={info.flags}>
            {FLAG_SYMBOL}
        </span>
    );

    return (
        <div className="status" data-tip={showTeamName}>
            {info.status}
            <div className="iconRow">
                {resourceGroupWarningIcon}
                {keyTaskIcon}
                {flagsIcon}
            </div>
            <ReactTooltip place="top" type="dark" effect="solid" />
            {info.status && <TimeInStatus issueId={info.id} status={info.status} />}
        </div>
    );
}
