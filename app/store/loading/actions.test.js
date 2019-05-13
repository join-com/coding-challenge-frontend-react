import {
  SET_LOADING,
  RESET_LOADING,
} from './constants';

import {
  setLoading,
  resetLoading,
} from './actions';

describe('Loading Actions', () => {
  describe('#setLoading', () => {
    it('returns an object containing the action type', () => {
      expect(setLoading()).toEqual({
        type: SET_LOADING,
      });
    });
  });

  describe('#resetLoading', () => {
    it('returns an object containing the action type', () => {
      expect(resetLoading()).toEqual({
        type: RESET_LOADING,
      });
    });
  });
});
