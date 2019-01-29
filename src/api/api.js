import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

const Api = {
    fetchIncidents: ({ perPage, page }) => {
        let url = `incidents?page=${page}&per_page=${perPage}&proximity_square=100&query=`;
        return instance.get(url);
    }
}

export default Api;