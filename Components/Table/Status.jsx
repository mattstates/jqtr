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
        const showTeamName =
            this.props.info.original.resourceGroup && this.props.info.original.resourceGroup.name;
        const keyTask = this.props.info.original.labels &&
            Boolean(this.props.info.original.labels.indexOf('key_task') >= 0) && (
                <span className="keyTask" />
            );

        return (
            <div
                className={`status${showTeamName && ' hasTeam'}`}
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
            >
                {keyTask}
                {this.state.mousedOver && showTeamName ? showTeamName : this.props.info.value}
            </div>
        );
    }
}

export default Status;