import { expectSaga } from 'redux-saga-test-plan';
import Immutable from 'seamless-immutable';

import { watchStartup } from '../startup.sagas';
import { StartupActions } from '../startup.redux';

describe('Startup: sagas', () => {
  const defaultState = Immutable({});

  it('should run successfully', async () => {
    await expectSaga(watchStartup)
      .withState(defaultState)
      .dispatch(StartupActions.startup())
      .run();
  });
});
