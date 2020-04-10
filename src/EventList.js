import React, { Component } from 'react';
import Event from './Event.js';
import './App.css';

class EventList extends Component {

    render() {
        if (!this.props.numberSelected || !this.props.events) return null;

        let filteredEvents = this.props.events.slice(0, this.props.numberSelected);
        return (
            <ul className="EventList">
                {filteredEvents.map(event =>
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
        );
    }
}

export default EventList;
