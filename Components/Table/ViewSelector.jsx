import React from 'react';
import { titleCase } from '../../utils/utils.js';
export default ({ views, currentView, clickHandler }) => {
    return (
        <div className="viewSelector">
            {views.map((view, index) => {
                return (
                    <div
                        key={index}
                        className={`${view}${currentView === view ? ' active' : ''}`}
                        title={`${titleCase(view)} View`}
                        onClick={currentView === view ? null : clickHandler.bind(null, view)}
                    />
                );
            })}
        </div>
    );
};
