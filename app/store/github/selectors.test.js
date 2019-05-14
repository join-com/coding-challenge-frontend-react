import { fromJS } from 'immutable';

import {
  selectGithub,
  makeSelectError,
  makeSelectRepositories,
} from './selectors';

describe('github selectors', () => {
  const repos = ['repository'];
  const error = new Error('something weird happen');

  const githubState = fromJS({
    repositories: {
      data: repos,
      error,
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
});
