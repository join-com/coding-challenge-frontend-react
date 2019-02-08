import axios from 'axios';

const makeUrl = urlPart => `https://bikewise.org:443/api/v2/${urlPart}`;

const getMethod = ({
    method
}) => {
    return (url, data, headers) => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const res = axios({
            url,
            //rename data params for get
            ...(method === 'get' ? { params: data } : { data }),
            method,
            headers,
            timeout: 20000,
            withCredentials: true
        });

        res.__proto__.cancel = () => source.cancel('Operation canceled by the user.');

        return res;
    };
};

export default {
    _get: getMethod({ method: 'get' }),

    getIncidents(data = {}) {
        return this._get(
            makeUrl('incidents'),
            data
        );
    }
};
