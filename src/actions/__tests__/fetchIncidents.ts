import fetchMock from 'fetch-mock';
import { fetchIncidents } from '../fetchIncidents';
import { ActionType } from '../ActionType';

describe('fetchIncidents', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches all actions with correct data', async () => {
    const dispatch = jest.fn();

    const incidents = [{ id: 1 }, { id: 2 }, { id: 3 }];

    fetchMock.getOnce(
      `end:/incidents/?incident_type=theft&per_page=1000000&proximity=Berlin`,
      {
        body: { incidents },
        headers: { 'content-type': 'application/json' }
      }
    );

    await fetchIncidents()(dispatch);
    expect(dispatch).toBeCalledWith({ type: ActionType.INCIDENTS_REQUEST });
    expect(dispatch).toBeCalledWith({
      type: ActionType.INCIDENTS_REQUEST_SUCCESS,
      payload: {
        incidents: {
          1: { id: 1 },
          2: { id: 2 },
          3: { id: 3 }
        }
      }
    });
  });

  xit('dispatches errorAction on error', async () => {
    const dispatch = jest.fn();

    fetchMock.getOnce(
      `end:/incidents/?incident_type=theft&per_page=1000000&proximity=Berlin`,
      {
        body: {},
        headers: { 'content-type': 'application/json' },
        throws: new Error('Failed to fetch')
      }
    );

    await fetchIncidents()(dispatch);
    expect(dispatch).toBeCalledWith({
      type: ActionType.INCIDENTS_REQUEST_FAILURE,
      payload: {
        message: 'Failed to fetch'
      }
    });
  });
});
