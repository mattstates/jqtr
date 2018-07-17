import React from 'react';
import { printHoursPretty } from '../../utils/utils.js';
import { WARNING_SYMBOL } from '../../utils/constants.js';

class Time extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mousedOver: false
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover(e) {
        this.setState(this.toggleMousedOver);
    }

    toggleMousedOver(prevState) {
        return {
            mousedOver: !prevState.mousedOver
        };
    }

    render() {
        const { assignee } = this.props;
        const displayTime = (
            <span className="time">
                {printHoursPretty(this.props.time)}
                {this.props.warning ? `  ${WARNING_SYMBOL}` : ''}
            </span>
        );
        const needsEstimate = (
            <span title="Needs Estimate" className={'needs-estimate'}>
                {WARNING_SYMBOL} ️️️
            </span>
        );
        let timeOutput = null;

        if (typeof this.props.time === 'number') {
            timeOutput = displayTime;
        } else if (this.props.time === null) {
            timeOutput = needsEstimate;
        }

        const assigneeInfo = assignee && assignee.name ? (
            <div className={'assignee-panel'}>
                <span>{assignee.name.split(' ')[0]}</span>
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
