import { mockEvents, mockEventsDefaultPage } from './mock-events';
import axios from 'axios';

async function getSuggestions(query) {
    if (window.location.href.startsWith('http://localhost')) {
        return [
            {
                city: 'Munich',
                country: 'de',
                localized_country_name: 'Germany',
                name_string: 'Munich, Germany',
                zip: 'meetup3',
                lat: 48.14,
                lon: 11.58
            },
            {
                city: 'Munich',
                country: 'us',
                localized_country_name: 'USA',
                state: 'ND',
                name_string: 'Munich, North Dakota, USA',
                zip: '58352',
                lat: 48.66,
                lon: -98.85
            }
        ];
    }

    const token = await getAccessToken();
    if (token) {
        const url = 'https://api.meetup.com/find/locations?&sign=true&photo-host=public&query='
            + query
            + '&access_token=' + token;
        const result = await axios.get(url);
        return result.data;
    }
    return [];
}

async function getAccessToken() {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get('code');

        if (!code) {
            window.location.href = 'https://secure.meetup.com/oauth2/authorize?client_id=uq8vhsl4s15fb5djgqs843ojc9&response_type=code&redirect_uri=https://edenbenbow.github.io/meetup';
            return null;
        }
        return getOrRenewAccessToken('get', code);
    }

    const lastSavedTime = localStorage.getItem('last_saved_time');

    if (accessToken && (Date.now() - lastSavedTime < 3600000)) {
        return accessToken;
    }

    // If the access_token is expired, we try to renew it by using refresh_token
    const refreshToken = localStorage.getItem('refresh_token');
    return getOrRenewAccessToken('renew', refreshToken);

}

async function getEvents(lat, lon, page) {
    if (window.location.href.startsWith('http://localhost')) {
        return mockEvents.events.slice(0, page !== '' ? page : mockEventsDefaultPage);
    }

    const token = await getAccessToken();

    if (token) {
        let url = 'https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public'
            + '&access_token=' + token;
        // lat, lon is optional; if you have a lat and lon, you can add them
        if (lat && lon) {
            url += '&lat=' + lat + '&lon=' + lon;
        }
        if (page) {
            url += "&page=" + page;
        }
        const result = await axios.get(url);
        return result.data.events;
    }
}

async function getOrRenewAccessToken(type, key) {
    let url;
    if (type === 'get') {
        // Lambda endpoint to get token by code
        url = 'https://vpugcgyyuf.execute-api.us-west-2.amazonaws.com/dev/api/token/'
            + key;
    } else if (type === 'renew') {
        // Lambda endpoint to get token by refresh_token
        url = 'https://vpugcgyyuf.execute-api.us-west-2.amazonaws.com/dev/api/refresh_token/'
            + key;
    }

    // Use Axios to make a GET request to the endpoint
    const tokenInfo = await axios.get(url);

    // Save tokens to localStorage together with a timestamp
    localStorage.setItem('access_token', tokenInfo.data.access_token);
    localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
    localStorage.setItem('last_saved_time', Date.now());

    // Return the access_token
    return tokenInfo.data.access_token;
}

export {getSuggestions, getEvents};
