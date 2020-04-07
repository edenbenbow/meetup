import React, { Component } from 'react';
import {shallow} from "enzyme";
import EventList from '../EventList';
import Event from '../Event.js';


describe('<EventList /> component', () => {
    let EventListWrapper;

    test('render correct number of events', () => {
        EventListWrapper = shallow(<EventList/>);
        EventListWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
        expect(EventListWrapper.find(Event)).toHaveLength(4);
    });
});


