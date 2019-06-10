import request from '../../utils/request';

export function getIncident(id) {
  return request({
    url: `/incidents/${id}`,
    method: 'GET'
  });
}
