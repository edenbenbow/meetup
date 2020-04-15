import React, { Component } from 'react';
import './App.css';

class NumberOfEvents extends Component {

    state = {
        page: ''
    }

    changePage = (event) => {
        const value = event.target.value;
        if (isNaN(value) && value !== '') return;
        this.setState({page: value});
        this.props.changePage(value);
    };

    render() {
        if (this.props.page === undefined || !this.props.changePage) return null;

        return (
            <div className="NumberOfEvents">
                <p className="select_number_string">Show <input
                    type="number"
                    className="numbers_field"
                    value={/*this.props.numberSelected*/ this.props.page}
                    onChange={this.changePage}
                /> events</p>
            </div>
        );
    }
}

export default NumberOfEvents;

