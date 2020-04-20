import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import {mockEvents, mockEventsDefaultPage} from '../mock-events';
import puppeteer from "puppeteer";
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.Event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', ({ given, when, then }) => {

        let AppWrapper;
        given('events show for a location (e.g., Munich, Germany)', () => {
            AppWrapper = mount(<App />);
            AppWrapper.find('.city').simulate('change', { target: { value: 'Munich, Germany' } });
        });

        when('the user scrolls down the page of events', () => {

        });

        then('each event element will show a link for additional information', async () => {
            let visibilityElements = await page.$$('.visibility');
            expect(visibilityElements.length).toBe(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {

        let AppWrapper;
        //let EventWrapper;
        given('events show for a location (e.g., Munich)', async () => {
            AppWrapper = mount(<App />);
            await AppWrapper.find('.city').simulate('change', { target: { value: 'Munich, Germany' } });
            await AppWrapper.update();
        });

        when('the user clicks on Show Details for an event', async () => {
            let EventWrapper = await AppWrapper.find(Event);
            EventWrapper = await EventWrapper.first();
            let detailsLink = await EventWrapper.find('.more_details');
            await detailsLink.at(0).simulate('click');
            await AppWrapper.update();
        });

        then('the event element will be expanded to show the event details', async () => {
            let EventWrapper = await AppWrapper.find(Event);
            EventWrapper = await EventWrapper.first();
            expect(EventWrapper.state('showDetails')).toBe(true);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {

        let AppWrapper;
        let EventWrapper;
        given('the user has expanded an event to show its details', async () => {
            AppWrapper = mount(<App />);
            await AppWrapper.find('.city').simulate('change', { target: { value: 'Munich, Germany' } });
            await AppWrapper.update();
            AppWrapper.find('.more_details').at(0).simulate('click')
            await AppWrapper.update();
        });

        when('the user is finished reading the information', () => {

        });

        then('the user can collapse the event to hide its details', async () => {
            let EventWrapper = await AppWrapper.find(Event);
            EventWrapper = await EventWrapper.first();
            await AppWrapper.find('.more_details').at(0).simulate('click');
            await AppWrapper.update();
            expect(EventWrapper.state('showDetails')).toBe(false);
        });
    });

});

