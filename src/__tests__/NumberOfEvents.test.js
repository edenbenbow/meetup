import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import CitySearch from "../CitySearch";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('Number of events rendered matches input value', () => {
        NumberOfEventsWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
        expect(NumberOfEventsWrapper).toHaveLength(4);
    });

    //test('render CitySearch', () => {
        //expect(NumberOfEventsWrapper.find(NumberOfEvents)).toHaveLength(1);
    //});
});
