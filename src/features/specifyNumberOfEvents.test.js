import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

import NumberOfEvents from '../NumberOfEvents';
import CitySearch from '../CitySearch';
import EventList from '../EventList';
import { mockEvents } from '../mock-events';
import puppeteer from 'puppeteer';



const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {

        let AppWrapper;
        given('a location (e.g., Munich, Germany) is showing events', () => {

            AppWrapper = mount(<App />);

        });

        when('the user does not specify the number of events to display', () => {

        });

        then('the app will show 32', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event')).toHaveLength(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('a location is showing events', () => {
            AppWrapper = mount(<App />);

        });

        when('the user selects how many events they\'d like to display', () => {
            AppWrapper.find('.numbers_field').simulate('change', { target: { value: '32' } });
        });

        then('the app will show the specified number of events', () => {
            expect(AppWrapper.find('.Event')).toHaveLength(32);
        });
    });
});
