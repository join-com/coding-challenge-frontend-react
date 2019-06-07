import request from '../../utils/request';

export function getIncidents(params) {
  return request({
    url: '/incidents',
    method: 'GET',
    params
  });
}
