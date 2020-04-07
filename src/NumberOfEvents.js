import React, { Component } from 'react';
import './App.css';

class NumberOfEvents extends Component {

    state = {
        numberSelected: ''
    }

    newNumber = (event) => {
        const value = event.target.value;
        this.setState({numberSelected: value});
        this.props.changeNumberSelected(value);
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <p className="select_number_string">Show <input
                    type="number"
                    className="numbers_field"
                    value={this.props.numberSelected}
                    onChange={this.newNumber}
                /> events</p>
            </div>
        );
    }
}

export default NumberOfEvents;

