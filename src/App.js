import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {

  state = { numberSelected: '32'};

  changeNumber(value) {
      this.setState({
          numberSelected: value
      });
  }

  render() {
    return (
      <div className="App">
          <h1>Meetup Events</h1>
          <CitySearch />
          <NumberOfEvents
              numberSelected={this.state.numberSelected}
              changeNumberSelected={this.changeNumber.bind(this)} />
          <EventList numberSelected={this.state.numberSelected} />
      </div>
    );
  }
}

export default App;
