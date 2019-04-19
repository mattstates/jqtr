import React from 'react';
/*
* Render the Status component in the table column object. Has access to the row's data
* will show team name on hover.
*/
class Status extends React.Component {
    constructor() {
        super();
        this.state = {
            mousedOver: false
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover() {
        this.setState(this.toggleMousedOver);
    }

    toggleMousedOver(prevState) {
        return {
            mousedOver: !prevState.mousedOver
        };
    }

    render() {
        const showTeamName = this.props.info.resourceGroup && this.props.info.resourceGroup.name;
        // customfield_13680 is currently only used to designate something as a Key Task. I am not sure why it uses an array of objects as its datatype.
        const keyTask = this.props.info.keyTask && <span className="keyTask" title="Key Task">🔑</span>;
        const flags = this.props.info.flags && <span className="keyTask" title={this.props.info.flags}>🚩</span>

        return (
            <div className="status" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                {this.state.mousedOver && showTeamName ? <span className='bold'>{showTeamName}</span> : this.props.info.status}
                <div className="iconRow">
                    {showTeamName ? null : <span className="hasTeam" title="No Team Assigned">❗</span>}
                    {keyTask}
                    {flags}
                </div>
            </div>
        );
    }
}

export default Status;
