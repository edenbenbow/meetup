'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=uq8vhsl4s15fb5djgqs843ojc9'
    + '&client_secret=f4915g9tu9r0vk42gglpepb4ha'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://edenbenbow.github.io/meetup'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
      + '?client_id=uq8vhsl4s15fb5djgqs843ojc9'
      + '&client_secret=f4915g9tu9r0vk42gglpepb4ha'
      + '&grant_type=refresh_token'
      + '&refresh_token=' + event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token
    }),
  };
};
