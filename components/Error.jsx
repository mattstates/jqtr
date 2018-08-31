import React from 'react';

function PermissionIssue() {
    return (
        <div className='permissionsIssue'>
            <p>{'You may have a permissions issue. Try to grant permission from the Targeted Version Map then retry your query.'}</p>
            <p><a href={'https://confluence.lampsplus.com:8093/display/WDP/Targeted+Version+Map'} target={'_new'}>{'Targeted Version Map'}</a></p>
            <p>{'If this did not resolve your issue, you may need to contact the Lamps Plus Atlassian Administrator.'}</p>
        </div>
    )
}

export default (props) => {
    const message = `😔 ${props.message || 'Error: Something went wrong.'}`;
    const permissionsMessage = props.permissions ? <PermissionIssue /> : null;
    return (
        <div className='messageContainer'>
            <h2>
                <span className='error-type'>{message}</span>
            </h2>
            {permissionsMessage}
        </div>
    );
};