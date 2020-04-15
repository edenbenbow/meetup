import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import CitySearch from "../CitySearch";
import Event from "../Event";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;

    beforeEach(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents page={'32'} changePage={(v)=>{}} />);
    });

    test('change state when text input changes', () => {
        const eventObject = { target: { value: '2' }};
        NumberOfEventsWrapper.find('.numbers_field').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state(/*'numberSelected'*/ 'page')).toBe('2');
    });

    test('render numbers textbox', () => {
        expect(NumberOfEventsWrapper.find('.numbers_field')).toHaveLength(1);
    });

    test('render show events div', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
    });

    test('numbers textbox does not accept letters', () => {
        const eventObject = { target: { value: 'a' }};
        NumberOfEventsWrapper.find('.numbers_field').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state(/*'numberSelected'*/ 'page')).toBe('');

        const eventObject2 = { target: { value: '4' }};
        NumberOfEventsWrapper.find('.numbers_field').simulate('change', eventObject2);
        expect(NumberOfEventsWrapper.state(/*'numberSelected'*/ 'page')).toBe('4');
    });

    test('renders paragraph text', () => {
        expect(NumberOfEventsWrapper.find('.select_number_string')).toHaveLength(1);
    });

});
