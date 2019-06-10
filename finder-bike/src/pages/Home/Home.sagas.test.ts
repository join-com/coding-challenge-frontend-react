jest.mock('../../shared/services/getIncidents', () => ({
  getIncidents: jest.fn()
}));

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getIncidents } from '../../shared/services/getIncidents';
import { getIncidentsSuccess, getIncidentsFailure } from './Home.action';
import { GET_INCIDENTS_REQUEST } from './Home.actionTypes';
import { getIncidentsAction } from './Home.sagas';
import {
  IIncidentList,
  IIncident
} from '../../shared/components/IncidentsList/IncidentsList';
import { mainSaga } from '../../App.store';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('sagas', () => {
  const mockData = [
    {
      id: 99362,
      title: 'Stolen 2016 Cube Analog(blue)',
      description:
        'There were the 2 bikes I owned parked adjacent to each other and with 1 cable lock I locked the 2 bikes together and with another cable lock I locked the bike ,which was stolen, to the bike parking station bar in the courtyard of my apartment. I came back home at about 12:30 pm on 25.04.2019 and checked the bikes and found out the incident. The thief(s) cut off the cable locks and took only 1 of the bikes and left the 2nd bike.',
      address: 'Berlin, 10827, DE',
      occurred_at: 1556179200,
      updated_at: 1560049308,
      url: 'https://bikewise.org/api/v1/incidents/99362',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/603410',
        api_url: 'https://bikeindex.org/api/v1/bikes/603410'
      },
      media: {
        image_url:
          'https://files.bikeindex.org/uploads/Pu/153579/large_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg',
        image_url_thumb:
          'https://files.bikeindex.org/uploads/Pu/153579/small_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg'
      },
      location_type: 'Thref',
      location_description: 'test',
      type: 'Theft',
      type_properties: 'test'
    }
  ];
  it('should watch Home Sagas', () => {
    const gen = mainSaga();
    expect(gen.next().value).toEqual(
      takeLatest(GET_INCIDENTS_REQUEST, getIncidentsAction)
    );
  });

  it('should dispatch action "GET_INCIDENTS_SUCCESS" with result ', () => {
    const result: IIncident[] = mockData;
    (<jest.Mock>getIncidents).mockImplementationOnce(() => ({
      incidents: [...result]
    }));

    const gen = getIncidentsAction({ params: { a: 1 } });
    expect(gen.next().value).toEqual(call(getIncidents, { a: 1 }));
    expect(gen.next({ incidents: [...result] }).value).toEqual(
      put(getIncidentsSuccess([...result]))
    );
  });

  it('should dispatch action "GET_INCIDENTS_FAILURE" with error', () => {
    const gen = getIncidentsAction({ params: { a: 1 } });
    expect(gen.next().value).toEqual(call(getIncidents, { a: 1 }));
    expect(gen.throw && gen.throw(new Error()).value).toEqual(
      put(getIncidentsFailure(new Error()))
    );
  });
});
