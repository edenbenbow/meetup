import React, { Component } from 'react';
import './App.css';
import './Event.css';


class Event extends Component {
    state = {
        showDetails: false
    };

    expandCollapseDetails = () => {
        if(this.state.showDetails === false) {
            this.setState({showDetails: true});
        }
        else {
            this.setState({showDetails: false});
        }
    }

    render() {
        if (!this.props.event) return;
        const displayDetails = this.state.displayDetails;
        let details;
        if (this.state.showDetails) {
            details = (<span>
                        <li>{this.props.event.address_1}</li>
                        <li>{this.props.event.localized_location},</li>                        <li>{this.props.event.description}</li>
                        <li className="visibility">{this.props.event.visibility}</li>
                        <li><a href="https://www.meetup.com/de-DE/jug-hamburg/events/263370107/" target="_self" aria-label="Learn more about the event">Event link</a></li>
            </span>);
        }
        return (
            <div className="overview">
                <ul className="Event">
                    <li className="date_time">
                        {this.props.event.local_time} - {this.props.event.local_date}
                    </li>
                    <li className="event_name">
                        {this.props.event.name}
                    </li>
                    <li className={"group_name"}>
                        GROUP: {this.props.event.group ? this.props.event.group.name : ""}
                    </li>
                    <li className="event_rsvp">
                        {this.props.event.yes_rsvp_count} are going
                    </li>
                    {details}
                    <button className="more_details" label="Details" onClick={() => this.expandCollapseDetails()}>Details</button>
                </ul>
            </div>
        );
    }

}

export default Event;
