import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

import {
  loadRepositories,
  setRepositories,
  setLoadRepositoriesError,
} from './actions';

describe('#loadRepositories', () => {
  it('returns an object containing the action type', () => {
    expect(loadRepositories()).toEqual({
      type: LOAD_REPOS,
    });
  });
});

describe('#setRepositories', () => {
  it('returns an object containing the action type, the username and the repositories list', () => {
    const repositories = ['repository'];
    const username = 'alexander-elgin';

    expect(setRepositories(repositories, username)).toEqual({
      type: LOAD_REPOS_SUCCESS,
      repositories,
      username,
    });
  });
});

describe('#setLoadRepositoriesError', () => {
  it('returns an object containing the action type and the error', () => {
    const error = {
      msg: 'Something went wrong!',
    };

    expect(setLoadRepositoriesError(error)).toEqual({
      type: LOAD_REPOS_ERROR,
      error,
    });
  });
});
