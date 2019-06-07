import axios from 'axios';

const ENDPOINT = 'https://bikewise.org:443/api/v2';

export interface IRequest {
  url: string;
  method: any;
  data?: object;
  params?: object;
  headers?: object;
}

function request({
  url,
  method = 'GET',
  data = {},
  params = {},
  headers = {}
}: IRequest): any {
  return axios({
    baseURL: ENDPOINT,
    url,
    method,
    params,
    headers: {
      ...headers
    },
    data
  }).then(result => result.data);
}

export default request;
