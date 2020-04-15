import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {

  state = {
      lat: null,
      lon: null,
      page: '',
      events: []
  };

  componentDidMount() {
      this.updateEvents();
  }

  changePage(value) {
      this.setState({
          page: value
      });
      this.updateEvents(this.state.lat, this.state.lon, value);
  }

  updateEvents = (lat, lon, page) => {

      getEvents(
          lat ? lat : this.state.lat,
          lon ? lon : this.state.lon,
          (page !== undefined) ? page : this.state.page).then(events => {
              this.setState({events, lat, lon});
          }
      );
  }

  render() {
    return (
      <div className="App">
          <h1>Meetup Events</h1>
          <CitySearch updateEvents={this.updateEvents} />
          <NumberOfEvents
              page={this.state.page}
              changePage={this.changePage.bind(this)} />
          <EventList
              events={this.state.events}
              page={this.state.page} />
      </div>
    );
  }
}

export default App;
