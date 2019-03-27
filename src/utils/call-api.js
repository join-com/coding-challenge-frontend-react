export default function callApi({
  occurredBefore,
  occurredAfter,
  query,
  path = 'incidents',
  incidentType,
  id,
} = {}) {
  const URL_DOMAIN_PATH = `https://bikewise.org:443/api/v2/${path}`;
  const url = id
    ? `${URL_DOMAIN_PATH}/${id}`
    : `${URL_DOMAIN_PATH}?proximity=berlin&proximity_square=100${occurredBefore ? `&occurred_before=${occurredBefore}` : ''}${occurredAfter ? `&occurred_after=${occurredAfter}` : ''}${query ? `&query=${query}` : ''}${incidentType ? `&incident_type=${incidentType}` : ''}`;

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
