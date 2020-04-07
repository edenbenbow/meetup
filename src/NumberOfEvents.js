import React, { Component } from 'react';
import './App.css';

class NumberOfEvents extends Component {

    newNumber = (event) => {
        const value = event.target.value;
        this.props.changeNumberSelected(value);
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <p>Show <input
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

