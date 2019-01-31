import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

const Api = {
    fetchIncidents: ({ perPage, page, search, dateTo, dateFrom }) => {
        let maxInt = 2147483647
        let url = `incidents?page=${page}&per_page=${perPage}&query=${search}&proximity=Berlin&proximity_square=100&occurred_before=${dateTo}&occurred_after=${dateFrom}`;
        let urlPagination = `incidents?page=1&per_page=${maxInt}&query=${search}&proximity=Berlin&proximity_square=100&occurred_before=${dateTo}&occurred_after=${dateFrom}`;
        function getIncidents() {
            return instance.get(url);
        }
        function getPagination() {
            return instance.get(urlPagination);
        }
        return axios.all([getIncidents(), getPagination()])
        
    },
    fetchIncident: (id) => {
        let url = `incidents/${id}`;
        return instance.get(url);
    },
    fetchIncidentMapDetails: (title) => {
        let url = `locations?proximity=Berlin&proximity_square=100&query=${title}metal&limit=1`;
        return instance.get(url);
    }
}

export default Api;