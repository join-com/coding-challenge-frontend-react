import { fromJS } from 'immutable';

import loadingReducer from './reducer';

import {
  resetLoading,
  setLoading,
} from './actions';

describe('loadingReducer', () => {
  let state;
  const initialState = {
    anticipantsNumber: 0,
  };

  beforeEach(() => {
    state = fromJS(initialState);
  });

  describe('default', () => {
    it('returns the initial state', () => expect(loadingReducer()).toEqual(state));
  });

  describe('#setLoading', () => {
    it('increases the anticipants number', () => {
      expect(loadingReducer(state, setLoading())).toEqual(state.set('anticipantsNumber', 1));
    });
  });

  describe('#resetLoading', () => {
    let actualResult;

    describe('anticipants number is equal to 0', () => {
      it('keeps the anticipants number unchanged', () => {
        actualResult = loadingReducer(state, resetLoading());
      });
    });

    describe('anticipants number is more than 0', () => {
      beforeEach(() => {
        state = fromJS({ anticipantsNumber: 1 });
      });

      it('dereases the anticipants number', () => {
        actualResult = loadingReducer(state, resetLoading());
      });
    });

    afterEach(() => expect(actualResult).toEqual(fromJS({ anticipantsNumber: 0 })));
  });
});
