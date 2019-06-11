import fetchMock from 'fetch-mock';
import { fetchIncident } from '../fetchIncident';
import { ActionType } from '../ActionType';

describe('fetchIncident', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches all actions with correct data', async () => {
    const dispatch = jest.fn();
    const id = 5506;
    const incident = {
      id,
      title: 'Title'
    };

    fetchMock.getOnce(`end:/incidents/${id}`, {
      body: { incident },
      headers: { 'content-type': 'application/json' }
    });

    await fetchIncident({ id })(dispatch);
    expect(dispatch).toBeCalledWith({ type: ActionType.INCIDENT_REQUEST });
    expect(dispatch).toBeCalledWith({
      type: ActionType.INCIDENT_REQUEST_SUCCESS,
      payload: { id, incident }
    });
  });

  it("doesn't pick unused props", async () => {
    const dispatch = jest.fn();
    const id = 123;
    const incident = {
      id,
      title: 'Title',
      very_useless_prop: 'lalala'
    };

    fetchMock.getOnce(`end:/incidents/${id}`, {
      body: { incident },
      headers: { 'content-type': 'application/json' }
    });

    await fetchIncident({ id })(dispatch);
    expect(dispatch).toBeCalledWith({ type: ActionType.INCIDENT_REQUEST });
    expect(dispatch).not.toBeCalledWith({
      type: ActionType.INCIDENT_REQUEST_SUCCESS,
      payload: { id, incident }
    });
  });
});
