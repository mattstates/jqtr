import React from 'react';
import { titleCase } from '../../utils/utils.js';
export default (props) => {
    return (
        <div className="viewSelector">
            {props.views.map((view, index) => {
                return (
                    <div
                        key={index}
                        className={`${view}${props.currentView === view ? ' disabled' : ''}`}
                        title={`${titleCase(view)} View`}
                        onClick={props.clickHandler.bind(null, view)}
                    />
                );
            })}
        </div>
    );
};