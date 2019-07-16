import './Error.scss';
import React from 'react';
import ERROR_SYMBOL from '../utils/constants.js';

function PermissionIssue() {
    return (
        <div className="permissionsIssue">
            <p>{'You may have a permissions issue. Try to grant permission from the Targeted Version Map then retry your query.'}</p>
            <p>
                <a href={'https://confluence.lampsplus.com:8093/display/WDP/Targeted+Version+Map'} target={'_new'}>
                    {'Targeted Version Map'}
                </a>
            </p>
            <p>{'If this did not resolve your issue, you may need to contact the Lamps Plus Atlassian Administrator.'}</p>
        </div>
    );
}

export default ({ message, permissions }) => {
    const errorMessage = `${ERROR_SYMBOL} ${message || 'Error: Something went wrong.'}`;
    const permissionsMessage = permissions ? <PermissionIssue /> : null;
    return (
        <div className="messageContainer">
            <h2>
                <span className="error-type">{errorMessage}</span>
            </h2>
            {permissionsMessage}
        </div>
    );
};
