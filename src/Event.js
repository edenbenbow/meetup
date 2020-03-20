import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';

class Event extends Component {
    state = {
        events: [],
    };

    render() {
        return (
            <div className="Event">
                <EventList />
            </div>
        );
    }
}

export default Event;
