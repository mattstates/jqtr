import React from 'react';
import { printHoursPretty } from '../../utils/utils.js';
import { WARNING_SYMBOL } from '../../utils/constants.js';

class Time extends React.Component {
    constructor() {
        super();
        this.state = {
            mousedOver: false
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.getName = this.getName.bind(this);
    }

    handleMouseHover() {
        this.setState(this.toggleMousedOver);
    }

    toggleMousedOver(prevState) {
        return {
            mousedOver: !prevState.mousedOver
        };
    }

    getName(assignee) {
        let assigneeName = assignee && assignee.name ? assignee.name.split(' ') : [];
        const length = assigneeName.length;
        assigneeName = length > 1 ? [`${assigneeName[0]} ${assigneeName[length - 1]}`] : assigneeName;
        return assigneeName[0];
    }

    render() {
        const { assignee, time, warning } = this.props;

        let timeOutput = null;

        if (typeof time === 'number') {
            timeOutput = (
                <span className="time">
                    {printHoursPretty(time)}
                    {warning ? ` ${WARNING_SYMBOL}` : null}
                </span>
            );
        } else if (time === null) {
            timeOutput = (
                <span title="Needs Estimate" className={'warning-symbol'}>
                    {WARNING_SYMBOL}
                </span>
            );
        }
        const assigneeName = this.getName(assignee);
        const assigneeInfo = assigneeName ? (
            <div className={'assignee-panel'}>
                {/* Refactor this into a proper tool tip. */}
                <span className="bold">{`${assigneeName}`}</span>
            </div>
        ) : null;

        return (
            <div className="status" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                {this.state.mousedOver && assigneeInfo && timeOutput ? assigneeInfo : timeOutput}
            </div>
        );
    }
}

export default Time;
