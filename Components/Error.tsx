import './Error.scss';
import React from 'react';
import { ERROR_SYMBOL } from '../utils/constants';

function PermissionIssue() {
    // TODO: Decouple this issue from being specific to lp
    return (
        <div className="permissionsIssue">
            <p>{'You may have a permissions issue. Try to grant permission from another page within Confluence then retry your query.'}</p>
            <p>
                <a href={'/display/WDP/Targeted+Version+Map'} target={'_new'}>
                    {'Targeted Version Map'}
                </a>
            </p>
            <p>{'If this did not resolve your issue, you may need to contact the Atlassian Administrator.'}</p>
        </div>
    );
}

interface ERROR_PROPS {
    message: string;
    permissions?: boolean;
}

export default ({ message, permissions }: ERROR_PROPS) => {
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
