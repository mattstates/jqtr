import React from 'react';

export default (props) => {

    return (
        <div>
            <h2>
                <span className="error-type">😔 Error</span>: {props.message ? props.message : 'Something went wrong.'}
            </h2>
        </div>
    );
};
