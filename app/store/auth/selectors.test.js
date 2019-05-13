import { fromJS } from 'immutable';

import {
  selectAuth,
  makeSelectUser,
  makeSelectIsAuthenticated,
} from './selectors';

describe('auth selectors', () => {
  const user = { name: 'alexander-elgin', email: 'sascha.elgin@gmail.com' };

  const authState = fromJS({
    user,
  });

  const mockedState = fromJS({
    auth: authState,
  });

  describe('#selectAuth', () => {
    it('selects the auth state', () => expect(selectAuth(mockedState)).toEqual(authState));
  });

  describe('#makeSelectUser', () => {
    const userSelector = makeSelectUser();
    it('selects the user', () => expect(userSelector(mockedState)).toEqual(fromJS(user)));
  });

  describe('#makeSelectIsAuthenticated', () => {
    const isAuthenticatedSelector = makeSelectIsAuthenticated();

    describe('user data are NOT empty', () => {
      it('returns true', () => expect(isAuthenticatedSelector(mockedState)).toEqual(true));
    });

    describe('user data are empty', () => {
      it('returns false', () => expect(isAuthenticatedSelector(fromJS({ auth: { user: null } }))).toEqual(false));
    });
  });
});
