// Constants
import { DOMAIN_PATH_URL, INCIDENTS_PATH_URL } from '../constants/url';

export default function callApi({
  occurredBefore,
  occurredAfter,
  query,
  path = INCIDENTS_PATH_URL,
  incidentType,
  id,
} = {}) {
  const url = id
    ? `${DOMAIN_PATH_URL}${path}/${id}`
    : `${DOMAIN_PATH_URL}${path}?proximity=berlin&proximity_square=100${occurredBefore ? `&occurred_before=${occurredBefore}` : ''}${occurredAfter ? `&occurred_after=${occurredAfter}` : ''}${query ? `&query=${query}` : ''}${incidentType ? `&incident_type=${incidentType}` : ''}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`ERROR response status incorrect : ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      throw new Error(`ERROR: ${error}`);
    });
}
