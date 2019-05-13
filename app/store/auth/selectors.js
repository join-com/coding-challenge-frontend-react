import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('auth');

const makeSelectUser = () => createSelector(
  selectAuth,
  (authState) => authState.get('user')
);

const makeSelectIsAuthenticated = () => createSelector(
  makeSelectUser(),
  (userState) => userState !== null
);

export {
  selectAuth,
  makeSelectUser,
  makeSelectIsAuthenticated,
};
