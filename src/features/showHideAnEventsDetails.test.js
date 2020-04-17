import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockEvents } from '../mock-events';
import puppeteer from "puppeteer";

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
        given('events show for a location (e.g., Munich, Germany)', () => {

        });

        when('the user scrolls down the page of events', () => {

        });

        then('each event element will show a link for additional information', () => {

        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('events show for a location (e.g., Munich)', () => {

        });

        when('the user clicks on Show Details for an event', () => {

        });

        then('the event element will be expanded to show the event details', () => {

        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has expanded an event to show its details', () => {

        });

        when('the user is finished reading the information', () => {

        });

        then('the user can collapse the event to hide its details', () => {

        });
    });

});

