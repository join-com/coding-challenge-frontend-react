import { fromJS } from 'immutable';

import reducer from './reducer';

import {
  setSignInData,
  signOut,
} from './actions';

describe('auth Reducer', () => {
  let state;
  const initialState = {
    user: null,
  };

  beforeEach(() => {
    state = fromJS(initialState);
  });

  describe('default', () => {
    it('returns the initial state', () => expect(reducer()).toEqual(state));
  });

  describe('#signOut', () => {
    it('resets the user data', () => expect(reducer(state, signOut())).toEqual(state.set('user', null)));
  });

  describe('#setSignInData', () => {
    it('sets the user', () => {
      const user = { name: 'alexander-elgin', email: 'sascha.elgin@gmail.com' };
      expect(reducer(state, setSignInData(user))).toEqual(state.set('user', user));
    });
  });
});
