// import fetch from 'isomorphic-fetch';

export default function callApi({
  page = 1,
  perPage = 10,
  // TODO add default value
  dateTo,
  // TODO add default value
  dateFrom,
  query = '',
  id,
} = {}) {
  let url = 'https://bikewise.org:443/api/v2/incidents';

  if (id) {
    url += `/${id}`;
  } else {
    url += `?page=${page}&per_page=${perPage}&occurred_before=${dateTo}&occurred_after=${dateFrom}&query=${query}&proximity_square=100`;
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.log('response', response);

      if (response.status !== 200) {
        console.log('ERROR response status incorrect', response.status);
        throw new Error(`ERROR response status incorrect : ${response.status}`);
      }

      return response.json();
    })
    .then((json) => {
      console.log('json', json);

      if (json.error) {
        console.log('ERROR with JSON');
        throw new Error('ERROR with JSON');
      }

      return json;
    })
    .catch((error) => {
      console.log('ERROR general');
      throw new Error(error);
    });
}
