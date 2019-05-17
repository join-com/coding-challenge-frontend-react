import { create } from 'apisauce';

const baseURL = 'https://bikewise.org:443/api/v2/';

const api = create({
    baseURL,
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer none',
    },
});

export default api;
