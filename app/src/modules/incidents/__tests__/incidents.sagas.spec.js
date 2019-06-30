import { expectSaga } from 'redux-saga-test-plan';
import Immutable from 'seamless-immutable';

import { watchIncidents } from '../incidents.sagas';
import { IncidentsActions } from '../incidents.redux';

describe('Incidents: sagas', () => {
  const defaultState = Immutable({
    loading: false,
    list: [],
    selected: {},
    error: null,
  });
  it('requestBikeInfoFailure should run successfully', async () => {
    await expectSaga(watchIncidents)
      .withState(defaultState)
      .dispatch(IncidentsActions.requestBikeInfoFailure())
      .run();
  });
});
