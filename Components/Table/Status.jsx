import React from 'react';
/*
* Render the Status component in the table column object. Has access to the row's data
* will show team name on hover.
*/
class Status extends React.Component {
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
        const showTeamName = this.props.info.resourceGroup && this.props.info.resourceGroup.name;
        const keyTask = this.props.info.labels &&
            Boolean(this.props.info.labels.indexOf('key_task') >= 0) && <span className="keyTask" title="Key Task">🗝</span>;

        return (
            <div className="status" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                {this.state.mousedOver && showTeamName ? showTeamName : this.props.info.status}
                <div className="iconRow">
                    {showTeamName ? null : <span className="hasTeam" title="No Team Assigned">❗</span>}
                    {keyTask}
                </div>
            </div>
        );
    }
}

export default Status;
