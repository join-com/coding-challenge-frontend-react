import request from '../../utils/request';

export function getLocation(params) {
  return request({
    url: '/locations/markers',
    method: 'GET',
    params
  });
}
