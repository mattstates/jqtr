import React from 'react';
import ReactTooltip from 'react-tooltip';
import { ALERT_SYMBOL, KEYTASK_SYMBOL } from '../../utils/constants.js';

const Status = (props) => {
    const teamName = props.info.resourceGroup && props.info.resourceGroup.name;
    const keyTaskIcon = props.info.labels &&
        Boolean(props.info.labels.indexOf('key_task') >= 0) && (
        <span className="keyTask" title="Key Task">
            {KEYTASK_SYMBOL}
        </span>
    );
    const resourceGroupWarningIcon = teamName ? null : (
        <span className="hasTeam" title="No Team Assigned">
            {ALERT_SYMBOL}
        </span>
    );

    return (
        <React.Fragment>
            <div className="status" data-tip={teamName}>
                {props.info.status}
                <div className="iconRow">
                    {resourceGroupWarningIcon}
                    {keyTaskIcon}
                </div>
            </div>
            <ReactTooltip />
        </React.Fragment>
    );
};

export default Status;
