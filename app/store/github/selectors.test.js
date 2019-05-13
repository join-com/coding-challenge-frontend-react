import { fromJS } from 'immutable';

import {
  selectGithub,
  makeSelectError,
  makeSelectRepositories,
  makeSelectCurrentUsername,
  makeSelectSelectedUsername,
} from './selectors';

describe('github selectors', () => {
  const currentUsername = 'alex';
  const selectedUsername = 'alexander-elgin';
  const repos = ['repository'];
  const error = new Error('something weird happen');

  const githubState = fromJS({
    repositories: {
      data: repos,
      error,
    },
    username: {
      current: currentUsername,
      selected: selectedUsername,
    },
  });

  const mockedState = fromJS({
    github: githubState,
  });

  describe('#selectGithub', () => {
    it('selects the GitHub state', () => expect(selectGithub(mockedState)).toEqual(githubState));
  });

  describe('#makeSelectError', () => {
    const errorSelector = makeSelectError();
    it('select the error', () => expect(errorSelector(mockedState)).toEqual(error));
  });

  describe('#makeSelectRepositories', () => {
    const repositoriesSelector = makeSelectRepositories();
    it('select the repositories', () => expect(repositoriesSelector(mockedState)).toEqual(fromJS(repos)));
  });

  describe('#makeSelectSelectedUsername', () => {
    const currentUsernameSelector = makeSelectSelectedUsername();
    it('select the current username', () => expect(currentUsernameSelector(mockedState)).toEqual(selectedUsername));
  });

  describe('#makeSelectCurrentUsername', () => {
    const usernameSelector = makeSelectCurrentUsername();
    it('select the username', () => expect(usernameSelector(mockedState)).toEqual(currentUsername));
  });
});
