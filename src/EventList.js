import React, { Component } from 'react';
import Event from './Event.js';
import './App.css';

class EventList extends Component {

    render() {
        //if (/*!this.props.numberSelected*/ !this.props.page || !this.props.events) return null;

        //let filteredEvents = this.props.events.slice(0, /*this.props.numberSelected*/ this.props.page);
        return (
            <ul className="EventList">
                {/*filteredEvents*/this.props.events.map(event =>
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
        );
    }
}

export default EventList;
