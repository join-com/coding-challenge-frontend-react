import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import routeReducer from './reducer';

describe('route Reducer', () => {
  let state;
  const initialState = {
    location: null,
  };

  beforeEach(() => {
    state = fromJS(initialState);
  });

  describe('default', () => {
    it('returns the initial state', () => expect(routeReducer()).toEqual(state));
  });

  describe('on LOCATION_CHANGE', () => {
    it('sets the loading flag', () => {
      const location = 'new location';
      const expectedResult = state.set('location', location);
      expect(routeReducer(state, { type: LOCATION_CHANGE, payload: location })).toEqual(expectedResult);
    });
  });
});
