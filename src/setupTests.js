/* eslint-env jest */

// Test utilities
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { IncidentModel, LocationsModel } from './utils/__mocks__/testData';
import { FetchResponse } from './utils/__mocks__/fetchResponse';

// Constants
import { DOMAIN_PATH_URL, INCIDENTS_PATH_URL, LOCATIONS_PATH_URL } from './constants/url';

configure({ adapter: new Adapter() });

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
  } if (url.includes(`${DOMAIN_PATH_URL}${LOCATIONS_PATH_URL}`)) {
    return Promise.resolve(new FetchResponse({
      fetchResponseData: new LocationsModel(),
    }));
  }

  return Promise.resolve(new FetchResponse({
    status: 404,
    fetchResponseData: {},
  }));
});
