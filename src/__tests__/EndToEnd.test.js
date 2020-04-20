import React from 'react';
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
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

    test('An event element is collapsed by default', async () => {
        const extra = await page.$('.Event .extra');
        expect(extra).toBeNull();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.Event .more_details');

        const extra = await page.$('.Event .extra');
        expect(extra).toBeNull();
    });
});

describe('Filter events by city', () => {
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

    test('User should see a list of suggestions when they search for a city', async () => {
        await page.type('input[class=city]', 'Muni', {delay: 20});
        const suggestion = await page.$$('.suggestion');
        expect(suggestion).toHaveLength(2);
    });

    test('User can select a city from the suggested list', async () => {
        const suggestions = await page.$$('.suggestion');
        const firstCity = suggestions[0];
        await firstCity.click();

        const cityInput = await page.$('.city');
        const cityInputText = await page.evaluate(e => e.value, cityInput);
        expect(cityInputText).toEqual("Munich, Germany");
    });
});
