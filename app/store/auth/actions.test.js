import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_REQUEST,
} from './constants';

import {
  submitSignInRequest,
  setSignInData,
  signOut,
  submitSignUpRequest,
} from './actions';

describe('auth Actions', () => {
  describe('#submitSignInRequest', () => {
    it('returns an object containing the action type and the request data', () => {
      const data = { field: 'value' };

      expect(submitSignInRequest(data)).toEqual({
        type: SIGN_IN_REQUEST,
        data,
      });
    });
  });

  describe('#setSignInData', () => {
    it('returns an object containing the action type, the user data and the token', () => {
      const token = 'GENERATED-token';
      const user = { name: 'alexander-elgin', email: 'sascha.elgin@gmail.com' };

      expect(setSignInData(user, token)).toEqual({
        type: SIGN_IN_SUCCESS,
        token,
        user,
      });
    });
  });

  describe('#signOut', () => {
    it('returns an object containing the action type', () => {
      expect(signOut()).toEqual({
        type: SIGN_OUT,
      });
    });
  });

  describe('#submitSignUpRequest', () => {
    it('returns an object containing the action type and the request data', () => {
      const data = { field: 'value' };

      expect(submitSignUpRequest(data)).toEqual({
        type: SIGN_UP_REQUEST,
        data,
      });
    });
  });
});
