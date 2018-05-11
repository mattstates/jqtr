import React from 'react';
import { printHoursPretty } from '../../utils/utils.js';

class Time extends React.Component {
    constructor(props) {
        super();
    }

    /*
    * Tasks that have not been estimated have a value of null
    * When the value for the resource is a number, we will show it
    * to the user, otherwise we will notify the user that there is
    * a task that needs an estimate.
    */
    render() {
        // console.log(this.props, '<-----TIME')
        if (typeof this.props.time === 'number')
            return <span className="time">{printHoursPretty(this.props.time)}</span>;
        else if (this.props.time === null)
            return (
                <span title="Needs Estimate" className={'needs-estimate'}>
                    ⚠️
                </span>
            );
        return '';
    }
}

export default Time;
