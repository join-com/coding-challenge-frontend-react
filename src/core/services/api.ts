import { create } from 'apisauce';

const dev = 'http://192.168.88.68:9094/api/v1/';

// define the api
const api = create({
    baseURL: dev,
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer none',
    },
});

export default api;
