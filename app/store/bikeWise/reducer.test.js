import { fromJS } from 'immutable';

import reducer from './reducer';

import {
  loadItems,
  setItems,
  setLoadItemsError,
} from './actions';

describe('bikeWise Reducer', () => {
  let state;
  const initialState = {
    items: {
      data: false,
      error: false,
    },
  };

  beforeEach(() => {
    state = fromJS(initialState);
  });

  describe('default', () => {
    it('returns the initial state', () => expect(reducer()).toEqual(state));
  });

  describe('#loadItems', () => {
    it('resets the error and the items list', () => {
      const expectedResult = state.setIn(['items', 'data'], false).setIn(['items', 'error'], false);
      expect(reducer(state, loadItems())).toEqual(expectedResult);
    });
  });

  describe('#setItems', () => {
    it('resets the error and the items list', () => {
      const reps = ['repository'];
      const expectedResult = state.setIn(['items', 'data'], reps);
      expect(reducer(state, setItems(reps))).toEqual(expectedResult);
    });
  });

  describe('#setLoadItemsError', () => {
    it('sets the error', () => {
      const error = {
        msg: 'something weird happen',
      };

      const expectedResult = state.setIn(['items', 'error'], error);
      expect(reducer(state, setLoadItemsError(error))).toEqual(expectedResult);
    });
  });
});
