import './ViewSelector.scss';
import React from 'react';
import { titleCase } from '../../utils/utils';
import { VIEW_TYPES } from '../../utils/constants';

interface IViewSelectorProps {
    views: keyof VIEW_TYPES[];
    currentView: keyof VIEW_TYPES;
    clickHandler: () => {};
}

export default ({ views, currentView, clickHandler }: IViewSelectorProps) => {
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
