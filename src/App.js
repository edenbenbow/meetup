import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {

  state = { numberSelected: '32'};

  changeNumber(value) {
      this.setState({
          numberSelected: value
      });
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="App">
          <h1>Meetup Events</h1>
          <CitySearch updateEvents={this.updateEvents} />
          <NumberOfEvents
              numberSelected={this.state.numberSelected}
              changeNumberSelected={this.changeNumber.bind(this)} />
          <EventList numberSelected={this.state.numberSelected} events={this.state.events} />
      </div>
    );
  }
}

export default App;
