import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDA0YzIxYmQyZWM2MTYyZDRhZjQ5NSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTgwNjU1OTEsImV4cCI6MTY1ODQ5NzU5MX0.2jhso62qAPjRksAUBfvbmlAczW2cRld0VCreC8jHKgI';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
