export default function callApi({
  dateTo = '',
  dateFrom = '',
  query = '',
  id,
} = {}) {
  const URL_DOMAIN_PATH = 'https://bikewise.org:443/api/v2/incidents';
  const url = id
    ? `${URL_DOMAIN_PATH}/${id}`
    : `${URL_DOMAIN_PATH}?proximity=berlin&proximity_square=100&occurred_before=${dateTo}&occurred_after=${dateFrom}&query=${query}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        console.log('ERROR response status incorrect', response.status);
        throw new Error(`ERROR response status incorrect : ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      console.log('ERROR', error);
      throw new Error(`ERROR: ${error}`);
    });
}
