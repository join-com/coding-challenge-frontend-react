// Test utilities
import { IncidentModel } from './utils/__mocks__/testData';
import { FetchResponse } from './utils/__mocks__/fetchResponse';

// Constants
import { DOMAIN_PATH_URL, INCIDENTS_PATH_URL } from './constants/url';

global.fetchResponseStatus = 200;

global.fetch = jest.fn((url) => {
  if (url.includes(`${DOMAIN_PATH_URL}${INCIDENTS_PATH_URL}`)) {
    const incidentId = Number(url.replace(`${DOMAIN_PATH_URL}${INCIDENTS_PATH_URL}/`, ''));

    if (Number.isInteger(incidentId)) {
      return Promise.resolve(new FetchResponse({
        fetchResponseData: new IncidentModel({
          id: incidentId,
        }),
      }));
    }
    return Promise.resolve(new FetchResponse());
  }

  return Promise.resolve(new FetchResponse({
    status: 404,
    fetchResponseData: {},
  }));
});
