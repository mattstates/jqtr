import React from 'react';

export default (props) => {
    let items;
    let classNames = props.classNames ? props.classNames : '';

    if (props.items) {
        items = (
            <ul className="error-list">
                {
                    (items = props.items.map((item, i) => {
                        return <li key={i}>{item}</li>;
                    }))
                }
            </ul>
        );
    }

    return (
        <div className={['error', ...classNames].join(' ')}>
            <h2>
                <span className="error-type">{props.type ? props.type : '😔 Error'}</span>: {props.message ? props.message : 'Something went wrong.'}
            </h2>
            {items}
        </div>
    );
};
