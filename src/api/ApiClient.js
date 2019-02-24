// import axios from 'axios';

// import { serializeQueryParams } from '../global/utils/UrlHelpers';

import staticData from '../static/data.json';

// const host = 'https://bikewise.org/api/v2';

// const axiosClient = axios.create({
//   baseURL: `${host}/`,
// });

// const getDataParams = params => (
//   params
//     ? serializeQueryParams(params)
//     : ''
// );

const fakeServerRequest = (params = { latency: 2000 }) => {
  const { latency } = params;
  return new Promise((resolve, reject) => {
    if (staticData) {
      setTimeout(() => resolve({ data: staticData }), latency);
    } else {
      reject(Error('error'));
    }
  });
};

const ApiClient = {
  fetchData: () => fakeServerRequest(), // return data

  // fetchData: params => axiosClient.get(
  //   `incidents?${getDataParams(params)}`,
  // ),
};

export default ApiClient;
