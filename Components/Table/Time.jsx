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
        const { assignee, time, warning } = this.props;

        let timeOutput = null;

        if (typeof time === 'number') {
            timeOutput = <span className="time">{printHoursPretty(time)}{warning ? ` ${WARNING_SYMBOL}` : null}</span>;
        } else if (time === null) {
            timeOutput = <span title="Needs Estimate" className={'warning-symbol'}>{WARNING_SYMBOL}</span>;
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
