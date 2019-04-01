import axios from 'axios';

const axiosGlobals = () => {
    axios.defaults.baseURL = 'https://bikewise.org/api';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
}

export default axiosGlobals;